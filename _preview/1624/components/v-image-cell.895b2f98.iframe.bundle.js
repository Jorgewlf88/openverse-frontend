(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./src/assets/image_not_available_placeholder.png":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/image_not_available_placeholder.png"},"./src/components/VImageGrid/VImageCell.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/es.array.concat.js");var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_efpv4fxq5hpknftnxyzfo2vyxy/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),VLicense=__webpack_require__("./src/components/VLicense/VLicense.vue"),VLink=__webpack_require__("./src/components/VLink.vue"),image_not_available_placeholder=__webpack_require__("./src/assets/image_not_available_placeholder.png"),image_not_available_placeholder_default=__webpack_require__.n(image_not_available_placeholder),maxAspect=16/9,toAbsolutePath=function toAbsolutePath(url){var prefix=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://";return url.indexOf("http://")>=0||url.indexOf("https://")>=0?url:"".concat(prefix).concat(url)},VImageGrid_VImageCellvue_type_script_lang_ts_=Object(runtime.b)({name:"VImageCell",components:{VLicense:VLicense.default,VLink:VLink.default},props:{image:{type:Object,required:!0}},setup:function setup(props){var imgHeight=Object(runtime.l)(props.image.height||100),imgWidth=Object(runtime.l)(props.image.width||100),imageAspect=Object(runtime.a)((function(){return imgWidth.value/imgHeight.value})),containerAspect=Object(runtime.a)((function(){return imageAspect.value>maxAspect?maxAspect:imageAspect.value<.75?.75:imageAspect.value})),iPadding=Object(runtime.a)((function(){return imageAspect.value<.75?1/.75*100:imageAspect.value>maxAspect?56.25:1/imageAspect.value*100})),imageWidth=Object(runtime.a)((function(){return imageAspect.value<maxAspect?100:imageAspect.value/maxAspect*100})),imageTop=Object(runtime.a)((function(){return imageAspect.value>.75?0:(.75-imageAspect.value)/(.75*imageAspect.value*.75)*-50})),imageLeft=Object(runtime.a)((function(){return imageAspect.value<maxAspect?0:(imageAspect.value-maxAspect)/maxAspect*-50})),imageUrl=Object(runtime.a)((function(){if(imageAspect.value>2.3333333333333335)return toAbsolutePath(props.image.url);var url=props.image.thumbnail||props.image.url;return toAbsolutePath(url)})),containerStyle=Object(runtime.a)((function(){var containerWidth=253.125*containerAspect.value;return"width: ".concat(containerWidth,"px;flex-grow: ").concat(containerWidth)})),figureStyle=Object(runtime.a)((function(){return"width: ".concat(imageWidth.value,"%; top: ").concat(imageTop.value,"%; left:").concat(imageLeft.value,"%;")}));return{imgHeight:imgHeight,imgWidth:imgWidth,containerStyle:containerStyle,figureStyle:figureStyle,iPadding:iPadding,imageUrl:imageUrl,getImageForeignUrl:function getImageForeignUrl(){return toAbsolutePath(props.image.foreign_landing_url)},onImageLoadError:function onImageLoadError(event){var element=event.target;element.src!==props.image.url?element.src=props.image.url:element.src=image_not_available_placeholder_default.a},getImgDimension:function getImgDimension(event){var element=event.target;imgHeight.value=element.naturalHeight,imgWidth.value=element.naturalWidth}}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VImageGrid_VImageCellvue_type_script_lang_ts_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("VLink",{staticClass:"group relative block w-full overflow-hidden rounded-sm bg-dark-charcoal-10 text-dark-charcoal-10 focus:outline-none focus:ring-[3px] focus:ring-pink focus:ring-offset-[3px]",style:_vm.containerStyle,attrs:{href:"/image/"+_vm.image.id,"aria-label":_vm.image.title},nativeOn:{keydown:function($event){return!$event.type.indexOf("key")&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")?null:$event.shiftKey?$event.ctrlKey||$event.altKey||$event.metaKey?null:_vm.$emit("shift-tab",$event):null}}},[_c("figure",{staticClass:"absolute w-full",style:_vm.figureStyle},[_c("img",{ref:"img",staticClass:"margin-auto block w-full",attrs:{loading:"lazy",alt:_vm.image.title,src:_vm.imageUrl,width:_vm.imgWidth,height:_vm.imgHeight},on:{load:_vm.getImgDimension,error:function($event){return _vm.onImageLoadError($event)}}}),_vm._v(" "),_c("figcaption",{staticClass:"invisible absolute left-0 bottom-0 bg-white p-1 text-dark-charcoal group-hover:visible group-focus:visible"},[_c("span",{staticClass:"sr-only"},[_vm._v(_vm._s(_vm.image.title))]),_vm._v(" "),_c("VLicense",{attrs:{license:_vm.image.license,"hide-name":!0}})],1)]),_vm._v(" "),_c("i",{staticClass:"block",style:"padding-bottom:"+_vm.iPadding+"%",attrs:{"aria-hidden":""}})])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLicense:__webpack_require__("./src/components/VLicense/VLicense.vue").default,VLink:__webpack_require__("./src/components/VLink.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VImageCell",exportName:"default",description:"",tags:{},props:[{name:"image",type:{name:"ImageDetail"},required:!0}],events:[{name:"shift-tab"}]}}}]);