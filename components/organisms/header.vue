<script setup lang="ts">
import Avatar  from 'vue-boring-avatars'
const props = defineProps<{
  name: string;
  email: string;
  interests: string[];
  country: string;
  role: string;
  workplace: string;
  mentor: boolean;
  alumni: boolean;
}>()

const isStudent = computed(() => {
  return props.alumni ? 'Alumni' : 'Etudiant'
})
</script>

<template>
  <div class="relative">
    <div class="h-52 bg-sky-400">
    </div>
    <div class="flex justify-between max-w-6xl mx-auto">
      <div class="flex items-center -bottom-5 -mt-28">
        <Avatar
          class="relative"
          :size="230"
          :name="name"
        />
        <div class="profile-info" style="margin-left: 50px; margin-top: 145px">
          <h2 class="font-bold">{{ name }}</h2>
          <p>{{ role }}</p>
          <p>{{ workplace }}</p>
        </div>
      </div>
      <div class="flex flex-col items-end gap-2 mt-10">
        <p class="font-bold">{{ isStudent }}</p>
        <Icon name="ph:linkedin-logo-bold" size="24" />
      </div>
    </div>
  </div>
</template>