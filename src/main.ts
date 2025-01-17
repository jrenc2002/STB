import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
const app = createApp(App);
import { createPinia } from 'pinia';
import router from "./router/index";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

app.use(router);
app.use(ElementPlus);
app.use(createPinia());
app.mount("#app");
