<template>
  <div class="flex justify-center items-center bg-primary h-[100vh]">
    <v-container>

        <div class="flex gap-2 justify-center items-center text-3xl text-white text-center mb-8">
            <div>منصة حلقات</div>

            <v-icon>mdi-mosque</v-icon>
        </div>

      <v-card>
        <v-card-text>
          <NuxtPage />
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>