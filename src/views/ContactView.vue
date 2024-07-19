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

    <div class="search-bar-container flex items-center gap-2 rounded-lg bg-[#efeef1] px-2 py-0.5">
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
          fill="#9ca3af"
          fillOpacity="0.8"
        />
      </svg>
      <input
        type="text"
        class="search-bar w-full border-none bg-transparent text-black outline-none placeholder:font-light"
        placeholder="Search"
        v-model="search"
        id="search"
      />
      <svg
        class="svg-icon"
        style="vertical-align: middle; fill: #9ca3af; overflow: hidden"
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

    <div class="alphabet alphabet-line-height absolute right-2.5 top-52">
      <div class="flex flex-col items-center gap-0">
        <p class="-leading-2 font-regulat flex flex-col text-center text-[10px] text-blue">
          <span v-for="letter in alphabet" :key="letter">
            {{ letter }}
          </span>
        </p>
      </div>
    </div>

    <div class="separator w-full border-b border-[#eeeeee] p-2" />
    <div class="contact flex items-center gap-4 py-2">
      <div class="avatar flex h-12 w-12 items-center justify-center rounded-full bg-[#979da8]">
        <p class="text-2xl">JD</p>
      </div>
      <div class="contact-info">
        <h2 class="text-lg font-bold text-black">John Doe</h2>
        <p class="text-xs text-gray-400">My Card</p>
      </div>
    </div>
    <div class="separator mb-6 w-full border-b border-[#eeeeee]" />

    <div class="contacts-list max-h-[320px] overflow-scroll">
      <div v-for="letter in alphabet" :key="letter">
        <div v-if="sortContactsByAlphabet(contacts)[letter].length > 0">
          <h2 class="mt-4 text-sm text-gray">{{ letter }}</h2>
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

    <CreateContactModal
      @close="toggleCreateContactModal(false)"
      :createContactModal="createContactModal"
    />
  </div>
</template>

<script setup lang="ts">
import { useContactsStore } from '@/stores/contacts'
import { computed, ref } from 'vue'
import CreateContactModal from '../components/modal/CreateContactModal.vue'

const search = ref('')

const createContactModal = ref(false)

const contactsStore = useContactsStore()

const toggleCreateContactModal = (show: boolean) => {
  createContactModal.value = show
}

const contacts = computed(() => {
  return contactsStore.contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(search.value.toLowerCase())
  })
})

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#'

const sortContactsByAlphabet = (contacts: any) => {
  const sortedContacts: any = {}

  for (const letter of alphabet) {
    sortedContacts[letter] = contacts.filter((contact: any) => {
      const contactLastName = contact.name.split(' ')[1]
      return contactLastName[0].toUpperCase() === letter
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
