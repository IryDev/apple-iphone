<template>
  <div class="phone relative my-12 h-screen">
    <img
      class="pointer-events-none relative z-10 h-screen"
      src="../assets/img/frame-portrait.png"
      alt=""
    />

    <div
      class="absolute left-[50%] top-[50%] z-0 h-[calc(100vh-15px)] w-[calc(100%-15px)] translate-x-[-50%] translate-y-[-50%] rounded-[65px] bg-white p-6 pb-24"
    >
      <div
        class="fixed left-0 top-8 flex h-2 w-[calc(100%-20px)] items-center justify-between px-4 pl-12"
      >
        <div class="time px-4">
          <span class="text-md font-bold text-black">{{ time }}</span>
        </div>

        <div class="status flex items-center gap-2">
          <img width="15" height="15" src="../assets/icons/ios-signal.png" alt="" />
          <img width="18" height="18" src="../assets/icons/ios-wifi.png" alt="" />
          <img width="25" height="22" src="../assets/icons/ios-battery-full.svg" alt="" />
        </div>
      </div>

      <RouterView />
      <PhoneBar />
    </div>
  </div>
</template>

<script setup lang="ts">
import KeyPad from './KeyPad.vue'
import PhoneBar from './PhoneBar.vue'
import { ref } from 'vue'

const time = ref('9:41')

const updateTime = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  if (minutes < 10) {
    time.value = `${hours}:0${minutes}`
    return
  }
  time.value = `${hours}:${minutes}`
}

setInterval(updateTime, 1000)
</script>
