(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"./src/components/VContentSwitcher/VSearchTypeRadio.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _iconMapping,defineProperty=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.17.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_efpv4fxq5hpknftnxyzfo2vyxy/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),media=__webpack_require__("./src/constants/media.ts"),emits=__webpack_require__("./src/types/emits.ts"),VIcon=__webpack_require__("./src/components/VIcon/VIcon.vue"),audio_wave=__webpack_require__("./src/assets/icons/audio-wave.svg"),audio_wave_default=__webpack_require__.n(audio_wave),icons_image=__webpack_require__("./src/assets/icons/image.svg"),image_default=__webpack_require__.n(icons_image),all_content=__webpack_require__("./src/assets/icons/all-content.svg"),all_content_default=__webpack_require__.n(all_content),iconMapping=(_iconMapping={},Object(defineProperty.a)(_iconMapping,media.b,audio_wave_default.a),Object(defineProperty.a)(_iconMapping,media.c,image_default.a),Object(defineProperty.a)(_iconMapping,media.a,all_content_default.a),_iconMapping),VContentSwitcher_VSearchTypeRadiovue_type_script_lang_ts_=Object(runtime.b)({name:"VSearchTypeRadio",components:{VIcon:VIcon.default},props:{searchType:{type:String,required:!0},selected:{type:Boolean,default:!1}},emits:{select:Object(emits.a)()},setup:function setup(props,_ref){var emit=_ref.emit;return{iconPath:Object(runtime.a)((function(){return iconMapping[props.searchType]})),handleClick:function handleClick(){return emit("select",props.searchType)}}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VContentSwitcher_VSearchTypeRadiovue_type_script_lang_ts_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("button",{staticClass:"flex flex-row items-center rounded-sm border border-dark-charcoal p-2 text-sr font-semibold pe-3 hover:bg-dark-charcoal hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-pink focus-visible:hover:border-white",class:[_vm.selected?"bg-dark-charcoal text-white focus-visible:border focus-visible:border-white":"bg-tx focus-visible:border-tx"],attrs:{type:"button","aria-pressed":_vm.selected},on:{click:_vm.handleClick}},[_c("VIcon",{staticClass:"flex-shrink-0 me-1",attrs:{"icon-path":_vm.iconPath}}),_vm._v(" "),_c("span",[_vm._v(_vm._s(_vm.$t("search-type."+_vm.searchType)))])],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VIcon:__webpack_require__("./src/components/VIcon/VIcon.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VSearchTypeRadio",exportName:"default",description:"",tags:{},props:[{name:"searchType",description:"One of the media types supported.",type:{name:"SupportedSearchType"},required:!0},{name:"selected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"select"}]}}}]);