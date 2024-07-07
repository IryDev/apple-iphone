<template>
  <div class="flex items-center">
    <div
      v-for="(slide, index) in hightlightsSlides"
      class="mr-10 w-full pr-10 sm:pr-20"
      id="slider"
      :key="slide.id"
    >
      <div class="video-carousel_container">
        <div
          class="flex h-full w-full items-center justify-center overflow-hidden bg-black md:rounded-3xl"
        >
          <video
            id="video"
            :src="slide.video"
            class="h-full w-full object-cover"
            preload="auto"
            muted
            :videoId="slide.id"
            :ref="(el) => (videoRef[index] = el)"
            :onPlay="
              () => {
                setVideo((prevVideo) => ({ ...prevVideo, isPlaying: true }))
              }
            "
            autoplay
          >
            <source :src="slide.video" type="video/mp4" />
          </video>
        </div>

        <div class="absolute left-8 top-8">
          <p
            v-for="text in slide.textLists"
            class="text-lg font-medium text-white lg:text-2xl"
            :key="text"
          >
            {{ text }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="relative mt-16 flex size-7 w-full items-center justify-center">
    <div
      class="flex h-14 w-44 items-center justify-between rounded-full bg-[#333335] px-7 py-5 backdrop-blur"
    >
      <span
        @click="() => handleProcess('video-change', index)"
        v-for="(_, index) in videoRef"
        :key="index"
        :ref="(el) => (videoDivRef[index] = el)"
        class="transition-width mx-1 h-2.5 w-2.5 cursor-pointer rounded-full bg-[#999999] duration-200"
      >
        <span
          :ref="(el) => (videoSpanRef[index] = el)"
          class="progress h-full rounded-full bg-white"
        />
      </span>
    </div>

    <button
      @click="
        isLastVideo
          ? () => handleProcess('video-reset')
          : isPlaying
            ? () => handleProcess('video-pause')
            : () => handleProcess('video-play')
      "
      :aria-label="isLastVideo ? 'Replay' : isPlaying ? 'Pause' : 'Play'"
      class="ml-4 flex size-14 items-center justify-center rounded-full bg-[#333335] backdrop-blur transition-colors duration-200 hover:bg-[#666666] active:bg-[#333333]"
    >
      <img
        :src="isLastVideo ? replay : isPlaying ? pause : play"
        :alt="isLastVideo ? 'Replay' : isPlaying ? 'Pause' : 'Play'"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { pause, play, replay } from '@/utils/icons'
import { hightlightsSlides } from '@/utils/videos'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { onMounted, reactive, ref, watchEffect } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const videoRef = ref<string[]>([])
const videoSpanRef = ref([])
const videoDivRef = ref([])

let video = reactive({
  isEnd: false,
  startPlay: false,
  videoId: 0,
  isLastVideo: false,
  isPlaying: false
})

const setVideo = (value: any) => {
  video = { ...video, ...value }
}

const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video

const handleProcess = (type: string, index?: number) => {
  // switch case for the event
  switch (type) {
    case 'video-end':
      // set the startPlay to true
      setVideo((prevVideo) => ({ ...prevVideo, isEnd: true, videoId: index + 1 }))
      break
    case 'video-last':
      // set the isPlaying to true
      setVideo((prevVideo) => ({ ...prevVideo, isLastVideo: true }))
      break
    case 'video-reset':
      // set the startPlay to false
      setVideo((prevVideo) => ({ ...prevVideo, startPlay: false, videoId: 0 }))
      break
    case 'video-change':
      // set the startPlay to true
      setVideo((prevVideo) => ({ ...prevVideo, startPlay: true, videoId: index }))
      break
    case 'video-play':
      // set the isPlaying to true
      setVideo((prevVideo) => ({ ...prevVideo, isPlaying: !prevVideo.isPlaying }))
      break
    default:
      break
  }
}
</script>
