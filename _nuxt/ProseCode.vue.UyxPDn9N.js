import{_ as m}from"./ProseCodeIcon.vue.CP6T_aPY.js";import{_ as f}from"./ProseCodeButton.vue.C7P3q3qj.js";import{d as u,ap as p,b as n,c as r,n as t,E as o,g as s,e as g,t as y,f as b,aj as v}from"./entry.eXL1rNcT.js";const k=u({__name:"ProseCode",props:{code:{type:String,required:!0},icon:{type:String,default:void 0},language:{type:String,default:void 0},hideHeader:{type:Boolean,default:!1},filename:{type:String,default:void 0},highlights:{type:Array,default:void 0},meta:{type:String,default:void 0}},setup(e){const i={wrapper:"[&>pre]:!rounded-t-none [&>pre]:!my-0 my-5",header:"flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 border-b-0 relative rounded-t-md px-4 py-3 not-prose",icon:{base:""},button:{base:"absolute top-2.5 right-2.5"},filename:"text-gray-700 dark:text-gray-200 text-sm/6"},{ui:a}=p("content.prose.code",void 0,i,void 0,!0);return(d,h)=>{const l=m,c=f;return n(),r("div",{class:t(["relative",!!e.filename&&o(a).wrapper])},[e.filename&&!e.hideHeader?(n(),r("div",{key:0,class:t(o(a).header)},[s(l,{icon:e.icon,filename:e.filename,class:t(o(a).icon.base)},null,8,["icon","filename","class"]),g("span",{class:t(o(a).filename)},y(e.filename),3)],2)):b("",!0),s(c,{code:e.code,class:t(o(a).button.base)},null,8,["code","class"]),v(d.$slots,"default")],2)}}});export{k as _};
