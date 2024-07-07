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
    { id: 1, name: 'Stephen Curry', place: 'San Francisco', date: '2021/01/01' },
    { id: 2, name: 'Lebron James', place: 'Los Angeles', date: '2021/01/02' },
    { id: 3, name: 'Kevin Durant', place: 'Brooklyn', date: '2021/01/03' },
    { id: 4, name: 'Klay Thompson', place: 'San Francisco', date: '2021/01/04' },
    { id: 5, name: 'Draymond Green', place: 'San Francisco', date: '2021/01/05' },
    { id: 6, name: 'James Harden', place: 'Brooklyn', date: '2021/01/06' },
    { id: 7, name: 'Russell Westbrook', place: 'Washington', date: '2021/01/07' },
    { id: 8, name: 'Chris Paul', place: 'Phoenix', date: '2021/01/08' },
    { id: 9, name: 'Carmelo Anthony', place: 'Portland', date: '2021/01/09' },
    { id: 10, name: 'Dwyane Wade', place: 'Miami', date: '2021/01/10' },
    { id: 11, name: 'Dirk Nowitzki', place: 'Dallas', date: '2021/01/11' },
    { id: 12, name: 'Tim Duncan', place: 'San Antonio', date: '2021/01/12' },
    { id: 13, name: 'Tony Parker', place: 'San Antonio', date: '2021/01/13' },
    { id: 14, name: 'Manu Ginobili', place: 'San Antonio', date: '2021/01/14' },
    { id: 15, name: 'Kobe Bryant', place: 'Los Angeles', date: '2021/01/15' },
    { id: 16, name: 'Michael Jordan', place: 'Chicago', date: '2021/01/16' },
    { id: 17, name: 'Magic Johnson', place: 'Los Angeles', date: '2021/01/17' },
    { id: 18, name: 'Larry Bird', place: 'Boston', date: '2021/01/18' }
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
