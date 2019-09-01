import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Section from '../components/Section';
import NotFound from '../components/NotFound';

/**
 * NotFoundPage Component
 */
const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <Section title="Ошибка">
      <NotFound />
    </Section>
  </Layout>
);

export default NotFoundPage;
