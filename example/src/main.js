import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import smartyUI from "@lisen6/smarty-ui-vite";
import "@lisen6/smarty-ui-vite/dist/smarty.css";

createApp(App).use(smartyUI).mount("#app");
