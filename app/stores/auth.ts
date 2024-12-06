export const useAuthStore = defineStore('auth', () => {
  const user = ref<Teacher>(initTeacher())

  const token = useCookie('halakat_mobile_access_token')

  const studentStore = useStudentStore()
  const teacherStore = useTeacherStore()
  const groupStore = useGroupStore()

  const login = async (phoneNumber: string, password: string) => {
    const res = await api('auth/login', {
      method: 'POST',
      body: {
        mobile_phone_number: phoneNumber,
        password,
      },
    })

    token.value = res.access_token

    user.value = res
  }

  const me = async () => {
    const res = await api('auth/mobile/profile', {
      method: 'POST',
    })

    // save value
    const { teacher } = storeToRefs(teacherStore)

    teacher.value = res

    const { group } = storeToRefs(groupStore)

    group.value = res.groups?.[0]

    user.value = res
  }

  return {
    login,
    me,
    user,
  }
})
