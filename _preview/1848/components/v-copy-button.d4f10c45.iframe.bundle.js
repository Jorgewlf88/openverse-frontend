/*! For license information please see v-copy-button.d4f10c45.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"./node_modules/.pnpm/clipboard@2.0.8/node_modules/clipboard/dist/clipboard.js":function(module,exports,__webpack_require__){!function webpackUniversalModuleDefinition(root,factory){module.exports=factory()}(0,(function(){return function(){var __webpack_modules__={134:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{default:function(){return clipboard}});var tiny_emitter=__webpack_require__(279),tiny_emitter_default=__webpack_require__.n(tiny_emitter),listen=__webpack_require__(370),listen_default=__webpack_require__.n(listen),src_select=__webpack_require__(817),select_default=__webpack_require__.n(src_select);function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var ClipboardAction=function(){function ClipboardAction(options){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ClipboardAction),this.resolveOptions(options),this.initSelection()}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(ClipboardAction,[{key:"resolveOptions",value:function resolveOptions(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=options.action,this.container=options.container,this.emitter=options.emitter,this.target=options.target,this.text=options.text,this.trigger=options.trigger,this.selectedText=""}},{key:"initSelection",value:function initSelection(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function createFakeElement(){var isRTL="rtl"===document.documentElement.getAttribute("dir");this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[isRTL?"right":"left"]="-9999px";var yPosition=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(yPosition,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function selectFake(){var _this=this,fakeElem=this.createFakeElement();this.fakeHandlerCallback=function(){return _this.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(fakeElem),this.selectedText=select_default()(fakeElem),this.copyText(),this.removeFake()}},{key:"removeFake",value:function removeFake(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function selectTarget(){this.selectedText=select_default()(this.target),this.copyText()}},{key:"copyText",value:function copyText(){var succeeded;try{succeeded=document.execCommand(this.action)}catch(err){succeeded=!1}this.handleResult(succeeded)}},{key:"handleResult",value:function handleResult(succeeded){this.emitter.emit(succeeded?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function clearSelection(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function destroy(){this.removeFake()}},{key:"action",set:function set(){var action=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=action,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function get(){return this._action}},{key:"target",set:function set(target){if(void 0!==target){if(!target||"object"!==_typeof(target)||1!==target.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&target.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(target.hasAttribute("readonly")||target.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=target}},get:function get(){return this._target}}]),ClipboardAction}(),clipboard_action=ClipboardAction;function clipboard_typeof(obj){return clipboard_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},clipboard_typeof(obj)}function clipboard_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return!call||"object"!==clipboard_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function getAttributeValue(suffix,element){var attribute="data-clipboard-".concat(suffix);if(element.hasAttribute(attribute))return element.getAttribute(attribute)}var Clipboard=function(_Emitter){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Clipboard,_Emitter);var _super=_createSuper(Clipboard);function Clipboard(trigger,options){var _this;return function clipboard_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Clipboard),(_this=_super.call(this)).resolveOptions(options),_this.listenClick(trigger),_this}return function clipboard_createClass(Constructor,protoProps,staticProps){return protoProps&&clipboard_defineProperties(Constructor.prototype,protoProps),staticProps&&clipboard_defineProperties(Constructor,staticProps),Constructor}(Clipboard,[{key:"resolveOptions",value:function resolveOptions(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof options.action?options.action:this.defaultAction,this.target="function"==typeof options.target?options.target:this.defaultTarget,this.text="function"==typeof options.text?options.text:this.defaultText,this.container="object"===clipboard_typeof(options.container)?options.container:document.body}},{key:"listenClick",value:function listenClick(trigger){var _this2=this;this.listener=listen_default()(trigger,"click",(function(e){return _this2.onClick(e)}))}},{key:"onClick",value:function onClick(e){var trigger=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new clipboard_action({action:this.action(trigger),target:this.target(trigger),text:this.text(trigger),container:this.container,trigger:trigger,emitter:this})}},{key:"defaultAction",value:function defaultAction(trigger){return getAttributeValue("action",trigger)}},{key:"defaultTarget",value:function defaultTarget(trigger){var selector=getAttributeValue("target",trigger);if(selector)return document.querySelector(selector)}},{key:"defaultText",value:function defaultText(trigger){return getAttributeValue("text",trigger)}},{key:"destroy",value:function destroy(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function isSupported(){var action=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],actions="string"==typeof action?[action]:action,support=!!document.queryCommandSupported;return actions.forEach((function(action){support=support&&!!document.queryCommandSupported(action)})),support}}]),Clipboard}(tiny_emitter_default()),clipboard=Clipboard},828:function(module){if("undefined"!=typeof Element&&!Element.prototype.matches){var proto=Element.prototype;proto.matches=proto.matchesSelector||proto.mozMatchesSelector||proto.msMatchesSelector||proto.oMatchesSelector||proto.webkitMatchesSelector}module.exports=function closest(element,selector){for(;element&&9!==element.nodeType;){if("function"==typeof element.matches&&element.matches(selector))return element;element=element.parentNode}}},438:function(module,__unused_webpack_exports,__webpack_require__){var closest=__webpack_require__(828);function _delegate(element,selector,type,callback,useCapture){var listenerFn=listener.apply(this,arguments);return element.addEventListener(type,listenerFn,useCapture),{destroy:function(){element.removeEventListener(type,listenerFn,useCapture)}}}function listener(element,selector,type,callback){return function(e){e.delegateTarget=closest(e.target,selector),e.delegateTarget&&callback.call(element,e)}}module.exports=function delegate(elements,selector,type,callback,useCapture){return"function"==typeof elements.addEventListener?_delegate.apply(null,arguments):"function"==typeof type?_delegate.bind(null,document).apply(null,arguments):("string"==typeof elements&&(elements=document.querySelectorAll(elements)),Array.prototype.map.call(elements,(function(element){return _delegate(element,selector,type,callback,useCapture)})))}},879:function(__unused_webpack_module,exports){exports.node=function(value){return void 0!==value&&value instanceof HTMLElement&&1===value.nodeType},exports.nodeList=function(value){var type=Object.prototype.toString.call(value);return void 0!==value&&("[object NodeList]"===type||"[object HTMLCollection]"===type)&&"length"in value&&(0===value.length||exports.node(value[0]))},exports.string=function(value){return"string"==typeof value||value instanceof String},exports.fn=function(value){return"[object Function]"===Object.prototype.toString.call(value)}},370:function(module,__unused_webpack_exports,__webpack_require__){var is=__webpack_require__(879),delegate=__webpack_require__(438);module.exports=function listen(target,type,callback){if(!target&&!type&&!callback)throw new Error("Missing required arguments");if(!is.string(type))throw new TypeError("Second argument must be a String");if(!is.fn(callback))throw new TypeError("Third argument must be a Function");if(is.node(target))return function listenNode(node,type,callback){return node.addEventListener(type,callback),{destroy:function(){node.removeEventListener(type,callback)}}}(target,type,callback);if(is.nodeList(target))return function listenNodeList(nodeList,type,callback){return Array.prototype.forEach.call(nodeList,(function(node){node.addEventListener(type,callback)})),{destroy:function(){Array.prototype.forEach.call(nodeList,(function(node){node.removeEventListener(type,callback)}))}}}(target,type,callback);if(is.string(target))return function listenSelector(selector,type,callback){return delegate(document.body,selector,type,callback)}(target,type,callback);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(module){module.exports=function select(element){var selectedText;if("SELECT"===element.nodeName)element.focus(),selectedText=element.value;else if("INPUT"===element.nodeName||"TEXTAREA"===element.nodeName){var isReadOnly=element.hasAttribute("readonly");isReadOnly||element.setAttribute("readonly",""),element.select(),element.setSelectionRange(0,element.value.length),isReadOnly||element.removeAttribute("readonly"),selectedText=element.value}else{element.hasAttribute("contenteditable")&&element.focus();var selection=window.getSelection(),range=document.createRange();range.selectNodeContents(element),selection.removeAllRanges(),selection.addRange(range),selectedText=selection.toString()}return selectedText}},279:function(module){function E(){}E.prototype={on:function(name,callback,ctx){var e=this.e||(this.e={});return(e[name]||(e[name]=[])).push({fn:callback,ctx:ctx}),this},once:function(name,callback,ctx){var self=this;function listener(){self.off(name,listener),callback.apply(ctx,arguments)}return listener._=callback,this.on(name,listener,ctx)},emit:function(name){for(var data=[].slice.call(arguments,1),evtArr=((this.e||(this.e={}))[name]||[]).slice(),i=0,len=evtArr.length;i<len;i++)evtArr[i].fn.apply(evtArr[i].ctx,data);return this},off:function(name,callback){var e=this.e||(this.e={}),evts=e[name],liveEvents=[];if(evts&&callback)for(var i=0,len=evts.length;i<len;i++)evts[i].fn!==callback&&evts[i].fn._!==callback&&liveEvents.push(evts[i]);return liveEvents.length?e[name]=liveEvents:delete e[name],this}},module.exports=E,module.exports.TinyEmitter=E}},__webpack_module_cache__={};function __webpack_require__(moduleId){if(__webpack_module_cache__[moduleId])return __webpack_module_cache__[moduleId].exports;var module=__webpack_module_cache__[moduleId]={exports:{}};return __webpack_modules__[moduleId](module,module.exports,__webpack_require__),module.exports}return __webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,{a:getter}),getter},__webpack_require__.d=function(exports,definition){for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.o=function(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)},__webpack_require__(134)}().default}))},"./src/components/VCopyButton.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/web.timers.js");var dist_clipboard=__webpack_require__("./node_modules/.pnpm/clipboard@2.0.8/node_modules/clipboard/dist/clipboard.js"),clipboard_default=__webpack_require__.n(dist_clipboard),runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_cche4dkf5nk7uchm2m2hnrg5am/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),VButton=__webpack_require__("./src/components/VButton.vue"),components_VCopyButtonvue_type_script_lang_ts_=Object(runtime.b)({name:"VCopyButton",components:{VButton:VButton.default},props:{el:{type:String,required:!0},id:{type:String,required:!0}},emits:["copied","copy-failed"],setup:function setup(props,_ref){var emit=_ref.emit,clipboard=Object(runtime.p)(null),success=Object(runtime.p)(!1);function setFocusOnButton(){var button=document.getElementById(props.id);button&&button.focus()}var onCopySuccess=function onCopySuccess(e){success.value=!0,emit("copied",{content:e.text}),setTimeout((function(){success.value=!1}),2e3),e.clearSelection(),setFocusOnButton()},onCopyError=function onCopyError(e){emit("copy-failed"),e.clearSelection(),setFocusOnButton()};return Object(runtime.j)((function(){clipboard.value=new clipboard_default.a("#".concat(props.id)),clipboard.value.on("success",onCopySuccess),clipboard.value.on("error",onCopyError)})),Object(runtime.i)((function(){var _a;return null===(_a=clipboard.value)||void 0===_a?void 0:_a.destroy()})),{clipboard:clipboard,success:success}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(components_VCopyButtonvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("VButton",{staticClass:"py-2 px-3 text-sr",attrs:{id:_vm.id,type:"button",variant:"secondary",size:"disabled","data-clipboard-target":_vm.el}},[_vm.success?_c("span",[_vm._v("\n    "+_vm._s(_vm.$t("media-details.reuse.copy-license.copied"))+"\n  ")]):_c("span",[_vm._v("\n    "+_vm._s(_vm.$t("media-details.reuse.copy-license.copy-text"))+"\n  ")])])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VButton:__webpack_require__("./src/components/VButton.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VCopyButton",exportName:"default",description:"",tags:{},props:[{name:"el",type:{name:"string"},required:!0},{name:"id",type:{name:"string"},required:!0}],events:[{name:"copied"},{name:"copy-failed"}]}}}]);
//# sourceMappingURL=v-copy-button.d4f10c45.iframe.bundle.js.map