"use strict";(self.webpackChunkreact_app_contacts=self.webpackChunkreact_app_contacts||[]).push([[171],{171:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var r=n(43),o=n(3);function s(e){if("function"!==typeof e)throw new TypeError(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected a function, instead received "+typeof e)}var a=e=>Array.isArray(e)?e:[e];function c(e){const t=Array.isArray(e[0])?e[0]:e;return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected all items to be functions, instead received the following types: ";if(!e.every((e=>"function"===typeof e))){const n=e.map((e=>"function"===typeof e?`function ${e.name||"unnamed"}()`:typeof e)).join(", ");throw new TypeError(`${t}[${n}]`)}}(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}Symbol(),Object.getPrototypeOf({});var i="undefined"!==typeof WeakRef?WeakRef:class{constructor(e){this.value=e}deref(){return this.value}},l=0,u=1;function p(){return{s:l,v:void 0,o:null,p:null}}function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=p();const{resultEqualityCheck:r}=t;let o,s=0;function a(){let t=n;const{length:a}=arguments;for(let e=0,n=a;e<n;e++){const n=arguments[e];if("function"===typeof n||"object"===typeof n&&null!==n){let e=t.o;null===e&&(t.o=e=new WeakMap);const r=e.get(n);void 0===r?(t=p(),e.set(n,t)):t=r}else{let e=t.p;null===e&&(t.p=e=new Map);const r=e.get(n);void 0===r?(t=p(),e.set(n,t)):t=r}}const c=t;let l;if(t.s===u)l=t.v;else if(l=e.apply(null,arguments),s++,r){const e=o?.deref?.()??o;null!=e&&r(e,l)&&(l=e,0!==s&&s--);o="object"===typeof l&&null!==l||"function"===typeof l?new i(l):l}return c.s=u,c.v=l,l}return a.clearCache=()=>{n=p(),a.resetResultsCount()},a.resultsCount=()=>s,a.resetResultsCount=()=>{s=0},a}function f(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const o="function"===typeof e?{memoize:e,memoizeOptions:n}:e,i=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];let r,i=0,l=0,u={},p=t.pop();"object"===typeof p&&(u=p,p=t.pop()),s(p,`createSelector expects an output function after the inputs, but received: [${typeof p}]`);const f={...o,...u},{memoize:m,memoizeOptions:h=[],argsMemoize:y=d,argsMemoizeOptions:v=[],devModeChecks:b={}}=f,j=a(h),g=a(v),x=c(t),w=m((function(){return i++,p.apply(null,arguments)}),...j);const A=y((function(){l++;const e=function(e,t){const n=[],{length:r}=e;for(let o=0;o<r;o++)n.push(e[o].apply(null,t));return n}(x,arguments);return r=w.apply(null,e),r}),...g);return Object.assign(A,{resultFunc:p,memoizedResultFunc:w,dependencies:x,dependencyRecomputations:()=>l,resetDependencyRecomputations:()=>{l=0},lastResult:()=>r,recomputations:()=>i,resetRecomputations:()=>{i=0},memoize:m,argsMemoize:y})};return Object.assign(i,{withTypes:()=>i}),i}var m=f(d),h=Object.assign((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m;!function(e){if("object"!==typeof e)throw new TypeError(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected an object, instead received "+typeof e)}(e,"createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);const n=Object.keys(e),r=t(n.map((t=>e[t])),(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce(((e,t,r)=>(e[n[r]]=t,e)),{})}));return r}),{withTypes:()=>h});const y=e=>{let{contacts:t}=e;return t},v=m([y,e=>{let{filter:t}=e;return t}],((e,t)=>{let{items:n}=e;const r=n.filter((e=>e.name.toLowerCase().includes(t.toLowerCase())));return r.sort(((e,t)=>{const n=e.name.toLowerCase(),r=t.name.toLowerCase();return n<r?-1:n>r?1:0}))}));var b=n(977),j=n(579);const g=()=>{const{items:e}=(0,o.d4)(y),t=(0,o.wA)(),[n,s]=(0,r.useState)(""),[a,c]=(0,r.useState)(""),i=e=>{const{name:t,value:n}=e.target;switch(t){case"name":return void s(n);case"number":return void c(n);default:return}};return(0,j.jsxs)("form",{onSubmit:r=>{r.preventDefault();if(e&&e.find((e=>e.name===n)))return void alert(n+" is already in contacts.");const o={name:n,number:a};t((0,b.IP)(o)),s(""),c("")},children:[(0,j.jsxs)("label",{children:["Name",(0,j.jsx)("input",{onChange:i,type:"text",name:"name",value:n,placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0454\u0456\u0457\u0404\u0406\u0407]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f\u0454\u0456\u0457\u0404\u0406\u0407 ])?[a-zA-Z\u0430-\u044f\u0410-\u042f\u0454\u0456\u0457\u0404\u0406\u0407]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,j.jsxs)("label",{children:["Number",(0,j.jsx)("input",{onChange:i,type:"tel",name:"number",value:a,placeholder:"Number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,j.jsx)("button",{type:"submit",children:"Add contact"})]})};var x=n(146);const w=()=>{const e=(0,o.wA)(),t=(0,o.d4)(v),{items:n,isLoading:r,error:s}=(0,o.d4)(y);return r&&!s?(0,j.jsx)(x.A,{}):(0,j.jsx)("ul",{children:n&&t.map((t=>{const{id:n,name:r,number:o}=t;return(0,j.jsxs)("li",{children:[(0,j.jsxs)("p",{children:[r,": ",o]}),(0,j.jsx)("button",{type:"button",onClick:()=>{e((0,b.MO)(n))},children:"Delete"})]},n)}))})};var A=n(719);const C=()=>{const e=(0,o.wA)();return(0,j.jsxs)("div",{children:[(0,j.jsx)("label",{htmlFor:"filter",children:"Find contacts by name:"}),(0,j.jsx)("input",{id:"filter",type:"text",name:"filter",onChange:t=>{const{value:n}=t.target;e((0,A.l)(n))}})]})},z=e=>{let{title:t}=e;return(0,j.jsx)("h2",{children:t})},k=()=>{const e=(0,o.wA)(),{items:t,isLoading:n}=(0,o.d4)(y),s=0!==t.length;return(0,r.useEffect)((()=>{e((0,b.oe)())}),[e]),(0,j.jsx)("section",{children:(0,j.jsxs)("div",{children:[(0,j.jsx)(z,{title:"Phonebook"}),(0,j.jsx)(g,{}),n&&!s&&(0,j.jsx)(x.A,{}),s&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(z,{title:"Contacts"}),(0,j.jsx)(C,{}),(0,j.jsx)(w,{})]})]})})}}}]);
//# sourceMappingURL=171.c51a0076.chunk.js.map