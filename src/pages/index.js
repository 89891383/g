import React from "react";
import { SEO } from "@components/SEO";

import PageTemplate from "@templates/PageTemplate/PageTemplate";
import Header from "@organisms/Header/Header";
import About from "@organisms/About/About";
import Skills from "@organisms/Skills/Skills";
import Contact from "@organisms/Contact/Contact";
import Footer from "@organisms/Footer/Footer";

const IndexPage = () => {
  return (
    <PageTemplate>
      <Header />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </PageTemplate>
  );
};

export default IndexPage;

export const Head = () => <SEO title="Home" />;
