import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

//Router global
window.router = router;

createApp(App).use(router).use(bootstrap).mount("#app");
