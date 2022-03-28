<template>
  <v-card>
    <v-card-title>
      User List
      <v-spacer></v-spacer>
      <v-form ref="form">
        <v-row class="filter-bar">
          <v-col md="6">
            <v-text-field
              label="Name or Email or Address"
              hide-details="auto"
              v-model="keyword"
            ></v-text-field>
          </v-col>

          <v-btn
            class="post-list-btn mr-4"
            color="primary"
            @click="filterUsers()"
            >Filter</v-btn
          >
          <router-link to="/user/create" class="mt-5" v-if="userType === 0"
            ><v-btn class="post-list-btn mr-4" color="primary"
              >Create</v-btn
            ></router-link
          >
        </v-row>
      </v-form>
    </v-card-title>
    <v-container>
      <v-data-table :headers="headers" :items="showList">
        <template v-slot:[`item.name`]="{ item }">
          <router-link
            :to="{ name: 'user-detail', params: { userId: item.id } }"
            ><a v-if="item.name">{{ item.name }}</a></router-link
          >
        </template>
        <template v-slot:[`item.operation`]="{ item }" v-if="userType === 0">
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
                @click="deleteUser(item.id)"
                >Delete</v-btn
              >
            </div>
          </v-row>
        </template>
      </v-data-table>
    </v-container>
  </v-card>
</template>

<script src="../../services/pages/user/user-list.js">
</script>

<style scoped src="../../assets/css/pages/post/post-list.css">
</style>
