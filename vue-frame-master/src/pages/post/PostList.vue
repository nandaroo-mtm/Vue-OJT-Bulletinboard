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
          <router-link to="/post/create" class="mt-5" v-if="isLoggedIn"
            ><v-btn class="post-list-btn mr-4" color="primary"
              >Create</v-btn
            ></router-link
          >
          <router-link to="/post/upload" v-if="isLoggedIn">
            <v-btn class="post-list-btn mr-4 mt-5" color="primary"
              >Upload</v-btn
            >
          </router-link>

          <v-btn
            class="post-list-btn mr-4"
            color="primary"
            @click="downloadCsvFile()"
            >Download</v-btn
          >
        </v-row>
      </v-form>
    </v-card-title>
    <v-container>
      <v-data-table :headers="headers" :items="showList" >
        <template v-slot:[`item.title`]="{ item }">
          <a v-if="item.title" @click="openDialog(item.id)">{{ item.title }}</a>
          <!-- <router-link
            :to="{ name: 'post-detail', params: { postId: item.id } }"
            ></router-link
          > -->
          <v-dialog v-model="dialog[item.id]" persistent max-width="600px">
            <v-card class="mx-auto mt-5" max-width="600">
              <v-card-title class="create-post-title primary white--text">
                <span class="text-h5">Post ID : {{ item.id }}</span>
              </v-card-title>
              <v-card-text>
                <div class="text-h5 text--primary mt-5">
                  {{ item.title }}
                </div>
                <p>
                  By <span class="lime--text">{{ item.created_user }}</span
                  >, {{ item.created_at }}
                </p>
                <div class="text--primary">
                  {{ item.description }}
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="closeDialog(item.id)">Close</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <template v-slot:[`item.operation`]="{ item }" v-if="isLoggedIn">
          <v-row>
            <div class="operation-btn">
              <router-link
                :to="{ name: 'post-edit', params: { postId: item.id } }"
                ><v-btn color="primary" class="post-list-btn"
                  >Edit</v-btn
                ></router-link>
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
.v-data-table-header th {
  white-space: nowrap;/* 
  min-width: 250px; */
}
</style>
