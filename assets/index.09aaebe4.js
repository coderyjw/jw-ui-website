var Lo=Object.defineProperty,Wo=Object.defineProperties;var qo=Object.getOwnPropertyDescriptors;var ke=Object.getOwnPropertySymbols;var Go=Object.prototype.hasOwnProperty,Ko=Object.prototype.propertyIsEnumerable;var De=(e,o,n)=>o in e?Lo(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,A=(e,o)=>{for(var n in o||(o={}))Go.call(o,n)&&De(e,n,o[n]);if(ke)for(var n of ke(o))Ko.call(o,n)&&De(e,n,o[n]);return e},V=(e,o)=>Wo(e,qo(o));import{d as b,r as y,c as x,w as pe,o as a,a as p,b as C,e as z,n as U,u as _,f as N,g as Ae,h as se,i as Yo,j as g,k as r,I as Xo,l as m,m as X,p as t,H as fe,q as Z,s as d,t as Qo,F as Zo,v as i,x as S,y as ne,z as me,A as E,B as he,K as eu,C as ae,D as oe,E as ue,M as Ve,G as L,U as tu,J as be,L as ve,N as ze,O as Te,W as Se,P as Ie,T as we,Q as nu,R as ce,S as ou,V as Ue,X as ge,Y as Me,Z as ie,_ as Pe,$ as uu,a0 as lu,a1 as ru,a2 as de,a3 as su,a4 as au,a5 as cu,a6 as ee,a7 as Re,a8 as Je,a9 as q,aa as iu,ab as du,ac as _u,ad as Oe,ae as ye,af as pu,ag as _e,ah as fu,ai as mu,aj as hu,ak as bu,al as vu}from"./vendor.6fac2c01.js";const wu=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))u(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerpolicy&&(s.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?s.credentials="include":l.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}};wu();const gu=["src","alt"],yu={name:"JwAvatar"},ju=b(V(A({},yu),{props:{size:{type:[String,Number],default:"default"},src:{type:String,default:""},shape:{type:String,default:"circle"},alt:{type:String},color:{type:String},backgroundColor:{type:String}},emits:["error"],setup(e,{emit:o}){const n=e,u=y(!1),{size:l,shape:s,color:c,backgroundColor:h}=n,f=x(()=>({[`jw-avatar-${l}`]:typeof l=="string",[`jw-avatar-${s}`]:s})),$=x(()=>({width:typeof l=="number"?`${l}px`:"",height:typeof l=="number"?`${l}px`:"",color:c,backgroundColor:h}));pe(()=>n.src,()=>u.value=!1);const v=j=>{u.value=!0,o("error",j)};return(j,B)=>(a(),p("span",{class:U(["jw-avatar",_(f)]),style:N(_($))},[e.src&&!u.value?(a(),p("img",{key:0,src:e.src,alt:e.alt,onError:v},null,40,gu)):C("",!0),z(j.$slots,"default")],6))}}));const $u={key:0,class:"jw-loadingIndicator"},Eu={key:1,class:"slot-icon-left"},Bu={key:2,class:"slot-icon-right"},Fu={name:"JwButton"},je=b(V(A({},Fu),{props:{theme:{type:String,default:"default"},dashed:{type:Boolean,default:!1},size:{type:String,default:"default"},round:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},iconPlacement:{type:String,default:"left"}},setup(e){const o=e,{theme:n,dashed:u,size:l,round:s,disabled:c,circle:h}=o,f=Ae(),$=x(()=>({[`jw-theme-${n}`]:n,["is-dashed"]:u,[`jw-button-${l}`]:l,["is-round"]:s,["is-circle"]:h,["is-disabled"]:c}));return(v,j)=>(a(),p("button",{class:U(["jw-button",_($)])},[e.loading?(a(),p("span",$u)):C("",!0),e.iconPlacement==="left"&&_(f).icon?(a(),p("div",Eu,[z(v.$slots,"icon")])):C("",!0),z(v.$slots,"default"),e.iconPlacement==="right"&&_(f).icon?(a(),p("div",Bu,[z(v.$slots,"icon")])):C("",!0)],2))}}));const xu={key:0,class:"jw-divider-line horizontal"},Cu={key:2,class:"jw-divider-line vertical"},ku={name:"JwDivider"},Du=b(V(A({},ku),{props:{titlePlacement:{type:String,default:"left"},vertical:{type:Boolean,default:!1},direction:{type:String,default:"horizontal"}},setup(e){const o=e,n=x(()=>({"is-left":o.titlePlacement==="left","is-right":o.titlePlacement==="right","is-center":o.titlePlacement==="center"}));return(u,l)=>(a(),p("div",{class:U(["jw-divider",{horizontal:e.direction==="horizontal",vertical:e.direction==="vertical"}])},[e.direction==="horizontal"?(a(),p("div",xu)):C("",!0),e.direction==="horizontal"?(a(),p("div",{key:1,class:U(["jw-divider-title",_(n)])},[z(u.$slots,"default")],2)):C("",!0),e.direction==="vertical"?(a(),p("div",Cu)):C("",!0)],2))}}));const Au={name:"JwEllipsis"},Vu=b(V(A({},Au),{props:{lineClamp:{type:Number},expandTrigger:String},setup(e){const o=e,{lineClamp:n,expandTrigger:u}=o,l=x(()=>({["jw-ellipsis-line-clamp"]:n,["jw-ellipsis-expand-trigger"]:u}));let s=se({});const c=y(!1);s["-webkit-line-clamp"]=n,pe(()=>c.value,()=>{s["-webkit-line-clamp"]=c.value?"":n});const h=()=>{u==="click"&&(c.value=!c.value)};return(f,$)=>(a(),p("div",{onClick:h,class:U(["jw-ellipsis",_(l)]),style:N(_(s))},[z(f.$slots,"default")],6))}}));const zu={name:"JwGradientText"},Tu=b(V(A({},zu),{props:{type:{type:String,default:"primary"},size:{type:Number,default:16},gradient:{type:Object,default:()=>{}}},setup(e){const o=e,n=x(()=>({[`is-${o.type}`]:o.type})),u=x(()=>({fontSize:`${o.size}px`,backgroundImage:o.gradient?`linear-gradient(
      ${o.gradient.deg?o.gradient.deg+"deg":"252deg"},
      ${o.gradient.from} 0%,
      ${o.gradient.to} 100%
    )`:""}));return(l,s)=>(a(),p("div",{class:U(["jw-gradient-text",_(n)]),style:N(_(u))},[z(l.$slots,"default")],6))}}));const Su={name:"JwIcon"},te=b(V(A({},Su),{props:{depth:Number,size:{type:[Number,String],default:"40px"}},setup(e){return Yo(),(o,n)=>(a(),g(_(Xo),{class:"jw-icon",size:e.size,style:N({opacity:`${e.depth/10}`})},{default:r(()=>[z(o.$slots,"default")]),_:3},8,["size","style"]))}}));const Iu={name:"JwLink"},Uu=b(V(A({},Iu),{props:{type:{type:String,default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,deafult:!1},icon:{type:[String,Object]},iconPlacement:{type:String,default:"left"},iconSize:{type:[Number,String],default:"18px"}},setup(e){const o=e,{type:n,underline:u,disabled:l}=o,s=x(()=>({[`jw-link-${n}`]:n,["jw-link-underline"]:u,["jw-link-disabled"]:l}));return(c,h)=>{const f=m("jw-icon");return a(),p("a",{class:U(["jw-link",_(s)])},[e.icon&&e.iconPlacement==="left"?(a(),g(f,{key:0,size:e.iconSize,class:"jw-icon-left"},{default:r(()=>[(a(),g(X(e.icon)))]),_:1},8,["size"])):C("",!0),z(c.$slots,"default"),e.icon&&e.iconPlacement==="right"?(a(),g(f,{key:1,size:e.iconSize,class:"jw-icon-right"},{default:r(()=>[(a(),g(X(e.icon)))]),_:1},8,["size"])):C("",!0)],2)}}}));var D=(e,o)=>{const n=e.__vccOpts||e;for(const[u,l]of o)n[u]=l;return n};const Mu={name:"JwTag"},Pu=b(V(A({},Mu),{props:{type:{type:String,default:"default"},size:{type:String},closeable:{type:Boolean,default:!1},color:{type:Object,default:void 0}},emits:["close"],setup(e,{emit:o}){const n=e,u=x(()=>({[`is-${n.type}`]:n.type,[`is-${n.size}`]:n.size,["is-closeable"]:n.closeable})),l=x(()=>n.color?{color:n.color.color,backgroundColor:n.color.backgroundColor,borderColor:n.color.borderColor}:""),s=()=>{o("close")};return(c,h)=>{const f=m("jw-ellipsis"),$=m("jw-icon");return a(),p("div",{class:U(["jw-tag",_(u)]),style:N(_(l))},[t(f,null,{default:r(()=>[z(c.$slots,"default",{},void 0,!0)]),_:3}),e.closeable?(a(),g($,{key:0,size:18,onClick:s},{default:r(()=>[t(_(fe))]),_:1})):C("",!0)],6)}}}));var Ru=D(Pu,[["__scopeId","data-v-57db8c94"]]);const Ju={modelValue:{type:Boolean,default:!1},label:{type:String,default:""},size:{type:String,default:""},iconSize:{type:[String,Number],default:""},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},border:{type:Boolean,default:!1}},Ou=["update:modelValue","change"],Hu=(e,o)=>{const n=Z("checkboxGroupKey",void 0),u=x(()=>!!n),l=x(()=>e.label),s=x({get(){return u.value?n.modelValue:e.modelValue},set(k){u.value?n.changeEvent(k):(o("update:modelValue",k),o("change",k))}}),c=x(()=>e.size?e.size:n==null?void 0:n.size),h=x(()=>e.iconSize?e.iconSize:c.value==="large"?"12px":c.value==="small"?"8px":"10px"),f=x(()=>e.disabled||(n==null?void 0:n.disabled)),$=x(()=>f.value?u.value?s.value.indexOf(l.value)>-1?"#c2c2c2":"#fff":s.value?"#c2c2c2":"#fff":"#fff"),v=x(()=>e.indeterminate),j=x(()=>e.border),B=x(()=>({"is-checked":u.value?s.value.indexOf(l.value)>-1&&!v.value:s.value&&!v.value,[`jw-checkbox-${c.value}`]:c.value,"is-disabled":f.value,"is-indeterminate":v.value,"is-border":j.value}));return{modelValue:s,label:l,classes:B,size:c,iconSize:h,disabled:f,iconColor:$,isGroup:u,indeterminate:v,border:j}};const Nu={name:"JwCheckbox"},Lu=b(V(A({},Nu),{props:Ju,emits:Ou,setup(e,{emit:o}){const n=e,{modelValue:u,label:l,classes:s,iconSize:c,disabled:h,iconColor:f,isGroup:$,indeterminate:v}=Hu(n,o),j=()=>{if(!h.value)if($.value){const B=u.value.indexOf(l.value);B>-1?u.value.splice(B,1):u.value.push(l.value),u.value=[...u.value]}else u.value=!u.value};return(B,k)=>{const I=m("jw-icon");return a(),p("label",{class:U(["jw-checkbox",_(s)]),onClick:j,tabindex:"0"},[d("span",{class:U(["jw-checkbox-input",_(s)])},[t(I,{color:_(f),size:_(c)},{default:r(()=>[_(v)?(a(),g(_(Qo),{key:0})):(a(),g(_(Zo),{key:1}))]),_:1},8,["color","size"])],2),d("span",{class:U(["jw-checkbox-label",_(s)])},[z(B.$slots,"default",{},()=>[i(S(_(l)),1)])],2)],2)}}})),Wu={modelValue:{type:Array,default:()=>[]},size:{type:String,default:""},disabled:{type:Boolean,default:!1}},qu=["update:modelValue","change"];const Gu={class:"jw-checkbox-group"},Ku={name:"JwCheckboxGroup"},Yu=b(V(A({},Ku),{props:Wu,emits:qu,setup(e,{emit:o}){const n=e,u=l=>{o("update:modelValue",l),o("change",l)};return ne("checkboxGroupKey",se(V(A({},me(n)),{changeEvent:u}))),(l,s)=>(a(),p("label",Gu,[z(l.$slots,"default")]))}})),Xu={modelValue:{type:[Number,String]},placeholder:{type:String},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},type:{type:String,default:"text"},suffixIcon:{type:[String,Object]},prefixIcon:{type:[String,Object]},readonly:{type:Boolean,default:!1}},Qu=["update:modelValue","input","clear","blur","focus"],Zu=(e,o)=>{const n=x(()=>e.disabled),u=x(()=>e.placeholder),l=x(()=>e.clearable),s=x(()=>e.showPassword),c=y(!1),h=x(()=>e.readonly),f=x(()=>s.value?c.value?"text":"password":e.type),$=x(()=>({"is-disabled":n.value,"is-clearable":l.value,"show-password":s.value,"jw-input":f.value!=="textarea","jw-textarea":f.value==="textarea","jw-input-suffix":s.value||l.value||e.suffixIcon,"jw-input-prefix":e.prefixIcon})),v=x(()=>e.modelValue===null||e.modelValue===void 0?"":String(e.modelValue));return{disabled:n,classes:$,clearable:l,showPassword:s,type:f,passwordVisible:c,placeholder:u,suffixIcon:e.suffixIcon,prefixIcon:e.prefixIcon,readonly:h,nativeInputValue:v}};const el=["disabled","type","readonly","value","placeholder"],tl={class:"jw-input-prefix-icon"},nl={class:"jw-input-suffix-icon"},ol=["readonly","placeholder","value"],ul={name:"JwInput"},ll=b(V(A({},ul),{props:Xu,emits:Qu,setup(e,{expose:o,emit:n}){const u=e,{disabled:l,classes:s,clearable:c,type:h,passwordVisible:f,placeholder:$,suffixIcon:v,prefixIcon:j,readonly:B,nativeInputValue:k}=Zu(u),I=y(),P=y(),T=x(()=>I.value||P.value),H=O=>{const{value:K}=O.target;K!==k.value&&(n("update:modelValue",K),n("input",K))},Q=()=>{n("update:modelValue",""),n("input",""),n("clear","")},le=O=>{n("blur",O)},R=O=>{n("focus",O)},re=()=>{ae(()=>{var O;(O=T.value)==null||O.focus()})},Ce=()=>{ae(()=>{var W;(W=T.value)==null||W.blur();var O=document.getSelection(),K=document.createRange();K.selectNode(T.value),O.removeAllRanges()})},No=()=>{f.value=!f.value};return o({input:I,inputOrTextarea:T,textarea:P,blur:Ce,focus:re,select:()=>{ae(()=>{var W;(W=T.value)==null||W.focus();var O=document.getSelection(),K=document.createRange();K.selectNode(T.value),O.removeAllRanges(),O.addRange(K)})}}),(O,K)=>{const W=m("jw-icon");return a(),p("div",{class:U(_(s))},[_(h)!=="textarea"?(a(),p(E,{key:0},[d("input",{ref_key:"input",ref:I,disabled:_(l),type:_(h),class:"jw-input-inner",autocomplete:"off",readonly:_(B),value:_(k),onInput:H,onBlur:le,onFocus:R,placeholder:_($)},null,40,el),d("span",tl,[_(j)?(a(),g(W,{key:0,class:"prefix-icon",size:18,color:"#dcdfe6"},{default:r(()=>[(a(),g(X(_(j))))]),_:1})):C("",!0)]),d("span",nl,[_(v)?(a(),g(W,{key:0,class:"suffix-icon",size:18,color:"#dcdfe6"},{default:r(()=>[(a(),g(X(_(v))))]),_:1})):C("",!0),_(c)&&_(k).length>0&&!_(l)?(a(),p("div",{key:1,class:"close-icon",onClick:Q},[t(W,{size:18},{default:r(()=>[t(_(he))]),_:1})])):C("",!0),O.showPassword&&!_(l)?(a(),p("div",{key:2,class:"password-icon",onClick:No},[t(W,{size:18},{default:r(()=>[t(_(eu))]),_:1})])):C("",!0)])],64)):(a(),p("textarea",{key:1,ref_key:"textarea",ref:P,readonly:_(B),class:"jw-textarea-inner",autocomplete:"off",placeholder:_($),value:_(k),onInput:H,onBlur:le,onFocus:R},null,40,ol))],2)}}})),rl={modelValue:{type:[String,Number,Boolean],default:""},label:{type:[String,Number,Boolean],default:""},disabled:Boolean,size:String,border:Boolean},sl=["update:modelValue","change"],al=(e,o)=>{const n=Z("radioGroupKey",void 0),u=x(()=>!!n),l=x({get(){return u.value?n.modelValue:e.modelValue},set(v){u.value?n.changeEvent(v):(o("update:modelValue",v),o("change",v))}}),s=x(()=>e.disabled?e.disabled:n==null?void 0:n.disabled),c=x(()=>e.size?e.size:n==null?void 0:n.size),h=x(()=>e.label),f=x(()=>e.border?e.border:n==null?void 0:n.border),$=x(()=>({"is-checked":l.value===h.value,"is-disabled":s.value,[`jw-radio-${c.value}`]:c.value,"is-bordered":f.value}));return{modelValue:l,disabled:s,size:c,label:h,classes:$}};const cl={name:"JwRadio"},il=b(V(A({},cl),{props:rl,emits:sl,setup(e,{emit:o}){const n=e,{modelValue:u,label:l,size:s,disabled:c,classes:h}=al(n,o),f=()=>{c.value||(u.value=n.label)};return($,v)=>(a(),p("div",{class:U(["jw-radio",_(h)]),onClick:f},[d("span",{class:U(["jw-radio-input",_(h)])},null,2),d("span",{class:U(["jw-radio-label",_(h)])},[z($.$slots,"default",{},()=>[i(S(_(l)),1)])],2)],2))}})),dl={modelValue:{type:[String,Number,Boolean],default:""},disabled:Boolean,size:String,border:Boolean},_l=["update:modelValue","change"],pl={ref:"radioGroupRef",class:"jw-radio-group",role:"radiogroup"},fl={name:"JwRadioGroup"},ml=b(V(A({},fl),{props:dl,emits:_l,setup(e,{emit:o}){const n=e,u=l=>{o("update:modelValue",l),o("change",l)};return ne("radioGroupKey",se(V(A({},me(n)),{changeEvent:u}))),(l,s)=>(a(),p("div",pl,[z(l.$slots,"default")],512))}})),hl={modelValue:{type:[String,Number,Boolean,Object]},options:{type:Array,default:()=>[]},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:"\u8BF7\u9009\u62E9"},clearable:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1}},bl=["update:modelValue","change","clear"],vl=(e,o)=>{const n=x(()=>e.options),u=x(()=>e.clearable),l=y(!1),s=x(()=>e.multiple),c=x(()=>e.modelValue),h=x({get(){if(s.value)return e.options.filter(v=>c.value.includes(v.value)).map(v=>v.label);{const v=e.options.find(j=>j.value===e.modelValue);return v?v.label:""}},set(){}}),f=x(()=>e.disabled),$=x(()=>e.placeholder);return{options:n,modelValue:c,modelLabel:h,disabled:f,placeholder:$,clearable:u,closeVisible:l,multiple:s}};const wl=["tabindex"],gl=["tabindex"],yl={key:1,class:"jw-base-select jw-select-tags"},jl={class:"jw-select-dropdown"},$l={class:"no-options"},El=["onClick"],Bl={name:"JwSelect"},Fl=b(V(A({},Bl),{props:hl,emits:bl,setup(e,{emit:o}){const n=e,u=y(),{options:l,modelValue:s,modelLabel:c,disabled:h,placeholder:f,clearable:$,classes:v,closeVisible:j,multiple:B}=vl(n),k=P=>{P.disabled||(B.value&&(s.value.includes(P.value)?s.value.splice(s.value.indexOf(P.value),1):s.value.push(P.value),o("update:modelValue",s.value),o("change",s.value)),B.value||(u.value.blur(),o("update:modelValue",P.value),o("change",P.value)))},I=P=>{var T;if(B.value||(o("update:modelValue",""),o("clear","")),B.value){const H=(T=l.value.find(Q=>Q.label===P))==null?void 0:T.value;s.value.indexOf(H)>-1?s.value.splice(s.value.indexOf(H),1):s.value.splice(0,s.value.length),o("update:modelValue",s.value),o("clear",s.value)}};return(P,T)=>{const H=m("jw-icon"),Q=m("jw-tag"),le=m("jw-ellipsis");return a(),p("div",{class:U(["jw-select",{"is-disabled":_(h)}]),tabindex:_(h)?"":-1,ref_key:"selectRef",ref:u},[_(B)?C("",!0):(a(),p("div",{key:0,class:"jw-base-select",tabindex:_(h)?"":-1},[oe(d("div",{class:"jw-select-label"},S(_(c)),513),[[ue,_(c)]]),oe(d("div",{class:"jw-select-placeholder"},S(_(f)),513),[[ue,!_(c)]]),t(H,{size:18,class:"jw-select-suffix",onMousemove:T[0]||(T[0]=R=>_($)?j.value=!0:""),onMouseleave:T[1]||(T[1]=R=>_($)?j.value=!1:""),color:"rgba(194, 194, 194, 1)"},{default:r(()=>[_(j)&&_(c)?(a(),g(_(he),{key:0,onClick:I})):(a(),g(_(Ve),{key:1}))]),_:1})],8,gl)),_(B)?(a(),p("div",yl,[(a(!0),p(E,null,L(_(c),(R,re)=>(a(),g(Q,{closeable:"",key:re,onClose:Ce=>I(R)},{default:r(()=>[i(S(R),1)]),_:2},1032,["onClose"]))),128)),oe(d("div",{class:"jw-select-placeholder"},S(_(f)),513),[[ue,_(c).length===0]]),t(H,{size:18,class:"jw-select-suffix",onMousemove:T[2]||(T[2]=R=>_($)?j.value=!0:""),onMouseleave:T[3]||(T[3]=R=>_($)?j.value=!1:""),color:"rgba(194, 194, 194, 1)"},{default:r(()=>[_(j)&&_(c)?(a(),g(_(he),{key:0,onClick:I})):(a(),g(_(Ve),{key:1}))]),_:1})])):C("",!0),d("div",jl,[oe(d("div",$l,"\u65E0\u9009\u9879",512),[[ue,_(l).length===0]]),(a(!0),p(E,null,L(_(l),R=>(a(),p("span",{class:U(["jw-select-option",{"is-active":_(B)?_(s).includes(R.value):_(s)===R.value,"is-disabled":R.disabled,"is-multiple":_(B)}]),key:R.value,onClick:re=>k(R)},[t(le,null,{default:r(()=>[i(S(R.label),1)]),_:2},1024),_(B)&&_(s).includes(R.value)?(a(),g(H,{key:0,size:18,class:"jw-select-option-suffix-icon"},{default:r(()=>[t(_(tu))]),_:1})):C("",!0)],10,El))),128))])],10,wl)}}}));const xl=e=>(be("data-v-8cdff976"),e=e(),ve(),e),Cl=xl(()=>d("span",null,null,-1)),kl=[Cl],Dl={name:"JwSwitch"},Al=b(V(A({},Dl),{props:{modelValue:{type:Boolean,default:!1},activeColor:{type:String,default:"#18a058"},inactiveColor:{type:String,default:"#dbdbdb"},disabled:{type:Boolean,default:!1},size:{type:String,default:"default"}},emits:["update:modelValue"],setup(e,{emit:o}){const n=e,u=()=>{n.disabled||o("update:modelValue",!n.modelValue)},{modelValue:l,disabled:s,size:c}=me(n),h=x(()=>({["jw-switch-checked"]:l.value,["jw-switch-disabled"]:s.value,[`jw-switch-${c.value}`]:c.value}));return(f,$)=>(a(),p("button",{class:U(["jw-switch",_(h)]),onClick:u,style:N({background:_(l)?e.activeColor:e.inactiveColor})},kl,6))}}));var Vl=D(Al,[["__scopeId","data-v-8cdff976"]]);const zl={class:"jw-alert-body"},Tl={class:"jw-alert-body-title"},Sl={key:0,class:"jw-alert-body-content"},Il={name:"JwAlert"},Ul=b(V(A({},Il),{props:{title:{type:String,default:"Title"},description:{type:String,default:""},type:{type:String,default:"default"},closeable:{type:Boolean,default:!1},showIcon:Boolean,center:Boolean},emits:["close"],setup(e,{emit:o}){const n=e,u=x(()=>({[`jw-alert-${n.type}`]:n.type,"is-center":n.center,"show-close":n.closeable})),l=y(!0),s=()=>{l.value=!1,o("close")};return(c,h)=>{const f=m("jw-icon");return a(),g(we,{"leave-active-class":"animate__fadeOutUp",duration:300},{default:r(()=>[l.value?(a(),p("div",{key:0,class:U(["jw-alert animate__animated",_(u)])},[e.closeable?(a(),g(f,{key:0,class:"jw-alert-close-icon",size:18,color:"#7a7a7a",onClick:s},{default:r(()=>[t(_(fe))]),_:1})):C("",!0),z(c.$slots,"icon",{},()=>[e.showIcon?(a(),p(E,{key:0},[e.type==="info"?(a(),g(f,{key:0,class:"jw-alert-icon",size:22,color:"#3f7ee8"},{default:r(()=>[t(_(ze))]),_:1})):C("",!0),e.type==="success"?(a(),g(f,{key:1,class:"jw-alert-icon",size:22,color:"#4b9e5f"},{default:r(()=>[t(_(Te))]),_:1})):C("",!0),e.type==="warning"?(a(),g(f,{key:2,class:"jw-alert-icon",size:22,color:"#e4a341"},{default:r(()=>[t(_(Se))]),_:1})):C("",!0),e.type==="error"?(a(),g(f,{key:3,class:"jw-alert-icon",size:22,color:"#bf3f53"},{default:r(()=>[t(_(Ie))]),_:1})):C("",!0)],64)):C("",!0)]),d("div",zl,[d("div",Tl,[z(c.$slots,"title",{},()=>[i(S(e.title),1)])]),e.description?(a(),p("div",Sl,[z(c.$slots,"default",{},()=>[i(S(e.description),1)])])):C("",!0)])],2)):C("",!0)]),_:3})}}}));const Ml={class:"jw-dialog"},Pl={class:"jw-dialog-wrapper"},Rl=d("p",null,"\u8FD9\u662F\u4E00\u6761\u6D88\u606F",-1),Jl=i("\u53D6\u6D88"),Ol=i("\u786E\u8BA4"),Hl={name:"JwDialog"},Nl=b(V(A({},Hl),{props:{modelValue:{type:Boolean,default:!1},overlay:{type:!0,default:!0},title:{type:String,default:"\u6807\u9898"},overlayClosable:{type:Boolean,default:!0},confirm:{type:Function},cancel:{type:Function}},emits:["update:modelValue","onOverlayClick"],setup(e,{emit:o}){const n=e,u=()=>{o("update:modelValue",!1)},l=()=>{n.overlayClosable&&u(),o("onOverlayClick")},s=()=>{var h;((h=n.confirm)==null?void 0:h.call(n))!==!1&&u()},c=()=>{var h;((h=n.cancel)==null?void 0:h.call(n))!==!1&&u()};return(h,f)=>e.modelValue?(a(),g(nu,{key:0,to:"body"},[e.overlay?(a(),p("div",{key:0,class:"jw-dialog-overlay",onClick:l})):C("",!0),d("div",Ml,[d("div",Pl,[d("header",null,[z(h.$slots,"title",{},()=>[i(S(e.title),1)]),d("span",{class:"jw-dialog-close",onClick:u})]),d("main",null,[z(h.$slots,"default",{},()=>[Rl])]),d("footer",null,[z(h.$slots,"footer",{},()=>[t(je,{onClick:c},{default:r(()=>[Jl]),_:1}),t(je,{theme:"primary",onClick:s},{default:r(()=>[Ol]),_:1})])])])])])):C("",!0)}})),He=["success","info","warning","error"],Ll={duration:{type:Number,default:3e3},id:{type:String,default:""},offset:{type:Number,default:100},zIndex:{type:Number,default:0},onClose:{type:Function,required:!1},type:{type:String,values:He,default:"info"},message:{type:[String,Object],default:""},showClose:{type:Boolean,default:!1},center:{type:Boolean,default:!1}},Wl=["destroy"];const ql=["id"],Gl={name:"JwMessage"},Kl=b(V(A({},Gl),{props:Ll,emits:Wl,setup(e,{emit:o}){const n=e,u=y(!1);let l;const s=x(()=>({top:`${n.offset}px`,zIndex:n.zIndex}));function c(){n.duration>0&&(l=setTimeout(()=>{u.value&&f()},n.duration))}function h(){clearTimeout(l),l=void 0}function f(){u.value=!1}function $({code:v}){v==="Escape"?u.value&&f():c()}return ce(()=>{c(),u.value=!0,document.addEventListener("keydown",$)}),ou(()=>{document.removeEventListener("keydown",$)}),(v,j)=>(a(),g(we,{duration:300,"leave-active-class":"animate__zoomOut","enter-active-class":"animate__zoomIn",onBeforeLeave:v.onClose,onAfterLeave:j[0]||(j[0]=B=>v.$emit("destroy"))},{default:r(()=>[oe(d("div",{class:U(["jw-message animate__animated",{"is-close":f,"is-center":v.center}]),style:N(_(s)),id:v.id,onMouseenter:h,onMouseleave:c},[v.type==="info"?(a(),g(te,{key:0,class:"jw-message-icon",size:22,color:"#3f7ee8"},{default:r(()=>[t(_(ze))]),_:1})):C("",!0),v.type==="success"?(a(),g(te,{key:1,class:"jw-message-icon",size:22,color:"#4b9e5f"},{default:r(()=>[t(_(Te))]),_:1})):C("",!0),v.type==="warning"?(a(),g(te,{key:2,class:"jw-message-icon",size:22,color:"#e4a341"},{default:r(()=>[t(_(Se))]),_:1})):C("",!0),v.type==="error"?(a(),g(te,{key:3,class:"jw-message-icon",size:22,color:"#bf3f53"},{default:r(()=>[t(_(Ie))]),_:1})):C("",!0),z(v.$slots,"default",{},()=>[i(S(v.message),1)]),v.showClose?(a(),g(te,{key:4,size:18,class:"jw-close-icon",onClick:Ue(f,["stop"])},{default:r(()=>[t(_(fe))]),_:1},8,["onClick"])):C("",!0)],46,ql),[[ue,u.value]])]),_:3},8,["onBeforeLeave"]))}}));let Yl=1;const Xl=y(2e3),G=[],J=function(e={}){(typeof e=="string"||ge(e))&&(e={message:e});let o=e.offset||20;G.forEach(({vm:$})=>{var v;o+=(((v=$.el)==null?void 0:v.offsetHeight)||0)+16});const n=`message_${Yl++}`,u=e.onClose,l=V(A({id:n,offset:o,zIndex:Xl.value++},e),{onClose:()=>{Ql(n,u)}});let s=document.body;if(e.appendTo instanceof HTMLElement?s=e.appendTo:typeof e.appendTo=="string"&&(s=document.querySelector(e.appendTo)),!(s instanceof HTMLElement))throw new Error("JwMessage the appendTo option is not an HTMLElement. Falling back to document.body.");const c=document.createElement("div");c.className=`container_${n}`;const h=l.message,f=t(Kl,l,ge(l.message)?{default:()=>h}:null);return f.props.onDestroy=()=>{Me(null,c)},Me(f,c),G.push({vm:f}),s.appendChild(c.firstElementChild),{close:()=>f.component.proxy.visible=!1}};He.forEach(e=>{J[e]=(o={})=>((typeof o=="string"||ge(o))&&(o={message:o}),J(V(A({},o),{type:e})))});function Ql(e,o){const n=G.findIndex(({vm:c})=>e===c.component.props.id);if(n===-1)return;const{vm:u}=G[n];if(!u)return;o==null||o(u);const l=u.el.offsetHeight;G.splice(n,1);const s=G.length;if(!(s<1))for(let c=n;c<s;c++){const h=parseInt(G[c].vm.el.style.top,10)-l-16;G[c].vm.component.props.offset=h}}function Zl(){var e;for(let o=G.length-1;o>=0;o--){const n=G[o].vm.component;(e=n==null?void 0:n.proxy)==null||e.close()}}J.closeAll=Zl;const er={name:"JwAffix"},tr=b(V(A({},er),{props:{offset:{type:Number,default:0},target:{type:String},position:{type:String,default:"top"},zIndex:{type:Number,default:100}},emits:["change","scroll"],setup(e,{expose:o,emit:n}){const u=e,l=ie(),s=ie(),c=se({fixed:!1,height:0,width:0,scrollTop:0,clientHeight:0,transform:0}),h=x(()=>({height:c.fixed?`${c.height}px`:"",width:c.fixed?`${c.width}px`:""})),f=x(()=>{if(!c.fixed)return;const j=u.offset?`${u.offset}px`:0,B=c.transform?`translateY(${c.transform}px)`:"";return{height:`${c.height}px`,width:`${c.width}px`,top:u.position==="top"?j:"",bottom:u.position==="bottom"?j:"",transform:B,zIndex:u.zIndex}}),$=()=>{if(!s.value||!l.value)return;const j=s.value.getBoundingClientRect(),B=l.value.getBoundingClientRect();if(c.height=j.height,c.width=j.width,c.scrollTop=document.documentElement.scrollTop,c.clientHeight=document.documentElement.clientHeight,u.position==="top")if(u.target){const k=B.bottom-u.offset-c.height;c.fixed=u.offset>j.top&&B.bottom>0,c.transform=k<0?k:0}else c.fixed=u.offset>j.top;else if(u.target){const k=c.clientHeight-B.top-u.offset-c.height;c.fixed=c.clientHeight-u.offset<j.bottom&&c.clientHeight>B.top,c.transform=k<0?-k:0}else c.fixed=c.clientHeight-u.offset<j.bottom},v=j=>{$(),n("scroll",j)};return pe(()=>c.fixed,()=>{n("change",c.fixed)}),ce(()=>{var j;if(u.target){if(l.value=(j=document.querySelector(u.target))!=null?j:void 0,!l.value)throw new Error(`Target is not existed: ${u.target}`)}else l.value=document.documentElement;window.addEventListener("scroll",v,!0),window.addEventListener("resize",v)}),Pe(()=>{window.removeEventListener("scroll",v),window.removeEventListener("resize",v)}),o({update:$}),(j,B)=>(a(),p("div",{ref_key:"root",ref:s,class:"jw-affix",style:N(_(h))},[d("div",{class:U({"jw-affix-fixed":_(c).fixed}),style:N(_(f))},[z(j.$slots,"default")],6)],4))}}));const nr=["onClick"],or={name:"JwBacktop"},ur=b(V(A({},or),{props:{right:{type:Number,default:40},bottom:{type:Number,default:40},visibilityHeight:{type:Number,default:200},target:{type:String,default:""}},emits:["click"],setup(e,{emit:o}){const n=e,u=ie(document.documentElement),l=ie(document),s=y(!1),c=()=>{if(!u.value)return;const v=Date.now(),j=u.value.scrollTop,B=()=>{if(!u.value)return;const k=(Date.now()-v)/500;k<1?(u.value.scrollTop=j*(1-ru(k)),requestAnimationFrame(B)):u.value.scrollTop=0};requestAnimationFrame(B)},h=v=>{c(),o("click",v)},$=lu(()=>{u.value&&(s.value=u.value.scrollTop>=n.visibilityHeight)},300);return ce(()=>{var v;if(n.target){if(u.value=(v=document.querySelector(n.target))!=null?v:void 0,!u.value)throw new Error(`target is not existed: ${n.target}`);l.value=u.value,l.value.addEventListener("scroll",$)}}),Pe(()=>{l.value.removeEventListener("scroll",$)}),(v,j)=>{const B=m("jw-icon");return a(),g(we,{"leave-active-class":"animate__bounceOut","enter-active-class":"animate__bounceIn"},{default:r(()=>[s.value?(a(),p("div",{key:0,class:"jw-backtop animate__animated",style:N({right:e.right+"px",bottom:e.bottom+"px"}),onClick:Ue(h,["stop"])},[z(v.$slots,"default",{},()=>[t(B,{size:26},{default:r(()=>[t(_(uu))]),_:1})])],12,nr)):C("",!0)]),_:3})}}}));const lr={class:"jw-breadcrumb"},rr={name:"JwBreadcrumb"},sr=b(V(A({},rr),{props:{separator:{type:String,default:"/"},separatorIcon:{type:Object}},setup(e){return ne("JwBreadcrumbKey",e),(n,u)=>(a(),p("div",lr,[z(n.$slots,"default")]))}}));const ar={class:"jw-breadcrumb-item"},cr={key:1,class:"jw-breadcrumb-separator"},ir={name:"JwBreadcrumbItem"},dr=b(V(A({},ir),{props:{to:{type:Object,default:()=>{}},replace:{type:Boolean,default:!1}},setup(e){const o=e,n=de(),u=Z("JwBreadcrumbKey",void 0),l=()=>{!o.to||!n||(o.replace?n.replace(o.to):n.push(o.to))};return(s,c)=>{var f;const h=m("jw-icon");return a(),p("span",ar,[d("span",{class:U(["jw-breadcrumb-inner",{"is-link":e.to}]),onClick:l},[z(s.$slots,"default")],2),((f=_(u))==null?void 0:f.separatorIcon)?(a(),g(h,{key:0,class:"jw-breadcrumb-separator",size:12},{default:r(()=>[(a(),g(X(_(u).separatorIcon)))]),_:1})):(a(),p("span",cr,S(_(u).separator),1))])}}}));const _r={class:"jw-page-header"},pr={class:"jw-page-header-left"},fr={class:"jw-page-header-title"},mr={class:"jw-page-header-content"},hr={name:"jwPageHeader"},br=b(V(A({},hr),{props:{icon:{type:Object,default:su},title:{type:String,default:"Back"},content:{type:String,default:""}},emits:["back"],setup(e,{emit:o}){const n=()=>{o("back")};return(u,l)=>{const s=m("jw-icon"),c=m("jw-divider");return a(),p("div",_r,[d("div",pr,[z(u.$slots,"icon",{},()=>[t(s,{class:"jw-page-header-icon",size:18,onClick:n},{default:r(()=>[(a(),g(X(e.icon)))]),_:1})]),z(u.$slots,"title",{},()=>[d("div",fr,S(e.title),1)])]),t(c,{direction:"vertical"}),z(u.$slots,"content",{},()=>[d("div",mr,S(e.content),1)])])}}})),vr={name:"JwTab"},Ne=b(V(A({},vr),{props:{title:String},setup(e){return(o,n)=>z(o.$slots,"default")}}));const wr=["onClick"],gr={class:"jw-tabs-content"},yr={name:"JwTabs"},jr=b(V(A({},yr),{props:{modelValue:{type:String},type:{type:String,default:"line"}},emits:["update:modelValue"],setup(e,{emit:o}){const n=e,u=Ae().default(),{type:l}=n,s={[`jw-tabs-${l}`]:l};u.forEach(I=>{if(I.type.name!==Ne.name)throw new Error("JwTabs \u5B50\u6807\u7B7E\u5FC5\u987B\u662FJwTab")});const c=y(null),h=y(null),f=y(null);ce(()=>{au(()=>{$()})});const $=()=>{if(c.value&&n.type==="line"){const{width:I}=c.value.getBoundingClientRect();h.value.style.width=I+"px";const{left:P}=f.value.getBoundingClientRect(),{left:T}=c.value.getBoundingClientRect(),H=T-P;h.value.style.left=H+"px"}},v=u.map(I=>I.props.title),j=x(()=>u.find(I=>I.props.title===n.modelValue)),B=I=>{o("update:modelValue",I)},k=I=>P=>{I===n.modelValue&&(c.value=P)};return(I,P)=>(a(),p("div",{class:U(["jw-tabs",s])},[d("div",{class:"jw-tabs-header",ref_key:"container",ref:f},[(a(!0),p(E,null,L(_(v),(T,H)=>(a(),p("div",{class:U(["jw-tabs-header-item",{"is-active":e.modelValue===T}]),key:H,onClick:Q=>B(T),ref_for:!0,ref:k(T)},S(T),11,wr))),128)),_(l)==="line"?(a(),p("div",{key:0,class:"jw-tabs-header-indicator",ref_key:"indicator",ref:h},null,512)):C("",!0)],512),d("div",gr,[_(j)?(a(),g(X(_(j)),{key:_(j).props.title})):C("",!0)])]))}})),$r=[ju,je,Du,Vu,Tu,te,Uu,Ru,Lu,Yu,ll,il,ml,Fl,Vl,Ul,Nl,tr,ur,sr,dr,br,jr,Ne];function Er(e){for(const o of $r)e.component(o.name,o)}const Br={class:"topnav"},Fr=d("use",{"xlink:href":"#icon-list"},null,-1),xr=[Fr],Cr=d("svg",{class:"icon","aria-hidden":"true"},[d("use",{"xlink:href":"#icon-leaf"})],-1),kr=[Cr],Dr={class:"menu"},Ar=i("\u9996\u9875"),Vr=i("\u6587\u6863"),zr=d("a",{href:"https://github.com/coderyjw/jw-ui",target:"_blank"},"GitHub",-1),Tr=d("span",null,"0.0.17",-1),Le=b({props:{toggleMenuButton:{type:Boolean,default:!0}},setup(e){const o=de(),n=Z("asideVisible"),u=()=>{n.value=!n.value},l=()=>{o.push({path:"/"})};return(s,c)=>{const h=m("router-link");return a(),p("div",Br,[e.toggleMenuButton?(a(),p("svg",{key:0,class:"icon toggle-aside","aria-hidden":"true",onClick:u},xr)):C("",!0),d("div",{class:"logo",onClick:l},kr),d("div",Dr,[t(h,{exact:"",to:"/home"},{default:r(()=>[Ar]),_:1}),t(h,{to:"/doc"},{default:r(()=>[Vr]),_:1}),zr,Tr])])}}});const $e=e=>(be("data-v-5b0fa967"),e=e(),ve(),e),Sr={class:"topnavAndBanner"},Ir={class:"banner"},Ur=$e(()=>d("h1",null,"JW UI",-1)),Mr=$e(()=>d("p",null,"\u4E00\u4E2A Vue 3 \u7EC4\u4EF6\u5E93",-1)),Pr=$e(()=>d("p",null,"\u6709\u70B9\u513F\u610F\u601D~",-1)),Rr={class:"actions"},Jr=i("GitHub"),Or=i("\u5FEB\u901F\u4F7F\u7528"),Hr=cu('<div class="features" data-v-5b0fa967><ul data-v-5b0fa967><li data-v-5b0fa967><svg data-v-5b0fa967><use xlink:href="#icon-vue" data-v-5b0fa967></use></svg><h3 data-v-5b0fa967>\u57FA\u4E8E Vue 3</h3><p data-v-5b0fa967>\u9A84\u50B2\u5730\u4F7F\u7528\u4E86 Vue 3 Composition API</p></li><li data-v-5b0fa967><svg data-v-5b0fa967><use xlink:href="#icon-ts" data-v-5b0fa967></use></svg><h3 data-v-5b0fa967>\u57FA\u4E8E TypeScript</h3><p data-v-5b0fa967>\u6E90\u4EE3\u7801\u91C7\u7528 TypeScript \u4E66\u5199\uFF08\u975E\u4E25\u683C\u68C0\u67E5\uFF09</p></li><li data-v-5b0fa967><svg data-v-5b0fa967><use xlink:href="#icon-light" data-v-5b0fa967></use></svg><h3 data-v-5b0fa967>\u4EE3\u7801\u6613\u8BFB</h3><p data-v-5b0fa967>\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u6E90\u4EE3\u7801\u90FD\u6781\u5176\u7B80\u6D01</p></li></ul></div>',1),Nr={setup(e){const o=de(),n=u=>{u==="github"?window.open("https://github.com/coderyjw/jw-ui","_blank"):u==="getStart"&&o.push({path:"/doc"})};return(u,l)=>{const s=m("jw-button");return a(),p(E,null,[d("div",Sr,[t(Le,{toggleMenuButton:!1}),d("div",Ir,[Ur,Mr,Pr,d("div",Rr,[t(s,{onClick:l[0]||(l[0]=c=>n("github"))},{default:r(()=>[Jr]),_:1}),t(s,{onClick:l[1]||(l[1]=c=>n("getStart")),theme:"primary"},{default:r(()=>[Or]),_:1})])])]),Hr],64)}}};var Lr=D(Nr,[["__scopeId","data-v-5b0fa967"]]);const Wr=["innerHTML"],qr=b({props:{content:{type:String,required:!0}},setup(e){return(o,n)=>(a(),p("article",{class:"markdown-body",innerHTML:e.content},null,8,Wr))}}),Gr=`<h1>\u5FEB\u901F\u4F7F\u7528</h1>
<p>\u8BF7\u5148<a href="#/doc/install">\u5B89\u88C5</a>\u672C\u7EC4\u4EF6\u5E93\u3002</p>
<h3>\u5B8C\u6574\u5F15\u5165</h3>
<pre><code class="language-javascript">// main.ts
import { createApp } from &quot;vue&quot;;
import App from &quot;./App.vue&quot;;

import JwUi from &quot;yjw-ui&quot;;
import &quot;yjw-ui/dist/lib/yjw-ui.css&quot;;

const app = createApp(App);

app.use(JwUi);
app.mount(&quot;#app&quot;);
</code></pre>
<h3>\u5F15\u5165\u67D0\u4E2A\u7EC4\u4EF6</h3>
<pre><code class="language-javascript">import { JwButton } from &quot;yjw-ui&quot;;
import &quot;yjw-ui/dist/lib/yjw-ui.css&quot;;
</code></pre>
<p>\u5B8C\u6210\u5F15\u5165\u5C31\u53EF\u4EE5\u4F7F\u7528\u6211\u63D0\u4F9B\u7684\u7EC4\u4EF6\u5566\u3002</p>
<h4>Vue \u5355\u6587\u4EF6\u7EC4\u4EF6</h4>
<p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p>
<pre><code class="language-html">&lt;template&gt;
  &lt;jw-button&gt;\u6309\u94AE&lt;/jw-button&gt;
&lt;/template&gt;
</code></pre>
<p>\u4E0B\u4E00\u8282\uFF1A<a href="#/doc/avatar">Avatar \u5934\u50CF</a></p>
`,Kr=`<h1>\u5B89\u88C5</h1>
<p>\u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5305\u7BA1\u7406\u5668\uFF1A</p>
<pre><code class="language-shell"># NPM
$ npm install yjw-ui
</code></pre>
<p>\u6216</p>
<pre><code class="language-shell"># Yarn
$ yarn add yjw-ui
</code></pre>
<p>\u6216</p>
<pre><code class="language-shell"># pnpm
$ pnpm install yjw-ui
</code></pre>
<p>\u4E0B\u4E00\u8282\uFF1A<a href="#/doc/get-started">\u5FEB\u901F\u4F7F\u7528</a></p>
`,Yr=`<h1>JW UI</h1>
<p>JW UI \u662F\u4E00\u4E2A Vue3 \u7684\u7EC4\u4EF6\u5E93\u3002</p>
<p>\u8FD9\u662F\u6211\u7684\u7B2C\u4E00\u4E2A\u5F00\u6E90\u9879\u76EE\uFF0C\u56E0\u6B64\u6211\u975E\u5E38\u9A84\u50B2\u7684\u7528\u6211\u7684\u540D\u5B57\u4E3A\u5176\u547D\u540D!</p>
<h1>\u4ECB\u7ECD</h1>
<p>\u8FD9\u6B3E\u7EC4\u4EF6\u5E93\u662F\u6211\u5728\u5B66\u4E60\u4E86 vue3 \u7684\u65B0\u7279\u6027\u540E\u5E76\u4E14\u7ED3\u5408\u81EA\u5DF1\u8FD1\u4E24\u5E74\u7684\u5DE5\u4F5C\u7ECF\u9A8C\u6240\u5199\u7684\uFF0C<code>\u5168\u7A0B\u4EB2\u624B\u7F16\u5199</code>\uFF0C\u5C3D\u91CF<code>\u4E0D\u91C7\u7528\u7B2C\u4E09\u65B9\u5E93</code>\uFF0C\u5305\u62EC\u4F60\u73B0\u5728\u770B\u5230\u7684\u8FD9\u4E2A\u5B98\u7F51\u4E5F\u51E0\u4E4E\u90FD\u662F\u6211\u81EA\u5DF1\u5199\u7684\u3002</p>
<p>\u76EE\u524D\u6211\u8FD8\u662F<code>\u4E0D\u5EFA\u8BAE</code>\u4F60\u5C06\u6B64 UI \u5E93\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u3002\u4F46\u5982\u679C\u4F60\u662F\u62B1\u7740\u770B\u6E90\u4EE3\u7801\u7684\u76EE\u7684\u6765\u7684\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5E93\u8FD8\u662F<code>\u503C\u5F97\u4E00\u770B</code>\u7684\u3002</p>
<p>\u6E90\u4EE3\u7801\u653E\u5728\u4E86<a href="https://github.com/coderyjw/jw-ui">\u6211\u7684 github</a>\uFF0C\u4EE3\u7801\u975E\u5E38\u7B80\u6D01\uFF0C\u5386\u53F2\u63D0\u4EA4\u4FE1\u606F\u975E\u5E38\u89C4\u8303\uFF0C\u4F60\u53EF\u4EE5\u6309\u63D0\u4EA4\u7684\u987A\u5E8F\u9010\u4E2A\u67E5\u770B\uFF1B</p>
<p>\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u67E5\u770B\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u6E90\u4EE3\u7801\u548C\u793A\u4F8B\uFF0C\u8FD0\u884C\u65B9\u6CD5\u89C1 README.md\u3002</p>
<p>\u867D\u7136\u76EE\u524D\u7EC4\u4EF6\u4E0D\u591A\uFF0C\u4F46\u662F\u6211\u4F1A\u6162\u6162\u7684\u66F4\u65B0\u54D2(<em>^\u25BD^</em>)</p>
<p>\u4E0B\u4E00\u8282\uFF1A<a href="#/doc/install">\u5B89\u88C5</a></p>
`;const We=e=>(be("data-v-08d4af8c"),e=e(),ve(),e),Xr={class:"next-and-prev-link"},Qr={key:0,class:"icon","aria-hidden":"true",style:{transform:"rotate(180deg)"}},Zr=We(()=>d("use",{"xlink:href":"#icon-arrow-right"},null,-1)),es=[Zr],ts={key:0},ns={key:1,class:"icon","aria-hidden":"true"},os=We(()=>d("use",{"xlink:href":"#icon-arrow-right"},null,-1)),us=[os],ls=b({props:{prev:{type:Object,default:Object},next:{type:Object,default:Object}},setup(e){const o=e,n=de(),u=()=>{n.push({path:o.prev.path})},l=()=>{n.push({path:o.next.path})};return(s,c)=>(a(),p("div",Xr,[e.prev.name?(a(),p("div",{key:0,class:"pre",onClick:u},[e.prev.name?(a(),p("svg",Qr,es)):C("",!0),d("span",null,S(e.prev.name),1)])):C("",!0),d("div",{class:"next",onClick:l},[e.next.name?(a(),p("span",ts,S(e.next.name),1)):C("",!0),e.next.name?(a(),p("svg",ns,us)):C("",!0)])]))}});var M=D(ls,[["__scopeId","data-v-08d4af8c"]]);const F=b({props:{title:{type:String},type:{type:String,values:["prop","slot","event","methods"],default:"prop"},body:{type:Array,default:()=>[]},header:{type:Array,default:()=>[]}},setup(e){const o=e,{type:n}=o,u=x(()=>{if(o.header.length===0)switch(n){case"prop":return["\u5C5E\u6027","\u8BF4\u660E","\u7C7B\u578B","\u53EF\u9009\u503C","\u9ED8\u8BA4\u503C"];case"slot":return["\u63D2\u69FD\u540D","\u8BF4\u660E"];case"event":return["\u4E8B\u4EF6\u540D","\u8BF4\u660E","\u56DE\u8C03\u53C2\u6570"];case"methods":return["\u65B9\u6CD5","\u8BF4\u660E","\u53C2\u6570"]}return o.header});return(l,s)=>(a(),p(E,null,[d("h2",null,S(e.title),1),d("table",null,[d("thead",null,[d("tr",null,[(a(!0),p(E,null,L(_(u),(c,h)=>(a(),p("th",{key:h},S(c),1))),128))])]),d("tbody",null,[(a(!0),p(E,null,L(e.body,(c,h)=>(a(),p("tr",{key:h},[(a(!0),p(E,null,L(c,(f,$)=>(a(),p("td",{key:$},S(f),1))),128))]))),128))])])],64))}});const rs={class:"preview-container"},ss=i("\u9690\u85CF\u4EE3\u7801"),as=i("\u67E5\u770B\u4EE3\u7801"),cs={class:"preview-container-component"},is={key:0,class:"preview-container-code"},ds=["innerHTML"],_s=b({props:{component:Object},setup(e){const o=e,n=window.Prism,u=x(()=>n.highlight(o.component.__sourceCode,n.languages.html,"html")),l=()=>c.value=!0,s=()=>c.value=!1,c=y(!1);return(h,f)=>{const $=m("jw-button");return a(),p("div",rs,[d("h2",null,[i(S(e.component.__sourceCodeTitle)+" ",1),c.value?(a(),g($,{key:0,onClick:s},{default:r(()=>[ss]),_:1})):(a(),g($,{key:1,onClick:l},{default:r(()=>[as]),_:1}))]),d("div",cs,[(a(),g(X(e.component)))]),c.value?(a(),p("div",is,[d("pre",{class:"language-html",innerHTML:_(u)},null,8,ds)])):C("",!0)])}}});var w=D(_s,[["__scopeId","data-v-e2a2447c"]]),Y="./assets/avator.25ce2b58.png";function qe(e){e.__sourceCode=`<template>\r
  <jw-avatar :src="imgUrl" size="small" />\r
  <jw-avatar :src="imgUrl" size="default" />\r
  <jw-avatar :src="imgUrl" size="large" />\r
  <jw-avatar :src="imgUrl" :size="100" />\r
</template>\r
<script setup lang="ts">\r
import imgUrl from "/src/assets/image/avator.png";\r
<\/script>`,e.__sourceCodeTitle="\u5C3A\u5BF8"}const Ge=b({setup(e){return(o,n)=>{const u=m("jw-avatar");return a(),p(E,null,[t(u,{src:_(Y),size:"small"},null,8,["src"]),t(u,{src:_(Y),size:"default"},null,8,["src"]),t(u,{src:_(Y),size:"large"},null,8,["src"]),t(u,{src:_(Y),size:100},null,8,["src"])],64)}}});typeof qe=="function"&&qe(Ge);function Ke(e){e.__sourceCode=`<template>\r
  <jw-avatar :src="imgUrl" shape="square" size="small" />\r
  <jw-avatar :src="imgUrl" shape="square" size="default" />\r
  <jw-avatar :src="imgUrl" shape="square" size="large" />\r
  <jw-avatar :src="imgUrl" shape="square" :size="100" />\r
</template>\r
<script setup lang="ts">\r
import imgUrl from "/src/assets/image/avator.png";\r
<\/script>`,e.__sourceCodeTitle="\u5F62\u72B6"}const Ye=b({setup(e){return(o,n)=>{const u=m("jw-avatar");return a(),p(E,null,[t(u,{src:_(Y),shape:"square",size:"small"},null,8,["src"]),t(u,{src:_(Y),shape:"square",size:"default"},null,8,["src"]),t(u,{src:_(Y),shape:"square",size:"large"},null,8,["src"]),t(u,{src:_(Y),shape:"square",size:100},null,8,["src"])],64)}}});typeof Ke=="function"&&Ke(Ye);function Xe(e){e.__sourceCode=`<template>\r
  <jw-avatar size="large">\u9ED8\u8BA4</jw-avatar>\r
  <jw-avatar size="large">user</jw-avatar>\r
  <jw-avatar size="large" color="yellow" backgroundColor="red">M</jw-avatar>\r
  <jw-avatar size="large" shape="square" color="yellow" backgroundColor="red">\r
    M\r
  </jw-avatar>\r
</template>`,e.__sourceCodeTitle="\u989C\u8272"}const Qe={},ps=i("\u9ED8\u8BA4"),fs=i("user"),ms=i("M"),hs=i(" M ");function bs(e,o){const n=m("jw-avatar");return a(),p(E,null,[t(n,{size:"large"},{default:r(()=>[ps]),_:1}),t(n,{size:"large"},{default:r(()=>[fs]),_:1}),t(n,{size:"large",color:"yellow",backgroundColor:"red"},{default:r(()=>[ms]),_:1}),t(n,{size:"large",shape:"square",color:"yellow",backgroundColor:"red"},{default:r(()=>[hs]),_:1})],64)}typeof Xe=="function"&&Xe(Qe);var vs=D(Qe,[["render",bs]]);function Ze(e){e.__sourceCode=`<template>\r
  <jw-avatar src="empty" size="large" @error="handleError">\r
    <img src="/src/assets/image/avator.png" alt="" />\r
  </jw-avatar>\r
</template>\r
<script setup lang="ts">\r
const handleError = () => {\r
  console.log("\u56FE\u7247\u52A0\u8F7D\u5931\u8D25");\r
  return false;\r
};\r
<\/script>`,e.__sourceCodeTitle="\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u7684\u56DE\u6EDA\u884C\u4E3A"}const ws=d("img",{src:Y,alt:""},null,-1),et=b({setup(e){const o=()=>(console.log("\u56FE\u7247\u52A0\u8F7D\u5931\u8D25"),!1);return(n,u)=>{const l=m("jw-avatar");return a(),g(l,{src:"empty",size:"large",onError:o},{default:r(()=>[ws]),_:1})}}});typeof Ze=="function"&&Ze(et);const gs={class:"avatar-doc-wrapper"},ys=d("h1",null,"Avatar \u5934\u50CF",-1),js=d("p",null,"Avatar \u7EC4\u4EF6\u53EF\u4EE5\u7528\u6765\u4EE3\u8868\u4EBA\u7269\u6216\u5BF9\u8C61",-1),$s={class:"preview-wrapper"},Es=b({setup(e){const o=[["icon","\u8BBE\u7F6E\u5934\u50CF\u7684\u5927\u5C0F","number / string","number / large / default /small","default"],["shape","\u8BBE\u7F6E\u5934\u50CF\u7684\u5F62\u72B6","string","circle / square","circle"],["src","\u56FE\u7247\u5934\u50CF\u7684\u8D44\u6E90\u5730\u5740","string","-","-"],["alt","\u63CF\u8FF0\u56FE\u50CF\u7684\u66FF\u6362\u6587\u672C","string","-","-"]],n=[["error","\u56FE\u7247\u7C7B\u5934\u50CF\u52A0\u8F7D\u5931\u8D25\u7684\u56DE\u8C03\uFF0C \u8FD4\u56DE false \u4F1A\u5173\u95ED\u7EC4\u4EF6\u9ED8\u8BA4\u7684 fallback \u884C\u4E3A","(e: Event)"]],u=[["default","\u81EA\u5B9A\u4E49\u5934\u50CF\u5C55\u793A\u5185\u5BB9"]];return(l,s)=>(a(),p("div",gs,[ys,js,d("div",$s,[t(w,{component:Ge}),t(w,{component:Ye}),t(w,{component:vs}),t(w,{component:et}),t(F,{title:"\u5C5E\u6027",type:"prop",body:o}),t(F,{title:"\u4E8B\u4EF6",type:"event",body:n}),t(F,{title:"\u63D2\u69FD",type:"slot",body:u}),t(M,{prev:{path:"/doc/get-started",name:"\u5FEB\u901F\u4F7F\u7528"},next:{path:"/doc/button",name:"\u6309\u94AE Button"}})])]))}});function tt(e){e.__sourceCode=`<template>\r
  <div style="margin: 10px 0px; width: 100%">\r
    <jw-button theme="default">\u9ED8\u8BA4\u6309\u94AE</jw-button>\r
    <jw-button theme="primary">\u4E3B\u8981\u6309\u94AE</jw-button>\r
    <jw-button theme="info">\u4FE1\u606F\u6309\u94AE</jw-button>\r
    <jw-button theme="success">\u6210\u529F\u6309\u94AE</jw-button>\r
    <jw-button theme="warning">\u8B66\u544A\u6309\u94AE</jw-button>\r
    <jw-button theme="error">\u5371\u9669\u6309\u94AE</jw-button>\r
  </div>\r
\r
  <div style="margin: 10px 0px; width: 100%">\r
    <jw-button theme="default" dashed>\u9ED8\u8BA4\u6309\u94AE</jw-button>\r
    <jw-button theme="primary" dashed>\u4E3B\u8981\u6309\u94AE</jw-button>\r
    <jw-button theme="info" dashed>\u4FE1\u606F\u6309\u94AE</jw-button>\r
    <jw-button theme="success" dashed>\u6210\u529F\u6309\u94AE</jw-button>\r
    <jw-button theme="warning" dashed>\u8B66\u544A\u6309\u94AE</jw-button>\r
    <jw-button theme="error" dashed>\u5371\u9669\u6309\u94AE</jw-button>\r
  </div>\r
\r
  <div style="margin: 10px 0px; width: 100%">\r
    <jw-button theme="default" round>\u9ED8\u8BA4\u6309\u94AE</jw-button>\r
    <jw-button theme="primary" round>\u4E3B\u8981\u6309\u94AE</jw-button>\r
    <jw-button theme="info" round>\u4FE1\u606F\u6309\u94AE</jw-button>\r
    <jw-button theme="success" round>\u6210\u529F\u6309\u94AE</jw-button>\r
    <jw-button theme="warning" round>\u8B66\u544A\u6309\u94AE</jw-button>\r
    <jw-button theme="error" round>\u5371\u9669\u6309\u94AE</jw-button>\r
  </div>\r
\r
  <div style="margin: 10px 0px; width: 100%">\r
    <jw-button theme="default" circle>\r
      <jw-icon size="16">\r
        <Add16Regular />\r
      </jw-icon>\r
    </jw-button>\r
    <jw-button theme="primary" circle>\r
      <jw-icon size="16">\r
        <Add16Regular />\r
      </jw-icon>\r
    </jw-button>\r
    <jw-button theme="info" circle>\r
      <jw-icon size="16">\r
        <Add16Regular />\r
      </jw-icon>\r
    </jw-button>\r
    <jw-button theme="success" circle>\r
      <jw-icon size="16">\r
        <Add16Regular />\r
      </jw-icon>\r
    </jw-button>\r
    <jw-button theme="warning" circle>\r
      <jw-icon size="16">\r
        <Add16Regular />\r
      </jw-icon>\r
    </jw-button>\r
    <jw-button theme="error" circle>\r
      <jw-icon size="16">\r
        <Add16Regular />\r
      </jw-icon>\r
    </jw-button>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { Add16Regular } from "@vicons/fluent";\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u7840"}const Bs={style:{margin:"10px 0px",width:"100%"}},Fs=i("\u9ED8\u8BA4\u6309\u94AE"),xs=i("\u4E3B\u8981\u6309\u94AE"),Cs=i("\u4FE1\u606F\u6309\u94AE"),ks=i("\u6210\u529F\u6309\u94AE"),Ds=i("\u8B66\u544A\u6309\u94AE"),As=i("\u5371\u9669\u6309\u94AE"),Vs={style:{margin:"10px 0px",width:"100%"}},zs=i("\u9ED8\u8BA4\u6309\u94AE"),Ts=i("\u4E3B\u8981\u6309\u94AE"),Ss=i("\u4FE1\u606F\u6309\u94AE"),Is=i("\u6210\u529F\u6309\u94AE"),Us=i("\u8B66\u544A\u6309\u94AE"),Ms=i("\u5371\u9669\u6309\u94AE"),Ps={style:{margin:"10px 0px",width:"100%"}},Rs=i("\u9ED8\u8BA4\u6309\u94AE"),Js=i("\u4E3B\u8981\u6309\u94AE"),Os=i("\u4FE1\u606F\u6309\u94AE"),Hs=i("\u6210\u529F\u6309\u94AE"),Ns=i("\u8B66\u544A\u6309\u94AE"),Ls=i("\u5371\u9669\u6309\u94AE"),Ws={style:{margin:"10px 0px",width:"100%"}},nt=b({setup(e){return(o,n)=>{const u=m("jw-button"),l=m("jw-icon");return a(),p(E,null,[d("div",Bs,[t(u,{theme:"default"},{default:r(()=>[Fs]),_:1}),t(u,{theme:"primary"},{default:r(()=>[xs]),_:1}),t(u,{theme:"info"},{default:r(()=>[Cs]),_:1}),t(u,{theme:"success"},{default:r(()=>[ks]),_:1}),t(u,{theme:"warning"},{default:r(()=>[Ds]),_:1}),t(u,{theme:"error"},{default:r(()=>[As]),_:1})]),d("div",Vs,[t(u,{theme:"default",dashed:""},{default:r(()=>[zs]),_:1}),t(u,{theme:"primary",dashed:""},{default:r(()=>[Ts]),_:1}),t(u,{theme:"info",dashed:""},{default:r(()=>[Ss]),_:1}),t(u,{theme:"success",dashed:""},{default:r(()=>[Is]),_:1}),t(u,{theme:"warning",dashed:""},{default:r(()=>[Us]),_:1}),t(u,{theme:"error",dashed:""},{default:r(()=>[Ms]),_:1})]),d("div",Ps,[t(u,{theme:"default",round:""},{default:r(()=>[Rs]),_:1}),t(u,{theme:"primary",round:""},{default:r(()=>[Js]),_:1}),t(u,{theme:"info",round:""},{default:r(()=>[Os]),_:1}),t(u,{theme:"success",round:""},{default:r(()=>[Hs]),_:1}),t(u,{theme:"warning",round:""},{default:r(()=>[Ns]),_:1}),t(u,{theme:"error",round:""},{default:r(()=>[Ls]),_:1})]),d("div",Ws,[t(u,{theme:"default",circle:""},{default:r(()=>[t(l,{size:"16"},{default:r(()=>[t(_(ee))]),_:1})]),_:1}),t(u,{theme:"primary",circle:""},{default:r(()=>[t(l,{size:"16"},{default:r(()=>[t(_(ee))]),_:1})]),_:1}),t(u,{theme:"info",circle:""},{default:r(()=>[t(l,{size:"16"},{default:r(()=>[t(_(ee))]),_:1})]),_:1}),t(u,{theme:"success",circle:""},{default:r(()=>[t(l,{size:"16"},{default:r(()=>[t(_(ee))]),_:1})]),_:1}),t(u,{theme:"warning",circle:""},{default:r(()=>[t(l,{size:"16"},{default:r(()=>[t(_(ee))]),_:1})]),_:1}),t(u,{theme:"error",circle:""},{default:r(()=>[t(l,{size:"16"},{default:r(()=>[t(_(ee))]),_:1})]),_:1})])],64)}}});typeof tt=="function"&&tt(nt);function ot(e){e.__sourceCode=`<template>\r
  <jw-button theme="primary" size="small">\u5C0F\u6309\u94AE</jw-button>\r
  <jw-button theme="primary" size="default">\u9ED8\u8BA4\u6309\u94AE</jw-button>\r
  <jw-button theme="primary" size="large">\u5927\u6309\u94AE</jw-button>\r
</template>`,e.__sourceCodeTitle="\u5C3A\u5BF8"}const ut={},qs=i("\u5C0F\u6309\u94AE"),Gs=i("\u9ED8\u8BA4\u6309\u94AE"),Ks=i("\u5927\u6309\u94AE");function Ys(e,o){const n=m("jw-button");return a(),p(E,null,[t(n,{theme:"primary",size:"small"},{default:r(()=>[qs]),_:1}),t(n,{theme:"primary",size:"default"},{default:r(()=>[Gs]),_:1}),t(n,{theme:"primary",size:"large"},{default:r(()=>[Ks]),_:1})],64)}typeof ot=="function"&&ot(ut);var Xs=D(ut,[["render",Ys]]);function lt(e){e.__sourceCode=`<template>\r
  <jw-button theme="default" disabled>\u9ED8\u8BA4\u6309\u94AE</jw-button>\r
  <jw-button theme="primary" disabled>\u4E3B\u8981\u6309\u94AE</jw-button>\r
  <jw-button theme="info" disabled>\u4FE1\u606F\u6309\u94AE</jw-button>\r
  <jw-button theme="success" disabled>\u6210\u529F\u6309\u94AE</jw-button>\r
  <jw-button theme="warning" disabled>\u8B66\u544A\u6309\u94AE</jw-button>\r
  <jw-button theme="error" disabled>\u5371\u9669\u6309\u94AE</jw-button>\r
</template>`,e.__sourceCodeTitle="\u7981\u7528"}const rt={},Qs=i("\u9ED8\u8BA4\u6309\u94AE"),Zs=i("\u4E3B\u8981\u6309\u94AE"),ea=i("\u4FE1\u606F\u6309\u94AE"),ta=i("\u6210\u529F\u6309\u94AE"),na=i("\u8B66\u544A\u6309\u94AE"),oa=i("\u5371\u9669\u6309\u94AE");function ua(e,o){const n=m("jw-button");return a(),p(E,null,[t(n,{theme:"default",disabled:""},{default:r(()=>[Qs]),_:1}),t(n,{theme:"primary",disabled:""},{default:r(()=>[Zs]),_:1}),t(n,{theme:"info",disabled:""},{default:r(()=>[ea]),_:1}),t(n,{theme:"success",disabled:""},{default:r(()=>[ta]),_:1}),t(n,{theme:"warning",disabled:""},{default:r(()=>[na]),_:1}),t(n,{theme:"error",disabled:""},{default:r(()=>[oa]),_:1})],64)}typeof lt=="function"&&lt(rt);var la=D(rt,[["render",ua]]);function st(e){e.__sourceCode=`<template>\r
  <jw-button theme="primary" icon-placement="right">\r
    <template #icon>\r
      <jw-icon size="20">\r
        <VehicleBicycle24Filled />\r
      </jw-icon>\r
    </template>\r
    \u9ED8\u8BA4\u6309\u94AE\r
  </jw-button>\r
  <jw-button theme="primary">\r
    <template #icon>\r
      <jw-icon size="20">\r
        <VehicleBicycle24Filled />\r
      </jw-icon>\r
    </template>\r
    \u9ED8\u8BA4\u6309\u94AE\r
  </jw-button>\r
</template>\r
<script setup lanng="scss">\r
import { VehicleBicycle24Filled } from "@vicons/fluent";\r
<\/script>`,e.__sourceCodeTitle="\u56FE\u6807"}const ra=i(" \u9ED8\u8BA4\u6309\u94AE "),sa=i(" \u9ED8\u8BA4\u6309\u94AE "),at={setup(e){return(o,n)=>{const u=m("jw-icon"),l=m("jw-button");return a(),p(E,null,[t(l,{theme:"primary","icon-placement":"right"},{icon:r(()=>[t(u,{size:"20"},{default:r(()=>[t(_(Re))]),_:1})]),default:r(()=>[ra]),_:1}),t(l,{theme:"primary"},{icon:r(()=>[t(u,{size:"20"},{default:r(()=>[t(_(Re))]),_:1})]),default:r(()=>[sa]),_:1})],64)}}};typeof st=="function"&&st(at);function ct(e){e.__sourceCode=`<template>\r
  <jw-button theme="default" loading>loading</jw-button>\r
  <jw-button theme="primary" loading>loading</jw-button>\r
  <jw-button theme="info" loading>loading</jw-button>\r
  <jw-button theme="success" loading>loading</jw-button>\r
  <jw-button theme="warning" loading>loading</jw-button>\r
  <jw-button theme="error" loading>loading</jw-button>\r
  <jw-button theme="primary">loaded</jw-button>\r
</template>`,e.__sourceCodeTitle="\u52A0\u8F7D"}const it={},aa=i("loading"),ca=i("loading"),ia=i("loading"),da=i("loading"),_a=i("loading"),pa=i("loading"),fa=i("loaded");function ma(e,o){const n=m("jw-button");return a(),p(E,null,[t(n,{theme:"default",loading:""},{default:r(()=>[aa]),_:1}),t(n,{theme:"primary",loading:""},{default:r(()=>[ca]),_:1}),t(n,{theme:"info",loading:""},{default:r(()=>[ia]),_:1}),t(n,{theme:"success",loading:""},{default:r(()=>[da]),_:1}),t(n,{theme:"warning",loading:""},{default:r(()=>[_a]),_:1}),t(n,{theme:"error",loading:""},{default:r(()=>[pa]),_:1}),t(n,{theme:"primary"},{default:r(()=>[fa]),_:1})],64)}typeof ct=="function"&&ct(it);var ha=D(it,[["render",ma]]);const ba={class:"button-doc-wrapper"},va=d("h1",null,"Button \u6309\u94AE",-1),wa=d("p",null,"\u5E38\u7528\u7684\u64CD\u4F5C\u6309\u94AE\u3002",-1),ga={class:"preview-wrapper"},ya=b({setup(e){const o=[["theme","\u7C7B\u578B","string","default / primary / info / success / warning / error","default"],["dashed","\u662F\u5426\u865A\u7EBF\u4E3A\u6309\u94AE","boolean","-","false"],["size","\u5927\u5C0F","string","small / default / large","default"],["round","\u662F\u5426\u4E3A\u5706\u89D2\u6309\u94AE","boolean","-","false"],["circle","\u662F\u5426\u4E3A\u5706\u5F62\u6309\u94AE","boolean","-","false"],["disabled","\u662F\u5426\u7981\u7528","boolean","-","fasle"],["loading","\u662F\u5426\u663E\u793A\u52A0\u8F7D\u4E2D","boolean","-","fasle"],["icon-placement","\u6309\u94AE\u4E2D\u56FE\u6807\u7684\u4F4D\u7F6E","string","left / right","left"]],n=[["default","\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9"],["icon","\u6309\u94AE\u7684\u56FE\u6807"]];return(u,l)=>(a(),p("div",ba,[va,wa,d("div",ga,[t(w,{component:nt}),t(w,{component:Xs}),t(w,{component:la}),t(w,{component:at}),t(w,{component:ha}),t(F,{title:"\u5C5E\u6027",type:"prop",body:o}),t(F,{title:"\u63D2\u69FD",type:"slot",body:n}),t(M,{prev:{path:"/doc/avatar",name:"Avatar \u5934\u50CF"},next:{path:"/doc/divider",name:"\u5206\u5272\u7EBF Divider"}})])]))}});function dt(e){e.__sourceCode=`<template>\r
  \u554A\r
  <jw-divider />\r
  \u54C8\r
</template>\r
\r
<script setup lang="ts"><\/script>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const _t={},ja=i(" \u554A "),$a=i(" \u54C8 ");function Ea(e,o){const n=m("jw-divider");return a(),p(E,null,[ja,t(n),$a],64)}typeof dt=="function"&&dt(_t);var Ba=D(_t,[["render",Ea]]);function pt(e){e.__sourceCode=`<template>\r
  \u563F\u563F\r
  <jw-divider title-placement="left"> \u5DE6 </jw-divider>\r
  \u563B\u563B\r
  <jw-divider title-placement="center"> \u4E2D </jw-divider>\r
  \u54C8\u54C8\r
  <jw-divider title-placement="right"> \u53F3 </jw-divider>\r
  \u56AF\u56AF\r
</template>\r
\r
<script setup lang="ts"><\/script>`,e.__sourceCodeTitle="\u6807\u9898"}const ft={},Fa=i(" \u563F\u563F "),xa=i(" \u5DE6 "),Ca=i(" \u563B\u563B "),ka=i(" \u4E2D "),Da=i(" \u54C8\u54C8 "),Aa=i(" \u53F3 "),Va=i(" \u56AF\u56AF ");function za(e,o){const n=m("jw-divider");return a(),p(E,null,[Fa,t(n,{"title-placement":"left"},{default:r(()=>[xa]),_:1}),Ca,t(n,{"title-placement":"center"},{default:r(()=>[ka]),_:1}),Da,t(n,{"title-placement":"right"},{default:r(()=>[Aa]),_:1}),Va],64)}typeof pt=="function"&&pt(ft);var Ta=D(ft,[["render",za]]);function mt(e){e.__sourceCode=`<template>\r
  \u96E8\u7EB7\u7EB7\r
  <jw-divider direction="vertical" />\r
  \u65E7\u6545\u91CC\r
  <jw-divider direction="vertical" />\r
  \u8349\u6728\u751F\r
</template>\r
\r
<script setup lang="ts"><\/script>`,e.__sourceCodeTitle="\u5782\u76F4"}const ht={},Sa=i(" \u96E8\u7EB7\u7EB7 "),Ia=i(" \u65E7\u6545\u91CC "),Ua=i(" \u8349\u6728\u751F ");function Ma(e,o){const n=m("jw-divider");return a(),p(E,null,[Sa,t(n,{direction:"vertical"}),Ia,t(n,{direction:"vertical"}),Ua],64)}typeof mt=="function"&&mt(ht);var Pa=D(ht,[["render",Ma]]);const Ra={class:"divider-doc-wrapper"},Ja=d("h1",null,"\u5206\u5272\u7EBF Divider",-1),Oa=d("p",null,"\u533A\u9694\u5185\u5BB9\u7684\u5206\u5272\u7EBF\u3002",-1),Ha={class:"preview-wrapper"},Na=b({setup(e){const o=[["title-placement","\u6807\u9898\u7684\u4F4D\u7F6E","string","left / right / center","left"],["direction","\u8BBE\u7F6E\u5206\u5272\u7EBF\u65B9\u5411","string","horizontal / vertical","horizontal"]],n=[["default","\u5206\u5272\u7EBF\u7684\u6807\u9898"]];return(u,l)=>(a(),p("div",Ra,[Ja,Oa,d("div",Ha,[t(w,{component:Ba}),t(w,{component:Ta}),t(w,{component:Pa}),t(F,{title:"\u5C5E\u6027",type:"prop",body:o}),t(F,{title:"\u63D2\u69FD",type:"slot",body:n}),t(M,{prev:{path:"/doc/button",name:"Button \u6309\u94AE"},next:{path:"/doc/Ellipsis",name:"\u6587\u672C\u7701\u7565 Ellipsis"}})])]))}});function bt(e){e.__sourceCode=`<template>\r
  <jw-ellipsis style="max-width: 300px">\r
    \u53EA\u8981\u6709\u6811\u53F6\u98DE\u821E\u7684\u5730\u65B9\u5C31\u4F1A\u6709\u706B\u5728\u71C3\u70E7\uFF0C\u90A3\u706B\u5149\u4F1A\u7167\u8000\u7740\u6751\u5B50\uFF0C\u7136\u540E\u65B0\u7684\u6811\u53F6\u4F1A\u518D\u6B21\u840C\u82BD\u3002\r
  </jw-ellipsis>\r
</template>`,e.__sourceCodeTitle="\u57FA\u7840"}const vt={},La=i(" \u53EA\u8981\u6709\u6811\u53F6\u98DE\u821E\u7684\u5730\u65B9\u5C31\u4F1A\u6709\u706B\u5728\u71C3\u70E7\uFF0C\u90A3\u706B\u5149\u4F1A\u7167\u8000\u7740\u6751\u5B50\uFF0C\u7136\u540E\u65B0\u7684\u6811\u53F6\u4F1A\u518D\u6B21\u840C\u82BD\u3002 ");function Wa(e,o){const n=m("jw-ellipsis");return a(),g(n,{style:{"max-width":"300px"}},{default:r(()=>[La]),_:1})}typeof bt=="function"&&bt(vt);var qa=D(vt,[["render",Wa]]);function wt(e){e.__sourceCode=`<template>\r
  <jw-ellipsis style="max-width: 300px" :line-clamp="2">\r
    \u611A\u8822\u7684\u5F1F\u5F1F\u554A\uFF0C\u60F3\u8981\u6740\u4E86\u6211\u7684\u8BDD\uFF0C\u5C31\u75DB\u6068\u6211\uFF01\u618E\u6068\u6211\u5427\uFF01\r
    \u7136\u540E\u4E11\u964B\u5730\u6D3B\u4E0B\u53BB\u5427\uFF0C\u9003\u5427...\u9003\u5427... \u5C3D\u529B\u5730\u82DF\u4E14\u5077\u751F\u5427\u3002\r
  </jw-ellipsis>\r
</template>`,e.__sourceCodeTitle="\u6700\u5927\u884C\u6570"}const gt={},Ga=i(" \u611A\u8822\u7684\u5F1F\u5F1F\u554A\uFF0C\u60F3\u8981\u6740\u4E86\u6211\u7684\u8BDD\uFF0C\u5C31\u75DB\u6068\u6211\uFF01\u618E\u6068\u6211\u5427\uFF01 \u7136\u540E\u4E11\u964B\u5730\u6D3B\u4E0B\u53BB\u5427\uFF0C\u9003\u5427...\u9003\u5427... \u5C3D\u529B\u5730\u82DF\u4E14\u5077\u751F\u5427\u3002 ");function Ka(e,o){const n=m("jw-ellipsis");return a(),g(n,{style:{"max-width":"300px"},"line-clamp":2},{default:r(()=>[Ga]),_:1})}typeof wt=="function"&&wt(gt);var Ya=D(gt,[["render",Ka]]);function yt(e){e.__sourceCode=`<template>\r
  <jw-ellipsis style="max-width: 300px" :line-clamp="2" expand-trigger="click">\r
    \u611F\u53D7\u75DB\u82E6\u5427\uFF0C\u8003\u8651\u75DB\u82E6\u5427\uFF0C\u63A5\u53D7\u75DB\u82E6\u5427\uFF0C\u4E86\u89E3\u75DB\u82E6\u5427\u3002\r
    \u4E0D\u4E86\u89E3\u75DB\u695A\u7684\u4EBA\uFF0C\u662F\u65E0\u6CD5\u4E86\u89E3\u771F\u6B63\u7684\u548C\u5E73\u7684\uFF01 \u6211\u4E0D\u4F1A\u5FD8\u8BB0\u5F25\u5F66\u7684\u75DB\u82E6\uFF08\u6781\u5C0F\u58F0\u8BF4\uFF09\r
    \u4ECE\u73B0\u5728\u5F00\u59CB\uFF0C\u8BA9\u4E16\u754C\u611F\u53D7\u75DB\u82E6\uFF01\u795E\u7F57\u5929\u5F81\uFF01\r
  </jw-ellipsis>\r
</template>`,e.__sourceCodeTitle="\u5C55\u5F00\u65B9\u5F0F"}const jt={},Xa=i(" \u611F\u53D7\u75DB\u82E6\u5427\uFF0C\u8003\u8651\u75DB\u82E6\u5427\uFF0C\u63A5\u53D7\u75DB\u82E6\u5427\uFF0C\u4E86\u89E3\u75DB\u82E6\u5427\u3002 \u4E0D\u4E86\u89E3\u75DB\u695A\u7684\u4EBA\uFF0C\u662F\u65E0\u6CD5\u4E86\u89E3\u771F\u6B63\u7684\u548C\u5E73\u7684\uFF01 \u6211\u4E0D\u4F1A\u5FD8\u8BB0\u5F25\u5F66\u7684\u75DB\u82E6\uFF08\u6781\u5C0F\u58F0\u8BF4\uFF09 \u4ECE\u73B0\u5728\u5F00\u59CB\uFF0C\u8BA9\u4E16\u754C\u611F\u53D7\u75DB\u82E6\uFF01\u795E\u7F57\u5929\u5F81\uFF01 ");function Qa(e,o){const n=m("jw-ellipsis");return a(),g(n,{style:{"max-width":"300px"},"line-clamp":2,"expand-trigger":"click"},{default:r(()=>[Xa]),_:1})}typeof yt=="function"&&yt(jt);var Za=D(jt,[["render",Qa]]);const ec={class:"ellipsis-doc-wrapper"},tc=d("h1",null,"Ellipsis \u6587\u672C\u7701\u7565",-1),nc=d("p",null,"\u590D\u6742\u5EA6\u4E0D\u4F1A\u6D88\u5931\uFF0C\u53EA\u4F1A\u8F6C\u79FB\u3002",-1),oc=d("p",null,"\u5F53\u4F60\u542C\u5230\u4E00\u4E9B\u4EBA\u5BF9\u4E8E\u7CBE\u81F4\u7684\u6982\u5FF5\u6A21\u578B\u4F83\u4F83\u800C\u8C08\uFF0C\u8BF7\u4FDD\u6301\u6E05\u9192\u3002",-1),uc={class:"preview-wrapper"},lc=b({setup(e){const o=[["expand-trigger","\u5C55\u5F00\u7684\u89E6\u53D1\u65B9\u5F0F","string","click","-"],["line-clamp","	\u6700\u5927\u884C\u6570","number / string","-","-"]],n=[["default","	\u6587\u672C\u7701\u7565\u7684\u5185\u5BB9"]];return(u,l)=>(a(),p("div",ec,[tc,nc,oc,d("div",uc,[t(w,{component:qa}),t(w,{component:Ya}),t(w,{component:Za}),t(F,{title:"\u5C5E\u6027",type:"prop",body:o}),t(F,{title:"\u63D2\u69FD",type:"slot",body:n}),t(M,{prev:{path:"/doc/divider",name:"Divider \u5206\u5272\u7EBF"},next:{path:"/doc/icon",name:"\u56FE\u6807 Icon"}})])]))}});function $t(e){e.__sourceCode=`<template>\r
  <div>\r
    <jw-gradient-text type="info">\u6D88\u606F\u6765\u4E86</jw-gradient-text> <br /><br />\r
    <jw-gradient-text type="warning">\u8B66\u544A\u4F60\u4E86</jw-gradient-text><br /><br />\r
    <jw-gradient-text type="error">\u5371\u9669\u5371\u9669</jw-gradient-text><br /><br />\r
    <jw-gradient-text type="success">\u4E00\u5207\u6B63\u5E38</jw-gradient-text><br /><br />\r
  </div>\r
</template>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const Et={},rc=i("\u6D88\u606F\u6765\u4E86"),sc=i(),ac=d("br",null,null,-1),cc=d("br",null,null,-1),ic=i("\u8B66\u544A\u4F60\u4E86"),dc=d("br",null,null,-1),_c=d("br",null,null,-1),pc=i("\u5371\u9669\u5371\u9669"),fc=d("br",null,null,-1),mc=d("br",null,null,-1),hc=i("\u4E00\u5207\u6B63\u5E38"),bc=d("br",null,null,-1),vc=d("br",null,null,-1);function wc(e,o){const n=m("jw-gradient-text");return a(),p("div",null,[t(n,{type:"info"},{default:r(()=>[rc]),_:1}),sc,ac,cc,t(n,{type:"warning"},{default:r(()=>[ic]),_:1}),dc,_c,t(n,{type:"error"},{default:r(()=>[pc]),_:1}),fc,mc,t(n,{type:"success"},{default:r(()=>[hc]),_:1}),bc,vc])}typeof $t=="function"&&$t(Et);var gc=D(Et,[["render",wc]]);function Bt(e){e.__sourceCode=`<template>\r
  <div>\r
    <jw-gradient-text type="info" :size="26">\u6D88\u606F\u6765\u4E86</jw-gradient-text>\r
    <br /><br />\r
    <jw-gradient-text type="warning" :size="22">\u8B66\u544A\u4F60\u4E86</jw-gradient-text\r
    ><br /><br />\r
    <jw-gradient-text type="error" :size="18">\u5371\u9669\u5371\u9669</jw-gradient-text\r
    ><br /><br />\r
    <jw-gradient-text type="success" :size="14">\u4E00\u5207\u6B63\u5E38</jw-gradient-text\r
    ><br /><br />\r
  </div>\r
</template>`,e.__sourceCodeTitle="\u5C3A\u5BF8"}const Ft={},yc=i("\u6D88\u606F\u6765\u4E86"),jc=d("br",null,null,-1),$c=d("br",null,null,-1),Ec=i("\u8B66\u544A\u4F60\u4E86"),Bc=d("br",null,null,-1),Fc=d("br",null,null,-1),xc=i("\u5371\u9669\u5371\u9669"),Cc=d("br",null,null,-1),kc=d("br",null,null,-1),Dc=i("\u4E00\u5207\u6B63\u5E38"),Ac=d("br",null,null,-1),Vc=d("br",null,null,-1);function zc(e,o){const n=m("jw-gradient-text");return a(),p("div",null,[t(n,{type:"info",size:26},{default:r(()=>[yc]),_:1}),jc,$c,t(n,{type:"warning",size:22},{default:r(()=>[Ec]),_:1}),Bc,Fc,t(n,{type:"error",size:18},{default:r(()=>[xc]),_:1}),Cc,kc,t(n,{type:"success",size:14},{default:r(()=>[Dc]),_:1}),Ac,Vc])}typeof Bt=="function"&&Bt(Ft);var Tc=D(Ft,[["render",zc]]);function xt(e){e.__sourceCode=`<template>\r
  <div>\r
    <jw-gradient-text\r
      :gradient="{\r
        from: 'rgb(85, 85, 85)',\r
        to: 'rgb(170, 170, 170)',\r
      }"\r
      >\u5B9A\u5236\u989C\u8272</jw-gradient-text\r
    >\r
    <br /><br />\r
    <jw-gradient-text\r
      :gradient="{\r
        deg: 150,\r
        from: 'rgb(123, 222, 111)',\r
        to: 'rgb(10, 100, 200)',\r
      }"\r
      >\u778E\u641E\u7684\u989C\u8272</jw-gradient-text\r
    ><br /><br />\r
  </div>\r
</template>`,e.__sourceCodeTitle="\u5B9A\u5236"}const Ct={},Sc=i("\u5B9A\u5236\u989C\u8272"),Ic=d("br",null,null,-1),Uc=d("br",null,null,-1),Mc=i("\u778E\u641E\u7684\u989C\u8272"),Pc=d("br",null,null,-1),Rc=d("br",null,null,-1);function Jc(e,o){const n=m("jw-gradient-text");return a(),p("div",null,[t(n,{gradient:{from:"rgb(85, 85, 85)",to:"rgb(170, 170, 170)"}},{default:r(()=>[Sc]),_:1},8,["gradient"]),Ic,Uc,t(n,{gradient:{deg:150,from:"rgb(123, 222, 111)",to:"rgb(10, 100, 200)"}},{default:r(()=>[Mc]),_:1},8,["gradient"]),Pc,Rc])}typeof xt=="function"&&xt(Ct);var Oc=D(Ct,[["render",Jc]]);const Hc={class:"gradient-text-doc-wrapper"},Nc=d("h1",null,"\u6E10\u53D8\u6587\u5B57 Gradient Text",-1),Lc=d("p",null,"\u8FD9\u4E2A\u4E1C\u897F\u770B\u8D77\u6765\u6CA1\u5565\u7528\uFF0C\u5B9E\u9645\u4E0A\u786E\u5B9E\u6CA1\u5565\u7528\u3002",-1),Wc={class:"preview-wrapper"},qc=b({setup(e){const o=[["gradient","\u6587\u5B57\u6E10\u53D8\u8272\u53C2\u6570","{ from: string, to: string, deg: number / string }","-","{}"],["size","\u6587\u5B57\u5927\u5C0F","number","-","16"],["type","\u6E10\u53D8\u6587\u5B57\u7684\u7C7B\u578B","string","info / success / warning / error","primary"]],n=[["default","\u6E10\u53D8\u6587\u5B57\u5185\u5BB9"]];return(u,l)=>(a(),p("div",Hc,[Nc,Lc,d("div",Wc,[t(w,{component:gc}),t(w,{component:Tc}),t(w,{component:Oc}),t(F,{title:"\u5C5E\u6027",type:"prop",body:o}),t(F,{title:"\u63D2\u69FD",type:"slot",body:n}),t(M,{prev:{path:"/doc/ellipsis",name:"Ellipsis \u6587\u672C\u7701\u7565"},next:{path:"/doc/Icon",name:"\u56FE\u6807 Icon"}})])]))}});function kt(e){e.__sourceCode=`<template>\r
  <jw-icon>\r
    <BatteryFull />\r
  </jw-icon>\r
  <jw-icon color="#4ad361">\r
    <BatteryFull />\r
  </jw-icon>\r
</template>\r
\r
<script setup lang="ts">\r
import { BatteryFull } from "@vicons/ionicons5";\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const Dt=b({setup(e){return(o,n)=>{const u=m("jw-icon");return a(),p(E,null,[t(u,null,{default:r(()=>[t(_(Je))]),_:1}),t(u,{color:"#4ad361"},{default:r(()=>[t(_(Je))]),_:1})],64)}}});typeof kt=="function"&&kt(Dt);function At(e){e.__sourceCode=`<template>\r
  <jw-icon>\r
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\r
      <path\r
        d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"\r
      />\r
    </svg>\r
  </jw-icon>\r
</template>`,e.__sourceCodeTitle="\u81EA\u5B9A\u4E49\u56FE\u6807"}const Vt={},Gc=d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[d("path",{d:"M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})],-1);function Kc(e,o){const n=m("jw-icon");return a(),g(n,null,{default:r(()=>[Gc]),_:1})}typeof At=="function"&&At(Vt);var Yc=D(Vt,[["render",Kc]]);function zt(e){e.__sourceCode=`<template>\r
  <jw-icon :depth="1" color="#e64e65">\r
    <Heart />\r
  </jw-icon>\r
  <jw-icon :depth="2" color="#e64e65">\r
    <Heart />\r
  </jw-icon>\r
  <jw-icon :depth="3" color="#e64e65">\r
    <Heart />\r
  </jw-icon>\r
  <jw-icon :depth="4" color="#e64e65">\r
    <Heart />\r
  </jw-icon>\r
  <jw-icon :depth="5" color="#e64e65">\r
    <Heart />\r
  </jw-icon>\r
  <jw-icon :depth="6" color="#e64e65">\r
    <Heart />\r
  </jw-icon>\r
  <jw-icon :depth="7" color="#e64e65">\r
    <Heart />\r
  </jw-icon>\r
  <jw-icon :depth="8" color="#e64e65">\r
    <Heart />\r
  </jw-icon>\r
  <jw-icon :depth="9" color="#e64e65">\r
    <Heart />\r
  </jw-icon>\r
  <jw-icon :depth="10" color="#e64e65">\r
    <Heart />\r
  </jw-icon>\r
</template>\r
<script setup lang="ts">\r
import { Heart } from "@vicons/ionicons5";\r
<\/script>`,e.__sourceCodeTitle="\u6DF1\u5EA6"}const Tt=b({setup(e){return(o,n)=>{const u=m("jw-icon");return a(),p(E,null,[t(u,{depth:1,color:"#e64e65"},{default:r(()=>[t(_(q))]),_:1}),t(u,{depth:2,color:"#e64e65"},{default:r(()=>[t(_(q))]),_:1}),t(u,{depth:3,color:"#e64e65"},{default:r(()=>[t(_(q))]),_:1}),t(u,{depth:4,color:"#e64e65"},{default:r(()=>[t(_(q))]),_:1}),t(u,{depth:5,color:"#e64e65"},{default:r(()=>[t(_(q))]),_:1}),t(u,{depth:6,color:"#e64e65"},{default:r(()=>[t(_(q))]),_:1}),t(u,{depth:7,color:"#e64e65"},{default:r(()=>[t(_(q))]),_:1}),t(u,{depth:8,color:"#e64e65"},{default:r(()=>[t(_(q))]),_:1}),t(u,{depth:9,color:"#e64e65"},{default:r(()=>[t(_(q))]),_:1}),t(u,{depth:10,color:"#e64e65"},{default:r(()=>[t(_(q))]),_:1})],64)}}});typeof zt=="function"&&zt(Tt);const Xc={class:"icon-doc-wrapper"},Qc=d("h1",null,"Icon \u56FE\u6807",-1),Zc=d("p",null,[i(" JW-UI \u63A8\u8350\u4F7F\u7528 "),d("a",{style:{"text-decoration":"underline",color:"#18a058"},href:"https://www.xicons.org/#/",target:"_blank"},"xicons"),i(" \u4F5C\u4E3A\u56FE\u6807\u5E93\u3002 ")],-1),ei={class:"preview-wrapper"},ti=b({setup(e){const o=[["color","\u56FE\u6807\u989C\u8272","string","-","-"],["depth","\u56FE\u6807\u6DF1\u5EA6","number","-","10"],["size","\u56FE\u6807\u5927\u5C0F\uFF08\u5F53\u4E0D\u6307\u5B9A\u5355\u4F4D\u65F6\uFF0C\u9ED8\u8BA4\u5355\u4F4D: px\uFF09","number / string","-","40px"]],n=[["defalut","\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9"]];return(u,l)=>(a(),p("div",Xc,[Qc,Zc,d("div",ei,[t(w,{component:Dt}),t(w,{component:Yc}),t(w,{component:Tt}),t(F,{title:"\u5C5E\u6027",type:"prop",body:o}),t(F,{title:"\u63D2\u69FD",type:"slot",body:n}),t(M,{prev:{path:"/doc/gradient-text",name:"\u6E10\u53D8\u6587\u5B57 GradientText"},next:{path:"/doc/link",name:"\u94FE\u63A5 Link"}})])]))}});function St(e){e.__sourceCode=`<template>\r
  <jw-link href="#" target="_blank">\u9ED8\u8BA4\u94FE\u63A5</jw-link>\r
  <jw-link type="primary">\u4E3B\u8981\u94FE\u63A5</jw-link>\r
  <jw-link type="info">\u4FE1\u606F\u94FE\u63A5</jw-link>\r
  <jw-link type="success">\u6210\u529F\u94FE\u63A5</jw-link>\r
  <jw-link type="warning">\u8B66\u544A\u94FE\u63A5</jw-link>\r
  <jw-link type="error">\u9519\u8BEF\u94FE\u63A5</jw-link>\r
</template>`,e.__sourceCodeTitle="\u57FA\u7840"}const It={},ni=i("\u9ED8\u8BA4\u94FE\u63A5"),oi=i("\u4E3B\u8981\u94FE\u63A5"),ui=i("\u4FE1\u606F\u94FE\u63A5"),li=i("\u6210\u529F\u94FE\u63A5"),ri=i("\u8B66\u544A\u94FE\u63A5"),si=i("\u9519\u8BEF\u94FE\u63A5");function ai(e,o){const n=m("jw-link");return a(),p(E,null,[t(n,{href:"#",target:"_blank"},{default:r(()=>[ni]),_:1}),t(n,{type:"primary"},{default:r(()=>[oi]),_:1}),t(n,{type:"info"},{default:r(()=>[ui]),_:1}),t(n,{type:"success"},{default:r(()=>[li]),_:1}),t(n,{type:"warning"},{default:r(()=>[ri]),_:1}),t(n,{type:"error"},{default:r(()=>[si]),_:1})],64)}typeof St=="function"&&St(It);var ci=D(It,[["render",ai]]);function Ut(e){e.__sourceCode=`<template>\r
  <jw-link disabled>\u9ED8\u8BA4\u94FE\u63A5</jw-link>\r
  <jw-link type="primary" disabled>\u4E3B\u8981\u94FE\u63A5</jw-link>\r
  <jw-link type="info" disabled>\u4FE1\u606F\u94FE\u63A5</jw-link>\r
  <jw-link type="success" disabled>\u6210\u529F\u94FE\u63A5</jw-link>\r
  <jw-link type="warning" disabled>\u8B66\u544A\u94FE\u63A5</jw-link>\r
  <jw-link type="error" disabled>\u9519\u8BEF\u94FE\u63A5</jw-link>\r
</template>`,e.__sourceCodeTitle="\u7981\u7528\u72B6\u6001"}const Mt={},ii=i("\u9ED8\u8BA4\u94FE\u63A5"),di=i("\u4E3B\u8981\u94FE\u63A5"),_i=i("\u4FE1\u606F\u94FE\u63A5"),pi=i("\u6210\u529F\u94FE\u63A5"),fi=i("\u8B66\u544A\u94FE\u63A5"),mi=i("\u9519\u8BEF\u94FE\u63A5");function hi(e,o){const n=m("jw-link");return a(),p(E,null,[t(n,{disabled:""},{default:r(()=>[ii]),_:1}),t(n,{type:"primary",disabled:""},{default:r(()=>[di]),_:1}),t(n,{type:"info",disabled:""},{default:r(()=>[_i]),_:1}),t(n,{type:"success",disabled:""},{default:r(()=>[pi]),_:1}),t(n,{type:"warning",disabled:""},{default:r(()=>[fi]),_:1}),t(n,{type:"error",disabled:""},{default:r(()=>[mi]),_:1})],64)}typeof Ut=="function"&&Ut(Mt);var bi=D(Mt,[["render",hi]]);function Pt(e){e.__sourceCode=`<template>\r
  <jw-link :underline="false">\u9ED8\u8BA4\u94FE\u63A5</jw-link>\r
  <jw-link>\u9ED8\u8BA4\u94FE\u63A5</jw-link>\r
</template>`,e.__sourceCodeTitle="\u4E0B\u5212\u7EBF"}const Rt={},vi=i("\u9ED8\u8BA4\u94FE\u63A5"),wi=i("\u9ED8\u8BA4\u94FE\u63A5");function gi(e,o){const n=m("jw-link");return a(),p(E,null,[t(n,{underline:!1},{default:r(()=>[vi]),_:1}),t(n,null,{default:r(()=>[wi]),_:1})],64)}typeof Pt=="function"&&Pt(Rt);var yi=D(Rt,[["render",gi]]);function Jt(e){e.__sourceCode=`<template>\r
  <jw-link :icon="EditTwotone">\r
    Edit\r
  </jw-link>\r
  <jw-link :icon="CheckSquareOutlined" icon-placement="right"> Check </jw-link>\r
</template>\r
<script setup lang="ts">\r
import { EditTwotone, CheckSquareOutlined } from "@vicons/antd";\r
<\/script>`,e.__sourceCodeTitle="\u56FE\u6807"}const ji=i(" Edit "),$i=i(" Check "),Ot=b({setup(e){return(o,n)=>{const u=m("jw-link");return a(),p(E,null,[t(u,{icon:_(iu)},{default:r(()=>[ji]),_:1},8,["icon"]),t(u,{icon:_(du),"icon-placement":"right"},{default:r(()=>[$i]),_:1},8,["icon"])],64)}}});typeof Jt=="function"&&Jt(Ot);const Ei={class:"link-doc-wrapper"},Bi=d("h1",null,"Link \u94FE\u63A5",-1),Fi=d("p",null,"\u6587\u5B57\u8D85\u94FE\u63A5",-1),xi={class:"preview-wrapper"},Ci=b({setup(e){const o=[["type","\u7C7B\u578B","string","primary / success / warning / danger / info","default"],["underline","\u662F\u5426\u4E0B\u5212\u7EBF","boolean","-","true"],["disabled","\u662F\u5426\u7981\u7528\u72B6\u6001","boolean","-","false"],["href","\u539F\u751F href \u5C5E\u6027","string","-","-"],["icon","\u56FE\u6807\u7EC4\u4EF6","string / Component","-","-"],["icon-placement","\u56FE\u6807\u7EC4\u4EF6\u4F4D\u7F6E","string","left / right","left"],["icon-size","\u56FE\u6807\u7EC4\u4EF6\u5927\u5C0F","string / number","-","18px"]],n=[["default","\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9"]];return(u,l)=>(a(),p("div",Ei,[Bi,Fi,d("div",xi,[t(w,{component:ci}),t(w,{component:bi}),t(w,{component:yi}),t(w,{component:Ot}),t(F,{title:"\u5C5E\u6027",type:"prop",body:o}),t(F,{title:"\u63D2\u69FD",type:"slot",body:n}),t(M,{prev:{path:"/doc/icon",name:"Icon \u56FE\u6807"},next:{path:"/doc/tag",name:"\u6807\u7B7E Tag"}})])]))}});function Ht(e){e.__sourceCode=`<template>\r
  <jw-tag>\u7231\u5728\u897F\u5143\u524D</jw-tag>\r
  <jw-tag type="success">\u542C\u5988\u5988\u7684\u8BDD</jw-tag>\r
  <jw-tag type="warning">\u73AB\u7470\u82B1\u7684\u846C\u793C</jw-tag>\r
  <jw-tag type="error">\u4F60\u7B97\u4EC0\u4E48\u7537\u4EBA</jw-tag>\r
  <jw-tag type="info">\u8D85\u4EBA\u4E0D\u4F1A\u98DE </jw-tag>\r
</template>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const Nt={},ki=i("\u7231\u5728\u897F\u5143\u524D"),Di=i("\u542C\u5988\u5988\u7684\u8BDD"),Ai=i("\u73AB\u7470\u82B1\u7684\u846C\u793C"),Vi=i("\u4F60\u7B97\u4EC0\u4E48\u7537\u4EBA"),zi=i("\u8D85\u4EBA\u4E0D\u4F1A\u98DE ");function Ti(e,o){const n=m("jw-tag");return a(),p(E,null,[t(n,null,{default:r(()=>[ki]),_:1}),t(n,{type:"success"},{default:r(()=>[Di]),_:1}),t(n,{type:"warning"},{default:r(()=>[Ai]),_:1}),t(n,{type:"error"},{default:r(()=>[Vi]),_:1}),t(n,{type:"info"},{default:r(()=>[zi]),_:1})],64)}typeof Ht=="function"&&Ht(Nt);var Si=D(Nt,[["render",Ti]]);function Lt(e){e.__sourceCode=`<template>\r
  <jw-tag size="small">\u7231\u5728\u897F\u5143\u524D</jw-tag>\r
  <jw-tag type="success">\u8D85\u4EBA\u4E0D\u4F1A\u98DE</jw-tag>\r
  <jw-tag type="warning" size="large">\u54EA\u91CC\u90FD\u662F\u4F60</jw-tag>\r
</template>`,e.__sourceCodeTitle="\u5C3A\u5BF8"}const Wt={},Ii=i("\u7231\u5728\u897F\u5143\u524D"),Ui=i("\u8D85\u4EBA\u4E0D\u4F1A\u98DE"),Mi=i("\u54EA\u91CC\u90FD\u662F\u4F60");function Pi(e,o){const n=m("jw-tag");return a(),p(E,null,[t(n,{size:"small"},{default:r(()=>[Ii]),_:1}),t(n,{type:"success"},{default:r(()=>[Ui]),_:1}),t(n,{type:"warning",size:"large"},{default:r(()=>[Mi]),_:1})],64)}typeof Lt=="function"&&Lt(Wt);var Ri=D(Wt,[["render",Pi]]);function qt(e){e.__sourceCode=`<template>\r
  <jw-tag v-for="tag in tags" :key="tag.name" :type="tag.type" closeable>{{\r
    tag.name\r
  }}</jw-tag>\r
</template>\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const tags = ref([\r
  { name: "Tag 1", type: "" },\r
  { name: "Tag 2", type: "success" },\r
  { name: "Tag 3", type: "info" },\r
  { name: "Tag 4", type: "warning" },\r
  { name: "Tag 5", type: "error" },\r
]);\r
<\/script>`,e.__sourceCodeTitle="\u53EF\u5173\u95ED"}const Gt=b({setup(e){const o=y([{name:"Tag 1",type:""},{name:"Tag 2",type:"success"},{name:"Tag 3",type:"info"},{name:"Tag 4",type:"warning"},{name:"Tag 5",type:"error"}]);return(n,u)=>{const l=m("jw-tag");return a(!0),p(E,null,L(o.value,s=>(a(),g(l,{key:s.name,type:s.type,closeable:""},{default:r(()=>[i(S(s.name),1)]),_:2},1032,["type"]))),128)}}});typeof qt=="function"&&qt(Gt);function Kt(e){e.__sourceCode=`<template>\r
  <jw-tag\r
    :color="{ color: '#BBB', backgroundColor: '#5555555', borderColor: '#555' }"\r
    >\u544A\u522B\u591C\u665A \u7B49\u5F85\u5929\u4EAE\r
  </jw-tag>\r
</template>`,e.__sourceCodeTitle="\u989C\u8272"}const Yt={},Ji=i("\u544A\u522B\u591C\u665A \u7B49\u5F85\u5929\u4EAE ");function Oi(e,o){const n=m("jw-tag");return a(),g(n,{color:{color:"#BBB",backgroundColor:"#5555555",borderColor:"#555"}},{default:r(()=>[Ji]),_:1})}typeof Kt=="function"&&Kt(Yt);var Hi=D(Yt,[["render",Oi]]);function Xt(e){e.__sourceCode=`<template>\r
  <jw-tag\r
    v-for="tag in dynamicTags"\r
    :key="tag"\r
    closeable\r
    type="success"\r
    @close="handleClose(tag)"\r
  >\r
    {{ tag }}\r
  </jw-tag>\r
  <jw-input\r
    v-if="inputVisible"\r
    :ref="(e) => (InputRef = e)"\r
    v-model="inputValue"\r
    @keyup.enter="handleInputConfirm"\r
    @blur="handleInputConfirm"\r
    size="small"\r
    style="width: 180px"\r
  />\r
  <jw-button v-else size="small" @click="showInput"> + New Tag </jw-button>\r
</template>\r
<script setup lang="ts">\r
import { ref, nextTick, onMounted } from "vue";\r
const dynamicTags = ref(["Tag 1", "Tag 2", "Tag 3"]);\r
const inputVisible = ref(false);\r
const inputValue = ref("");\r
const InputRef = ref();\r
const handleClose = (tag: string) => {\r
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);\r
};\r
\r
const showInput = () => {\r
  inputVisible.value = true;\r
  nextTick(() => {\r
    console.log(InputRef.value!.focus());\r
  });\r
};\r
\r
const handleInputConfirm = () => {\r
  if (inputValue.value) {\r
    dynamicTags.value.push(inputValue.value);\r
  }\r
  inputVisible.value = false;\r
  inputValue.value = "";\r
};\r
<\/script>`,e.__sourceCodeTitle="\u52A8\u6001\u7F16\u8F91\u6807\u7B7E"}const Ni=i(" + New Tag "),Qt=b({setup(e){const o=y(["Tag 1","Tag 2","Tag 3"]),n=y(!1),u=y(""),l=y(),s=f=>{o.value.splice(o.value.indexOf(f),1)},c=()=>{n.value=!0,ae(()=>{console.log(l.value.focus())})},h=()=>{u.value&&o.value.push(u.value),n.value=!1,u.value=""};return(f,$)=>{const v=m("jw-tag"),j=m("jw-input"),B=m("jw-button");return a(),p(E,null,[(a(!0),p(E,null,L(o.value,k=>(a(),g(v,{key:k,closeable:"",type:"success",onClose:I=>s(k)},{default:r(()=>[i(S(k),1)]),_:2},1032,["onClose"]))),128)),n.value?(a(),g(j,{key:0,ref:k=>l.value=k,modelValue:u.value,"onUpdate:modelValue":$[0]||($[0]=k=>u.value=k),onKeyup:_u(h,["enter"]),onBlur:h,size:"small",style:{width:"180px"}},null,8,["modelValue","onKeyup"])):(a(),g(B,{key:1,size:"small",onClick:c},{default:r(()=>[Ni]),_:1}))],64)}}});typeof Xt=="function"&&Xt(Qt);const Li={class:"tag-doc-wrapper"},Wi=d("h1",null,"\u6807\u7B7E Tag",-1),qi=d("p",null,"\u7528\u4E8E\u6807\u8BB0\u548C\u9009\u62E9\u3002",-1),Gi={class:"preview-wrapper"},Ki=b({setup(e){const o=[["closable","\u662F\u5426\u53EF\u5173\u95ED","boolean","-","false"],["color","	\u6807\u7B7E\u989C\u8272\uFF0C\u8BBE\u7F6E\u8BE5\u9879\u540E\u3000type \u65E0\u6548","string","{ color?: string, borderColor?: string, textColor?: string }","undefined"],["size","\u5C3A\u5BF8","string","	small/ medium / large","false"],["type","\u7C7B\u578B","string","default / primary / info / success / warning / error","default"]],n=[["default","	\u6807\u7B7E\u5185\u5BB9","-"]];return(u,l)=>(a(),p("div",Li,[Wi,qi,d("div",Gi,[t(w,{component:Si}),t(w,{component:Ri}),t(w,{component:Gt}),t(w,{component:Hi}),t(w,{component:Qt}),t(F,{title:"Tag \u5C5E\u6027",type:"prop",body:o}),t(F,{title:"Tag \u63D2\u69FD",type:"slot",body:n}),t(M,{prev:{path:"/doc/link",name:"\u94FE\u63A5 Link"},next:{path:"/doc/checkbox",name:"\u590D\u9009\u6846 checkbox"}})])]))}});function Zt(e){e.__sourceCode=`<template>\r
  <div style="width: 100%">\r
    <jw-checkbox v-model="checkbox1" label="\u9009\u9879A" size="large" />\r
    <jw-checkbox v-model="checkbox2" label="\u9009\u9879B" size="large" />\r
  </div>\r
  <div style="width: 100%">\r
    <jw-checkbox v-model="checkbox3" label="\u9009\u9879A" />\r
    <jw-checkbox v-model="checkbox4" label="\u9009\u9879B" />\r
  </div>\r
  <div style="width: 100%">\r
    <jw-checkbox v-model="checkbox5" label="\u9009\u9879A" size="small" />\r
    <jw-checkbox v-model="checkbox6" label="\u9009\u9879B" size="small" />\r
  </div>\r
  <div style="width: 100%">\r
    <jw-checkbox v-model="checkbox7" label="\u9009\u9879A" size="small" disabled />\r
    <jw-checkbox v-model="checkbox8" label="\u9009\u9879B" size="small" disabled />\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const checkbox1 = ref(false);\r
const checkbox2 = ref(false);\r
const checkbox3 = ref(false);\r
const checkbox4 = ref(false);\r
const checkbox5 = ref(false);\r
const checkbox6 = ref(false);\r
const checkbox7 = ref(false);\r
const checkbox8 = ref(false);\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u7840\u4F7F\u7528"}const Yi={style:{width:"100%"}},Xi={style:{width:"100%"}},Qi={style:{width:"100%"}},Zi={style:{width:"100%"}},en=b({setup(e){const o=y(!1),n=y(!1),u=y(!1),l=y(!1),s=y(!1),c=y(!1),h=y(!1),f=y(!1);return($,v)=>{const j=m("jw-checkbox");return a(),p(E,null,[d("div",Yi,[t(j,{modelValue:o.value,"onUpdate:modelValue":v[0]||(v[0]=B=>o.value=B),label:"\u9009\u9879A",size:"large"},null,8,["modelValue"]),t(j,{modelValue:n.value,"onUpdate:modelValue":v[1]||(v[1]=B=>n.value=B),label:"\u9009\u9879B",size:"large"},null,8,["modelValue"])]),d("div",Xi,[t(j,{modelValue:u.value,"onUpdate:modelValue":v[2]||(v[2]=B=>u.value=B),label:"\u9009\u9879A"},null,8,["modelValue"]),t(j,{modelValue:l.value,"onUpdate:modelValue":v[3]||(v[3]=B=>l.value=B),label:"\u9009\u9879B"},null,8,["modelValue"])]),d("div",Qi,[t(j,{modelValue:s.value,"onUpdate:modelValue":v[4]||(v[4]=B=>s.value=B),label:"\u9009\u9879A",size:"small"},null,8,["modelValue"]),t(j,{modelValue:c.value,"onUpdate:modelValue":v[5]||(v[5]=B=>c.value=B),label:"\u9009\u9879B",size:"small"},null,8,["modelValue"])]),d("div",Zi,[t(j,{modelValue:h.value,"onUpdate:modelValue":v[6]||(v[6]=B=>h.value=B),label:"\u9009\u9879A",size:"small",disabled:""},null,8,["modelValue"]),t(j,{modelValue:f.value,"onUpdate:modelValue":v[7]||(v[7]=B=>f.value=B),label:"\u9009\u9879B",size:"small",disabled:""},null,8,["modelValue"])])],64)}}});typeof Zt=="function"&&Zt(en);function tn(e){e.__sourceCode=`<template>\r
  <div style="width: 100%; display: flex; align-items: center">\r
    <jw-checkbox v-model="checkbox1" label="\u9009\u9879A" size="large" />\r
    <jw-checkbox\r
      v-model="checkbox2"\r
      label="\u9009\u9879B"\r
      size="large"\r
      :disabled="disabled"\r
    />\r
    <jw-switch v-model="disabled" />\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const checkbox1 = ref(false);\r
const checkbox2 = ref(false);\r
const disabled = ref(true);\r
<\/script>`,e.__sourceCodeTitle="\u7981\u7528\u72B6\u6001"}const ed={style:{width:"100%",display:"flex","align-items":"center"}},nn=b({setup(e){const o=y(!1),n=y(!1),u=y(!0);return(l,s)=>{const c=m("jw-checkbox"),h=m("jw-switch");return a(),p("div",ed,[t(c,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=f=>o.value=f),label:"\u9009\u9879A",size:"large"},null,8,["modelValue"]),t(c,{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=f=>n.value=f),label:"\u9009\u9879B",size:"large",disabled:u.value},null,8,["modelValue","disabled"]),t(h,{modelValue:u.value,"onUpdate:modelValue":s[2]||(s[2]=f=>u.value=f)},null,8,["modelValue"])])}}});typeof tn=="function"&&tn(nn);function on(e){e.__sourceCode=`<template>\r
  <jw-checkbox-group v-model="checkList" size="large">\r
    <jw-checkbox label="\u9009\u9879A" />\r
    <jw-checkbox label="\u9009\u9879B" />\r
    <jw-checkbox label="\u9009\u9879C" />\r
  </jw-checkbox-group>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const checkList = ref(["\u9009\u9879A"]);\r
<\/script>`,e.__sourceCodeTitle="\u591A\u9009\u6846\u7EC4"}const un=b({setup(e){const o=y(["\u9009\u9879A"]);return(n,u)=>{const l=m("jw-checkbox"),s=m("jw-checkbox-group");return a(),g(s,{modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=c=>o.value=c),size:"large"},{default:r(()=>[t(l,{label:"\u9009\u9879A"}),t(l,{label:"\u9009\u9879B"}),t(l,{label:"\u9009\u9879C"})]),_:1},8,["modelValue"])}}});typeof on=="function"&&on(un);function ln(e){e.__sourceCode=`<template>\r
  <jw-checkbox\r
    v-model="checkAll"\r
    :indeterminate="isIndeterminate"\r
    @change="handleCheckAllChange"\r
    label="\u5168\u9009"\r
  />\r
  <jw-checkbox-group\r
    @change="handleCheckedCitiesChange"\r
    v-model="checkedCities"\r
    size="large"\r
  >\r
    <jw-checkbox v-for="city in cities" :key="city" :label="city" />\r
  </jw-checkbox-group>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const checkAll = ref(false);\r
const isIndeterminate = ref(true);\r
\r
const checkedCities = ref(["\u957F\u5B89", "\u6D1B\u9633"]);\r
const cities = ["\u957F\u5B89", "\u6D1B\u9633", "\u5357\u4EAC", "\u5317\u4EAC"];\r
\r
const handleCheckAllChange = (val: boolean) => {\r
  checkedCities.value = val ? [...cities] : [];\r
  isIndeterminate.value = false;\r
};\r
\r
const handleCheckedCitiesChange = (value: string[]) => {\r
  const checkedCount = value.length;\r
  checkAll.value = checkedCount === cities.length;\r
  isIndeterminate.value = checkedCount > 0 && cities.length > checkedCount;\r
};\r
<\/script>`,e.__sourceCodeTitle="\u4E2D\u95F4\u72B6\u6001"}const rn=b({setup(e){const o=y(!1),n=y(!0),u=y(["\u957F\u5B89","\u6D1B\u9633"]),l=["\u957F\u5B89","\u6D1B\u9633","\u5357\u4EAC","\u5317\u4EAC"],s=h=>{u.value=h?[...l]:[],n.value=!1},c=h=>{const f=h.length;o.value=f===l.length,n.value=f>0&&l.length>f};return(h,f)=>{const $=m("jw-checkbox"),v=m("jw-checkbox-group");return a(),p(E,null,[t($,{modelValue:o.value,"onUpdate:modelValue":f[0]||(f[0]=j=>o.value=j),indeterminate:n.value,onChange:s,label:"\u5168\u9009"},null,8,["modelValue","indeterminate"]),t(v,{onChange:c,modelValue:u.value,"onUpdate:modelValue":f[1]||(f[1]=j=>u.value=j),size:"large"},{default:r(()=>[(a(),p(E,null,L(l,j=>t($,{key:j,label:j},null,8,["label"])),64))]),_:1},8,["modelValue"])],64)}}});typeof ln=="function"&&ln(rn);function sn(e){e.__sourceCode=`<template>\r
  <jw-checkbox v-model="checkbox1" label="\u9009\u9879 A" size="small" border />\r
  <jw-checkbox v-model="checkbox2" label="\u9009\u9879 B" border />\r
  <jw-checkbox v-model="checkbox3" label="\u9009\u9879 C" size="large" border />\r
  <jw-checkbox v-model="checkbox4" label="\u9009\u9879 D" size="small" border />\r
  <jw-checkbox v-model="checkbox5" label="\u9009\u9879 E" border />\r
  <jw-checkbox v-model="checkbox6" label="\u9009\u9879 F" size="large" border />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const checkbox1 = ref(false);\r
const checkbox2 = ref(false);\r
const checkbox3 = ref(false);\r
const checkbox4 = ref(false);\r
const checkbox5 = ref(false);\r
const checkbox6 = ref(false);\r
<\/script>`,e.__sourceCodeTitle="\u5E26\u6709\u8FB9\u6846"}const an=b({setup(e){const o=y(!1),n=y(!1),u=y(!1),l=y(!1),s=y(!1),c=y(!1);return(h,f)=>{const $=m("jw-checkbox");return a(),p(E,null,[t($,{modelValue:o.value,"onUpdate:modelValue":f[0]||(f[0]=v=>o.value=v),label:"\u9009\u9879 A",size:"small",border:""},null,8,["modelValue"]),t($,{modelValue:n.value,"onUpdate:modelValue":f[1]||(f[1]=v=>n.value=v),label:"\u9009\u9879 B",border:""},null,8,["modelValue"]),t($,{modelValue:u.value,"onUpdate:modelValue":f[2]||(f[2]=v=>u.value=v),label:"\u9009\u9879 C",size:"large",border:""},null,8,["modelValue"]),t($,{modelValue:l.value,"onUpdate:modelValue":f[3]||(f[3]=v=>l.value=v),label:"\u9009\u9879 D",size:"small",border:""},null,8,["modelValue"]),t($,{modelValue:s.value,"onUpdate:modelValue":f[4]||(f[4]=v=>s.value=v),label:"\u9009\u9879 E",border:""},null,8,["modelValue"]),t($,{modelValue:c.value,"onUpdate:modelValue":f[5]||(f[5]=v=>c.value=v),label:"\u9009\u9879 F",size:"large",border:""},null,8,["modelValue"])],64)}}});typeof sn=="function"&&sn(an);const td={class:"checkbox-doc-wrapper"},nd=d("h1",null,"Checkbox \u5355\u9009\u6846",-1),od=d("p",null,"\u4E00\u7EC4\u5907\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9009",-1),ud={class:"preview-wrapper"},ld=b({setup(e){const o=[["v-model","\u9009\u4E2D\u9879\u7ED1\u5B9A\u503C","string / number / boolean","-","-"],["label","\u5355\u9009\u6846\u5BF9\u5E94\u7684\u503C","string / number / boolean","-","-"],["disabled","\u662F\u5426\u7981\u7528\u5355\u9009\u6846","boolean","-","false"],["border","\u662F\u5426\u663E\u793A\u8FB9\u6846","boolean","-","false"],["size","	Checkbox \u7684\u5C3A\u5BF8","string","large / default /small","-"]],n=[["change","\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6","\u9009\u4E2D\u7684 Checkbox label \u503C"],,],u=[["default","\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9"]],l=[["v-model","\u7ED1\u5B9A\u503C","array","-","[]"],["disabled","\u662F\u5426\u7981\u7528","boolean","-","false"],["border","\u662F\u5426\u663E\u793A\u8FB9\u6846","boolean","-","false"],["size","\u591A\u9009\u6846\u7EC4\u5C3A\u5BF8","string","large / default /small","-"]],s=[["change","\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6","value"],,],c=[["default","\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9","Checkbox"]];return(h,f)=>(a(),p("div",td,[nd,od,d("div",ud,[t(w,{component:en}),t(w,{component:nn}),t(w,{component:un}),t(w,{component:rn}),t(w,{component:an}),t(F,{title:"Checkbox \u5C5E\u6027",type:"prop",body:o}),t(F,{title:"Checkbox \u4E8B\u4EF6",type:"event",body:n}),t(F,{title:"Checkbox \u63D2\u69FD",type:"slot",body:u}),t(F,{title:"Checkbox-group \u5C5E\u6027",type:"prop",body:l}),t(F,{title:"Checkbox-group \u4E8B\u4EF6",type:"event",body:s}),t(F,{title:"Checkbox-group \u63D2\u69FD",type:"slot",body:c,header:["\u63D2\u69FD\u540D","\u8BF4\u660E","\u5B50\u6807\u7B7E"]}),t(M,{prev:{path:"/doc/tag",name:"Tag \u6807\u7B7E"},next:{path:"/doc/input",name:"\u8F93\u5165\u6846 Input"}})])]))}});function cn(e){e.__sourceCode=`<template>\r
  <jw-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" v-model="value" />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const value = ref("hello");\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const dn=b({setup(e){const o=y("hello");return(n,u)=>{const l=m("jw-input");return a(),g(l,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=s=>o.value=s)},null,8,["modelValue"])}}});typeof cn=="function"&&cn(dn);function _n(e){e.__sourceCode=`<template>\r
  <jw-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" v-model="value" disabled />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const value = ref("hello");\r
<\/script>`,e.__sourceCodeTitle="\u7981\u7528\u72B6\u6001"}const pn=b({setup(e){const o=y("hello");return(n,u)=>{const l=m("jw-input");return a(),g(l,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=s=>o.value=s),disabled:""},null,8,["modelValue"])}}});typeof _n=="function"&&_n(pn);function fn(e){e.__sourceCode=`<template>\r
  <jw-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" v-model="value" clearable />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const value = ref("hello");\r
<\/script>`,e.__sourceCodeTitle="\u53EF\u6E05\u7A7A"}const mn=b({setup(e){const o=y("hello");return(n,u)=>{const l=m("jw-input");return a(),g(l,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=s=>o.value=s),clearable:""},null,8,["modelValue"])}}});typeof fn=="function"&&fn(mn);function hn(e){e.__sourceCode=`<template>\r
  <jw-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" v-model="value" show-password />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const value = ref("hello");\r
<\/script>`,e.__sourceCodeTitle="\u5BC6\u7801\u6846"}const bn=b({setup(e){const o=y("hello");return(n,u)=>{const l=m("jw-input");return a(),g(l,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=s=>o.value=s),"show-password":""},null,8,["modelValue"])}}});typeof hn=="function"&&hn(bn);function vn(e){e.__sourceCode=`<template>\r
  <jw-input\r
    placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"\r
    v-model="value"\r
    type="textarea"\r
    style="width: 300px"\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const value = ref("hello");\r
<\/script>`,e.__sourceCodeTitle="\u6587\u672C\u57DF"}const wn=b({setup(e){const o=y("hello");return(n,u)=>{const l=m("jw-input");return a(),g(l,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=s=>o.value=s),type:"textarea",style:{width:"300px"}},null,8,["modelValue"])}}});typeof vn=="function"&&vn(wn);function gn(e){e.__sourceCode=`<template>\r
  <jw-input\r
    placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"\r
    v-model="value"\r
    :suffixIcon="Search28Filled"\r
    show-password\r
    clearable\r
  />\r
  <jw-input\r
    placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"\r
    v-model="value1"\r
    :prefixIcon="Search28Filled"\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
import { Search28Filled } from "@vicons/fluent";\r
\r
const value = ref("hello");\r
const value1 = ref("hello");\r
<\/script>`,e.__sourceCodeTitle="\u5E26 icon \u7684\u8F93\u5165\u6846"}const yn=b({setup(e){const o=y("hello"),n=y("hello");return(u,l)=>{const s=m("jw-input");return a(),p(E,null,[t(s,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=c=>o.value=c),suffixIcon:_(Oe),"show-password":"",clearable:""},null,8,["modelValue","suffixIcon"]),t(s,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=c=>n.value=c),prefixIcon:_(Oe)},null,8,["modelValue","prefixIcon"])],64)}}});typeof gn=="function"&&gn(yn);function jn(e){e.__sourceCode=`<template>\r
  <jw-button @click="handleFocus">Focus</jw-button>\r
  <jw-button @click="handleSelect">Select</jw-button>\r
  <jw-button @click="handleBlur">Blur</jw-button>\r
  <jw-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" v-model="value" ref="inputInstRef" />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const value = ref("\u9A6C\u513F\u4E56\uFF0C\u9A6C\u513F\u597D\uFF0C\u9A6C\u513F\u5149\u8DD1\u4E0D\u5403\u8349");\r
const inputInstRef = ref();\r
const handleFocus = () => {\r
  inputInstRef.value.focus();\r
};\r
const handleBlur = () => {\r
  inputInstRef.value.blur();\r
};\r
const handleSelect = () => {\r
  inputInstRef.value.select();\r
};\r
<\/script>`,e.__sourceCodeTitle="\u624B\u52A8 focus & select & blur"}const rd=i("Focus"),sd=i("Select"),ad=i("Blur"),$n=b({setup(e){const o=y("\u9A6C\u513F\u4E56\uFF0C\u9A6C\u513F\u597D\uFF0C\u9A6C\u513F\u5149\u8DD1\u4E0D\u5403\u8349"),n=y(),u=()=>{n.value.focus()},l=()=>{n.value.blur()},s=()=>{n.value.select()};return(c,h)=>{const f=m("jw-button"),$=m("jw-input");return a(),p(E,null,[t(f,{onClick:u},{default:r(()=>[rd]),_:1}),t(f,{onClick:s},{default:r(()=>[sd]),_:1}),t(f,{onClick:l},{default:r(()=>[ad]),_:1}),t($,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:o.value,"onUpdate:modelValue":h[0]||(h[0]=v=>o.value=v),ref_key:"inputInstRef",ref:n},null,8,["modelValue"])],64)}}});typeof jn=="function"&&jn($n);const cd={class:"input-doc-wrapper"},id=d("h1",null,"Input \u8F93\u5165\u6846",-1),dd=d("p",null,"\u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\u8F93\u5165\u5B57\u7B26",-1),_d={class:"preview-wrapper"},pd=b({setup(e){const o=[["type","\u7C7B\u578B","string","text\uFF0Ctextarea \u548C\u5176\u4ED6 \u539F\u751F input \u7684 type \u503C","text"],[" v-model","\u7ED1\u5B9A\u503C","string / number","-","-"],["placeholder","\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C","string","-","-"],["clearable","\u662F\u5426\u53EF\u6E05\u7A7A","boolean","-","false"],["disabled","	\u7981\u7528","boolean","-","false"],["prefix-icon","\u8F93\u5165\u6846\u5934\u90E8\u56FE\u6807","Component","-","-"],["suffix-icon","\u8F93\u5165\u6846\u5C3E\u90E8\u56FE\u6807","Component","-","-"],["readonly","\u539F\u751F\u5C5E\u6027\uFF0C\u662F\u5426\u53EA\u8BFB","	boolean","-","false"]],n=[["input","\u5728 Input \u503C\u6539\u53D8\u65F6\u89E6\u53D1","(value: string / number)"],["clear","\u5728\u70B9\u51FB\u7531 clearable \u5C5E\u6027\u751F\u6210\u7684\u6E05\u7A7A\u6309\u94AE\u65F6\u89E6\u53D1","-"],["blur","\u5728 Input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1","(event: Event)"],["focus","\u5728 Input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1","(event: Event)"]],u=[["input","\u4F7F input \u83B7\u53D6\u7126\u70B9","-"],["blur","\u4F7F input \u5931\u53BB\u7126\u70B9","-"],["select","\u9009\u4E2D input \u4E2D\u7684\u6587\u5B57","-"]];return(l,s)=>(a(),p("div",cd,[id,dd,d("div",_d,[t(w,{component:dn}),t(w,{component:pn}),t(w,{component:mn}),t(w,{component:bn}),t(w,{component:wn}),t(w,{component:yn}),t(w,{component:$n}),t(F,{title:"Input \u5C5E\u6027",type:"prop",body:o}),t(F,{title:"Input \u4E8B\u4EF6",type:"event",body:n}),t(F,{title:"Input \u65B9\u6CD5",type:"methods",body:u}),t(M,{prev:{path:"/doc/checkbox",name:"\u590D\u9009\u6846 Checkbox"},next:{path:"/doc/radio",name:"\u5355\u9009\u6846 Radio"}})])]))}});function En(e){e.__sourceCode=`<template>\r
  <div style="width: 100%">\r
    <jw-radio v-model="radio1" label="1" size="large">\u9009\u98791</jw-radio>\r
    <jw-radio v-model="radio1" label="2" size="large">\u9009\u98792</jw-radio>\r
  </div>\r
  <div style="width: 100%">\r
    <jw-radio v-model="radio2" label="1">\u9009\u98791</jw-radio>\r
    <jw-radio v-model="radio2" label="2">\u9009\u98792</jw-radio>\r
  </div>\r
  <div style="width: 100%">\r
    <jw-radio v-model="radio3" label="1" size="small">\u9009\u98791</jw-radio>\r
    <jw-radio v-model="radio3" label="2" size="small">\u9009\u98792</jw-radio>\r
  </div>\r
  <div style="width: 100%">\r
    <jw-radio v-model="radio4" label="1" size="small" disabled>\u9009\u98791</jw-radio>\r
    <jw-radio v-model="radio4" label="2" size="small" disabled>\u9009\u98792</jw-radio>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const radio1 = ref("1");\r
const radio2 = ref("1");\r
const radio3 = ref("1");\r
const radio4 = ref("1");\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const fd={style:{width:"100%"}},md=i("\u9009\u98791"),hd=i("\u9009\u98792"),bd={style:{width:"100%"}},vd=i("\u9009\u98791"),wd=i("\u9009\u98792"),gd={style:{width:"100%"}},yd=i("\u9009\u98791"),jd=i("\u9009\u98792"),$d={style:{width:"100%"}},Ed=i("\u9009\u98791"),Bd=i("\u9009\u98792"),Bn=b({setup(e){const o=y("1"),n=y("1"),u=y("1"),l=y("1");return(s,c)=>{const h=m("jw-radio");return a(),p(E,null,[d("div",fd,[t(h,{modelValue:o.value,"onUpdate:modelValue":c[0]||(c[0]=f=>o.value=f),label:"1",size:"large"},{default:r(()=>[md]),_:1},8,["modelValue"]),t(h,{modelValue:o.value,"onUpdate:modelValue":c[1]||(c[1]=f=>o.value=f),label:"2",size:"large"},{default:r(()=>[hd]),_:1},8,["modelValue"])]),d("div",bd,[t(h,{modelValue:n.value,"onUpdate:modelValue":c[2]||(c[2]=f=>n.value=f),label:"1"},{default:r(()=>[vd]),_:1},8,["modelValue"]),t(h,{modelValue:n.value,"onUpdate:modelValue":c[3]||(c[3]=f=>n.value=f),label:"2"},{default:r(()=>[wd]),_:1},8,["modelValue"])]),d("div",gd,[t(h,{modelValue:u.value,"onUpdate:modelValue":c[4]||(c[4]=f=>u.value=f),label:"1",size:"small"},{default:r(()=>[yd]),_:1},8,["modelValue"]),t(h,{modelValue:u.value,"onUpdate:modelValue":c[5]||(c[5]=f=>u.value=f),label:"2",size:"small"},{default:r(()=>[jd]),_:1},8,["modelValue"])]),d("div",$d,[t(h,{modelValue:l.value,"onUpdate:modelValue":c[6]||(c[6]=f=>l.value=f),label:"1",size:"small",disabled:""},{default:r(()=>[Ed]),_:1},8,["modelValue"]),t(h,{modelValue:l.value,"onUpdate:modelValue":c[7]||(c[7]=f=>l.value=f),label:"2",size:"small",disabled:""},{default:r(()=>[Bd]),_:1},8,["modelValue"])])],64)}}});typeof En=="function"&&En(Bn);function Fn(e){e.__sourceCode=`<template>\r
  <jw-radio v-model="radio" label="1" disabled>\u9009\u98791</jw-radio>\r
  <jw-radio v-model="radio" label="2" disabled>\u9009\u98792</jw-radio>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const radio = ref("1");\r
<\/script>`,e.__sourceCodeTitle="\u7981\u7528\u72B6\u6001"}const Fd=i("\u9009\u98791"),xd=i("\u9009\u98792"),xn=b({setup(e){const o=y("1");return(n,u)=>{const l=m("jw-radio");return a(),p(E,null,[t(l,{modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=s=>o.value=s),label:"1",disabled:""},{default:r(()=>[Fd]),_:1},8,["modelValue"]),t(l,{modelValue:o.value,"onUpdate:modelValue":u[1]||(u[1]=s=>o.value=s),label:"2",disabled:""},{default:r(()=>[xd]),_:1},8,["modelValue"])],64)}}});typeof Fn=="function"&&Fn(xn);function Cn(e){e.__sourceCode=`<template>\r
  <jw-radio v-model="radio" label="1" size="small">\u9009\u98791</jw-radio>\r
  <jw-radio v-model="radio" label="2">\u9009\u98792</jw-radio>\r
  <jw-radio v-model="radio" label="3" size="large">\u9009\u98793</jw-radio>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const radio = ref("1");\r
<\/script>`,e.__sourceCodeTitle="\u5C3A\u5BF8"}const Cd=i("\u9009\u98791"),kd=i("\u9009\u98792"),Dd=i("\u9009\u98793"),kn=b({setup(e){const o=y("1");return(n,u)=>{const l=m("jw-radio");return a(),p(E,null,[t(l,{modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=s=>o.value=s),label:"1",size:"small"},{default:r(()=>[Cd]),_:1},8,["modelValue"]),t(l,{modelValue:o.value,"onUpdate:modelValue":u[1]||(u[1]=s=>o.value=s),label:"2"},{default:r(()=>[kd]),_:1},8,["modelValue"]),t(l,{modelValue:o.value,"onUpdate:modelValue":u[2]||(u[2]=s=>o.value=s),label:"3",size:"large"},{default:r(()=>[Dd]),_:1},8,["modelValue"])],64)}}});typeof Cn=="function"&&Cn(kn);function Dn(e){e.__sourceCode=`<template>\r
  <jw-radio-group v-model="radio" size="large">\r
    <jw-radio label="1">\u9009\u9879 A</jw-radio>\r
    <jw-radio label="2">\u9009\u9879 B</jw-radio>\r
    <jw-radio label="3" disabled>\u9009\u9879 C</jw-radio>\r
  </jw-radio-group>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const radio = ref("1");\r
\r
<\/script>`,e.__sourceCodeTitle="\u5355\u9009\u6846\u7EC4"}const Ad=i("\u9009\u9879 A"),Vd=i("\u9009\u9879 B"),zd=i("\u9009\u9879 C"),An=b({setup(e){const o=y("1");return(n,u)=>{const l=m("jw-radio"),s=m("jw-radio-group");return a(),g(s,{modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=c=>o.value=c),size:"large"},{default:r(()=>[t(l,{label:"1"},{default:r(()=>[Ad]),_:1}),t(l,{label:"2"},{default:r(()=>[Vd]),_:1}),t(l,{label:"3",disabled:""},{default:r(()=>[zd]),_:1})]),_:1},8,["modelValue"])}}});typeof Dn=="function"&&Dn(An);function Vn(e){e.__sourceCode=`<template>\r
  <jw-radio v-model="radio" label="1" size="small" border>\u9009\u98791</jw-radio>\r
  <jw-radio v-model="radio" label="2" border>\u9009\u98792</jw-radio>\r
  <jw-radio v-model="radio" label="3" size="large" border>\u9009\u98793</jw-radio>\r
\r
  <jw-radio v-model="radio1" label="4" size="small" border disabled\r
    >\u9009\u98791</jw-radio\r
  >\r
  <jw-radio v-model="radio1" label="5" border disabled>\u9009\u98792</jw-radio>\r
  <jw-radio v-model="radio1" label="6" size="large" border disabled\r
    >\u9009\u98793</jw-radio\r
  >\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const radio = ref("1");\r
const radio1 = ref("4");\r
<\/script>`,e.__sourceCodeTitle="\u662F\u5426\u6709\u8FB9\u6846"}const Td=i("\u9009\u98791"),Sd=i("\u9009\u98792"),Id=i("\u9009\u98793"),Ud=i("\u9009\u98791"),Md=i("\u9009\u98792"),Pd=i("\u9009\u98793"),zn=b({setup(e){const o=y("1"),n=y("4");return(u,l)=>{const s=m("jw-radio");return a(),p(E,null,[t(s,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=c=>o.value=c),label:"1",size:"small",border:""},{default:r(()=>[Td]),_:1},8,["modelValue"]),t(s,{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=c=>o.value=c),label:"2",border:""},{default:r(()=>[Sd]),_:1},8,["modelValue"]),t(s,{modelValue:o.value,"onUpdate:modelValue":l[2]||(l[2]=c=>o.value=c),label:"3",size:"large",border:""},{default:r(()=>[Id]),_:1},8,["modelValue"]),t(s,{modelValue:n.value,"onUpdate:modelValue":l[3]||(l[3]=c=>n.value=c),label:"4",size:"small",border:"",disabled:""},{default:r(()=>[Ud]),_:1},8,["modelValue"]),t(s,{modelValue:n.value,"onUpdate:modelValue":l[4]||(l[4]=c=>n.value=c),label:"5",border:"",disabled:""},{default:r(()=>[Md]),_:1},8,["modelValue"]),t(s,{modelValue:n.value,"onUpdate:modelValue":l[5]||(l[5]=c=>n.value=c),label:"6",size:"large",border:"",disabled:""},{default:r(()=>[Pd]),_:1},8,["modelValue"])],64)}}});typeof Vn=="function"&&Vn(zn);const Rd={class:"radio-doc-wrapper"},Jd=d("h1",null,"Radio \u5355\u9009\u6846",-1),Od=d("p",null,"\u5728\u4E00\u7EC4\u5907\u9009\u9879\u4E2D\u8FDB\u884C\u5355\u9009",-1),Hd={class:"preview-wrapper"},Nd=b({setup(e){const o=[["v-model","\u9009\u4E2D\u9879\u7ED1\u5B9A\u503C","string / number / boolean","-","-"],["label","\u591A\u9009\u6846\u5BF9\u5E94\u7684\u503C","string / number / boolean","-","-"],["disabled","\u662F\u5426\u7981\u7528\u5355\u9009\u6846","boolean","-","false"],["border","\u662F\u5426\u663E\u793A\u8FB9\u6846","boolean","-","false"],["size","	Radio \u7684\u5C3A\u5BF8","string","large / default /small","-"],["indeterminate","\u8BBE\u7F6E indeterminate \u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236","boolean","","false"]],n=[["change","\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6","value"],,],u=[["default","\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9"]],l=[["v-model","\u7ED1\u5B9A\u503C","string / number / boolean","-","-"],["disabled","\u662F\u5426\u7981\u7528","boolean","-","false"],["border","\u662F\u5426\u663E\u793A\u8FB9\u6846","boolean","-","false"],["size","\u5355\u9009\u6846\u7EC4\u5C3A\u5BF8","string","large / default /small","-"]],s=[["change","\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6","\u9009\u4E2D\u7684 Radio label \u503C"],,],c=[["default","\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9","Radio"]];return(h,f)=>(a(),p("div",Rd,[Jd,Od,d("div",Hd,[t(w,{component:Bn}),t(w,{component:xn}),t(w,{component:kn}),t(w,{component:An}),t(w,{component:zn}),t(F,{title:"Radio \u5C5E\u6027",type:"prop",body:o}),t(F,{title:"Radio \u4E8B\u4EF6",type:"event",body:n}),t(F,{title:"Radio \u63D2\u69FD",type:"slot",body:u}),t(F,{title:"Radio-group \u5C5E\u6027",type:"prop",body:l}),t(F,{title:"Radio-group \u4E8B\u4EF6",type:"event",body:s}),t(F,{title:"Radio-group \u63D2\u69FD",type:"slot",body:c,header:["\u63D2\u69FD\u540D","\u8BF4\u660E","\u5B50\u6807\u7B7E"]}),t(M,{prev:{path:"/doc/input",name:"Input \u8F93\u5165\u6846"},next:{path:"/doc/select",name:"\u9009\u62E9\u5668 Select"}})])]))}});function Tn(e){e.__sourceCode=`<template>\r
  <jw-select\r
    id="select"\r
    style="width: 200px"\r
    :options="options"\r
    v-model="value"\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const value = ref("1");\r
const options = [\r
  {\r
    label: "\u65F6\u95F4\u4F1A\u56DE\u7B54\u6210\u957F",\r
    value: "1",\r
  },\r
  {\r
    label: "\u6210\u957F\u4F1A\u56DE\u7B54\u68A6\u60F3",\r
    value: "2",\r
  },\r
  {\r
    label: "\u68A6\u60F3\u4F1A\u56DE\u7B54\u751F\u6D3B",\r
    value: "3",\r
  },\r
  {\r
    label: "\u751F\u6D3B\u56DE\u7B54\u4F60\u6211\u7684\u6A21\u6837",\r
    value: "4",\r
  },\r
  {\r
    label: "\u6D77\u6D0B\u4F1A\u56DE\u7B54\u6C5F\u6E56",\r
    value: "5",\r
  },\r
  {\r
    label: "\u6C5F\u6E56\u4F1A\u56DE\u7B54\u6CB3\u6D41",\r
    value: "6",\r
  },\r
  {\r
    label: "\u6CB3\u6D41\u4F1A\u56DE\u7B54\u6D6A\u6F6E",\r
    value: "7",\r
  },\r
  {\r
    label: "\u4E00\u8D77\u8DC3\u5165\u4EBA\u6D77",\r
    value: "8",\r
  },\r
  {\r
    label: "\u505A\u4E00\u6735\u5954\u6D8C\u7684\u6D6A\u82B1",\r
    value: "9",\r
  },\r
  {\r
    label: "\u3002\u3002\u3002",\r
    value: "10",\r
  },\r
];\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const Sn=b({setup(e){const o=y("1"),n=[{label:"\u65F6\u95F4\u4F1A\u56DE\u7B54\u6210\u957F",value:"1"},{label:"\u6210\u957F\u4F1A\u56DE\u7B54\u68A6\u60F3",value:"2"},{label:"\u68A6\u60F3\u4F1A\u56DE\u7B54\u751F\u6D3B",value:"3"},{label:"\u751F\u6D3B\u56DE\u7B54\u4F60\u6211\u7684\u6A21\u6837",value:"4"},{label:"\u6D77\u6D0B\u4F1A\u56DE\u7B54\u6C5F\u6E56",value:"5"},{label:"\u6C5F\u6E56\u4F1A\u56DE\u7B54\u6CB3\u6D41",value:"6"},{label:"\u6CB3\u6D41\u4F1A\u56DE\u7B54\u6D6A\u6F6E",value:"7"},{label:"\u4E00\u8D77\u8DC3\u5165\u4EBA\u6D77",value:"8"},{label:"\u505A\u4E00\u6735\u5954\u6D8C\u7684\u6D6A\u82B1",value:"9"},{label:"\u3002\u3002\u3002",value:"10"}];return(u,l)=>{const s=m("jw-select");return a(),g(s,{id:"select",style:{width:"200px"},options:n,modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=c=>o.value=c)},null,8,["modelValue"])}}});typeof Tn=="function"&&Tn(Sn);function In(e){e.__sourceCode=`<template>\r
  <jw-select\r
    id="select"\r
    style="width: 200px"\r
    :options="options"\r
    v-model="value"\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const value = ref("1");\r
const options = [\r
  {\r
    label: "\u65F6\u95F4\u4F1A\u56DE\u7B54\u6210\u957F",\r
    value: "1",\r
    disabled: true,\r
  },\r
  {\r
    label: "\u6210\u957F\u4F1A\u56DE\u7B54\u68A6\u60F3",\r
    value: "2",\r
  },\r
  {\r
    label: "\u68A6\u60F3\u4F1A\u56DE\u7B54\u751F\u6D3B",\r
    value: "3",\r
    disabled: true,\r
  },\r
  {\r
    label: "\u751F\u6D3B\u56DE\u7B54\u4F60\u6211\u7684\u6A21\u6837",\r
    value: "4",\r
  },\r
  {\r
    label: "\u6D77\u6D0B\u4F1A\u56DE\u7B54\u6C5F\u6E56",\r
    value: "5",\r
    disabled: true,\r
  },\r
  {\r
    label: "\u6C5F\u6E56\u4F1A\u56DE\u7B54\u6CB3\u6D41",\r
    value: "6",\r
  },\r
  {\r
    label: "\u6CB3\u6D41\u4F1A\u56DE\u7B54\u6D6A\u6F6E",\r
    value: "7",\r
    disabled: true,\r
  },\r
  {\r
    label: "\u4E00\u8D77\u8DC3\u5165\u4EBA\u6D77",\r
    value: "8",\r
  },\r
  {\r
    label: "\u505A\u4E00\u6735\u5954\u6D8C\u7684\u6D6A\u82B1",\r
    value: "9",\r
  },\r
  {\r
    label: "\u3002\u3002\u3002",\r
    value: "10",\r
  },\r
];\r
<\/script>`,e.__sourceCodeTitle="\u7981\u7528\u9009\u9879"}const Un=b({setup(e){const o=y("1"),n=[{label:"\u65F6\u95F4\u4F1A\u56DE\u7B54\u6210\u957F",value:"1",disabled:!0},{label:"\u6210\u957F\u4F1A\u56DE\u7B54\u68A6\u60F3",value:"2"},{label:"\u68A6\u60F3\u4F1A\u56DE\u7B54\u751F\u6D3B",value:"3",disabled:!0},{label:"\u751F\u6D3B\u56DE\u7B54\u4F60\u6211\u7684\u6A21\u6837",value:"4"},{label:"\u6D77\u6D0B\u4F1A\u56DE\u7B54\u6C5F\u6E56",value:"5",disabled:!0},{label:"\u6C5F\u6E56\u4F1A\u56DE\u7B54\u6CB3\u6D41",value:"6"},{label:"\u6CB3\u6D41\u4F1A\u56DE\u7B54\u6D6A\u6F6E",value:"7",disabled:!0},{label:"\u4E00\u8D77\u8DC3\u5165\u4EBA\u6D77",value:"8"},{label:"\u505A\u4E00\u6735\u5954\u6D8C\u7684\u6D6A\u82B1",value:"9"},{label:"\u3002\u3002\u3002",value:"10"}];return(u,l)=>{const s=m("jw-select");return a(),g(s,{id:"select",style:{width:"200px"},options:n,modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=c=>o.value=c)},null,8,["modelValue"])}}});typeof In=="function"&&In(Un);function Mn(e){e.__sourceCode=`<template>\r
  <jw-select\r
    id="select"\r
    style="width: 200px"\r
    :options="options"\r
    v-model="value"\r
    disabled\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const value = ref("1");\r
const options = [\r
  {\r
    label: "\u65F6\u95F4\u4F1A\u56DE\u7B54\u6210\u957F",\r
    value: "1",\r
    disabled: true,\r
  },\r
  {\r
    label: "\u6210\u957F\u4F1A\u56DE\u7B54\u68A6\u60F3",\r
    value: "2",\r
  },\r
  {\r
    label: "\u68A6\u60F3\u4F1A\u56DE\u7B54\u751F\u6D3B",\r
    value: "3",\r
    disabled: true,\r
  },\r
  {\r
    label: "\u751F\u6D3B\u56DE\u7B54\u4F60\u6211\u7684\u6A21\u6837",\r
    value: "4",\r
  },\r
  {\r
    label: "\u6D77\u6D0B\u4F1A\u56DE\u7B54\u6C5F\u6E56",\r
    value: "5",\r
    disabled: true,\r
  },\r
  {\r
    label: "\u6C5F\u6E56\u4F1A\u56DE\u7B54\u6CB3\u6D41",\r
    value: "6",\r
  },\r
  {\r
    label: "\u6CB3\u6D41\u4F1A\u56DE\u7B54\u6D6A\u6F6E",\r
    value: "7",\r
    disabled: true,\r
  },\r
  {\r
    label: "\u4E00\u8D77\u8DC3\u5165\u4EBA\u6D77",\r
    value: "8",\r
  },\r
  {\r
    label: "\u505A\u4E00\u6735\u5954\u6D8C\u7684\u6D6A\u82B1",\r
    value: "9",\r
  },\r
  {\r
    label: "\u3002\u3002\u3002",\r
    value: "10",\r
  },\r
];\r
<\/script>`,e.__sourceCodeTitle="\u7981\u7528\u72B6\u6001"}const Pn=b({setup(e){const o=y("1"),n=[{label:"\u65F6\u95F4\u4F1A\u56DE\u7B54\u6210\u957F",value:"1",disabled:!0},{label:"\u6210\u957F\u4F1A\u56DE\u7B54\u68A6\u60F3",value:"2"},{label:"\u68A6\u60F3\u4F1A\u56DE\u7B54\u751F\u6D3B",value:"3",disabled:!0},{label:"\u751F\u6D3B\u56DE\u7B54\u4F60\u6211\u7684\u6A21\u6837",value:"4"},{label:"\u6D77\u6D0B\u4F1A\u56DE\u7B54\u6C5F\u6E56",value:"5",disabled:!0},{label:"\u6C5F\u6E56\u4F1A\u56DE\u7B54\u6CB3\u6D41",value:"6"},{label:"\u6CB3\u6D41\u4F1A\u56DE\u7B54\u6D6A\u6F6E",value:"7",disabled:!0},{label:"\u4E00\u8D77\u8DC3\u5165\u4EBA\u6D77",value:"8"},{label:"\u505A\u4E00\u6735\u5954\u6D8C\u7684\u6D6A\u82B1",value:"9"},{label:"\u3002\u3002\u3002",value:"10"}];return(u,l)=>{const s=m("jw-select");return a(),g(s,{id:"select",style:{width:"200px"},options:n,modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=c=>o.value=c),disabled:""},null,8,["modelValue"])}}});typeof Mn=="function"&&Mn(Pn);function Rn(e){e.__sourceCode=`<template>\r
  <jw-select\r
    id="select"\r
    style="width: 200px"\r
    :options="options"\r
    v-model="value"\r
    clearable\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const value = ref("1");\r
const options = [\r
  {\r
    label: "\u65F6\u95F4\u4F1A\u56DE\u7B54\u6210\u957F",\r
    value: "1",\r
  },\r
  {\r
    label: "\u6210\u957F\u4F1A\u56DE\u7B54\u68A6\u60F3",\r
    value: "2",\r
  },\r
  {\r
    label: "\u68A6\u60F3\u4F1A\u56DE\u7B54\u751F\u6D3B",\r
    value: "3",\r
  },\r
  {\r
    label: "\u751F\u6D3B\u56DE\u7B54\u4F60\u6211\u7684\u6A21\u6837",\r
    value: "4",\r
  },\r
  {\r
    label: "\u6D77\u6D0B\u4F1A\u56DE\u7B54\u6C5F\u6E56",\r
    value: "5",\r
  },\r
  {\r
    label: "\u6C5F\u6E56\u4F1A\u56DE\u7B54\u6CB3\u6D41",\r
    value: "6",\r
  },\r
  {\r
    label: "\u6CB3\u6D41\u4F1A\u56DE\u7B54\u6D6A\u6F6E",\r
    value: "7",\r
  },\r
  {\r
    label: "\u4E00\u8D77\u8DC3\u5165\u4EBA\u6D77",\r
    value: "8",\r
  },\r
  {\r
    label: "\u505A\u4E00\u6735\u5954\u6D8C\u7684\u6D6A\u82B1",\r
    value: "9",\r
  },\r
  {\r
    label: "\u3002\u3002\u3002",\r
    value: "10",\r
  },\r
];\r
<\/script>`,e.__sourceCodeTitle="\u53EF\u6E05\u7A7A\u5355\u9009"}const Jn=b({setup(e){const o=y("1"),n=[{label:"\u65F6\u95F4\u4F1A\u56DE\u7B54\u6210\u957F",value:"1"},{label:"\u6210\u957F\u4F1A\u56DE\u7B54\u68A6\u60F3",value:"2"},{label:"\u68A6\u60F3\u4F1A\u56DE\u7B54\u751F\u6D3B",value:"3"},{label:"\u751F\u6D3B\u56DE\u7B54\u4F60\u6211\u7684\u6A21\u6837",value:"4"},{label:"\u6D77\u6D0B\u4F1A\u56DE\u7B54\u6C5F\u6E56",value:"5"},{label:"\u6C5F\u6E56\u4F1A\u56DE\u7B54\u6CB3\u6D41",value:"6"},{label:"\u6CB3\u6D41\u4F1A\u56DE\u7B54\u6D6A\u6F6E",value:"7"},{label:"\u4E00\u8D77\u8DC3\u5165\u4EBA\u6D77",value:"8"},{label:"\u505A\u4E00\u6735\u5954\u6D8C\u7684\u6D6A\u82B1",value:"9"},{label:"\u3002\u3002\u3002",value:"10"}];return(u,l)=>{const s=m("jw-select");return a(),g(s,{id:"select",style:{width:"200px"},options:n,modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=c=>o.value=c),clearable:""},null,8,["modelValue"])}}});typeof Rn=="function"&&Rn(Jn);function On(e){e.__sourceCode=`<template>\r
  <jw-select\r
    id="select"\r
    style="width: 400px"\r
    :options="options"\r
    v-model="value"\r
    multiple\r
    placeholder="Please Choose"\r
    clearable\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const value = ref(["song0", "song3", "song4"]);\r
const options = [\r
  {\r
    label: "Everybody's Got Something to Hide Except Me and My Monkey",\r
    value: "song0",\r
    disabled: true,\r
  },\r
  {\r
    label: "Drive My Car",\r
    value: "song1",\r
  },\r
  {\r
    label: "Norwegian Wood",\r
    value: "song2",\r
  },\r
  {\r
    label: "You Won't See",\r
    value: "song3",\r
    disabled: true,\r
  },\r
  {\r
    label: "Nowhere Man",\r
    value: "song4",\r
  },\r
  {\r
    label: "Think For Yourself",\r
    value: "song5",\r
  },\r
  {\r
    label: "The Word",\r
    value: "song6",\r
  },\r
  {\r
    label: "Michelle",\r
    value: "song7",\r
    disabled: true,\r
  },\r
  {\r
    label: "What goes on",\r
    value: "song8",\r
  },\r
  {\r
    label: "Girl",\r
    value: "song9",\r
  },\r
  {\r
    label: "I'm looking through you",\r
    value: "song10",\r
  },\r
  {\r
    label: "In My Life",\r
    value: "song11",\r
  },\r
  {\r
    label: "Wait",\r
    value: "song12",\r
  },\r
];\r
<\/script>`,e.__sourceCodeTitle="\u591A\u9009"}const Hn=b({setup(e){const o=y(["song0","song3","song4"]),n=[{label:"Everybody's Got Something to Hide Except Me and My Monkey",value:"song0",disabled:!0},{label:"Drive My Car",value:"song1"},{label:"Norwegian Wood",value:"song2"},{label:"You Won't See",value:"song3",disabled:!0},{label:"Nowhere Man",value:"song4"},{label:"Think For Yourself",value:"song5"},{label:"The Word",value:"song6"},{label:"Michelle",value:"song7",disabled:!0},{label:"What goes on",value:"song8"},{label:"Girl",value:"song9"},{label:"I'm looking through you",value:"song10"},{label:"In My Life",value:"song11"},{label:"Wait",value:"song12"}];return(u,l)=>{const s=m("jw-select");return a(),g(s,{id:"select",style:{width:"400px"},options:n,modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=c=>o.value=c),multiple:"",placeholder:"Please Choose",clearable:""},null,8,["modelValue"])}}});typeof On=="function"&&On(Hn);const Ld={class:"select-doc-wrapper"},Wd=d("h1",null,"Select \u9009\u62E9\u5668",-1),qd=d("p",null,"\u9009\u70B9\u5565\uFF01",-1),Gd={class:"preview-wrapper"},Kd=b({setup(e){const o=[["v-model","\u7ED1\u5B9A\u503C","	boolean / string / number","-","-"],["placeholder","\u5360\u4F4D\u7B26","string","-","\u8BF7\u9009\u62E9"],["clearable","\u662F\u5426\u53EF\u4EE5\u6E05\u7A7A\u9009\u9879","boolean","-","false"],["disabled","\u662F\u5426\u7981\u7528","boolean","-","false"],["options","\u914D\u7F6E\u9009\u9879\u5185\u5BB9","Array","-","[]"],["multilple","\u662F\u5426\u4E3A\u591A\u9009","boolean","-","false"]],n=[["change","\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1","\u76EE\u524D\u7684\u9009\u4E2D\u503C"],["clear","\u5728\u70B9\u51FB\u7531 clearable \u5C5E\u6027\u751F\u6210\u7684\u6E05\u7A7A\u6309\u94AE\u65F6\u89E6\u53D1","-"]];return(u,l)=>(a(),p("div",Ld,[Wd,qd,d("div",Gd,[t(w,{component:Sn}),t(w,{component:Un}),t(w,{component:Pn}),t(w,{component:Jn}),t(w,{component:Hn}),t(F,{title:"\u5C5E\u6027",type:"prop",body:o}),t(F,{title:"\u4E8B\u4EF6",type:"event",body:n}),t(M,{prev:{path:"/doc/radio",name:"\u5355\u9009\u6846 Radio"},next:{path:"/doc/switch",name:"\u5F00\u5173 Switch"}})])]))}});function Nn(e){e.__sourceCode=`<template>\r
  <jw-switch v-model="checked" />\r
  <jw-switch v-model="checked" disabled />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const checked = ref(false);\r
<\/script>`,e.__sourceCodeTitle=" \u57FA\u7840\u7528\u6CD5 "}const Ln=b({setup(e){const o=y(!1);return(n,u)=>{const l=m("jw-switch");return a(),p(E,null,[t(l,{modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=s=>o.value=s)},null,8,["modelValue"]),t(l,{modelValue:o.value,"onUpdate:modelValue":u[1]||(u[1]=s=>o.value=s),disabled:""},null,8,["modelValue"])],64)}}});typeof Nn=="function"&&Nn(Ln);function Wn(e){e.__sourceCode=`<template>\r
  <jw-switch v-model="checked" active-color="red" inactive-color="pink" />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const checked = ref(false);\r
<\/script>`,e.__sourceCodeTitle=" \u81EA\u5B9A\u4E49\u989C\u8272 "}const qn=b({setup(e){const o=y(!1);return(n,u)=>{const l=m("jw-switch");return a(),g(l,{modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=s=>o.value=s),"active-color":"red","inactive-color":"pink"},null,8,["modelValue"])}}});typeof Wn=="function"&&Wn(qn);function Gn(e){e.__sourceCode=`<template>\r
  <jw-switch v-model="checked" size="small" />\r
  <jw-switch v-model="checked" size="default" />\r
  <jw-switch v-model="checked" size="large" />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const checked = ref(false);\r
<\/script>`,e.__sourceCodeTitle=" \u5C3A\u5BF8 "}const Kn=b({setup(e){const o=y(!1);return(n,u)=>{const l=m("jw-switch");return a(),p(E,null,[t(l,{modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=s=>o.value=s),size:"small"},null,8,["modelValue"]),t(l,{modelValue:o.value,"onUpdate:modelValue":u[1]||(u[1]=s=>o.value=s),size:"default"},null,8,["modelValue"]),t(l,{modelValue:o.value,"onUpdate:modelValue":u[2]||(u[2]=s=>o.value=s),size:"large"},null,8,["modelValue"])],64)}}});typeof Gn=="function"&&Gn(Kn);const Yd=d("h1",null,"Switch \u5F00\u5173",-1),Xd=d("p",null,"\u8868\u793A\u4E24\u79CD\u76F8\u4E92\u5BF9\u7ACB\u7684\u72B6\u6001\u95F4\u7684\u5207\u6362\uFF0C\u591A\u7528\u4E8E\u89E6\u53D1\u300C\u5F00/\u5173\u300D\u3002",-1),Qd={class:"preview-wrapper"},Zd=b({setup(e){const o=[["v-model","\u7ED1\u5B9A\u503C","boolean","-","false"],["active-color","\u5728\u5F00\u542F\u72B6\u6001\u65F6\u7684\u80CC\u666F\u989C\u8272","string","-","#18a058"],["inactive-color","\u5728\u5173\u95ED\u72B6\u6001\u65F6\u7684\u80CC\u666F\u989C\u8272","string","-","#dbdbdb"],["disabled","\u662F\u5426\u7981\u7528","boolean","-","false"],["size","\u5927\u5C0F","string","small / default / large","default"]];return(n,u)=>(a(),p(E,null,[Yd,Xd,d("div",Qd,[t(w,{component:Ln}),t(w,{component:qn}),t(w,{component:Kn}),t(F,{title:"\u5C5E\u6027",type:"prop",body:o}),t(M,{prev:{path:"/doc/select",name:"Select \u9009\u62E9\u5668"},next:{path:"/doc/alert",name:"\u63D0\u793A Alert"}})])],64))}});function Yn(e){e.__sourceCode=`<template>\r
  <jw-alert title="Default \u7C7B\u578B" />\r
  <jw-alert title="Info \u7C7B\u578B" type="info" />\r
  <jw-alert title="Success \u7C7B\u578B" type="success" />\r
  <jw-alert title="Warning \u7C7B\u578B" type="warning" />\r
  <jw-alert title="Error \u7C7B\u578B" type="error" />\r
</template>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const Xn={};function e_(e,o){const n=m("jw-alert");return a(),p(E,null,[t(n,{title:"Default \u7C7B\u578B"}),t(n,{title:"Info \u7C7B\u578B",type:"info"}),t(n,{title:"Success \u7C7B\u578B",type:"success"}),t(n,{title:"Warning \u7C7B\u578B",type:"warning"}),t(n,{title:"Error \u7C7B\u578B",type:"error"})],64)}typeof Yn=="function"&&Yn(Xn);var t_=D(Xn,[["render",e_]]);function Qn(e){e.__sourceCode=`<template>\r
  <jw-alert title="Default \u7C7B\u578B">\r
    <template #icon>\r
      <jw-icon class="jw-alert-icon" :size="22">\r
        <IosAirplane />\r
      </jw-icon>\r
    </template>\r
  </jw-alert>\r
  <jw-alert title="Info \u7C7B\u578B" type="info" show-icon />\r
  <jw-alert title="Success \u7C7B\u578B" type="success" show-icon />\r
  <jw-alert title="Warning \u7C7B\u578B" type="warning" show-icon />\r
  <jw-alert title="Error \u7C7B\u578B" type="error" show-icon />\r
</template>\r
<script setup lang="ts">\r
import { IosAirplane } from "@vicons/ionicons4";\r
<\/script>`,e.__sourceCodeTitle="\u4E3A Alert \u8BBE\u7F6E\u56FE\u6807"}const Zn=b({setup(e){return(o,n)=>{const u=m("jw-icon"),l=m("jw-alert");return a(),p(E,null,[t(l,{title:"Default \u7C7B\u578B"},{icon:r(()=>[t(u,{class:"jw-alert-icon",size:22},{default:r(()=>[t(_(ye))]),_:1})]),_:1}),t(l,{title:"Info \u7C7B\u578B",type:"info","show-icon":""}),t(l,{title:"Success \u7C7B\u578B",type:"success","show-icon":""}),t(l,{title:"Warning \u7C7B\u578B",type:"warning","show-icon":""}),t(l,{title:"Error \u7C7B\u578B",type:"error","show-icon":""})],64)}}});typeof Qn=="function"&&Qn(Zn);function eo(e){e.__sourceCode=`<template>\r
  <jw-alert title="Default \u7C7B\u578B" center>\r
    <template #icon>\r
      <jw-icon class="jw-alert-icon" :size="22">\r
        <IosAirplane />\r
      </jw-icon>\r
    </template>\r
  </jw-alert>\r
  <jw-alert title="Info \u7C7B\u578B" type="info" show-icon center />\r
  <jw-alert title="Success \u7C7B\u578B" type="success" show-icon center />\r
  <jw-alert title="Warning \u7C7B\u578B" type="warning" show-icon center />\r
  <jw-alert title="Error \u7C7B\u578B" type="error" show-icon center />\r
</template>\r
<script setup lang="ts">\r
import { IosAirplane } from "@vicons/ionicons4";\r
<\/script>`,e.__sourceCodeTitle="\u4F7F\u6587\u5B57\u5C45\u4E2D"}const to=b({setup(e){return(o,n)=>{const u=m("jw-icon"),l=m("jw-alert");return a(),p(E,null,[t(l,{title:"Default \u7C7B\u578B",center:""},{icon:r(()=>[t(u,{class:"jw-alert-icon",size:22},{default:r(()=>[t(_(ye))]),_:1})]),_:1}),t(l,{title:"Info \u7C7B\u578B",type:"info","show-icon":"",center:""}),t(l,{title:"Success \u7C7B\u578B",type:"success","show-icon":"",center:""}),t(l,{title:"Warning \u7C7B\u578B",type:"warning","show-icon":"",center:""}),t(l,{title:"Error \u7C7B\u578B",type:"error","show-icon":"",center:""})],64)}}});typeof eo=="function"&&eo(to);function no(e){e.__sourceCode=`<template>\r
  <jw-alert\r
    title="Success \u7C7B\u578B"\r
    type="success"\r
    show-icon\r
    center\r
    description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0"\r
  />\r
</template>\r
<script setup lang="ts">\r
import { IosAirplane } from "@vicons/ionicons4";\r
<\/script>`,e.__sourceCodeTitle="\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u6848"}const oo=b({setup(e){return(o,n)=>{const u=m("jw-alert");return a(),g(u,{title:"Success \u7C7B\u578B",type:"success","show-icon":"",center:"",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0"})}}});typeof no=="function"&&no(oo);function uo(e){e.__sourceCode=`<template>\r
  <jw-alert title="Default \u7C7B\u578B" closeable description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0">\r
    <template #icon>\r
      <jw-icon class="jw-alert-icon" :size="22">\r
        <IosAirplane />\r
      </jw-icon>\r
    </template>\r
  </jw-alert>\r
  <jw-alert\r
    title="Info \u7C7B\u578B"\r
    type="info"\r
    show-icon\r
    closeable\r
    description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0"\r
  />\r
  <jw-alert\r
    title="Success \u7C7B\u578B"\r
    type="success"\r
    show-icon\r
    closeable\r
    description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0"\r
  />\r
  <jw-alert\r
    title="Warning \u7C7B\u578B"\r
    type="warning"\r
    show-icon\r
    closeable\r
    description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0"\r
  />\r
  <jw-alert\r
    title="Error \u7C7B\u578B"\r
    type="error"\r
    show-icon\r
    closeable\r
    description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0"\r
  />\r
</template>\r
<script setup lang="ts">\r
import { IosAirplane } from "@vicons/ionicons4";\r
<\/script>`,e.__sourceCodeTitle="\u53EF\u4EE5\u5173\u95ED"}const lo=b({setup(e){return(o,n)=>{const u=m("jw-icon"),l=m("jw-alert");return a(),p(E,null,[t(l,{title:"Default \u7C7B\u578B",closeable:"",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0"},{icon:r(()=>[t(u,{class:"jw-alert-icon",size:22},{default:r(()=>[t(_(ye))]),_:1})]),_:1}),t(l,{title:"Info \u7C7B\u578B",type:"info","show-icon":"",closeable:"",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0"}),t(l,{title:"Success \u7C7B\u578B",type:"success","show-icon":"",closeable:"",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0"}),t(l,{title:"Warning \u7C7B\u578B",type:"warning","show-icon":"",closeable:"",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0"}),t(l,{title:"Error \u7C7B\u578B",type:"error","show-icon":"",closeable:"",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0"})],64)}}});typeof uo=="function"&&uo(lo);const n_={class:"alert-doc-wrapper"},o_=d("h1",null,"\u63D0\u793A Alert",-1),u_=d("p",null,"\u7528\u4E8E\u9875\u9762\u4E2D\u5C55\u793A\u91CD\u8981\u7684\u63D0\u793A\u4FE1\u606F\u3002",-1),l_={class:"preview-wrapper"},r_=b({setup(e){const o=[["title","\u6807\u9898","	string","-","-"],["type","\u7C7B\u578B","string","default / info / success / warning / error","default"],["content","\u8F85\u52A9\u6027\u6587\u5B57","string","-","-"],["closable","\u662F\u5426\u53EF\u5173\u95ED","boolean","-","false"],["center","\u6587\u5B57\u662F\u5426\u5C45\u4E2D","boolean","-","false"],["show-icon","\u662F\u5426\u663E\u793A\u56FE\u6807","boolean","-","false"]],n=[["close","	\u5173\u95ED Alert \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6","-"]],u=[["default","\u8F85\u52A9\u6027\u6587\u5B57"],["icon","\u56FE\u6807"],["title","\u6807\u9898"]];return(l,s)=>(a(),p("div",n_,[o_,u_,d("div",l_,[t(w,{component:t_}),t(w,{component:Zn}),t(w,{component:to}),t(w,{component:oo}),t(w,{component:lo}),t(F,{title:"\u5C5E\u6027",type:"prop",body:o}),t(F,{title:"\u4E8B\u4EF6",type:"event",body:n}),t(F,{title:"\u63D2\u69FD",type:"slot",body:u}),t(M,{prev:{path:"/doc/switch",name:"\u5F00\u5173 Switch"},next:{path:"/doc/dialog",name:"\u5BF9\u8BDD\u6846 Dialog"}})])]))}});function ro(e){e.__sourceCode=`<template>\r
  <jw-button theme="primary" @click="toggle">\u70B9\u51FB\u6253\u5F00\u5BF9\u8BDD\u6846</jw-button>\r
  <jw-dialog v-model="visible" />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const visible = ref(false);\r
\r
const toggle = () => {\r
  visible.value = !visible.value;\r
};\r
\r
const confirm = () => {};\r
\r
const cancel = () => {};\r
<\/script>`,e.__sourceCodeTitle=" \u57FA\u7840\u7528\u6CD5 "}const s_=i("\u70B9\u51FB\u6253\u5F00\u5BF9\u8BDD\u6846"),so=b({setup(e){const o=y(!1),n=()=>{o.value=!o.value};return(u,l)=>{const s=m("jw-button"),c=m("jw-dialog");return a(),p(E,null,[t(s,{theme:"primary",onClick:n},{default:r(()=>[s_]),_:1}),t(c,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=h=>o.value=h)},null,8,["modelValue"])],64)}}});typeof ro=="function"&&ro(so);function ao(e){e.__sourceCode=`<template>\r
  <jw-button theme="primary" @click="toggle">\u70B9\u51FB\u6253\u5F00\u5BF9\u8BDD\u6846</jw-button>\r
  <jw-dialog\r
    v-model="visible"\r
    :overlay-closable="false"\r
    @onOverlayClick="onOverlayClick"\r
  >\r
    \u6211\u89C9\u5F97\u7528\u6237\u5E94\u8BE5\u806A\u660E\u5230\u70B9\u906E\u7F69\u6CA1\u7528\u7684\u65F6\u5019\u5C31\u53BB\u70B9\u786E\u8BA4\u4E86\u3002\r
  </jw-dialog>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const visible = ref(false);\r
\r
const toggle = () => {\r
  visible.value = !visible.value;\r
};\r
\r
const onOverlayClick = () => {\r
  console.log("\u6211\u89C9\u5F97\u7528\u6237\u5E94\u8BE5\u806A\u660E\u5230\u70B9\u906E\u7F69\u6CA1\u7528\u7684\u65F6\u5019\u5C31\u53BB\u70B9\u786E\u8BA4\u4E86\u3002");\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u70B9\u51FB\u906E\u7F69 "}const a_=i("\u70B9\u51FB\u6253\u5F00\u5BF9\u8BDD\u6846"),c_=i(" \u6211\u89C9\u5F97\u7528\u6237\u5E94\u8BE5\u806A\u660E\u5230\u70B9\u906E\u7F69\u6CA1\u7528\u7684\u65F6\u5019\u5C31\u53BB\u70B9\u786E\u8BA4\u4E86\u3002 "),co=b({setup(e){const o=y(!1),n=()=>{o.value=!o.value},u=()=>{console.log("\u6211\u89C9\u5F97\u7528\u6237\u5E94\u8BE5\u806A\u660E\u5230\u70B9\u906E\u7F69\u6CA1\u7528\u7684\u65F6\u5019\u5C31\u53BB\u70B9\u786E\u8BA4\u4E86\u3002")};return(l,s)=>{const c=m("jw-button"),h=m("jw-dialog");return a(),p(E,null,[t(c,{theme:"primary",onClick:n},{default:r(()=>[a_]),_:1}),t(h,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=f=>o.value=f),"overlay-closable":!1,onOnOverlayClick:u},{default:r(()=>[c_]),_:1},8,["modelValue"])],64)}}});typeof ao=="function"&&ao(co);function io(e){e.__sourceCode=`<template>\r
  <jw-button theme="primary" @click="toggle">\u70B9\u51FB\u6253\u5F00\u5BF9\u8BDD\u6846</jw-button>\r
</template>\r
\r
<script setup lang="ts">\r
import { openDialog } from "yjw-ui";\r
const toggle = () => {\r
  openDialog({\r
    overlay: true,\r
    overlayClosable: true,\r
    title: () => "\u6211\u662F\u6807\u9898",\r
    content: () => "\u6211\u662F\u5185\u5BB9",\r
    confirm: () => {},\r
    cancel: () => {},\r
  });\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u4E00\u53E5\u8BDD\u6253\u5F00Dialog "}const i_=i("\u70B9\u51FB\u6253\u5F00\u5BF9\u8BDD\u6846"),_o=b({setup(e){const o=()=>{pu({overlay:!0,overlayClosable:!0,title:()=>"\u6211\u662F\u6807\u9898",content:()=>"\u6211\u662F\u5185\u5BB9",confirm:()=>{},cancel:()=>{}})};return(n,u)=>{const l=m("jw-button");return a(),g(l,{theme:"primary",onClick:o},{default:r(()=>[i_]),_:1})}}});typeof io=="function"&&io(_o);const d_=d("h1",null,"Dialog \u5BF9\u8BDD\u6846",-1),__=d("p",null,"\u5728\u4FDD\u7559\u5F53\u524D\u9875\u9762\u72B6\u6001\u7684\u60C5\u51B5\u4E0B\uFF0C\u544A\u77E5\u7528\u6237\u5E76\u627F\u8F7D\u76F8\u5173\u64CD\u4F5C\u3002",-1),p_={class:"preview-wrapper"},f_=b({setup(e){const o=[["v-model","\u7ED1\u5B9A\u503C","boolean","-","flase"],["overlay","\u662F\u5426\u9700\u8981\u80CC\u666F\u906E\u7F69","boolean","-","true"],["title","\u6807\u9898","string","-","\u6807\u9898"],["overlay-closebale","\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FBoverlay\u5173\u95ED\u5BF9\u8BDD\u6846","boolean","-","true"]],n=[["-","Dialog \u7684\u5185\u5BB9"],["title","Dialog \u6807\u9898\u533A\u7684\u5185\u5BB9"],["footer","Dialog \u6309\u94AE\u64CD\u4F5C\u533A\u7684\u5185\u5BB9"]],u=[["confirm","\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u7684\u56DE\u8C03","-"],["cancel","\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u7684\u56DE\u8C03","-"],["onOverlayClick","\u70B9\u51FB\u906E\u7F69\u7684\u56DE\u8C03","-"]];return(l,s)=>(a(),p(E,null,[d_,__,d("div",p_,[t(w,{component:so}),t(w,{component:co}),t(w,{component:_o}),t(F,{title:"\u5C5E\u6027",type:"prop",body:o}),t(F,{title:"\u63D2\u69FD",type:"slot",body:n}),t(F,{title:"\u4E8B\u4EF6",type:"event",body:u}),t(M,{prev:{path:"/doc/alert",name:"Alert \u63D0\u793A"},next:{path:"/doc/message",name:"\u4FE1\u606F Message"}})])],64))}});function po(e){e.__sourceCode=`<template>\r
  <jw-button @click="open">Show Message</jw-button>\r
  <jw-button @click="openVn">Vnode</jw-button>\r
</template>\r
\r
<script setup lang="ts">\r
import { h } from "vue";\r
import JwMessage from "@/lib/message/index.ts";\r
\r
const open = () => {\r
  JwMessage("This is a Message");\r
};\r
\r
const openVn = () => {\r
  JwMessage({\r
    message: h("p", null, [\r
      h("span", null, "Message can be "),\r
      h("i", { style: "color: teal" }, "VNode"),\r
    ]),\r
  });\r
};\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u7840\u4F7F\u7528"}const m_=i("Show Message"),h_=i("Vnode"),fo=b({setup(e){const o=()=>{J("This is a Message")},n=()=>{J({message:_e("p",null,[_e("span",null,"Message can be "),_e("i",{style:"color: teal"},"VNode")])})};return(u,l)=>{const s=m("jw-button");return a(),p(E,null,[t(s,{onClick:o},{default:r(()=>[m_]),_:1}),t(s,{onClick:n},{default:r(()=>[h_]),_:1})],64)}}});typeof po=="function"&&po(fo);function mo(e){e.__sourceCode=`<template>\r
  <jw-button @click="open1">Info</jw-button>\r
  <jw-button @click="open2">success</jw-button>\r
  <jw-button @click="open3">Warning</jw-button>\r
  <jw-button @click="open4">Error</jw-button>\r
</template>\r
\r
<script setup lang="ts">\r
import JwMessage from "@/lib/message/index.ts";\r
\r
const open1 = () => {\r
  JwMessage("this is a message.");\r
};\r
const open2 = () => {\r
  JwMessage({\r
    message: "Congrats, this is a success message.",\r
    type: "success",\r
  });\r
};\r
const open3 = () => {\r
  JwMessage({\r
    message: "Warning, this is a warning message.",\r
    type: "warning",\r
  });\r
};\r
const open4 = () => {\r
  JwMessage.error("Oops, this is a error message.");\r
};\r
<\/script>`,e.__sourceCodeTitle="\u4E0D\u540C\u72B6\u6001"}const b_=i("Info"),v_=i("success"),w_=i("Warning"),g_=i("Error"),ho=b({setup(e){const o=()=>{J("this is a message.")},n=()=>{J({message:"Congrats, this is a success message.",type:"success"})},u=()=>{J({message:"Warning, this is a warning message.",type:"warning"})},l=()=>{J.error("Oops, this is a error message.")};return(s,c)=>{const h=m("jw-button");return a(),p(E,null,[t(h,{onClick:o},{default:r(()=>[b_]),_:1}),t(h,{onClick:n},{default:r(()=>[v_]),_:1}),t(h,{onClick:u},{default:r(()=>[w_]),_:1}),t(h,{onClick:l},{default:r(()=>[g_]),_:1})],64)}}});typeof mo=="function"&&mo(ho);function bo(e){e.__sourceCode=`<template>\r
  <jw-button @click="open1">Info</jw-button>\r
  <jw-button @click="open2">success</jw-button>\r
  <jw-button @click="open3">Warning</jw-button>\r
  <jw-button @click="open4">Error</jw-button>\r
</template>\r
\r
<script setup lang="ts">\r
import JwMessage from "@/lib/message/index.ts";\r
\r
const open1 = () => {\r
  JwMessage({\r
    message: "this is a message.",\r
    showClose: true,\r
  });\r
};\r
const open2 = () => {\r
  JwMessage({\r
    message: "Congrats, this is a success message.",\r
    type: "success",\r
    showClose: true,\r
  });\r
};\r
const open3 = () => {\r
  JwMessage({\r
    message: "Warning, this is a warning message.",\r
    type: "warning",\r
    showClose: true,\r
  });\r
};\r
const open4 = () => {\r
  JwMessage({\r
    type: "error",\r
    message: "Oops, this is a error message.",\r
    showClose: true,\r
    duration: 0,\r
  });\r
};\r
<\/script>`,e.__sourceCodeTitle="\u53EF\u5173\u95ED\u7684\u6D88\u606F\u63D0\u793A"}const y_=i("Info"),j_=i("success"),$_=i("Warning"),E_=i("Error"),vo=b({setup(e){const o=()=>{J({message:"this is a message.",showClose:!0})},n=()=>{J({message:"Congrats, this is a success message.",type:"success",showClose:!0})},u=()=>{J({message:"Warning, this is a warning message.",type:"warning",showClose:!0})},l=()=>{J({type:"error",message:"Oops, this is a error message.",showClose:!0,duration:0})};return(s,c)=>{const h=m("jw-button");return a(),p(E,null,[t(h,{onClick:o},{default:r(()=>[y_]),_:1}),t(h,{onClick:n},{default:r(()=>[j_]),_:1}),t(h,{onClick:u},{default:r(()=>[$_]),_:1}),t(h,{onClick:l},{default:r(()=>[E_]),_:1})],64)}}});typeof bo=="function"&&bo(vo);function wo(e){e.__sourceCode=`<template>\r
  <jw-button @click="open1">Info</jw-button>\r
  <jw-button @click="open2">success</jw-button>\r
  <jw-button @click="open3">Warning</jw-button>\r
  <jw-button @click="open4">Error</jw-button>\r
</template>\r
\r
<script setup lang="ts">\r
import JwMessage from "@/lib/message/index.ts";\r
\r
const open1 = () => {\r
  JwMessage({\r
    message: "this is a message.",\r
    showClose: true,\r
    center: true,\r
  });\r
};\r
const open2 = () => {\r
  JwMessage({\r
    message: "Congrats, this is a success message.",\r
    type: "success",\r
    showClose: true,\r
    center: true,\r
  });\r
};\r
const open3 = () => {\r
  JwMessage({\r
    message: "Warning, this is a warning message.",\r
    type: "warning",\r
    showClose: true,\r
    center: true,\r
  });\r
};\r
const open4 = () => {\r
  JwMessage({\r
    type: "error",\r
    message: "Oops, this is a error message.",\r
    showClose: true,\r
    duration: 0,\r
    center: true,\r
  });\r
};\r
<\/script>`,e.__sourceCodeTitle="\u5C45\u4E2D"}const B_=i("Info"),F_=i("success"),x_=i("Warning"),C_=i("Error"),go=b({setup(e){const o=()=>{J({message:"this is a message.",showClose:!0,center:!0})},n=()=>{J({message:"Congrats, this is a success message.",type:"success",showClose:!0,center:!0})},u=()=>{J({message:"Warning, this is a warning message.",type:"warning",showClose:!0,center:!0})},l=()=>{J({type:"error",message:"Oops, this is a error message.",showClose:!0,duration:0,center:!0})};return(s,c)=>{const h=m("jw-button");return a(),p(E,null,[t(h,{onClick:o},{default:r(()=>[B_]),_:1}),t(h,{onClick:n},{default:r(()=>[F_]),_:1}),t(h,{onClick:u},{default:r(()=>[x_]),_:1}),t(h,{onClick:l},{default:r(()=>[C_]),_:1})],64)}}});typeof wo=="function"&&wo(go);const k_={class:"message-doc-wrapper"},D_=d("h1",null,"\u6D88\u606F\u63D0\u793A",-1),A_=d("p",null,"\uFF08\u4E00\u822C\u662F\uFF09\u4ECE\u6D4F\u89C8\u5668\u9876\u90E8\u964D\u4E0B\u6765\u7684\u795E\u8C15\u3002",-1),V_={class:"preview-wrapper"},z_=b({setup(e){const o=[["message","\u6D88\u606F\u6587\u5B57","string / VNode","-","-"],["type","\u6D88\u606F\u7C7B\u578B","string","success / warning / info / error","info"],["duration","\u663E\u793A\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002 \u8BBE\u4E3A 0 \u5219\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED","number","-","3000"],["show-close","\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE","boolean","-","false"],["center","\u6587\u5B57\u662F\u5426\u5C45\u4E2D","boolean","-","false"],["on-close","\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570, \u53C2\u6570\u4E3A\u88AB\u5173\u95ED\u7684 message \u5B9E\u4F8B","function","-","-"],["offset","Message \u8DDD\u79BB\u7A97\u53E3\u9876\u90E8\u7684\u504F\u79FB\u91CF","number","-","20"],["appendTo","\u8BBE\u7F6E\u7EC4\u4EF6\u7684\u6839\u5143\u7D20","string / HTMLElement","-","document.body"]],n=[["close","\u5173\u95ED\u5F53\u524D\u7684 Message","-"]];return(u,l)=>(a(),p("div",k_,[D_,A_,d("div",V_,[t(w,{component:fo}),t(w,{component:ho}),t(w,{component:vo}),t(w,{component:go}),t(F,{title:"\u914D\u7F6E\u9879",type:"prop",body:o}),t(F,{title:"\u65B9\u6CD5",type:"methods",body:n}),t(M,{prev:{path:"/doc/dialog",name:"Dialog \u5BF9\u8BDD\u6846"},next:{path:"/doc/Affix",name:"\u56FA\u9489 Affix"}})])]))}});function yo(e){e.__sourceCode=`<template>\r
  <jw-affix :offset="80" position="top">\r
    <jw-button theme="primary">\u8DDD\u79BB\u9876\u90E880px\u56FA\u5B9A</jw-button>\r
  </jw-affix>\r
</template>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const jo={},T_=i("\u8DDD\u79BB\u9876\u90E880px\u56FA\u5B9A");function S_(e,o){const n=m("jw-button"),u=m("jw-affix");return a(),g(u,{offset:80,position:"top"},{default:r(()=>[t(n,{theme:"primary"},{default:r(()=>[T_]),_:1})]),_:1})}typeof yo=="function"&&yo(jo);var I_=D(jo,[["render",S_]]);function $o(e){e.__sourceCode=`<template>\r
  <div class="affix-container">\r
    <jw-affix target=".affix-container" :offset="80">\r
      <jw-button theme="primary">\u8DDD\u79BB\u9876\u90E880px\u56FA\u5B9A \u59CB\u7EC8\u5728target\u5BB9\u5668\u4E2D</jw-button>\r
    </jw-affix>\r
  </div>\r
</template>\r
<style scoped>\r
.affix-container {\r
  text-align: center;\r
  height: 800px;\r
  border-radius: 4px;\r
  background-color: #edf5ef;\r
  width: 100%;\r
}\r
</style>`,e.__sourceCodeTitle="\u4E3A Affix \u7EC4\u4EF6\u6307\u5B9A\u5BB9\u5668"}const Eo={},U_={class:"affix-container"},M_=i("\u8DDD\u79BB\u9876\u90E880px\u56FA\u5B9A \u59CB\u7EC8\u5728target\u5BB9\u5668\u4E2D");function P_(e,o){const n=m("jw-button"),u=m("jw-affix");return a(),p("div",U_,[t(u,{target:".affix-container",offset:80},{default:r(()=>[t(n,{theme:"primary"},{default:r(()=>[M_]),_:1})]),_:1})])}typeof $o=="function"&&$o(Eo);var R_=D(Eo,[["render",P_],["__scopeId","data-v-340a61ef"]]);function Bo(e){e.__sourceCode=`<template>\r
  <jw-affix :offset="80" position="bottom">\r
    <jw-button theme="primary">\u8DDD\u79BB\u5E95\u90E880px\u56FA\u5B9A</jw-button>\r
  </jw-affix>\r
</template>`,e.__sourceCodeTitle="\u56FA\u5B9A Affix \u7EC4\u4EF6\u7684\u4F4D\u7F6E"}const Fo={},J_=i("\u8DDD\u79BB\u5E95\u90E880px\u56FA\u5B9A");function O_(e,o){const n=m("jw-button"),u=m("jw-affix");return a(),g(u,{offset:80,position:"bottom"},{default:r(()=>[t(n,{theme:"primary"},{default:r(()=>[J_]),_:1})]),_:1})}typeof Bo=="function"&&Bo(Fo);var H_=D(Fo,[["render",O_]]);const N_={class:"affix-doc-wrapper"},L_=d("h1",null,"\u56FA\u9489 Affix",-1),W_=d("p",null,"\u5C06\u9875\u9762\u5143\u7D20\u56FA\u5B9A\u5728\u7279\u5B9A\u53EF\u89C6\u533A\u57DF\u3002",-1),q_={class:"preview-wrapper"},G_=b({setup(e){const o=[["offset","\u504F\u79FB\u8DDD\u79BB","number","-","0"],["position","\u56FA\u9489\u4F4D\u7F6E","string","top / bottom","top"],["target","\u6307\u5B9A\u5BB9\u5668\uFF08CSS \u9009\u62E9\u5668\uFF09","string","-","-"],["z-index","\u56FA\u9489\u5C42\u7EA7","	number","-","100"]],n=[["change","\u56FA\u9489\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6","(value: boolean)"],["scroll","\u6EDA\u52A8\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6	","Event"]],u=[["update","\u624B\u52A8\u66F4\u65B0\u56FA\u9489\u72B6\u6001","-"]];return(l,s)=>(a(),p("div",N_,[L_,W_,d("div",q_,[t(w,{component:I_}),t(w,{component:R_}),t(w,{component:H_}),t(F,{title:"\u5C5E\u6027",type:"prop",body:o}),t(F,{title:"\u4E8B\u4EF6",type:"event",body:n}),t(F,{title:"\u65B9\u6CD5",type:"methods",body:u}),t(M,{prev:{path:"/doc/message",name:"\u4FE1\u606F Message"},next:{path:"/doc/backtop",name:"\u56DE\u5230\u9876\u90E8 Backtop"}})])]))}});function xo(e){e.__sourceCode=`<template>\r
  <div style="height: 300px">\u5F80\u4E0B\u6ED1\u51FA\u73B0Backtop</div>\r
  <jw-backtop target="#doc-content-container" />\r
</template>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const Co={},K_=d("div",{style:{height:"300px"}},"\u5F80\u4E0B\u6ED1\u51FA\u73B0Backtop",-1);function Y_(e,o){const n=m("jw-backtop");return a(),p(E,null,[K_,t(n,{target:"#doc-content-container"})],64)}typeof xo=="function"&&xo(Co);var X_=D(Co,[["render",Y_]]);function ko(e){e.__sourceCode=`<template>\r
  <div style="height: 300px">\u5F80\u4E0B\u6ED1\u51FA\u73B0Backtop</div>\r
  <jw-backtop target="#doc-content-container" :bottom="100">\r
    <div\r
      style="\r
        height: 100%;\r
        width: 100%;\r
        background-color: #f2f5f6;\r
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);\r
        text-align: center;\r
        line-height: 40px;\r
        color: #5bab70;\r
      "\r
    >\r
      UP\r
    </div>\r
  </jw-backtop>\r
</template>`,e.__sourceCodeTitle="\u81EA\u5B9A\u4E49\u5185\u5BB9"}const Do={},Q_=d("div",{style:{height:"300px"}},"\u5F80\u4E0B\u6ED1\u51FA\u73B0Backtop",-1),Z_=d("div",{style:{height:"100%",width:"100%","background-color":"#f2f5f6","box-shadow":"0 0 6px rgba(0, 0, 0, 0.12)","text-align":"center","line-height":"40px",color:"#5bab70"}}," UP ",-1);function ep(e,o){const n=m("jw-backtop");return a(),p(E,null,[Q_,t(n,{target:"#doc-content-container",bottom:100},{default:r(()=>[Z_]),_:1})],64)}typeof ko=="function"&&ko(Do);var tp=D(Do,[["render",ep]]);const np={class:"backtop-doc-wrapper"},op=d("h1",null,"\u56DE\u5230\u9876\u90E8 Backtop",-1),up=d("p",null,"\u8FD4\u56DE\u9875\u9762\u9876\u90E8\u7684\u64CD\u4F5C\u6309\u94AE",-1),lp={class:"preview-wrapper"},rp=b({setup(e){const o=[["target","\u89E6\u53D1\u6EDA\u52A8\u7684\u5BF9\u8C61	","	string	","-","document.documentElement"],["visibility-height","\u6EDA\u52A8\u9AD8\u5EA6\u8FBE\u5230\u6B64\u53C2\u6570\u503C\u624D\u51FA\u73B0","number","-","200"],["right","\u63A7\u5236\u5176\u663E\u793A\u4F4D\u7F6E\uFF0C\u8DDD\u79BB\u9875\u9762\u53F3\u8FB9\u8DDD","number","-","40"],["bottom","\u63A7\u5236\u5176\u663E\u793A\u4F4D\u7F6E\uFF0C\u8DDD\u79BB\u9875\u9762\u5E95\u90E8\u8DDD\u79BB","number","-","40"]],n=[["click","\u70B9\u51FB\u6309\u94AE\u89E6\u53D1\u7684\u4E8B\u4EF6	","Event"]],u=[["default","\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9"]];return(l,s)=>(a(),p("div",np,[op,up,d("div",lp,[t(w,{component:X_}),t(w,{component:tp}),t(F,{title:"\u5C5E\u6027",type:"prop",body:o}),t(F,{title:"\u4E8B\u4EF6",type:"event",body:n}),t(F,{title:"\u63D2\u69FD",type:"slot",body:u}),t(M,{prev:{path:"/doc/affix",name:"\u56FA\u9489 Affix"},next:{path:"/doc/breadcrumb",name:"\u9762\u5305\u5C51 Breadcrumb"}})])]))}});function Ao(e){e.__sourceCode=`<template>\r
  <jw-breadcrumb separator="/">\r
    <jw-breadcrumb-item :to="{ path: '/' }">homepage</jw-breadcrumb-item>\r
    <jw-breadcrumb-item\r
      ><a href="/">promotion management</a></jw-breadcrumb-item\r
    >\r
    <jw-breadcrumb-item>promotion list</jw-breadcrumb-item>\r
    <jw-breadcrumb-item>promotion detail</jw-breadcrumb-item>\r
  </jw-breadcrumb>\r
</template>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const Vo={},sp=i("homepage"),ap=d("a",{href:"/"},"promotion management",-1),cp=i("promotion list"),ip=i("promotion detail");function dp(e,o){const n=m("jw-breadcrumb-item"),u=m("jw-breadcrumb");return a(),g(u,{separator:"/"},{default:r(()=>[t(n,{to:{path:"/"}},{default:r(()=>[sp]),_:1}),t(n,null,{default:r(()=>[ap]),_:1}),t(n,null,{default:r(()=>[cp]),_:1}),t(n,null,{default:r(()=>[ip]),_:1})]),_:1})}typeof Ao=="function"&&Ao(Vo);var _p=D(Vo,[["render",dp]]);function zo(e){e.__sourceCode=`<template>\r
  <jw-breadcrumb :separator-icon="ArrowForwardIosSharp">\r
    <jw-breadcrumb-item :to="{ path: '/' }">homepage</jw-breadcrumb-item>\r
    <jw-breadcrumb-item\r
      ><a href="/">promotion management</a></jw-breadcrumb-item\r
    >\r
    <jw-breadcrumb-item>promotion list</jw-breadcrumb-item>\r
    <jw-breadcrumb-item>promotion detail</jw-breadcrumb-item>\r
  </jw-breadcrumb>\r
</template>\r
\r
<script setup lang="ts">\r
import { ArrowForwardIosSharp } from "@vicons/material";\r
<\/script>`,e.__sourceCodeTitle="\u56FE\u6807\u5206\u9694\u7B26"}const pp=i("homepage"),fp=d("a",{href:"/"},"promotion management",-1),mp=i("promotion list"),hp=i("promotion detail"),To=b({setup(e){return(o,n)=>{const u=m("jw-breadcrumb-item"),l=m("jw-breadcrumb");return a(),g(l,{"separator-icon":_(fu)},{default:r(()=>[t(u,{to:{path:"/"}},{default:r(()=>[pp]),_:1}),t(u,null,{default:r(()=>[fp]),_:1}),t(u,null,{default:r(()=>[mp]),_:1}),t(u,null,{default:r(()=>[hp]),_:1})]),_:1},8,["separator-icon"])}}});typeof zo=="function"&&zo(To);const bp={class:"breadcrumb-doc-wrapper"},vp=d("h1",null,"\u9762\u5305\u5C51 Breadcrumb",-1),wp=d("p",null,"\u663E\u793A\u5F53\u524D\u9875\u9762\u7684\u8DEF\u5F84\uFF0C\u5FEB\u901F\u8FD4\u56DE\u4E4B\u524D\u7684\u4EFB\u610F\u9875\u9762\u3002",-1),gp={class:"preview-wrapper"},yp=b({setup(e){const o=[["separator","\u5206\u9694\u7B26","string","-","/"],["separator-icon","\u56FE\u6807\u5206\u9694\u7B26\u7684\u7EC4\u4EF6\u6216\u7EC4\u4EF6\u540D","Component","-","-"]],n=[["to","\u8DEF\u7531\u8DF3\u8F6C\u76EE\u6807\uFF0C\u540C vue-router \u7684 to\u5C5E\u6027","object","-","/"],["separator-icon","\u5982\u679C\u8BBE\u7F6E\u8BE5\u5C5E\u6027\u4E3A true, \u5BFC\u822A\u5C06\u4E0D\u4F1A\u7559\u4E0B\u5386\u53F2\u8BB0\u5F55","boolean","-","false"]],u=[["default","\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9"]];return(l,s)=>(a(),p("div",bp,[vp,wp,d("div",gp,[t(w,{component:_p}),t(w,{component:To}),t(F,{title:"Breadcrumb \u5C5E\u6027",type:"prop",body:o}),t(F,{title:"Breadcrumb \u63D2\u69FD",type:"slot",body:u}),t(F,{title:"Breadcrumb Item \u5C5E\u6027",type:"prop",body:n}),t(F,{title:"Breadcrumb Item \u63D2\u69FD",type:"slot",body:u}),t(M,{prev:{path:"/doc/backtop",name:"\u56DE\u5230\u9876\u90E8 Backtop"},next:{path:"/doc/page-header",name:"\u9875\u5934 PggeHeader"}})])]))}});function So(e){e.__sourceCode=`<template>\r
  <jw-page-header content="detail" @back="goBack" />\r
</template>\r
\r
<script setup lang="ts">\r
const goBack = () => {\r
  console.log("go back");\r
};\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u672C\u4F7F\u7528"}const Io=b({setup(e){const o=()=>{console.log("go back")};return(n,u)=>{const l=m("jw-page-header");return a(),g(l,{content:"detail",onBack:o})}}});typeof So=="function"&&So(Io);function Uo(e){e.__sourceCode=`<template>\r
  <jw-page-header\r
    content="detail"\r
    @back="goBack"\r
    :icon="ArrowBackIosNewOutlined"\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ArrowBackIosNewOutlined } from "@vicons/material";\r
const goBack = () => {\r
  console.log("go back");\r
};\r
<\/script>`,e.__sourceCodeTitle="\u81EA\u5B9A\u4E49\u56FE\u6807"}const Mo=b({setup(e){const o=()=>{console.log("go back")};return(n,u)=>{const l=m("jw-page-header");return a(),g(l,{content:"detail",onBack:o,icon:_(mu)},null,8,["icon"])}}});typeof Uo=="function"&&Uo(Mo);const jp={class:"pageheader-doc-wrapper"},$p=d("h1",null,"Page Header \u9875\u5934",-1),Ep=d("p",null,"\u5982\u679C\u9875\u9762\u7684\u8DEF\u5F84\u6BD4\u8F83\u7B80\u5355\uFF0C\u63A8\u8350\u4F7F\u7528\u9875\u5934\u7EC4\u4EF6\u800C\u975E\u9762\u5305\u5C51\u7EC4\u4EF6\u3002",-1),Bp={class:"preview-wrapper"},Fp=b({setup(e){const o=[["icon","\u56FE\u6807\u7EC4\u4EF6","Component","-","ArrowBack"],["title","\u6807\u9898","string","-","Back"],["content","\u5185\u5BB9","string","-","default"]],n=[["back","\u70B9\u51FB\u5DE6\u4FA7\u533A\u57DF\u89E6\u53D1","-"]],u=[["icon","\u81EA\u5B9A\u4E49\u56FE\u6807"],["title","\u6807\u9898\u5185\u5BB9"],["content","\u5185\u5BB9"]];return(l,s)=>(a(),p("div",jp,[$p,Ep,d("div",Bp,[t(w,{component:Io}),t(w,{component:Mo}),t(F,{title:"\u5C5E\u6027",type:"prop",body:o}),t(F,{title:"\u4E8B\u4EF6",type:"event",body:n}),t(F,{title:"\u63D2\u69FD",type:"slot",body:u}),t(M,{prev:{path:"/doc/breadcrumb",name:"Breadcrumb \u9762\u5305\u5C51"},next:{path:"/doc/tabs",name:"\u6807\u7B7E\u9875 Tabs"}})])]))}});function Po(e){e.__sourceCode=`<template>\r
  <jw-tabs v-model="selected">\r
    <jw-tab title="\u5E72\u561B">\u5E72\u561B</jw-tab>\r
    <jw-tab title="\u542C">\u542C</jw-tab>\r
    <jw-tab title="\u82E6\u60C5\u6B4C">\u82E6\u60C5\u6B4C</jw-tab>\r
    <jw-tab title="\u4EE5\u4E3A\u591A\u70C2\u6F2B">\u4EE5\u4E3A\u591A\u70C2\u6F2B</jw-tab>\r
  </jw-tabs>\r
</template>\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const selected = ref("\u5E72\u561B");\r
<\/script>`,e.__sourceCodeTitle=" \u57FA\u7840\u7528\u6CD5 "}const xp=i("\u5E72\u561B"),Cp=i("\u542C"),kp=i("\u82E6\u60C5\u6B4C"),Dp=i("\u4EE5\u4E3A\u591A\u70C2\u6F2B"),Ro=b({setup(e){const o=y("\u5E72\u561B");return(n,u)=>{const l=m("jw-tab"),s=m("jw-tabs");return a(),g(s,{modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=c=>o.value=c)},{default:r(()=>[t(l,{title:"\u5E72\u561B"},{default:r(()=>[xp]),_:1}),t(l,{title:"\u542C"},{default:r(()=>[Cp]),_:1}),t(l,{title:"\u82E6\u60C5\u6B4C"},{default:r(()=>[kp]),_:1}),t(l,{title:"\u4EE5\u4E3A\u591A\u70C2\u6F2B"},{default:r(()=>[Dp]),_:1})]),_:1},8,["modelValue"])}}});typeof Po=="function"&&Po(Ro);function Jo(e){e.__sourceCode=`<template>\r
  <jw-tabs v-model="selected" type="card">\r
    <jw-tab title="\u5E72\u561B">\u5E72\u561B</jw-tab>\r
    <jw-tab title="\u542C">\u542C</jw-tab>\r
    <jw-tab title="\u82E6\u60C5\u6B4C">\u82E6\u60C5\u6B4C</jw-tab>\r
    <jw-tab title="\u4EE5\u4E3A\u591A\u70C2\u6F2B">\u4EE5\u4E3A\u591A\u70C2\u6F2B</jw-tab>\r
  </jw-tabs>\r
</template>\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const selected = ref("\u5E72\u561B");\r
<\/script>`,e.__sourceCodeTitle=" \u5361\u7247\u98CE\u683C "}const Ap=i("\u5E72\u561B"),Vp=i("\u542C"),zp=i("\u82E6\u60C5\u6B4C"),Tp=i("\u4EE5\u4E3A\u591A\u70C2\u6F2B"),Oo=b({setup(e){const o=y("\u5E72\u561B");return(n,u)=>{const l=m("jw-tab"),s=m("jw-tabs");return a(),g(s,{modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=c=>o.value=c),type:"card"},{default:r(()=>[t(l,{title:"\u5E72\u561B"},{default:r(()=>[Ap]),_:1}),t(l,{title:"\u542C"},{default:r(()=>[Vp]),_:1}),t(l,{title:"\u82E6\u60C5\u6B4C"},{default:r(()=>[zp]),_:1}),t(l,{title:"\u4EE5\u4E3A\u591A\u70C2\u6F2B"},{default:r(()=>[Tp]),_:1})]),_:1},8,["modelValue"])}}});typeof Jo=="function"&&Jo(Oo);const Sp=d("h1",null,"Tabs \u6807\u7B7E\u9875",-1),Ip=d("p",null,"\u5728\u540C\u4E00\u5757\u533A\u57DF\u5207\u6362\u5185\u5BB9\u3002",-1),Up={class:"preview-wrapper"},Mp=b({setup(e){const o=[["v-model","\u7ED1\u5B9A\u503C","boolean","-","-"],["type","\u98CE\u683C\u7C7B\u578B","string","line / card","-"]];return(n,u)=>(a(),p(E,null,[Sp,Ip,d("div",Up,[t(w,{component:Ro}),t(w,{component:Oo}),t(F,{title:"\u5C5E\u6027",type:"prop",body:o}),t(M,{prev:{path:"/doc/page-header",name:"\u9875\u5934 PggeHeader"}})])],64))}}),Ee=e=>_e(qr,{content:e,key:e}),Pp=Ee(Yr),Rp=Ee(Gr),Jp=Ee(Kr),Be={\u6587\u6863:[{path:"intro",component:Pp,name:"\u4ECB\u7ECD"},{path:"install",component:Jp,name:"\u5B89\u88C5"},{path:"get-started",component:Rp,name:"\u5FEB\u901F\u4F7F\u7528"}],\u901A\u7528\u7EC4\u4EF6:[{path:"avatar",component:Es,name:"\u5934\u50CF Avatar"},{path:"button",component:ya,name:"\u6309\u94AE Button"},{path:"divider",component:Na,name:"\u5206\u5272\u7EBF Divider"},{path:"ellipsis",component:lc,name:"\u6587\u672C\u7701\u7565 Ellipsis"},{path:"gradient-text",component:qc,name:"\u6E10\u53D8\u6587\u5B57 GradientText"},{path:"icon",component:ti,name:"\u56FE\u6807 Icon"},{path:"link",component:Ci,name:"\u94FE\u63A5 Link"},{path:"tag",component:Ki,name:"\u6807\u7B7E Tag"}],\u6570\u636E\u5F55\u5165\u7EC4\u4EF6:[{path:"checkbox",component:ld,name:"\u590D\u9009\u6846 Checkbox"},{path:"input",component:pd,name:"\u8F93\u5165\u6846 Input"},{path:"radio",component:Nd,name:"\u5355\u9009\u6846 Radio"},{path:"select",component:Kd,name:"\u9009\u62E9\u5668 Select"},{path:"switch",component:Zd,name:"\u5F00\u5173 Switch"}],\u53CD\u9988\u7EC4\u4EF6:[{path:"alert",component:r_,name:"\u63D0\u793A Alert"},{path:"dialog",component:f_,name:"\u5BF9\u8BDD\u6846 Dialog"},{path:"message",component:z_,name:"\u4FE1\u606F Message"}],\u5BFC\u822A\u7EC4\u4EF6:[{path:"affix",component:G_,name:"\u56FA\u9489 Affix"},{path:"backtop",component:rp,name:"\u56DE\u5230\u9876\u90E8 Backtop"},{path:"breadcrumb",component:yp,name:"\u9762\u5305\u5C51 Breadcrumb"},{path:"page-header",component:Fp,name:"\u9875\u5934 PageHeader"},{path:"tabs",component:Mp,name:"\u6807\u7B7E\u9875 Tabs"}]};let Fe=[];for(let e in Be)Fe=[...Fe,...Be[e]];const Op={class:"layout"},Hp={class:"content"},Np={class:"menu"},Lp={class:"menu-group-title text-overflow"},Wp=d("svg",{class:"icon","aria-hidden":"true"},[d("use",{"xlink:href":"#icon-arrow-right"})],-1),qp=[Wp],Gp=b({setup(e){const o=Z("asideVisible"),n=Z("clientWidth"),u=()=>{o.value=!o.value},l=x(()=>({left:o.value?"0px":"-272px"})),s=x(()=>({left:o.value?"272px":"0px",transform:o.value?"rotate(180deg) translateX(50%)":"rotate(0deg) translateX(50%)"})),c=x(()=>n.value<500?{"padding-left":"24px"}:{"padding-left":o.value?"302px":"60px"});return(h,f)=>{const $=m("router-link"),v=m("router-view");return a(),p("div",Op,[t(Le,{class:"nav"}),d("div",Hp,[d("aside",{style:N(_(l))},[d("div",Np,[(a(!0),p(E,null,L(_(Be),(j,B)=>(a(),p("div",{class:"menu-group",key:B},[d("span",Lp,S(B)+S(B!=="\u6587\u6863"?`\uFF08${j.length}\uFF09`:""),1),(a(!0),p(E,null,L(j,(k,I)=>(a(),g($,{key:I,class:"menu-item text-overflow",to:`/doc/${k.path}`},{default:r(()=>[i(S(k.name),1)]),_:2},1032,["to"]))),128))]))),128))])],4),d("div",{class:"toggle-button",onClick:u,style:N(_(s))},qp,4),d("main",{style:N(_(c)),id:"doc-content-container"},[t(v)],4)])])}}}),Kp={style:{size:"20px"}},Yp=d("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"green",viewBox:"0 0 512 512",opacity:".9"},[d("path",{d:"M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})],-1),Xp=[Yp],Qp=b({setup(e){return(o,n)=>(a(),p("div",Kp,Xp))}}),Zp=hu(),Ho=bu({history:Zp,routes:[{path:"/",redirect:"/home"},{path:"/demo",component:Qp},{path:"/home",component:Lr},{path:"/doc",redirect:"/doc/intro",component:Gp,children:Fe}]}),ef={setup(e){const o=y(null);o.value=document.documentElement.clientWidth;const n=y(!(o.value<=500));return ne("asideVisible",n),ne("clientWidth",o),Ho.afterEach(()=>{o.value<=500&&(n.value=!1)}),window.onresize=()=>{o.value=document.body.clientWidth,o.value<=500?n.value=!1:n.value=!0},(u,l)=>{const s=m("router-view");return a(),g(s)}}},xe=vu(ef);xe.use(Ho);xe.use(Er);xe.mount("#app");
