import{n as a,r as y,u as j,e as z,j as o,f as N,g as U,P as v,h as H,i as W}from"./index-bd7a5fe7.js";import{a as B,b as M}from"./index.esm-b5375cd3.js";import"./iconBase-43035025.js";var b="NOT_FOUND";function K(n){var t;return{get:function(r){return t&&n(t.key,r)?t.value:b},put:function(r,l){t={key:r,value:l}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function V(n,t){var e=[];function r(i){var s=e.findIndex(function(d){return t(i,d.key)});if(s>-1){var p=e[s];return s>0&&(e.splice(s,1),e.unshift(p)),p.value}return b}function l(i,s){r(i)===b&&(e.unshift({key:i,value:s}),e.length>n&&e.pop())}function u(){return e}function h(){e=[]}return{get:r,put:l,getEntries:u,clear:h}}var _=function(t,e){return t===e};function G(n){return function(e,r){if(e===null||r===null||e.length!==r.length)return!1;for(var l=e.length,u=0;u<l;u++)if(!n(e[u],r[u]))return!1;return!0}}function J(n,t){var e=typeof t=="object"?t:{equalityCheck:t},r=e.equalityCheck,l=r===void 0?_:r,u=e.maxSize,h=u===void 0?1:u,i=e.resultEqualityCheck,s=G(l),p=h===1?K(s):V(h,s);function d(){var c=p.get(arguments);if(c===b){if(c=n.apply(null,arguments),i){var f=p.getEntries(),m=f.find(function(x){return i(x.value,c)});m&&(c=m.value)}p.put(arguments,c)}return c}return d.clearCache=function(){return p.clear()},d}function Q(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every(function(r){return typeof r=="function"})){var e=t.map(function(r){return typeof r=="function"?"function "+(r.name||"unnamed")+"()":typeof r}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function X(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var l=function(){for(var h=arguments.length,i=new Array(h),s=0;s<h;s++)i[s]=arguments[s];var p=0,d,c={memoizeOptions:void 0},f=i.pop();if(typeof f=="object"&&(c=f,f=i.pop()),typeof f!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof f+"]");var m=c,x=m.memoizeOptions,C=x===void 0?e:x,I=Array.isArray(C)?C:[C],w=Q(i),k=n.apply(void 0,[function(){return p++,f.apply(null,arguments)}].concat(I)),q=n(function(){for(var O=[],L=w.length,S=0;S<L;S++)O.push(w[S].apply(null,arguments));return d=k.apply(null,O),d});return Object.assign(q,{resultFunc:f,memoizedResultFunc:k,dependencies:w,lastResult:function(){return d},recomputations:function(){return p},resetRecomputations:function(){return p=0}}),q};return l}var Y=X(J);let Z=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((t,e)=>(e&=63,e<36?t+=e.toString(36):e<62?t+=(e-26).toString(36).toUpperCase():e>62?t+="-":t+="_",t),"");const ee=a.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 430px;
  margin-bottom: 50px;
`,te=a.h1`
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
`;const E=a.input`
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
`,ne=a.button`
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
`,A=n=>n.contacts.contacts,re=n=>n.filter.filter,oe=Y([A,re],(n,t)=>{if(n.length!==0)return n.filter(e=>e.name.toLowerCase().includes(t.toLowerCase()))});function ae(){const[n,t]=y.useState(""),[e,r]=y.useState(""),[l,u]=y.useState(""),h=j(),i=c=>{switch(c.target.name){case"name":t(c.target.value);break;case"email":u(c.target.value);break;case"phone":r(c.target.value);break;default:return}},s=z(A),p=c=>{if(c.preventDefault(),s.find(m=>m.name===n)){alert(`${n} is already in contacts`);return}const f={id:Z(),name:n,email:l,phone:e};h(N(f)),d()},d=()=>{t(""),u(""),r("")};return o.jsxs(ee,{onSubmit:p,children:[o.jsx(te,{children:"Add contact"}),o.jsx(E,{type:"text",name:"name",value:n,required:!0,placeholder:"enter name",onChange:i}),o.jsx(E,{type:"email",name:"email",value:l,required:!0,placeholder:"enter email",onChange:i}),o.jsx(E,{type:"tel",name:"phone",value:e,required:!0,placeholder:"enter number",onChange:i}),o.jsx(ne,{children:"Add"})]})}const P=a.div``,R=a.h2`
  font-size: 40px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  line-height: 43px;
  letter-spacing: 0.4px;
  margin: 0;
  margin-bottom: 40px;
  color: #fff;
`,ie=a.p`
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
`,$=a(B)`
  position: absolute;
  top: 15px;
  left: 5px;
`;function se(){const n=j(),t=r=>n(U(r.target.value));return z(A).length!==0?o.jsxs(P,{children:[o.jsx(R,{children:"Contacts"}),o.jsxs("div",{style:{position:"relative"},children:[o.jsx(F,{style:{position:"relative"},type:"text",name:"find",onChange:t,placeholder:"Search contacts"}),o.jsx($,{size:24,color:"#EAEAEA"})]})]}):o.jsxs(P,{children:[o.jsx(R,{children:"Contacts"}),o.jsxs("div",{style:{position:"relative"},children:[o.jsx(F,{style:{position:"relative"},type:"text",name:"find",onChange:t,placeholder:"Search contacts"}),o.jsx($,{size:24,color:"#EAEAEA"})]}),o.jsxs(ie,{children:["Haven’t Contacts yet.",o.jsx("br",{}),"Add them right now!"]})]})}const ce=a.li`
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
`,le=a.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0px 15px 30px;
`,T=a.p`
  margin: 0;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`,ue=a.button`
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
`;function D({contact:{_id:n,name:t,phone:e}}){const r=j(),l=()=>r(H(n));return o.jsxs(ce,{children:[o.jsxs(le,{children:[o.jsx(T,{children:t}),o.jsx(T,{children:e})]}),o.jsx(ue,{type:"button",onClick:l,children:o.jsx(M,{size:24,color:"#eaeaea"})})]},n)}D.propTypes={contact:v.shape({_id:v.string.isRequired,name:v.string.isRequired,phone:v.string.isRequired})};const pe=a.ul`
  list-style: none;
  padding: 0;
  display flex;
  flex-direction: column;
  justify-content: center;
  column-gap:20px;
  gap: 50px;
  width: 430px;
  margin-top: 30px;
`,fe=()=>z(oe);function de(){const n=fe();return o.jsx(pe,{children:n&&n.map(t=>o.jsx(D,{contact:t},t._id))})}const he=a.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`,me=a.div``;function ye(){const n=j();return y.useEffect(()=>{n(W())},[n]),o.jsxs(he,{children:[o.jsx(ae,{}),o.jsxs(me,{children:[o.jsx(se,{}),o.jsx(de,{})]})]})}export{ye as default};
