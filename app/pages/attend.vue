<script setup lang="ts">
const loading = ref<boolean>(false)
//   const group = teacherStore.teacher.groups?.[0];

//   const studentsAttend = ref<any>(
//     group.students?.map((stud) => ({
//       ...stud,
//       attendance: 1000,
//     }))
//   );

const students = [
  {
    id: 1,
    attendance: 'attend',
  },
  {
    id: 2,
    attendance: 'attend',
  },
  {
    id: 3,
    attendance: 'attend',
  },
  {
    id: 4,
    attendance: 'attend',
  },
  {
    id: 5,
    attendance: 'missed',
  },
] as any

const counter = ref(0)
</script>

<template>
  <div class="p-8 container">
    <div class="title">
      التفقد والحضور
    </div>

    <base-loader v-if="loading" />

    <template v-else>
      <div :key="counter" class="flex flex-col gap-2">
        <template v-for="student in students" :key="student.id">
          <student-attend-card v-model="student.attendance" @update:model-value="counter++" />
        </template>
      </div>

      <button class="btn-block btn-primary mt-4 text-white btn">
        إرسال
      </button>
    </template>
  </div>
</template>
