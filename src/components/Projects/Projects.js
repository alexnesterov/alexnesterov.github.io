import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Project from '../Project';

/**
 * Styled Components
 */
const ProjectsBlock = styled.div``;

const ProjectsList = styled.ul`
  margin: -80px 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProjectsItem = styled.li`
  margin: 0;
  padding: 80px 15px 0 15px;
  flex: 1 1 380px;
  max-width: 380px;
`;

/**
 * Projects Component
 */
const Projects = () => {
  const data = useStaticQuery(graphql`
    query projectsQuery {
      allWordpressWpProjects {
        edges {
          node {
            id
            title
            excerpt
            acf {
              link
              picture {
                id
                source_url
              }
            }
          }
        }
      }
    }
  `);

  return (
    <ProjectsBlock>
      <ProjectsList>
        {data.allWordpressWpProjects.edges.map(({ node }) => (
          <ProjectsItem key={node.id}>
            <Project
              title={node.title}
              desc={node.excerpt}
              picture={node.acf.picture.source_url}
              link={node.acf.link}
            />
          </ProjectsItem>
        ))}
      </ProjectsList>
    </ProjectsBlock>
  );
};

export default Projects;
