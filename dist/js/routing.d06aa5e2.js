(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["routing"],{"0fae":function(e,t,n){},"20fc":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[i("h1",{staticClass:"text-center display-2 mb-10"},[e._v("Router")]),i("h2",[e._v("Presentation")]),i("ul",[i("li",[e._v("Switch between views (=site)")])]),i("img",{attrs:{src:n("6c5e")}}),i("p",[e._v("In practice:")]),i("ul",[i("li",[e._v("Dynamic: externalize navigation links")]),i("li",[e._v("mode: “history” → resolve …/#/ in URL + history stack")]),i("li",[e._v("webpackChunkName")]),i("div",{staticClass:"block"})]),i("h2",[e._v("Seminar Thesis")]),i("p",[e._v(e._s(e.text1)),i("code",{staticClass:"hljs d-inline"},[e._v('router-link(to="/") Home')]),e._v(e._s(e.text2)),i("br"),e._v(e._s(e.text3)+" "),i("br"),e._v(e._s(e.text3))])])},a=[],o={name:"Routing",data:function(){return{text1:"As mentioned above, routing is required to handle multiple pages or \n      views. Hence, the navigation can be implemented with the router-link tag, \n      which provides the router with the link to the view: ",text2:" It is advisable to make the navigation links dynamic to provide \n      clarity and maintainability. That means that all navigation links except \n      the default link are extracted into an Array or a separate document, which \n      is then imported. The router logic is located in @/router/router.js, where \n      the navigation links are connected to the corresponding view by passing the \n      property “to”.",text3:"This implementation directly imports and loads the default view “Home”, \n      whereas the other views use Lazy Loading to drastically improve performance: \n      They are dynamically imported once their use is requested. This route level \n      code-splitting separates the JS into chunk files (cf. Vue-Devtools under \n      Network, JS), which can be named using the webpackChunkName comment (VueSchool, \n      n.d.-c). For a 404 page path would use the “*”-wildcard to match all possible \n      file paths. This component is listed at the end of the routes so that the \n      router does not match the 404 page unintentionally (VueSchool, n.d.-b).",text4:'The default router mode is hash mode, which uses a URL hash to reflect the URL \n      so that an unnecessary and complete page reload is avoided. Switching to \n      history-mode by adding mode: "history" to the export of Vue Router resolves \n      the hashtag (“…/#/”) in the URL path and still avoids the redundant page reload \n      because of the history.pushState API (VueSchool, n.d.-d). History mode allows \n      to easily go back to the previous page, because of the history stack, where the \n      previously visited pages are stored: goBack() { return this.$router.go(-1); } \n      (cf. Appendix, 2.10 Routing) (VueSchool, n.d.-a)'}}},s=o,r=(n("fbea"),n("2877")),h=n("6544"),l=n.n(h),c=n("a523"),d=Object(r["a"])(s,i,a,!1,null,"c172e340",null);t["default"]=d.exports;l()(d,{VContainer:c["a"]})},"6c5e":function(e,t,n){e.exports=n.p+"img/router.654ec759.png"},fbea:function(e,t,n){"use strict";var i=n("0fae"),a=n.n(i);a.a}}]);
//# sourceMappingURL=routing.d06aa5e2.js.map