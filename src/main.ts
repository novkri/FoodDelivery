import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/global.scss";
// eslint-disable-next-line
// @ts-ignore
import EgalWidgets from "@egalteam/widget-library";
import "@egalteam/widget-library/dist/style.css";
import { createPinia } from "pinia";
import SidebarLayout from "@/layouts/SidebarLayout.vue";
const app = createApp(App);
app.component("sidebarLayout", SidebarLayout);
app.use(createPinia()).use(router).use(EgalWidgets).mount("#app");
