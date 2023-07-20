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
  <div v-else-if="user">
    <OrganismsHeader 
      v-if="user"
      :name="user.name"
      :email="user.email"
      :interests="user.interests"
      :country="user.country"
      :role="user.role"
      :workplace="user.workplace"
      :mentor="user.mentor"
      :alumni="user.alumni"
    />
    <div class="min-h-[500px] max-w-6xl mx-auto my-10 grid grid-cols-3 grid-rows-6 gap-4">
      <MoleculesSection title="Résumé" class="col-span-2 row-span-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus enim sed dolor egestas tempus. Cras tellus risus, luctus ac metus id, eleifend luctus nisi. Etiam vehicula erat nulla, vel feugiat lorem feugiat sed. Morbi lobortis, diam quis vulputate convallis, lacus mi dapibus nibh, vel scelerisque quam felis sodales nunc. Nullam quis nibh at mi iaculis volutpat sed quis justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras consequat, urna vel ultrices suscipit, tellus elit fringilla metus, et ullamcorper magna mi id erat.
      </MoleculesSection>
      <MoleculesSection title="Mentorat" v-if="me && isUserMe && me.alumni" class="row-span-2">
        <p class="mb-4">Voulez vous participer au programme de mentorat ?</p>
        <AtomsToggle />
      </MoleculesSection>
      <MoleculesSection title="Centres d'intêrets" class="row-span-4 col-start-3">
        <ul class="flex flex-wrap gap-2">
          <li class="rounded-full text-black bg-slate-100 p-2" v-for="interest in user.interests">{{ interest }}</li>
        </ul>
      </MoleculesSection>
      <MoleculesSection v-if="me && isUserMe && !me.alumni" title="Suggestions mentorat" class="row-span-4 col-span-2">
        <MoleculesMentor class="mt-8" />
      </MoleculesSection>
    </div>
    <OrganismsFooter />
  </div>
</template>