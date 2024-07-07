<template>
  <section class="common-padding h-full">
    <div class="scrim-max-width">
      <div class="mb-12 w-full lg:mb-24">
        <h2 id="closer" class="section-heading font-bold">Take a closer look.</h2>
      </div>
      <div class="flex w-full flex-col items-center justify-center">
        <div
          class="gallery-image relative my-16 flex min-h-[450px] w-full items-center justify-center lg:my-20"
        >
          <img
            class="img-active absolute h-[450px] object-contain opacity-0 transition-opacity duration-500 lg:w-2/3"
            v-for="(color, index) in colors"
            :class="{ 'opacity-100': selectedIndex === index }"
            :key="index"
            :src="color.img"
            :alt="color.desc"
          />
        </div>

        <p class="desc-iphone max-w-[200px] text-center text-xs lg:max-w-[450px]">
          {{ colors[selectedIndex].desc }}
        </p>

        <div
          class="selector mt-2 flex h-14 w-60 items-center justify-between rounded-full bg-[#2e2e30] p-4"
        >
          <div class="selector-item">
            <input
              checked
              type="radio"
              name="color"
              id="all-colors"
              @click="switchColor(0)"
              class="peer hidden"
            />
            <label
              for="all-colors"
              class="flex size-8 cursor-pointer items-center justify-center rounded-full border-2 border-transparent transition-colors duration-500 peer-checked:border-2 peer-checked:border-white"
            >
              <span class="block size-6 overflow-hidden rounded-full">
                <img src="../assets/img/swatch_all_colors__c9qrpw0te4q6_large_2x.jpg" alt="" />
              </span>
            </label>
          </div>

          <div v-for="(color, index) in colors.slice(1)" :key="index" class="selector-item">
            <input
              type="radio"
              name="color"
              :id="color.desc"
              @click="switchColor(index + 1)"
              class="peer hidden"
            />
            <label
              :for="color.desc"
              class="flex size-8 cursor-pointer items-center justify-center rounded-full border-2 border-transparent transition-colors duration-500 peer-checked:border-2 peer-checked:border-white"
            >
              <span
                class="block size-6 overflow-hidden rounded-full"
                :style="{ backgroundColor: color.color }"
              ></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { onMounted, ref } from 'vue'
import {
  allColors,
  blackTitanium,
  blueTitanium,
  naturalTitanium,
  whiteTitanium
} from '../utils/images'

gsap.registerPlugin(ScrollTrigger)

const colors = [
  {
    img: allColors,
    desc: '6.1” iPhone 15 Pro2 in four colors'
  },
  {
    img: naturalTitanium,
    desc: '6.7” iPhone 15 Pro Max2 and 6.1” iPhone 15 Pro2 in Natural Titanium',
    color: '#8f8a81'
  },
  {
    img: blueTitanium,
    desc: '6.7” iPhone 15 Pro Max2 and 6.1” iPhone 15 Pro2 in Blue Titanium',
    color: '#202630'
  },
  {
    img: whiteTitanium,
    desc: '6.7” iPhone 15 Pro Max2 and 6.1” iPhone 15 Pro2 in White Titanium',
    color: '#c9c8c2'
  },
  {
    img: blackTitanium,
    desc: '6.7” iPhone 15 Pro Max2 and 6.1” iPhone 15 Pro2 in Black Titanium',
    color: '#1e1e1e'
  }
]

const selectedIndex = ref(0)

const switchColor = (index: number) => {
  selectedIndex.value = index
}

onMounted(() => {
  gsap.from('#closer', {
    opacity: 0,
    duration: 1,
    y: 200,
    scrollTrigger: {
      trigger: '#closer',
      start: 'top 95%',
      toggleActions: 'restart reverse restart reverse'
    }
  })
})
</script>
