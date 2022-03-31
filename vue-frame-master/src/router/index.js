import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../pages/user/Login";
import PostList from "../pages/post/PostList";
import PostCreate from "../pages/post/PostCreate";
import PostDetail from "../pages/post/PostDetail";
import PostEdit from "../pages/post/PostEdit";
import UserList from "../pages/user/UserList";
import UserDetail from "../pages/user/UserDetail";
import UserCreate from "../pages/user/UserCreate";
import UserEdit from "../pages/user/UserEdit";
import UserProfile from "../pages/user/UserProfile"
import Password from "../pages/user/Password"
import store from "../store";/* 
import {mapGetters} from 'vuex'; */

Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
        beforeEnter: (to, from, next) => {
            const loggedIn = store.getters.isLoggedIn;
            if (loggedIn && !localStorage.getItem('logout')) {
                return next(from.fullPath)
            }
            next();
        }
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
        path: "/user/create",
        name: "user-create",
        component: UserCreate,
    },
    {
        path: "/user/profile",
        name: "user-profile",
        component: UserProfile,
    },
    {
        path: "/user/password",
        name: "password",
        component: Password,
    },
    {
        path: "/user/:userId",
        name: "user-detail",
        component: UserDetail,
    },
    {
        path: "/user/:userId/edit",
        name: "user-edit",
        component: UserEdit,
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
    next();
});

export default router;
