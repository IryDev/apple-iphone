<template>
  <div class="p-6 px-0">
    <div class="flex justify-between">
      <button class="relative text-blue">Edit</button>
    </div>
    <h1 class="text-2xl font-bold text-black">Recents</h1>

    <div class="recents-list max-h-[450px] overflow-scroll">
      <div v-for="log in logs" :key="log.id">
        <div class="recent flex items-center justify-between gap-4 py-2">
          <div class="flex flex-col">
            <h2 class="-mb-1 text-sm font-semibold text-black">{{ log.name }}</h2>
            <p class="text-xs text-gray-400">{{ log.place }}</p>
          </div>

          <div class="recents-infos flex items-center gap-2">
            <p class="text-xs text-gray-400">{{ todayYesterday(formatDate(log.date)) }}</p>
            <img width="20" height="20" src="../assets/icons/ios-info.svg" alt="" />
          </div>
        </div>
        <div class="separator w-full border-b border-[#eeeeee]" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLogsStore } from '@/stores/logs'
import dayjs from 'dayjs'

const logsStore = useLogsStore()

const logs = logsStore.logs

const formatDate = (date: string) => {
  // return only date without time
  return dayjs(date).format('MM/DD/YY')
}

const todayYesterday = (date: string) => {
  const today = dayjs().format('MM/DD/YY')
  console.log(today, date)

  return today === date
    ? 'Today'
    : dayjs().isSame(dayjs(today).subtract(1, 'day'), date)
      ? 'Yesterday'
      : date
}

logsStore.loadLogs()
</script>

<style scoped>
.recents-list::-webkit-scrollbar {
  display: none;
}

.recents-list {
  scrollbar-width: none;
}
</style>
