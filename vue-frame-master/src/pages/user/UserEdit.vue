<template>
  <v-card class="mx-auto mt-5" max-width="500">
    <v-card-title class="create-post-title primary white--text">
      <span class="title font-weight-light">User Edit</span>
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
              :rules="dobRules"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="dob"
            @input="dateMenu = false"
            :max="today"
          ></v-date-picker>
        </v-menu>
        <v-radio-group v-model="type" :rules="typeRules">
          <template v-slot:label>
            <div>Type</div>
          </template>
          <v-radio value="0">
            <template v-slot:label>
              <div>Admin</div>
            </template>
          </v-radio>
          <v-radio value="1">
            <template v-slot:label>
              <div>User</div>
            </template>
          </v-radio>
        </v-radio-group>
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
            @
            >Comfirm</v-btn
          >
          <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card class="mx-auto mt-5" max-width="600">
              <v-card-title class="create-post-title primary white--text">
                <span class="text-h5">User Edit Comfirmation</span>
              </v-card-title>
              <v-card-text>
                <div class="pt-5 px-8">
                  <v-row>
                    <v-col cols="6"> Name </v-col>
                    <v-col>
                      {{ this.name }}
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6"> Email </v-col>
                    <v-col>
                      {{ this.email }}
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6"> Phone No </v-col>
                    <v-col>
                      {{ this.phone }}
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6"> Address </v-col>
                    <v-col>
                      {{ this.address }}
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6"> Date of Birth </v-col>
                    <v-col>
                      {{ this.dob }}
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6"> Account Type </v-col>
                    <v-col>
                      <span v-if="this.type === '0'">Admin</span>
                      <span v-else-if="this.type === '1'">User</span>
                    </v-col>
                  </v-row>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="dialog = false"> Close </v-btn>
                <v-btn
                  color="blue darken-1"
                  type="submit"
                  class="white--text"
                  @click="userEdit()"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
            <v-btn large @click="$router.go(-1)">Back</v-btn>
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script src="../../services/pages/user/user-edit.js">
</script>

<style scoped  src="../../assets/css/pages/post/post-create.css">
</style>