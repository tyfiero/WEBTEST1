import{s as $,d as B,n as N,r as F}from"./scheduler.CcMS3Mw0.js";import{S as U,i as W,e as c,s as k,b as d,g as T,j as g,f as w,d as b,l as r,n as S,m as n,v as q}from"./index.Dtc04KBN.js";function G(a){const e=t=>{a&&!a.contains(t.target)&&!t.defaultPrevented&&a.dispatchEvent(new CustomEvent("click_outside",a))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function P(a){let e,t='<a href="https://01.openinterpreter.com/" class="hover:underline">01 Project</a> <a href="https://docs.openinterpreter.com/getting-started/introduction" class="whitespace-nowrap hover:underline">Open Interpreter</a>';return{c(){e=c("div"),e.innerHTML=t,this.h()},l(l){e=d(l,"DIV",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-5dfnfj"&&(e.innerHTML=t),this.h()},h(){r(e,"class","absolute -left-40 -top-3 flex flex-col items-end gap-2 text-white md:left-0 md:top-8 md:mt-2 md:items-start")},m(l,x){S(l,e,x)},d(l){l&&b(e)}}}function J(a){let e,t,l='<div class="h-8 w-8 rounded-full bg-white saturate-200"></div>',x,f,V="Open Interpreter",D,i,h,j="Discord",E,o,v,H="Docs",I,A,p,O="Contact",m,z="Careers",L,M,s=a[0]&&P();return{c(){e=c("nav"),t=c("div"),t.innerHTML=l,x=k(),f=c("div"),f.textContent=V,D=k(),i=c("div"),h=c("a"),h.textContent=j,E=k(),o=c("div"),v=c("button"),v.textContent=H,I=k(),s&&s.c(),A=k(),p=c("a"),p.textContent=O,m=c("a"),m.textContent=z,this.h()},l(_){e=d(_,"NAV",{class:!0});var u=T(e);t=d(u,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-uhwpqi"&&(t.innerHTML=l),x=w(u),f=d(u,"DIV",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1qiplt3"&&(f.textContent=V),D=w(u),i=d(u,"DIV",{class:!0});var C=T(i);h=d(C,"A",{href:!0,class:!0,"data-svelte-h":!0}),g(h)!=="svelte-1tesvs7"&&(h.textContent=j),E=w(C),o=d(C,"DIV",{class:!0});var y=T(o);v=d(y,"BUTTON",{class:!0,"data-svelte-h":!0}),g(v)!=="svelte-15sugph"&&(v.textContent=H),I=w(y),s&&s.l(y),y.forEach(b),A=w(C),p=d(C,"A",{href:!0,class:!0,"data-svelte-h":!0}),g(p)!=="svelte-owya4p"&&(p.textContent=O),m=d(C,"A",{href:!0,class:!0,"data-svelte-h":!0}),g(m)!=="svelte-16er9ox"&&(m.textContent=z),C.forEach(b),u.forEach(b),this.h()},h(){r(t,"class","flex items-center space-x-4"),r(f,"class","hidden text-xl md:block"),r(h,"href","https://discord.gg/Hvz9Axh84z"),r(h,"class","hover:underline"),r(v,"class","hover:underline"),r(o,"class","relative"),r(p,"href","https://twitter.com/hellokillian"),r(p,"class","hover:underline"),r(m,"href","https://0ggfznkwh4j.typeform.com/to/W5At4fmF"),r(m,"class","rounded border px-2 hover:underline"),r(i,"class","flex flex-col text-lg md:flex-row md:space-x-12"),r(e,"class","fixed top-0 z-10 flex w-full items-center justify-between px-6 py-6 text-white sm:px-12")},m(_,u){S(_,e,u),n(e,t),n(e,x),n(e,f),n(e,D),n(e,i),n(i,h),n(i,E),n(i,o),n(o,v),n(o,I),s&&s.m(o,null),n(i,A),n(i,p),n(i,m),L||(M=[q(v,"click",a[2]),B(G.call(null,o)),q(o,"click_outside",a[1])],L=!0)},p(_,[u]){_[0]?s||(s=P(),s.c(),s.m(o,null)):s&&(s.d(1),s=null)},i:N,o:N,d(_){_&&b(e),s&&s.d(),L=!1,F(M)}}}function K(a,e,t){let l=!1;function x(){l&&t(0,l=!1)}return[l,x,()=>{t(0,l=!l)}]}class X extends U{constructor(e){super(),W(this,e,K,J,$,{})}}export{X as N};