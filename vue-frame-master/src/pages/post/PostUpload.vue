
<template>
  <v-card class="mx-auto mt-5" max-width="500">
    <v-card-title class="create-post-title primary white--text">
      <span class="title font-weight-light">Upload Posts</span>
    </v-card-title>
    <v-form
      ref="form"
      v-model="valid"
      class="mt-5"
      @submit.prevent="uploadCsv()"
    >
      <v-card-text class="px-10">
        <v-file-input
          accept=".csv"
          ref="file"
          v-model="csvFile"
          label="Please choose csv file"
          :rules="fileRules"
        ></v-file-input>
      </v-card-text>
      <v-card-actions class="px-10 pb-5">
        <div class="footer">
          <v-btn
            type="submit"
            ref="file"
            large
            class="primary white--text"
            :disabled="!valid"
            >Upload</v-btn>
          <v-btn large @click="$router.go(-1)">Back</v-btn>
        </div>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script src="../../services/post/post-upload.js">
</script>

<style scoped src="../../assets/css/pages/post/post-create.css">
</style>