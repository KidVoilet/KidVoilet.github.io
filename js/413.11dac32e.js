"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[413],{7794:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var l=function(){var e=this,t=e._self._c;return t("div",[t("el-container",[t("el-aside",{staticStyle:{width:"200px","min-height":"100vh","background-color":"#001529"}},[t("div",{staticStyle:{height:"60px",color:"white",display:"flex","align-items":"center","justify-content":"center"}},[e._v(" 企业工作台 ")]),t("el-menu",{staticStyle:{border:"none","background-color":"red"},attrs:{"default-active":e.$route.path,"active-text-color":"#fff","background-color":"#001529",router:"","text-color":"rgba(255,255,255,0.65)"}},[t("el-menu-item",{attrs:{index:"/componentHomeView"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-house"}),t("span",[e._v("系统首页")])])],2),t("el-menu-item",{attrs:{index:"/componentInterview"}},[e._v("面试通知")]),t("el-submenu",[t("template",{slot:"title"},[t("span",[e._v("信息管理")])]),t("el-menu-item",{attrs:{index:"companyInformation"}},[e._v("查看/修改企业信息")]),t("el-menu-item",{attrs:{index:"componentPosts"}},[e._v("查看所有岗位")]),t("el-menu-item",{attrs:{index:"companyPost"}},[e._v("发布岗位")])],2),t("el-menu-item",{attrs:{index:"/"}},[e._v("用户退出")])],1)],1),t("el-container",[t("el-header"),t("el-main",[t("el-table",{attrs:{border:"",data:e.interview}},[t("el-table-column",{attrs:{label:"职位名称",prop:"recruitmentPosition"}}),t("el-table-column",{attrs:{label:"职位分类",prop:"jobClassification"}}),t("el-table-column",{attrs:{label:"招聘人数",prop:"recruitingNumbers"}}),t("el-table-column",{attrs:{label:"工资",prop:"wage"}}),t("el-table-column",{attrs:{label:"工作地点",prop:"workPlace"}}),t("el-table-column",{attrs:{label:"职位要求",prop:"jobRequirements"}}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("el-button",{attrs:{type:"success"},on:{click:function(t){return e.update(n.row.id)}}},[e._v("修改职位")]),t("br"),t("br"),t("el-button",{attrs:{type:"warning"},on:{click:function(t){return e.del(n.row.id)}}},[e._v("删除职位")])]}}])})],1)],1)],1)],1)],1)},o=[],a=(n(4114),n(5720)),r={name:"componentPosts",data(){return{interview:[]}},methods:{del(e){a.A.get("/component/deletePost/"+e).then((e=>{this.$message.success("删除成功"),location.reload()}))},update(e){this.$router.push({path:"/companyUpdatePost",query:{id:e}}),this.$message.success("查看成功")}},mounted(){a.A.get("/component/allPost").then((e=>{console.log(e.data.data),this.interview=e.data.data}))}},s=r,i=n(1656),c=(0,i.A)(s,l,o,!1,null,null,null),u=c.exports}}]);
//# sourceMappingURL=413.11dac32e.js.map