import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/global.scss";
// eslint-disable-next-line
// @ts-ignore
import EgalWidgets from "@egalteam/widget-library";
import "@egalteam/widget-library/dist/style.css";

createApp(App).use(store).use(router).use(EgalWidgets).mount("#app");
