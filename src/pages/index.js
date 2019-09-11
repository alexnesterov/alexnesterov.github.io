import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Info from '../components/Info';
import Section from '../components/Section';
import Social from '../components/Social';
import Projects from '../components/Projects';

/**
 * IndexPage Component
 */
const IndexPage = () => (
  <Layout>
    <SEO />
    <Section>
      <Info />
    </Section>
    <Section title="Проекты">
      <Projects params="per_page=4" viewAll={true} />
    </Section>
    <Section title="Контакты">
      <Social />
    </Section>
  </Layout>
);

export default IndexPage;
