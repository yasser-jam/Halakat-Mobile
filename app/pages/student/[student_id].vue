<script setup lang="ts">
const groupStore = useGroupStore()

const { group } = storeToRefs(groupStore)

const route = useRoute()

const studentId = (route.params as any).student_id

const student = computed(() => {
  return group.value?.students?.find(el => el.id === Number(studentId))
})
</script>

<template>
  <div v-if="student" class="mx-auto p-8 container">
    <div class="mb-10 flex flex-col items-center justify-center">
      <div class="h-20 w-20 flex items-center justify-center rounded-full bg-slate-100">
        <Icon v-if="!student.image_url" name="mdi:account" size="xxx-large" class="text-primary" />
        <img v-else src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" class="z-90">
      </div>

      <div class="text-gray-700 font-semibold">
        {{ `${student.first_name} ${student.last_name}` }}
      </div>
    </div>

    <div class="text-xs font-semibold">
      معلومات الأب
    </div>

    <div class="grid mb-12">
      <div class="flex items-center justify-between">
        <div class="mt-2 flex items-center gap-2">
          <div class="text-xs text-gray-500">
            اسم الأب
          </div>
          <div class="badge badge-primary">
            {{ `${student.father_name}` }}
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="mt-2 flex items-center gap-2">
          <div class="text-xs text-gray-500">
            حالة الأب
          </div>
          <div class="badge badge-primary">
            {{ student.father_status }}
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="mt-2 flex items-center gap-2">
          <div class="text-xs text-gray-500">
            رقم هاتف الأب
          </div>
          <div class="badge badge-primary">
            {{ student.father_phone_number }}
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="mt-2 flex items-center gap-2">
          <div class="text-xs text-gray-500">
            عمل الأب
          </div>
          <div class="badge badge-primary">
            {{ student.father_phone_number }}
          </div>
        </div>
      </div>
    </div>

    <div class="text-xs font-semibold">
      معلومات الأم
    </div>

    <div class="grid mb-12">
      <div class="flex items-center justify-between">
        <div class="mt-2 flex items-center gap-2">
          <div class="text-xs text-gray-500">
            اسم الأم
          </div>
          <div class="badge badge-error">
            {{ student.mother_name }}
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="mt-2 flex items-center gap-2">
          <div class="text-xs text-gray-500">
            حالة الأم
          </div>
          <div class="badge badge-error">
            {{ student.mother_status }}
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="mt-2 flex items-center gap-2">
          <div class="text-xs text-gray-500">
            رقم هاتف الأم
          </div>
          <div class="badge badge-error">
            {{ student.mother_phone_number }}
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="mt-2 flex items-center gap-2">
          <div class="text-xs text-gray-500">
            عمل الأم
          </div>
          <div class="badge badge-error">
            {{ student.mother_job }}
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="mt-2 flex items-center gap-2">
          <div class="text-xs text-gray-500">
            حالة الزواج
          </div>
          <div class="badge badge-error">
            {{ student.parent_marital_status }}
          </div>
        </div>
      </div>
    </div>

    <div class="text-xs font-semibold">
      معلومات الحفظ
    </div>

    <div class="grid mb-12">
      <div class="flex items-center justify-between">
        <div class="mt-2 flex items-center gap-2">
          <div class="text-xs text-gray-500">
            الأجزاء المحفوظة
          </div>

          <div v-if="student.preserved_parts" class="flex gap-1">
            <div v-for="part in student.preserved_parts.split(',')" :key="part" class="badge badge-info text-white">
              {{ part }}
            </div>
          </div>

          <div v-else class="badge badge-info text-white">
            لا يوجد
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="mt-2 flex items-center gap-2">
          <div class="text-xs text-gray-500">
            الأجزاء المختبرة بالأوقاف
          </div>
          <div v-if="student.parts_tested_by_the_endowments" class="flex gap-1">
            <div v-for="part in student.parts_tested_by_the_endowments" :key="part" class="badge badge-info text-white">
              {{ student.parts_tested_by_the_endowments }}
            </div>
          </div>

          <div v-else class="badge badge-info text-white">
            لا يوجد
          </div>
        </div>
      </div>
    </div>

    <div class="text-xs font-semibold">
      معلومات الدراسة
    </div>

    <div class="grid mb-12">
      <div class="flex items-center justify-between">
        <div class="mt-2 flex items-center gap-2">
          <div class="text-xs text-gray-500">
            اسم المدرسة
          </div>
          <div class="badge badge-neutral">
            {{ student.school }}
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="mt-2 flex items-center gap-2">
          <div class="text-xs text-gray-500">
            الصف
          </div>
          <div class="badge badge-neutral">
            {{ getClass(student.educational_class) }}
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="mt-2 flex items-center gap-2">
          <div class="text-xs text-gray-500">
            مواهب أخرى
          </div>

          <div class="badge badge-neutral">
            {{ student.special_talent }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <base-not-found v-else />
</template>
