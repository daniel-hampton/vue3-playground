import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// Directives
import Ripple from "@/directives/ripple";

// Styles
import "./index.css";

createApp(App)
  .use(store)
  .use(router)
  .directive('ripple', Ripple)
  .mount("#app");
