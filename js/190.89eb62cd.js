"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[190],{8190:function(e,t,o){o.r(t),o.d(t,{default:function(){return m}});var n=function(){var e=this,t=e._self._c;return t("div",[t("el-container",[t("el-aside",{staticStyle:{width:"200px","min-height":"100vh","background-color":"#001529"}},[t("div",{staticStyle:{height:"60px",color:"white",display:"flex","align-items":"center","justify-content":"center"}},[e._v(" 企业工作台 ")]),t("el-menu",{staticStyle:{border:"none","background-color":"red"},attrs:{"default-active":e.$route.path,"active-text-color":"#fff","background-color":"#001529",router:"","text-color":"rgba(255,255,255,0.65)"}},[t("el-menu-item",{attrs:{index:"/componentHomeView"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-house"}),t("span",[e._v("系统首页")])])],2),t("el-menu-item",{attrs:{index:"/componentInterview"}},[e._v("面试通知")]),t("el-submenu",[t("template",{slot:"title"},[t("span",[e._v("信息管理")])]),t("el-menu-item",{attrs:{index:"companyInformation"}},[e._v("查看/修改企业信息")]),t("el-menu-item",{attrs:{index:"componentPosts"}},[e._v("查看所有岗位")]),t("el-menu-item",{attrs:{index:"companyPost"}},[e._v("发布岗位")])],2),t("el-menu-item",{attrs:{index:"/"}},[e._v("用户退出")])],1)],1),t("el-container",[t("el-header"),t("el-main",[t("el-form",{ref:"form",staticStyle:{width:"400px"},attrs:{model:e.component,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"职位名称"}},[t("el-input",{model:{value:e.component.recruitmentPosition,callback:function(t){e.$set(e.component,"recruitmentPosition",t)},expression:"component.recruitmentPosition"}})],1),t("el-form-item",{attrs:{label:"职位分类"}},[t("el-input",{model:{value:e.component.jobClassification,callback:function(t){e.$set(e.component,"jobClassification",t)},expression:"component.jobClassification"}})],1),t("el-form-item",{attrs:{label:"招聘人数"}},[t("el-input",{model:{value:e.component.recruitingNumbers,callback:function(t){e.$set(e.component,"recruitingNumbers",t)},expression:"component.recruitingNumbers"}})],1),t("el-form-item",{attrs:{label:"工资"}},[t("el-input",{model:{value:e.component.wage,callback:function(t){e.$set(e.component,"wage",t)},expression:"component.wage"}})],1),t("el-form-item",{attrs:{label:"工作地点"}},[t("el-input",{model:{value:e.component.workPlace,callback:function(t){e.$set(e.component,"workPlace",t)},expression:"component.workPlace"}})],1),t("el-form-item",{attrs:{label:"职位要求:"}},[t("el-input",{attrs:{type:"textarea",autosize:"",autosize:{minRows:5,maxRows:15}},model:{value:e.component.jobRequirements,callback:function(t){e.$set(e.component,"jobRequirements",t)},expression:"component.jobRequirements"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")]),t("el-button",{attrs:{type:"danger"}},[e._v("取消保存")])],1)],1)],1)],1)],1)],1)},a=[],i=o(5720),l={name:"companyUpdatePost",data(){return{component:{}}},methods:{save(){i.A.post("/component/updatePost",this.component).then((e=>{1===e.data.code?(this.$message.success("保存成功"),location.reload()):this.$message.error(e.data.message)}))}},mounted(){i.A.get("/component/selectPostById/"+this.$route.query.id).then((e=>{this.component=e.data.data}))}},s=l,r=o(1656),c=(0,r.A)(s,n,a,!1,null,null,null),m=c.exports}}]);
//# sourceMappingURL=190.89eb62cd.js.map