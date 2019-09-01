import React from 'react';

import Layout from '../components/Layout';
import Info from '../components/Info';
import Section from '../components/Section';
import Social from '../components/Social';

/**
 * IndexPage Component
 */
const IndexPage = () => (
  <Layout>
    <Section>
      <Info />
    </Section>
    <Section title="Контакты">
      <Social />
    </Section>
  </Layout>
);

export default IndexPage;
