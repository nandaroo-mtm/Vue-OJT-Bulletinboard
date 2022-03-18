<template>
  <v-card class="mx-auto mt-5" max-width="500">
    <v-card-title class="create-post-title primary white--text">
      <span class="title font-weight-light">Create Post</span>
    </v-card-title>
    <v-form ref="form" v-model="valid" @submit.prevent="login">
      <v-card-text>
        <div class="login-error">{{ error }}</div>
        <v-text-field label="Post Title" required></v-text-field>
        <v-textarea required>
          <template v-slot:label>
            <div>Post Description</div>
          </template>
        </v-textarea>
      </v-card-text>
      <v-card-actions>
        <div class="footer">
          <v-btn type="submit" large class="primary">Comfirm</v-btn>
          <v-btn type="reset" large >Clear</v-btn>
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script src="../../services/post/post-create.js">
</script>

<style>
.footer{
    text-align: right;
}
.footer button{
    margin:0 30px;
}
</style>