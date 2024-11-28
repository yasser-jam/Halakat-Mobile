<script setup lang="ts">
const emit = defineEmits(['update:model-value'])

const model = defineModel()

const menuToggler = ref(false)

function selectTime(time: string) {
  menuToggler.value = false
  model.value = time
}
</script>

<template>
  <div class="card rounded-sm bg-white p-2">
    <div class="flex items-center gap-2">
      <div class="avatar">
        <div class="w-8 rounded-full">
          <img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg">
        </div>
      </div>

      <div>
        <div class="max-w-[100px] text-ellipsis text-sm font-semibold">
          {{ `عمار المحسن` }}
        </div>

        <div class="text-xs text-gray-400">
          {{ getClass(5) }}
        </div>
      </div>

      <div class="grow" />

      <div
        class="badge badge-sm cursor-pointer" :class="model === 'attend' ? 'badge-primary' : ''"
        @click="emit('update:model-value', 'attend')"
      >
        حاضر
      </div>

      <div
        class="badge badge-sm cursor-pointer" :class="model === 'missed' ? 'badge-error' : ''"
        @click="emit('update:model-value', 'missed')"
      >
        غائب
      </div>

      <div class="dropdown dropdown-bottom dropdown-end">
        <div
          class="badge badge-sm cursor-pointer" tabindex="0" role="button"
          :class="model !== 'missed' && model !== 'attend' ? 'badge-warning' : ''" @click="menuToggler = true"
        >
          متأخر
        </div>
        <attend-times-menu v-if="menuToggler" class="dropdown-content" @select="selectTime" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
