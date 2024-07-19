import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

interface Log {
  id: number
  name: string
  place: string
  date: string
}

export const useLogsStore = defineStore('logs', () => {
  const logs = ref<Log[]>([])

  const selectedLog = ref<Log | null>(null)

  const selectedLogIndex = computed(() => {
    return logs.value.findIndex((log: Log) => log.id === selectedLog.value?.id)
  })

  function deleteLog(log: Log) {
    const index = logs.value.findIndex((l: Log) => l.id === log.id)
    logs.value.splice(index, 1)
  }

  const initialLogs: Log[] = [
    { id: 1, name: 'Stephen Curry', place: 'San Francisco', date: '7/03/24' },
    { id: 2, name: 'Klay Thompson', place: 'Los Angeles', date: '7/04/24' },
    { id: 3, name: 'Draymond Green', place: 'San Francisco', date: '6/30/24' },
    { id: 4, name: 'Kevin Durant', place: 'New York', date: '6/29/24' },
    { id: 5, name: 'Andre Iguodala', place: 'Miami', date: '6/28/24' }
  ]

  const loadLogs = () => {
    logs.value = initialLogs
    logs.value.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
  }

  function addLog(log: Log) {
    logs.value.push(log)
  }

  logs.value = initialLogs
  logs.value.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return {
    logs,
    initialLogs,
    selectedLog,
    selectedLogIndex,
    deleteLog,
    loadLogs,
    addLog
  }
})
