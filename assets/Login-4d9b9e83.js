import{n as t,N as l,a as c,j as e,l as d}from"./index-4eeeb8c5.js";const x=t.form`
  padding: 143px 0px;
  margin: 0px auto;
  display: flex;
  width: 430px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`,g=t.h1`
  margin: 0;
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 40px;
  line-height: 43px;
  letter-spacing: 0.01em;
  color: #1b1b1b;
`,o=t.input`
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
`,h=t.button`
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
`,m=t.p`
  font-weight: 400;
  font-size: 17px;
  line-height: 26px;
  color: #1b1b1b;
  margin: 0;
`,f=t(l)`
  margin: 0;
  font-weight: 600;
  text-decoration: none;
  font-size: 17px;
  line-height: 26px;
  display: flex;
  align-items: flex-end;
  color: #000000;
`;function u(){const r=c(),a=i=>{i.preventDefault();const n=i.currentTarget,s=n.elements.email.value,p=n.elements.password.value;r(d({email:s,password:p})),n.reset()};return e.jsxs(x,{onSubmit:a,children:[e.jsx(g,{children:"Log in"}),e.jsx(o,{label:"email",type:"email",name:"email",placeholder:"enter your email"}),e.jsx(o,{label:"password",type:"password",name:"password",placeholder:"enter your password"}),e.jsx(h,{type:"submit",children:"Log In"}),e.jsx(m,{children:"Don’t have an account?"}),e.jsx(f,{to:"/register",children:"Register"})]})}const b=t.div`
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  background-image: url("/src/assets/FormBg.jpg");
  background-size: cover;
  border-radius: 50px;
`;function j(){return e.jsx(b,{children:e.jsx(u,{})})}export{j as default};
