import{s as te,a as W,n as Zt,r as ee,o as le}from"../chunks/scheduler.BQU0ZC4T.js";import{S as se,i as re,e as r,s as u,t as kt,c as n,a as y,f,d as b,k as G,b as Tt,l as e,m as d,g as Ot,h as t,n as X,j as St}from"../chunks/index.CtaCnXlT.js";import{b as D}from"../chunks/paths.e3qyOUxc.js";function ne(a){let o,s;return{c(){o=r("img"),this.h()},l(l){o=n(l,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){W(o.src,s=`${D}/done.png`)||e(o,"src",s),e(o,"alt","Done"),e(o,"class","done")},m(l,v){Ot(l,o,v)},d(l){l&&b(o)}}}function oe(a){let o,s;return{c(){o=r("img"),this.h()},l(l){o=n(l,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){W(o.src,s=`${D}/done2.png`)||e(o,"src",s),e(o,"alt","Done"),e(o,"class","done")},m(l,v){Ot(l,o,v)},d(l){l&&b(o)}}}function ie(a){let o,s,l,v,rt,nt,g,x,Y,A,L,C,Z=`<img src="${`${D}/image.png`}" alt="Line" class="line"/>`,$,m,tt,N,M,dt,F,h,gt,ot,w,mt,it,_,i,k,Pt="Время:",wt,J,at=a[5].toFixed(3)+"",ht,Mt,Et,E,K,Ut="Вес морковки:",It,S,jt="-",yt,et,ct=(ft+a[1]).toFixed(3)+"",_t,xt,O,qt="+",Bt,I,Q,Rt="Высота:",Dt,P,zt="-",At,lt,ut=(30-a[4]).toFixed(1)+"",pt,Lt,U,Wt="+",Vt,j,Yt=`<img src="${`${D}/start.png`}" alt="Start Button" class="control-btn"/>`,Gt,q,$t=`<img src="${`${D}/reset.png`}" alt="Reset Button" class="control-btn"/>`,Ht,B,Nt,Jt;function Kt(c,p){return c[2]?oe:ne}let vt=Kt(a),H=vt(a);return{c(){o=r("body"),s=r("div"),l=r("div"),v=r("img"),nt=u(),g=r("div"),x=r("img"),A=u(),H.c(),L=u(),C=r("div"),C.innerHTML=Z,$=u(),m=r("img"),N=u(),M=r("img"),F=u(),h=r("img"),ot=u(),w=r("img"),it=u(),_=r("div"),i=r("div"),k=r("label"),k.textContent=Pt,wt=u(),J=r("span"),ht=kt(at),Mt=kt(" c."),Et=u(),E=r("div"),K=r("label"),K.textContent=Ut,It=u(),S=r("button"),S.textContent=jt,yt=u(),et=r("span"),_t=kt(ct),xt=u(),O=r("button"),O.textContent=qt,Bt=u(),I=r("div"),Q=r("label"),Q.textContent=Rt,Dt=u(),P=r("button"),P.textContent=zt,At=u(),lt=r("span"),pt=kt(ut),Lt=u(),U=r("button"),U.textContent=Wt,Vt=u(),j=r("button"),j.innerHTML=Yt,Gt=u(),q=r("button"),q.innerHTML=$t,Ht=u(),B=r("div"),this.h()},l(c){o=n(c,"BODY",{});var p=y(o);s=n(p,"DIV",{class:!0});var st=y(s);l=n(st,"DIV",{class:!0});var T=y(l);v=n(T,"IMG",{src:!0,alt:!0,class:!0}),nt=f(T),g=n(T,"DIV",{});var bt=y(g);x=n(bt,"IMG",{src:!0,alt:!0,class:!0}),A=f(bt),H.l(bt),bt.forEach(b),L=f(T),C=n(T,"DIV",{"data-svelte-h":!0}),G(C)!=="svelte-16j4umn"&&(C.innerHTML=Z),$=f(T),m=n(T,"IMG",{src:!0,alt:!0,class:!0,style:!0}),N=f(T),M=n(T,"IMG",{src:!0,alt:!0,class:!0,id:!0,style:!0}),F=f(T),h=n(T,"IMG",{src:!0,alt:!0,class:!0,id:!0,style:!0}),ot=f(T),w=n(T,"IMG",{src:!0,alt:!0,class:!0,id:!0,style:!0}),T.forEach(b),it=f(st),_=n(st,"DIV",{class:!0});var V=y(_);i=n(V,"DIV",{class:!0});var Ct=y(i);k=n(Ct,"LABEL",{for:!0,"data-svelte-h":!0}),G(k)!=="svelte-1ffy622"&&(k.textContent=Pt),wt=f(Ct),J=n(Ct,"SPAN",{id:!0});var Ft=y(J);ht=Tt(Ft,at),Mt=Tt(Ft," c."),Ft.forEach(b),Ct.forEach(b),Et=f(V),E=n(V,"DIV",{class:!0});var R=y(E);K=n(R,"LABEL",{for:!0,"data-svelte-h":!0}),G(K)!=="svelte-r8z62m"&&(K.textContent=Ut),It=f(R),S=n(R,"BUTTON",{class:!0,"data-svelte-h":!0}),G(S)!=="svelte-p93jwp"&&(S.textContent=jt),yt=f(R),et=n(R,"SPAN",{id:!0});var Qt=y(et);_t=Tt(Qt,ct),Qt.forEach(b),xt=f(R),O=n(R,"BUTTON",{class:!0,"data-svelte-h":!0}),G(O)!=="svelte-1cbcfim"&&(O.textContent=qt),R.forEach(b),Bt=f(V),I=n(V,"DIV",{class:!0});var z=y(I);Q=n(z,"LABEL",{for:!0,"data-svelte-h":!0}),G(Q)!=="svelte-yu0vmy"&&(Q.textContent=Rt),Dt=f(z),P=n(z,"BUTTON",{class:!0,"data-svelte-h":!0}),G(P)!=="svelte-87vfzl"&&(P.textContent=zt),At=f(z),lt=n(z,"SPAN",{id:!0});var Xt=y(lt);pt=Tt(Xt,ut),Xt.forEach(b),Lt=f(z),U=n(z,"BUTTON",{class:!0,"data-svelte-h":!0}),G(U)!=="svelte-1pp9d3e"&&(U.textContent=Wt),z.forEach(b),Vt=f(V),j=n(V,"BUTTON",{class:!0,"data-svelte-h":!0}),G(j)!=="svelte-12z2f02"&&(j.innerHTML=Yt),Gt=f(V),q=n(V,"BUTTON",{class:!0,"data-svelte-h":!0}),G(q)!=="svelte-2hdnop"&&(q.innerHTML=$t),V.forEach(b),Ht=f(st),B=n(st,"DIV",{style:!0}),y(B).forEach(b),st.forEach(b),p.forEach(b),this.h()},h(){W(v.src,rt=`${D}/tower.png`)||e(v,"src",rt),e(v,"alt","Tower"),e(v,"class","tower"),W(x.src,Y=`${D}/bags.png`)||e(x,"src",Y),e(x,"alt","Bags"),e(x,"class","bags"),W(m.src,tt=`${D}/rook.png`)||e(m,"src",tt),e(m,"alt","Carrot"),e(m,"class","rook"),d(m,"left","20%"),d(m,"bottom",5+a[3]+"%"),W(M.src,dt=`${D}/ground.png`)||e(M,"src",dt),e(M,"alt","Ground"),e(M,"class","ground"),e(M,"id","ground-1"),d(M,"bottom",a[3]+"%"),W(h.src,gt=`${D}/rook.png`)||e(h,"src",gt),e(h,"alt","Carrot"),e(h,"class","rook"),e(h,"id","carrot"),d(h,"right",12-a[1]*250+"%"),d(h,"width",5+a[1]*250+"%"),d(h,"top",10+a[3]+"%"),W(w.src,mt=`${D}/ground.png`)||e(w,"src",mt),e(w,"alt","Ground"),e(w,"class","ground"),e(w,"id","ground-2"),d(w,"top",15+a[3]+"%"),e(l,"class","simulation"),e(k,"for","time-display"),e(J,"id","time-display"),e(i,"class","info"),e(K,"for","weight"),e(S,"class","btn-weight"),e(et,"id","weight"),e(O,"class","btn-weight"),e(E,"class","weight-adjuster"),e(Q,"for","weight"),e(P,"class","btn-weight"),e(lt,"id","weight"),e(U,"class","btn-weight"),e(I,"class","weight-adjuster"),e(j,"class","btn"),e(q,"class","btn"),e(_,"class","controls"),d(B,"position","absolute"),d(B,"left","56%"),d(B,"top",a[0]+"px"),d(B,"background-color","#fff"),d(B,"width","50px"),d(B,"height","5px"),e(s,"class","container")},m(c,p){Ot(c,o,p),t(o,s),t(s,l),t(l,v),t(l,nt),t(l,g),t(g,x),t(g,A),H.m(g,null),t(l,L),t(l,C),t(l,$),t(l,m),t(l,N),t(l,M),t(l,F),t(l,h),t(l,ot),t(l,w),t(s,it),t(s,_),t(_,i),t(i,k),t(i,wt),t(i,J),t(J,ht),t(J,Mt),t(_,Et),t(_,E),t(E,K),t(E,It),t(E,S),t(E,yt),t(E,et),t(et,_t),t(E,xt),t(E,O),t(_,Bt),t(_,I),t(I,Q),t(I,Dt),t(I,P),t(I,At),t(I,lt),t(lt,pt),t(I,Lt),t(I,U),t(_,Vt),t(_,j),t(_,Gt),t(_,q),t(s,Ht),t(s,B),Nt||(Jt=[X(C,"click",a[6]),X(S,"click",a[10]),X(O,"click",a[9]),X(P,"click",a[11]),X(U,"click",a[12]),X(j,"click",a[7]),X(q,"click",a[8])],Nt=!0)},p(c,[p]){vt!==(vt=Kt(c))&&(H.d(1),H=vt(c),H&&(H.c(),H.m(g,null))),p&8&&d(m,"bottom",5+c[3]+"%"),p&8&&d(M,"bottom",c[3]+"%"),p&2&&d(h,"right",12-c[1]*250+"%"),p&2&&d(h,"width",5+c[1]*250+"%"),p&8&&d(h,"top",10+c[3]+"%"),p&8&&d(w,"top",15+c[3]+"%"),p&32&&at!==(at=c[5].toFixed(3)+"")&&St(ht,at),p&2&&ct!==(ct=(ft+c[1]).toFixed(3)+"")&&St(_t,ct),p&16&&ut!==(ut=(30-c[4]).toFixed(1)+"")&&St(pt,ut),p&1&&d(B,"top",c[0]+"px")},i:Zt,o:Zt,d(c){c&&b(o),H.d(),Nt=!1,ee(Jt)}}}let ft=.09,ae=145;function ce(a,o){let s=a*(o/100),l=s+Math.random()*(s/2);return a+(Math.random()<.5?-l:l)}function ue(a,o,s){let l=0,v=140,rt=0;function nt(i){i.target.getBoundingClientRect(),l=(i.clientY-rt)/20,s(0,v=i.clientY),console.log(`Mark set at height: ${l}px`),console.log(`Mark set at height pos: ${v}px`)}le(()=>{const i=document.querySelector("#carrot");if(i){const k=i.getBoundingClientRect();console.log(`Carrot position: x=${k.x}, y=${k.y}`),rt=k.y+66}});let g=.001,x=9.81,Y=0,A=!1,L=0,C=0,Z=0,$=0,m=0,tt=0,N=!1;F();function M(){g<=0||(x=ce(x,2),Y=g*x/(2*ft+g))}function dt(){console.log("Start"),F(),s(2,A=!0),M(),$=Date.now(),requestAnimationFrame(h)}function F(){s(2,A=!1),N=!1,s(3,L=C*2.5),Z=0,Y=0,s(5,tt=0)}function h(){if(!A)return;const i=Date.now();m=(i-$)/1e3,$=i,Z+=Y*m;let k=Z*m+.5*Y*(m*m);s(3,L+=k*ae),L>=75&&(s(2,A=!1),N=!1),console.log(`check: ${L/2.5} -- ${l}`),L/2.5>=l&&(N=!0),N&&s(5,tt+=m),A&&requestAnimationFrame(h)}function gt(){w(.001)}function ot(){w(-.001)}function w(i){i>0&&ft+g<.1&&s(1,g+=i),i<0&&ft+g>.091&&s(1,g+=i)}function mt(){_(1)}function it(){_(-1)}function _(i){i>0&&C<30&&s(4,C+=i),i<0&&C>0&&s(4,C+=i),F()}return[v,g,A,L,C,tt,nt,dt,F,gt,ot,mt,it]}class me extends se{constructor(o){super(),re(this,o,ue,ie,te,{})}}export{me as component};