(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06792728"],{5340:function(t,e,i){},"578f":function(t,e,i){"use strict";var s=i("5340"),n=i.n(s);n.a},d632:function(t,e,i){"use strict";var s=i("fdea"),n=i.n(s);n.a},fc0d:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("book",{attrs:{page:t.countPage}})],1)},n=[],o=(i("a481"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"note-cnt"},[t.assertSmall&&!t.isNullView?i("div",{staticClass:"note-head-small"},[i("el-input",{attrs:{size:"small",placeholder:"输入关键词",clearable:""},model:{value:t.searchFilter,callback:function(e){t.searchFilter=e},expression:"searchFilter"}}),i("el-button",{attrs:{size:"small"},on:{click:function(e){t.showPicker=!0}}},[t._v("Filter")]),i("van-popup",{attrs:{position:"bottom"},model:{value:t.showPicker,callback:function(e){t.showPicker=e},expression:"showPicker"}},[i("van-picker",{attrs:{"show-toolbar":"",columns:t.labelOptions},on:{cancel:function(e){t.showPicker=!1},confirm:t.pickerSelect}})],1)],1):t._e(),i("div",{staticClass:"note-box",attrs:{hidden:t.isNullView}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.assertSmall,expression:"!assertSmall"}],staticClass:"note-head"},[i("div",{staticClass:"book-head"},[i("i",{class:t.page.icon}),t._v("\n        "+t._s(t.page.name)+"\n      ")]),i("div",{staticClass:"filter-box"},[i("el-input",{attrs:{size:"mini",placeholder:"输入关键词",clearable:""},model:{value:t.searchFilter,callback:function(e){t.searchFilter=e},expression:"searchFilter"}}),i("span",[t._v(" ")]),i("el-select",{attrs:{size:"mini",clearable:""},model:{value:t.selectFilter,callback:function(e){t.selectFilter=e},expression:"selectFilter"}},t._l(t.labelOptions,function(t){return i("el-option",{key:t,attrs:{label:t,value:t}})}),1)],1)]),t._l(t.notesFilter,function(e){return i("div",{key:e.id,staticClass:"note-each"},[i("div",{staticClass:"click-view",on:{click:function(i){return t.viewNote(e)}}},[i("div",{staticClass:"note-title"},[i("el-tag",{attrs:{type:"danger",size:"mini"}},[t._v(t._s(e.label))]),i("div",{staticClass:"title"},[t._v(t._s(e.title))])],1),i("div",{staticClass:"note-content"},[t._v(t._s(e.content)+"...")]),i("div",{staticClass:"note-time"},[t._v(t._s(e.modified))])]),i("div",{staticClass:"btn-view"},[t.page.hideBtn?i("div",[i("el-button",{attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",circle:""},on:{click:function(i){return t.deleteNote(e.id)}}})],1):i("div",[i("el-dropdown",{attrs:{trigger:"click"},on:{command:function(i){return t.handleOption(i,e.id)}}},[i("el-button",{attrs:{icon:"el-icon-setting",plain:"",size:"mini",circle:""}}),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{command:"revise"}},[t._v("编辑")]),i("el-dropdown-item",{attrs:{command:"remove"}},[t._v("删除")])],1)],1)],1)])])})],2),i("null-view",{attrs:{hidden:!t.isNullView}})],1)}),l=[],a=i("75fc"),r=(i("ac6a"),i("5df3"),i("4f7f"),i("567f")),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"null-box"},[t._m(0),i("div",{staticClass:"go-link",on:{click:t.gotoEdit}},[i("span",[t._v("make note ")]),i("i",{staticClass:"el-icon-right"})])])},u=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"null-head"},[i("span",[t._v("Empty List")])])}],d={methods:{gotoEdit:function(){this.$router.push("/center/edit")}}},h=d,p=(i("578f"),i("2877")),f=Object(p["a"])(h,c,u,!1,null,"1ce051a0",null),v=f.exports,m={name:"bookcommon",props:["page"],components:{"null-view":v},data:function(){return{notes:[],searchFilter:"",selectFilter:"",labelOptions:[],isNullView:!1,showPicker:!1}},computed:{notesFilter:function(){var t,e,i=this;return this.searchFilter||this.selectFilter?this.selectFilter&&(t=this.notes.filter(function(t){return t.label===i.selectFilter}),!this.searchFilter)?t:this.searchFilter&&(e=this.notes.filter(function(t){return-1!==t.title.indexOf(i.searchFilter)}),!this.selectFilter)?e:r["a"].arrayIntersection(t,e):this.notes},assertSmall:function(){return 0===this.$store.state.ssize}},methods:{updateData:function(){var t=this;this.selectFilter="",this.searchFilter="",this.showPicker=!1,this.$post(this.page.posturl,{state:this.page.poststate}).then(function(e){if(e.notes.length<1)t.isNullView=!0;else{var i=new Set;for(var s in e.notes)e.notes[s].modified=r["a"].parseTime(e.notes[s].modified),e.notes[s].label=e.notes[s].label.trim()||"未分类",e.notes[s].title=e.notes[s].title||"未设置标题",i.add(e.notes[s].label);t.notes=e.notes,t.labelOptions=Object(a["a"])(i),t.isNullView=!1}}).catch(function(){t.isNullView=!0})},delNoteHere:function(t){var e=0;for(e=0;e<this.notes.length;++e)if(this.notes[e].id===t)break;this.notes.splice(e,1),this.$message.success("删除成功"),this.notes.length<1&&(this.isNullView=!0)},handleOption:function(t,e){var i=this;"revise"===t?this.$router.push({name:"edit",params:{noteid:e}}):"remove"===t&&this.$post("/api/notestate",{noteid:e,state:"del"}).then(function(){i.delNoteHere(e)})},deleteNote:function(t){var e=this;this.$confirm("是否确认永久删除该笔记","提示").then(function(){e.$post("/api/delnote",{noteid:t}).then(function(){e.delNoteHere(t)})})},viewNote:function(t){this.$router.push({path:"/view/"+t.id})},pickerSelect:function(t,e){this.selectFilter=t,this.showPicker=!1}},watch:{"$route.path":function(){this.updateData()}},beforeMount:function(){this.updateData()}},b=m,w=(i("d632"),Object(p["a"])(b,o,l,!1,null,"30671295",null)),k=w.exports,_={books:{icon:"el-icon-notebook-1",name:"我的笔记",posturl:"/api/usernotes",poststate:"save"},private:{icon:"el-icon-lock",name:"私人笔记",posturl:"/api/usernotes",poststate:"self"},drafts:{icon:"el-icon-collection",name:"草稿箱",posturl:"/api/usernotes",poststate:"temp"},recycle:{icon:"el-icon-delete",name:"回收站",posturl:"/api/usernotes",poststate:"del",hideBtn:!0}},F={components:{book:k},data:function(){return{}},computed:{countPage:function(){var t=this.$route.params.id;return _[t]?_[t]:(this.$router.replace("/404"),_.books)}},methods:{}},g=F,C=Object(p["a"])(g,s,n,!1,null,null,null);e["default"]=C.exports},fdea:function(t,e,i){}}]);
//# sourceMappingURL=chunk-06792728.4dea6419.js.map