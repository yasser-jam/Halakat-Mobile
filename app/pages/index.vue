<script setup lang="ts">
const online = useOnline()

const loading = ref(false)
const groupStore = useGroupStore()
const teacherStore = useTeacherStore()

const { group } = storeToRefs(groupStore)
</script>

<template>
  <div class="p-8 container">
    <base-loader v-if="loading" />

    <template v-else>
      <group-card :group :teacher-name="`${teacherStore.teacher.first_name} ${teacherStore.teacher.last_name}`" />

      <div class="title mt-8">
        الطلاب
      </div>

      <div class="max-h-[400px] overflow-auto">
        <student-card v-for="student in group.students" :key="student.id" :student class="mb-2" />
      </div>
    </template>
  </div>
</template>
