<template>
  <v-card
    class="mx-auto mt-5 p-5"
    max-width="600"
  >
    <v-card-text>
      <p>User ID : {{ $route.params.userId }}</p>
      <div class="text-h4 text--primary">
        {{ user.name }}
      </div>
      <div class="text--primary">
        {{ user.email }}
      </div>
    </v-card-text>
    <v-card-actions>
      <router-link to="/user/list">
        <v-btn
        color="deep-purple accent-4 white--text"
      >
        Back
      </v-btn></router-link>
      
    </v-card-actions>
  </v-card>
</template>

<script src="../../services/pages/user/user-detail.js">
</script>

<style src="../../assets/css/pages/post/post-detail.css">

</style>