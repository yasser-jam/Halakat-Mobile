<script setup>
const online = useOnline()

const authStore = useAuthStore()

const loading = ref(false)

async function refresh() {
  loading.value = true

  try {
    await authStore.me()
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-none">
      <button class="btn-square btn-ghost btn">
        <label for="my-drawer">
          <svg
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            class="inline-block h-5 w-5 stroke-current"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
      </button>
    </div>

    <div class="flex-1">
      <a class="btn-ghost text-xl btn">مسجد الشيخ علي الدقر</a>
    </div>

    <div class="flex-none">
      <Icon v-if="!online" name="mdi:wifi-off" />

      <div class="dropdown dropdown-bottom dropdown-end">
        <button tabindex="0" class="btn-square btn-ghost btn">
          <svg
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            class="inline-block h-5 w-5 stroke-current"
          >
            <path
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </button>

        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow">
          <li>
            <a class="flex items-center" @click="refresh">
              <Icon name="mdi:refresh" />
              تحديث
              <span v-if="loading" class="loading loading-spinner loading-sm" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
