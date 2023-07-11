import{n as e,N as s,u as r,a as p,j as i,A as o}from"./index-e63d8b1e.js";const d=e.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  @media (min-width: 1280px) {
    justify-content: space-between;
  }
`,x=e.div`
  width: 350px;
  height: 365px;
  top: 0;
  right: -20px;
  border-radius: 20px 0 0 20px;
  position: absolute;
  background-color: #bcbff2;
  background-image: url("./public/assets/mainMobile.png");
  background-size: 289px 198px;
  background-repeat: no-repeat;
  background-position: right 40%;
  @media (min-width: 768px) {
    top: -100px;
    width: 450px;
    height: 465px;
    background-size: 380px 290px;
    background-position: right center;
  }
  @media (min-width: 1280px) {
    top: -122px;
    right: -80px;
    width: 700px;
    height: 929px;
    border-radius: 50px 0px 0px 50px;
    background-color: #bcbff2;
    background-image: url("./public/mainIimg.png");
    background-size: 674px 661px;
    background-repeat: no-repeat;
    background-position: center center;
  }
`,c=e.div`
  margin-top: 370px;
  margin-bottom: 20px;
  width: 620px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  @media (min-width: 768px) {
    margin: 0;
    width: 400px;
  }
  @media (min-width: 1280px) {
    margin: 0;
  }
`,l=e.p`
  font-weight: 600;
  margin: 0;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: flex-end;
  color: #ffffff;
`,g=e.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 43px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin: 0;
`,h=e.p`
  font-weight: 400;
  margin: 0;
  font-size: 17px;
  line-height: 26px;
  display: flex;
  align-items: flex-end;
  color: #a6a6a6;
`,a=e(s)`
  @media (max-width: 767px) {
    position: absolute;
    top: 275px;
    right: 0px;
    z-index: 999;
    border: 2px solid #1b1b1b;
    gap: 10px;
  }
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
`;function f(){const{isMobile:t}=r(),{user:n}=p();return console.log(n),i.jsxs(c,{children:[i.jsx(l,{children:"All your contacts in one place"}),i.jsx(g,{children:"Call U - Keep all your contacts in a safe place and easily share them with your friends"}),i.jsx(h,{children:"A contact storage tool is a digital application designed to help users store, manage, and organize their contacts. With this tool, users can save their contacts' information, such as names, phone numbers, email addresses, and social media profiles, in a centralized location."}),n?i.jsxs(a,{to:"/contacts",children:["Get started ",t&&i.jsx(o,{size:24})]}):i.jsxs(a,{to:"/register",children:["Get started",t&&i.jsx(o,{size:24})]})]})}function u(){return i.jsxs(d,{children:[i.jsx(f,{}),i.jsx(x,{})]})}export{u as default};
