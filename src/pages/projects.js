import React from "react";
import { SEO } from "@components/SEO";
import PageTemplate from "@templates/PageTemplate/PageTemplate";

const ProjectsPage = () => {
  return <PageTemplate>Projects</PageTemplate>;
};

export default ProjectsPage;

export const Head = () => <SEO title="Projects" />;
