var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function f(){return l(" ")}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function m(t,e,n,r){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}let $;function h(t){$=t}function g(){const t=function(){if(!$)throw new Error("Function called outside component initialization");return $}();return(e,n,{cancelable:r=!1}={})=>{const o=t.$$.callbacks[e];if(o){const s=function(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,r,e),o}(e,n,{cancelable:r});return o.slice().forEach((e=>{e.call(t,s)})),!s.defaultPrevented}return!0}}const b=[],v=[],y=[],w=[],x=Promise.resolve();let _=!1;function E(t){y.push(t)}const k=new Set;let j=0;function S(){const t=$;do{for(;j<b.length;){const t=b[j];j++,h(t),A(t.$$)}for(h(null),b.length=0,j=0;v.length;)v.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];k.has(e)||(k.add(e),e())}y.length=0}while(b.length);for(;w.length;)w.pop()();_=!1,k.clear(),h(t)}function A(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const L=new Set;function C(t,e){t&&t.i&&(L.delete(t),t.i(e))}function H(t,e,n,r){if(t&&t.o){if(L.has(t))return;L.add(t),undefined.c.push((()=>{L.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}function P(t){t&&t.c()}function T(t,n,s,c){const{fragment:u,on_mount:i,on_destroy:a,after_update:l}=t.$$;u&&u.m(n,s),c||E((()=>{const n=i.map(e).filter(o);a?a.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(E)}function M(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function N(t,e){-1===t.$$.dirty[0]&&(b.push(t),_||(_=!0,x.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(e,o,s,c,u,a,l,f=[-1]){const d=$;h(e);const p=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:o.target||d.$$.root};l&&l(p.root);let m=!1;if(p.ctx=s?s(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&u(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),m&&N(e,t)),n})):[],p.update(),m=!0,r(p.before_update),p.fragment=!!c&&c(p.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);p.fragment&&p.fragment.l(t),t.forEach(i)}else p.fragment&&p.fragment.c();o.intro&&C(e.$$.fragment),T(e,o.target,o.anchor,o.customElement),S()}h(d)}class I{$destroy(){M(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function q(e){let n,r,o,s,f,$;return{c(){n=a("div"),r=a("div"),o=a("div"),s=a("span"),f=l(e[0]),$=l("%"),d(s,"class","sr-only"),d(o,"class","progress-bar svelte-r4tuc"),m(o,"width",e[0]+"%"),d(r,"class","progress-container svelte-r4tuc"),d(r,"bp","offset-5@md 4@md 12@sm"),d(n,"bp","grid")},m(t,e){u(t,n,e),c(n,r),c(r,o),c(o,s),c(s,f),c(s,$)},p(t,[e]){1&e&&p(f,t[0]),1&e&&m(o,"width",t[0]+"%")},i:t,o:t,d(t){t&&i(n)}}}function z(t,e,n){let{progress:r=0}=e;return t.$$set=t=>{"progress"in t&&n(0,r=t.progress)},[r]}class B extends I{constructor(t){super(),O(this,t,z,q,s,{progress:0})}}function F(t){let e,n,r,o,s,m,$,h,g,b,v,y,w;return m=new B({props:{progress:t[2]}}),{c(){e=a("div"),n=a("h2"),r=l("Seconds Left: "),o=l(t[0]),s=f(),P(m.$$.fragment),$=f(),h=a("div"),g=a("button"),b=l("Start"),d(n,"bp","offset-5@md 4@md 12@sm"),d(n,"class","svelte-90jcxl"),d(e,"bp","grid"),g.disabled=t[1],d(g,"bp","offset-5@md 4@md 12@sm"),d(g,"class","start svelte-90jcxl"),d(h,"bp","grid")},m(i,a){var l,f,d,p;u(i,e,a),c(e,n),c(n,r),c(n,o),u(i,s,a),T(m,i,a),u(i,$,a),u(i,h,a),c(h,g),c(g,b),v=!0,y||(l=g,f="click",d=t[3],l.addEventListener(f,d,p),w=()=>l.removeEventListener(f,d,p),y=!0)},p(t,[e]){(!v||1&e)&&p(o,t[0]);const n={};4&e&&(n.progress=t[2]),m.$set(n),(!v||2&e)&&(g.disabled=t[1])},i(t){v||(C(m.$$.fragment,t),v=!0)},o(t){H(m.$$.fragment,t),v=!1},d(t){t&&i(e),t&&i(s),M(m,t),t&&i($),t&&i(h),y=!1,w()}}}function D(t,e,n){let r,o=20,s=!1;const c=g();return t.$$.update=()=>{1&t.$$.dirty&&n(2,r=100*(20-o)/20)},[o,s,r,function(){n(1,s=!0);let t=setInterval((()=>{n(0,o-=1),0==o&&(clearInterval(t),n(1,s=!1),n(0,o=20),c("end"))}),1e3)}]}class G extends I{constructor(t){super(),O(this,t,D,F,s,{})}}function J(e){let n;return{c(){n=a("div"),n.innerHTML='<img bp="offset-5@md 4@md 12@sm" src="handwashing.png" alt="How to wash your hands." class="svelte-1ilt23p"/>',d(n,"bp","grid")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&i(n)}}}class K extends I{constructor(t){super(),O(this,t,null,J,s,{})}}function Q(e){let n,r,o,s,c,l,p,m,$,h;return o=new G({}),o.$on("end",e[1]),c=new K({}),{c(){n=a("h1"),n.textContent="Handwashing App",r=f(),P(o.$$.fragment),s=f(),P(c.$$.fragment),l=f(),p=a("h3"),p.innerHTML='<a href="http://www.who.int/gpsc/clean_hands_protection/en/">Picture Source</a> \n\t<a href="https://freesound.org/people/metrostock99/sounds/345086/">Sound Source</a>',m=f(),$=a("audio"),$.innerHTML='<source src="sound.wav"/>',d(n,"class","svelte-1iujep4"),d(p,"class","svelte-1iujep4")},m(t,i){u(t,n,i),u(t,r,i),T(o,t,i),u(t,s,i),T(c,t,i),u(t,l,i),u(t,p,i),u(t,m,i),u(t,$,i),e[2]($),h=!0},p:t,i(t){h||(C(o.$$.fragment,t),C(c.$$.fragment,t),h=!0)},o(t){H(o.$$.fragment,t),H(c.$$.fragment,t),h=!1},d(t){t&&i(n),t&&i(r),M(o,t),t&&i(s),M(c,t),t&&i(l),t&&i(p),t&&i(m),t&&i($),e[2](null)}}}function R(t,e,n){let r;return[r,function(t){r.play()},function(t){v[t?"unshift":"push"]((()=>{r=t,n(0,r)}))}]}return new class extends I{constructor(t){super(),O(this,t,R,Q,s,{})}}({target:document.body,props:{name:"Amy"}})}();
//# sourceMappingURL=bundle.js.map
