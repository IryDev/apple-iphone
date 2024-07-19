<template>
  <section id="benchmark" class="common-padding">
    <div class="screen-max-width">
      <div class="flex flex-col items-center justify-center">
        <img
          id="chip"
          class="lg:size-50 py-32"
          width="200"
          height="200"
          src="../assets/img/chip.jpeg"
          alt="Apple A17 Pro chip"
        />
        <h2 class="text-3xl font-medium text-white lg:text-7xl">A17 Pro chip.</h2>
        <h2 class="mb-8 text-center text-3xl font-medium text-white lg:text-7xl">
          A monster win for gaming
        </h2>
        <h3 class="mb-12 text-center text-xl text-gray-100 lg:text-3xl">
          It’s here. The biggest redesign in the history of Apple GPUs.
        </h3>

        <div class="relative mb-12 py-12">
          <img class="relative z-10" src="../assets/img/frame.png" alt="" />
          <video
            class="absolute bottom-0 left-1/2 top-1/2 w-[calc(100%-20px)] -translate-x-1/2 -translate-y-1/2 rounded-[20px] md:rounded-[50px] lg:w-[calc(100%-30px)] lg:rounded-[80px]"
            muted
            loop
            autoplay
            src="../assets/videos/frame.mp4"
          ></video>
        </div>

        <p class="font-medium text-gray-200">Honkai: Star Rail</p>

        <div class="mt-12 flex flex-col justify-between px-12 md:flex-row md:gap-24 lg:px-24">
          <div id="a17" class="flex max-w-[470px] flex-1 flex-col">
            <p class="text-xl text-gray">
              A17 Pro is an entirely new class of iPhone chip that delivers our
              <span class="text-white">best graphics performance by far</span>.
            </p>
            <p class="mt-4 text-xl text-gray">
              Mobile <span class="text-white">games will look and feel so immersive</span>, with
              incredibly detailed environments and more realistic characters. And with
              industry-leading speed and efficiency, A17 Pro takes fast and runs with it.
            </p>
          </div>

          <div id="gpu" class="mt-12 flex-1 lg:mt-0">
            <p class="text-2xl font-medium text-gray">New</p>
            <p class="my-2 text-2xl font-bold lg:text-5xl">Pro-class GPU</p>
            <p class="text-2xl font-medium text-gray">with 6 cores</p>
          </div>
        </div>
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
  const chip = document.getElementById('chip') as HTMLImageElement

  gsap.from(chip, {
    opacity: 0,
    scale: 2,
    y: 100,
    duration: 2,
    scrollTrigger: {
      trigger: chip,
      start: 'top 10%'
    }
  })

  gsap.from('#a17', {
    opacity: 0,
    duration: 1,
    y: 200,
    scrollTrigger: {
      trigger: '#a17',
      start: 'top 95%'
    }
  })

  gsap.from('#gpu', {
    opacity: 0,
    duration: 1,
    y: 200,
    scrollTrigger: {
      trigger: '#gpu',
      start: 'top 95%'
    }
  })
})
</script>
