<script setup lang="ts">
import type { Student } from '~/types'

defineProps<{
  student: Student
}>()
</script>

<template>
  <div class="card rounded-sm bg-white p-2">
    <div class="flex items-center gap-2">
      <div class="h-8 w-8 flex items-center justify-center rounded-full bg-slate-100">
        <Icon v-if="!student.image_url" name="mdi:account" size="large" class="text-primary" />
        <img v-else src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" class="z-90">
      </div>

      <div class="text-xs font-semibold">
        {{ `${student.first_name} ${student.last_name}` }}
      </div>
      <div class="grow" />

      <div class="badge badge-primary badge-sm text-white">
        {{ getClass(student.educational_class) }}
      </div>
    </div>
  </div>
</template>
