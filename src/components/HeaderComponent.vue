<template>
  <section class="w-full">
    <header class="flex h-[calc(100vh-60px)] w-full flex-col items-center justify-center">
      <h1 class="text-3xl font-medium text-gray-200">iPhone 15 Pro</h1>
      <div class="w-8/12 md:w-10/12">
        <video v-if="windowWidth > 768" muted autoplay id="video">
          <source :src="hero" type="video/mp4" />
        </video>
        <video v-else muted autoplay id="video">
          <source :src="smallHero" type="video/mp4" />
        </video>
      </div>
      <UiButton id="buy" class="mb-8">Buy</UiButton>
      <p id="price" class="text-xl font-medium text-white">From $999 or $41.62/mo. for 24 mo.</p>
    </header>
  </section>
</template>

<script setup lang="ts">
import { hero, smallHero } from '@/utils/videos'
import gsap from 'gsap'
import { onMounted, onUnmounted, ref } from 'vue'
import UiButton from './ui/UiButton.vue'

// Reactive reference for window width
const windowWidth = ref(window.innerWidth)

// Update windowWidth on window resize
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWindowWidth)
  gsap.from('video', { opacity: 0, duration: 2 })
  gsap.from('h1', { opacity: 0, y: -100, duration: 2, delay: 1 })
  gsap.from('#buy, #price', { opacity: 0, y: 100, duration: 2, delay: 1, stagger: 0.5 })
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth)
})
</script>
