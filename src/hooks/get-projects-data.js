import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const ProjectsQuery = ({ setProjects }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          revku {
            projectsConnection {
              edges {
                node {
                  title
                  screenshot {
                    url
                  }
                  livePreview
                  sourceCode
                  id
                  description {
                    text
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const items = data.revku.projectsConnection.edges;
        setProjects(items);
      }}
    />
  );
};

export default ProjectsQuery;
