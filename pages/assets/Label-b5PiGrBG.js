import{o as v,f as $,w,l as B,n as E,u as l,g as h,Q as O,az as A,aA as D,r as J,s as N,x as T,i as k,aq as F,N as G,aB as I,c as M,q as C,E as U,aC as W}from"./index-q9wd04kx.js";const R={__name:"Button",props:{variant:{type:null,required:!1},size:{type:null,required:!1},as:{type:String,required:!1,default:"button"},asChild:{type:Boolean,required:!1}},setup(e){return(t,n)=>(v(),$(l(A),{as:e.as,"as-child":e.asChild,class:E(l(h)(l(O)({variant:e.variant,size:e.size}),t.$attrs.class??""))},{default:w(()=>[B(t.$slots,"default")]),_:3},8,["as","as-child","class"]))}};typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const j=e=>typeof e<"u";function L(e){return JSON.parse(JSON.stringify(e))}function P(e,t,n,r={}){var o,u,i;const{clone:d=!1,passive:c=!1,eventName:g,deep:x=!1,defaultValue:z,shouldEmit:y}=r,a=D(),V=n||(a==null?void 0:a.emit)||((o=a==null?void 0:a.$emit)==null?void 0:o.bind(a))||((i=(u=a==null?void 0:a.proxy)==null?void 0:u.$emit)==null?void 0:i.bind(a==null?void 0:a.proxy));let f=g;t||(t="modelValue"),f=f||`update:${t.toString()}`;const _=s=>d?typeof d=="function"?d(s):L(s):s,q=()=>j(e[t])?_(e[t]):z,S=s=>{y?y(s)&&V(f,s):V(f,s)};if(c){const s=q(),b=J(s);let m=!1;return N(()=>e[t],p=>{m||(m=!0,b.value=_(p),T(()=>m=!1))}),N(b,p=>{!m&&(p!==e[t]||x)&&S(p)},{deep:x}),b}else return k({get(){return q()},set(s){S(s)}})}const H=Object.assign({inheritAttrs:!1},{__name:"Input",props:{defaultValue:{type:[String,Number],required:!1},modelValue:{type:[String,Number],required:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,r=t,{class:o,...u}=F(),i=P(n,"modelValue",r,{passive:!0,defaultValue:n.defaultValue});return(d,c)=>G((v(),M("input",C({"onUpdate:modelValue":c[0]||(c[0]=g=>U(i)?i.value=g:null),class:l(h)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",l(o)??"")},u),null,16)),[[I,l(i)]])}}),K={__name:"Label",props:{for:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:String,required:!1}},setup(e){const t=e;return(n,r)=>(v(),$(l(W),C(t,{class:l(h)("block text-sm tracking-tight font-medium text-foreground text-left",t.class)}),{default:w(()=>[B(n.$slots,"default")]),_:3},16,["class"]))}};export{K as _,H as a,R as b,P as u};