<template>
  <v-card class="mx-auto mt-5" max-width="500">
    <v-card-title class="create-post-title primary white--text">
      <span class="title font-weight-light">Change Password</span>
    </v-card-title>
    <v-form ref="form" v-model="valid" class="mt-5" @submit.prevent="changePassword()">
      <v-card-text class="px-10">
        <v-text-field
          label="Old Password"
          required
          type="password"
          v-model="oldPassword"
          :rules="oldPasswordRules"
        ></v-text-field>
        <v-text-field
          label="New Password"
          type="password"
          required
          v-model="newPassword"
          :rules="passwordRules"
        ></v-text-field>
        <v-text-field
          label="Confirm Password"
          type="password"
          required
          v-model="confirmPassword"
          :rules="confirmPasswordRules"
        ></v-text-field>
      </v-card-text>
      <v-card-actions class="px-10 pb-5">
        <div class="footer">
          <v-btn
            type="submit"
            large
            class="primary white--text"
            :disabled="!valid"
            >Save</v-btn
          >
          <v-btn large @click="$router.go(-1)">Back</v-btn>
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script src="../../services/pages/user/password.js">
</script>

<style scoped src="../../assets/css/pages/post/post-create.css">
</style>