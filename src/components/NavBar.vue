<template>
  <header class="mx-auto flex max-w-[1024px]">
    <nav class="flex w-full items-center justify-between gap-1 p-4 lg:px-20 lg:py-8">
      <img class="flex-none" src="../assets/icons/apple.svg" alt="Apple" width="15" height="15" />
      <ul
        :class="burgerMenu ? 'h-screen opacity-100 duration-500' : 'h-0 opacity-0 duration-500'"
        class="absolute left-0 top-0 z-50 flex h-0 w-full origin-top flex-col items-start gap-4 bg-[#161617] p-12 opacity-0 lg:relative lg:size-full lg:flex-row lg:justify-between lg:bg-transparent lg:px-4 lg:py-0 lg:opacity-100 lg:transition-none"
      >
        <li v-for="link in navLinks" :key="link">
          <a
            href="#"
            class="text-2xl font-medium text-white transition lg:text-sm lg:font-normal lg:text-gray lg:hover:text-white"
            >{{ link }}</a
          >
        </li>
      </ul>
      <div class="flex items-center gap-6">
        <img src="../assets/icons/search.svg" alt="Search" width="15" height="15" />
        <img src="../assets/icons/bag.svg" alt="Bag" width="15" height="15" />

        <button
          @click="burgerMenu = !burgerMenu"
          class="relative z-50 flex h-4 w-4 gap-2 lg:hidden"
        >
          <div
            :class="burgerMenu ? '-translate-y-0.5 rotate-0' : '-rotate-45'"
            class="absolute bottom-1/2 left-1/2 top-1/2 h-[1px] w-full origin-center -translate-x-1/2 bg-white duration-300"
          ></div>
          <div
            :class="burgerMenu ? 'translate-y-0.5 rotate-0' : 'rotate-45'"
            class="absolute bottom-1/2 left-1/2 top-1/2 h-[1px] w-full origin-center -translate-x-1/2 bg-white duration-300"
          ></div>
        </button>
      </div>
    </nav>

    <div
      class="nav-on-scroll fixed left-0 top-0 z-[1000] flex h-12 w-full translate-y-[-100px] items-center justify-center border-b border-white/30 bg-black/50 p-4 py-6 backdrop-blur-lg transition-transform duration-1000"
    >
      <div class="flex w-full items-center justify-between lg:max-w-[1024px]">
        <h1 class="text-2xl font-medium text-white">iPhone 15 Pro</h1>
        <div class="flex items-center justify-center gap-4">
          <ul class="hidden gap-4 lg:flex">
            <li class="text-xs text-gray-100">Overview</li>
            <li class="cursor-pointer text-xs hover:text-blueHover">
              Switch from android to iphone
            </li>
            <li class="cursor-pointer text-xs hover:text-blueHover">Tech Specs</li>
          </ul>
          <button
            class="rounded-full bg-blue px-4 py-1 text-xs text-white transition-colors duration-300 hover:bg-blueHover"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const burgerMenu = ref(true)

const navLinks: string[] = [
  'Store',
  'Mac',
  'iPad',
  'iPhone',
  'Watch',
  'Vision',
  'AirPods',
  'TV & Home',
  'Entertainment',
  'Accessories',
  'Support'
]

import { onMounted } from 'vue'

onMounted(() => {
  const navOnScroll = document.querySelector('.nav-on-scroll') as HTMLElement
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      navOnScroll.style.transform = 'translateY(0)'
    } else {
      navOnScroll.style.transform = 'translateY(-100px)'
    }
  })
})
</script>
