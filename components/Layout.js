import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

function Layout({ children, ...props }) {
  return (
    <div className="flex flex-col w-full items-center max-w-screen overflow-hidden">
      <Navigation {...props} />
      {/*<main className="w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px]">*/}
      <main className="w-full flex flex-col items-center">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
