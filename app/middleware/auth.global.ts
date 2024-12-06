export default defineNuxtRouteMiddleware((to: any) => {
  const token = useCookie('halakat_mobile_access_token')

  if (token.value)
    return

  if (to.name?.includes('sign-student'))
    return

  if (to.name?.includes('auth'))
    return

  return navigateTo('/auth/login')
})
