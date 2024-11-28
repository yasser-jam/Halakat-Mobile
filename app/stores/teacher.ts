export const useTeacherStore = defineStore('teacher', () => {
    
    const teacher = ref<Teacher>(initTeacher())

    const teachers = ref<Teacher[]>([])

    const list = async () => {
        const res = await api('teachers')

        teachers.value = res
    }

    const getInfo = async (id: number) => {
        const res = await api(`teachers/mobile/${id}`)

        teacher.value = res

        return teacher.value
    }
    
    
    return {
        list,
        teacher,
        teachers,
        getInfo
    }
})