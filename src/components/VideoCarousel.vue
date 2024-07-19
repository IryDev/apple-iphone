<template>
  <div class="flex items-center">
    <div class="w-full sm:p-10" id="slider">
      <div class="video-carousel_container">
        <div
          class="flex h-full w-full items-center justify-center overflow-hidden bg-black md:rounded-3xl"
        >
          <video id="video" class="h-full w-full object-cover" preload="auto" muted autoplay>
            <source src="../assets/videos/highlight1.mp4" type="video/mp4" />
          </video>
        </div>

        <div class="absolute left-8 top-8">
          <p class="text-lg font-medium text-white lg:text-2xl">
            Enter A17 Pro. <br />
            Game‑changing chip. <br />
            Groundbreaking performance.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="relative mt-16 flex size-7 w-full items-center justify-center pb-32">
    <div
      class="flex h-14 w-44 items-center justify-between rounded-full bg-[#333335] px-7 py-5 backdrop-blur"
    >
      <span
        v-for="(_, index) in hightlightsSlides"
        :key="index"
        class="transition-width mx-1 h-2.5 w-2.5 cursor-pointer rounded-full bg-[#999999] duration-200"
      >
        <span class="progress h-full rounded-full bg-white" />
      </span>
    </div>

    <button
      class="ml-4 flex size-14 items-center justify-center rounded-full bg-[#333335] backdrop-blur transition-colors duration-200 hover:bg-[#666666] active:bg-[#333333]"
    >
      <img :src="play" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { pause, play, replay } from '@/utils/icons'
import { hightlightsSlides } from '@/utils/videos'
</script>
