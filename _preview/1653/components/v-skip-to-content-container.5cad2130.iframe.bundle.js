(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.9.8_7oyydxtafvjqcmg5zydubwayrq/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_jgovvjlmnszlgzfyletnwk36ji/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/index.js?!./node_modules/.pnpm/unplugin@0.3.3_webpack@4.46.0/node_modules/unplugin/dist/webpack/loaders/transform.js?!./src/components/VSkipToContentContainer.vue?vue&type=style&index=0&module=true&lang=css&":function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/runtime/api.js")((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".skipButton_FKScN:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}",""]),___CSS_LOADER_EXPORT___.locals={skipButton:"skipButton_FKScN"},module.exports=___CSS_LOADER_EXPORT___},"./node_modules/.pnpm/vue-docgen-loader@1.5.0_j5ed4dj4suhyi3wzdvabtf7vta/node_modules/vue-docgen-loader/lib/index.js?!./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.9.8_7oyydxtafvjqcmg5zydubwayrq/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_jgovvjlmnszlgzfyletnwk36ji/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/index.js?!./node_modules/.pnpm/unplugin@0.3.3_webpack@4.46.0/node_modules/unplugin/dist/webpack/loaders/transform.js?!./src/components/VSkipToContentContainer.vue?vue&type=style&index=0&module=true&lang=css&":function(module,exports,__webpack_require__){var content=__webpack_require__("./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.9.8_7oyydxtafvjqcmg5zydubwayrq/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_jgovvjlmnszlgzfyletnwk36ji/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/index.js?!./node_modules/.pnpm/unplugin@0.3.3_webpack@4.46.0/node_modules/unplugin/dist/webpack/loaders/transform.js?!./src/components/VSkipToContentContainer.vue?vue&type=style&index=0&module=true&lang=css&");content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__("./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/lib/addStylesClient.js").default)("1adacb5a",content,!0,{sourceMap:!1})},"./src/components/VSkipToContentContainer.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_efpv4fxq5hpknftnxyzfo2vyxy/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),reakit_utils_focus=__webpack_require__("./src/utils/reakit-utils/focus.ts"),VTeleport=__webpack_require__("./src/components/VTeleport/VTeleport.vue"),VButton=__webpack_require__("./src/components/VButton.vue"),components_VSkipToContentContainervue_type_script_lang_js_=Object(runtime.b)({name:"VSkipToContentContainer",components:{VTeleport:VTeleport.default,VButton:VButton.default},props:{initialFocusNode:{type:HTMLElement,required:!1}},setup:function setup(props){var containerNode=Object(runtime.l)();return{containerNode:containerNode,skipToContent:function skipToContent(){if(containerNode.value||props.initialFocusNode){var tabbable=props.initialFocusNode||Object(reakit_utils_focus.b)(containerNode.value,!0);Object(reakit_utils_focus.a)(tabbable)}}}}}),VSkipToContentContainervue_type_style_index_0_module_true_lang_css_=__webpack_require__("./src/components/VSkipToContentContainer.vue?vue&type=style&index=0&module=true&lang=css&"),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/runtime/componentNormalizer.js");var component=Object(componentNormalizer.a)(components_VSkipToContentContainervue_type_script_lang_js_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{ref:"containerNode"},[this._t("default"),this._v(" "),_c("VTeleport",{attrs:{to:"skip-to-content"}},[_c("VButton",{staticClass:"ms-2 z-50 mt-2 focus:fixed focus:absolute",class:this.$style.skipButton,on:{click:this.skipToContent}},[this._v(this._s(this.$t("skip-to-content")))])],1)],2)}),[],!1,(function injectStyles(context){this.$style=VSkipToContentContainervue_type_style_index_0_module_true_lang_css_.default.locals||VSkipToContentContainervue_type_style_index_0_module_true_lang_css_.default}),null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VButton:__webpack_require__("./src/components/VButton.vue").default,VTeleport:__webpack_require__("./src/components/VTeleport/VTeleport.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VSkipToContentContainer",description:'Demarcates the section that the "skip to content"\nkeyboard accessibility button should skip to.\n\nIt also enables the button to appear on the page. If\nthis component isn\'t rendered on the page then the\nbutton will not render.',tags:{},exportName:"default",props:[{name:"initialFocusNode",type:{name:"process.server ? Object : HTMLElement"},required:!1}],slots:[{name:"default"}]}},"./src/components/VSkipToContentContainer.vue?vue&type=style&index=0&module=true&lang=css&":function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_pnpm_vue_docgen_loader_1_5_0_j5ed4dj4suhyi3wzdvabtf7vta_node_modules_vue_docgen_loader_lib_index_js_ref_10_node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_ref_15_oneOf_0_0_node_modules_pnpm_css_loader_5_2_7_webpack_4_46_0_node_modules_css_loader_dist_cjs_js_ref_15_oneOf_0_1_node_modules_pnpm_vue_loader_15_9_8_7oyydxtafvjqcmg5zydubwayrq_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_4_3_0_jgovvjlmnszlgzfyletnwk36ji_node_modules_postcss_loader_dist_cjs_js_ref_15_oneOf_0_2_node_modules_pnpm_nuxt_components_2_2_1_node_modules_nuxt_components_dist_loader_js_ref_12_0_node_modules_pnpm_vue_loader_15_9_8_pv3e62hihcgilzzlt4q6ljqzyu_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_pnpm_unplugin_0_3_3_webpack_4_46_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_28_0_VSkipToContentContainer_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/vue-docgen-loader@1.5.0_j5ed4dj4suhyi3wzdvabtf7vta/node_modules/vue-docgen-loader/lib/index.js?!./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.9.8_7oyydxtafvjqcmg5zydubwayrq/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_jgovvjlmnszlgzfyletnwk36ji/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/index.js?!./node_modules/.pnpm/unplugin@0.3.3_webpack@4.46.0/node_modules/unplugin/dist/webpack/loaders/transform.js?!./src/components/VSkipToContentContainer.vue?vue&type=style&index=0&module=true&lang=css&"),_node_modules_pnpm_vue_docgen_loader_1_5_0_j5ed4dj4suhyi3wzdvabtf7vta_node_modules_vue_docgen_loader_lib_index_js_ref_10_node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_ref_15_oneOf_0_0_node_modules_pnpm_css_loader_5_2_7_webpack_4_46_0_node_modules_css_loader_dist_cjs_js_ref_15_oneOf_0_1_node_modules_pnpm_vue_loader_15_9_8_7oyydxtafvjqcmg5zydubwayrq_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_4_3_0_jgovvjlmnszlgzfyletnwk36ji_node_modules_postcss_loader_dist_cjs_js_ref_15_oneOf_0_2_node_modules_pnpm_nuxt_components_2_2_1_node_modules_nuxt_components_dist_loader_js_ref_12_0_node_modules_pnpm_vue_loader_15_9_8_pv3e62hihcgilzzlt4q6ljqzyu_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_pnpm_unplugin_0_3_3_webpack_4_46_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_28_0_VSkipToContentContainer_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_vue_docgen_loader_1_5_0_j5ed4dj4suhyi3wzdvabtf7vta_node_modules_vue_docgen_loader_lib_index_js_ref_10_node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_ref_15_oneOf_0_0_node_modules_pnpm_css_loader_5_2_7_webpack_4_46_0_node_modules_css_loader_dist_cjs_js_ref_15_oneOf_0_1_node_modules_pnpm_vue_loader_15_9_8_7oyydxtafvjqcmg5zydubwayrq_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_4_3_0_jgovvjlmnszlgzfyletnwk36ji_node_modules_postcss_loader_dist_cjs_js_ref_15_oneOf_0_2_node_modules_pnpm_nuxt_components_2_2_1_node_modules_nuxt_components_dist_loader_js_ref_12_0_node_modules_pnpm_vue_loader_15_9_8_pv3e62hihcgilzzlt4q6ljqzyu_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_pnpm_unplugin_0_3_3_webpack_4_46_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_28_0_VSkipToContentContainer_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);__webpack_require__.d(__webpack_exports__,"default",(function(){return _node_modules_pnpm_vue_docgen_loader_1_5_0_j5ed4dj4suhyi3wzdvabtf7vta_node_modules_vue_docgen_loader_lib_index_js_ref_10_node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_ref_15_oneOf_0_0_node_modules_pnpm_css_loader_5_2_7_webpack_4_46_0_node_modules_css_loader_dist_cjs_js_ref_15_oneOf_0_1_node_modules_pnpm_vue_loader_15_9_8_7oyydxtafvjqcmg5zydubwayrq_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_4_3_0_jgovvjlmnszlgzfyletnwk36ji_node_modules_postcss_loader_dist_cjs_js_ref_15_oneOf_0_2_node_modules_pnpm_nuxt_components_2_2_1_node_modules_nuxt_components_dist_loader_js_ref_12_0_node_modules_pnpm_vue_loader_15_9_8_pv3e62hihcgilzzlt4q6ljqzyu_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_pnpm_unplugin_0_3_3_webpack_4_46_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_28_0_VSkipToContentContainer_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a}))}}]);