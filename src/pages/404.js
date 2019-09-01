import React from 'react';

import Layout from '../components/Layout';
import Section from '../components/Section';
import NotFound from '../components/NotFound';

/**
 * NotFoundPage Component
 */
const NotFoundPage = () => (
  <Layout>
    <Section title="Ошибка">
      <NotFound />
    </Section>
  </Layout>
);

export default NotFoundPage;
