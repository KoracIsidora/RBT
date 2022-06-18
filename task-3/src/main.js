import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "@/css/style.css";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
Vue.prototype.$api_url = "https://629623c675c34f1f3b2a1c0a.mockapi.io";

Vue.component("v-select", vSelect);

window.Event = new Vue();

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
