import{i as N,S as U,f as a,o as Y,h as z,j as B,s as g,k as Z,l as _,U as P,m as I,n as w,g as l,p as K,b as j,q as $,t as C,L as F,P as G,v as V,w as k,x as H,y as T,z as J,A as Q}from"./runtime.D2eEK9dr.js";function m(e,n=!0,r=null,i){if(typeof e=="object"&&e!=null&&!N(e)&&!(U in e)){if(a in e){const s=e[a];if(s.t===e||s.p===e)return s.p}const t=$(e);if(t===Y||t===z){const s=new Proxy(e,W);return B(e,a,{value:{s:new Map,v:g(0),a:Z(e),i:n,p:s,t:e},writable:!0,enumerable:!1}),s}}return e}function x(e,n=1){_(e,e.v+n)}const W={defineProperty(e,n,r){if(r.value){const i=e[a],t=i.s.get(n);t!==void 0&&_(t,m(r.value,i.i,i))}return Reflect.defineProperty(e,n,r)},deleteProperty(e,n){const r=e[a],i=r.s.get(n),t=r.a,s=delete e[n];if(t&&s){const c=r.s.get("length"),o=e.length-1;c!==void 0&&c.v!==o&&_(c,o)}return i!==void 0&&_(i,P),s&&x(r.v),s},get(e,n,r){var s;if(n===a)return Reflect.get(e,a);const i=e[a];let t=i.s.get(n);if(t===void 0&&(!(n in e)||(s=I(e,n))!=null&&s.writable)&&(t=(i.i?g:w)(m(e[n],i.i,i)),i.s.set(n,t)),t!==void 0){const c=l(t);return c===P?void 0:c}return Reflect.get(e,n,r)},getOwnPropertyDescriptor(e,n){const r=Reflect.getOwnPropertyDescriptor(e,n);if(r&&"value"in r){const t=e[a].s.get(n);t&&(r.value=l(t))}return r},has(e,n){var s;if(n===a)return!0;const r=e[a],i=Reflect.has(e,n);let t=r.s.get(n);return(t!==void 0||K!==null&&(!i||(s=I(e,n))!=null&&s.writable))&&(t===void 0&&(t=(r.i?g:w)(i?m(e[n],r.i,r):P),r.s.set(n,t)),l(t)===P)?!1:i},set(e,n,r,i){const t=e[a];let s=t.s.get(n);s===void 0&&(j(()=>i[n]),s=t.s.get(n)),s!==void 0&&_(s,m(r,t.i,t));const c=t.a,o=!(n in e);if(c&&n==="length")for(let u=r;u<e.length;u+=1){const d=t.s.get(u+"");d!==void 0&&_(d,P)}if(e[n]=r,o){if(c){const u=t.s.get("length"),d=e.length;u!==void 0&&u.v!==d&&_(u,d)}x(t.v)}return!0},ownKeys(e){const n=e[a];return l(n.v),Reflect.ownKeys(e)}};function D(e){if(e!==null&&typeof e=="object"&&a in e){var n=e[a];if(n)return n.p}return e}function p(e,n){return Object.is(D(e),D(n))}function ee(e,n,r,i){var A;var t=(r&k)!==0,s=(r&H)!==0,c=(r&Q)!==0,o=e[n],u=(A=I(e,n))==null?void 0:A.set,d=i,R=!0,O=()=>(c&&R&&(R=!1,d=j(i)),d);o===void 0&&i!==void 0&&(u&&s&&C(),o=O(),u&&u(o));var v;if(s)v=()=>{var f=e[n];return f===void 0?O():(R=!0,f)};else{var E=(t?T:J)(()=>e[n]);E.f|=F,v=()=>{var f=l(E);return f!==void 0&&(d=void 0),f===void 0?d:f}}if(!(r&G))return v;if(u){var q=e.$$legacy;return function(f,y){return arguments.length>0?((!s||!y||q)&&u(y?v():f),f):v()}}var S=!1,b=w(o),h=T(()=>{var f=v(),y=l(b);return S?(S=!1,y):b.v=f});return t||(h.equals=V),function(f,y){var M=l(h);if(arguments.length>0){const L=y?l(h):f;return h.equals(L)||(S=!0,_(b,L),l(h)),f}return M}}export{ee as a,p as i,m as p};