export const useLayoutStore = defineStore('layout', () => {
  const refresh = (refreshFun: any) => {
    refreshFun()
  }

  return {
    refresh,
  }
})
