import React from 'react';
import { SEO } from '@components/SEO';
import PageTemplate from '@templates/PageTemplate/PageTemplate';
import Projects from '@organisms/Projects/Projects';
import Footer from '@organisms/Footer/Footer';

const ProjectsPage = () => {
  return (
    <PageTemplate>
      <Projects />
      <Footer />
    </PageTemplate>
  );
};

export default ProjectsPage;

export const Head = () => <SEO title="Projects" />;
