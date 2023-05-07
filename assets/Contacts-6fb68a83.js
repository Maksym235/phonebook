import{n as f,q as h,r as S,u as w,F as q,j as i,H as $,I as M,P as y,J as H,K as U}from"./index-8b6ebeb4.js";var C="NOT_FOUND";function V(e){var n;return{get:function(r){return n&&e(n.key,r)?n.value:C},put:function(r,a){n={key:r,value:a}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}function Z(e,n){var t=[];function r(c){var o=t.findIndex(function(p){return n(c,p.key)});if(o>-1){var s=t[o];return o>0&&(t.splice(o,1),t.unshift(s)),s.value}return C}function a(c,o){r(c)===C&&(t.unshift({key:c,value:o}),t.length>e&&t.pop())}function l(){return t}function u(){t=[]}return{get:r,put:a,getEntries:l,clear:u}}var J=function(n,t){return n===t};function K(e){return function(t,r){if(t===null||r===null||t.length!==r.length)return!1;for(var a=t.length,l=0;l<a;l++)if(!e(t[l],r[l]))return!1;return!0}}function W(e,n){var t=typeof n=="object"?n:{equalityCheck:n},r=t.equalityCheck,a=r===void 0?J:r,l=t.maxSize,u=l===void 0?1:l,c=t.resultEqualityCheck,o=K(a),s=u===1?V(o):Z(u,o);function p(){var d=s.get(arguments);if(d===C){if(d=e.apply(null,arguments),c){var g=s.getEntries(),x=g.find(function(b){return c(b.value,d)});x&&(d=x.value)}s.put(arguments,d)}return d}return p.clearCache=function(){return s.clear()},p}function G(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every(function(r){return typeof r=="function"})){var t=n.map(function(r){return typeof r=="function"?"function "+(r.name||"unnamed")+"()":typeof r}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function Q(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=function(){for(var u=arguments.length,c=new Array(u),o=0;o<u;o++)c[o]=arguments[o];var s=0,p,d={memoizeOptions:void 0},g=c.pop();if(typeof g=="object"&&(d=g,g=c.pop()),typeof g!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof g+"]");var x=d,b=x.memoizeOptions,j=b===void 0?t:b,B=Array.isArray(j)?j:[j],z=G(c),O=e.apply(void 0,[function(){return s++,g.apply(null,arguments)}].concat(B)),E=e(function(){for(var F=[],D=z.length,k=0;k<D;k++)F.push(z[k].apply(null,arguments));return p=O.apply(null,F),p});return Object.assign(E,{resultFunc:g,memoizedResultFunc:O,dependencies:z,lastResult:function(){return p},recomputations:function(){return s},resetRecomputations:function(){return s=0}}),E};return a}var X=Q(W);let Y=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((n,t)=>(t&=63,t<36?n+=t.toString(36):t<62?n+=(t-26).toString(36).toUpperCase():t>62?n+="-":n+="_",n),"");const ee=f.form`
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
`,te=f.h1`
  font-size: 26px;
  margin-left: auto;
  margin-right: auto;
`,N=f.label`
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-weight: 400;
  font-size: 18px;
`,A=f.input`
  padding-top: 10px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid black;

  &:focus {
    background-color: transparent;
    outline: none;
  }
`,ne=f.button`
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
`;var L={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},R=h.createContext&&h.createContext(L),m=globalThis&&globalThis.__assign||function(){return m=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)},re=globalThis&&globalThis.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};function P(e){return e&&e.map(function(n,t){return h.createElement(n.tag,m({key:t},n.attr),P(n.child))})}function I(e){return function(n){return h.createElement(ae,m({attr:m({},e.attr)},n),P(e.child))}}function ae(e){var n=function(t){var r=e.attr,a=e.size,l=e.title,u=re(e,["attr","size","title"]),c=a||t.size||"1em",o;return t.className&&(o=t.className),e.className&&(o=(o?o+" ":"")+e.className),h.createElement("svg",m({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,u,{className:o,style:m(m({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),l&&h.createElement("title",null,l),e.children)};return R!==void 0?h.createElement(R.Consumer,null,function(t){return n(t)}):n(L)}function oe(e){return I({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z"}}]})(e)}const T=e=>e.contacts.contacts,ie=e=>e.filter.filter,ce=X([T,ie],(e,n)=>e.filter(t=>t.name.toLowerCase().includes(n.toLowerCase())));function se(){const[e,n]=S.useState(""),[t,r]=S.useState(""),a=w(),l=s=>{switch(s.target.name){case"name":n(s.target.value);break;case"number":r(s.target.value);break;default:return}},u=q(T),c=s=>{if(s.preventDefault(),u.find(d=>d.name===e)){alert(`${e} is already in contacts`);return}const p={id:Y(),name:e,number:t};a($(p)),o()},o=()=>{n(""),r("")};return i.jsxs(ee,{onSubmit:c,children:[i.jsxs(te,{children:["Add contact ",i.jsx(oe,{})]}),i.jsxs(N,{children:["Name",i.jsx(A,{type:"text",name:"name",value:e,pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"enter name",onChange:l})]}),i.jsxs(N,{children:["Number",i.jsx(A,{type:"tel",name:"number",value:t,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"enter number",onChange:l})]}),i.jsx(ne,{children:"Add contact"})]})}const le=f.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`,ue=f.input`
  padding-top: 10px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid black;

  &:focus {
    background-color: transparent;
    outline: none;
  }
`;function de(){const e=w(),n=t=>e(M(t.target.value));return i.jsxs(le,{children:["Find contact by name",i.jsx(ue,{type:"text",name:"find",onChange:n})]})}function pe(e){return I({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]})(e)}const fe=f.li`
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
`,ge=f.button`
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
`;function _({contact:{id:e,name:n,number:t}}){const r=w(),a=()=>r(H(e));return i.jsxs(fe,{children:[n,": ",t,i.jsx(ge,{type:"button",onClick:a,children:i.jsx(pe,{})})]},e)}_.propTypes={contact:y.shape({id:y.string.isRequired,name:y.string.isRequired,number:y.string.isRequired})};const me=f.ul`
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
`,he=()=>q(ce);function xe(){const e=he();return i.jsx(me,{children:e.map(n=>i.jsx(_,{contact:n},n.id))})}function ve(){const e=w();return S.useEffect(()=>{e(U())},[e]),i.jsxs("div",{children:[i.jsx(se,{}),i.jsx(de,{}),i.jsx(xe,{})]})}export{ve as default};
