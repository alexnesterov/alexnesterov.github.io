import React from 'react';
import styled from 'styled-components';
import { _media, _color } from '../../base/constants';
import axios from 'axios';
import { Link } from 'gatsby';

import Project from '../Project';

/**
 * Styled Components
 */
const ProjectsBlock = styled.div``;

const ProjectsList = styled.ul`
  margin: -80px 0 0;
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

const ProjectsViewAll = styled.div`
  margin-top: 80px;
  text-align: center;

  a {
    position: relative;
    display: inline-block;
    padding: 2px;
    font-size: 0.875rem;
    text-transform: uppercase;
    color: ${_color.accent};
    transition: color .2s ease-in-out;

    &:hover {
      color: ${_color.primary};

      &:before,
      &:after {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      width: 10px;
      height: 1px;
      background-color: ${_color.accent};
      opacity: 0;
      transition: 0.2s ease-in-out;
    }

    &:before {
      right: 100%;
      margin-right: 5px;
      transform: translate3d(-10px, 0, 0);
    }

    &:after {
      left: 100%;
      margin-left: 5px;
      transform: translate3d(10px, 0, 0);
    }
  }
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
          <>
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
            {this.props.viewAll && (
              <ProjectsViewAll to="/projects">
                <Link to="/projects">
                  <span>Все проекты</span>
                </Link>
              </ProjectsViewAll>
            )}
          </>
        )}
      </ProjectsBlock>
    );
  }
}

export default Projects;
