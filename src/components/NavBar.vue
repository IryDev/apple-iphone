<template>
  <header class="mx-auto flex max-w-[1024px]">
    <nav class="flex w-full items-center justify-between gap-1 p-4 lg:px-20 lg:py-8">
      <img class="flex-none" src="../assets/icons/apple.svg" alt="Apple" width="15" height="15" />
      <ul
        :class="!burgerMenu ? 'h-screen opacity-100 duration-500' : 'h-0 opacity-0 duration-500'"
        class="absolute left-0 top-0 z-50 flex h-0 w-full origin-top flex-col items-start gap-4 bg-[#161617] p-12 opacity-0 lg:relative lg:size-full lg:flex-row lg:justify-between lg:bg-transparent lg:px-4 lg:py-0 lg:opacity-100 lg:transition-none"
      >
        <li v-for="link in navLinks" :key="link">
          <a
            href="#"
            class="text-3xl font-medium text-white transition lg:text-sm lg:font-normal lg:text-gray lg:hover:text-white"
            >{{ link }}</a
          >
        </li>
      </ul>
      <div class="flex items-center gap-6">
        <img src="../assets/icons/search.svg" alt="Search" width="15" height="15" />
        <img src="../assets/icons/bag.svg" alt="Bag" width="15" height="15" />

        <button
          @click="burgerMenu = !burgerMenu"
          class="relative z-50 flex h-5 w-4 gap-2 lg:hidden"
        >
          <div
            :class="burgerMenu ? '-translate-y-1 rotate-0' : '-rotate-45'"
            class="absolute bottom-1/2 left-1/2 top-1/2 h-[1px] w-full origin-center -translate-x-1/2 bg-white duration-300"
          ></div>
          <div
            :class="burgerMenu ? 'translate-y-1 rotate-0' : 'rotate-45'"
            class="absolute bottom-1/2 left-1/2 top-1/2 h-[1px] w-full origin-center -translate-x-1/2 bg-white duration-300"
          ></div>
        </button>
      </div>
    </nav>

    <div class="navMobileScrollBg absolute top-0 h-screen w-full">
      <div
        :class="navMobileScroll ? 'h-56' : 'h-12'"
        class="nav-on-scroll height-transition fixed left-0 top-0 z-[1000] flex h-12 w-full -translate-y-[300px] flex-col items-center border-b border-white/30 bg-black/50 p-4 py-6 pt-2 backdrop-blur-lg lg:!h-12 lg:!items-center"
      >
        <div class="flex w-full items-center justify-between lg:max-w-[1024px]">
          <p class="text-2xl font-medium text-white">iPhone 15 Pro</p>
          <div class="flex items-center justify-center gap-4">
            <ul class="hidden gap-4 lg:flex">
              <li class="text-xs text-gray-100">Overview</li>
              <li class="cursor-pointer text-xs hover:text-blueHover">
                Switch from android to iphone
              </li>
              <li class="cursor-pointer text-xs hover:text-blueHover">Tech Specs</li>
            </ul>
            <div class="flex items-center justify-center gap-4">
              <button class="cursor-pointer" @click="navMobileScroll = !navMobileScroll">
                <img
                  :class="navMobileScroll ? 'rotateX-180' : ''"
                  class="transition-transform duration-300 lg:hidden"
                  :src="chevronDown"
                  alt="Chevron Down"
                  width="15"
                  height="15"
                />
              </button>

              <button
                class="rounded-full bg-blue px-4 py-1 text-xs text-white transition-colors duration-300 hover:bg-blueHover"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
        <ul
          :class="navMobileScroll ? 'opacity-1' : 'pointer-events-none opacity-0'"
          class="mt-6 flex flex-col gap-4 self-baseline pl-8 transition-opacity duration-300 lg:hidden"
        >
          <li class="text-lg font-light">Overview</li>
          <li class="cursor-pointer text-lg hover:text-blueHover">Switch from android to iPhone</li>
          <li class="cursor-pointer text-lg hover:text-blueHover">Tech Specs</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { chevronDown } from '@/utils/icons'
import { onMounted, ref } from 'vue'

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

const navMobileScroll = ref(false)

// put the body in pointer-events none and blur when the mobile nav is open

onMounted(() => {
  const navOnScroll = document.querySelector('.nav-on-scroll') as HTMLElement
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      navOnScroll.style.transform = 'translateY(0)'
    } else {
      navOnScroll.style.transform = 'translateY(-350px)'
    }
  })
})
</script>

<style scoped>
.rotateX-180 {
  transform: rotateX(180deg);
}

.height-transition {
  transition-duration: 0.5s;
}
</style>
