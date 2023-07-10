import{n,N as c,b as d,j as e,s as x}from"./index-f15ed56c.js";const g=n.form`
  padding: 143px 0px;
  margin: 0px auto;
  display: flex;
  width: 430px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`,m=n.h1`
  margin: 0;
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 40px;
  line-height: 43px;
  letter-spacing: 0.01em;
  color: #1b1b1b;
`,i=n.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 400px;
  padding: 17px 0px 17px 30px;
  gap: 10px;
  background: #adafdd;
  border-radius: 20px;
  border: none;

  &::placeholder {
    font-weight: 400;
    font-size: 17px;
    line-height: 26px;
    color: #eaeaea;
  }
`,h=n.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 59px;
  gap: 10px;
  width: 430px;
  height: 49px;
  background: #1b1b1b;
  border-radius: 50px;
  font-weight: 600;
  font-size: 17px;
  line-height: 26px;
  color: #ffffff;
`,u=n.p`
  font-weight: 400;
  font-size: 17px;
  line-height: 26px;
  color: #1b1b1b;
  margin: 0;
`,f=n(c)`
  margin: 0;
  font-weight: 600;
  text-decoration: none;
  font-size: 17px;
  line-height: 26px;
  display: flex;
  align-items: flex-end;
  color: #000000;
`;function b(){const a=d(),r=o=>{o.preventDefault();const t=o.currentTarget,s=t.elements.name.value,l=t.elements.email.value,p=t.elements.password.value;a(x({name:s,email:l,password:p})),t.reset()};return e.jsxs(g,{onSubmit:r,children:[e.jsx(m,{children:"Sign Up"}),e.jsx(i,{label:"login",type:"text",name:"name",placeholder:"enter your login"}),e.jsx(i,{label:"email",type:"email",name:"email",placeholder:"enter your email"}),e.jsx(i,{label:"password",type:"password",name:"password",placeholder:"enter your password"}),e.jsx(h,{type:"submit",children:"Sign Up"}),e.jsx(u,{children:"Already have an account?"}),e.jsx(f,{to:"/login",children:"Log in"})]})}const w=n.div`
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  background-image: url("/src/assets/FormBg.jpg");
  background-size: cover;
  border-radius: 50px;
`;function y(){return e.jsx(w,{children:e.jsx(b,{})})}export{y as default};
