(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c5adc3e"],{4559:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",t._l(t.notes,function(e){return n("div",{key:e.id,staticClass:"note-box"},[n("div",{staticClass:"note-layout"},[n("div",{staticClass:"note-title",on:{click:function(n){return t.viewNote(e)}}},[t._v(t._s(e.title||"未设置标题"))]),n("el-dropdown",{attrs:{trigger:"click"},on:{command:function(n){return t.handleOption(n,e.id)}}},[n("el-button",{attrs:{icon:"el-icon-setting",plain:"",size:"small",circle:""}}),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"revise"}},[t._v("修改")]),n("el-dropdown-item",{attrs:{command:"remove"}},[t._v("删除")])],1)],1)],1),n("div",{staticClass:"note-layout",on:{click:function(n){return t.viewNote(e)}}},[n("div",{staticClass:"note-label"},[n("el-tag",{attrs:{type:"danger"}},[t._v(t._s(e.label||"未分类"))])],1),n("div",{staticClass:"note-time"},[t._v(t._s(e.modified))])])])}),0)])},i=[],s={data:function(){return{notes:[]}},methods:{parseTime:function(t){t=new Date(parseInt(1e3*t));var e=t.getFullYear(),n=t.getMonth()+1,o=t.getDate(),i=t.getHours(),s=t.getMinutes();return e+"-"+n+"-"+o+" "+i+":"+s},handleOption:function(t,e){console.log(t,e),"revise"===t&&this.$router.push({name:"edit",params:{noteid:e}})},viewNote:function(t){this.$router.push({path:"/view/"+t.id})}},beforeMount:function(){var t=this;this.$post("/api/getnotes",{state:"temp"}).then(function(e){for(var n in e.notes)e.notes[n].modified=t.parseTime(e.notes[n].modified);t.notes=e.notes})}},a=s,r=(n("e963"),n("2877")),c=Object(r["a"])(a,o,i,!1,null,"a7b495da",null);e["default"]=c.exports},"8feb":function(t,e,n){},e963:function(t,e,n){"use strict";var o=n("8feb"),i=n.n(o);i.a}}]);
//# sourceMappingURL=chunk-7c5adc3e.d16e61a7.js.map