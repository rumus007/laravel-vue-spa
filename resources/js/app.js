require("./bootstrap");
import Vue from "vue";
import App from "./src/App.vue";
import store from "./src/store";
import router from "./src/router";

const app = new Vue({
    el: "#app",
    router,
    store,
    components: { App }
});
