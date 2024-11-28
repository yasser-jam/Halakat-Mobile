<script setup lang="ts">
const online = useOnline()

const loading = ref(false)
</script>

<template>
  <div class="p-8 container">
    <base-loader v-if="loading" />

    <template v-else>
      <group-card />

      <div class="title mt-8">
        الطلاب
      </div>

      <div class="max-h-[400px] overflow-auto">
        <student-card v-for="i in 10" :key="i" class="mb-2" />
      </div>
    </template>
  </div>
</template>
