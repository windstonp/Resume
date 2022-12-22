import { NextSeo } from 'next-seo';
import React from 'react';
import { ContactTemplate } from '../screens/Contact';

export default function Contact() {
  return (
    <>
      <NextSeo title="Contact" />
      <ContactTemplate />
    </>
  );
}
