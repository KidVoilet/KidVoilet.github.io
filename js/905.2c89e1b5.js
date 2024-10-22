"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[905],{905:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});r(4114);var s=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{height:"100vh",display:"flex","align-items":"center","justify-content":"center"},attrs:{id:"container"}},[t("div",{staticStyle:{display:"flex",width:"25%",background:"transparent"}},[t("div",{staticStyle:{flex:"1",display:"flex","align-items":"center","justify-content":"right",background:"transparent"}},[t("el-form",{ref:"loginRef",staticStyle:{width:"70%"},attrs:{model:e.user,rules:e.rules}},[t("div",{staticStyle:{"font-size":"20px",color:"#fff3ea","text-align":"center","font-weight":"bold","margin-bottom":"20px"}},[e._v("用户登录 ")]),t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{placeholder:"请输入账号","prefix-icon":"el-icon-s-custom"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{placeholder:"请输入密码","prefix-icon":"el-icon-lock","show-password":""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),t("el-form-item",[t("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:function(t){return e.login()}}},[e._v("登录")])],1),t("div",{staticStyle:{display:"flex",height:"20px"}},[t("div",{staticStyle:{flex:"1","text-align":"left"}},[e._v("没有账号,请"),t("span",{staticStyle:{cursor:"pointer",color:"#0f9876"},on:{click:function(t){return e.$router.push("/register")}}},[e._v("注册")])]),t("div",{staticStyle:{flex:"1",color:"#0f9876","text-align":"right"}},[t("span",{staticStyle:{cursor:"pointer",color:"#0f9876"},on:{click:function(t){return e.$router.push("/componentLogin")}}},[e._v("企业登录")])])])],1)],1)])])},i=[],a=r(5720),n={name:"login",data:function(){return{user:{username:"",password:""},rules:{username:[{required:!0,message:"请输入账号",trigger:"blur"},{min:3,max:10,message:"账号长度在 4 到 10 个字符之间",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:10,message:"密码长度在 6 到 10 个字符之间",trigger:"blur"}]}}},methods:{login(){this.$refs["loginRef"].validate((e=>{e&&a.A.post("/user/login",this.user).then((e=>{1===e.data.code?(this.$router.push("/home"),this.$message.success("登录成功,欢迎你"+e.data.data.name),localStorage.setItem("kid-user",JSON.stringify(e.data))):this.$message.error(e.data.message)}))}))}}},l=n,o=r(1656),u=(0,o.A)(l,s,i,!1,null,"4b3f793c",null),c=u.exports}}]);
//# sourceMappingURL=905.2c89e1b5.js.map