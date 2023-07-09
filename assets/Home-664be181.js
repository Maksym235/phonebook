import{n as e,N as r,u as a,j as n,l as p,a as l,b as c,r as d,c as x}from"./index-bd7a5fe7.js";import{A as g}from"./index.esm-b5375cd3.js";import"./iconBase-43035025.js";const f=e.div`
  position: relative;
  display: flex;
  @media (min-width: 1280px) {
    justify-content: space-between;
  }
`;e.div`
  width: 300px;
  height: 315px;
  top: 0;
  left: 0;
  position: absolute;
  background-color: #bcbff2;
  background-image: url("./src/assets/mainMobile.png");
  background-repeat: no-repeat;
  background-position: center center;
  @media (min-width: 1280px) {
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
  }
`;e.div`
  width: 620px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
`;e.p`
  font-weight: 600;
  margin: 0;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: flex-end;
  color: #ffffff;
`;e.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 43px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin: 0;
`;e.p`
  font-weight: 400;
  margin: 0;
  font-size: 17px;
  line-height: 26px;
  display: flex;
  align-items: flex-end;
  color: #a6a6a6;
`;e(r)`
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
`;const u=e.div`
  z-index: 1000;
  position: absolute;
  top: -94px;
  left: -20px;
  width: 100vw;
  height: 90vh;
  background-color: #1b1b1b;
  background-image: url("./assets/bgLines3x.png");
  background-size: cover;
`,h=e.div`
  padding: 20px;
`,b=e.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,m=e.button`
  cursor: pointer;
  position: absolute;
  padding: 0;
  margin-top: 10px;
  background-color: transparent;
  border: none;
`,k=e.button`
  cursor: pointer;
  z-index: 1000;
  display: inline-flex;
  height: 49px;
  padding: 13px 59px;
  justify-content: center;
  align-items: center;
  border: none;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 50px;
  font-size: 17px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background-color: #bcbff2;
  color: #000;
`,j=({togleOpen:i})=>{const o=a(),t=()=>{o(c())},s=()=>{i()};return n.jsx(u,{children:n.jsxs(h,{children:[n.jsx(m,{onClick:s,children:n.jsx(g,{color:"#bcbff2",size:35})}),n.jsx(b,{children:n.jsx("img",{src:p,alt:"logo"})}),n.jsx(l,{}),n.jsx(k,{type:"button",onClick:t,children:"Log out"})]})})};function z(){const[i,o]=d.useState(!1);x();const t=()=>{o(s=>!s)};return n.jsxs(f,{children:[n.jsx("button",{onClick:t,children:"open"}),i&&n.jsx(j,{togleOpen:t})]})}export{z as default};
