<template>
  <v-card class="mx-auto mt-5" max-width="500">
    <v-card-title class="create-post-title primary white--text">
      <span class="title font-weight-light">Edit Post</span>
    </v-card-title>
    <v-form ref="form" v-model="valid" class="mt-5" @submit.prevent="confirm()">
      <v-card-text>
        <v-text-field
          label="Post Title"
          required
          v-model="title"
          :rules="titleRules"
        ></v-text-field>
        <v-textarea required v-model="description" :rules="descriptionRules">
          <template v-slot:label>
            <div>Post Description</div>
          </template>
        </v-textarea>         
        <v-switch v-model="status" class="v-s" label="Status"></v-switch>
      </v-card-text>
      <v-card-actions>
        <div class="footer">
          <v-btn
            type="submit"
            large
            class="primary white--text"
            @click="confirm()"
            :disabled="!valid"
            >Comfirm</v-btn
          >
          <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
              <v-card-title class="create-post-title primary white--text">
                <span class="text-h5">Edit Post Comfirmation</span>
              </v-card-title>
              <v-card-text class="mt-5">
                <h5 class="h5">Post Title</h5>
                <p class="h5-text">{{ title }}</p>
                <h5 class="h5">Post Description</h5>
                <p class="h5-text">{{ description }}</p>
                <h5 class="h5">Status</h5>
                 <v-switch v-model="status" class="v-s" color="rgb(0,150,45)" disabled ></v-switch>
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
                  @click="postEdit()"
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

<script src="../../services/post/post-edit.js">
</script>

<style scoped src="../../assets/css/pages/post/post-create.css">
  
</style>