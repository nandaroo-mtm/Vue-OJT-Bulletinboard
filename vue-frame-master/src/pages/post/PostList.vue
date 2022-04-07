<template>
  <v-card>
    <v-card-title>
      Post list
      <v-spacer></v-spacer>
      <v-form ref="form">
        <v-row class="filter-bar">
          <v-col md="2.5">
            <v-text-field
              label="Search keyword"
              hide-details="auto"
              v-model="keyword"
            ></v-text-field>
          </v-col>
          <v-btn
            class="post-list-btn mr-4"
            color="primary"
            @click="filterPosts()"
            >Filter</v-btn
          >
          <router-link to="/post/create" class="mt-5"
            ><v-btn class="post-list-btn mr-4" color="primary"
              >Create</v-btn
            ></router-link
          >
          <router-link to="/post/upload">
            <v-btn class="post-list-btn mr-4 mt-5" color="primary">Upload</v-btn>
          </router-link>

          <v-btn class="post-list-btn mr-4" color="primary" @click="downloadCsvFile()">Download</v-btn>
        </v-row>
      </v-form>
    </v-card-title>
    <v-container>
      <v-data-table :headers="headers" :items="showList">
        <template v-slot:[`item.title`]="{ item }">
          <router-link
            :to="{ name: 'post-detail', params: { postId: item.id } }"
            ><a v-if="item.title">{{ item.title }}</a></router-link
          >
        </template>
        <template v-slot:[`item.operation`]="{ item }" v-if="isLoggedIn">
          <v-row>
            <div class="operation-btn">
              <router-link
                :to="{ name: 'post-edit', params: { postId: item.id } }"
                ><v-btn color="primary" class="post-list-btn"
                  >Edit</v-btn
                ></router-link
              >
            </div>
            <div class="operation-btn">
              <v-btn
                color="error"
                class="post-list-btn"
                @click="deletePost(item.id)"
                >Delete</v-btn
              >
            </div>
          </v-row>
        </template>
      </v-data-table>
    </v-container>
  </v-card>
</template>

<script src="../../services/post/post-list.js">
</script>

<style scoped src="../../assets/css/pages/post/post-list.css">
</style>
