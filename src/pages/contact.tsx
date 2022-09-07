import Head from "next/head";
import React from "react";
import { ContactTemplate } from "../screens/Contact";

export default function Contact(){
  return(
    <>
      <Head>
        <title>Contact | J.Alves</title>
      </Head>
      <ContactTemplate/>
    </>
  );
}