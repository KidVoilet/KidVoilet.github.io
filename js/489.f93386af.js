"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[489],{9489:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var l=function(){var e=this,t=e._self._c;return t("div",[t("el-container",[t("el-aside",{staticStyle:{width:"200px","min-height":"100vh","background-color":"#001529"}},[t("div",{staticStyle:{height:"60px",color:"white",display:"flex","align-items":"center","justify-content":"center"}},[e._v(" 求职者控制台 ")]),t("el-menu",{staticStyle:{border:"none","background-color":"red"},attrs:{"default-active":e.$route.path,"active-text-color":"#fff","background-color":"#001529",router:"","text-color":"rgba(255,255,255,0.65)"}},[t("el-menu-item",{attrs:{index:"/home"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-house"}),t("span",[e._v("系统首页")])])],2),t("el-menu-item",{attrs:{index:"/recruit"}},[e._v("招聘信息")]),t("el-menu-item",{attrs:{index:"/interview"}},[e._v("面试通知")]),t("el-submenu",[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-menu"}),t("span",[e._v("用户信息管理")])]),t("el-menu-item",{attrs:{index:"self"}},[e._v("查看用户信息")]),t("el-menu-item",{attrs:{index:"resume"}},[e._v("查看个人简历")])],2),t("el-menu-item",{attrs:{index:"/"}},[e._v("用户退出")])],1)],1),t("el-container",[t("el-header"),t("el-main",[t("el-table",{attrs:{border:"",data:e.companys}},[t("el-table-column",{attrs:{label:"公司名称",prop:"name"}}),t("el-table-column",{attrs:{label:"公司地址",prop:"city"}}),t("el-table-column",{attrs:{label:"招聘岗位",prop:"recruitmentPosition"}}),t("el-table-column",{attrs:{label:"工资",prop:"wage"}}),t("el-table-column",{attrs:{label:"招聘人数",prop:"recruitingNumbers"}}),t("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.view(a.row.id)}}},[e._v("岗位详情")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.applyfor(a.row.id)}}},[e._v("申请面试")])]}}])})],1)],1)],1)],1)],1)},r=[],n=(a(4114),a(5720)),i={name:"recruit",data(){return{companys:[]}},methods:{applyfor(e){n.A.get("/user/updateInterview/"+e).then((e=>{this.$message.success("申请成功"),location.reload()}))},view(e){this.$router.push({path:"/jobDetails",query:{id:e}}),this.$message.success("查看成功")}},mounted(){n.A.post("/user/allCompany").then((e=>{console.log(e.data.data),this.companys=e.data.data;let t=this.companys.length;for(var a=0;a<t;a++)this.companys[a].wage+="元",this.companys[a].recruitingNumbers+="人"}))}},s=i,o=a(1656),u=(0,o.A)(s,l,r,!1,null,null,null),c=u.exports}}]);
//# sourceMappingURL=489.f93386af.js.map