<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})

const authStore = useAuthStore()

const router = useRouter()

const phoneNumber = ref<string>('')
const password = ref<string>('')

const loading = ref<boolean>(false)

async function login() {
  loading.value = true

  try {
    await authStore.login(phoneNumber.value, password.value)

    router.push('/')
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="rounded-lg bg-white px-12 py-8">
    <div class="text-primary font-weight-bold mb-12 text-center text-xl">
      تسجيل الدخول
    </div>

    <div>رقم الهاتف</div>
    <input v-model="phoneNumber" class="input input-bordered w-full" type="text">

    <div class="my-2">
      كلمة المرور
    </div>

    <input v-model="password" class="input input-bordered w-full" type="password">

    <div class="flex justify-center">
      <button class="btn-primary mx-auto mt-4 text-white btn" @click="login">
        تسجيل الدخول
      </button>
    </div>
  </div>
</template>
