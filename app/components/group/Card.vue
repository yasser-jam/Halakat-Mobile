<script setup lang="ts">
defineProps<{
  group: Group
  teacherName: string
}>()
</script>

<template>
  <div class="flex items-center justify-between bg-white p-4">
    <div>
      <div class="text-xl font-bold">
        {{ group.title }}
      </div>

      <div class="mt-2 text-xs text-gray-400">
        {{ teacherName }}
      </div>

      <div class="text-primary mt-4 flex items-center gap-2 text-xs">
        <Icon name="mdi:account-multiple" />
        <div>الدورة الصيفية</div>
      </div>
    </div>

    <!-- <div class="text-primary text-center font-semibold">
      <div class="text-xl">
        04
      </div>
      <div class="text-xl -mt-1">
        الخميس
      </div>
    </div> -->
  </div>
</template>
