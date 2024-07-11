<template>
  <div class="mt-10 flex w-full flex-col items-center justify-center">
    <div class="relative h-24">
      <input
        v-model="input"
        class="h-16 w-full p-4 text-center text-2xl text-black outline-none"
        type="text"
      />

      <button
        @click="createContactModal = true"
        v-if="contactName === '' && input !== ''"
        class="absolute bottom-0 left-1/2 w-full -translate-x-1/2 text-lg text-blue"
      >
        Add Number
      </button>

      <p
        v-else-if="contactName !== ''"
        class="absolute bottom-0 left-1/2 w-full -translate-x-1/2 text-center text-lg uppercase text-black"
      >
        {{ contactName }}
      </p>
    </div>

    <div class="mx-auto my-4 inline-grid grid-cols-3 gap-4">
      <button
        v-for="touch in touches"
        @click="input += touch.touch"
        :key="touch.touch"
        class="flex size-[60px] flex-col items-center justify-center rounded-full bg-[#e5e5e5] text-black transition-colors duration-300 hover:bg-[#d9d9d9] active:bg-[#a8a8a8]"
      >
        <span class="text-3xl">{{ touch.touch }}</span>
        <span class="text-[6px] font-bold tracking-widest">{{ touch.description }}</span>
      </button>
      <div></div>
      <a
        :disabled="input.length == 0"
        @click="addLog(input)"
        :href="'tel:' + input"
        class="flex size-[60px] items-center justify-center rounded-full bg-[#35c759] transition-colors hover:bg-[#2ea84b] active:bg-[#1e6f2c]"
      >
        <img class="size-7" src="../assets/icons/ios-call.svg" alt="" />
      </a>
      <div v-if="input.length > 0" class="flex size-[60px] items-center justify-center">
        <button @click="input = input.slice(0, -1)" class="">
          <img width="30" src="../assets/icons/icons8-clear-symbol-50.png" alt="" />
        </button>
      </div>
    </div>

    <CreateContactModal
      @close="toggleCreateContactModal(false)"
      :phone="input"
      :createContactModal="createContactModal"
    />
  </div>
</template>

<script setup lang="ts">
import { useContactsStore } from '@/stores/contacts'
import { useLogsStore } from '@/stores/logs'
import { ref, watch } from 'vue'
import CreateContactModal from './modal/CreateContactModal.vue'

const contactsStore = useContactsStore()
const logsStore = useLogsStore()

const input = ref('')
const contactName = ref('')
const createContactModal = ref(false)

const toggleCreateContactModal = (show: boolean) => {
  createContactModal.value = show
}

const addLog = (number: string) => {
  logsStore.addLog({
    id: Math.random(),
    name: contactName.value || number,
    date: new Date().toLocaleString(),
    place: 'Mobile'
  })
}

watch(
  () => input.value,
  () => {
    // Check if the input value matches a known contact
    const contact = contactsStore.getContactByNumber(input.value)
    contactName.value = contact ? contact.name : ''
  }
)

const touches = [
  {
    touch: '1',
    description: '1'
  },
  {
    touch: '2',
    description: 'ABC'
  },
  {
    touch: '3',
    description: 'DEF'
  },
  {
    touch: '4',
    description: 'GHI'
  },
  {
    touch: '5',
    description: 'JKL'
  },
  {
    touch: '6',
    description: 'MNO'
  },
  {
    touch: '7',
    description: 'PQRS'
  },
  {
    touch: '8',
    description: 'TUV'
  },
  {
    touch: '9',
    description: 'WXYZ'
  },
  {
    touch: '*',
    description: ' '
  },
  {
    touch: '0',
    description: '+'
  },
  {
    touch: '#',
    description: ' '
  }
]
</script>
