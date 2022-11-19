import Head from "next/head";
import React from "react";

function Header({ ...props }) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href="/glenicon.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
}

export default Header;
