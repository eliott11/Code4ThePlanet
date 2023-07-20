<script setup lang="ts">
const { params } = useRoute();
const { me, getUser } = useUser();

const user = getUser(+params.id)

const isUserMe = computed(() => {
  if (me.value)
    return me.value.id === +params.id
  else return false
})

const doesUserExist = computed(() => {
  return !!user
})
</script>

<template>
  <MoleculesSection title="404" v-if="!doesUserExist">
    User does not exist
  </MoleculesSection>
  <div v-else>
    <OrganismsHeader 
      v-if="user"
      :name="user.name"
      :email="user.email"
      :interests="user.interests"
      :country="user.country"
      :role="user.role"
      :workplace="user.workplace"
      :mentor="user.mentor"
    />
    <div class="min-h-[500px] max-w-6xl mx-auto my-10 grid grid-cols-3 grid-rows-6 gap-4">
      <MoleculesSection title="Résumé" class="col-span-2 row-span-2">
        Aucun résumé pour le moment.
      </MoleculesSection>
      <MoleculesSection title="Mentorat" v-if="me && isUserMe && me.alumni" class="row-span-2">
        
      </MoleculesSection>
      <MoleculesSection v-if="me && isUserMe && !me.alumni" title="Suggestions mentorat" class="row-span-4 col-span-2">
        <MoleculesMentor class="mt-8" />
      </MoleculesSection>
    </div>
    <OrganismsFooter />
  </div>
</template>