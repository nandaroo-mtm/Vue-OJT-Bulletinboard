import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../pages/user/Login";
import PostList from "../pages/post/PostList";
import PostCreate from "../pages/post/PostCreate";
import PostEdit from "../pages/post/PostEdit";
import PostUpload from "../pages/post/PostUpload"
import UserList from "../pages/user/UserList";
import UserDetail from "../pages/user/UserDetail";
import UserCreate from "../pages/user/UserCreate";
import UserEdit from "../pages/user/UserEdit";
import UserProfile from "../pages/user/UserProfile"
import Password from "../pages/user/Password"
import store from "../store";

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
        path: "/post/upload",
        name: "post-upload",
        component: PostUpload,
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
        beforeEnter: (to, from, next) => {
            const userType = store.getters.userType;
            if (userType != 0) {
                alert('You are not authorized!')
                return next(from.fullPath)
            }
            next();
        }
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
        beforeEnter: (to, from, next) => {
            const userType = store.getters.userType;
            if (userType == 0 || from.name === 'user-profile') {
                next();
            } else {
                alert('You are not authorized!')
                return next(from.fullPath)
            }
        }
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
    if (!loggedIn && to.name != "login" && to.name != "post-list") {
        return next("/login");
    }
    next();
});

export default router;
