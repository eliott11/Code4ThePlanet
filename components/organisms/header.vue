<template>
  <div class="profile-container relative">
    <div class="profile-banner">
    </div>
    <div class="profile-info-container">
      <div class="profile-avatar-container absolute flex">
        <AtomsAvatar></AtomsAvatar>
        <div class="profile-info" style="margin-left: 50px; margin-top: 145px">
          <h2 class="font-bold">Nadia ABDELMOU</h2>
          <p>UX Designer</p>
          <p>HSBC</p>
          <p class="font-bold">Voir les coordonnés</p>
        </div>
      </div>
      <div class="float-right relative">
        <p>Etudiant</p>
        <Icon class="absolute" style="right: 0; margin-top: 25px" name="ph-linkedin-logo" />
      </div>
    </div>
  </div>
</template>

<style>
  .profile-info p {
    font-size: 14px;
  }
  .profile-info-container {
    margin: 40px 250px;

  }
  .profile-avatar-container {
    bottom: -120px;
  }
  .profile-banner {
    background-color: cornflowerblue;
    height: 200px;
  }
</style>