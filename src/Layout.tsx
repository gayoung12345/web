import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Layout.css";

const sections = [
  { title: "Home", url: "/" },
  { title: "대구국제블루아트페어", url: "/diaf1" },
  { title: "참가신청", url: "/register" },
  { title: "BlueARtFair", url: "/diaf2" },
  { title: "ContactUs", url: "/contactus" },
  { title: "지난전시", url: "/diaflist" },
];

type Prop = {
  children: React.ReactNode;
};

const Layout = ({ children }: Prop) => {
  return (
    <>
      <Header sections={sections} title="홈페이지" />
      <div>{children}</div>
      <div className="footer">
        <Footer description="dxcom.kr" title="홈페이지" />
      </div>
    </>
  );
};

export default Layout;
