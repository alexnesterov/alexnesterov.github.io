import React from 'react';

import Layout from '../layouts/Main';
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
