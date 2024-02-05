import{d as j,u as W,r as L,o as ee,_ as te,a as ne,b as R,c as q,n as oe,F as ie,e as w,f as E,g as D,w as J,T as B,t as ae,h as z,p as se,i as re,j as de,k as Z,l as ce,m as le,q as H,s as ue,v as O,x as U,y as G,z as pe,A as fe,B as F,C as ve}from"./entry.Uy6HGf0r.js";const A=o=>(se("data-v-30aa8e6f"),o=o(),re(),o),we=A(()=>w("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[w("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),he=A(()=>w("span",null,[w("a",{href:"https://nuxt.studio",target:"_blank",rel:"noopener"},"Nuxt Studio"),de(": Preview enabled")],-1)),ye={key:0},_e=A(()=>w("div",{id:"__preview_background"},null,-1)),me=A(()=>w("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[w("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),ge=A(()=>w("p",null,"Initializing the preview...",-1)),ke={key:0},Ce=A(()=>w("div",{id:"__preview_background"},null,-1)),Ie={id:"__preview_loader"},Pe=j({__name:"ContentPreviewMode",props:{previewToken:{type:String,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(o){const s=o,r=["__nuxt_preview","__preview_enabled"],l=Z(),k=W(),v=L(!0),f=L(!1),i=L(!1),p=L("");let d;const h=async()=>{z("previewToken").value="",window.sessionStorage.removeItem("previewToken"),await k.replace({query:{preview:void 0}}),window.location.reload()},b=async P=>{const y=await s.syncPreview(P);if(i.value!==!0){if(!y){setTimeout(()=>b(P),1e3);return}z("previewToken").value&&(i.value=!0,await k.replace({query:{}}),l.callHook("nuxt-studio:preview:ready"),window.parent&&window.self!==window.parent&&d.disconnect())}};return ee(async()=>{d=(await te(()=>import("./index.5Jz4PfUi.js"),__vite__mapDeps([]),import.meta.url)).connect(`${s.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:s.previewToken}});let y;d.on("connect",()=>{y=setTimeout(()=>{i.value||(y=setTimeout(()=>{p.value="Preview sync timed out",i.value=!1},3e4),d.emit("draft:requestSync"))},3e4)});const _=()=>{y&&(clearTimeout(y),y=null)};d.on("draft:sync",async x=>{if(_(),!x){try{d.once("draft:ready",()=>{d.emit("draft:requestSync")}),await s.requestPreviewSyncAPI()}catch(N){switch(_(),N.response.status){case 404:p.value="Preview draft not found",i.value=!1;break;default:p.value="An error occurred while syncing preview",i.value=!1}}return}b(x)}),d.on("draft:unauthorized",()=>{_(),p.value="Unauthorized preview token",i.value=!1}),d.on("disconnect",()=>{_()}),document.body.classList.add(...r),d.on("draft:update",x=>{f.value=!0,s.syncPreview(x),f.value=!1})}),ne(()=>{document.body.classList.remove(...r)}),(P,y)=>(R(),q("div",null,[v.value?(R(),q("div",{key:0,id:"__nuxt_preview",class:oe({__preview_ready:i.value,__preview_refreshing:f.value})},[i.value?(R(),q(ie,{key:0},[we,he,w("button",{onClick:h}," Close ")],64)):E("",!0)],2)):E("",!0),D(B,{name:"preview-loading"},{default:J(()=>[v.value&&!i.value&&!p.value?(R(),q("div",ye,[_e,w("div",{id:"__preview_loader"},[me,ge,w("button",{onClick:h}," Cancel ")])])):E("",!0)]),_:1}),D(B,{name:"preview-loading"},{default:J(()=>[p.value?(R(),q("div",ke,[Ce,w("div",Ie,[w("p",null,ae(p.value),1),w("button",{onClick:h}," Exit preview ")])])):E("",!0)]),_:1})]))}}),xe=ce(Pe,[["__scopeId","data-v-30aa8e6f"]]),Se=(o=[],s,r)=>{const l=[...s||[]],k=[...r||[]],v=JSON.parse(JSON.stringify(o));for(const i of l)if(i.oldPath)if(k.splice(k.findIndex(d=>d.path===i.oldPath),1),l.find(d=>d.path===i.oldPath))v.push({path:i.path,parsed:i.parsed});else{const d=v.find(h=>h.path===i.oldPath);d&&(d.path=i.path,i.parsed?d.parsed=i.parsed:i.pathMeta&&["_file","_path","_id","_locale"].forEach(h=>{d.parsed[h]=i.pathMeta[h]}))}else if(i.new)v.push({path:i.path,parsed:i.parsed});else{const p=v.find(d=>d.path===i.path);p&&Object.assign(p,{path:i.path,parsed:i.parsed})}for(const i of k)v.splice(v.findIndex(p=>p.path===i.path),1);const f=new Intl.Collator(void 0,{numeric:!0});return v.sort((i,p)=>f.compare(i.path,p.path)),v},C={appConfig:"app.config.ts",nuxtConfig:"nuxt.config.ts",tokensConfig:"tokens.config.ts"},Te=o=>{let s;return r=>(s||(s=o()),s)};function Q(o,s){for(const r in o){const l=s[r];r in s||delete o[r],l!==null&&typeof l=="object"&&Q(o[r],s[r])}}function X(o,s){for(const r in s){const l=s[r];l!==null&&typeof l=="object"?Array.isArray(l)&&Array.isArray(o[r])?o[r]=l:(o[r]=o[r]||{},X(o[r],l)):o[r]=l}}const Ae=Te(()=>JSON.parse(JSON.stringify(G()))),V=ve((o,s,r)=>{if(Array.isArray(o[s])&&Array.isArray(r))return o[s]=r,!0}),Le=()=>{const o=Z(),{studio:s,content:r}=le().public,l={},k=Ae();let v;const f=H("studio-client-db",()=>null),i=H("studio-preview-db-files",()=>[]);f.value||(o.hook("content:storage",t=>{f.value=t}),ue("/non-existing-path").findOne());const p=async(t,n)=>{const a=window.sessionStorage.getItem("previewToken"),c=await t.getKeys(`${a}:`);await Promise.all(c.map(e=>t.removeItem(e)));const u=new Set(n.map(e=>e.parsed._id.split(":").shift()));await t.setItem(`${a}$`,JSON.stringify({ignoreSources:Array.from(u)})),await Promise.all(n.map(e=>(l[e.parsed._path]=e.parsed,t.setItem(`${a}:${e.parsed._id}`,JSON.stringify(e.parsed)))))},d=t=>{const n=U(o,G);n!=null&&n.ui&&(n.ui.icons={...n.ui.icons,dynamic:!0}),X(n,V(t,k)),t||Q(n,k)},h=t=>{var a,c,u,e;const n=(e=(u=(c=(a=o==null?void 0:o.vueApp)==null?void 0:a._context)==null?void 0:c.config)==null?void 0:u.globalProperties)==null?void 0:e.$pinceauTheme;!n||!(n!=null&&n.updateTheme)||(v||(v=JSON.parse(JSON.stringify((n==null?void 0:n.theme.value)||{}))),U(o,n.updateTheme,[V(t,v)]))},b=async t=>{if(i.value=t.files=t.files||i.value||[],!f.value)return!1;const n=Se(t.files,t.additions,t.deletions),a=n.filter(e=>![C.appConfig,C.nuxtConfig,C.tokensConfig].includes(e.path));await p(f.value,a);const c=n.find(e=>e.path===C.appConfig);d(c==null?void 0:c.parsed);const u=n.find(e=>e.path===C.tokensConfig);return h(u==null?void 0:u.parsed),$(),!0},P=async()=>{const t=window.sessionStorage.getItem("previewToken");await $fetch("api/projects/preview/sync",{baseURL:s==null?void 0:s.apiURL,method:"POST",params:{token:t}})},y=()=>{const t=window.sessionStorage.getItem("previewToken"),n=document.createElement("div");n.id="__nuxt_preview_wrapper",document.body.appendChild(n),pe(xe,{previewToken:t,apiURL:s==null?void 0:s.apiURL,syncPreview:b,requestPreviewSyncAPI:P}).mount(n)},_=async t=>{var c,u,e;const n=window.sessionStorage.getItem("previewToken");if(!t)return null;t=t.replace(/\/$/,"");let a=await((c=f.value)==null?void 0:c.getItem(`${n}:${t}`));return a||(a=await((u=f.value)==null?void 0:u.getItem(`cached:${t}`))),a||(a=a=await((e=f.value)==null?void 0:e.getItem(t))),a||(a=l[t||"/"]),a},x=t=>{var a;const n=window.sessionStorage.getItem("previewToken");f.value&&(l[t.parsed._path]=t.parsed,f.value.setItem(`${n}:${(a=t.parsed)==null?void 0:a._id}`,JSON.stringify(t.parsed)))},N=async t=>{var c;const n=window.sessionStorage.getItem("previewToken"),a=await _(t);if(await((c=f.value)==null?void 0:c.removeItem(`${n}:${t}`)),a){delete l[a._path];const u=await _(a._id);u&&(l[u._path]=u)}},$=async()=>{if(r!=null&&r.documentDriven){const{pages:t}=U(o,fe),n=await Promise.all(Object.keys(t.value).map(async a=>{var c;return await _(((c=t.value[a])==null?void 0:c._id)??a)}));t.value=n.reduce((a,c,u)=>(c&&(a[Object.keys(t.value)[u]]=c),a),{})}await o.hooks.callHookParallel("app:data:refresh")};return{apiURL:s==null?void 0:s.apiURL,contentStorage:f,syncPreviewFiles:p,syncPreviewAppConfig:d,syncPreviewTokensConfig:h,requestPreviewSynchronization:P,findContentWithId:_,updateContent:x,removeContentWithId:N,requestRerender:$,mountPreviewUI:y,initiateIframeCommunication:Y};function Y(){if(!window.parent||window.self===window.parent)return;const t=W(),n=O(),a=L(""),c=e=>({path:e.path,query:F(e.query),params:F(e.params),fullPath:e.fullPath,meta:F(e.meta)});window.addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)&&window.parent.postMessage({type:"nuxt-studio:preview:keydown",payload:{key:e.key,metaKey:e.metaKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,altKey:e.altKey}},"*")}),window.addEventListener("message",async e=>{if(!["https://nuxt.studio","https://dev.nuxt.studio","http://localhost:3000"].includes(e.origin))return;const{type:m,payload:T={}}=e.data||{};switch(m){case"nuxt-studio:editor:file-selected":{const g=await _(T.path);g&&(g._partial||g._path!==O().path&&(a.value=g._path,t.push(g._path)));break}case"nuxt-studio:editor:file-changed":{const{additions:g=[],deletions:K=[]}=T;for(const I of g)await x(I);for(const I of K)await N(I.path);$();break}case"nuxt-studio:preview:sync":{b(T);break}case"nuxt-studio:config:file-changed":{const{additions:g=[],deletions:K=[]}=T,I=g.find(S=>S.path===C.appConfig);I&&d(I==null?void 0:I.parsed),K.find(S=>S.path===C.appConfig)&&d(void 0);const M=g.find(S=>S.path===C.tokensConfig);M&&h(M==null?void 0:M.parsed),K.find(S=>S.path===C.tokensConfig)&&h(void 0);break}}}),o.hook("page:finish",()=>{u(),o.payload.prerenderedAt&&$()}),o.hook("content:document-driven:finish",({route:e,page:m})=>{e.meta.studio_page_contentId=m==null?void 0:m._id}),o.hook("nuxt-studio:preview:ready",()=>{window.parent.postMessage({type:"nuxt-studio:preview:ready",payload:c(O())},"*"),setTimeout(()=>{u()},100)});function u(){const e=Array.from(window.document.querySelectorAll("[data-content-id]")).map(T=>T.getAttribute("data-content-id")),m=Array.from(new Set([n.meta.studio_page_contentId,...e])).filter(Boolean);if(a.value===m[0]){a.value="";return}window.openContentInStudioEditor(m,{navigate:!0,pageContentId:n.meta.studio_page_contentId})}window.openContentInStudioEditor=(e,m={})=>{window.parent.postMessage({type:"nuxt-studio:preview:navigate",payload:{...c(n),contentIds:e,...m}},"*")}}};export{Le as useStudio};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
