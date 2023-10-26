import * as React from 'react';

import Layout from '../../components/layout';
import Seo from '../../components/seo';
import PageHero from '../../components/PageHero';
import CaseStudiesList from '../../components/CaseStudiesList';

const CaseStudiesPage = () => (
  <Layout>
    <>
      <PageHero title="Case Studies" />
      <CaseStudiesList />
    </>
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
  <Seo title="Case Studies | Michael Lewis" path="/case-studies" />
);

export default CaseStudiesPage;
