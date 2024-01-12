import{_ as p,a as x}from"./Input-Mc-8ukuV.js";import{_ as h}from"./Label-5IxO_Eqv.js";import{r as u,o,c as l,a as e,b as i,w as f,d as c,u as n,t as g,e as v}from"./index-N2Cm0GkN.js";const b={class:"flex flex-col gap-1"},w={key:0,class:"icon-[mingcute--arrow-right-line] text-base ml-2"},y={key:1,class:"icon-[mingcute--loading-fill] animate-spin text-base ml-2"},k={__name:"UserAuthForm",setup(_){const a=u(""),s=u(!1),r=async d=>{d.preventDefault(),s.value=!0,await fetch("/api/?action=login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:a.value})}).then(t=>t.json()).then(t=>{setTimeout(()=>{if(t.code!==0){g({description:t.msg,variant:"destructive"});return}window.location.href="/dash"},300)}).finally(()=>{setTimeout(()=>{s.value=!1},1e3)})};return(d,t)=>(o(),l("form",{onSubmit:r,class:"flex flex-col gap-4 px-4"},[e("div",b,[i(n(h),null,{default:f(()=>[c(" Password ")]),_:1}),i(n(p),{type:"password",placeholder:"Enter your password","auto-capitalize":"none","auto-correct":"off",disabled:s.value,modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=m=>a.value=m),required:"",minlength:"6",maxlength:"32",class:"invalid:focus:border-red-500"},null,8,["disabled","modelValue"])]),i(n(x),{disabled:s.value,class:"w-full"},{default:f(()=>[c(" Sign In "),s.value?(o(),l("i",y)):(o(),l("i",w))]),_:1},8,["disabled"])],32))}},$={class:"container relative flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0 h-screen"},S={class:"relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"},V=e("div",{class:"absolute inset-0 bg-zinc-900"},[e("img",{src:"https://imgapi.cn/bing.php",class:"object-cover w-full h-full"})],-1),j={class:"relative z-20 flex items-center text-lg font-medium"},T=e("i",{class:"icon-[tabler--api-app] text-3xl mr-2"},null,-1),B={class:"lg:p-8"},N={class:"mx-auto flex w-full flex-col justify-center space-y-8 sm:w-[350px]"},z=e("div",{class:"flex flex-col text-center space-y-2"},[e("h1",{class:"text-3xl font-semibold tracking-tight"}," Login to your account "),e("p",{class:"text-sm text-muted-foreground"},"Manage your short URL")],-1),C=e("div",{class:"relative"},[e("div",{class:"absolute inset-0 flex items-center"},[e("span",{class:"w-full border-t"})])],-1),U=e("p",{class:"px-4 text-center text-sm text-muted-foreground"}," Built on Cloudflare Workers. ",-1),L={__name:"Home",setup(_){const a=location.host;return(s,r)=>(o(),l("div",$,[e("div",S,[V,e("div",j,[T,c(" "+v(n(a)),1)])]),e("div",B,[e("div",N,[z,i(k),C,U])])]))}};export{L as default};