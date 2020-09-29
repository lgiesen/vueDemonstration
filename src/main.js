import Vue from "vue";
import Vuex from 'vuex';
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import router from "./router.js";
import store from "./store/store.js";

Vue.config.productionTip = false;
Vue.use(Vuex);
new Vue({
  vuetify,
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
