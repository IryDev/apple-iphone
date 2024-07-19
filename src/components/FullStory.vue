<template>
  <section class="h-full bg-zinc">
    <div class="screen-max-width">
      <div class="mb-12 w-full px-5 pt-28 lg:mb-24 lg:px-10 lg:pt-40">
        <h2 id="explore" class="section-heading font-bold">Explore the full story.</h2>
      </div>

      <div class="flex flex-col overflow-hidden lg:items-start lg:justify-center">
        <div class="mb-24 mt-16 pl-12 md:pl-16 lg:mt-32">
          <h2 class="text-5xl font-bold lg:text-7xl">iPhone.</h2>
          <h2 class="text-5xl font-bold lg:text-7xl">Forged in titanium.</h2>
        </div>
      </div>

      <div
        class="flex grid-cols-2 grid-rows-2 flex-col items-center justify-center gap-4 sm:px-10 md:grid lg:gap-8 lg:pb-8"
      >
        <div
          class="col-span-2 row-span-1 flex h-[450px] items-end justify-end bg-black lg:size-full"
        >
          <video muted id="design-video" class="" src="../assets/videos/explore.mp4"></video>
        </div>

        <div
          class="flex size-full h-[450px] items-center justify-center overflow-hidden bg-black sm:h-[450px] md:col-span-1 lg:row-auto lg:size-full"
        >
          <img id="explore-1" src="../assets/img/explore1.jpg" alt="" />
        </div>

        <div
          class="flex h-[450px] items-center justify-center overflow-hidden bg-black sm:h-[450px] md:col-span-1 md:size-full lg:row-auto"
        >
          <img id="explore-2" class="object-cover" src="../assets/img/explore2.jpg" alt="" />
        </div>
      </div>

      <div class="text-container grid-cols-2 gap-4 px-20 py-10 pb-32 md:grid">
        <p id="exp-desc-1" class="mb-4 self-baseline text-xl font-medium text-gray-100 md:px-12">
          iPhone 15 Pro is
          <span class="text-white"
            >the first iPhone to feature an aerospace‑grade titanium design</span
          >, using the same alloy that spacecraft use for missions to Mars.
        </p>
        <p id="exp-desc-2" class="self-baseline text-xl font-medium text-gray-100 md:px-12">
          Titanium has one of the best strength‑to‑weight ratios of any metal, making these our
          <span class="text-white">lightest Pro models ever</span>. You’ll notice the difference the
          moment you pick one up.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const video = document.getElementById('design-video') as HTMLVideoElement

  ScrollTrigger.create({
    trigger: video,
    start: 'top 50%',
    toggleActions: 'restart pause reverse pause',
    onEnter: () => {
      video.play()
    },
    onLeave: () => {
      video.pause()
    }
  })

  gsap.from('#explore', {
    opacity: 0,
    duration: 1,
    y: 200,
    scrollTrigger: {
      trigger: '#explore',
      start: 'top 95%',
      toggleActions: 'restart reverse restart reverse'
    }
  })

  gsap.from('#explore-1', {
    opacity: 0.4,
    duration: 1,
    scale: 1.4,
    scrollTrigger: {
      trigger: '#explore-1',
      start: 'top 50%',
      toggleActions: 'restart reverse restart reverse'
    }
  })

  gsap.from('#explore-2', {
    opacity: 0.4,
    duration: 1,
    scale: 1.4,
    scrollTrigger: {
      trigger: '#explore-2',
      start: 'top 50%',
      toggleActions: 'restart reverse restart reverse'
    }
  })

  gsap.from('#exp-desc-1', {
    opacity: 0,
    duration: 1,
    y: 200,
    scrollTrigger: {
      trigger: '#exp-desc-1',
      start: 'top 80%',
      toggleActions: 'restart reverse restart reverse'
    }
  })

  gsap.from('#exp-desc-2', {
    opacity: 0,
    duration: 1,
    y: 200,
    scrollTrigger: {
      trigger: '#exp-desc-2',
      start: 'top 80%',
      toggleActions: 'restart reverse restart reverse'
    }
  })
})
</script>
