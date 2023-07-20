<script setup lang="ts">
const { login, me } = useUser();

const email = ref('')
const password = ref('')

const submitForm = () => {
  try {
    login(email.value)
    if (me.value)
      navigateTo(`/users/${me.value.id}`)
  } catch(e) {
    console.error('error', e)
  }

}
</script>

<template>
  <div class="max-w-3xl mx-auto p-5">
    <MoleculesSection title="Connexion">
      <form class="flex flex-col gap-2" @submit.prevent="submitForm">
        <input class="border rounded p-2" type="text" name="email" v-model="email" placeholder="Email">
        <input class="border rounded p-2" type="password" name="current-password" v-model="password" placeholder="Password">
        <AtomsButton type="submit">Connexion</AtomsButton>
      </form>
    </MoleculesSection>
  </div>
</template>