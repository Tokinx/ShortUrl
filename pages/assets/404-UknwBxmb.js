import{_,a as f}from"./Card-pTAvZiXs.js";import{_ as g,a as u}from"./Input-nZT1d63E.js";import{r as k,o as a,c as i,l as p,w as n,u as s,a as e,d as o,e as x,b as l}from"./index-PZ_VTyFo.js";const v={class:"min-h-screen flex items-center justify-center"},b=e("div",{class:"w-[180px] shrink-0 flex items-center justify-center"},[e("span",{class:"icon-[mingcute--safe-lock-line] text-[10rem] opacity-5"})],-1),N={class:"flex flex-col w-[320px] p-5 pl-0"},P=e("h1",{class:"flex items-center gap-1 text-2xl font-bold"},[e("i",{class:"icon-[mingcute--safe-lock-line]"}),o(" Password protected ")],-1),A=e("span",{class:"text-xs text-slate-500 mt-2"}," This page is password protected, please enter your password to continue your visit. ",-1),E=e("div",{class:"w-[180px] shrink-0 flex items-center justify-center"},[e("span",{class:"icon-[mingcute--safe-alert-line] text-[10rem] opacity-5"})],-1),V={class:"flex flex-col w-[360px] p-5 pl-0"},B=e("h1",{class:"flex items-center gap-1 text-2xl font-bold"},[e("i",{class:"icon-[mingcute--safe-alert-line]"}),o(" Remind ")],-1),G=e("span",{class:"text-xs text-slate-500 mt-2"}," The website you visit may contain unknown security risks, please take care to protect personal information. ",-1),L={class:"my-5 rounded bg-slate-100 p-3 break-words text-xs min-h-16"},j=["href"],C=e("i",{class:"icon-[material-symbols--arrow-right-alt-rounded] text-lg ml-2"},null,-1),I=["src"],K={key:3,class:"flex flex-col gap-4 text-center"},S=e("h1",{class:"text-slate-500 text-4xl font-bold"},"404 Not found",-1),T=e("span",{class:"text-slate-400"}," Sorry, the page you visited does not exist. ",-1),$=[S,T],D={class:"absolute bottom-0 right-0"},U={class:"text-xs text-center text-slate-400 backdrop-blur w-full py-1 px-2 rounded-tl-lg bg-slate-300/[.3]"},R=["href"],H={__name:"404",setup(W){const t={PAGE:window.__PAGE__,LINK:window.__URL__},m=location.host,h=location.origin,c=k(""),w=r=>{r.preventDefault(),console.log(c.value)};return(r,d)=>(a(),i("div",v,[t.PAGE==="password"?(a(),p(s(f),{key:0,class:"flex"},{default:n(()=>[b,l(s(_),{orientation:"vertical",class:"!h-auto m-6 ml-0"}),e("div",N,[P,A,e("form",{class:"flex items-center h-32",onSubmit:w},[l(s(g),{type:"password",placeholder:"Password",class:"bg-white rounded-r-none",modelValue:c.value,"onUpdate:modelValue":d[0]||(d[0]=y=>c.value=y)},null,8,["modelValue"]),l(s(u),{class:"uppercase rounded-l-none w-28"},{default:n(()=>[o("Continue")]),_:1})],32)])]),_:1})):t.PAGE==="remind"?(a(),p(s(f),{key:1,class:"flex"},{default:n(()=>[E,l(s(_),{orientation:"vertical",class:"!h-auto m-6 ml-0"}),e("div",V,[B,G,e("div",L,x(t.LINK),1),e("a",{href:t.LINK,class:"flex justify-end"},[l(s(u),{variant:"link",class:"uppercase"},{default:n(()=>[o(" Continue "),C]),_:1})],8,j)])]),_:1})):t.PAGE==="cloaking"?(a(),i("iframe",{key:2,src:t.LINK,class:"w-screen h-screen",frameborder:"0",allowfullscreen:""},null,8,I)):(a(),i("div",K,$)),e("footer",D,[e("div",U,[o(" Shorten "),e("a",{href:s(h),class:"text-slate-500 mx-1"},x(s(m)),9,R),o(" Built on Cloudflare Workers. ")])])]))}};export{H as default};
