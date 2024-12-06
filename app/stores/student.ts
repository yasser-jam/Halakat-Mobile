import type { Student } from '~/types'

export const useStudentStore = defineStore('student', () => {
  const students = ref<Student[]>([])

  return {
    students,
  }
})
