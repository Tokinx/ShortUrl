import{c as _,_ as x,a as v,L as g,b as y,I as b}from"./loader-2-acRQ5pLp.js";import{r,o as c,c as f,a as e,b as l,w as d,d as i,u as a,e as u,f as w}from"./index-BmrMJDcr.js";/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=_("MoveRightIcon",[["path",{d:"M18 8L22 12L18 16",key:"1r0oui"}],["path",{d:"M2 12H22",key:"1m8cig"}]]),S={class:"flex flex-col gap-1"},L={__name:"UserAuthForm",setup(m){const o=r(""),t=r(!1),p=async n=>{n.preventDefault(),t.value=!0,await fetch("/api/?action=login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:o.value})}).then(s=>s.json()).then(s=>{setTimeout(()=>{s.code!==0?alert(s.msg):window.location.href="/dash"},300)}).finally(()=>{setTimeout(()=>{t.value=!1},1e3)})};return(n,s)=>(c(),f("form",{onSubmit:p,class:"flex flex-col gap-4 px-4"},[e("div",S,[l(a(x),null,{default:d(()=>[i(" Password ")]),_:1}),l(a(v),{type:"password",placeholder:"Enter your password","auto-capitalize":"none","auto-correct":"off",disabled:t.value,modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=h=>o.value=h),required:"",minlength:"6",maxlength:"32",class:"invalid:focus:border-red-500"},null,8,["disabled","modelValue"])]),l(a(y),{disabled:t.value,class:"w-full"},{default:d(()=>[i(" Sign In "),t.value?(c(),u(a(g),{key:1,class:"w-4 h-4 ml-2 animate-spin"})):(c(),u(a(k),{key:0,class:"w-4 h-4 ml-2"}))]),_:1},8,["disabled"])],32))}},T={class:"container relative flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0 h-screen"},V={class:"relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"},I=e("div",{class:"absolute inset-0 bg-zinc-900"},[e("img",{src:"https://imgapi.cn/bing.php",class:"object-cover w-full h-full"})],-1),j={class:"relative z-20 flex items-center text-lg font-medium"},B=e("div",{class:"relative z-20 mt-auto"},[e("blockquote",{class:"space-y-2"},[e("p",{class:"text-lg"}," “This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.” "),e("footer",{class:"text-sm"},"Sofia Davis")])],-1),M={class:"lg:p-8"},N={class:"mx-auto flex w-full flex-col justify-center space-y-8 sm:w-[350px]"},$=e("div",{class:"flex flex-col text-center space-y-2"},[e("h1",{class:"text-3xl font-semibold tracking-tight"}," Login to your account "),e("p",{class:"text-sm text-muted-foreground"},"Manage your short URL")],-1),z=w('<div class="relative"><div class="absolute inset-0 flex items-center"><span class="w-full border-t"></span></div></div><p class="px-4 text-center text-sm text-muted-foreground"> By clicking continue, you agree to our <a href="/terms" class="underline underline-offset-4 hover:text-primary"> Terms of Service </a> and <a href="/privacy" class="underline underline-offset-4 hover:text-primary"> Privacy Policy </a> . </p>',2),U={__name:"index",setup(m){return(o,t)=>(c(),f("div",T,[e("div",V,[I,e("div",j,[l(a(b),{icon:"tabler:api-app",class:"text-3xl mr-2"}),i(" luot.cn ")]),B]),e("div",M,[e("div",N,[$,l(L),z])])]))}};export{U as default};
