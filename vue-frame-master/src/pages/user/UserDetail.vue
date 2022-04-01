<template>
  <v-card class="mx-auto mt-5" max-width="600">
    <v-card-title class="card-title">
      <span class="title font-weight-light">User Detail</span>
    </v-card-title>
    <v-card-text>
      <div class="pt-5 px-8">
        <p>User ID : {{ $route.params.userId }}</p>
        <v-row v-if="user.profile">
          <img :src="user.profile" width="150" height="150" />
        </v-row>
        <v-row>
          <v-col cols="4"> Name </v-col>
          <v-col>
            {{ user.name }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4"> Email </v-col>
          <v-col>
            {{ user.email }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4"> Phone No </v-col>
          <v-col>
            {{ user.phone }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4"> Address </v-col>
          <v-col>
            {{ user.address }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4"> Date of Birth </v-col>
          <v-col>
            {{ user.dob }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4"> Account Type </v-col>
          <v-col>
            <span v-if="user.type == 0">Admin</span>
            <span v-else-if="user.type == 1">User</span>
          </v-col>
        </v-row>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-row justify="center">
        <router-link to="/user/list">
          <v-btn color="deep-purple accent-4 white--text">
            Back
          </v-btn></router-link
        >
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script src="../../services/pages/user/user-detail.js">
</script>

<style src="../../assets/css/pages/user/user-detail.css">
</style>