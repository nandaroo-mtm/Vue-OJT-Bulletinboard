<template>
  <v-card class="mx-auto mt-5" max-width="500">
    <v-card-title class="create-post-title primary white--text">
      <span class="title font-weight-light">Create New User</span>
    </v-card-title>
    <v-form ref="form" v-model="valid" class="mt-5" @submit.prevent="confirm()">
      <v-card-text class="px-10">
        <v-text-field
          label="User Name"
          required
          v-model="name"
          :rules="nameRules"
        ></v-text-field>
        <v-text-field
          label="Email"
          type="email"
          required
          v-model="email"
          :rules="emailRules"
        ></v-text-field>
        <v-text-field
          label="Phone Number"
          required
          v-model="phone"
          :rules="phoneRules"
        ></v-text-field>
        <v-menu
          v-model="dateMenu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dob"
              label="Date of Birth"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="dob" @input="dateMenu = false" :max="today"></v-date-picker>
        </v-menu>
        <v-text-field
          label="Password"
          required
          v-model="password"
          type="password"
          :rules="passwordRules"
        ></v-text-field>
        <v-text-field
          label="Confirm Password"
          required
          v-model="confirmPassword"
          type="password"
          :rules="confirmPasswordRules"
        ></v-text-field>
        <v-textarea required v-model="address" :rules="addressRules">
          <template v-slot:label>
            <div>Address</div>
          </template>
        </v-textarea>
      </v-card-text>
      <v-card-actions class="px-10 pb-5">
        <div class="footer">
          <v-btn
            type="submit"
            large
            class="primary white--text"
            :disabled="!valid"
            >Comfirm</v-btn
          >
          <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
              <v-card-title class="create-post-title primary white--text">
                <span class="text-h5">Creat User Comfirmation</span>
              </v-card-title>
              <v-card-text class="mt-5">
                <h5 class="h5">Post Title</h5>
                <p class="h5-text">{{ title }}</p>
                <h5 class="h5">Post Description</h5>
                <p class="h5-text">{{ description }}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Close
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  type="submit"
                  text
                  @click="postCreate()"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-btn type="reset" large>Clear</v-btn>
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script src="../../services/pages/user/user-create.js">
</script>

<style scoped src="../../assets/css/pages/post/post-create.css">
</style>