<template>
  <v-card
    class="mx-auto mt-5 p-5"
    max-width="600"
  >
    <v-card-text>
      <p>Post ID : {{ $route.params.postId }}</p>
      <div class="text-h4 text--primary">
        {{ post.title }}
      </div>
      <p>By <span class="lime--text">{{ userName }}</span></p>
      <div class="text--primary">
        {{ post.description }}
      </div>
    </v-card-text>
    <v-card-actions>
      <router-link to="/post/list">
        <v-btn
        color="deep-purple accent-4 white--text"
      >
        Back
      </v-btn></router-link>
      
    </v-card-actions>
  </v-card>
</template>

<script src="../../services/post/post-detail.js">
</script>

<style src="../../assets/css/pages/post/post-detail.css">

</style>