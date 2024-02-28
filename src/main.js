import Vue from "vue";
import App from "./App.vue";
import routes from "./router/routes";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

new Vue({
  routes,
  render: (h) => h(App),
}).$mount("#app");
