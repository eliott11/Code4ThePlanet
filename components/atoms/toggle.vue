<script setup lang="ts">
const value = ref(false)
</script>

<template>
  <label for="pierick">
    <div class="h-8 w-16 rounded-full bg-slate-200 relative inline-block">
      <div class="absolute w-6 h-6 bg-violet-500 top-1 rounded-full transition-all"
      :class="[value ? 'translate-x-1 bg-slate-400' : 'translate-x-9']"></div>
    </div>
    <input class="hidden" type="checkbox" v-model="value" id="pierick">
  </label>
</template>