<template>
  <div class="phone relative my-12 h-[670px]">
    <img
      class="pointer-events-none relative z-10 h-[670px]"
      src="../assets/img/frame-portrait.png"
      alt=""
    />

    <div
      class="absolute left-[50%] top-[50%] z-0 h-[calc(670px-15px)] w-[calc(100%-15px)] translate-x-[-50%] translate-y-[-50%] rounded-[45px] bg-white p-6 pb-24"
    >
      <div
        class="fixed left-0 top-6 flex h-2 w-[calc(100%-5px)] items-center justify-between px-4 pl-12"
      >
        <div class="time">
          <span class="text-sm font-bold text-black">{{ time }}</span>
        </div>

        <div class="status flex items-center gap-2 pr-2">
          <img width="15" height="15" src="../assets/icons/ios-signal.png" alt="" />
          <img width="15" height="15" src="../assets/icons/ios-wifi.png" alt="" />
          <img width="25" height="25" src="../assets/icons/ios-battery.png" alt="" />
        </div>
      </div>

      <RouterView />
      <PhoneBar />

      <div class="absolute bottom-4 left-1/2 h-1 w-24 -translate-x-1/2 rounded-3xl bg-black" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import PhoneBar from './PhoneBar.vue'

const time = ref('9:41')

const updateTime = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  time.value = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`
  return time.value
}

setInterval(updateTime, 1000)
</script>
