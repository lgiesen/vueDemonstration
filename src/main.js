import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import router from "./router.js";
import store from "./store/store.js";
import hljs from 'highlight.js';
Vue.use(hljs.vuePlugin);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");