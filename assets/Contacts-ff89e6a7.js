import{n as a,r as y,a as C,b as E,j as o,c as M,f as N,P as v,d as B,e as U}from"./index-4eeeb8c5.js";import{G as T}from"./iconBase-72239228.js";var b="NOT_FOUND";function W(e){var n;return{get:function(r){return n&&e(n.key,r)?n.value:b},put:function(r,l){n={key:r,value:l}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}function G(e,n){var t=[];function r(i){var s=t.findIndex(function(d){return n(i,d.key)});if(s>-1){var p=t[s];return s>0&&(t.splice(s,1),t.unshift(p)),p.value}return b}function l(i,s){r(i)===b&&(t.unshift({key:i,value:s}),t.length>e&&t.pop())}function u(){return t}function h(){t=[]}return{get:r,put:l,getEntries:u,clear:h}}var K=function(n,t){return n===t};function V(e){return function(t,r){if(t===null||r===null||t.length!==r.length)return!1;for(var l=t.length,u=0;u<l;u++)if(!e(t[u],r[u]))return!1;return!0}}function _(e,n){var t=typeof n=="object"?n:{equalityCheck:n},r=t.equalityCheck,l=r===void 0?K:r,u=t.maxSize,h=u===void 0?1:u,i=t.resultEqualityCheck,s=V(l),p=h===1?W(s):G(h,s);function d(){var c=p.get(arguments);if(c===b){if(c=e.apply(null,arguments),i){var f=p.getEntries(),m=f.find(function(x){return i(x.value,c)});m&&(c=m.value)}p.put(arguments,c)}return c}return d.clearCache=function(){return p.clear()},d}function J(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every(function(r){return typeof r=="function"})){var t=n.map(function(r){return typeof r=="function"?"function "+(r.name||"unnamed")+"()":typeof r}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function Q(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var l=function(){for(var h=arguments.length,i=new Array(h),s=0;s<h;s++)i[s]=arguments[s];var p=0,d,c={memoizeOptions:void 0},f=i.pop();if(typeof f=="object"&&(c=f,f=i.pop()),typeof f!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof f+"]");var m=c,x=m.memoizeOptions,j=x===void 0?t:x,H=Array.isArray(j)?j:[j],w=J(i),k=e.apply(void 0,[function(){return p++,f.apply(null,arguments)}].concat(H)),q=e(function(){for(var O=[],L=w.length,S=0;S<L;S++)O.push(w[S].apply(null,arguments));return d=k.apply(null,O),d});return Object.assign(q,{resultFunc:f,memoizedResultFunc:k,dependencies:w,lastResult:function(){return d},recomputations:function(){return p},resetRecomputations:function(){return p=0}}),q};return l}var X=Q(_);let Y=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((n,t)=>(t&=63,t<36?n+=t.toString(36):t<62?n+=(t-26).toString(36).toUpperCase():t>62?n+="-":n+="_",n),"");const Z=a.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 430px;
  margin-bottom: 50px;
`,ee=a.h1`
  margin: 0;
  margin-bottom: 10px;
  font-size: 40px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  line-height: 43px;
  letter-spacing: 0.4px;
  color: #fff;
`;a.label`
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-weight: 400;
  font-size: 18px;
`;const z=a.input`
  display: flex;
  width: 400px;
  padding: 17px 0px 17px 30px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border: none;
  border-radius: 20px;
  background: #adafdd;
  font-size: 17px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #eaeaea;
  &::placeholder {
    color: #eaeaea;
  }
`,te=a.button`
  display: flex;
  width: 430px;
  height: 49px;
  padding: 13px 59px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  background-color: #bcbff2;
  font-size: 17px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #000;

  transition: background-color 0.5s ease-out;

  &:hover {
    background-color: #bfa8ee;
  }
`,A=e=>e.contacts.contacts,ne=e=>e.filter.filter,re=X([A,ne],(e,n)=>{if(e.length!==0)return e.filter(t=>t.name.toLowerCase().includes(n.toLowerCase()))});function oe(){const[e,n]=y.useState(""),[t,r]=y.useState(""),[l,u]=y.useState(""),h=C(),i=c=>{switch(c.target.name){case"name":n(c.target.value);break;case"email":u(c.target.value);break;case"phone":r(c.target.value);break;default:return}},s=E(A),p=c=>{if(c.preventDefault(),s.find(m=>m.name===e)){alert(`${e} is already in contacts`);return}const f={id:Y(),name:e,email:l,phone:t};h(M(f)),d()},d=()=>{n(""),u(""),r("")};return o.jsxs(Z,{onSubmit:p,children:[o.jsx(ee,{children:"Add contact"}),o.jsx(z,{type:"text",name:"name",value:e,required:!0,placeholder:"enter name",onChange:i}),o.jsx(z,{type:"email",name:"email",value:l,required:!0,placeholder:"enter email",onChange:i}),o.jsx(z,{type:"tel",name:"phone",value:t,required:!0,placeholder:"enter number",onChange:i}),o.jsx(te,{children:"Add"})]})}function ae(e){return T({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]})(e)}function ie(e){return T({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]})(e)}const P=a.div``,R=a.h2`
  font-size: 40px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  line-height: 43px;
  letter-spacing: 0.4px;
  margin: 0;
  margin-bottom: 40px;
  color: #fff;
`,se=a.p`
  margin: 0;
  font-size: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #fff;
`,F=a.input`
  position: relative;
  display: flex;
  width: 400px;
  padding: 17px 0px 17px 30px;
  margin-bottom: 20px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #adafdd;
  border: none;
  font-size: 17px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #eaeaea;

  &::placeholder {
    color: #eaeaea;
  }
`,$=a(ie)`
  position: absolute;
  top: 15px;
  left: 5px;
`;function ce(){const e=C(),n=r=>e(N(r.target.value));return E(A).length!==0?o.jsxs(P,{children:[o.jsx(R,{children:"Contacts"}),o.jsxs("div",{style:{position:"relative"},children:[o.jsx(F,{style:{position:"relative"},type:"text",name:"find",onChange:n,placeholder:"Search contacts"}),o.jsx($,{size:24,color:"#EAEAEA"})]})]}):o.jsxs(P,{children:[o.jsx(R,{children:"Contacts"}),o.jsxs("div",{style:{position:"relative"},children:[o.jsx(F,{style:{position:"relative"},type:"text",name:"find",onChange:n,placeholder:"Search contacts"}),o.jsx($,{size:24,color:"#EAEAEA"})]}),o.jsxs(se,{children:["Haven’t Contacts yet.",o.jsx("br",{}),"Add them right now!"]})]})}const le=a.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  padding: 5px;
  border-radius: 20px;
  border: 2px solid var(--main, #bcbff2);
  color: #ffffff;

  transition: background-color 0.2s ease-out;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background-color: #9886be;
  }
`,ue=a.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0px 15px 30px;
`,I=a.p`
  margin: 0;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`,pe=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: transparent;
  padding: 0;
  margin: 0;
  border: none;
  transition: scale 0.1s ease-out;

  &:hover {
    scale: 1.2;
  }
`;function D({contact:{_id:e,name:n,phone:t}}){const r=C(),l=()=>r(B(e));return o.jsxs(le,{children:[o.jsxs(ue,{children:[o.jsx(I,{children:n}),o.jsx(I,{children:t})]}),o.jsx(pe,{type:"button",onClick:l,children:o.jsx(ae,{size:24,color:"#eaeaea"})})]},e)}D.propTypes={contact:v.shape({_id:v.string.isRequired,name:v.string.isRequired,phone:v.string.isRequired})};const fe=a.ul`
  list-style: none;
  padding: 0;
  display flex;
  flex-direction: column;
  justify-content: center;
  column-gap:20px;
  gap: 50px;
  width: 430px;
  margin-top: 30px;
`,de=()=>E(re);function he(){const e=de();return o.jsx(fe,{children:e&&e.map(n=>o.jsx(D,{contact:n},n._id))})}const me=a.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`,xe=a.div``;function ye(){const e=C();return y.useEffect(()=>{e(U())},[e]),o.jsxs(me,{children:[o.jsx(oe,{}),o.jsxs(xe,{children:[o.jsx(ce,{}),o.jsx(he,{})]})]})}export{ye as default};
