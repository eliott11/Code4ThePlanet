<script setup lang="ts">
import Avatar  from 'vue-boring-avatars'

const { getSuggestedMentors } = useMentors();

const mentors = getSuggestedMentors();

console.log(mentors)
</script>

<template>
  <div class="bg-white">
    <div class="text-center">
      <ul role="list" class="flex gap-10">
        <li v-for="person in mentors" :key="person.id">
          <Avatar class="mx-auto h-20 w-20 rounded-full" :name="person.name" />
          <h3 class="mt-2 text-base font-semibold leading-7 tracking-tight text-gray-900">{{ person.name }}</h3>
          <p class="text-sm leading-6 text-gray-600">{{ person.role }}</p>
          <p class="text-sm leading-6 text-gray-600">chez {{ person.workplace }}</p>
          <AtomsButton>Contact l'Alumni</AtomsButton>
        </li>
      </ul>
    </div>
  </div>
</template>

