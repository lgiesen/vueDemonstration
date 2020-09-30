import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// you can import any css/scss/sass documents, which override vuetify-material
Vue.use(Vuetify);

export default new Vuetify({
    /**
     * Theme colors are according to the apple developer standards.
     * See here: https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/color/
     * for more details
     */
    theme: {
      options: {
        customProperties: true
      },
      dark: false,
      themes: {
        light: {
          // vue color: #42b983
          primary: "#6238b4",
          secondary: "#ff8a05",
          // most frequently used cases (colors from below)
          accent: "#5ac8fa",
          success: "#34c759",
          warning: "#ff954f",
          error: "#ff3a30",
          background: "#FFF",
  
          blue: "#FFEEFF",
          green: "#34c759",
          orange: "#ff954f",
          indigo: "#5856d6",
          pink: "#ff2d55",
          purple: "#af52de",
          red: "#ff3a30",
          teal: "#5ac8fa",
          yellow: "#ffcc00",
  
          google: "#de5246",
          facebook: "#3b5998",
          apple: "#2c2c2e"
        },
        dark: {
          primary: "#b59fdd",
          secondary: "#ffcb80",
        }
      }
    },
    icons: {
      iconfont: "mdi"
    }
  });
  
