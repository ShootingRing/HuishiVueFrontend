import{_ as x,r as _,h as k,a as n,o as y,c as b,d as e,b as t,w as l,i as V,u as f,j as I,l as S,k as B,m as C,p as F,f as z,e as K}from"./index-8fb01af0.js";const M="/assets/faceDetection-fedf73b8.svg";const g=a=>(F("data-v-541a9f09"),a=a(),z(),a),N={class:"login-container"},R={class:"login-card"},q=g(()=>e("img",{src:M,alt:"视安",class:"left-icon"},null,-1)),D={class:"right-login"},T=g(()=>e("div",{class:"title"},[e("p",{class:"title-font"},"视安"),e("p",{class:"slogan"},"---您的保密管理方案"),e("p",{class:"welcome"},"Welcome Back :)")],-1)),U={class:"content"},j={__name:"login",setup(a){const d=_(null),c=_(!1),o=k({username:"",password:""}),w={username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:8,max:16,message:"长度在 8 到 16 个字符",trigger:"blur"}]},u=()=>{var r;(r=d.value)==null||r.validate(s=>{if(s)c.value=!0,window.sessionStorage.setItem("token","tempToken"),window.sessionStorage.setItem("username",o.username),window.sessionStorage.setItem("auth",0),K.push({path:"/home"});else return!1})};return(r,s)=>{const p=n("el-input"),m=n("el-form-item"),h=n("el-button"),v=n("el-form");return y(),b("div",N,[e("div",R,[q,e("div",D,[T,e("div",U,[t(v,{ref_key:"loginFormRef",ref:d,model:o,rules:w,onKeyup:V(u,["enter"])},{default:l(()=>[t(m,{prop:"username"},{default:l(()=>[t(p,{modelValue:o.username,"onUpdate:modelValue":s[0]||(s[0]=i=>o.username=i),modelModifiers:{trim:!0},placeholder:"用户名",type:"text",tabindex:"1","prefix-icon":f(I),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),t(m,{prop:"password"},{default:l(()=>[t(p,{modelValue:o.password,"onUpdate:modelValue":s[1]||(s[1]=i=>o.password=i),modelModifiers:{trim:!0},placeholder:"密码",type:"password",tabindex:"2","prefix-icon":f(S),size:"large","show-password":""},null,8,["modelValue","prefix-icon"])]),_:1}),t(h,{loading:c.value,type:"primary",size:"large",onClick:B(u,["prevent"])},{default:l(()=>[C(" 登 录 ")]),_:1},8,["loading","onClick"])]),_:1},8,["model","onKeyup"])])])])])}}},L=x(j,[["__scopeId","data-v-541a9f09"]]);export{L as default};
