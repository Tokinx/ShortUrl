import{o as N,f as B,w as C,l as $,n as z,u as n,g as _,Q as E,aA as O,aB as A,r as D,s as q,x as J,i as T,aq as F,N as G,aC as I,c as M,q as U,E as W}from"./index-N2Cm0GkN.js";const k={__name:"Button",props:{variant:{type:null,required:!1},size:{type:null,required:!1},as:{type:String,required:!1,default:"button"},asChild:{type:Boolean,required:!1}},setup(e){return(t,i)=>(N(),B(n(O),{as:e.as,"as-child":e.asChild,class:z(n(_)(n(E)({variant:e.variant,size:e.size}),t.$attrs.class??""))},{default:C(()=>[$(t.$slots,"default")]),_:3},8,["as","as-child","class"]))}};typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const j=e=>typeof e<"u";function P(e){return JSON.parse(JSON.stringify(e))}function Q(e,t,i,p={}){var r,o,l;const{clone:u=!1,passive:d=!1,eventName:b,deep:v=!1,defaultValue:w,shouldEmit:V}=p,a=A(),h=i||(a==null?void 0:a.emit)||((r=a==null?void 0:a.$emit)==null?void 0:r.bind(a))||((l=(o=a==null?void 0:a.proxy)==null?void 0:o.$emit)==null?void 0:l.bind(a==null?void 0:a.proxy));let c=b;t||(t="modelValue"),c=c||`update:${t.toString()}`;const x=s=>u?typeof u=="function"?u(s):P(s):s,y=()=>j(e[t])?x(e[t]):w,S=s=>{V?V(s)&&h(c,s):h(c,s)};if(d){const s=y(),g=D(s);let f=!1;return q(()=>e[t],m=>{f||(f=!0,g.value=x(m),J(()=>f=!1))}),q(g,m=>{!f&&(m!==e[t]||v)&&S(m)},{deep:v}),g}else return T({get(){return y()},set(s){S(s)}})}const H=Object.assign({inheritAttrs:!1},{__name:"Input",props:{defaultValue:{type:[String,Number],required:!1},modelValue:{type:[String,Number],required:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const i=e,p=t,{class:r,...o}=F(),l=Q(i,"modelValue",p,{passive:!0,defaultValue:i.defaultValue});return(u,d)=>G((N(),M("input",U({"onUpdate:modelValue":d[0]||(d[0]=b=>W(l)?l.value=b:null),class:n(_)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",n(r)??"")},o),null,16)),[[I,n(l)]])}});export{H as _,k as a,Q as u};