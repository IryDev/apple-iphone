<template>
  <div
    v-if="data.createContactModal"
    class="absolute left-0 top-12 z-20 h-[calc(100%-48px)] w-[calc(100%)] rounded-b-[40px] rounded-t-[40px] bg-[#f3f2f9] p-4 px-6"
  >
    <div class="flex flex-col justify-center">
      <div class="flex justify-between">
        <button @click="closeAndResetModal" class="flex items-center gap-2 text-blue">
          Cancel
        </button>
        <p class="font-semibold text-black">New contact</p>
        <button @click="createContact" class="flex items-center gap-2 text-blue">Done</button>
      </div>

      <div
        class="mt-4 flex size-36 items-center justify-center self-center rounded-full bg-[#979da8]"
      >
        <img class="w-full" src="../../assets/icons/profile-circle.svg" alt="" />
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
          v-model="data.name"
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
          v-model="data.lastName"
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
          :value="props.phone"
          name="phone"
          autocomplete="off"
          placeholder="add a number"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useContactsStore } from '@/stores/contacts'
import { defineEmits, reactive, watch } from 'vue'

const props = defineProps<{
  createContactModal: boolean
  phone?: string
}>()

const data = reactive({
  phone: props.phone || '',
  name: '',
  lastName: '',
  createContactModal: props.createContactModal
})

const closeAndResetModal = () => {
  data.createContactModal = false
  emit('close') // Emit an event to notify the parent component
}

const emit = defineEmits(['close'])

const contactsStore = useContactsStore()

const createContact = () => {
  contactsStore.addContact({
    id: Math.random(),
    name: data.name + ' ' + data.lastName,
    phone: data.phone
  })
  data.createContactModal = false
}

watch(
  () => props.createContactModal,
  () => {
    data.createContactModal = props.createContactModal
  }
)
</script>
