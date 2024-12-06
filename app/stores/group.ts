export const useGroupStore = defineStore('group', () => {
  const group = ref<Group>(initGroup())

  return {
    group,
  }
})
