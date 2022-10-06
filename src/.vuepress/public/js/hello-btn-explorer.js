const mt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&c(b)}).observe(document,{childList:!0,subtree:!0});function o(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerpolicy&&(h.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?h.credentials="include":d.crossorigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(d){if(d.ep)return;d.ep=!0;const h=o(d);fetch(d.href,h)}};mt();function ie(){}function Te(e){return e()}function tt(){return Object.create(null)}function he(e){e.forEach(Te)}function gt(e){return typeof e=="function"}function kt(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function wt(e){return Object.keys(e).length===0}function n(e,t){e.appendChild(t)}function P(e,t,o){e.insertBefore(t,o||null)}function I(e){e.parentNode.removeChild(e)}function re(e,t){for(let o=0;o<e.length;o+=1)e[o]&&e[o].d(t)}function i(e){return document.createElement(e)}function _(e){return document.createTextNode(e)}function k(){return _(" ")}function ee(e,t,o,c){return e.addEventListener(t,o,c),()=>e.removeEventListener(t,o,c)}function r(e,t,o){o==null?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function vt(e){return Array.from(e.childNodes)}function xt(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function w(e,t,o,c){o===null?e.style.removeProperty(t):e.style.setProperty(t,o,c?"important":"")}function g(e,t,o){e.classList[o?"add":"remove"](t)}function _t(e){const t={};for(const o of e)t[o.name]=o.value;return t}let je;function ce(e){je=e}const se=[],ot=[],De=[],lt=[],yt=Promise.resolve();let Ae=!1;function Ct(){Ae||(Ae=!0,yt.then(pt))}function He(e){De.push(e)}const Me=new Set;let Be=0;function pt(){const e=je;do{for(;Be<se.length;){const t=se[Be];Be++,ce(t),Et(t.$$)}for(ce(null),se.length=0,Be=0;ot.length;)ot.pop()();for(let t=0;t<De.length;t+=1){const o=De[t];Me.has(o)||(Me.add(o),o())}De.length=0}while(se.length);for(;lt.length;)lt.pop()();Ae=!1,Me.clear(),ce(e)}function Et(e){if(e.fragment!==null){e.update(),he(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(He)}}const Bt=new Set;function Dt(e,t){e&&e.i&&(Bt.delete(e),e.i(t))}function zt(e,t,o,c){const{fragment:d,on_mount:h,on_destroy:b,after_update:p}=e.$$;d&&d.m(t,o),c||He(()=>{const u=h.map(Te).filter(gt);b?b.push(...u):he(u),e.$$.on_mount=[]}),p.forEach(He)}function $t(e,t){const o=e.$$;o.fragment!==null&&(he(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function Lt(e,t){e.$$.dirty[0]===-1&&(se.push(e),Ct(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Mt(e,t,o,c,d,h,b,p=[-1]){const u=je;ce(e);const s=e.$$={fragment:null,ctx:null,props:h,update:ie,not_equal:d,bound:tt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:tt(),dirty:p,skip_bound:!1,root:t.target||u.$$.root};b&&b(s.root);let f=!1;if(s.ctx=o?o(e,t.props||{},($,L,...S)=>{const M=S.length?S[0]:L;return s.ctx&&d(s.ctx[$],s.ctx[$]=M)&&(!s.skip_bound&&s.bound[$]&&s.bound[$](M),f&&Lt(e,$)),L}):[],s.update(),f=!0,he(s.before_update),s.fragment=c?c(s.ctx):!1,t.target){if(t.hydrate){const $=vt(t.target);s.fragment&&s.fragment.l($),$.forEach(I)}else s.fragment&&s.fragment.c();t.intro&&Dt(e.$$.fragment),zt(e,t.target,t.anchor,t.customElement),pt()}ce(u)}let ut;typeof HTMLElement=="function"&&(ut=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(Te).filter(gt);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(e,t,o){this[e]=o}disconnectedCallback(){he(this.$$.on_disconnect)}$destroy(){$t(this,1),this.$destroy=ie}$on(e,t){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(t),()=>{const c=o.indexOf(t);c!==-1&&o.splice(c,1)}}$set(e){this.$$set&&!wt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});function nt(e,t,o){const c=e.slice();return c[12]=t[o],c}function at(e,t,o){const c=e.slice();return c[15]=t[o],c}function rt(e,t,o){const c=e.slice();return c[18]=t[o],c}function st(e,t,o){const c=e.slice();return c[18]=t[o],c}function it(e,t,o){const c=e.slice();return c[23]=t[o],c}function ct(e){let t,o,c=e[23]+"",d,h,b,p;function u(){return e[6](e[23])}return{c(){t=i("li"),o=i("button"),d=_(c),h=k(),r(o,"class","tab px-4 py-1 border-none"),g(o,"selected",e[0].color===e[23]),r(t,"class","rounded-sm text-charcoal"),g(t,"bg-charcoal",e[0].color===e[23]),g(t,"text-white",e[0].color===e[23])},m(s,f){P(s,t,f),n(t,o),n(o,d),n(t,h),b||(p=ee(o,"click",u),b=!0)},p(s,f){e=s,f&17&&g(o,"selected",e[0].color===e[23]),f&17&&g(t,"bg-charcoal",e[0].color===e[23]),f&17&&g(t,"text-white",e[0].color===e[23])},d(s){s&&I(t),b=!1,p()}}}function ht(e){let t,o,c=e[18]+"",d,h,b,p;function u(){return e[7](e[18])}return{c(){t=i("li"),o=i("button"),d=_(c),h=k(),r(o,"class","tab px-4 py-1 border-none"),g(o,"selected",e[0].theme===e[18]),r(t,"class","rounded-sm text-charcoal"),g(t,"bg-charcoal",e[0].theme===e[18]),g(t,"text-white",e[0].theme===e[18])},m(s,f){P(s,t,f),n(t,o),n(o,d),n(t,h),b||(p=ee(o,"click",u),b=!0)},p(s,f){e=s,f&17&&g(o,"selected",e[0].theme===e[18]),f&17&&g(t,"bg-charcoal",e[0].theme===e[18]),f&17&&g(t,"text-white",e[0].theme===e[18])},d(s){s&&I(t),b=!1,p()}}}function dt(e){let t,o,c=e[18]+"",d,h,b,p;function u(){return e[8](e[18])}return{c(){t=i("li"),o=i("button"),d=_(c),h=k(),r(o,"class","tab px-4 py-1 border-none"),g(o,"selected",e[0].theme===e[18]),r(t,"class","rounded-sm text-charcoal"),g(t,"bg-charcoal",e[0].theme===e[18]),g(t,"text-white",e[0].theme===e[18])},m(s,f){P(s,t,f),n(t,o),n(o,d),n(t,h),b||(p=ee(o,"click",u),b=!0)},p(s,f){e=s,f&17&&g(o,"selected",e[0].theme===e[18]),f&17&&g(t,"bg-charcoal",e[0].theme===e[18]),f&17&&g(t,"text-white",e[0].theme===e[18])},d(s){s&&I(t),b=!1,p()}}}function bt(e){let t,o,c=e[15]+"",d,h,b,p;function u(){return e[9](e[15])}return{c(){t=i("li"),o=i("button"),d=_(c),h=k(),r(o,"class","tab px-4 py-1 border-none"),g(o,"selected",e[0].hover===e[15]),r(t,"class","rounded-sm text-charcoal"),g(t,"bg-charcoal",e[0].hover===e[15]),g(t,"text-white",e[0].hover===e[15])},m(s,f){P(s,t,f),n(t,o),n(o,d),n(t,h),b||(p=ee(o,"click",u),b=!0)},p(s,f){e=s,f&17&&g(o,"selected",e[0].hover===e[15]),f&17&&g(t,"bg-charcoal",e[0].hover===e[15]),f&17&&g(t,"text-white",e[0].hover===e[15])},d(s){s&&I(t),b=!1,p()}}}function ft(e){let t,o,c=e[12]+"",d,h,b,p;function u(){return e[10](e[12])}return{c(){t=i("li"),o=i("button"),d=_(c),h=k(),r(o,"class","tab px-4 py-1 border-none"),g(o,"selected",e[0].state===e[12]),r(t,"class","rounded-sm text-charcoal"),g(t,"bg-charcoal",e[0].state===e[12]),g(t,"text-white",e[0].state===e[12])},m(s,f){P(s,t,f),n(t,o),n(o,d),n(t,h),b||(p=ee(o,"click",u),b=!0)},p(s,f){e=s,f&17&&g(o,"selected",e[0].state===e[12]),f&17&&g(t,"bg-charcoal",e[0].state===e[12]),f&17&&g(t,"text-white",e[0].state===e[12])},d(s){s&&I(t),b=!1,p()}}}function At(e){let t,o,c,d,h,b,p,u,s,f,$,L,S,M,m,A,j,Ve,F,de,Se,te,qe,R,be,Ne,oe,Oe,le,q,N,G,fe,ge,Pe,ze,Ie,O,K,pe,ue,Fe,me,Re,U,T,x,ne,Ge,H,ke,Ke,we,V,ve,xe,Ue,$e,_e,We,ye,Je,ae,Qe,Ce,Xe,Ee,Ye,Ze,W,Le,et,J=e[4].colors,y=[];for(let a=0;a<J.length;a+=1)y[a]=ct(it(e,J,a));let Q=e[4].ignoreTheme,C=[];for(let a=0;a<Q.length;a+=1)C[a]=ht(st(e,Q,a));let X=e[4].themeAware,E=[];for(let a=0;a<X.length;a+=1)E[a]=dt(rt(e,X,a));let Y=e[4].hovers,B=[];for(let a=0;a<Y.length;a+=1)B[a]=bt(at(e,Y,a));let Z=e[4].states,D=[];for(let a=0;a<Z.length;a+=1)D[a]=ft(nt(e,Z,a));return{c(){t=i("div"),o=i("nav"),c=i("div"),d=i("span"),d.textContent="Color",h=k(),b=i("ul");for(let a=0;a<y.length;a+=1)y[a].c();p=k(),u=i("div"),s=i("div"),f=i("span"),f.textContent="Theme Ignore",$=k(),L=i("ul");for(let a=0;a<C.length;a+=1)C[a].c();S=k(),M=i("div"),m=i("span"),m.textContent="Theme Aware",A=k(),j=i("ul");for(let a=0;a<E.length;a+=1)E[a].c();Ve=k(),F=i("div"),de=i("span"),de.textContent="Hover",Se=k(),te=i("ul");for(let a=0;a<B.length;a+=1)B[a].c();qe=k(),R=i("div"),be=i("span"),be.textContent="State",Ne=k(),oe=i("ul");for(let a=0;a<D.length;a+=1)D[a].c();Oe=k(),le=i("main"),q=i("div"),N=i("div"),G=i("div"),fe=i("button"),Pe=k(),ze=i("button"),Ie=k(),O=i("div"),K=i("div"),pe=i("button"),Fe=k(),me=i("button"),Re=k(),U=i("section"),T=i("pre"),x=i("code"),ne=i("span"),ne.innerHTML='<span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span>',Ge=_(`
  `),H=i("span"),ke=i("span"),ke.innerHTML='<span class="token punctuation">&lt;</span>button',Ke=_(`
      `),we=i("span"),we.textContent="class",V=i("span"),ve=i("span"),ve.textContent="=",xe=i("span"),xe.textContent='"',Ue=_("hello-btn "),$e=_(e[3]),_e=i("span"),_e.textContent='"',We=_(`
    `),ye=i("span"),ye.textContent="/>",Je=_(`
  `),ae=i("span"),ae.innerHTML='<span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello-about<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span>',Qe=_(`
  `),Ce=i("span"),Ce.textContent="<",Xe=_("/"),Ee=i("span"),Ee.textContent="div",Ye=_(">"),Ze=k(),W=i("button"),W.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" data-v-0e230456=""><path fill="none" d="M0 0h24v24H0z" data-v-0e230456=""></path><path fill="white" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z" data-v-0e230456=""></path></svg>',this.c=ie,r(d,"class","label mb-2 font-medium"),r(b,"class","inline-flex space-x-1 border border-charcoal p-0.5 rounded-sm"),r(c,"class","inline-flex flex-col items-center"),r(f,"class","label mb-2 font-medium"),r(L,"class","inline-flex space-x-1 rounded-sm p-0.5"),w(L,"border-left","1px solid #303030"),w(L,"border-top","1px solid #303030"),w(L,"border-bottom","1px solid #303030"),r(s,"class","inline-flex flex-col items-center"),r(m,"class","label mb-2 font-medium"),r(j,"class","inline-flex space-x-1 rounded-l-sm rounded-sm p-0.5 -ml-2"),w(j,"border-right","1px solid #303030"),w(j,"border-top","1px solid #303030"),w(j,"border-bottom","1px solid #303030"),r(M,"class","inline-flex flex-col items-center"),r(de,"class","label mb-2 font-medium"),r(te,"class","inline-flex space-x-1 border border-charcoal rounded-sm p-0.5"),r(F,"class","inline-flex flex-col items-center"),r(be,"class","label mb-2 font-medium"),r(oe,"class","inline-flex space-x-1 border border-charcoal rounded-sm p-0.5"),r(R,"class","inline-flex flex-col items-center"),r(o,"class","w-full py-3 flex items-center justify-around"),w(o,"background","#c1c1c1"),r(fe,"class",ge=`hello-btn ${e[3]} ${e[2]}`),r(ze,"class","hello-about"),r(G,"class","hello-container"),r(N,"id","light-mode"),r(N,"class","w-1/2 bg-white border border-dashed border-black h-44 flex justify-center"),w(N,"align-items","start"),w(N,"padding-top","20px"),r(pe,"class",ue=`hello-btn ${e[3]} ${e[2]}`),r(me,"class","hello-about"),w(me,"color","white"),r(K,"class","hello-container"),r(O,"id","dark-mode"),r(O,"class","w-1/2 bg-dark h-44 border border-dashed border-white flex justify-center"),w(O,"align-items","start"),w(O,"padding-top","20px"),r(q,"id","preview-container"),r(q,"class","flex"),r(ne,"class","token tag"),w(ne,"margin-left","18px"),r(ke,"class","token tag"),r(we,"class","token attr-name"),r(ve,"class","token punctuation attr-equals"),r(xe,"class","token punctuation"),r(_e,"class","token punctuation"),r(V,"class","token attr-value"),r(ye,"class","token punctuation"),r(H,"class","token tag"),w(H,"margin-left","18px"),r(ae,"class","token tag"),w(ae,"margin-left","18px"),r(Ce,"class","token punctuation"),r(Ee,"class","token tag"),r(x,"class","language-markup"),g(x,"flash",e[1]),r(T,"class","language-markup"),r(T,"tabindex","0"),w(T,"margin-top","0px"),w(T,"padding-left","5px"),w(T,"font-weight","600"),w(T,"font-size","0.85em"),r(W,"id","copy-btn"),r(W,"class","absolute top-3 right-3 opacity-60"),r(U,"class","relative -mt-2"),r(t,"id","hello-btn-explorer")},m(a,v){P(a,t,v),n(t,o),n(o,c),n(c,d),n(c,h),n(c,b);for(let l=0;l<y.length;l+=1)y[l].m(b,null);n(o,p),n(o,u),n(u,s),n(s,f),n(s,$),n(s,L);for(let l=0;l<C.length;l+=1)C[l].m(L,null);n(u,S),n(u,M),n(M,m),n(M,A),n(M,j);for(let l=0;l<E.length;l+=1)E[l].m(j,null);n(o,Ve),n(o,F),n(F,de),n(F,Se),n(F,te);for(let l=0;l<B.length;l+=1)B[l].m(te,null);n(o,qe),n(o,R),n(R,be),n(R,Ne),n(R,oe);for(let l=0;l<D.length;l+=1)D[l].m(oe,null);n(t,Oe),n(t,le),n(le,q),n(q,N),n(N,G),n(G,fe),n(G,Pe),n(G,ze),n(q,Ie),n(q,O),n(O,K),n(K,pe),n(K,Fe),n(K,me),n(le,Re),n(le,U),n(U,T),n(T,x),n(x,ne),n(x,Ge),n(x,H),n(H,ke),n(H,Ke),n(H,we),n(H,V),n(V,ve),n(V,xe),n(V,Ue),n(V,$e),n(V,_e),n(H,We),n(H,ye),n(x,Je),n(x,ae),n(x,Qe),n(x,Ce),n(x,Xe),n(x,Ee),n(x,Ye),n(U,Ze),n(U,W),Le||(et=ee(W,"click",e[5]),Le=!0)},p(a,[v]){if(v&17){J=a[4].colors;let l;for(l=0;l<J.length;l+=1){const z=it(a,J,l);y[l]?y[l].p(z,v):(y[l]=ct(z),y[l].c(),y[l].m(b,null))}for(;l<y.length;l+=1)y[l].d(1);y.length=J.length}if(v&17){Q=a[4].ignoreTheme;let l;for(l=0;l<Q.length;l+=1){const z=st(a,Q,l);C[l]?C[l].p(z,v):(C[l]=ht(z),C[l].c(),C[l].m(L,null))}for(;l<C.length;l+=1)C[l].d(1);C.length=Q.length}if(v&17){X=a[4].themeAware;let l;for(l=0;l<X.length;l+=1){const z=rt(a,X,l);E[l]?E[l].p(z,v):(E[l]=dt(z),E[l].c(),E[l].m(j,null))}for(;l<E.length;l+=1)E[l].d(1);E.length=X.length}if(v&17){Y=a[4].hovers;let l;for(l=0;l<Y.length;l+=1){const z=at(a,Y,l);B[l]?B[l].p(z,v):(B[l]=bt(z),B[l].c(),B[l].m(te,null))}for(;l<B.length;l+=1)B[l].d(1);B.length=Y.length}if(v&17){Z=a[4].states;let l;for(l=0;l<Z.length;l+=1){const z=nt(a,Z,l);D[l]?D[l].p(z,v):(D[l]=ft(z),D[l].c(),D[l].m(oe,null))}for(;l<D.length;l+=1)D[l].d(1);D.length=Z.length}v&12&&ge!==(ge=`hello-btn ${a[3]} ${a[2]}`)&&r(fe,"class",ge),v&12&&ue!==(ue=`hello-btn ${a[3]} ${a[2]}`)&&r(pe,"class",ue),v&8&&xt($e,a[3]),v&2&&g(x,"flash",a[1])},i:ie,o:ie,d(a){a&&I(t),re(y,a),re(C,a),re(E,a),re(B,a),re(D,a),Le=!1,et()}}}function Ht(e,t,o){let c;const d={colors:["Black","White"],ignoreTheme:["Light","Dark"],themeAware:["Invert","Static"],hovers:["Default","Glow","Flare","None"],states:["Loading"]},h={color:"Black",theme:"Light",hover:"Default",state:""};let b=!1,p;const u=m=>{let A=`hello-btn-${m.color.toLowerCase()}-`;switch(m.theme){case"Light":A+="on-light";break;case"Dark":A+="on-dark";break;case"Invert":A+="and-invert";break;case"Static":A+="and-static";break}switch(m.state||(m.hover==="Default"?o(2,p=A+"-force"):o(2,p=`hello-btn-hover-${m.hover.toLowerCase()}-force`),setTimeout(()=>{o(2,p=null)},250)),m.hover!=="Default"&&(A+=` hello-btn-hover-${m.hover.toLowerCase()}`),m.state){case"Loading":A+=" hello-btn-loader"}return A},s=async()=>{o(1,b=!0);const m=`
      <div class="hello-container">
        <button class="hello-btn ${c}"/>
        <button class="hello-about"/>
      </div>
    `;await navigator.clipboard.writeText(m),setTimeout(()=>{o(1,b=!1)},500)},f=m=>o(0,h.color=m,h),$=m=>o(0,h.theme=m,h),L=m=>o(0,h.theme=m,h),S=m=>o(0,h.hover=m,h),M=m=>o(0,h.state=h.state?"":m,h);return e.$$.update=()=>{e.$$.dirty&1&&o(3,c=u(h))},[h,b,p,c,d,s,f,$,L,S,M]}class Tt extends ut{constructor(t){super(),this.shadowRoot.innerHTML=`<style>@import url("https://cdn.hello.coop/css/hello-btn.css");#dark-mode .hello-btn-black-and-static{background:rgb(48,48,48);color:rgba(212,212,212);box-shadow:0 0 0 2px rgb(88,88,88)}#dark-mode .hello-btn-white-and-static{background:rgba(212,212,212);color:rgba(48,48,48);box-shadow:0 0 0 1px rgba(212,212,212)}#light-mode .hello-btn-black-and-static{background:rgb(48,48,48);color:white;box-shadow:0 0 0 1px rgb(48,48,48)}#light-mode .hello-btn-white-and-static{background:white;color:rgba(48,48,48);box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-black-and-invert{background:rgba(212,212,212);color:rgb(48,48,48);box-shadow:0 0 0 1px rgb(212,212,212)}#dark-mode .hello-btn-white-and-invert{background:rgba(48,48,48);color:rgba(212,212,212);box-shadow:0 0 0 2px rgba(88,88,88)}#light-mode .hello-btn-black-and-invert{background:rgb(48,48,48);color:white;box-shadow:0 0 0 1px rgb(48,48,48)}#light-mode .hello-btn-white-and-invert{background:white;color:rgba(48,48,48);box-shadow:0 0 0 1px rgb(48,48,48)}#light-mode .hello-btn-black-and-invert.hello-btn-loader::after{background-image:url("data:image/svg+xml,%3Csvg class='animate-spin' style='color: rgb(255,255, 255);' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cstyle%3E .animate-spin%7Banimation: spin 1s linear infinite;%7D @keyframes spin %7B from %7B transform: rotate(0deg); %7D to %7B transform: rotate(360deg); %7D %7D %3C/style%3E%3Ccircle style='opacity: 0.25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4'%3E%3C/circle%3E%3Cpath class='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'%3E%3C/path%3E%3C/svg%3E")}#dark-mode .hello-btn-black-and-invert:hover{box-shadow:0 0 0 2px rgb(212,212,212)}#dark-mode .hello-btn-white-and-invert:hover{box-shadow:0 0 0 3px rgba(88,88,88)}#light-mode .hello-btn-black-and-invert:hover{box-shadow:0 0 0 2px rgb(48,48,48)}#light-mode .hello-btn-white-and-invert:hover{box-shadow:0 0 0 2px rgb(88,88,88)}#light-mode .hello-btn-black-and-invert.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#dark-mode .hello-btn-black-and-invert.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(212,212,212,0.7)}#light-mode .hello-btn-white-and-invert.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#dark-mode .hello-btn-white-and-invert.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#light-mode .hello-btn-black-and-static.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#dark-mode .hello-btn-black-and-static.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#light-mode .hello-btn-white-and-static.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#dark-mode .hello-btn-white-and-static.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(212,212,212,0.7)}#dark-mode .hello-btn-black-and-static:hover{box-shadow:0 0 0 3px rgb(88,88,88)}#dark-mode .hello-btn-white-and-static:hover{box-shadow:0 0 0 2px rgba(212,212,212)}#light-mode .hello-btn-black-and-static:hover{box-shadow:0 0 0 2px rgb(48,48,48)}#light-mode .hello-btn-white-and-static:hover{box-shadow:0 0 0 2px rgb(48,48,48)}#light-mode .hello-btn-black-and-invert.hello-btn-hover-flare:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-black-and-invert.hello-btn-hover-flare:hover{box-shadow:0 0 0 1px rgb(212,212,212)}#light-mode .hello-btn-black-and-static.hello-btn-hover-flare:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-black-and-static.hello-btn-hover-flare:hover{box-shadow:0 0 0 2px rgb(88,88,88)}#light-mode .hello-btn-white-and-invert.hello-btn-hover-flare:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-white-and-invert.hello-btn-hover-flare:hover{box-shadow:0 0 0 2px rgb(88,88,88)}#light-mode .hello-btn-white-and-static.hello-btn-hover-flare:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-white-and-static.hello-btn-hover-flare:hover{box-shadow:0 0 0 2px rgb(212,212,212)}#dark-mode .hello-btn-black-and-invert::after{background:rgb(212,212,212)}#light-mode .hello-btn-black-and-invert::after{background:rgb(48,48,48)}#light-mode .hello-btn-black-and-static::after{background:rgb(48,48,48)}#light-mode .hello-btn-black-and-static.hello-btn-loader::after{background-image:url("data:image/svg+xml,%3Csvg class='animate-spin' style='color: rgb(255,255,255);' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cstyle%3E .animate-spin%7Banimation: spin 1s linear infinite;%7D @keyframes spin %7B from %7B transform: rotate(0deg); %7D to %7B transform: rotate(360deg); %7D %7D %3C/style%3E%3Ccircle style='opacity: 0.25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4'%3E%3C/circle%3E%3Cpath class='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'%3E%3C/path%3E%3C/svg%3E")}#dark-mode .hello-btn-black-and-static::after{background:rgb(48,48,48)}#dark-mode .hello-btn-black-and-static.hello-btn-loader::after{background-image:url("data:image/svg+xml,%3Csvg class='animate-spin' style='color: rgb(212,212,212);' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cstyle%3E .animate-spin%7Banimation: spin 1s linear infinite;%7D @keyframes spin %7B from %7B transform: rotate(0deg); %7D to %7B transform: rotate(360deg); %7D %7D %3C/style%3E%3Ccircle style='opacity: 0.25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4'%3E%3C/circle%3E%3Cpath class='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'%3E%3C/path%3E%3C/svg%3E")}#light-mode .hello-btn-white-and-static::after{background:white}#light-mode .hello-btn-white-and-static.hello-btn-loader::after{background-image:url("data:image/svg+xml,%3Csvg class='animate-spin' style='color: rgb(48,48,48);' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cstyle%3E .animate-spin%7Banimation: spin 1s linear infinite;%7D @keyframes spin %7B from %7B transform: rotate(0deg); %7D to %7B transform: rotate(360deg); %7D %7D %3C/style%3E%3Ccircle style='opacity: 0.25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4'%3E%3C/circle%3E%3Cpath class='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'%3E%3C/path%3E%3C/svg%3E")}#dark-mode .hello-btn-white-and-static.hello-btn-loader::after{background-image:url("data:image/svg+xml,%3Csvg class='animate-spin' style='color: rgb(48,48,48);' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cstyle%3E .animate-spin%7Banimation: spin 1s linear infinite;%7D @keyframes spin %7B from %7B transform: rotate(0deg); %7D to %7B transform: rotate(360deg); %7D %7D %3C/style%3E%3Ccircle style='opacity: 0.25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4'%3E%3C/circle%3E%3Cpath class='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'%3E%3C/path%3E%3C/svg%3E")}#light-mode .hello-btn-white-and-invert::after{background:white}#dark-mode .hello-btn-white-and-static::after{background:rgb(212,212,212)}#light-mode .hello-btn-black-and-invert.hello-btn-hover-none:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-black-and-invert.hello-btn-hover-none:hover{box-shadow:0 0 0 1px rgb(212,212,212)}#dark-mode .hello-btn-black-and-invert.hello-btn-loader::after{background-image:url("data:image/svg+xml,%3Csvg class='animate-spin' style='color: rgb(48,48,48);' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cstyle%3E .animate-spin%7Banimation: spin 1s linear infinite;%7D @keyframes spin %7B from %7B transform: rotate(0deg); %7D to %7B transform: rotate(360deg); %7D %7D %3C/style%3E%3Ccircle style='opacity: 0.25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4'%3E%3C/circle%3E%3Cpath class='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'%3E%3C/path%3E%3C/svg%3E")}#light-mode .hello-btn-black-and-static.hello-btn-hover-none:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-black-and-static.hello-btn-hover-none:hover{box-shadow:0 0 0 2px rgb(88,88,88)}#light-mode .hello-btn-white-and-invert.hello-btn-hover-none:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-white-and-invert.hello-btn-hover-none:hover{box-shadow:0 0 0 2px rgb(88,88,88)}#light-mode .hello-btn-white-and-static.hello-btn-hover-none:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-white-and-static.hello-btn-hover-none:hover{box-shadow:0 0 0 1px rgb(212,212,212)}.hello-btn-black-on-light.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128, 0.7)}.hello-btn-white-on-light.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128, 0.7)}.hello-btn-black-on-dark.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128, 0.7)}.hello-btn-white-on-dark.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(212,212,212,0.7)}#light-mode .hello-btn-black-and-invert.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#dark-mode .hello-btn-black-and-invert.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(212,212,212,0.7)}#light-mode .hello-btn-white-and-invert.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#dark-mode .hello-btn-white-and-invert.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#light-mode .hello-btn-black-and-static.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#dark-mode .hello-btn-black-and-static.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#light-mode .hello-btn-white-and-static.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#dark-mode .hello-btn-white-and-static.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(212,212,212,0.7)}#dark-mode .hello-btn-black-and-invert-force{box-shadow:0 0 0 2px rgb(212,212,212)}#dark-mode .hello-btn-white-and-invert-force{box-shadow:0 0 0 2px rgba(88,88,88)}#light-mode .hello-btn-black-and-invert-force{box-shadow:0 0 0 2px rgb(48,48,48)}#light-mode .hello-btn-white-and-invert-force{box-shadow:0 0 0 2px rgb(88,88,88)}#dark-mode .hello-btn-black-and-static-force{box-shadow:0 0 0 3px rgb(88,88,88)}#dark-mode .hello-btn-white-and-static-force{box-shadow:0 0 0 1px rgba(212,212,212)}#light-mode .hello-btn-black-and-static-force{box-shadow:0 0 0 2px rgb(48,48,48)}#light-mode .hello-btn-white-and-static-force{box-shadow:0 0 0 2px rgb(48,48,48)}.hello-btn-black-on-light-force{box-shadow:0 0 0 2px rgb(30,30,30)}.hello-btn-white-on-light-force{box-shadow:0 0 0 2px rgb(30,30,30)}.hello-btn-black-on-dark-force{box-shadow:0 0 0 3px rgb(88,88,88)}.hello-btn-white-on-dark-force{box-shadow:0 0 0 3px rgb(212,212,212)}.hello-btn-hover-flare-force{position:relative;z-index:0}.hello-btn-black-on-dark.hello-btn-hover-flare-force{box-shadow:0 0 0 2px rgb(88,88,88)}.hello-btn-white-on-dark.hello-btn-hover-flare-force{box-shadow:0 0 0 2px rgb(212,212,212)}.hello-btn-black-on-light.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(48,48,48)}.hello-btn-white-on-light.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(48,48,48)}#light-mode .hello-btn-black-and-invert.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-black-and-invert.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(212,212,212)}#light-mode .hello-btn-black-and-static.hello-btn-hover-flare-force{box-shadow:0 0 0 2px rgb(48,48,48)}#dark-mode .hello-btn-black-and-static.hello-btn-hover-flare-force{box-shadow:0 0 0 2px rgb(88,88,88)}#light-mode .hello-btn-white-and-invert.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-white-and-invert.hello-btn-hover-flare-force{box-shadow:0 0 0 2px rgb(88,88,88)}#light-mode .hello-btn-white-and-static.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-white-and-static.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(212,212,212)}.hello-btn-hover-flare-force:before{content:"";background:linear-gradient( 45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000 );position:absolute;top:-2px;left:-2px;background-size:400%;z-index:-1;filter:blur(5px);width:calc(100% + 4px);height:calc(100% + 4px);animation:flare-animation 20s linear infinite;opacity:0;transition:opacity 0.3s ease-in-out;border-radius:0.4rem}.hello-btn-hover-flare-force:before{opacity:1}.hello-btn-hover-flare-dark-force::after{z-index:-1;content:"";position:absolute;width:100%;height:100%;background:#303030;left:0;top:0;border-radius:0.4rem}.hello-btn-hover-flare-force::after{z-index:-1;content:"";position:absolute;width:100%;height:100%;left:0;top:0;border-radius:0.4rem}.hello-btn-black-on-light-force::after{background:#303030}.hello-btn-black-on-dark-force::after{background:#303030}.hello-btn-white-on-light-force::after{background:white}.hello-btn-white-on-dark-force::after{background:rgb(212,212,212)}#dark-mode .hello-btn-black-and-invert::after{background:rgb(212,212,212)}#light-mode .hello-btn-black-and-invert::after{background:rgb(48,48,48)}#dark-mode .hello-btn-black-and-static::after{background:rgb(48,48,48)}#light-mode .hello-btn-white-and-invert::after{background:white}#light-mode .hello-btn-white-and-invert.hello-btn-loader::after{background-image:url("data:image/svg+xml,%3Csvg class='animate-spin' style='color: rgb(48,48,48);' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cstyle%3E .animate-spin%7Banimation: spin 1s linear infinite;%7D @keyframes spin %7B from %7B transform: rotate(0deg); %7D to %7B transform: rotate(360deg); %7D %7D %3C/style%3E%3Ccircle style='opacity: 0.25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4'%3E%3C/circle%3E%3Cpath class='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'%3E%3C/path%3E%3C/svg%3E")}#dark-mode .hello-btn-white-and-invert::after{background:rgb(48,48,48)}#dark-mode .hello-btn-white-and-invert.hello-btn-loader::after{background-image:url("data:image/svg+xml,%3Csvg class='animate-spin' style='color: rgb(212,212,212);' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cstyle%3E .animate-spin%7Banimation: spin 1s linear infinite;%7D @keyframes spin %7B from %7B transform: rotate(0deg); %7D to %7B transform: rotate(360deg); %7D %7D %3C/style%3E%3Ccircle style='opacity: 0.25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4'%3E%3C/circle%3E%3Cpath class='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'%3E%3C/path%3E%3C/svg%3E")}#dark-mode .hello-btn-white-and-static::after{background:rgb(212,212,212)}.flex{display:flex}.inline-flex{display:inline-flex}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-around{justify-content:space-around}.justify-center{justify-content:center}.px-4{padding-left:0.6rem;padding-right:0.66rem
    }.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.p-0\\.5{padding:0.125rem}.w-full{width:100%}.w-1\\/2{width:50%}.bg-white{background:white}.h-44{height:11rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.mb-2{margin-bottom:0.5rem}ul{margin:0;padding:0}ul li{margin:0;padding:0;list-style:none}.absolute{position:absolute}.relative{position:relative}.top-3{top:0.75rem}.right-3{right:0.75rem}.opacity-60{opacity:0.6}.opacity-100{opacity:1}#hello-btn-explorer{font-family:sans-serif;min-width:640px}.rounded-sm{border-radius:.125rem
    }.font-medium{font-weight:500}.-ml-2{margin-left:-0.5rem}#copy-btn{background:transparent;border:none;cursor:pointer}#copy-btn:hover{opacity:1}.label{font-size:0.88rem;font-weight:500;color:black}.tab{font-size:0.92rem;background:transparent;border:none;cursor:pointer;color:#303030}#light-mode{border:1px dashed #303030}#dark-mode{border:1px dashed white}.text-charcoal{color:#303030}.bg-charcoal{background-color:#303030}.border-charcoal{border:1px solid #303030}.text-white{color:white}.selected{color:white !important}.bg-dark{background-color:#151515}.bg-code{background-color:#282c34
    }.flash{animation:flash-animation 0.5s ease-in-out}@keyframes flash-animation{0%{opacity:1}50%{opacity:0.5}100%{opacity:1}}@media(max-width: 768px){#preview-container{flex-direction:column}#light-mode,#dark-mode{width:100%}}code[class*=language-],pre[class*=language-]{color:#ccc;background:0 0;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#2d2d2d}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.block-comment,.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#999}.token.punctuation{color:#ccc}.token.attr-name,.token.deleted,.token.namespace,.token.tag{color:#e2777a}.token.function-name{color:#6196cc}.token.boolean,.token.function,.token.number{color:#f08d49}.token.class-name,.token.constant,.token.property,.token.symbol{color:#f8c555}.token.atrule,.token.builtin,.token.important,.token.keyword,.token.selector{color:#cc99cd}.token.attr-value,.token.char,.token.regex,.token.string,.token.variable{color:#7ec699}.token.entity,.token.operator,.token.url{color:#67cdcc}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.token.inserted{color:green}</style>`,Mt(this,{target:this.shadowRoot,props:_t(this.attributes),customElement:!0},Ht,At,kt,{},null),t&&t.target&&P(t.target,this,t.anchor)}}customElements.define("hello-btn-explorer",Tt);
