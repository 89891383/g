import React from 'react';
import { SEO } from 'components/SEO';

import PageTemplate from 'components/templates/PageTemplate/PageTemplate';
import Header from 'components/organisms/Header/Header';
import About from 'components/organisms/About/About';
import Skills from 'components/organisms/Skills/Skills';
import Contact from 'components/organisms/Contact/Contact';
import Footer from 'components/organisms/Footer/Footer';

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
