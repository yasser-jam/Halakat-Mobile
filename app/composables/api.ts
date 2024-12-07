export default (url: string, options?: any) => {
  // const toasterStore = useToasterStore()

  const config = useRuntimeConfig()

  const token = useCookie('halakat_mobile_access_token')

  const res = $fetch(`${config.public.apiUrl}/${url}`, {
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
    ...options,
  }).catch((error: any) => {
    if (error.status == 401)
      return navigateTo('/auth/login')
  })

  return res
}
