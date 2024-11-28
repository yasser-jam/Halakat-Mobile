<script setup lang="ts">
</script>

<template>
  <main dir="rtl" class="bg-slate-50">
    <layout-nav />

    <div>
      <NuxtPage />
    </div>

    <layout-footer />

    <layout-sidebar />
  </main>

  <!-- <v-layout class="overflow-visible" style="height: 56px">
    <v-app>

      <v-bottom-navigation v-model="page" color="primary" horizontal>
        <v-btn value="attend" to="/attendance">
          <v-icon>mdi-check-all</v-icon>

          الحضور
        </v-btn>

        <v-btn value="home">
          <v-icon>mdi-home</v-icon>

          الرئيسية
        </v-btn>

        <v-btn value="saving">
          <v-icon>mdi-book</v-icon>

          التسميع
        </v-btn>
      </v-bottom-navigation>
    </v-app>

    <v-navigation-drawer
        v-model="drawer"
        class="bg-primary pb-6"
        width="200"
      >
        <template v-slot:prepend>
          <div class="flex flex-col justify-center items-center gap-4 py-8">
            <v-icon size="3rem">mdi-mosque</v-icon>
            <div class="">حلقات - إدارة الدورات القرآنية</div>
            <div class="text-xs font-bold">مسجد الشيخ علي الدقر</div>
          </div>
        </template>

<v-divider></v-divider>

<v-list class="flex flex-col h-full" nav>
  <v-list-item prepend-icon="mdi-account" title="حسابي"></v-list-item>
  <v-list-item prepend-icon="mdi-cog" title="الإعدادات"></v-list-item>

  <v-spacer></v-spacer>
  <v-list-item prepend-icon="mdi-logout" title="تسجيل الخروج"></v-list-item>

</v-list>
</v-navigation-drawer>
</v-layout> -->
</template>
