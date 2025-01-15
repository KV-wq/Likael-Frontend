import { createApp } from "vue";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import router from "./router/router";
import { createPinia } from "pinia";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
