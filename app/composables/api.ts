export default (url: string, options?: any) => {
  // const toasterStore = useToasterStore()

  const config = useRuntimeConfig()

  const token = useCookie('halakat_mobile_access_token')

  try {
    const res = $fetch(`${config.public.apiUrl}/${url}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      ...options,
    })

    return res
  }
  catch (error) {
    // toasterStore.error('حدث خطأ ما، يرجى إعادة المحاولة')
  }
}
