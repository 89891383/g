import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const SkillsQuery = ({ setSkills }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          revku {
            skillsConnection {
              edges {
                node {
                  id
                  levelName
                  name
                  icon {
                    url
                    id
                    fileName
                  }
                  background {
                    hex
                  }
                  text {
                    hex
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const items = data.revku.skillsConnection.edges;
        setSkills(items);
      }}
    />
  );
};

export default SkillsQuery;
