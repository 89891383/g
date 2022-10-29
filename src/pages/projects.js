import React from 'react';
import { SEO } from 'components/SEO';
import PageTemplate from 'components/templates/PageTemplate/PageTemplate';
import Projects from 'components/organisms/Projects/Projects';
import Footer from 'components/organisms/Footer/Footer';

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
