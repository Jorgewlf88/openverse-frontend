(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./src/components/VMediaInfo/VMediaLicense.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_cche4dkf5nk7uchm2m2hnrg5am/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),license=__webpack_require__("./src/utils/license.ts"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),VLicenseElements=__webpack_require__("./src/components/VLicense/VLicenseElements.vue"),VLink=__webpack_require__("./src/components/VLink.vue"),VMediaInfo_VMediaLicensevue_type_script_lang_ts_=Object(runtime.b)({name:"VMediaLicense",components:{VLicenseElements:VLicenseElements.default,VLink:VLink.default},props:{fullLicenseName:{type:String,required:!0},license:{type:String,required:!0},licenseUrl:{type:String,required:!0}},setup:function setup(props){var i18n=Object(use_i18n.a)(),isLicense=Object(runtime.a)((function(){return Object(license.d)(props.license)})),headerText=Object(runtime.a)((function(){var licenseOrTool=isLicense.value?"license":"tool";return i18n.t("media-details.reuse.".concat(licenseOrTool,"-header"))}));return{isLicense:isLicense,headerText:headerText}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VMediaInfo_VMediaLicensevue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("div",{staticClass:"media-attribution"},[_c("h3",{staticClass:"mb-4 text-base font-semibold md:text-2xl"},[_vm._v("\n    "+_vm._s(_vm.headerText)+"\n  ")]),_vm._v(" "),_vm.isLicense?[_c("i18n",{staticClass:"mb-2 block text-sm md:text-base",attrs:{path:"media-details.reuse.attribution",tag:"span"},scopedSlots:_vm._u([{key:"link",fn:function fn(){return[_c("VLink",{staticClass:"uppercase",attrs:{href:_vm.licenseUrl}},[_vm._v("\n          "+_vm._s(_vm.fullLicenseName)+"\n        ")])]},proxy:!0}],null,!1,498896493)}),_vm._v(" "),_c("VLicenseElements",{attrs:{license:_vm.license}})]:[_c("VLicenseElements",{attrs:{license:_vm.license}}),_vm._v(" "),_c("i18n",{staticClass:"text-sm font-semibold",attrs:{path:"media-details.reuse.tool.content",tag:"span"},scopedSlots:_vm._u([{key:"link",fn:function fn(){return[_c("VLink",{attrs:{"aria-label":_vm.$t("media-details.aria.attribution.tool"),href:_vm.licenseUrl}},[_vm._v(_vm._s(_vm.$t("media-details.reuse.tool.link")))])]},proxy:!0}])})]],2)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLink:__webpack_require__("./src/components/VLink.vue").default,VLicenseElements:__webpack_require__("./src/components/VLicense/VLicenseElements.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VMediaLicense",exportName:"default",description:"",tags:{},props:[{name:"fullLicenseName",type:{name:"string"},required:!0},{name:"license",type:{name:"License"},required:!0},{name:"licenseUrl",type:{name:"string"},required:!0}]}}}]);