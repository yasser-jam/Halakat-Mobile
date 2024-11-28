<script setup lang="ts">
const emit = defineEmits(['select'])

const times = ref([
  {
    title: '5 دقائق',
    value: 'delay-5',
  },
  {
    title: '10 دقائق',
    value: 'delay-10',
  },
  {
    title: 'ربع ساعة',
    value: 'delay-15',
  },
  {
    title: 'نصف ساعة',
    value: 'delay-30',
  },
  {
    title: 'ساعة',
    value: 'delay-60',
  },
  {
    title: 'أكثر من ذلك',
    value: 'delay-more',
  },

])

function test(value: string) {
  emit('select', value)
}
</script>

<template>
  <ul tabindex="0" class="menu rounded-box z-[1] w-32 bg-gray-50 shadow">
    <template v-for="time in times" :key="time.value">
      <li class="mb-1 text-xs" @click="test(time.value)">
        <a class="flex flex-row items-center p-2">
          <Icon size="1rem" name="mdi:clock-outline" />
          {{ time.title }}
        </a>
      </li>
    </template>
  </ul>
</template>
