import React from 'react';
import styled from 'styled-components';
import { _media } from '../../base/constants';
import axios from 'axios';

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
`;

const ProjectsItem = styled.li`
  margin: 0;
  padding: 80px 15px 0 15px;
  flex: 1 1 50%;
  max-width: 50%;

  ${_media.mobile`
    flex: 1 1 100%;
    max-width: 100%;
  `}
`;

const ProjectsLoading = styled.div`
  text-align: center;
`;

/**
 * Projects Component
 */
const myAPI = 'https://api.alexjs.dev';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // инициализируем состояние по-умолчанию
      params: '?' + props.params || '',
      projects: [],
      loading: true,
    };
  }

  componentWillMount() {
    return axios
      .get(myAPI + '/wp-json/wp/v2/projects' + this.state.params)
      .then(response => {
        this.setState({
          projects: response.data,
          loading: false,
        });
      });
  }

  render() {
    return (
      <ProjectsBlock>
        {this.state.loading ? (
          <ProjectsLoading>Загрузка...</ProjectsLoading>
        ) : (
          <ProjectsList>
            {this.state.projects.map(project => (
              <ProjectsItem key={project.id}>
                <Project
                  title={project.title.rendered}
                  desc={project.excerpt.rendered}
                  picture={project.acf.picture}
                  link={project.acf.link}
                />
              </ProjectsItem>
            ))}
          </ProjectsList>
        )}
      </ProjectsBlock>
    );
  }
}

export default Projects;
