(window.webpackJsonp=window.webpackJsonp||[]).push([[205,10,11,17,21,207],{"./src/assets/image_not_available_placeholder.png":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/image_not_available_placeholder.png"},"./src/components/VAllResultsGrid/VAllResultsGrid.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_efpv4fxq5hpknftnxyzfo2vyxy/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),media=__webpack_require__("./src/stores/media/index.ts"),use_focus_filters=__webpack_require__("./src/composables/use-focus-filters.ts"),focus_management=__webpack_require__("./src/utils/focus-management.ts"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),VImageCellSquare=__webpack_require__("./src/components/VAllResultsGrid/VImageCellSquare.vue"),VAudioCell=__webpack_require__("./src/components/VAllResultsGrid/VAudioCell.vue"),VLoadMore=__webpack_require__("./src/components/VLoadMore.vue"),VContentLink=__webpack_require__("./src/components/VContentLink/VContentLink.vue"),VGridSkeleton=__webpack_require__("./src/components/VSkeleton/VGridSkeleton.vue"),VAllResultsGrid_VAllResultsGridvue_type_script_lang_ts_=Object(runtime.b)({name:"VAllResultsGrid",components:{VImageCellSquare:VImageCellSquare.default,VAudioCell:VAudioCell.default,VLoadMore:VLoadMore.default,VGridSkeleton:VGridSkeleton.default,VContentLink:VContentLink.default},setup:function setup(){var i18n=Object(use_i18n.a)(),mediaStore=Object(media.a)(),resultsLoading=Object(runtime.a)((function(){return Boolean(mediaStore.fetchState.fetchingError)||mediaStore.fetchState.isFetching})),allMedia=Object(runtime.a)((function(){return mediaStore.allMedia})),isError=Object(runtime.a)((function(){return!!mediaStore.fetchState.fetchingError})),fetchState=Object(runtime.a)((function(){return mediaStore.fetchState})),errorHeader=Object(runtime.a)((function(){var type=i18n.t("browse-page.search-form.audio");return i18n.t("browse-page.fetching-error",{type:type})})),resultCounts=Object(runtime.a)((function(){return mediaStore.resultCountsPerMediaType})),noResults=Object(runtime.a)((function(){return fetchState.value.isFinished&&0===allMedia.value.length})),focusFilters=Object(use_focus_filters.a)();return{isError:isError,errorHeader:errorHeader,allMedia:allMedia,fetchState:fetchState,resultsLoading:resultsLoading,resultCounts:resultCounts,noResults:noResults,handleShiftTab:function handleShiftTab(event,i){0===i&&focusFilters.focusFilterSidebar(event,focus_management.a.Last)}}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VAllResultsGrid_VAllResultsGridvue_type_script_lang_ts_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",[_vm.noResults?_vm._e():_c("div",{staticClass:"results-grid mb-4 grid grid-cols-2 gap-4 lg:grid-cols-5 2xl:grid-cols-6"},_vm._l(_vm.resultCounts,(function(ref,i){var mediaType=ref[0],count=ref[1];return _c("VContentLink",{key:mediaType,staticClass:"lg:col-span-2",attrs:{"media-type":mediaType,"results-count":count,to:_vm.localePath({path:"/search/"+mediaType,query:_vm.$route.query})},on:{"shift-tab":function($event){return _vm.handleShiftTab($event,i)}}})})),1),_vm._v(" "),_vm.resultsLoading&&0===_vm.allMedia.length?_c("VGridSkeleton",{attrs:{"is-for-tab":"all"}}):_c("div",{staticClass:"results-grid grid grid-cols-2 gap-4 lg:grid-cols-5 2xl:grid-cols-6"},_vm._l(_vm.allMedia,(function(item){return _c("div",{key:item.id},["image"===item.frontendMediaType?_c("VImageCellSquare",{key:item.id,attrs:{image:item}}):_vm._e(),_vm._v(" "),"audio"===item.frontendMediaType?_c("VAudioCell",{key:item.id,attrs:{audio:item}}):_vm._e()],1)})),0),_vm._v(" "),_c("VLoadMore",{staticClass:"mt-4"})],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VContentLink:__webpack_require__("./src/components/VContentLink/VContentLink.vue").default,VGridSkeleton:__webpack_require__("./src/components/VSkeleton/VGridSkeleton.vue").default,VImageCellSquare:__webpack_require__("./src/components/VAllResultsGrid/VImageCellSquare.vue").default,VAudioCell:__webpack_require__("./src/components/VAllResultsGrid/VAudioCell.vue").default,VLoadMore:__webpack_require__("./src/components/VLoadMore.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VAllResultsGrid",exportName:"default",description:"",tags:{}}},"./src/components/VAllResultsGrid/VAudioCell.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_efpv4fxq5hpknftnxyzfo2vyxy/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),VAudioTrack=__webpack_require__("./src/components/VAudioTrack/VAudioTrack.vue"),VAllResultsGrid_VAudioCellvue_type_script_lang_ts_=Object(runtime.b)({components:{VAudioTrack:VAudioTrack.default},props:{audio:{type:Object,required:!0}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VAllResultsGrid_VAudioCellvue_type_script_lang_ts_,(function(){var _h=this.$createElement;return(this._self._c||_h)("VAudioTrack",{attrs:{audio:this.audio,layout:"box"}})}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VAudioTrack:__webpack_require__("./src/components/VAudioTrack/VAudioTrack.vue").default}),__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"VAudioCell",description:"",tags:{},props:[{name:"audio",type:{name:"AudioDetail"},required:!0}]}},"./src/components/VAllResultsGrid/VImageCellSquare.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/es.array.concat.js");var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_efpv4fxq5hpknftnxyzfo2vyxy/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),VLink=__webpack_require__("./src/components/VLink.vue"),VLicense=__webpack_require__("./src/components/VLicense/VLicense.vue"),image_not_available_placeholder=__webpack_require__("./src/assets/image_not_available_placeholder.png"),image_not_available_placeholder_default=__webpack_require__.n(image_not_available_placeholder),toAbsolutePath=function toAbsolutePath(url){var prefix=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://";return url.indexOf("http://")>=0||url.indexOf("https://")>=0?url:"".concat(prefix).concat(url)},VAllResultsGrid_VImageCellSquarevue_type_script_lang_ts_=Object(runtime.b)({name:"VImageCell",components:{VLink:VLink.default,VLicense:VLicense.default},props:{image:{type:Object,required:!0}},setup:function setup(props){return{getImageUrl:function getImageUrl(){if(!props.image)return"";var url=props.image.thumbnail||props.image.url;return toAbsolutePath(url)},getImageForeignUrl:function getImageForeignUrl(){return toAbsolutePath(props.image.foreign_landing_url)},onImageLoadError:function onImageLoadError(event){var element=event.target;element.src!==props.image.url?element.src=props.image.url:element.src=image_not_available_placeholder_default.a}}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VAllResultsGrid_VImageCellSquarevue_type_script_lang_ts_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("VLink",{staticClass:"group block rounded-sm focus:outline-none focus:ring-[3px] focus:ring-pink focus:ring-offset-[3px]",attrs:{itemprop:"contentUrl",title:_vm.image.title,href:"/image/"+_vm.image.id}},[_c("figure",{staticClass:"relative aspect-square rounded-sm",attrs:{itemprop:"image",itemscope:"",itemtype:"https://schema.org/ImageObject"}},[_c("img",{ref:"img",staticClass:"h-full w-full rounded-sm bg-dark-charcoal-10 object-cover text-dark-charcoal-10",attrs:{loading:"lazy",alt:_vm.image.title,src:_vm.getImageUrl(),width:250,height:250,itemprop:"thumbnailUrl"},on:{error:function($event){return _vm.onImageLoadError($event)}}}),_vm._v(" "),_c("figcaption",{staticClass:"invisible absolute left-0 bottom-0 bg-white p-1 text-dark-charcoal group-hover:visible group-focus:visible"},[_c("span",{staticClass:"sr-only"},[_vm._v(_vm._s(_vm.image.title))]),_vm._v(" "),_c("VLicense",{attrs:{license:_vm.image.license,"hide-name":!0}})],1)])])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLicense:__webpack_require__("./src/components/VLicense/VLicense.vue").default,VLink:__webpack_require__("./src/components/VLink.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VImageCell",exportName:"default",description:"",tags:{},props:[{name:"image",type:{name:"ImageDetail"},required:!0}]}},"./src/components/VLoadMore.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var asyncToGenerator=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.17.2/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),dist_runtime=(__webpack_require__("./node_modules/.pnpm/regenerator-runtime@0.13.9/node_modules/regenerator-runtime/runtime.js"),__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_efpv4fxq5hpknftnxyzfo2vyxy/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs")),media=__webpack_require__("./src/stores/media/index.ts"),search=__webpack_require__("./src/stores/search.ts"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),VButton=__webpack_require__("./src/components/VButton.vue"),VLoadMorevue_type_script_lang_ts_=Object(dist_runtime.b)({name:"VLoadMore",components:{VButton:VButton.default},setup:function setup(){var i18n=Object(use_i18n.a)(),mediaStore=Object(media.a)(),searchStore=Object(search.b)(),canLoadMore=Object(dist_runtime.a)((function(){return""!==searchStore.searchTerm&&mediaStore.fetchState.canFetch&&mediaStore.resultCount>0})),onLoadMore=function(){var _ref=Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(canLoadMore.value){_context.next=2;break}return _context.abrupt("return");case 2:return _context.next=4,mediaStore.fetchMedia({shouldPersistMedia:!0});case 4:case"end":return _context.stop()}}),_callee)})));return function onLoadMore(){return _ref.apply(this,arguments)}}(),isFetching=Object(dist_runtime.a)((function(){return mediaStore.fetchState.isFetching})),endOfResults=Object(dist_runtime.a)((function(){return!(canLoadMore.value||isFetching.value)}));return{buttonLabel:Object(dist_runtime.a)((function(){return i18n.t("browse-page.".concat(isFetching.value?"loading":"load"))})),isFetching:isFetching,onLoadMore:onLoadMore,canLoadMore:canLoadMore,endOfResults:endOfResults}}}),components_VLoadMorevue_type_script_lang_ts_=VLoadMorevue_type_script_lang_ts_,componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(components_VLoadMorevue_type_script_lang_ts_,(function(){var _h=this.$createElement;return(this._self._c||_h)("VButton",{directives:[{name:"show",rawName:"v-show",value:!this.endOfResults,expression:"!endOfResults"}],attrs:{size:"large",variant:"full",disabled:!this.canLoadMore||this.isFetching,"data-testid":"load-more"},on:{click:this.onLoadMore}},[this._v("\n  "+this._s(this.buttonLabel)+"\n")])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VButton:__webpack_require__("./src/components/VButton.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VLoadMore",exportName:"default",description:"",tags:{}}},"./src/composables/use-load-more.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useLoadMore}));var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.17.2/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/.pnpm/regenerator-runtime@0.13.9/node_modules/regenerator-runtime/runtime.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_efpv4fxq5hpknftnxyzfo2vyxy/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs")),_stores_media__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stores/media/index.ts"),useLoadMore=function useLoadMore(searchTerm){var canLoadMore=Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_3__.a)((function(){return""!==searchTerm.value.trim()})),onLoadMore=function(){var _ref=Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.a)(regeneratorRuntime.mark((function _callee(){var mediaStore;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(mediaStore=Object(_stores_media__WEBPACK_IMPORTED_MODULE_4__.a)(),!canLoadMore.value){_context.next=4;break}return _context.next=4,mediaStore.fetchMedia({shouldPersistMedia:!0});case 4:case"end":return _context.stop()}}),_callee)})));return function onLoadMore(){return _ref.apply(this,arguments)}}();return{canLoadMore:canLoadMore,onLoadMore:onLoadMore}}},"./src/pages/search/index.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_efpv4fxq5hpknftnxyzfo2vyxy/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),use_load_more=__webpack_require__("./src/composables/use-load-more.ts"),search_page_types=__webpack_require__("./src/pages/search/search-page.types.ts"),VAllResultsGrid=__webpack_require__("./src/components/VAllResultsGrid/VAllResultsGrid.vue"),pages_searchvue_type_script_lang_ts_=Object(runtime.b)({name:"SearchIndex",components:{VAllResultsGrid:VAllResultsGrid.default},props:search_page_types.propTypes,setup:function setup(props){Object(runtime.s)({title:"".concat(props.searchTerm," | Openverse")});var searchTermRef=Object(runtime.o)(props,"searchTerm"),_useLoadMore=Object(use_load_more.a)(searchTermRef);return{canLoadMore:_useLoadMore.canLoadMore,onLoadMore:_useLoadMore.onLoadMore}},head:{meta:[{hid:"robots",name:"robots",content:"noindex"}]}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(pages_searchvue_type_script_lang_ts_,(function(){var _h=this.$createElement;return(this._self._c||_h)("VAllResultsGrid",{attrs:{"can-load-more":this.canLoadMore},on:{"load-more":this.onLoadMore}})}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VAllResultsGrid:__webpack_require__("./src/components/VAllResultsGrid/VAllResultsGrid.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"SearchIndex",exportName:"default",description:"",tags:{}}},"./src/pages/search/search-page.types.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"propTypes",(function(){return propTypes}));var propTypes={resultItems:{type:Object,required:!0},fetchState:{type:Object,required:!0},isFilterVisible:{type:Boolean,required:!1},searchTerm:{type:String,required:!0},supported:{type:Boolean,required:!1}}}}]);