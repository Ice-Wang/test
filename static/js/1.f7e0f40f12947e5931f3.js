webpackJsonp([1],{"80bi":function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={data:function(){return{delData:{index:null,id:null},showModal:!1,pagingnation:{count:0,page:1,page_count:1,pre_page:10}}},created:function(){this.getFruitByPage(1)},computed:{listData:function(){return this.$store.state.fruitData}},methods:{detail:function(t){this.$router.push("/detail?id="+t)},getFruitByPage:function(t){var a=this,n={page:t,pre_page:this.pagingnation.pre_page};this.$store.dispatch("getFruitData",n).then(function(t){a.pagingnation=t})},updatePage:function(t){this.pagingnation.pre_page=t.target.value,this.getFruitByPage(1)},setDelInfo:function(t,a){this.delData.index=t,this.delData.id=a,this.showModal=!0},delFruit:function(){var t=this;this.$store.dispatch("delFruitData",this.delData.id).then(function(a){t.showModal=!1,t.getFruitByPage(t.pagingnation.page)})}},components:{MyModal:n("V83M").a}},i={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"list"},[n("h4",{attrs:{align:"center"}},[t._v("库存信息")]),t._v(" "),n("table",{staticClass:"list-table"},[t._m(0),t._v(" "),t.listData.length?t._e():n("tr",[n("td",{staticClass:"no-data",attrs:{colspan:"7"}},[t._v("暂无数据")])]),t._v(" "),t._l(t.listData,function(a,e){return t.listData.length?n("tr",{key:e},[n("td",[t._v(t._s(e+1))]),t._v(" "),n("td",[t._v(t._s(a.name))]),t._v(" "),n("td",[t._v(t._s(a.in))]),t._v(" "),n("td",[t._v(t._s(a.stock))]),t._v(" "),n("td",[t._v(t._s(a.balance))]),t._v(" "),n("td",[t._v(t._s(t._f("formatDate")(a.update_at)))]),t._v(" "),n("td",[n("router-link",{staticClass:"btn btn-add",attrs:{to:"detail/"+a._id,tag:"button"}},[t._v("详情")]),t._v(" "),n("button",{staticClass:"btn btn-del",on:{click:function(n){t.setDelInfo(e,a._id)}}},[t._v("删除")])],1)]):t._e()})],2),t._v(" "),t.pagingnation.page_count>1?n("div",{staticClass:"page-box"},[t._l(t.pagingnation.page_count,function(a,e){return n("a",{key:e,staticClass:"page",class:{"cur-page":t.pagingnation.page===e+1},on:{click:function(a){t.getFruitByPage(e+1)}}},[t._v(t._s(e+1))])}),t._v(" "),n("span",{staticClass:"page-count"},[t._v("共"+t._s(t.pagingnation.count)+"条记录，每页显示\n    "),n("input",{staticClass:"pre-page",attrs:{type:"text"},domProps:{value:t.pagingnation.pre_page},on:{keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13,a.key))return null;t.updatePage(a)}}}),t._v("条")])],2):t._e(),t._v(" "),n("my-modal",{attrs:{show:t.showModal,delIndex:t.delData.index},on:{"update:show":function(a){t.showModal=a},confirm:t.delFruit}})],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("tr",[n("th",[t._v("序号")]),t._v(" "),n("th",[t._v("名称")]),t._v(" "),n("th",[t._v("入库数量")]),t._v(" "),n("th",[t._v("库存总量")]),t._v(" "),n("th",[t._v("库存余量")]),t._v(" "),n("th",[t._v("更新时间")]),t._v(" "),n("th",[t._v("操作")])])}]};var s=n("VU/8")(e,i,!1,function(t){n("bpU8")},"data-v-583c5635",null);a.default=s.exports},V83M:function(t,a,n){"use strict";var e={props:{show:{type:Boolean,default:!1},delIndex:{type:Number,default:null}},methods:{submit:function(){this.$emit("confirm")},cancel:function(){this.$emit("update:show",!1)}}},i={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("transition",{attrs:{name:"slide"}},[t.show?n("div",{staticClass:"modal"},[n("div",{staticClass:"modal-box"},[n("div",{staticClass:"modal-head"},[t._v("提示：")]),t._v(" "),n("div",{staticClass:"modal-txt"},[t._v("你确定删除第"+t._s(t.delIndex+1)+"条数据吗？")]),t._v(" "),n("div",{staticClass:"modal-btn"},[n("button",{staticClass:"btn btn-del",on:{click:t.submit}},[t._v("确定")]),t._v(" "),n("button",{staticClass:"btn btn-add",on:{click:t.cancel}},[t._v("取消")])])])]):t._e()])},staticRenderFns:[]};var s=n("VU/8")(e,i,!1,function(t){n("mga7")},"data-v-7c5262bc",null);a.a=s.exports},bpU8:function(t,a){},mga7:function(t,a){}});
//# sourceMappingURL=1.f7e0f40f12947e5931f3.js.map