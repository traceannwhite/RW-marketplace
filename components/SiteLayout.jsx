import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";

const SiteLayout = (props) => {
  return (
    <>
      <Head>
        <title>Resonance and Wonder - a Marketplace</title>
      </Head>
      <main>
        <NavBar />
        {props.children}
        <Footer />
      </main>
    </>
  );
};

export default SiteLayout;
