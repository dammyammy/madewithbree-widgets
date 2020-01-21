var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode.removeChild(t)}function c(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function u(t){return document.createTextNode(t)}function f(){return u(" ")}function g(){return u("")}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.data!==e&&(t.data=e)}class h{constructor(t,e=null){this.e=p("div"),this.a=e,this.u(t)}m(t,e=null){for(let n=0;n<this.n.length;n+=1)l(t,this.n[n],e);this.t=t}u(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}p(t){this.d(),this.u(t),this.m(this.t,this.a)}d(){this.n.forEach(s)}}let x;function v(t){x=t}function y(t){(function(){if(!x)throw new Error("Function called outside component initialization");return x})().$$.on_mount.push(t)}const w=[],k=[],$=[],z=[],_=Promise.resolve();let C=!1;function E(t){$.push(t)}function M(){const t=new Set;do{for(;w.length;){const t=w.shift();v(t),L(t.$$)}for(;k.length;)k.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];t.has(n)||(n(),t.add(n))}$.length=0}while(w.length);for(;z.length;)z.pop()();C=!1}function L(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const N=new Set;function S(t,e){-1===t.$$.dirty[0]&&(w.push(t),C||(C=!0,_.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(i,a,l,s,c,p,d=[-1]){const u=x;v(i);const f=a.props||{},g=i.$$={fragment:null,ctx:null,props:p,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:d};let b=!1;var m,h,y;g.ctx=l?l(i,f,(t,e,n=e)=>(g.ctx&&c(g.ctx[t],g.ctx[t]=n)&&(g.bound[t]&&g.bound[t](n),b&&S(i,t)),e)):[],g.update(),b=!0,o(g.before_update),g.fragment=!!s&&s(g.ctx),a.target&&(a.hydrate?g.fragment&&g.fragment.l((y=a.target,Array.from(y.childNodes))):g.fragment&&g.fragment.c(),a.intro&&((m=i.$$.fragment)&&m.i&&(N.delete(m),m.i(h))),function(t,n,i){const{fragment:a,on_mount:l,on_destroy:s,after_update:c}=t.$$;a&&a.m(n,i),E(()=>{const n=l.map(e).filter(r);s?s.push(...n):o(n),t.$$.on_mount=[]}),c.forEach(E)}(i,a.target,a.anchor),M()),v(u)}let j;function A(t,e,n){const o=t.slice();return o[11]=e[n],o}function H(t,e,n){const o=t.slice();return o[8]=e[n],o}function T(t,e,n){const o=t.slice();return o[5]=e[n],o[7]=n,o}function B(t,e,n){const o=t.slice();return o[16]=e[n],o}function F(t,e,n){const o=t.slice();return o[8]=e[n],o}function O(t){let e,n,o,r,i,d,g,m,h,x,v,y,w,k,$,z,_,C,E,M,L,N,S,P,j,A,H,B,O=t[1],R=[];for(let e=0;e<O.length;e+=1)R[e]=X(F(t,O,e));let U=t[0],q=[];for(let e=0;e<U.length;e+=1)q[e]=et(T(t,U,e));return{c(){e=p("div"),n=p("div"),o=p("div"),r=p("div"),i=p("div"),d=p("span"),g=u("Pay Annually"),h=f(),x=p("label"),v=p("input"),y=f(),w=p("span"),k=f(),$=p("span"),z=u("Pay Monthly"),C=f(),(E=p("div")).textContent="Prices do not include applicable taxes.",M=f(),(L=p("div")).textContent="Save up to 20% by paying annually",N=f(),(S=p("div")).innerHTML='<span class="plan-price-amount"> </span>',P=f();for(let t=0;t<R.length;t+=1)R[t].c();j=f(),A=p("div"),H=f();for(let t=0;t<q.length;t+=1)q[t].c();var a,l,s,c;b(d,"class",m="text "+(t[2]?"":"is-active")),b(v,"type","checkbox"),b(v,"aria-label","toggle plan period"),b(w,"class","slider"),b(x,"class","switch"),b($,"class",_="text "+(t[2]?"is-active":"")),b(i,"class","toggle"),b(E,"class","subtext"),b(L,"class","subtext savings"),b(r,"class","toggle-container"),b(o,"class","plan-header"),b(S,"class","plan-price"),b(A,"class","plan-footer"),b(n,"class","pricing-plan is-features"),b(e,"class","pricing-table is-comparative"),a=v,l="change",s=t[4],a.addEventListener(l,s,c),B=(()=>a.removeEventListener(l,s,c))},m(s,c){l(s,e,c),a(e,n),a(n,o),a(o,r),a(r,i),a(i,d),a(d,g),a(i,h),a(i,x),a(x,v),v.checked=t[2],a(x,y),a(x,w),a(i,k),a(i,$),a($,z),a(r,C),a(r,E),a(r,M),a(r,L),a(n,N),a(n,S),a(n,P);for(let t=0;t<R.length;t+=1)R[t].m(n,null);a(n,j),a(n,A),a(e,H);for(let t=0;t<q.length;t+=1)q[t].m(e,null)},p(t,o){if(4&o&&m!==(m="text "+(t[2]?"":"is-active"))&&b(d,"class",m),4&o&&(v.checked=t[2]),4&o&&_!==(_="text "+(t[2]?"is-active":""))&&b($,"class",_),2&o){let e;for(O=t[1],e=0;e<O.length;e+=1){const r=F(t,O,e);R[e]?R[e].p(r,o):(R[e]=X(r),R[e].c(),R[e].m(n,j))}for(;e<R.length;e+=1)R[e].d(1);R.length=O.length}if(7&o){let n;for(U=t[0],n=0;n<U.length;n+=1){const r=T(t,U,n);q[n]?q[n].p(r,o):(q[n]=et(r),q[n].c(),q[n].m(e,null))}for(;n<q.length;n+=1)q[n].d(1);q.length=U.length}},d(t){t&&s(e),c(R,t),c(q,t),B()}}}function R(t){let e,n,o,r;return{c(){e=p("span"),n=d("svg"),b(o=d("path"),"d","M256 0a256 256 0 101 513 256 256 0 00-1-513zm0 389a21 21 0 110-41 21 21 0 010 41zm35-132c-16 9-25 23-25 38v22a10 10 0 01-20 0v-20c0-25 13-46 35-58 19-10 29-32 25-54a51 51 0 00-101 10 10 10 0 01-21 0 72 72 0 11107 62z"),b(n,"height",".9em"),b(n,"width",".9em"),b(n,"fill","currentColor"),b(n,"viewBox","0 0 512 512"),b(e,"class","has-tooltip-multiline has-tooltip-right"),b(e,"data-tooltip",r=t[16].description)},m(t,r){l(t,e,r),a(e,n),a(n,o)},p(t,n){2&n&&r!==(r=t[16].description)&&b(e,"data-tooltip",r)},d(t){t&&s(e)}}}function U(t){let e,n,o,r=t[16].title+"",i=null!==t[16].description&&R(t);return{c(){e=p("div"),n=u(r),o=f(),i&&i.c(),b(e,"class","plan-item has-text-left")},m(t,r){l(t,e,r),a(e,n),a(e,o),i&&i.m(e,null)},p(t,o){2&o&&r!==(r=t[16].title+"")&&m(n,r),null!==t[16].description?i?i.p(t,o):((i=R(t)).c(),i.m(e,null)):i&&(i.d(1),i=null)},d(t){t&&s(e),i&&i.d()}}}function X(t){let e,n,o,r,i=t[8].title+"",d=t[8].items,g=[];for(let e=0;e<d.length;e+=1)g[e]=U(B(t,d,e));return{c(){e=p("div"),n=u(i),o=f(),r=p("div");for(let t=0;t<g.length;t+=1)g[t].c();b(e,"class","plan-header has-text-left"),b(r,"class","plan-items")},m(t,i){l(t,e,i),a(e,n),l(t,o,i),l(t,r,i);for(let t=0;t<g.length;t+=1)g[t].m(r,null)},p(t,e){if(2&e&&i!==(i=t[8].title+"")&&m(n,i),2&e){let n;for(d=t[8].items,n=0;n<d.length;n+=1){const o=B(t,d,n);g[n]?g[n].p(o,e):(g[n]=U(o),g[n].c(),g[n].m(r,null))}for(;n<g.length;n+=1)g[n].d(1);g.length=d.length}},d(t){t&&s(e),t&&s(o),t&&s(r),c(g,t)}}}function q(t){let e;return{c(){(e=p("div")).textContent="Most Popular",b(e,"class","most-popular-label")},m(t,n){l(t,e,n)},d(t){t&&s(e)}}}function D(t){let e,n,o,r,i,c=t[5].currency+"",d=t[5].price.yearly_savings+"";return{c(){e=p("div"),n=u("Save "),o=u(c),r=u(d),i=u(" annually"),b(e,"class","most-popular-label")},m(t,s){l(t,e,s),a(e,n),a(e,o),a(e,r),a(e,i)},p(t,e){1&e&&c!==(c=t[5].currency+"")&&m(o,c),1&e&&d!==(d=t[5].price.yearly_savings+"")&&m(r,d)},d(t){t&&s(e)}}}function I(t){let e,n=(null!==t[11].features.premium?t[11].features.premium:"-")+"";return{c(){e=u(n)},m(t,n){l(t,e,n)},p(t,o){2&o&&n!==(n=(null!==t[11].features.premium?t[11].features.premium:"-")+"")&&m(e,n)},d(t){t&&s(e)}}}function G(t){let e,n=ot(t[11].features.premium)+"";return{c(){e=new h(n,null)},m(t,n){e.m(t,n)},p(t,o){2&o&&n!==(n=ot(t[11].features.premium)+"")&&e.p(n)},d(t){t&&e.d()}}}function J(t){let e;function n(t,e){return"boolean"==typeof t[11].features.business?V:Q}let o=n(t),r=o(t);return{c(){r.c(),e=g()},m(t,n){r.m(t,n),l(t,e,n)},p(t,i){o===(o=n(t))&&r?r.p(t,i):(r.d(1),(r=o(t))&&(r.c(),r.m(e.parentNode,e)))},d(t){r.d(t),t&&s(e)}}}function K(t){let e;function n(t,e){return"boolean"==typeof t[11].features.lite?Y:W}let o=n(t),r=o(t);return{c(){r.c(),e=g()},m(t,n){r.m(t,n),l(t,e,n)},p(t,i){o===(o=n(t))&&r?r.p(t,i):(r.d(1),(r=o(t))&&(r.c(),r.m(e.parentNode,e)))},d(t){r.d(t),t&&s(e)}}}function Q(t){let e,n=(null!==t[11].features.business?t[11].features.business:"-")+"";return{c(){e=u(n)},m(t,n){l(t,e,n)},p(t,o){2&o&&n!==(n=(null!==t[11].features.business?t[11].features.business:"-")+"")&&m(e,n)},d(t){t&&s(e)}}}function V(t){let e,n=ot(t[11].features.business)+"";return{c(){e=new h(n,null)},m(t,n){e.m(t,n)},p(t,o){2&o&&n!==(n=ot(t[11].features.business)+"")&&e.p(n)},d(t){t&&e.d()}}}function W(t){let e,n=(null!==t[11].features.lite?t[11].features.lite:"-")+"";return{c(){e=u(n)},m(t,n){l(t,e,n)},p(t,o){2&o&&n!==(n=(null!==t[11].features.lite?t[11].features.lite:"-")+"")&&m(e,n)},d(t){t&&s(e)}}}function Y(t){let e,n=ot(t[11].features.lite)+"";return{c(){e=new h(n,null)},m(t,n){e.m(t,n)},p(t,o){2&o&&n!==(n=ot(t[11].features.lite)+"")&&e.p(n)},d(t){t&&e.d()}}}function Z(t){let e,n;function o(t,e){return 0===t[7]?K:1===t[7]?J:"boolean"==typeof t[11].features.premium?G:I}let r=o(t),i=r(t);return{c(){e=p("div"),i.c(),b(e,"class","plan-item"),b(e,"data-feature",n=t[11].title)},m(t,n){l(t,e,n),i.m(e,null)},p(t,a){r===(r=o(t))&&i?i.p(t,a):(i.d(1),(i=r(t))&&(i.c(),i.m(e,null))),2&a&&n!==(n=t[11].title)&&b(e,"data-feature",n)},d(t){t&&s(e),i.d()}}}function tt(t){let e,n,o,r=t[8].items,i=[];for(let e=0;e<r.length;e+=1)i[e]=Z(A(t,r,e));return{c(){(e=p("div")).textContent=" ",n=f();for(let t=0;t<i.length;t+=1)i[t].c();o=g(),b(e,"class","plan-header")},m(t,r){l(t,e,r),l(t,n,r);for(let e=0;e<i.length;e+=1)i[e].m(t,r);l(t,o,r)},p(t,e){if(2&e){let n;for(r=t[8].items,n=0;n<r.length;n+=1){const a=A(t,r,n);i[n]?i[n].p(a,e):(i[n]=Z(a),i[n].c(),i[n].m(o.parentNode,o))}for(;n<i.length;n+=1)i[n].d(1);i.length=r.length}},d(t){t&&s(e),t&&s(n),c(i,t),t&&s(o)}}}function et(t){let e,n,o,r,i,d,g,h,x,v,y,w,k,$,z,_,C,E,M,L,N,S=t[5].title+"",P=t[5].currency+"",j=(t[2]?t[5].price.monthly:t[5].price.yearly)+"",A=(t[5].button||"Choose")+"",T=void 0!==t[0].popular&&t[0].popular&&q(),B=!t[2]&&D(t),F=t[1],O=[];for(let e=0;e<F.length;e+=1)O[e]=tt(H(t,F,e));return{c(){e=p("div"),T&&T.c(),n=f(),o=p("div"),r=u(S),i=f(),d=p("div"),g=p("span"),h=p("span"),x=u(P),v=f(),y=u(j),w=f(),B&&B.c(),k=f();for(let t=0;t<O.length;t+=1)O[t].c();$=f(),z=p("div"),_=p("a"),C=u(A),L=f(),b(o,"class","plan-header"),b(h,"class","plan-price-currency"),b(g,"class","plan-price-amount"),b(d,"class","plan-price"),b(_,"href",E=t[5].url),b(_,"class",M="button "+t[5].color),b(z,"class","plan-footer"),b(e,"class",N="pricing-plan plan "+t[5].color+" "+(void 0!==t[0].popular&&t[0].popular?"is-popular":""))},m(t,s){l(t,e,s),T&&T.m(e,null),a(e,n),a(e,o),a(o,r),a(e,i),a(e,d),a(d,g),a(g,h),a(h,x),a(g,v),a(g,y),a(d,w),B&&B.m(d,null),a(e,k);for(let t=0;t<O.length;t+=1)O[t].m(e,null);a(e,$),a(e,z),a(z,_),a(_,C),a(e,L)},p(t,o){if(void 0!==t[0].popular&&t[0].popular?T||((T=q()).c(),T.m(e,n)):T&&(T.d(1),T=null),1&o&&S!==(S=t[5].title+"")&&m(r,S),1&o&&P!==(P=t[5].currency+"")&&m(x,P),5&o&&j!==(j=(t[2]?t[5].price.monthly:t[5].price.yearly)+"")&&m(y,j),t[2]?B&&(B.d(1),B=null):B?B.p(t,o):((B=D(t)).c(),B.m(d,null)),2&o){let n;for(F=t[1],n=0;n<F.length;n+=1){const r=H(t,F,n);O[n]?O[n].p(r,o):(O[n]=tt(r),O[n].c(),O[n].m(e,$))}for(;n<O.length;n+=1)O[n].d(1);O.length=F.length}1&o&&A!==(A=(t[5].button||"Choose")+"")&&m(C,A),1&o&&E!==(E=t[5].url)&&b(_,"href",E),1&o&&M!==(M="button "+t[5].color)&&b(_,"class",M),1&o&&N!==(N="pricing-plan plan "+t[5].color+" "+(void 0!==t[0].popular&&t[0].popular?"is-popular":""))&&b(e,"class",N)},d(t){t&&s(e),T&&T.d(),B&&B.d(),c(O,t)}}}function nt(e){let n,o=e[1]&&e[0]&&O(e);return{c(){o&&o.c(),n=g(),this.c=t},m(t,e){o&&o.m(t,e),l(t,n,e)},p(t,[e]){t[1]&&t[0]?o?o.p(t,e):((o=O(t)).c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},i:t,o:t,d(t){o&&o.d(t),t&&s(n)}}}function ot(t){return t?'<span><svg height=".9em" width=".9em" fill="currentColor" viewBox="0 0 516 516">\n                    <path d="M0 274l177 177 339-339-49-48-290 290L48 226z"/>\n                </svg></span>':'<span><svg height=".9em" width=".9em" fill="currentColor" viewBox="0 0 612 612">\n                    <path d="M612 36L577 1 306 271 35 1 0 36l271 270L0 576l35 35 271-270 271 270 35-35-271-270z"/>\n                </svg></span>'}function rt(t,e,n){let o,r,i=!1,{data:a="https://cdn.jsdelivr.net/gh/dammyammy/madewithbree-widgets@master/pricing-table/pricing-table.json"}=e;return y(async()=>{const t=await fetch(a),e=await t.json();n(0,o=e.plans),n(1,r=e.features)}),t.$set=(t=>{"data"in t&&n(3,a=t.data)}),[o,r,i,a,function(){i=this.checked,n(2,i)}]}"function"==typeof HTMLElement&&(j=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class it extends j{constructor(t){super(),this.shadowRoot.innerHTML='<style>.toggle-container{padding-top:84px}.toggle-container .toggle{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:3px}.toggle-container .text.is-active{color:#313131}.toggle-container .text{font-style:normal;font-weight:500;line-height:22px;letter-spacing:0;text-rendering:geometricPrecision;text-transform:none;text-decoration:none;font-size:14px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#a1a1a1}.toggle-container .switch{position:relative;display:inline-block;width:32px;height:19px;margin:0 11px}.toggle-container .switch input{opacity:0;width:0;height:0}.toggle-container input:checked+.slider::before{-webkit-transform:translateX(13px);transform:translateX(13px)}.toggle-container .slider{position:absolute;top:0;left:0;right:0;bottom:0;width:32px;border-radius:34px;background-color:#313131;cursor:pointer;-webkit-transition:.2s;-o-transition:.2s;transition:.2s}.toggle-container .slider::before{position:absolute;content:"";height:15px;width:15px;left:2px;bottom:2px;border-radius:50%;background-color:#fff;-webkit-transition:.2s;-o-transition:.2s;transition:.2s}.toggle-container .subtext{font-style:normal;font-weight:400;line-height:16px;letter-spacing:0;text-rendering:geometricPrecision;text-transform:none;text-decoration:none;font-size:12px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin-bottom:11px;text-align:left;color:#767676}.toggle-container .subtext.savings{margin-bottom:unset;font-weight:500;color:#0888c8}.toggle-container .subtext{font-style:normal;font-weight:400;line-height:16px;letter-spacing:0;text-rendering:geometricPrecision;text-transform:none;text-decoration:none;font-size:12px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin-bottom:11px;text-align:left;color:#767676}.most-popular-label{margin-bottom:28px}.most-popular-label{font-style:normal;font-weight:500;line-height:11px;letter-spacing:0;text-rendering:geometricPrecision;text-transform:none;text-decoration:none;font-size:9px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;padding:6px 0;background-color:#0888c8;text-align:center;text-transform:uppercase;color:#fff}svg{display:inline}.button{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none\n}.button{-moz-appearance:none;-webkit-appearance:none;align-items:center;border:1px solid transparent;border-radius:4px;box-shadow:none;display:inline-flex;font-size:1rem;height:2.25em;justify-content:flex-start;line-height:1.5;padding-bottom:calc(.375em - 1px);padding-left:calc(.625em - 1px);padding-right:calc(.625em - 1px);padding-top:calc(.375em - 1px);position:relative;vertical-align:top\n}.button:active,.button:focus{outline:0\n}a{color:#3273dc;cursor:pointer;text-decoration:none\n}a:hover{color:#363636\n}span{font-style:inherit;font-weight:inherit\n}.has-text-left{text-align:left!important\n}.button{background-color:#fff;border-color:#dbdbdb;border-width:1px;color:#363636;cursor:pointer;justify-content:center;padding-bottom:calc(.375em - 1px);padding-left:.75em;padding-right:.75em;padding-top:calc(.375em - 1px);text-align:center;white-space:nowrap\n}.button:hover{border-color:#b5b5b5;color:#363636\n}.button:focus{border-color:#3273dc;color:#363636\n}.button:focus:not(:active){box-shadow:0 0 0 .125em rgba(50,115,220,.25)\n}.button:active{border-color:#4a4a4a;color:#363636\n}.button.is-business:focus:not(:active){box-shadow:0 0 0 .125em rgba(0,209,178,.25)\n}.button.is-lite:focus:not(:active){box-shadow:0 0 0 .125em rgba(50,115,220,.25)\n}.button.is-premium:focus:not(:active){box-shadow:0 0 0 .125em rgba(255,56,96,.25)\n}.button.is-business{background-color:#00d1b2;border-color:transparent;color:#fff\n}.button.is-business:hover{background-color:#00c4a7;border-color:transparent;color:#fff\n}.button.is-business:focus{border-color:transparent;color:#fff\n}.button.is-business:focus:not(:active){box-shadow:0 0 0 .125em rgba(0,209,178,.25)\n}.button.is-business:active{background-color:#00b89c;border-color:transparent;color:#fff\n}.button.is-lite{background-color:#3273dc;border-color:transparent;color:#fff\n}.button.is-lite:hover{background-color:#276cda;border-color:transparent;color:#fff\n}.button.is-lite:focus{border-color:transparent;color:#fff\n}.button.is-lite:focus:not(:active){box-shadow:0 0 0 .125em rgba(50,115,220,.25)\n}.button.is-lite:active{background-color:#2366d1;border-color:transparent;color:#fff\n}.button.is-premium{background-color:#ff3860;border-color:transparent;color:#fff\n}.button.is-premium:hover{background-color:#ff2b56;border-color:transparent;color:#fff\n}.button.is-premium:focus{border-color:transparent;color:#fff\n}.button.is-premium:focus:not(:active){box-shadow:0 0 0 .125em rgba(255,56,96,.25)\n}.button.is-premium:active{background-color:#ff1f4b;border-color:transparent;color:#fff\n}.pricing-table .pricing-plan.is-premium .plan-price .plan-price-amount{color:#ff2b56}.pricing-table .pricing-plan.is-business .plan-price .plan-price-amount{color:#00d1b2\n}.pricing-table .pricing-plan.is-business .plan-footer .button{background-color:#00d1b2;border-color:transparent;color:#fff\n}.pricing-table .pricing-plan.is-business .plan-footer .button:hover{background-color:#00c4a7;border-color:transparent;color:#fff\n}.pricing-table .pricing-plan.is-business .plan-footer .button:focus{border-color:transparent;box-shadow:0 0 .5em rgba(0,209,178,.25);color:#fff\n}.pricing-table .pricing-plan.is-business .plan-footer .button:active{background-color:#00b89c;border-color:transparent;color:#fff\n}.button.is-fullwidth{display:flex;width:100%\n}.pricing-table{display:flex;align-items:stretch;flex-direction:row;flex-flow:row wrap;justify-content:space-between\n}.pricing-table.is-comparative .pricing-plan{border-radius:initial;margin:0\n}.pricing-table.is-comparative .pricing-plan:not(:last-child){border-right:none\n}.pricing-table.is-comparative .pricing-plan:first-child{border-top-left-radius:4px;border-bottom-left-radius:4px\n}.pricing-table.is-comparative .pricing-plan:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px\n}.pricing-table .pricing-plan{display:flex;flex-direction:column;flex:1 1 auto;background-color:transparent;border:.1rem solid #f5f5f5;border-radius:4px;list-style-type:none;transition:.25s;margin:.5em;padding:0.5em}.pricing-table .pricing-plan .plan-header{border-top-left-radius:4px;border-top-right-radius:4px;background-color:transparent;color:#4a4a4a;font-size:1.25rem;font-weight:600;padding:.75em;align-content:center;text-align:center;margin-top:2em}.pricing-table .pricing-plan .plan-item{background:#f5f5f5;border-bottom:.1rem solid #fff;padding:.75em;align-content:center;text-align:center;font-size:.9em;color:#7a7a7a\n}.pricing-table .pricing-plan .plan-price{background-color:transparent;color:#4a4a4a;font-size:.75rem;font-weight:400;padding:.75em;align-content:center;text-align:center\n}.pricing-table .pricing-plan .plan-price .plan-price-amount{font-size:2.5rem;font-weight:700\n}.pricing-table .pricing-plan .plan-price .plan-price-amount .plan-price-currency{vertical-align:super;font-size:1rem!important;font-weight:400!important;color:#4a4a4a;margin-right:.25rem\n}.pricing-table .pricing-plan .plan-footer{border-bottom-left-radius:4px;border-bottom-right-radius:4px;padding:.75em;align-content:center;text-align:center;margin-top:auto\n}@media screen and (min-width:769px),print{.pricing-table.is-comparative{margin:.5rem\n    }.pricing-table.is-comparative .plan-item::before{content:attr("data-feature")\n    }}@media screen and (max-width:768px){.pricing-table.is-comparative .pricing-plan{margin:.5rem\n    }.pricing-table.is-comparative .pricing-plan.is-features{display:none\n    }.pricing-table.is-comparative .pricing-plan .plan-item::before{content:attr(data-feature);display:block;font-weight:600;font-size:.75rem;color:#b5b5b5\n    }}[data-tooltip]:not([disabled]){cursor:pointer;overflow:visible;position:relative\n}[data-tooltip]:not([disabled])::after,[data-tooltip]:not([disabled])::before{box-sizing:border-box;color:#fff;display:inline-block;font-family:BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;font-size:.75rem;hyphens:auto;opacity:0;overflow:hidden;pointer-events:none;position:absolute;visibility:hidden;z-index:1020\n}[data-tooltip]:not([disabled])::after{content:\'\';border-style:solid;border-width:6px;border-color:rgba(74,74,74,.9) transparent transparent transparent;margin-bottom:-5px\n}[data-tooltip]:not([disabled])::after{top:0;right:auto;bottom:auto;left:50%;margin-top:-5px;margin-right:auto;margin-bottom:auto;margin-left:-5px;border-color:rgba(74,74,74,.9) transparent transparent transparent\n}[data-tooltip]:not([disabled])::before{background:rgba(74,74,74,.9);border-radius:2px;content:attr(data-tooltip);padding:.5rem 1rem;text-overflow:ellipsis;white-space:pre\n}[data-tooltip]:not([disabled])::before{top:0;right:auto;bottom:auto;left:50%;top:0;margin-top:-5px;margin-bottom:auto;transform:translate(-50%,-100%)\n}[data-tooltip]:not([disabled]).has-tooltip-right::after{top:auto;right:0;bottom:50%;left:auto;margin-top:auto;margin-right:-11px;margin-bottom:-6px;margin-left:auto;border-color:transparent rgba(74,74,74,.9) transparent transparent\n}[data-tooltip]:not([disabled]).has-tooltip-right::before{top:auto;right:-11px;bottom:50%;left:auto;margin-top:auto;transform:translate(100%,50%)\n}[data-tooltip]:not([disabled]).has-tooltip-multiline::before{height:auto;width:15rem;max-width:15rem;text-overflow:clip;white-space:normal;word-break:keep-all\n}[data-tooltip]:not([disabled]):focus::after,[data-tooltip]:not([disabled]):focus::before,[data-tooltip]:not([disabled]):hover::after,[data-tooltip]:not([disabled]):hover::before{opacity:1;visibility:visible\n}.pricing-table{font-family:inherit}.pricing-table .pricing-plan .plan-item{background:transparent !important;border-bottom:1px solid #ebebeb !important;color:#313131;font-weight:lighter}.pricing-table .pricing-plan{border:0 !important}.pricing-table .pricing-plan .plan-header{text-transform:uppercase !important;font-size:0.5rem;font-weight:lighter;padding:1em;color:#939393}.pricing-plan .plan .is-popular{background-color:rgba(246,246,246,.8);padding-top:0;margin-top:0.5em;padding-left:0;padding-right:0}.mr-2{margin-right:16px}</style>',P(this,{target:this.shadowRoot},rt,nt,i,{data:3}),t&&(t.target&&l(t.target,this,t.anchor),t.props&&(this.$set(t.props),M()))}static get observedAttributes(){return["data"]}get data(){return this.$$.ctx[3]}set data(t){this.$set({data:t}),M()}}return customElements.define("pricing-table",it),new it({target:document.body})}();
