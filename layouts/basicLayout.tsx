import React, { ReactNode } from "react";
import Head from "next/head";
import Footer from "../components/footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* head */}
      <Head>
        <title>Create Next App</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, width=device-width"
        />
      </Head>
      {/* main container */}
      <main className="layout">{children}</main>
      {/* footer */}
      <Footer />
    </>
  );
};

export default Layout;
