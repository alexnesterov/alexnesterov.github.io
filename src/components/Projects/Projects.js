import React from 'react';
import styled from 'styled-components';

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
  return (
    <ProjectsBlock>
      <ProjectsList>
        <ProjectsItem>
          <Project
            title="Live Hotel"
            desc="Вёрстка"
            picture="https://api.alexjs.dev/wp-content/uploads/2019/09/LiveHotel-Live-in-a-hotel-localhost.jpg"
          />
        </ProjectsItem>
        <ProjectsItem>
          <Project
            title="Live Hotel"
            desc="Вёрстка"
            picture="https://api.alexjs.dev/wp-content/uploads/2019/09/TrapFi-Welcome-code.alexjs.dev_.jpg"
          />
        </ProjectsItem>
        <ProjectsItem>
          <Project
            title="Live Hotel"
            desc="Вёрстка"
            picture="https://api.alexjs.dev/wp-content/uploads/2019/09/LiveHotel-Live-in-a-hotel-localhost.jpg"
          />
        </ProjectsItem>
        <ProjectsItem>
          <Project
            title="Live Hotel"
            desc="Вёрстка"
            picture="https://api.alexjs.dev/wp-content/uploads/2019/09/LiveHotel-Live-in-a-hotel-localhost.jpg"
          />
        </ProjectsItem>
      </ProjectsList>
    </ProjectsBlock>
  );
};

export default Projects;
