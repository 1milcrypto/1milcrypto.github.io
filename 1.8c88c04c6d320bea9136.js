(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/client/components/UI/elements/Loading-Spinner.vue?vue&type=script&lang=js&":/*!**********************************************************************************************************************************************************************************!*\
!*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/client/components/UI/elements/Loading-Spinner.vue?vue&type=script&lang=js& ***!
\**********************************************************************************************************************************************************************************//*!exports provided: default*/(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_exports__["default"]=({props:{width:{"default":'40px'},height:{"default":'40px'}}});}),"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/client/components/heros/Multiple-Tabs.hero.vue?vue&type=script&lang=js&":/*!*******************************************************************************************************************************************************************************!*\
!*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/client/components/heros/Multiple-Tabs.hero.vue?vue&type=script&lang=js& ***!
\*******************************************************************************************************************************************************************************//*!exports provided: default*/(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_exports__["default"]=({name:'multiTabs',data:function data(){return{};}});}),"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/client/components/layout/Layout.vue?vue&type=script&lang=js&":/*!********************************************************************************************************************************************************************!*\
!*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/client/components/layout/Layout.vue?vue&type=script&lang=js& ***!
\********************************************************************************************************************************************************************//*!exports provided: default*/(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var client_components_layout_HeaderLayout_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*!client/components/layout/HeaderLayout.vue*/"./src/client/components/layout/HeaderLayout.vue");var client_components_layout_FooterLayout_vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*!client/components/layout/FooterLayout.vue*/"./src/client/components/layout/FooterLayout.vue");__webpack_exports__["default"]=({name:"Layout",components:{"HeaderLayout":client_components_layout_HeaderLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"],"FooterLayout":client_components_layout_FooterLayout_vue__WEBPACK_IMPORTED_MODULE_1__["default"]},computed:{screenHeight:function screenHeight(){return this.$store.state.global.screenHeight;},screenWidth:function screenWidth(){return this.$store.state.global.screenWidth;}},mounted:function mounted(){var _this=this;if(typeof window==="undefined")return;this.$store.dispatch('GLOBAL_SCREEN',{screenHeight:window.innerHeight,screenWidth:window.innerWidth});this.changeFullSectionHeight();document.body.style.backgroundColor='#000';this.fullHeightSectionOnMobile(document.getElementById("aboutSection"),768);this.fullHeightSectionOnMobile(document.getElementById("coinDistributionSection"),768);this.addEvent(window,"resize",function(event){if(_this.$store.state.global.screenWidth==window.innerWidth){return;}else{_this.$store.dispatch('GLOBAL_SCREEN',{screenHeight:window.innerHeight,screenWidth:window.innerWidth});_this.changeFullSectionHeight();}});},methods:{changeFullSectionHeight:function changeFullSectionHeight(){var fullSection=document.getElementsByClassName('fullSection');var fullSectionHeight=this.screenHeight-70;for(var i=0;i<fullSection.length;i++){fullSection[i].style.height=fullSectionHeight+'px';}
this.fullHeightSectionOnMobile(document.getElementById("aboutSection"),768);this.fullHeightSectionOnMobile(document.getElementById("coinDistributionSection"),768);},fullHeightSectionOnMobile:function fullHeightSectionOnMobile(element,maxWidth){if(element===undefined||element===null)return;if(this.screenWidth<=maxWidth){element.firstChild.className+=" fullHeight";element.setAttribute('style','height:auto !important');}else element.firstChild.className=element.firstChild.className.replace("fullHeight","");},addEvent:function addEvent(object,type,callback){if(object===null||typeof object==='undefined')return;if(object.addEventListener){object.addEventListener(type,callback,false);}else if(object.attachEvent){object.attachEvent("on"+type,callback);}else{object["on"+type]=callback;}}}});}),"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/client/components/heros/Multiple-Tabs.hero.vue?vue&type=style&index=0&lang=css&":/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
!*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/client/components/heros/Multiple-Tabs.hero.vue?vue&type=style&index=0&lang=css& ***!
\***************************************************************************************************************************************************************************************************************************************************************************************//*!no static exports found*/(function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(/*!../../../../node_modules/css-loader/dist/runtime/api.js*/"./node_modules/css-loader/dist/runtime/api.js")(false);exports.push([module.i,"#browserError h3 {\n  font-size: 30px;\n  color: #c54444;\n  line-height: 35px;\n  text-align: center;\n  text-transform: uppercase;\n  width: 90% !important;\n  margin: 0 auto;\n  margin-bottom: 10px;\n}\n#browserError h4 {\n  text-align: center;\n  color: #fec02c;\n  font-size: 18px;\n  width: 90% !important;\n  margin: 0 auto;\n  margin-bottom: 20px;\n}\n#browserError {\n  position: absolute;\n}\n.browserPng {\n  margin: 0 auto;\n  display: block;\n  max-width: 90%;\n}\n",""]);}),"./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/client/components/heros/Multiple-Tabs.hero.vue?vue&type=style&index=0&lang=css&":/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
!*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/client/components/heros/Multiple-Tabs.hero.vue?vue&type=style&index=0&lang=css& ***!
\*******************************************************************************************************************************************************************************************************************************************************************************************************************//*!no static exports found*/(function(module,exports,__webpack_require__){var content=__webpack_require__(/*!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Multiple-Tabs.hero.vue?vue&type=style&index=0&lang=css&*/"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/client/components/heros/Multiple-Tabs.hero.vue?vue&type=style&index=0&lang=css&");if(typeof content==='string')content=[[module.i,content,'']];var transform;var insertInto;var options={"hmr":true}
options.transform=transform
options.insertInto=undefined;var update=__webpack_require__(/*!../../../../node_modules/style-loader/lib/addStyles.js*/"./node_modules/style-loader/lib/addStyles.js")(content,options);if(content.locals)module.exports=content.locals;if(false){}}),"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/client/components/UI/elements/Loading-Spinner.vue?vue&type=template&id=686e698d&":/*!****************************************************************************************************************************************************************************************************************************!*\
!*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/client/components/UI/elements/Loading-Spinner.vue?vue&type=template&id=686e698d& ***!
\****************************************************************************************************************************************************************************************************************************//*!exports provided: render, staticRenderFns*/(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"render",function(){return render;});__webpack_require__.d(__webpack_exports__,"staticRenderFns",function(){return staticRenderFns;});var render=function(){var _vm=this
var _h=_vm.$createElement
var _c=_vm._self._c||_h
return _c("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"https://www.w3.org/1999/xlink",x:"0px",y:"0px",width:this.width,height:this.height,viewBox:"0 0 50 50","xml:space":"preserve"}},[_c("path",{attrs:{d:"M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"}},[_c("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"}})],1)])}
var staticRenderFns=[]
render._withStripped=true}),"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/client/components/heros/Multiple-Tabs.hero.vue?vue&type=template&id=12c48f9e&":/*!*************************************************************************************************************************************************************************************************************************!*\
!*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/client/components/heros/Multiple-Tabs.hero.vue?vue&type=template&id=12c48f9e& ***!
\*************************************************************************************************************************************************************************************************************************//*!exports provided: render, staticRenderFns*/(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"render",function(){return render;});__webpack_require__.d(__webpack_exports__,"staticRenderFns",function(){return staticRenderFns;});var render=function(){var _vm=this
var _h=_vm.$createElement
var _c=_vm._self._c||_h
return _vm._m(0)}
var staticRenderFns=[function(){var _vm=this
var _h=_vm.$createElement
var _c=_vm._self._c||_h
return _c("div",{staticClass:"verticalAlignMiddle",attrs:{id:"browserError"}},[_c("h3",[_vm._v("Oops! You can't mine on multiple tabs")]),_vm._v(" "),_c("h4",[_vm._v("Please make sure you are not mining WEBD in other browser's tab.")]),_vm._v(" "),_c("img",{staticClass:"browserPng lazy",attrs:{"data-src":"/public/assets/images/darkBrowser.png",alt:"webDollar-browser",title:"webDollar-browser"}})])}]
render._withStripped=true}),"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/client/components/layout/Layout.vue?vue&type=template&id=5ca12291&":/*!**************************************************************************************************************************************************************************************************************!*\
!*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/client/components/layout/Layout.vue?vue&type=template&id=5ca12291& ***!
\**************************************************************************************************************************************************************************************************************//*!exports provided: render, staticRenderFns*/(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"render",function(){return render;});__webpack_require__.d(__webpack_exports__,"staticRenderFns",function(){return staticRenderFns;});var render=function(){var _vm=this
var _h=_vm.$createElement
var _c=_vm._self._c||_h
return _c("div",{staticStyle:{"overflow-y":"auto"}},[_c("HeaderLayout"),_vm._v(" "),_vm._m(0),_vm._v(" "),_c("div",{attrs:{id:"websiteBody"}},[_vm._t("content")],2),_vm._v(" "),_c("FooterLayout")],1)}
var staticRenderFns=[function(){var _vm=this
var _h=_vm.$createElement
var _c=_vm._self._c||_h
return _c("div",{staticClass:"backgroundVideoWrap"},[_c("video",{staticClass:"backgroundVideo",attrs:{autoplay:"",loop:""}},[_c("source",{attrs:{src:"public/assets/video/file.mp4",type:"video/mp4"}})])])}]
render._withStripped=true}),"./src/client/components/UI/elements/Loading-Spinner.vue":/*!***************************************************************!*\
!*** ./src/client/components/UI/elements/Loading-Spinner.vue ***!
\***************************************************************//*!exports provided: default*/(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _Loading_Spinner_vue_vue_type_template_id_686e698d___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*!./Loading-Spinner.vue?vue&type=template&id=686e698d&*/"./src/client/components/UI/elements/Loading-Spinner.vue?vue&type=template&id=686e698d&");var _Loading_Spinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*!./Loading-Spinner.vue?vue&type=script&lang=js&*/"./src/client/components/UI/elements/Loading-Spinner.vue?vue&type=script&lang=js&");var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*!../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js*/"./node_modules/vue-loader/lib/runtime/componentNormalizer.js");var component=Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Loading_Spinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],_Loading_Spinner_vue_vue_type_template_id_686e698d___WEBPACK_IMPORTED_MODULE_0__["render"],_Loading_Spinner_vue_vue_type_template_id_686e698d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],false,null,null,null)
if(false){var api;}
component.options.__file="src/client/components/UI/elements/Loading-Spinner.vue"
__webpack_exports__["default"]=(component.exports);}),"./src/client/components/UI/elements/Loading-Spinner.vue?vue&type=script&lang=js&":/*!****************************************************************************************!*\
!*** ./src/client/components/UI/elements/Loading-Spinner.vue?vue&type=script&lang=js& ***!
\****************************************************************************************//*!exports provided: default*/(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_Spinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*!-!../../../../../node_modules/babel-loader/lib??ref--1!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loading-Spinner.vue?vue&type=script&lang=js&*/"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/client/components/UI/elements/Loading-Spinner.vue?vue&type=script&lang=js&");__webpack_exports__["default"]=(_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_Spinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);}),"./src/client/components/UI/elements/Loading-Spinner.vue?vue&type=template&id=686e698d&":/*!**********************************************************************************************!*\
!*** ./src/client/components/UI/elements/Loading-Spinner.vue?vue&type=template&id=686e698d& ***!
\**********************************************************************************************//*!exports provided: render, staticRenderFns*/(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_Spinner_vue_vue_type_template_id_686e698d___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*!-!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Loading-Spinner.vue?vue&type=template&id=686e698d&*/"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/client/components/UI/elements/Loading-Spinner.vue?vue&type=template&id=686e698d&");__webpack_require__.d(__webpack_exports__,"render",function(){return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_Spinner_vue_vue_type_template_id_686e698d___WEBPACK_IMPORTED_MODULE_0__["render"];});__webpack_require__.d(__webpack_exports__,"staticRenderFns",function(){return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_Spinner_vue_vue_type_template_id_686e698d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];});}),"./src/client/components/heros/Multiple-Tabs.hero.vue":/*!************************************************************!*\
!*** ./src/client/components/heros/Multiple-Tabs.hero.vue ***!
\************************************************************//*!exports provided: default*/(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _Multiple_Tabs_hero_vue_vue_type_template_id_12c48f9e___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*!./Multiple-Tabs.hero.vue?vue&type=template&id=12c48f9e&*/"./src/client/components/heros/Multiple-Tabs.hero.vue?vue&type=template&id=12c48f9e&");var _Multiple_Tabs_hero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*!./Multiple-Tabs.hero.vue?vue&type=script&lang=js&*/"./src/client/components/heros/Multiple-Tabs.hero.vue?vue&type=script&lang=js&");var _Multiple_Tabs_hero_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*!./Multiple-Tabs.hero.vue?vue&type=style&index=0&lang=css&*/"./src/client/components/heros/Multiple-Tabs.hero.vue?vue&type=style&index=0&lang=css&");var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*!../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js*/"./node_modules/vue-loader/lib/runtime/componentNormalizer.js");var component=Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Multiple_Tabs_hero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],_Multiple_Tabs_hero_vue_vue_type_template_id_12c48f9e___WEBPACK_IMPORTED_MODULE_0__["render"],_Multiple_Tabs_hero_vue_vue_type_template_id_12c48f9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],false,null,null,null)
if(false){var api;}
component.options.__file="src/client/components/heros/Multiple-Tabs.hero.vue"
__webpack_exports__["default"]=(component.exports);}),"./src/client/components/heros/Multiple-Tabs.hero.vue?vue&type=script&lang=js&":/*!*************************************************************************************!*\
!*** ./src/client/components/heros/Multiple-Tabs.hero.vue?vue&type=script&lang=js& ***!
\*************************************************************************************//*!exports provided: default*/(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Multiple_Tabs_hero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*!-!../../../../node_modules/babel-loader/lib??ref--1!../../../../node_modules/vue-loader/lib??vue-loader-options!./Multiple-Tabs.hero.vue?vue&type=script&lang=js&*/"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/client/components/heros/Multiple-Tabs.hero.vue?vue&type=script&lang=js&");__webpack_exports__["default"]=(_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Multiple_Tabs_hero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);}),"./src/client/components/heros/Multiple-Tabs.hero.vue?vue&type=style&index=0&lang=css&":/*!*********************************************************************************************!*\
!*** ./src/client/components/heros/Multiple-Tabs.hero.vue?vue&type=style&index=0&lang=css& ***!
\*********************************************************************************************//*!no static exports found*/(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Multiple_Tabs_hero_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*!-!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Multiple-Tabs.hero.vue?vue&type=style&index=0&lang=css&*/"./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/client/components/heros/Multiple-Tabs.hero.vue?vue&type=style&index=0&lang=css&");var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Multiple_Tabs_hero_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Multiple_Tabs_hero_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Multiple_Tabs_hero_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__)if(__WEBPACK_IMPORT_KEY__!=='default')(function(key){__webpack_require__.d(__webpack_exports__,key,function(){return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Multiple_Tabs_hero_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];})}(__WEBPACK_IMPORT_KEY__));__webpack_exports__["default"]=(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Multiple_Tabs_hero_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a);}),"./src/client/components/heros/Multiple-Tabs.hero.vue?vue&type=template&id=12c48f9e&":/*!*******************************************************************************************!*\
!*** ./src/client/components/heros/Multiple-Tabs.hero.vue?vue&type=template&id=12c48f9e& ***!
\*******************************************************************************************//*!exports provided: render, staticRenderFns*/(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Multiple_Tabs_hero_vue_vue_type_template_id_12c48f9e___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*!-!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Multiple-Tabs.hero.vue?vue&type=template&id=12c48f9e&*/"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/client/components/heros/Multiple-Tabs.hero.vue?vue&type=template&id=12c48f9e&");__webpack_require__.d(__webpack_exports__,"render",function(){return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Multiple_Tabs_hero_vue_vue_type_template_id_12c48f9e___WEBPACK_IMPORTED_MODULE_0__["render"];});__webpack_require__.d(__webpack_exports__,"staticRenderFns",function(){return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Multiple_Tabs_hero_vue_vue_type_template_id_12c48f9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];});}),"./src/client/components/layout/Layout.vue":/*!*************************************************!*\
!*** ./src/client/components/layout/Layout.vue ***!
\*************************************************//*!exports provided: default*/(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _Layout_vue_vue_type_template_id_5ca12291___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*!./Layout.vue?vue&type=template&id=5ca12291&*/"./src/client/components/layout/Layout.vue?vue&type=template&id=5ca12291&");var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*!./Layout.vue?vue&type=script&lang=js&*/"./src/client/components/layout/Layout.vue?vue&type=script&lang=js&");var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*!../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js*/"./node_modules/vue-loader/lib/runtime/componentNormalizer.js");var component=Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],_Layout_vue_vue_type_template_id_5ca12291___WEBPACK_IMPORTED_MODULE_0__["render"],_Layout_vue_vue_type_template_id_5ca12291___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],false,null,null,null)
if(false){var api;}
component.options.__file="src/client/components/layout/Layout.vue"
__webpack_exports__["default"]=(component.exports);}),"./src/client/components/layout/Layout.vue?vue&type=script&lang=js&":/*!**************************************************************************!*\
!*** ./src/client/components/layout/Layout.vue?vue&type=script&lang=js& ***!
\**************************************************************************//*!exports provided: default*/(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*!-!../../../../node_modules/babel-loader/lib??ref--1!../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js&*/"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/client/components/layout/Layout.vue?vue&type=script&lang=js&");__webpack_exports__["default"]=(_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);}),"./src/client/components/layout/Layout.vue?vue&type=template&id=5ca12291&":/*!********************************************************************************!*\
!*** ./src/client/components/layout/Layout.vue?vue&type=template&id=5ca12291& ***!
\********************************************************************************//*!exports provided: render, staticRenderFns*/(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_5ca12291___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*!-!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=5ca12291&*/"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/client/components/layout/Layout.vue?vue&type=template&id=5ca12291&");__webpack_require__.d(__webpack_exports__,"render",function(){return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_5ca12291___WEBPACK_IMPORTED_MODULE_0__["render"];});__webpack_require__.d(__webpack_exports__,"staticRenderFns",function(){return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_5ca12291___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];});}),"./src/utils/WebDollarEmitter.js":/*!***************************************!*\
!*** ./src/utils/WebDollarEmitter.js ***!
\***************************************//*!exports provided: default*/(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*!@babel/runtime/helpers/classCallCheck*/"./node_modules/@babel/runtime/helpers/classCallCheck.js");var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*!@babel/runtime/helpers/createClass*/"./node_modules/@babel/runtime/helpers/createClass.js");var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);var WebDollarEmitter=function(){function WebDollarEmitter(){_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,WebDollarEmitter);}
_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(WebDollarEmitter,null,[{key:"on",value:function on(eventName,fCallback){this.getEmitter().on(eventName,fCallback);}},{key:"off",value:function off(eventName,fCallback){this.getEmitter().removeListener(eventName,fCallback);}},{key:"once",value:function once(eventName,fCallback){this.getEmitter().once(eventName,fCallback);}},{key:"emit",value:function emit(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}
return WebDollar.StatusEvents.emit.apply(null,args);}},{key:"getEmitter",value:function getEmitter(){return WebDollar.StatusEvents._emitter;}}]);return WebDollarEmitter;}();__webpack_exports__["default"]=(WebDollarEmitter);})}]);