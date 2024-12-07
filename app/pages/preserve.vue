<script setup lang="ts">
const groupStore = useGroupStore()
const { group } = storeToRefs(groupStore)

const studentName = ref('')

const students = ref(group.value.students)

function search() {
  if (!studentName.value?.length) {
    return students.value = group.value.students
  }
  students.value = group.value?.students?.filter(stud => stud.first_name.includes(studentName.value))
}
</script>

<template>
  <div class="h-screen p-4 container">
    <div class="grid">
      <input
        v-model="studentName" class="input input-bordered input-md w-full" placeholder="اسم الطالب"
        @update:model-value="search"
      >

      <div class="mt-4">
        <student-preserve-card v-for="student in students" :key="student.id" :student :group-name="group.title" class="mb-2" />
      </div>
    </div>
  </div>
</template>
