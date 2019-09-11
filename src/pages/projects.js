import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Section from '../components/Section';
import Projects from '../components/Projects';
import Social from '../components/Social';

/**
 * ProjectsPage Component
 */
const ProjectsPage = () => {
  return (
    <Layout>
      <SEO />
      <Section title="Проекты">
        <Projects />
      </Section>
      <Section title="Контакты">
        <Social />
      </Section>
    </Layout>
  );
};

export default ProjectsPage;
