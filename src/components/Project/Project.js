import React from 'react';
import styled from 'styled-components';

import { _color } from '../../base/constants';

/**
 * Styled Components
 */
const ProjectBlock = styled.a`
  display: block;
  cursor: pointer;
  color: ${_color.primary};
`;

const ProjectHead = styled.div`
  position: relative;
  z-index: 1;
  margin-right: 30px;
  padding: 15px 30px 65px;
  border: 3px solid ${_color.primary};
  transition: border-color .2s ease-in-out;

  ${ProjectBlock}:hover & {
    border-color: ${_color.accent};
  }
`;

const ProjectTitle = styled.h3`
  margin: 0;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.2;
  text-transform: uppercase;
  transition: color .2s ease-in-out;

  &:before {
    content: '/';
  }

  ${ProjectBlock}:hover & {
    color: ${_color.accent};
  }
`;

const ProjectDesc = styled.div`
  margin: 5px 0;
  font-size: 1rem;
  line-height: 1;
  transition: opacity .2s ease-in-out;

  ${ProjectBlock}:hover & {
    opacity: 0;
  }
`;

const ProjectBody = styled.div`
  margin-top: -60px;
  margin-left: 30px;
  max-height: 320px;
  overflow: hidden;
  overflow: auto;
  transition: all .2s ease-in-out;

  ${ProjectBlock}:hover & {
    position: relative;
    z-index: 1;
    box-shadow: 0 30px 50px -30px rgba(0, 0, 0, 0.2);
    transform: translate3d(0, -20px, 0);
  }
`;

const ProjectPicture = styled.img`
  display: block;
`;

/**
 * Project Component
 */
const Project = (props) => {
  return (
    <ProjectBlock>
      <ProjectHead>
        <ProjectTitle>{props.title}</ProjectTitle>
        <ProjectDesc>{props.desc}</ProjectDesc>
      </ProjectHead>
      <ProjectBody>
        <ProjectPicture src={props.picture} />
      </ProjectBody>
    </ProjectBlock>
  );
};

export default Project;
