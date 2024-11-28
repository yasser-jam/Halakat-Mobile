<script setup lang="ts">
</script>

<template>
  <div class="card rounded-sm bg-white p-2">
    <div class="flex items-center gap-2">
      <div class="avatar">
        <div class="w-8 rounded-full">
          <img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg">
        </div>
      </div>

      <div class="text-xs font-semibold">
        {{ `معاذ المحسن` }}
      </div>
      <!-- <div class="text-xs font-semibold">{{ `${student.first_name} ${student.last_name}` }}</div> -->
      <div class="grow" />

      <div class="badge badge-primary badge-sm text-white">
        {{ getClass(4) }}
      </div>
    </div>
  </div>
</template>
