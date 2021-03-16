/**
 * vue template
 *
 * $ npm install -g @vue/cli-service-global
 */

import Vue from "vue";
import App from "./App.vue";

const app = new Vue({
  el: "#app",
  render: (h) => h(App),
});

export default app;
