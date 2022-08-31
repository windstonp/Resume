import Head from "next/head";
import React from "react";
import { ContactTemplate } from "../templates/ContactTemplate";

export default function Contact(){
  return(
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactTemplate/>
    </>
  );
}