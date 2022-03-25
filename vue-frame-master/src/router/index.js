import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../pages/user/Login";
import PostList from "../pages/post/PostList";
import PostCreate from "../pages/post/PostCreate";
import PostDetail from "../pages/post/PostDetail";
import PostEdit from "../pages/post/PostEdit";
import UserList from "../pages/user/UserList";
import UserDetail from "../pages/user/UserDetail";
import store from "../store";/* 
import {mapGetters} from 'vuex'; */

Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/post/list",
        name: "post-list",
        component: PostList,
    },
    {
        path: "/",
        redirect: "/post/list",
    },
    {
        path: "/post/create",
        name: "post-create",
        component: PostCreate,
        beforeEnter: (to, from, next) => {
            if(localStorage.getItem('vuex')){
                next();
            } else {
                next("/login");
            }
          }
    },
    {
        path: "/post/:postId",
        name: "post-detail",
        component: PostDetail,
    },
    {
        path: "/post/:postId/edit",
        name: "post-edit",
        component: PostEdit,
    },
    {
        path: "/user/list",
        name: "user-list",
        component: UserList,
    },
    {
        path: "/user/:userId",
        name: "user-detail",
        component: UserDetail,
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

/**
 * This is to handle and check authentication for routing.
 */
router.beforeEach((to, from, next) => {
    const loggedIn = store.getters.isLoggedIn;
    if (!loggedIn && to.name != "login") {
        return next("/login");
    }
    if(loggedIn && to.name == "login" && !localStorage.getItem('logout')){
        return next(from.fullPath)
    }
    next();
});

export default router;
