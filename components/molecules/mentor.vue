import { AtomsButton } from '../.nuxt/components';
<script setup>
const people = [
  {
    name: 'Fabien Luçon',
    role: 'Head of Design',
    company: 'Airbnb',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Aurélien Delicourt',
    role: 'Product Designer',
    company: 'Engie',
    imageUrl:
      'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Guillaume Comparot',
    role: 'Ui Designer',
    company: 'Passage des plaisirs',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
]
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl text-center lg:px-8">
      <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <li v-for="person in people" :key="person.name">
          <img class="mx-auto h-20 w-20 rounded-full" :src="person.imageUrl" alt="" />
          <h3 class="mt-2 text-base font-semibold leading-7 tracking-tight text-gray-900">{{ person.name }}</h3>
          <p class="text-sm leading-6 text-gray-600">{{ person.role }}</p>
          <p class="text-sm leading-6 text-gray-600">chez {{ person.company }}</p>
          <AtomsButton>Contact l'Alumni</AtomsButton>
        </li>
      </ul>
    </div>
  </div>
</template>

