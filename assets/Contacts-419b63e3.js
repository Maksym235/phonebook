import{n as f,r as b,u as C,a as L,j as a,b as P,f as D,P as v,d as T,c as $}from"./index-27a3612e.js";import{G as R}from"./iconBase-48b8e96b.js";var y="NOT_FOUND";function B(t){var n;return{get:function(r){return n&&t(n.key,r)?n.value:y},put:function(r,s){n={key:r,value:s}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}function M(t,n){var e=[];function r(o){var i=e.findIndex(function(d){return n(o,d.key)});if(i>-1){var u=e[i];return i>0&&(e.splice(i,1),e.unshift(u)),u.value}return y}function s(o,i){r(o)===y&&(e.unshift({key:o,value:i}),e.length>t&&e.pop())}function l(){return e}function g(){e=[]}return{get:r,put:s,getEntries:l,clear:g}}var H=function(n,e){return n===e};function U(t){return function(e,r){if(e===null||r===null||e.length!==r.length)return!1;for(var s=e.length,l=0;l<s;l++)if(!t(e[l],r[l]))return!1;return!0}}function V(t,n){var e=typeof n=="object"?n:{equalityCheck:n},r=e.equalityCheck,s=r===void 0?H:r,l=e.maxSize,g=l===void 0?1:l,o=e.resultEqualityCheck,i=U(s),u=g===1?B(i):M(g,i);function d(){var c=u.get(arguments);if(c===y){if(c=t.apply(null,arguments),o){var p=u.getEntries(),m=p.find(function(h){return o(h.value,c)});m&&(c=m.value)}u.put(arguments,c)}return c}return d.clearCache=function(){return u.clear()},d}function G(t){var n=Array.isArray(t[0])?t[0]:t;if(!n.every(function(r){return typeof r=="function"})){var e=n.map(function(r){return typeof r=="function"?"function "+(r.name||"unnamed")+"()":typeof r}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return n}function K(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];var s=function(){for(var g=arguments.length,o=new Array(g),i=0;i<g;i++)o[i]=arguments[i];var u=0,d,c={memoizeOptions:void 0},p=o.pop();if(typeof p=="object"&&(c=p,p=o.pop()),typeof p!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof p+"]");var m=c,h=m.memoizeOptions,j=h===void 0?e:h,I=Array.isArray(j)?j:[j],w=G(o),E=t.apply(void 0,[function(){return u++,p.apply(null,arguments)}].concat(I)),F=t(function(){for(var q=[],N=w.length,k=0;k<N;k++)q.push(w[k].apply(null,arguments));return d=E.apply(null,q),d});return Object.assign(F,{resultFunc:p,memoizedResultFunc:E,dependencies:w,lastResult:function(){return d},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),F};return s}var W=K(V);let _=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((n,e)=>(e&=63,e<36?n+=e.toString(36):e<62?n+=(e-26).toString(36).toUpperCase():e>62?n+="-":n+="_",n),"");const J=f.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
`,Q=f.h1`
  font-size: 26px;
  margin-left: auto;
  margin-right: auto;
`,S=f.label`
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-weight: 400;
  font-size: 18px;
`,z=f.input`
  padding-top: 10px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid black;
  color: #fff;
  &:focus {
    background-color: transparent;
    outline: none;
  }
`,X=f.button`
  widht: 150px;
  height: 30px;
  border-radius: 10px;
  border: none;
  background-color: #7b8189;
  color: #ffffff;

  transition: background-color 0.5s ease-out, color 0.5s ease-out;

  &:hover {
    background-color: #bfa8ee;
    color: #000000;
  }
`;function Y(t){return R({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z"}}]})(t)}const A=t=>t.contacts.contacts,Z=t=>t.filter.filter,ee=W([A,Z],(t,n)=>{if(t.length!==0)return t.filter(e=>e.name.toLowerCase().includes(n.toLowerCase()))});function te(){const[t,n]=b.useState(""),[e,r]=b.useState(""),[s,l]=b.useState(""),g=C(),o=c=>{switch(c.target.name){case"name":n(c.target.value);break;case"email":l(c.target.value);break;case"phone":r(c.target.value);break;default:return}},i=L(A),u=c=>{if(c.preventDefault(),i.find(m=>m.name===t)){alert(`${t} is already in contacts`);return}const p={id:_(),name:t,email:s,phone:e};g(P(p)),d()},d=()=>{n(""),l(""),r("")};return a.jsxs(J,{onSubmit:u,children:[a.jsxs(Q,{children:["Add contact ",a.jsx(Y,{})]}),a.jsxs(S,{children:["Name",a.jsx(z,{type:"text",name:"name",value:t,required:!0,placeholder:"enter name",onChange:o})]}),a.jsxs(S,{children:["Email",a.jsx(z,{type:"email",name:"email",value:s,required:!0,placeholder:"enter email",onChange:o})]}),a.jsxs(S,{children:["Number",a.jsx(z,{type:"tel",name:"phone",value:e,required:!0,placeholder:"enter number",onChange:o})]}),a.jsx(X,{children:"Add contact"})]})}const ne=f.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`,re=f.input`
  padding-top: 10px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid black;

  &:focus {
    background-color: transparent;
    outline: none;
  }
`;function ae(){const t=C(),n=e=>t(D(e.target.value));return a.jsxs(ne,{children:["Find contact by name",a.jsx(re,{type:"text",name:"find",onChange:n})]})}function oe(t){return R({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]})(t)}const ie=f.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  color: #ffffff;
  background-color: #bfa8ee;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: #9886be;
  }
`,ce=f.button`
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
`;function O({contact:{_id:t,name:n,phone:e}}){const r=C(),s=()=>r(T(t));return a.jsxs(ie,{children:[n,": ",e,a.jsx(ce,{type:"button",onClick:s,children:a.jsx(oe,{})})]},t)}O.propTypes={contact:v.shape({_id:v.string.isRequired,name:v.string.isRequired,phone:v.string.isRequired})};const se=f.ul`
  list-style: none;
  padding: 0;
  display flex;
  flex-direction: column;
  justify-content: center;
  gap:10px;
  width: 500px;
  margin-top: 30px;
    margin-left: auto;
  margin-right: auto;
  padding: 20px;
    border-radius: 15px;
      background-color: #cdd7e5;
  box-shadow: 15px 29px 41px 4px rgba(150, 148, 150, 1);
  -moz-box-shadow: 15px 29px 41px 4px rgba(150, 148, 150, 1);
  box-shadow: 15px 29px 41px 4px rgba(150, 148, 150, 1);
`,le=()=>L(ee);function ue(){const t=le();return a.jsx(se,{children:t&&t.map(n=>a.jsx(O,{contact:n},n._id))})}function fe(){const t=C();return b.useEffect(()=>{t($())},[t]),a.jsxs("div",{children:[a.jsx(te,{}),a.jsx(ae,{}),a.jsx(ue,{})]})}export{fe as default};
