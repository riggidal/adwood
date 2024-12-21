var pe=Object.defineProperty;var ge=(t,n,e)=>n in t?pe(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var L=(t,n,e)=>ge(t,typeof n!="symbol"?n+"":n,e);import{n as ut,s as me,o as Pt,t as ye}from"./scheduler.BQU0ZC4T.js";import{a as we,b as T}from"./paths.BruCSxtf.js";new URL("sveltekit-internal://");function _e(t,n){return t==="/"||n==="ignore"?t:n==="never"?t.endsWith("/")?t.slice(0,-1):t:n==="always"&&!t.endsWith("/")?t+"/":t}function ve(t){return t.split("%25").map(decodeURI).join("%25")}function be(t){for(const n in t)t[n]=decodeURIComponent(t[n]);return t}function dt({href:t}){return t.split("#")[0]}const Ae=["href","pathname","search","toString","toJSON"];function Se(t,n,e){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(e(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of Ae)Object.defineProperty(r,a,{get(){return n(),t[a]},enumerable:!0,configurable:!0});return r}const ke="/__data.json",Ee=".html__data.json";function Re(t){return t.endsWith(".html")?t.replace(/\.html$/,Ee):t.replace(/\/$/,"")+ke}function Ie(...t){let n=5381;for(const e of t)if(typeof e=="string"){let r=e.length;for(;r;)n=n*33^e.charCodeAt(--r)}else if(ArrayBuffer.isView(e)){const r=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Ue(t){const n=atob(t),e=new Uint8Array(n.length);for(let r=0;r<n.length;r++)e[r]=n.charCodeAt(r);return e.buffer}const qt=window.fetch;window.fetch=(t,n)=>((t instanceof Request?t.method:(n==null?void 0:n.method)||"GET")!=="GET"&&G.delete(_t(t)),qt(t,n));const G=new Map;function Le(t,n){const e=_t(t,n),r=document.querySelector(e);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&G.set(e,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Ue(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,n)}function Te(t,n,e){if(G.size>0){const r=_t(t,e),a=G.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(e==null?void 0:e.cache))return new Response(a.body,a.init);G.delete(r)}}return window.fetch(n,e)}function _t(t,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${Ie(...a)}"]`}return r}const xe=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Pe(t){const n=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Oe(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return ht(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ht(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const d=xe.exec(c),[,h,y,u,g]=d;return n.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return ht(c)}).join("")}).join("")}/?$`),params:n}}function Ce(t){return!/^\([^)]+\)$/.test(t)}function Oe(t){return t.slice(1).split("/").filter(Ce)}function Ne(t,n,e){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||e[c.matcher](l)){r[c.name]=l;const d=n[s+1],h=a[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function ht(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function $e({nodes:t,server_loads:n,dictionary:e,matchers:r}){const a=new Set(n);return Object.entries(e).map(([s,[c,l,d]])=>{const{pattern:h,params:y}=Pe(s),u={id:s,exec:g=>{const f=h.exec(g);if(f)return Ne(f,y,r)},errors:[1,...d||[]].map(g=>t[g]),layouts:[0,...l||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function Gt(t,n=JSON.parse){try{return n(sessionStorage[t])}catch{}}function Ct(t,n,e=JSON.stringify){const r=e(n);try{sessionStorage[t]=r}catch{}}const $=[];function vt(t,n=ut){let e;const r=new Set;function a(s){if(me(t,s)&&(t=s,e)){const c=!$.length;for(const l of r)l[1](),$.push(l,t);if(c){for(let l=0;l<$.length;l+=2)$[l][0]($[l+1]);$.length=0}}}function o(s){a(s(t))}function i(s,c=ut){const l=[s,c];return r.add(l),r.size===1&&(e=n(a,o)||ut),s(t),()=>{r.delete(l),r.size===0&&e&&(e(),e=null)}}return{set:a,update:o,subscribe:i}}const je="1734801021960",Mt="sveltekit:snapshot",Ht="sveltekit:scroll",Kt="sveltekit:states",De="sveltekit:pageurl",F="sveltekit:history",H="sveltekit:navigation",X={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},z=location.origin;function Wt(t){if(t instanceof URL)return t;let n=document.baseURI;if(!n){const e=document.getElementsByTagName("base");n=e.length?e[0].href:document.URL}return new URL(t,n)}function bt(){return{x:pageXOffset,y:pageYOffset}}function j(t,n){return t.getAttribute(`data-sveltekit-${n}`)}const Ot={...X,"":X.hover};function Yt(t){let n=t.assignedSlot??t.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function zt(t,n){for(;t&&t!==n;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=Yt(t)}}function mt(t,n){let e;try{e=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,a=!e||!!r||ot(e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(e==null?void 0:e.origin)===z&&t.hasAttribute("download");return{url:e,external:a,target:r,download:o}}function Z(t){let n=null,e=null,r=null,a=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)r===null&&(r=j(s,"preload-code")),a===null&&(a=j(s,"preload-data")),n===null&&(n=j(s,"keepfocus")),e===null&&(e=j(s,"noscroll")),o===null&&(o=j(s,"reload")),i===null&&(i=j(s,"replacestate")),s=Yt(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ot[r??"off"],preload_data:Ot[a??"off"],keepfocus:c(n),noscroll:c(e),reload:c(o),replace_state:c(i)}}function Nt(t){const n=vt(t);let e=!0;function r(){e=!0,n.update(i=>i)}function a(i){e=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||e&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}const Jt={v:()=>{}};function Fe(){const{set:t,subscribe:n}=vt(!1);let e;async function r(){clearTimeout(e);try{const a=await fetch(`${we}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==je;return i&&(t(!0),Jt.v(),clearTimeout(e)),i}catch{return!1}}return{subscribe:n,check:r}}function ot(t,n){return t.origin!==z||!t.pathname.startsWith(n)}function $t(t){const n=Be(t),e=new ArrayBuffer(n.length),r=new DataView(e);for(let a=0;a<e.byteLength;a++)r.setUint8(a,n.charCodeAt(a));return e}const Ve="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Be(t){t.length%4===0&&(t=t.replace(/==?$/,""));let n="",e=0,r=0;for(let a=0;a<t.length;a++)e<<=6,e|=Ve.indexOf(t[a]),r+=6,r===24&&(n+=String.fromCharCode((e&16711680)>>16),n+=String.fromCharCode((e&65280)>>8),n+=String.fromCharCode(e&255),e=r=0);return r===12?(e>>=4,n+=String.fromCharCode(e)):r===18&&(e>>=2,n+=String.fromCharCode((e&65280)>>8),n+=String.fromCharCode(e&255)),n}const qe=-1,Ge=-2,Me=-3,He=-4,Ke=-5,We=-6;function Ye(t,n){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const e=t,r=Array(e.length);function a(o,i=!1){if(o===qe)return;if(o===Me)return NaN;if(o===He)return 1/0;if(o===Ke)return-1/0;if(o===We)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=e[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<s.length;u+=1)d.add(a(s[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<s.length;u+=2)h.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);r[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],f=$t(g),p=new u(f);r[o]=p;break}case"ArrayBuffer":{const u=s[1],g=$t(u);r[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const d=s[l];d!==Ge&&(c[l]=a(d))}}else{const c={};r[o]=c;for(const l in s){const d=s[l];c[l]=a(d)}}return r[o]}return a(0)}const Xt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Xt];const ze=new Set([...Xt]);[...ze];function Je(t){return t.filter(n=>n!=null)}class st{constructor(n,e){this.status=n,typeof e=="string"?this.body={message:e}:e?this.body=e:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Zt{constructor(n,e){this.status=n,this.location=e}}class At extends Error{constructor(n,e,r){super(r),this.status=n,this.text=e}}const Xe="x-sveltekit-invalidated",Ze="x-sveltekit-trailing-slash";function Q(t){return t instanceof st||t instanceof At?t.status:500}function Qe(t){return t instanceof At?t.text:"Internal Error"}let b,K,pt;const tn=Pt.toString().includes("$$")||/function \w+\(\) \{\}/.test(Pt.toString());tn?(b={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},K={current:null},pt={current:!1}):(b=new class{constructor(){L(this,"data",$state.raw({}));L(this,"form",$state.raw(null));L(this,"error",$state.raw(null));L(this,"params",$state.raw({}));L(this,"route",$state.raw({id:null}));L(this,"state",$state.raw({}));L(this,"status",$state.raw(-1));L(this,"url",$state.raw(new URL("https://example.com")))}},K=new class{constructor(){L(this,"current",$state.raw(null))}},pt=new class{constructor(){L(this,"current",$state.raw(!1))}},Jt.v=()=>pt.current=!0);function en(t){Object.assign(b,t)}const nn=new Set(["icon","shortcut icon","apple-touch-icon"]),O=Gt(Ht)??{},W=Gt(Mt)??{},P={url:Nt({}),page:Nt({}),navigating:vt(null),updated:Fe()};function St(t){O[t]=bt()}function rn(t,n){let e=t+1;for(;O[e];)delete O[e],e+=1;for(e=n+1;W[e];)delete W[e],e+=1}function B(t){return location.href=t.href,new Promise(()=>{})}async function Qt(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(T||"/");t&&await t.update()}}function jt(){}let it,yt,tt,x,wt,N;const te=[],et=[];let I=null;const ee=[],an=[];let D=[],w={branch:[],error:null,url:null},kt=!1,nt=!1,Dt=!0,Y=!1,q=!1,ne=!1,Et=!1,Rt,R,U,rt;const M=new Set;async function bn(t,n,e){var a,o,i,s;document.URL!==location.href&&(location.href=location.href),N=t,await((o=(a=t.hooks).init)==null?void 0:o.call(a)),it=$e(t),x=document.documentElement,wt=n,yt=t.nodes[0],tt=t.nodes[1],yt(),tt(),R=(i=history.state)==null?void 0:i[F],U=(s=history.state)==null?void 0:s[H],R||(R=U=Date.now(),history.replaceState({...history.state,[F]:R,[H]:U},""));const r=O[R];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),e?await hn(wt,e):un(location.href,{replaceState:!0}),dn()}function on(){te.length=0,Et=!1}function re(t){et.some(n=>n==null?void 0:n.snapshot)&&(W[t]=et.map(n=>{var e;return(e=n==null?void 0:n.snapshot)==null?void 0:e.capture()}))}function ae(t){var n;(n=W[t])==null||n.forEach((e,r)=>{var a,o;(o=(a=et[r])==null?void 0:a.snapshot)==null||o.restore(e)})}function Ft(){St(R),Ct(Ht,O),re(U),Ct(Mt,W)}async function oe(t,n,e,r){return J({type:"goto",url:Wt(t),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:e,nav_token:r,accept:()=>{n.invalidateAll&&(Et=!0)}})}async function sn(t){if(t.id!==(I==null?void 0:I.id)){const n={};M.add(n),I={id:t.id,token:n,promise:ie({...t,preload:n}).then(e=>(M.delete(n),e.type==="loaded"&&e.state.error&&(I=null),e))}}return I.promise}async function gt(t){const n=it.find(e=>e.exec(ce(t)));n&&await Promise.all([...n.layouts,n.leaf].map(e=>e==null?void 0:e[1]()))}function se(t,n,e){var o;w=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(b,t.props.page),Rt=new N.root({target:n,props:{...t.props,stores:P,components:et},hydrate:e,sync:!1}),ae(U);const a={from:null,to:{params:w.params,route:{id:((o=w.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};D.forEach(i=>i(a)),nt=!0}function at({url:t,params:n,branch:e,status:r,error:a,route:o,form:i}){let s="never";if(T&&(t.pathname===T||t.pathname===T+"/"))s="always";else for(const u of e)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);t.pathname=_e(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:n,branch:e,error:a,route:o},props:{constructors:Je(e).map(u=>u.node.component),page:b}};i!==void 0&&(c.props.form=i);let l={},d=!b,h=0;for(let u=0;u<Math.max(e.length,w.branch.length);u+=1){const g=e[u],f=w.branch[u];(g==null?void 0:g.data)!==(f==null?void 0:f.data)&&(d=!0),g&&(l={...l,...g.data},d&&(c.props[`data_${h}`]=l),h+=1)}return(!w.url||t.href!==w.url.href||w.error!==a||i!==void 0&&i!==b.form||d)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:d?l:b.data}),c}async function It({loader:t,parent:n,url:e,params:r,route:a,server_data_node:o}){var d,h,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((d=l.universal)!=null&&d.load){let u=function(...f){for(const p of f){const{href:A}=new URL(p,e);c.dependencies.add(A)}};const g={route:new Proxy(a,{get:(f,p)=>(s&&(c.route=!0),f[p])}),params:new Proxy(r,{get:(f,p)=>(s&&c.params.add(p),f[p])}),data:(o==null?void 0:o.data)??null,url:Se(e,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,p){let A;f instanceof Request?(A=f.url,p={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...p}):A=f;const k=new URL(A,e);return s&&u(k.href),k.origin===e.origin&&(A=k.href.slice(e.origin.length)),nt?Te(A,k.href,p):Le(A,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:t,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function Vt(t,n,e,r,a,o){if(Et)return!0;if(!a)return!1;if(a.parent&&t||a.route&&n||a.url&&e)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==w.params[i])return!0;for(const i of a.dependencies)if(te.some(s=>s(new URL(i))))return!0;return!1}function Ut(t,n){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?n??null:null}function cn(t,n){if(!t)return new Set(n.searchParams.keys());const e=new Set([...t.searchParams.keys(),...n.searchParams.keys()]);for(const r of e){const a=t.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&e.delete(r)}return e}function Bt({error:t,url:n,route:e,params:r}){return{type:"loaded",state:{error:t,url:n,route:e,params:r,branch:[]},props:{page:b,constructors:[]}}}async function ie({id:t,invalidating:n,url:e,params:r,route:a,preload:o}){if((I==null?void 0:I.id)===t)return M.delete(I.token),I.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),l.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let d=null;const h=w.url?t!==w.url.pathname+w.url.search:!1,y=w.route?a.id!==w.route.id:!1,u=cn(w.url,e);let g=!1;const f=l.map((m,v)=>{var C;const S=w.branch[v],E=!!(m!=null&&m[0])&&((S==null?void 0:S.loader)!==m[1]||Vt(g,y,h,u,(C=S.server)==null?void 0:C.uses,r));return E&&(g=!0),E});if(f.some(Boolean)){try{d=await ue(e,f)}catch(m){const v=await V(m,{url:e,params:r,route:{id:t}});return M.has(o)?Bt({error:v,url:e,params:r,route:a}):ct({status:Q(m),error:v,url:e,route:a})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let A=!1;const k=l.map(async(m,v)=>{var lt;if(!m)return;const S=w.branch[v],E=p==null?void 0:p[v];if((!E||E.type==="skip")&&m[1]===(S==null?void 0:S.loader)&&!Vt(A,y,h,u,(lt=S.universal)==null?void 0:lt.uses,r))return S;if(A=!0,(E==null?void 0:E.type)==="error")throw E;return It({loader:m[1],url:e,params:r,route:a,parent:async()=>{var xt;const Tt={};for(let ft=0;ft<v;ft+=1)Object.assign(Tt,(xt=await k[ft])==null?void 0:xt.data);return Tt},server_data_node:Ut(E===void 0&&m[0]?{type:"skip"}:E??null,m[0]?S==null?void 0:S.server:void 0)})});for(const m of k)m.catch(()=>{});const _=[];for(let m=0;m<l.length;m+=1)if(l[m])try{_.push(await k[m])}catch(v){if(v instanceof Zt)return{type:"redirect",location:v.location};if(M.has(o))return Bt({error:await V(v,{params:r,url:e,route:{id:a.id}}),url:e,params:r,route:a});let S=Q(v),E;if(p!=null&&p.includes(v))S=v.status??S,E=v.error;else if(v instanceof st)E=v.body;else{if(await P.updated.check())return await Qt(),await B(e);E=await V(v,{params:r,url:e,route:{id:a.id}})}const C=await ln(m,_,i);return C?at({url:e,params:r,branch:_.slice(0,C.idx).concat(C.node),status:S,error:E,route:a}):await fe(e,{id:a.id},E,S)}else _.push(void 0);return at({url:e,params:r,branch:_,status:200,error:null,route:a,form:n?void 0:null})}async function ln(t,n,e){for(;t--;)if(e[t]){let r=t;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await e[t](),loader:e[t],data:{},server:null,universal:null}}}catch{continue}}}async function ct({status:t,error:n,url:e,route:r}){const a={};let o=null;if(N.server_loads[0]===0)try{const l=await ue(e,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(e.origin!==z||e.pathname!==location.pathname||kt)&&await B(e)}const s=await It({loader:yt,url:e,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Ut(o)}),c={node:await tt(),loader:tt,universal:null,server:null,data:null};return at({url:e,params:a,branch:[s,c],status:t,error:n,route:null})}function Lt(t,n){if(!t||ot(t,T))return;let e;try{e=N.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const r=ce(e);for(const a of it){const o=a.exec(r);if(o)return{id:t.pathname+t.search,invalidating:n,route:a,params:be(o),url:t}}}function ce(t){return ve(t.slice(T.length)||"/")}function le({url:t,type:n,intent:e,delta:r}){let a=!1;const o=he(w,e,t,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return Y||ee.forEach(s=>s(i)),a?null:o}async function J({type:t,url:n,popped:e,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=jt,block:d=jt}){const h=Lt(n,!1),y=le({url:n,type:t,delta:e==null?void 0:e.delta,intent:h});if(!y){d();return}const u=R,g=U;l(),Y=!0,nt&&P.navigating.set(K.current=y.navigation),rt=c;let f=h&&await ie(h);if(!f){if(ot(n,T))return await B(n);f=await fe(n,{id:null},await V(new At(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,rt!==c)return y.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await ct({status:500,error:await V(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return oe(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await P.updated.check()&&(await Qt(),await B(n));if(on(),St(u),re(g),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=e?e.state:i,!e){const _=o?0:1,m={[F]:R+=_,[H]:U+=_,[Kt]:i};(o?history.replaceState:history.pushState).call(history,m,"",n),o||rn(R,U)}if(I=null,f.props.page.state=i,nt){w=f.state,f.props.page&&(f.props.page.url=n);const _=(await Promise.all(an.map(m=>m(y.navigation)))).filter(m=>typeof m=="function");if(_.length>0){let m=function(){D=D.filter(v=>!_.includes(v))};_.push(m),D.push(..._)}Rt.$set(f.props),en(f.props.page),ne=!0}else se(f,wt,!1);const{activeElement:p}=document;await ye();const A=e?e.scroll:a?bt():null;if(Dt){const _=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));A?scrollTo(A.x,A.y):_?_.scrollIntoView():scrollTo(0,0)}const k=document.activeElement!==p&&document.activeElement!==document.body;!r&&!k&&pn(),Dt=!0,f.props.page&&Object.assign(b,f.props.page),Y=!1,t==="popstate"&&ae(U),y.fulfil(void 0),D.forEach(_=>_(y.navigation)),P.navigating.set(K.current=null)}async function fe(t,n,e,r){return t.origin===z&&t.pathname===location.pathname&&!kt?await ct({status:r,error:e,url:t,route:n}):await B(t)}function fn(){let t;x.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function n(o){o.defaultPrevented||r(o.composedPath()[0],1)}x.addEventListener("mousedown",n),x.addEventListener("touchstart",n,{passive:!0});const e=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(gt(i.target.href),e.unobserve(i.target))},{threshold:0});function r(o,i){const s=zt(o,x);if(!s)return;const{url:c,external:l,download:d}=mt(s,T);if(l||d)return;const h=Z(s),y=c&&w.url.pathname+w.url.search===c.pathname+c.search;if(!h.reload&&!y)if(i<=h.preload_data){const u=Lt(c,!1);u&&sn(u)}else i<=h.preload_code&&gt(c.pathname)}function a(){e.disconnect();for(const o of x.querySelectorAll("a")){const{url:i,external:s,download:c}=mt(o,T);if(s||c)continue;const l=Z(o);l.reload||(l.preload_code===X.viewport&&e.observe(o),l.preload_code===X.eager&&gt(i.pathname))}}D.push(a),a()}function V(t,n){if(t instanceof st)return t.body;const e=Q(t),r=Qe(t);return N.hooks.handleError({error:t,event:n,status:e,message:r})??{message:r}}function un(t,n={}){return t=Wt(t),t.origin!==z?Promise.reject(new Error("goto: invalid URL")):oe(t,n,0)}function dn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let r=!1;if(Ft(),!Y){const a=he(w,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};ee.forEach(i=>i(o))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ft()}),(n=navigator.connection)!=null&&n.saveData||fn(),x.addEventListener("click",async e=>{if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=zt(e.composedPath()[0],x);if(!r)return;const{url:a,external:o,target:i,download:s}=mt(r,T);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=Z(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[d,h]=a.href.split("#"),y=d===dt(location);if(o||c.reload&&(!y||!h)){le({url:a,type:"link"})?Y=!0:e.preventDefault();return}if(h!==void 0&&y){const[,u]=w.url.href.split("#");if(u===h){if(e.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=r.ownerDocument.getElementById(decodeURIComponent(h));g&&(g.scrollIntoView(),g.focus())}return}if(q=!0,St(R),t(a),!c.replace_state)return;q=!1}e.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),J({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),x.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ot(s,T))return;const c=e.target,l=Z(c);if(l.reload)return;e.preventDefault(),e.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),J({type:"form",url:s,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??s.href===location.href})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[F]){const a=e.state[F];if(rt={},a===R)return;const o=O[a],i=e.state[Kt]??{},s=new URL(e.state[De]??location.href),c=e.state[H],l=dt(location)===dt(w.url);if(c===U&&(ne||l)){t(s),O[R]=bt(),o&&scrollTo(o.x,o.y),i!==b.state&&(b.state=i,Rt.$set({page:b})),R=a;return}const h=a-R;await J({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{R=a,U=c},block:()=>{history.go(-h)},nav_token:rt})}else if(!q){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{q&&(q=!1,history.replaceState({...history.state,[F]:++R,[H]:U},"",location.href))});for(const e of document.querySelectorAll("link"))nn.has(e.rel)&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&P.navigating.set(K.current=null)});function t(e){w.url=b.url=e,P.page.set({data:b.data,error:b.error,form:b.form,params:b.params,route:b.route,state:b.state,status:b.status,url:e}),P.page.notify()}}async function hn(t,{status:n=200,error:e,node_ids:r,params:a,route:o,data:i,form:s}){kt=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Lt(c,!1)||{});let l,d=!0;try{const h=r.map(async(g,f)=>{const p=i[f];return p!=null&&p.uses&&(p.uses=de(p.uses)),It({loader:N.nodes[g],url:c,params:a,route:o,parent:async()=>{const A={};for(let k=0;k<f;k+=1)Object.assign(A,(await h[k]).data);return A},server_data_node:Ut(p)})}),y=await Promise.all(h),u=it.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let f=0;f<g.length;f++)g[f]||y.splice(f,0,void 0)}l=at({url:c,params:a,branch:y,status:n,error:e,form:s,route:u??null})}catch(h){if(h instanceof Zt){await B(new URL(h.location,location.href));return}l=await ct({status:Q(h),error:await V(h,{url:c,params:a,route:o}),url:c,route:o}),t.textContent="",d=!1}l.props.page&&(l.props.page.state={}),se(l,t,d)}async function ue(t,n){var a;const e=new URL(t);e.pathname=Re(t.pathname),t.pathname.endsWith("/")&&e.searchParams.append(Ze,"1"),e.searchParams.append(Xe,n.map(o=>o?"1":"0").join(""));const r=await qt(e.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new st(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(y){return Ye(y,{...N.decoders,Promise:u=>new Promise((g,f)=>{i.set(u,{fulfil:g,reject:f})})})}let d="";for(;;){const{done:y,value:u}=await s.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const f=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=de(p.uses),p.data=l(p.data))}),o(f);else if(f.type==="chunk"){const{id:p,data:A,error:k}=f,_=i.get(p);i.delete(p),k?_.reject(l(k)):_.fulfil(l(A))}}}})}function de(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function pn(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const n=document.body,e=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),e!==null?n.setAttribute("tabindex",e):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function he(t,n,e,r){var c,l;let a,o;const i=new Promise((d,h)=>{a=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:e&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:e},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{bn as a,P as s};
