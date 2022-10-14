(window.webpackJsonp=window.webpackJsonp||[]).push([[187,13],{"./src/components/VContentPage.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_efpv4fxq5hpknftnxyzfo2vyxy/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),components_VContentPagevue_type_script_lang_ts_=Object(runtime.b)({name:"VContentPage"}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)(components_VContentPagevue_type_script_lang_ts_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"pt-5 md:pt-10",attrs:{dir:"ltr"}},[_c("div",{staticClass:"prose-h1:text-bold prose prose-sm mx-auto mb-10 max-w-none px-6 prose-headings:font-bold prose-h1:text-4xl prose-h2:text-2xl prose-h2:font-semibold prose-h3:text-2xl prose-h3:font-semibold md:prose-base md:max-w-4xl md:prose-h1:mb-10 md:prose-h2:mt-10 md:prose-h3:mt-10 lg:mb-30 lg:px-0 lg:prose-headings:text-3xl lg:prose-h1:text-6xl xl:max-w-5xl"},[this._t("default",null,{default:""})],2)])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"VContentPage",exportName:"default",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[{name:"default",title:"binding"}]}]}},"./src/pages/preferences.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/es.regexp.flags.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/es.function.name.js");var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_efpv4fxq5hpknftnxyzfo2vyxy/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),feature_flag=__webpack_require__("./src/stores/feature-flag.ts"),constants_feature_flag=__webpack_require__("./src/constants/feature-flag.ts"),VContentPage=__webpack_require__("./src/components/VContentPage.vue"),VCheckbox=__webpack_require__("./src/components/VCheckbox/VCheckbox.vue"),pages_preferencesvue_type_script_lang_ts_=Object(runtime.b)({name:"VPreferences",components:{VContentPage:VContentPage.default,VCheckbox:VCheckbox.default},setup:function setup(){var app=Object(runtime.r)().app,featureFlagStore=Object(feature_flag.b)(),flags=Object(runtime.a)((function(){return featureFlagStore.flags}));return{ON:constants_feature_flag.e,OFF:constants_feature_flag.d,SWITCHABLE:constants_feature_flag.f,FEATURE_STATES:constants_feature_flag.c,flags:flags,featureState:featureFlagStore.featureState,handleChange:function handleChange(_ref){var name=_ref.name,checked=_ref.checked;featureFlagStore.toggleFeature(name,checked?constants_feature_flag.e:constants_feature_flag.d),app.$cookies.set("features",featureFlagStore.flagStateMap)},getFlagStatus:feature_flag.a}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(pages_preferencesvue_type_script_lang_ts_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("VContentPage",[_c("h1",[_vm._v(_vm._s(_vm.$t("pref-page.title")))]),_vm._v(" "),_vm._l([!1,!0],(function(isSwitchable){return _c("div",{key:isSwitchable},[_c("h2",[_vm._v("\n      "+_vm._s(_vm.$t("pref-page."+(isSwitchable?"":"non-")+"switchable.title"))+"\n    ")]),_vm._v(" "),_c("p",[_vm._v("\n      "+_vm._s(_vm.$t("pref-page."+(isSwitchable?"":"non-")+"switchable.desc"))+"\n    ")]),_vm._v(" "),_c("ul",{staticClass:"!ps-0"},[_vm._l(_vm.flags,(function(feature,name){return[_vm.getFlagStatus(feature)===_vm.SWITCHABLE===isSwitchable?_c("li",{key:name,staticClass:"flex flex-row items-center"},[_c("VCheckbox",{staticClass:"flex-row items-center",attrs:{id:name,checked:_vm.featureState(name)===_vm.ON,disabled:!isSwitchable},on:{change:_vm.handleChange}},[_c("div",[_c("strong",[_vm._v(_vm._s(name))]),_vm._v(" "),_c("br"),_vm._v("\n              "+_vm._s(feature.description)+"\n            ")])])],1):_vm._e()]}))],2)])})),_vm._v(" "),_c("h2",[_vm._v(_vm._s(_vm.$t("pref-page.store-state")))]),_vm._v(" "),_c("pre",[_c("code",[_vm._v(_vm._s(_vm.flags))])]),_vm._v(" "),_c("h2",[_vm._v(_vm._s(_vm.$t("pref-page.content-filtering")))]),_vm._v(" "),_c("ul",[_vm._l(_vm.flags,(function(_,featName){return[_vm._l(_vm.FEATURE_STATES,(function(featState){return[_vm.featureState(featName)===featState?_c("i18n",{key:featName+"-"+featState,attrs:{path:"pref-page.explanation",tag:"li"},scopedSlots:_vm._u([{key:"feat-name",fn:function(){return[_c("code",[_vm._v(_vm._s(featName))])]},proxy:!0},{key:"feat-state",fn:function(){return[_c("code",[_vm._v(_vm._s(featState))])]},proxy:!0}],null,!0)}):_vm._e()]}))]})),_vm._v(" "),_vm.featureState("feat_nonexistent")===_vm.ON?_c("i18n",{attrs:{path:"pref-page.explanation",tag:"li"},scopedSlots:_vm._u([{key:"feat-name",fn:function(){return[_c("code",[_vm._v(_vm._s(_vm.$t("flag-status.nonexistent")))])]},proxy:!0},{key:"feat-state",fn:function(){return[_c("code",[_vm._v(_vm._s(_vm.$t("flag-status."+_vm.ON)))])]},proxy:!0}],null,!1,4266335129)}):_vm._e()],2)],2)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VCheckbox:__webpack_require__("./src/components/VCheckbox/VCheckbox.vue").default,VContentPage:__webpack_require__("./src/components/VContentPage.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VPreferences",exportName:"default",description:"",tags:{}}}}]);