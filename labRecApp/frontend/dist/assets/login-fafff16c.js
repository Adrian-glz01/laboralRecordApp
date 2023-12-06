import{_ as u,o as g,c as _,a as s,t as C,b as h,d as k,n as E,f as M,u as w,e as A,r as l,g as i,w as p,v as m,h as y,i as L}from"./index-2ea7f7dd.js";const V={name:"AlertMessageComponent",props:{show:Boolean,errorMessage:String},setup(e,{emit:o}){return{closeAlert:()=>{o("close")}}}},$={key:0,class:"alert-message"},b={class:"alert-content"};function S(e,o,a,t,d,c){return a.show?(g(),_("div",$,[s("div",b,[s("p",null,C(a.errorMessage),1),s("button",{onClick:o[0]||(o[0]=(...r)=>t.closeAlert&&t.closeAlert(...r))},"Cerrar")])])):h("",!0)}const B=u(V,[["render",S]]),D=k({name:"LoginComponent",components:{AlertMessage:B,navbarComponent:E,footerComponent:M},setup(){const e=w(),o=A(),a="Credenciales Inválidas",t={email:"",password:""};return{user_data:t,clickk:async()=>{const r=await e.login(t);console.log(e.getUserData()),console.log(e.getAuthentication()),r=="Success"?o.push("/mainPage"):r=="Error"&&console.log("Credenciales inválidas")},authStore:e,errorLoginMessage:a,clearLoginErrorMessage:()=>{e.loginError=!1}}},data(){return{isValidEmail:!0}},methods:{validateEmail(){const e=/^[^\s@]+@labrecordapp.es/;this.isValidEmail=e.test(this.user_data.email)}}}),N="/assets/Login_usuario-a705c786.png",U={class:"app"},I={class:"login_Component"},K=s("img",{alt:"Login logo",src:N},null,-1),P={class:"login_form"},R={class:"login_form"},z={class:"login_form"};function T(e,o,a,t,d,c){const r=l("navbarComponent"),f=l("footerComponent"),v=l("AlertMessage");return g(),_("div",U,[s("header",null,[i(r)]),s("div",I,[K,s("div",P,[p(s("input",{type:"text",placeholder:"Email","onUpdate:modelValue":o[0]||(o[0]=n=>e.user_data.email=n),onInput:o[1]||(o[1]=(...n)=>e.validateEmail&&e.validateEmail(...n)),class:y({valid:e.isValidEmail==!0&&e.user_data.email.length>0,invalid:e.isValidEmail==!1})},null,34),[[m,e.user_data.email]])]),s("div",R,[p(s("input",{type:"password",placeholder:"Password","onUpdate:modelValue":o[2]||(o[2]=n=>e.user_data.password=n),onKeyup:o[3]||(o[3]=L((...n)=>e.clickk&&e.clickk(...n),["enter"]))},null,544),[[m,e.user_data.password]])]),s("div",z,[s("button",{onClick:o[4]||(o[4]=(...n)=>e.clickk&&e.clickk(...n))}," Login ")])]),s("footer",null,[i(f)]),i(v,{show:e.authStore.loginError,errorMessage:e.errorLoginMessage,onClose:e.clearLoginErrorMessage},null,8,["show","errorMessage","onClose"])])}const q=u(D,[["render",T]]);export{q as default};