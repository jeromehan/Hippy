!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s="./src/pages/feed/main-native.js")}({"./node_modules/@hippy/vue-css-loader/dist/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/unicode-loader/index.js!./src/pages/feed/app.vue?vue&type=style&index=0&scope=true&lang=css&":function(e,t,o){(function(t){e.exports=(t.__HIPPY_VUE_STYLES__||(t.__HIPPY_VUE_STYLES__=[]),t.__HIPPY_VUE_STYLES__=t.__HIPPY_VUE_STYLES__.concat([{selectors:["#root"],declarations:[{type:"declaration",property:"flex",value:1}]},{selectors:[".header"],declarations:[{type:"declaration",property:"height",value:60},{type:"declaration",property:"color",value:4294901760},{type:"declaration",property:"backgroundColor",value:4282431619},{type:"declaration",property:"display",value:"flex"},{type:"declaration",property:"flexDirection",value:"row"},{type:"declaration",property:"justifyContent",value:"space-between"}]},{selectors:[".title"],declarations:[{type:"declaration",property:"fontSize",value:20},{type:"declaration",property:"lineHeight",value:60},{type:"declaration",property:"marginLeft",value:20},{type:"declaration",property:"marginRight",value:20},{type:"declaration",property:"fontWeight",value:"bold"},{type:"declaration",property:"color",value:4294967295}]},{selectors:[".container"],declarations:[{type:"declaration",property:"backgroundColor",value:4294967295},{type:"declaration",property:"flex",value:1}]},{selectors:[".content"],declarations:[{type:"declaration",property:"flex",value:1},{type:"declaration",property:"overflow",value:"scroll"},{type:"declaration",property:"marginTop",value:10}]},{selectors:[".content-title"],declarations:[{type:"declaration",property:"height",value:60},{type:"declaration",property:"background",value:"#fff"}]},{selectors:[".content-title p"],declarations:[{type:"declaration",property:"color",value:4283782485},{type:"declaration",property:"textAlign",value:"center"}]}]),t.__HIPPY_VUE_STYLES__)}).call(this,o("./node_modules/webpack/buildin/global.js"))},"./node_modules/@hippy/vue/dist/index.js":function(e,t,o){e.exports=o("dll-reference hippyVueBase")("./node_modules/@hippy/vue/dist/index.js")},"./node_modules/core-js/modules/es.function.name.js":function(e,t,o){e.exports=o("dll-reference hippyVueBase")("./node_modules/core-js/modules/es.function.name.js")},"./node_modules/vue-loader/lib/runtime/componentNormalizer.js":function(e,t,o){"use strict";function n(e,t,o,n,r,a,i,s){var l,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=o,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(e,t){return l.call(t),c(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:u}}o.d(t,"a",(function(){return n}))},"./node_modules/webpack/buildin/global.js":function(e,t,o){e.exports=o("dll-reference hippyVueBase")("./node_modules/webpack/buildin/global.js")},"./src/back-icon.png":function(e,t,o){e.exports=o.p+"assets/back-icon.png"},"./src/pages/feed/app.vue?vue&type=style&index=0&scope=true&lang=css&":function(e,t,o){"use strict";var n=o("./node_modules/@hippy/vue-css-loader/dist/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/unicode-loader/index.js!./src/pages/feed/app.vue?vue&type=style&index=0&scope=true&lang=css&");o.n(n).a},"./src/pages/feed/main-native.js":function(e,t,o){"use strict";o.r(t);var n=o("./node_modules/@hippy/vue/dist/index.js"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"root"}},[o("div",{staticClass:"header"},[o("label",{staticClass:"title"},[e._v("feed\\u9875")]),e._v(" "),o("label",{staticClass:"title",on:{click:e.remoteDebug}},[e._v(e._s(e.subtitle))])]),e._v(" "),e._m(0)])};r._withStripped=!0;o("./node_modules/core-js/modules/es.function.name.js");var a=o("./src/back-icon.png"),i=o.n(a),s="";n.default.Native&&(s="本地调试");var l={name:"App",watch:{$route:function(e){void 0!==e.name?this.subtitle=e.name:this.subtitle=s}},data:function(){return{imgs:{backButtonImg:i.a},subtitle:s,DEBUG_SUBTITLE:s}},methods:{goToHome:function(){this.$router.back()},remoteDebug:function(){this.subtitle===s&&n.default.Native&&n.default.Native.callNative("TestModule","debug",this.$options.parent.$options.rootViewId)}}},u=(o("./src/pages/feed/app.vue?vue&type=style&index=0&scope=true&lang=css&"),o("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),c=Object(u.a)(l,r,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("ul",{staticClass:"content"},[t("li",{staticClass:"content-title"},[t("p",[this._v("\\u65b0\\u95fb\\u5217\\u8868")])])])])}],!1,null,null,null);c.options.__file="src/pages/feed/app.vue";var d=c.exports,p=o("./src/util.js");n.default.config.productionTip=!1;var f=new n.default({appName:"feed",rootView:"#root",render:function(e){return e(d)},iPhone:{statusBar:{disabled:!0,backgroundColor:4283416717}}});f.$start((function(){})),Object(p.a)(f)},"./src/util.js":function(e,t,o){"use strict";function n(e){e}o.d(t,"a",(function(){return n}))},"dll-reference hippyVueBase":function(e,t){e.exports=hippyVueBase}});