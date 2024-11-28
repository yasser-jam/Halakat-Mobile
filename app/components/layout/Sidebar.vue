<script setup lang="ts">
const links = ref<{ title: string, icon: string, link: string }[]>([
  {
    title: 'حسابي',
    icon: 'mdi:account',
    link: '/account',
  },
  {
    title: 'إحصاءات',
    icon: 'mdi:poll',
    link: '/stats',
  },
  {
    title: 'الإعدادات',
    icon: 'mdi:cog',
    link: '/settings',
  },

])
</script>

<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle">
    <div class="drawer-content class=">
      <!-- Page content here -->
    </div>
    <div class="drawer-side">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay" />

      <ul class="menu bg-primary min-h-full w-80 p-4 text-white">
        <li class="pointer-events-none">
          <div class="flex flex-col items-center justify-center gap-4 py-8">
            <Icon name="mdi:mosque-outline" size="5rem" class="text-white" />
            <div class="text-lg font-semibold">
              حلقات - إدارة الدورات القرآنية
            </div>
            <div class="text-xs font-bold">
              مسجد الشيخ علي الدقر
            </div>
          </div>
        </li>
        <!-- Sidebar content here -->
        <li v-for="link in links" :key="link.title" class="text-lg">
          <nuxt-link :to="link.link">
            <Icon :name="link.icon" size="1.5rem" />
            {{ link.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
