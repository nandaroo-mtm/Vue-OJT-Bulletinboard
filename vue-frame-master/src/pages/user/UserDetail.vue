<template>
  <v-card class="mx-auto mt-5" max-width="600">
    <v-card-title class="card-title">
      <span class="title font-weight-light">User Detail</span>
    </v-card-title>
    <v-card-text>
      <div class="pt-5 px-8">
         <v-row v-if="user.profile" justify="center">
          <img :src="user.profile" width="150" height="150" />
        </v-row><br>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="5">User ID</v-col>
          <v-col cols="5">
            {{ $route.params.userId }}
          </v-col>
        </v-row>       
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="5"> Name </v-col>
          <v-col cols="5">
            {{ user.name }}
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="5"> Email </v-col>
          <v-col cols="5">
            {{ user.email }}
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="5"> Phone No </v-col>
          <v-col cols="5">
            {{ user.phone }}
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="5"> Address </v-col>
          <v-col cols="5">
            {{ user.address }}
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="5"> Date of Birth </v-col>
          <v-col cols="5">
            {{ user.dob }}
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="5"> Account Type </v-col>
          <v-col cols="5">
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