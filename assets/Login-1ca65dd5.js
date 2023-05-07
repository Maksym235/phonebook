import{n as a,u as d,j as t,B as m,l as u}from"./index-8b6ebeb4.js";import{T as n}from"./TextField-1f427e5d.js";const c=a.form`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 300px;
  flex-direction: column;
  gap: 20px;
`;a.input``;a.button``;function p(){const i=d(),r=s=>{s.preventDefault();const e=s.currentTarget,o=e.elements.email.value,l=e.elements.password.value;i(u({email:o,password:l})),e.reset()};return t.jsxs(c,{onSubmit:r,children:[t.jsx(n,{id:"standard-basic",label:"email",variant:"standard",type:"email",name:"email"}),t.jsx(n,{id:"standard-basic",label:"password",variant:"standard",type:"password",name:"password"}),t.jsx(m,{type:"submit",children:"Log In"})]})}function g(){return t.jsxs("div",{children:[t.jsx("h1",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Log in"}),t.jsx(p,{})]})}export{g as default};
