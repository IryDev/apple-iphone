<template>
  <div class="p-6 px-0">
    <div class="flex justify-between">
      <p class="flex items-center gap-2 text-blue">
        <img class="rotate-180" src="../assets/icons/right.svg" alt="" />
        List
      </p>
      <button class="relative mr-2" @click="createContactModal = true">
        <div class="absolute top-1/2 h-[1px] w-3 -translate-y-1/2 bg-blue"></div>
        <div class="absolute top-1/2 h-[1px] w-3 -translate-y-1/2 rotate-90 bg-blue"></div>
      </button>
    </div>
    <h1 class="mb-2 text-2xl font-bold text-black">Contacts</h1>

    <div class="search-bar-container flex items-center gap-2 rounded-3xl bg-[#efeef1] px-2 py-1">
      <svg
        className="cursor-pointer"
        width="15"
        height="15"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.8063 10.8713L8.50685 7.57204C9.10449 6.78005 9.46342 5.79795 9.46342 4.73146C9.46342 2.12276 7.3414 0 4.73171 0C2.12288 0 0 2.12276 0 4.73146C0 7.34101 2.12288 9.46292 4.73171 9.46292C5.79826 9.46292 6.78041 9.10401 7.57244 8.50639L10.8718 11.8056C11.0006 11.9344 11.1702 12 11.3391 12C11.5079 12 11.6767 11.9352 11.8063 11.8056C12.0646 11.5473 12.0646 11.1296 11.8063 10.8713ZM0.937816 4.73146C0.937816 2.63939 2.64038 0.937767 4.73171 0.937767C6.82389 0.937767 8.5256 2.64024 8.5256 4.73146C8.5256 6.82268 6.82389 8.52515 4.73171 8.52515C2.63953 8.52515 0.937816 6.82353 0.937816 4.73146Z"
          fill="#333333"
          fillOpacity="0.8"
        />
      </svg>
      <input
        type="text"
        class="search-bar w-full border-none bg-transparent text-black outline-none"
        placeholder="Search"
        v-model="search"
        id="search"
      />
      <svg
        class="svg-icon"
        style="vertical-align: middle; fill: #222222; overflow: hidden"
        width="24"
        height="24"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M512 672c70.4 0 128-57.6 128-128V224c0-70.4-57.6-128-128-128s-128 57.6-128 128v320c0 70.4 57.6 128 128 128z"
        />
        <path
          d="M704 384c-15.4 0-28 12.6-28 28v138c0 90.4-73.6 164-164 164s-164-73.6-164-164v-138c0-15.4-12.6-28-28-28s-28 12.6-28 28v138c0 111.8 83.8 204.4 192 218.2V872h-72c-15.4 0-28 12.6-28 28s12.6 28 28 28h200c15.4 0 28-12.6 28-28s-12.6-28-28-28h-72v-103.8c108.2-13.8 192-106.4 192-218.2v-138c0-15.4-12.6-28-28-28z"
        />
      </svg>
    </div>

    <div class="separator mb-2 mt-2 border-b border-gray-200"></div>

    <div class="alphabet alphabet-line-height absolute right-2.5 top-52">
      <div class="flex flex-col items-center gap-0">
        <p class="-leading-2 font-regulat flex flex-col text-center text-[10px] text-blue">
          <span v-for="letter in alphabet" :key="letter">
            {{ letter }}
          </span>
        </p>
      </div>
    </div>

    <div class="contact flex items-center gap-4 py-2">
      <div class="avatar flex h-12 w-12 items-center justify-center rounded-full bg-[#979da8]">
        <p class="text-2xl">JD</p>
      </div>
      <div class="contact-info">
        <h2 class="text-lg font-bold text-black">John Doe</h2>
        <p class="text-xs text-gray-400">My Card</p>
      </div>
    </div>

    <div class="contacts-list max-h-[350px] overflow-scroll">
      <div v-for="letter in alphabet" :key="letter">
        <div v-if="sortContactsByAlphabet(contacts)[letter].length > 0">
          <h2 class="text-sm text-gray">{{ letter }}</h2>
          <div class="separator w-full border-b border-[#eeeeee]" />
          <div v-for="contact in sortContactsByAlphabet(contacts)[letter]" :key="contact.id">
            <div class="contact flex items-center gap-4 py-1">
              <div class="contact-info">
                <h2 class="text-sm text-black">
                  <span>
                    {{ contact.name.split(' ')[0] }}
                  </span>
                  {{ ' ' }}
                  <span class="font-semibold">
                    {{ contact.name.split(' ')[1] }}
                  </span>
                </h2>
              </div>
            </div>
            <div class="separator w-full border-b border-[#eeeeee]" />
          </div>
        </div>
      </div>
    </div>

    <div
      id="modal"
      v-if="createContactModal"
      class="shadow-modal absolute left-0 top-12 z-20 h-[calc(100%-48px)] w-[calc(100%)] rounded-2xl rounded-b-[40px] bg-[#f3f2f9] p-4 px-6"
    >
      <div class="flex flex-col justify-center">
        <div class="flex justify-between">
          <button @click="createContactModal = false" class="flex items-center gap-2 text-blue">
            Cancel
          </button>
          <p class="font-semibold text-black">New contact</p>
          <button @click="createContact" class="flex items-center gap-2 text-blue">Done</button>
        </div>

        <div
          class="mt-4 flex size-36 items-center justify-center self-center rounded-full bg-[#979da8]"
        >
          <img class="w-full" src="../assets/icons/profile-circle.svg" alt="" />
        </div>

        <button
          class="mt-2 w-[150px] self-center rounded-2xl bg-[#e3e3e3] px-2 py-1 font-semibold text-black"
        >
          Add a photo
        </button>

        <div class="-mx-4 mt-4 min-h-[120px] border-b border-t border-[#d8d8d8] bg-white">
          <input
            class="p-2 px-4 text-black outline-none"
            type="text"
            name="name"
            id="Name"
            v-model="name"
            placeholder="Name"
            autocomplete="off"
          />
          <div class="separator mx-4 mb-2 border-b border-gray-200"></div>
          <input
            class="px-4 text-black outline-none"
            type="text"
            placeholder="Last name"
            autocomplete="off"
            id="lastName"
            v-model="lastName"
          />
          <div class="separator mx-4 mb-2 mt-2 border-b border-gray-200"></div>
          <input
            class="mb-2 px-4 text-black outline-none"
            type="text"
            placeholder="Company"
            id="Company"
            name="company"
            autocomplete="off"
          />
        </div>

        <div class="-mx-4 mt-8 flex items-center border-b border-t border-[#d8d8d8] bg-white">
          <div
            class="relative ml-4 flex size-6 items-center justify-center rounded-full bg-[#35c759]"
          >
            <div class="absolute top-1/2 h-[1px] w-3 -translate-y-1/2 bg-white"></div>
            <div class="absolute top-1/2 h-[1px] w-3 -translate-y-1/2 rotate-90 bg-white"></div>
          </div>
          <input
            class="p-2 px-4 text-black outline-none placeholder:text-black"
            type="text"
            v-model="phone"
            name="phone"
            autocomplete="off"
            placeholder="add a number"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import contactsStore from '../store/contactsStore'
import { useContactsStore } from '@/stores/contacts'
import { computed, ref } from 'vue'

const search = ref('')
const name = ref('')
const lastName = ref('')
const phone = ref('')
const createContactModal = ref(false)

const contactsStore = useContactsStore()

const contacts = computed(() => {
  return contactsStore.contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(search.value.toLowerCase())
  })
})

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#'

function createContact() {
  createContactModal.value = false

  console.log(name.value, phone.value)

  contactsStore.addContact({
    id: Math.floor(Math.random() * 1000),
    name: name.value + ' ' + lastName.value,
    phone: phone.value
  })
}

const sortContactsByAlphabet = (contacts: any) => {
  const sortedContacts: any = {}

  for (const letter of alphabet) {
    sortedContacts[letter] = contacts.filter((contact: any) => {
      return contact.name[0].toUpperCase() === letter
    })
  }

  return sortedContacts
}
</script>

<style scoped>
.search-bar {
  scrollbar-width: none;
}

.contacts-list::-webkit-scrollbar {
  display: none;
}

.contacts-list {
  scrollbar-width: none;
}

.alphabet-line-height {
  line-height: 1.2;
}
</style>
