webpackJsonp([5],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("router-link",{attrs:{to:"edit"}},[this._v("编辑")]),this._v(" "),e("router-link",{attrs:{to:"list"}},[this._v("列表")]),this._v(" "),e("router-link",{attrs:{to:"detail"}},[this._v("详情")])],1)},staticRenderFns:[]};var r={name:"App",components:{MyHeader:n("VU/8")(null,i,!1,function(t){n("yovI")},"data-v-72a7eb0a",null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("my-header"),this._v(" "),e("div",{staticClass:"content"},[e("keep-alive",[e("router-view")],1)],1)],1)},staticRenderFns:[]};var u=n("VU/8")(r,o,!1,function(t){n("QLH9")},null,null).exports,s=n("/ocq");a.a.use(s.a);var c=new s.a({routes:[{path:"/",name:"home",redirect:"/edit"},{path:"/edit",name:"edit",component:function(t){return n.e(0).then(function(){var e=[n("yTGp")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/list",name:"list",component:function(t){return n.e(1).then(function(){var e=[n("80bi")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/detail",name:"detail",component:function(t){return n.e(2).then(function(){var e=[n("GwIj")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"*",name:"404",component:function(t){return n.e(3).then(function(){var e=[n("+H76")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}),l=n("NYxO"),p=n("mtWM"),h=n.n(p);a.a.use(l.a);var f=new l.a.Store({state:{fruitData:[]},mutations:{saveFruitData:function(t,e){t.fruitData=e}},actions:{getFruitData:function(t){var e=t.commit;h.a.get("https://www.easy-mock.com/mock/5a656e61f13806589f3a6ed8/test/list").then(function(t){e("saveFruitData",t.data.data)}).catch(function(t){console.log(t)})}}});a.a.config.productionTip=!1,a.a.filter("formatDate",function(t){if(!t)return"";var e=new Date(t);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+(e.getDate()<10?"0"+e.getDate():e.getDate())+" "+(e.getHours()<10?"0"+e.getHours():e.getHours())+":"+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())}),new a.a({el:"#app",router:c,store:f,components:{App:u},template:"<App/>"})},QLH9:function(t,e){},yovI:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.bf0afced0f8cd44a4aad.js.map