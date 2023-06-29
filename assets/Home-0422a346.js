import{n as t,N as o,u as s,j as e}from"./index-4eeeb8c5.js";const a=t.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`,r=t.div`
  top: -122px;
  right: -80px;
  position: absolute;
  width: 700px;
  height: 929px;
  flex-shrink: 0;
  border-radius: 50px 0px 0px 50px;
  background-color: #bcbff2;
  background-image: url("./src/assets/mainIimg.png");
  background-repeat: no-repeat;
  background-position: center center;
`,l=t.div`
  width: 620px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
`,c=t.p`
  font-weight: 600;
  margin: 0;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: flex-end;
  color: #ffffff;
`,p=t.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 43px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin: 0;
`,d=t.p`
  font-weight: 400;
  margin: 0;
  font-size: 17px;
  line-height: 26px;
  display: flex;
  align-items: flex-end;
  color: #a6a6a6;
`,i=t(o)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 49px;
  margin-top: 20px;
  padding: 0;
  border: none;
  border-radius: 50px;
  background: #bcbff2;
  text-decoration: none;
  font-weight: 600;
  font-size: 17px;
  line-height: 26px;
  color: #000000;
`;function x(){const{user:n}=s();return console.log(n),e.jsxs(l,{children:[e.jsx(c,{children:"All your contacts in one place"}),e.jsx(p,{children:"Call U - Keep all your contacts in a safe place and easily share them with your friends"}),e.jsx(d,{children:"A contact storage tool is a digital application designed to help users store, manage, and organize their contacts. With this tool, users can save their contacts' information, such as names, phone numbers, email addresses, and social media profiles, in a centralized location."}),n?e.jsx(i,{to:"/contacts",children:"Get started"}):e.jsx(i,{to:"/register",children:"Get started"})]})}function g(){return e.jsxs(a,{children:[e.jsx(x,{}),e.jsx(r,{})]})}export{g as default};
