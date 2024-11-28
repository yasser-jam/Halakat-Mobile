export const useAuthStore = defineStore('auth' ,() => {
    
    const teacherStore = useTeacherStore()


    const login = async (name: string, password: string) => {
        // if (password != `${name}-123`) return

        await teacherStore.list()

        const { teacher, teachers } = storeToRefs(teacherStore)

        teacher.value = teachers.value.find(t => `${t.first_name} ${t.last_name}` == name) || initTeacher()

    }
    
    return {
        login
    }
})