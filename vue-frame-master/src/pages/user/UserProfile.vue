<template>
  <v-card class="mx-auto mt-5" max-width="600">
    <v-card-title class="card-title" >
      <v-row justify="center">
        <span class="title font-weight-light">My Profile</span>
      </v-row>      
    </v-card-title>
    <v-card-text>
      <div class="pt-5 px-15">
        <v-row>
          <v-col cols="6">User Id </v-col>
          <v-col>
            {{ userId }}
          </v-col>
        </v-row>
        <v-row v-if="profile">
          <img :src="profile" width="150" height="150" id="userImage1" />
          </v-row
        >
        <v-row>
          <v-col cols="6"> Name </v-col>
          <v-col>
            {{ user.name }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6"> Email </v-col>
          <v-col>
            {{ user.email }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6"> Phone No </v-col>
          <v-col>
            {{ user.phone }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6"> Address </v-col>
          <v-col>
            {{ user.address }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6"> Date of Birth </v-col>
          <v-col>
            {{ user.dob }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6"> Account Type </v-col>
          <v-col>
            <span v-if="user.type == 0">Admin</span>
            <span v-else-if="user.type == 1">User</span>
          </v-col>
        </v-row>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-row class="px-15 mx-2 mb-10">
        <router-link :to="{ name: 'user-edit', params: { userId: userId } }">
          Edit</router-link
        >
         <router-link :to="{ name: 'password' }" class="ml-8">
          change password?</router-link
        >
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script src="../../services/pages/user/user-profile.js">
</script>

<style >
</style>