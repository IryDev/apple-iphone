<template>
  <div class="mt-10 flex w-full flex-col items-center justify-center md:mt-20">
    <div class="relative h-24 lg:h-32">
      <input
        v-model="input"
        class="h-16 w-full p-4 text-center text-3xl text-black outline-none"
        type="text"
      />
      <a
        v-if="input"
        href=""
        class="absolute bottom-0 left-1/2 -translate-x-1/2 text-lg text-blue md:bottom-8"
        >Add Number</a
      >
    </div>

    <div class="mx-auto my-4 inline-grid grid-cols-3 gap-3 lg:gap-6">
      <button
        v-for="touch in touches"
        @click="input += touch.touch"
        :key="touch.touch"
        class="flex size-[60px] flex-col items-center justify-center rounded-full bg-[#e5e5e5] text-black lg:size-[70px]"
      >
        <span class="text-3xl">{{ touch.touch }}</span>
        <span class="text-[8px] font-bold tracking-widest">{{ touch.description }}</span>
      </button>
      <div></div>
      <a
        :href="'tel:' + input"
        class="flex size-[60px] items-center justify-center rounded-full bg-[#35c759] lg:size-[70px]"
      >
        <img class="size-8" src="../assets/icons/ios-call.svg" alt="" />
      </a>
      <button
        @click="input = input.slice(0, -1)"
        class="flex size-[70px] items-center justify-center"
      >
        <img width="30" src="../assets/icons/icons8-clear-symbol-50.png" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')

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
