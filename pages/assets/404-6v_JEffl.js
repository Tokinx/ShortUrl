import{_ as c}from"./Card-8EYXbsi8.js";import{_ as x,a as l}from"./Input-fxAbI4aa.js";import{o as s,c as d,u as t,f as i,w as o,F as m,a as e,b as n,d as _}from"./index-RqglM3aK.js";const w={class:"min-h-screen flex items-center justify-center"},h=e("h1",{class:"text-2xl font-bold"},"Password protected",-1),u=e("span",{class:"text-xs text-slate-500"}," Please enter the password to view the page. ",-1),k=e("h1",{class:"text-2xl font-bold"},"Remind",-1),b=e("span",{class:"text-xs text-slate-500 mt-2"}," The website you visit may contain unknown security risks, please take care to protect personal information. ",-1),y=e("div",{class:"border my-4 rounded bg-slate-100 p-2 break-words text-xs"}," https://sspai.com/link?target=https%3A%2F%2Fwww.keyboardmaestro.com%2Fmain%2Fstore ",-1),v={href:"#"},g=e("h1",{class:"text-slate-500 text-4xl font-bold"},"404 Not found",-1),F=e("span",{class:"text-slate-400"}," Sorry, the page you visited does not exist. ",-1),E={__name:"404",setup(P){const r=window.__PAGE__,p=a=>{a.preventDefault(),a.target.password.value==="123456"&&(window.location.href="/dash")};return(a,f)=>(s(),d("div",w,[t(r)==="password"?(s(),i(t(c),{key:0,class:"flex flex-col p-8 w-full max-w-[420px]"},{default:o(()=>[h,u,e("form",{class:"flex mt-6",onSubmit:p},[n(t(x),{type:"password",placeholder:"Password",class:"bg-white rounded-r-none"}),n(t(l),{class:"rounded-l-none"},{default:o(()=>[_("Submit")]),_:1})],32)]),_:1})):t(r)==="remind"?(s(),i(t(c),{key:1,class:"flex flex-col p-8 w-full max-w-[500px] text-center"},{default:o(()=>[k,b,y,e("a",v,[n(t(l),{variant:"link"},{default:o(()=>[_(" Continue to visit ")]),_:1})])]),_:1})):(s(),d(m,{key:2},[g,F],64))]))}};export{E as default};