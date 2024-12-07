<template>
  <div class="mx-auto p-8 container">
    <div class="mb-10 flex flex-col items-center justify-center">
      <img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" width="100" class="mb-2 rounded-full">
      <div class="text-gray-700 font-semibold">
        اسم الطالب
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
            عباس العقاد
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="mt-2 flex items-center gap-2">
          <div class="text-xs text-gray-500">
            حالة الأب
          </div>
          <div class="badge badge-primary">
            موجود
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="mt-2 flex items-center gap-2">
          <div class="text-xs text-gray-500">
            رقم هاتف الأب
          </div>
          <div class="badge badge-primary">
            099344166
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="mt-2 flex items-center gap-2">
          <div class="text-xs text-gray-500">
            عمل الأب
          </div>
          <div class="badge badge-primary">
            اسم الأب
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
            هنادي الملك
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="mt-2 flex items-center gap-2">
          <div class="text-xs text-gray-500">
            حالة الأم
          </div>
          <div class="badge badge-error">
            موجود
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="mt-2 flex items-center gap-2">
          <div class="text-xs text-gray-500">
            رقم هاتف الأم
          </div>
          <div class="badge badge-error">
            0945644687
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="mt-2 flex items-center gap-2">
          <div class="text-xs text-gray-500">
            عمل الأم
          </div>
          <div class="badge badge-error">
            مدرسة
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="mt-2 flex items-center gap-2">
          <div class="text-xs text-gray-500">
            حالة الزواج
          </div>
          <div class="badge badge-error">
            متزوجان
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

          <div class="flex gap-1">
            <div class="badge badge-info text-white">
              1
            </div>
            <div class="badge badge-info text-white">
              2
            </div>
            <div class="badge badge-info text-white">
              3
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="mt-2 flex items-center gap-2">
          <div class="text-xs text-gray-500">
            الأجزاء المختبرة بالأوقاف
          </div>
          <div class="flex gap-1">
            <div class="badge badge-info text-white">
              1
            </div>
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
            مدرسة الإمام الشافعي
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="mt-2 flex items-center gap-2">
          <div class="text-xs text-gray-500">
            الصف
          </div>
          <div class="badge badge-neutral">
            {{ getClass(1) }}
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="mt-2 flex items-center gap-2">
          <div class="text-xs text-gray-500">
            مواهب أخرى
          </div>

          <div class="badge badge-neutral">
            كرة القدم، الشعر
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
