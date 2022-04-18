const Ze=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))i(d);new MutationObserver(d=>{for(const b of d)if(b.type==="childList")for(const s of b.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(d){const b={};return d.integrity&&(b.integrity=d.integrity),d.referrerpolicy&&(b.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?b.credentials="include":d.crossorigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function i(d){if(d.ep)return;d.ep=!0;const b=t(d);fetch(d.href,b)}};Ze();function te(){}function $e(e){return e()}function Be(){return Object.create(null)}function ne(e){e.forEach($e)}function Qe(e){return typeof e=="function"}function eo(e,o){return e!=e?o==o:e!==o||e&&typeof e=="object"||typeof e=="function"}function oo(e){return Object.keys(e).length===0}function n(e,o){e.appendChild(o)}function R(e,o,t){e.insertBefore(o,t||null)}function G(e){e.parentNode.removeChild(e)}function ue(e,o){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(o)}function c(e){return document.createElement(e)}function E(e){return document.createTextNode(e)}function k(){return E(" ")}function re(e,o,t,i){return e.addEventListener(o,t,i),()=>e.removeEventListener(o,t,i)}function a(e,o,t){t==null?e.removeAttribute(o):e.getAttribute(o)!==t&&e.setAttribute(o,t)}function to(e){return Array.from(e.childNodes)}function lo(e,o){o=""+o,e.wholeText!==o&&(e.data=o)}function j(e,o,t,i){t===null?e.style.removeProperty(o):e.style.setProperty(o,t,i?"important":"")}function m(e,o,t){e.classList[t?"add":"remove"](o)}function no(e){const o={};for(const t of e)o[t.name]=t.value;return o}let Ce;function le(e){Ce=e}const oe=[],Ie=[],ke=[],Ve=[],ro=Promise.resolve();let _e=!1;function ao(){_e||(_e=!0,ro.then(Xe))}function ye(e){ke.push(e)}const ve=new Set;let me=0;function Xe(){const e=Ce;do{for(;me<oe.length;){const o=oe[me];me++,le(o),ho(o.$$)}for(le(null),oe.length=0,me=0;Ie.length;)Ie.pop()();for(let o=0;o<ke.length;o+=1){const t=ke[o];ve.has(t)||(ve.add(t),t())}ke.length=0}while(oe.length);for(;Ve.length;)Ve.pop()();_e=!1,ve.clear(),le(e)}function ho(e){if(e.fragment!==null){e.update(),ne(e.before_update);const o=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,o),e.after_update.forEach(ye)}}const io=new Set;function co(e,o){e&&e.i&&(io.delete(e),e.i(o))}function bo(e,o,t,i){const{fragment:d,on_mount:b,on_destroy:s,after_update:p}=e.$$;d&&d.m(o,t),i||ye(()=>{const u=b.map($e).filter(Qe);s?s.push(...u):ne(u),e.$$.on_mount=[]}),p.forEach(ye)}function so(e,o){const t=e.$$;t.fragment!==null&&(ne(t.on_destroy),t.fragment&&t.fragment.d(o),t.on_destroy=t.fragment=null,t.ctx=[])}function fo(e,o){e.$$.dirty[0]===-1&&(oe.push(e),ao(),e.$$.dirty.fill(0)),e.$$.dirty[o/31|0]|=1<<o%31}function go(e,o,t,i,d,b,s,p=[-1]){const u=Ce;le(e);const h=e.$$={fragment:null,ctx:null,props:b,update:te,not_equal:d,bound:Be(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(u?u.$$.context:[])),callbacks:Be(),dirty:p,skip_bound:!1,root:o.target||u.$$.root};s&&s(h.root);let f=!1;if(h.ctx=t?t(e,o.props||{},($,C,...A)=>{const g=A.length?A[0]:C;return h.ctx&&d(h.ctx[$],h.ctx[$]=g)&&(!h.skip_bound&&h.bound[$]&&h.bound[$](g),f&&fo(e,$)),C}):[],h.update(),f=!0,ne(h.before_update),h.fragment=i?i(h.ctx):!1,o.target){if(o.hydrate){const $=to(o.target);h.fragment&&h.fragment.l($),$.forEach(G)}else h.fragment&&h.fragment.c();o.intro&&co(e.$$.fragment),bo(e,o.target,o.anchor,o.customElement),Xe()}le(u)}let Ye;typeof HTMLElement=="function"&&(Ye=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map($e).filter(Qe);for(const o in this.$$.slotted)this.appendChild(this.$$.slotted[o])}attributeChangedCallback(e,o,t){this[e]=t}disconnectedCallback(){ne(this.$$.on_disconnect)}$destroy(){so(this,1),this.$destroy=te}$on(e,o){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(o),()=>{const i=t.indexOf(o);i!==-1&&t.splice(i,1)}}$set(e){this.$$set&&!oo(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});function qe(e,o,t){const i=e.slice();return i[12]=o[t],i}function Fe(e,o,t){const i=e.slice();return i[15]=o[t],i}function Re(e,o,t){const i=e.slice();return i[15]=o[t],i}function Ge(e,o,t){const i=e.slice();return i[20]=o[t],i}function Ke(e){let o,t,i=e[20]+"",d,b,s,p;function u(){return e[6](e[20])}return{c(){o=c("li"),t=c("button"),d=E(i),b=k(),a(t,"class","tab px-4 py-1 border-none"),a(o,"class","rounded-sm text-charcoal"),m(o,"bg-charcoal",e[0].color===e[20]),m(o,"text-white",e[0].color===e[20])},m(h,f){R(h,o,f),n(o,t),n(t,d),n(o,b),s||(p=re(t,"click",u),s=!0)},p(h,f){e=h,f&17&&m(o,"bg-charcoal",e[0].color===e[20]),f&17&&m(o,"text-white",e[0].color===e[20])},d(h){h&&G(o),s=!1,p()}}}function Ue(e){let o,t,i=e[15]+"",d,b,s,p;function u(){return e[7](e[15])}return{c(){o=c("li"),t=c("button"),d=E(i),b=k(),a(t,"class","tab px-4 py-1 border-none"),a(o,"class","rounded-sm text-charcoal"),m(o,"bg-charcoal",e[0].theme===e[15]),m(o,"text-white",e[0].theme===e[15])},m(h,f){R(h,o,f),n(o,t),n(t,d),n(o,b),s||(p=re(t,"click",u),s=!0)},p(h,f){e=h,f&17&&m(o,"bg-charcoal",e[0].theme===e[15]),f&17&&m(o,"text-white",e[0].theme===e[15])},d(h){h&&G(o),s=!1,p()}}}function We(e){let o,t,i=e[15]+"",d,b,s,p;function u(){return e[8](e[15])}return{c(){o=c("li"),t=c("button"),d=E(i),b=k(),a(t,"class","tab px-4 py-1 border-none"),a(o,"class","rounded-sm text-charcoal"),m(o,"bg-charcoal",e[0].theme===e[15]),m(o,"text-white",e[0].theme===e[15])},m(h,f){R(h,o,f),n(o,t),n(t,d),n(o,b),s||(p=re(t,"click",u),s=!0)},p(h,f){e=h,f&17&&m(o,"bg-charcoal",e[0].theme===e[15]),f&17&&m(o,"text-white",e[0].theme===e[15])},d(h){h&&G(o),s=!1,p()}}}function Je(e){let o,t,i=e[12]+"",d,b,s,p;function u(){return e[9](e[12])}return{c(){o=c("li"),t=c("button"),d=E(i),b=k(),a(t,"class","tab px-4 py-1 border-none"),a(o,"class","rounded-sm text-charcoal"),m(o,"bg-charcoal",e[0].hover===e[12]),m(o,"text-white",e[0].hover===e[12])},m(h,f){R(h,o,f),n(o,t),n(t,d),n(o,b),s||(p=re(t,"click",u),s=!0)},p(h,f){e=h,f&17&&m(o,"bg-charcoal",e[0].hover===e[12]),f&17&&m(o,"text-white",e[0].hover===e[12])},d(h){h&&G(o),s=!1,p()}}}function po(e){let o,t,i,d,b,s,p,u,h,f,$,C,A,g,z,ze,M,Le,N,ae,Te,K,Ee,U,O,W,J,He,he,je,Q,X,Me,ie,Ae,D,P,L,H,ce,Se,be,S,de,se,we,fe,ge,Ne,Y,Z,ee,Oe,pe,De,B,xe,Pe,I=e[4].colors,w=[];for(let r=0;r<I.length;r+=1)w[r]=Ke(Ge(e,I,r));let V=e[4].ignoreTheme,x=[];for(let r=0;r<V.length;r+=1)x[r]=Ue(Re(e,V,r));let q=e[4].themeAware,v=[];for(let r=0;r<q.length;r+=1)v[r]=We(Fe(e,q,r));let F=e[4].hovers,_=[];for(let r=0;r<F.length;r+=1)_[r]=Je(qe(e,F,r));return{c(){o=c("div"),t=c("nav"),i=c("div"),d=c("span"),d.textContent="Color",b=k(),s=c("ul");for(let r=0;r<w.length;r+=1)w[r].c();p=k(),u=c("div"),h=c("div"),f=c("span"),f.textContent="Theme Ignore",$=k(),C=c("ul");for(let r=0;r<x.length;r+=1)x[r].c();A=k(),g=c("div"),z=c("span"),z.textContent="Theme Aware",ze=k(),M=c("ul");for(let r=0;r<v.length;r+=1)v[r].c();Le=k(),N=c("div"),ae=c("span"),ae.textContent="Hover",Te=k(),K=c("ul");for(let r=0;r<_.length;r+=1)_[r].c();Ee=k(),U=c("main"),O=c("div"),W=c("div"),J=c("button"),He=E("\u014D\xA0\xA0\xA0Continue with Hell\u014D"),je=k(),Q=c("div"),X=c("button"),Me=E("\u014D\xA0\xA0\xA0Continue with Hell\u014D"),Ae=k(),D=c("section"),P=c("pre"),L=c("code"),H=c("span"),ce=c("span"),ce.innerHTML='<span class="token punctuation">&lt;</span>button',Se=E(" "),be=c("span"),be.textContent="class",S=c("span"),de=c("span"),de.textContent="=",se=c("span"),se.textContent='"',we=E(e[3]),fe=c("span"),fe.textContent='"',ge=c("span"),ge.textContent=">",Ne=E(`
    \u014D`),Y=c("span"),Y.textContent="&nbsp;",Z=c("span"),Z.textContent="&nbsp;",ee=c("span"),ee.textContent="&nbsp;",Oe=E(`Continue with Hell\u014D
  `),pe=c("span"),pe.innerHTML='<span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span>',De=k(),B=c("button"),B.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" data-v-0e230456=""><path fill="none" d="M0 0h24v24H0z" data-v-0e230456=""></path><path fill="white" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z" data-v-0e230456=""></path></svg>',this.c=te,a(d,"class","label mb-2 font-medium"),a(s,"class","inline-flex space-x-1 border border-charcoal p-0.5 rounded-sm"),a(i,"class","inline-flex flex-col items-center"),a(f,"class","label mb-2 font-medium"),a(C,"class","inline-flex space-x-1 rounded-sm p-0.5"),j(C,"border-left","1px solid #303030"),j(C,"border-top","1px solid #303030"),j(C,"border-bottom","1px solid #303030"),a(h,"class","inline-flex flex-col items-center"),a(z,"class","label mb-2 font-medium"),a(M,"class","inline-flex space-x-1 rounded-l-sm rounded-sm p-0.5 -ml-2"),j(M,"border-right","1px solid #303030"),j(M,"border-top","1px solid #303030"),j(M,"border-bottom","1px solid #303030"),a(g,"class","inline-flex flex-col items-center"),a(ae,"class","label mb-2 font-medium"),a(K,"class","inline-flex space-x-1 border border-charcoal rounded-sm p-0.5"),a(N,"class","inline-flex flex-col items-center"),a(t,"class","w-full py-3 flex items-center justify-around"),j(t,"background","#c1c1c1"),a(J,"class",he=`${e[3]} ${e[2]}`),a(W,"id","light-mode"),a(W,"class","w-1/2 bg-white border border-dashed border-black h-44 flex items-center justify-center"),a(X,"class",ie=`${e[3]} ${e[2]}`),a(Q,"id","dark-mode"),a(Q,"class","w-1/2 bg-dark h-44 border border-dashed border-white flex items-center justify-center"),a(O,"class","flex"),a(ce,"class","token tag"),a(be,"class","token attr-name"),a(de,"class","token punctuation attr-equals"),a(se,"class","token punctuation"),a(fe,"class","token punctuation"),a(S,"class","token attr-value"),a(ge,"class","token punctuation"),a(H,"class","token tag"),j(H,"margin-left","18px"),a(Y,"class","token entity named-entity"),a(Y,"title","\xA0"),a(Z,"class","token entity named-entity"),a(Z,"title","\xA0"),a(ee,"class","token entity named-entity"),a(ee,"title","\xA0"),a(pe,"class","token tag"),a(L,"class","language-markup"),m(L,"flash",e[1]),a(P,"class","language-markup flex justify-center"),a(P,"tabindex","0"),j(P,"margin-top","0px"),a(B,"id","copy-btn"),a(B,"class","absolute top-3 right-3 opacity-60"),a(D,"class","relative -mt-2"),a(o,"id","hello-btn-explorer")},m(r,y){R(r,o,y),n(o,t),n(t,i),n(i,d),n(i,b),n(i,s);for(let l=0;l<w.length;l+=1)w[l].m(s,null);n(t,p),n(t,u),n(u,h),n(h,f),n(h,$),n(h,C);for(let l=0;l<x.length;l+=1)x[l].m(C,null);n(u,A),n(u,g),n(g,z),n(g,ze),n(g,M);for(let l=0;l<v.length;l+=1)v[l].m(M,null);n(t,Le),n(t,N),n(N,ae),n(N,Te),n(N,K);for(let l=0;l<_.length;l+=1)_[l].m(K,null);n(o,Ee),n(o,U),n(U,O),n(O,W),n(W,J),n(J,He),n(O,je),n(O,Q),n(Q,X),n(X,Me),n(U,Ae),n(U,D),n(D,P),n(P,L),n(L,H),n(H,ce),n(H,Se),n(H,be),n(H,S),n(S,de),n(S,se),n(S,we),n(S,fe),n(H,ge),n(L,Ne),n(L,Y),n(L,Z),n(L,ee),n(L,Oe),n(L,pe),n(D,De),n(D,B),xe||(Pe=re(B,"click",e[5]),xe=!0)},p(r,[y]){if(y&17){I=r[4].colors;let l;for(l=0;l<I.length;l+=1){const T=Ge(r,I,l);w[l]?w[l].p(T,y):(w[l]=Ke(T),w[l].c(),w[l].m(s,null))}for(;l<w.length;l+=1)w[l].d(1);w.length=I.length}if(y&17){V=r[4].ignoreTheme;let l;for(l=0;l<V.length;l+=1){const T=Re(r,V,l);x[l]?x[l].p(T,y):(x[l]=Ue(T),x[l].c(),x[l].m(C,null))}for(;l<x.length;l+=1)x[l].d(1);x.length=V.length}if(y&17){q=r[4].themeAware;let l;for(l=0;l<q.length;l+=1){const T=Fe(r,q,l);v[l]?v[l].p(T,y):(v[l]=We(T),v[l].c(),v[l].m(M,null))}for(;l<v.length;l+=1)v[l].d(1);v.length=q.length}if(y&17){F=r[4].hovers;let l;for(l=0;l<F.length;l+=1){const T=qe(r,F,l);_[l]?_[l].p(T,y):(_[l]=Je(T),_[l].c(),_[l].m(K,null))}for(;l<_.length;l+=1)_[l].d(1);_.length=F.length}y&12&&he!==(he=`${r[3]} ${r[2]}`)&&a(J,"class",he),y&12&&ie!==(ie=`${r[3]} ${r[2]}`)&&a(X,"class",ie),y&8&&lo(we,r[3]),y&2&&m(L,"flash",r[1])},i:te,o:te,d(r){r&&G(o),ue(w,r),ue(x,r),ue(v,r),ue(_,r),xe=!1,Pe()}}}function uo(e,o,t){let i;const d={colors:["Black","White"],ignoreTheme:["Light","Dark"],themeAware:["Invert","Static"],hovers:["Default","Glow","Flare","None"]},b={color:"Black",theme:"Light",hover:"Default"};let s=!1,p;const u=g=>{let z=`hello-btn-${g.color.toLowerCase()}-`;switch(g.theme){case"Light":z+="on-light";break;case"Dark":z+="on-dark";break;case"Invert":z+="and-invert";break;case"Static":z+="and-static";break}return g.hover==="Default"?t(2,p=z+"-force"):t(2,p=`hello-btn-hover-${g.hover.toLowerCase()}-force`),setTimeout(()=>{t(2,p=null)},250),g.hover!=="Default"&&(z+=` hello-btn-hover-${g.hover.toLowerCase()}`),z},h=async()=>{t(1,s=!0);const g=`
<button class="${i}">
  \u014D&nbsp;&nbsp;&nbsp;Continue with Hell\u014D
</button>
    `;await navigator.clipboard.writeText(g),setTimeout(()=>{t(1,s=!1)},500)},f=g=>t(0,b.color=g,b),$=g=>t(0,b.theme=g,b),C=g=>t(0,b.theme=g,b),A=g=>t(0,b.hover=g,b);return e.$$.update=()=>{e.$$.dirty&1&&t(3,i=u(b))},[b,s,p,i,d,h,f,$,C,A]}class mo extends Ye{constructor(o){super(),this.shadowRoot.innerHTML=`<style>.hello-btn-black-on-light,.hello-btn-black-on-dark,.hello-btn-white-on-light,.hello-btn-white-on-dark,.hello-btn-white-and-invert,.hello-btn-black-and-invert,.hello-btn-black-and-static,.hello-btn-white-and-static{padding:0.9rem 2rem;border-radius:0.4rem;font-size:1rem;cursor:pointer;font-weight:600}.hello-btn-black-on-light{background:#303030;color:white;box-shadow:0 0 0 1px #303030}.hello-btn-white-on-light{background:white;color:#303030;box-shadow:0 0 0 1px #303030}.hello-btn-black-on-dark{background:#303030;color:white;box-shadow:0 0 0 1px rgb(88,88,88)}.hello-btn-white-on-dark{background:rgb(212,212,212);color:#303030;box-shadow:0 0 0 1px rgb(212,212,212)}#dark-mode .hello-btn-black-and-static{background:rgb(48,48,48);color:rgba(212,212,212);box-shadow:0 0 0 1px rgb(88,88,88)}#dark-mode .hello-btn-white-and-static{background:rgba(212,212,212);color:rgba(48,48,48);box-shadow:0 0 0 1px rgba(212,212,212)}#light-mode .hello-btn-black-and-static{background:rgb(48,48,48);color:white;box-shadow:0 0 0 1px rgb(48,48,48)}#light-mode .hello-btn-white-and-static{background:white;color:rgba(48,48,48);box-shadow:0 0 0 1px rgb(48,48,48)}@media(prefers-color-scheme: dark){}@media(prefers-color-scheme: light){}#dark-mode .hello-btn-black-and-invert{background:rgba(212,212,212);color:rgb(48,48,48);box-shadow:0 0 0 1px rgb(212,212,212)}#dark-mode .hello-btn-white-and-invert{background:rgba(48,48,48);color:rgba(212,212,212);box-shadow:0 0 0 1px rgba(88,88,88)}#light-mode .hello-btn-black-and-invert{background:rgb(48,48,48);color:white;box-shadow:0 0 0 1px rgb(48,48,48)}#light-mode .hello-btn-white-and-invert{background:white;color:rgba(48,48,48);box-shadow:0 0 0 1px rgb(48,48,48)}@media(prefers-color-scheme: dark){}@media(prefers-color-scheme: light){}#dark-mode .hello-btn-black-and-invert:hover{box-shadow:0 0 0 2px rgb(212,212,212)}#dark-mode .hello-btn-white-and-invert:hover{box-shadow:0 0 0 2px rgba(88,88,88)}#light-mode .hello-btn-black-and-invert:hover{box-shadow:0 0 0 2px rgb(48,48,48)}#light-mode .hello-btn-white-and-invert:hover{box-shadow:0 0 0 2px rgb(88,88,88)}@media(prefers-color-scheme: dark){}@media(prefers-color-scheme: light){}.hello-btn-black-on-light.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(128,128,128, 0.7)}.hello-btn-white-on-light.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(128,128,128, 0.7)}.hello-btn-black-on-dark.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(128,128,128, 0.7)}.hello-btn-white-on-dark.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(212,212,212,0.7)}#light-mode .hello-btn-black-and-invert.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#dark-mode .hello-btn-black-and-invert.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(212,212,212,0.7)}#light-mode .hello-btn-white-and-invert.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#dark-mode .hello-btn-white-and-invert.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#light-mode .hello-btn-black-and-static.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#dark-mode .hello-btn-black-and-static.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#light-mode .hello-btn-white-and-static.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#dark-mode .hello-btn-white-and-static.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(212,212,212,0.7)}@media(prefers-color-scheme: dark){}@media(prefers-color-scheme: light){}#dark-mode .hello-btn-black-and-static:hover{box-shadow:0 0 0 2px rgb(88,88,88)}#dark-mode .hello-btn-white-and-static:hover{box-shadow:0 0 0 2px rgba(212,212,212)}#light-mode .hello-btn-black-and-static:hover{box-shadow:0 0 0 2px rgb(48,48,48)}#light-mode .hello-btn-white-and-static:hover{box-shadow:0 0 0 2px rgb(48,48,48)}@media(prefers-color-scheme: dark){}@media(prefers-color-scheme: light){}.hello-btn-black-on-light:hover{box-shadow:0 0 0 2px rgb(30,30,30)}.hello-btn-white-on-light:hover{box-shadow:0 0 0 2px rgb(30,30,30)}.hello-btn-black-on-dark:hover{box-shadow:0 0 0 2px rgb(88,88,88)}.hello-btn-white-on-dark:hover{box-shadow:0 0 0 2px rgb(212,212,212)}.hello-btn-hover-flare{position:relative;z-index:0}.hello-btn-black-on-dark.hello-btn-hover-flare:hover{box-shadow:0 0 0 1px rgb(88,88,88)}.hello-btn-white-on-dark.hello-btn-hover-flare:hover{box-shadow:0 0 0 1px rgb(212,212,212)}.hello-btn-black-on-light.hello-btn-hover-flare:hover{box-shadow:0 0 0 1px rgb(48,48,48)}.hello-btn-white-on-light.hello-btn-hover-flare:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#light-mode .hello-btn-black-and-invert.hello-btn-hover-flare:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-black-and-invert.hello-btn-hover-flare:hover{box-shadow:0 0 0 1px rgb(212,212,212)}#light-mode .hello-btn-black-and-static.hello-btn-hover-flare:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-black-and-static.hello-btn-hover-flare:hover{box-shadow:0 0 0 1px rgb(88,88,88)}#light-mode .hello-btn-white-and-invert.hello-btn-hover-flare:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-white-and-invert.hello-btn-hover-flare:hover{box-shadow:0 0 0 1px rgb(88,88,88)}#light-mode .hello-btn-white-and-static.hello-btn-hover-flare:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-white-and-static.hello-btn-hover-flare:hover{box-shadow:0 0 0 1px rgb(212,212,212)}@media(prefers-color-scheme: dark){}@media(prefers-color-scheme: light){}.hello-btn-hover-flare:before{content:"";background:linear-gradient( 45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000 );position:absolute;top:-2px;left:-2px;background-size:400%;z-index:-1;filter:blur(5px);width:calc(100% + 4px);height:calc(100% + 4px);animation:flare-animation 20s linear infinite;opacity:0;transition:opacity 0.3s ease-in-out;border-radius:0.4rem}.hello-btn-hover-flare:hover:before{opacity:1}.hello-btn-hover-flare-dark:after{z-index:-1;content:"";position:absolute;width:100%;height:100%;background:#303030;left:0;top:0;border-radius:0.4rem}.hello-btn-hover-flare:after{z-index:-1;content:"";position:absolute;width:100%;height:100%;left:0;top:0;border-radius:0.4rem}.hello-btn-black-on-light:after{background:#303030}.hello-btn-black-on-dark:after{background:#303030}.hello-btn-white-on-light:after{background:white}.hello-btn-white-on-dark:after{background:rgb(212,212,212)}#dark-mode .hello-btn-black-and-invert:after{background:rgb(212,212,212)}#light-mode .hello-btn-black-and-invert:after{background:rgb(48,48,48)}#light-mode .hello-btn-black-and-static:after{background:rgb(48,48,48)}#dark-mode .hello-btn-black-and-static:after{background:rgb(48,48,48)}#light-mode .hello-btn-white-and-static:after{background:white}#light-mode .hello-btn-white-and-invert:after{background:white}#dark-mode .hello-btn-white-and-invert:after{background:rgb(48,48,48)}#dark-mode .hello-btn-white-and-static:after{background:rgb(212,212,212)}@media(prefers-color-scheme: dark){}@media(prefers-color-scheme: light){}@keyframes flare-animation{0%{background-position:0 0}50%{background-position:400% 0}100%{background-position:0 0}}.hello-btn-black-on-dark.hello-btn-hover-none:hover{box-shadow:0 0 0 1px rgb(88,88,88)}.hello-btn-white-on-dark.hello-btn-hover-none:hover{box-shadow:0 0 0 1px rgb(212,212,212)}.hello-btn-black-on-light.hello-btn-hover-none:hover{box-shadow:0 0 0 1px rgb(48,48,48)}.hello-btn-white-on-light.hello-btn-hover-none:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#light-mode .hello-btn-black-and-invert.hello-btn-hover-none:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-black-and-invert.hello-btn-hover-none:hover{box-shadow:0 0 0 1px rgb(212,212,212)}#light-mode .hello-btn-black-and-static.hello-btn-hover-none:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-black-and-static.hello-btn-hover-none:hover{box-shadow:0 0 0 1px rgb(88,88,88)}#light-mode .hello-btn-white-and-invert.hello-btn-hover-none:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-white-and-invert.hello-btn-hover-none:hover{box-shadow:0 0 0 1px rgb(88,88,88)}#light-mode .hello-btn-white-and-static.hello-btn-hover-none:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-white-and-static.hello-btn-hover-none:hover{box-shadow:0 0 0 1px rgb(212,212,212)}@media(prefers-color-scheme: dark){}@media(prefers-color-scheme: light){}button{border:none;cursor:pointer;font-size:1rem;background:transparent}button:active{background:none}.text-charcoal{color:#303030}.bg-charcoal{background-color:#303030}.border-charcoal{border:1px solid #303030}.text-white{color:white}.bg-dark{background-color:#151515}.bg-code{background-color:#282c34
  }.flash{animation:flash-animation 0.5s ease-in-out}@keyframes flash-animation{0%{opacity:1}50%{opacity:0.5}100%{opacity:1}}.hello-btn-black-on-light.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128, 0.7)}.hello-btn-white-on-light.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128, 0.7)}.hello-btn-black-on-dark.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128, 0.7)}.hello-btn-white-on-dark.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(212,212,212,0.7)}#light-mode .hello-btn-black-and-invert.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#dark-mode .hello-btn-black-and-invert.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(212,212,212,0.7)}#light-mode .hello-btn-white-and-invert.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#dark-mode .hello-btn-white-and-invert.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#light-mode .hello-btn-black-and-static.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#dark-mode .hello-btn-black-and-static.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#light-mode .hello-btn-white-and-static.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#dark-mode .hello-btn-white-and-static.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(212,212,212,0.7)}#dark-mode .hello-btn-black-and-invert-force{box-shadow:0 0 0 2px rgb(212,212,212)}#dark-mode .hello-btn-white-and-invert-force{box-shadow:0 0 0 2px rgba(88,88,88)}#light-mode .hello-btn-black-and-invert-force{box-shadow:0 0 0 2px rgb(48,48,48)}#light-mode .hello-btn-white-and-invert-force{box-shadow:0 0 0 2px rgb(88,88,88)}#dark-mode .hello-btn-black-and-static-force{box-shadow:0 0 0 2px rgb(88,88,88)}#dark-mode .hello-btn-white-and-static-force{box-shadow:0 0 0 2px rgba(212,212,212)}#light-mode .hello-btn-black-and-static-force{box-shadow:0 0 0 2px rgb(48,48,48)}#light-mode .hello-btn-white-and-static-force{box-shadow:0 0 0 2px rgb(48,48,48)}.hello-btn-black-on-light-force{box-shadow:0 0 0 2px rgb(30,30,30)}.hello-btn-white-on-light-force{box-shadow:0 0 0 2px rgb(30,30,30)}.hello-btn-black-on-dark-force{box-shadow:0 0 0 2px rgb(88,88,88)}.hello-btn-white-on-dark-force{box-shadow:0 0 0 2px rgb(212,212,212)}.hello-btn-hover-flare-force{position:relative;z-index:0}.hello-btn-black-on-dark.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(88,88,88)}.hello-btn-white-on-dark.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(212,212,212)}.hello-btn-black-on-light.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(48,48,48)}.hello-btn-white-on-light.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(48,48,48)}#light-mode .hello-btn-black-and-invert.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-black-and-invert.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(212,212,212)}#light-mode .hello-btn-black-and-static.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-black-and-static.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(88,88,88)}#light-mode .hello-btn-white-and-invert.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-white-and-invert.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(88,88,88)}#light-mode .hello-btn-white-and-static.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-white-and-static.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(212,212,212)}.hello-btn-hover-flare-force:before{content:"";background:linear-gradient( 45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000 );position:absolute;top:-2px;left:-2px;background-size:400%;z-index:-1;filter:blur(5px);width:calc(100% + 4px);height:calc(100% + 4px);animation:flare-animation 20s linear infinite;opacity:0;transition:opacity 0.3s ease-in-out;border-radius:0.4rem}.hello-btn-hover-flare-force:before{opacity:1}.hello-btn-hover-flare-dark-force:after{z-index:-1;content:"";position:absolute;width:100%;height:100%;background:#303030;left:0;top:0;border-radius:0.4rem}.hello-btn-hover-flare-force:after{z-index:-1;content:"";position:absolute;width:100%;height:100%;left:0;top:0;border-radius:0.4rem}.hello-btn-black-on-light-force:after{background:#303030}.hello-btn-black-on-dark-force:after{background:#303030}.hello-btn-white-on-light-force:after{background:white}.hello-btn-white-on-dark-force:after{background:rgb(212,212,212)}#dark-mode .hello-btn-black-and-invert:after{background:rgb(212,212,212)}#light-mode .hello-btn-black-and-invert:after{background:rgb(48,48,48)}#light-mode .hello-btn-black-and-static:after{background:rgb(48,48,48)}#dark-mode .hello-btn-black-and-static:after{background:rgb(48,48,48)}#light-mode .hello-btn-white-and-static:after{background:white}#light-mode .hello-btn-white-and-invert:after{background:white}#dark-mode .hello-btn-white-and-invert:after{background:rgb(48,48,48)}#dark-mode .hello-btn-white-and-static:after{background:rgb(212,212,212)}.flex{display:flex}.inline-flex{display:inline-flex}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-around{justify-content:space-around}.justify-center{justify-content:center}.px-4{padding-left:0.6rem;padding-right:0.66rem
    }.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.p-0\\.5{padding:0.125rem}.w-full{width:100%}.w-1\\/2{width:50%}.bg-white{background:white}.h-44{height:11rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.mb-2{margin-bottom:0.5rem}ul{margin:0;padding:0}ul li{margin:0;padding:0;list-style:none}.absolute{position:absolute}.relative{position:relative}.top-3{top:0.75rem}.right-3{right:0.75rem}.opacity-60{opacity:0.6}.opacity-100{opacity:1}#hello-btn-explorer{font-family:sans-serif}.text-white{color:white}.text-white button{color:white}.rounded-sm{border-radius:.125rem
    }.font-medium{font-weight:500}.-ml-2{margin-left:-0.5rem}#copy-btn:hover{opacity:1}.label{font-size:0.88rem;font-weight:500;color:black}.tab{font-size:0.92rem}code[class*=language-],pre[class*=language-]{color:#ccc;background:0 0;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#2d2d2d}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.block-comment,.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#999}.token.punctuation{color:#ccc}.token.attr-name,.token.deleted,.token.namespace,.token.tag{color:#e2777a}.token.function-name{color:#6196cc}.token.boolean,.token.function,.token.number{color:#f08d49}.token.class-name,.token.constant,.token.property,.token.symbol{color:#f8c555}.token.atrule,.token.builtin,.token.important,.token.keyword,.token.selector{color:#cc99cd}.token.attr-value,.token.char,.token.regex,.token.string,.token.variable{color:#7ec699}.token.entity,.token.operator,.token.url{color:#67cdcc}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.token.inserted{color:green}</style>`,go(this,{target:this.shadowRoot,props:no(this.attributes),customElement:!0},uo,po,eo,{},null),o&&o.target&&R(o.target,this,o.anchor)}}customElements.define("hello-btn-explorer",mo);
