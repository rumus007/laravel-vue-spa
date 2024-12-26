import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const Dashboard = () => import("./../views/dashboard/Dashboard.vue");
const User = () => import("./../views/user/User.vue");

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Dashboard",
            component: Dashboard,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/user",
            name: "User",
            component: User,
            meta: {
                requiresAuth: true
            }
        }
    ]
});

export default router;
