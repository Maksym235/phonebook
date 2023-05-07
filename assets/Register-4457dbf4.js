import{n as s,u as m,j as e,B as p,s as c}from"./index-8b6ebeb4.js";import{T as a}from"./TextField-1f427e5d.js";const u=s.form`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 300px;
  flex-direction: column;
  gap: 20px;
`;s.input``;s.button``;function x(){const i=m(),r=n=>{n.preventDefault();const t=n.currentTarget,l=t.elements.name.value,d=t.elements.email.value,o=t.elements.password.value;i(c({name:l,email:d,password:o})),t.reset()};return e.jsxs(u,{onSubmit:r,children:[e.jsx(a,{id:"standard-basic",label:"login",variant:"standard",type:"text",name:"name"}),e.jsx(a,{id:"standard-basic",label:"email",variant:"standard",type:"email",name:"email"}),e.jsx(a,{id:"standard-basic",label:"password",variant:"standard",type:"password",name:"password"}),e.jsx(p,{type:"submit",children:"Sign Up"})]})}function j(){return e.jsxs("div",{children:[e.jsx("h1",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Sign Up"}),e.jsx(x,{})]})}export{j as default};
