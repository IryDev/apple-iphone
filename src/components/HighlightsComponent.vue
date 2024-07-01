<template>
  <section class="common-padding h-full w-screen bg-zinc">
    <div class="max-w-[100vw]">
      <div class="mb-8 flex flex-col justify-between lg:flex-row lg:items-center">
        <h3 id="highlights" class="section-heading font-bold">Get the highlights.</h3>

        <div class="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-5">
          <p id="film" class="flex text-blue">
            Watch the film

            <img class="ml-2" src="../assets/icons/watch.svg" alt="" />
          </p>
          <p id="event" class="flex items-center text-blue">
            Watch the event
            <img class="ml-2" src="../assets/icons/right.svg" alt="" />
          </p>
        </div>
      </div>

      <VideoCarousel />
    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { onMounted } from 'vue'
import VideoCarousel from './VideoCarousel.vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('#highlights', {
    opacity: 0,
    duration: 1,
    y: 200,
    scrollTrigger: {
      trigger: '#highlights',
      start: 'top 95%',
      toggleActions: 'restart reverse restart reverse'
    }
  })

  gsap.from('#event, #film', {
    opacity: 0,
    duration: 1,
    y: 200,
    stagger: 0.5,
    scrollTrigger: {
      trigger: '#event, #film',
      start: 'top 95%',
      toggleActions: 'restart reverse restart reverse'
    }
  })
})
</script>
