import{b as f,n as p,o as d,f as i,k as m,e as v,s as c}from"../chunks/disclose-version.e6fca004.js";import{h as _,r as l,c as h,p as $,i as x}from"../chunks/runtime.d5cd8560.js";import{d as k}from"../chunks/singletons.d576271e.js";const y=()=>{const s=k;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},E={subscribe(s){return y().page.subscribe(s)}};var S=m("<h1> </h1> <p> </p>",!0);function z(s,e){$(e,!1);const r={};_(r);const t=()=>x(E,"$page",r);var a=d(s,!0,S),o=v(a),g=i(o),u=c(c(o)),b=i(u);l(()=>{var n;p(g,t().status),p(b,(n=t().error)==null?void 0:n.message)}),f(s,a),h()}export{z as component};