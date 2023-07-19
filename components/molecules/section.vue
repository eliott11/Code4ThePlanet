<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <section class="border rounded p-4">
    <h2 class="font-bold text-xl mb-2">{{ title }}</h2>
    <slot></slot>
  </section>
</template>