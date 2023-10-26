import React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import image from '../../assets/images/nlrb.webp';
import CaseStudyDetail from '../../components/CaseStudyDetail';

const caseStudy = {
  title: 'National Labor Relations Board',
  date: '2020',
  showDate: true,
  showLink: true,
  link: 'https://www.nlrb.gov',
  path: '/case-studies/nlrb',
  image: image,
  sections: [
    {
      heading: 'Rescuing a Derailed Project',
      paragraphs: [
        "In Q3 of 2019, NLRB embarked on a 12 month project to migrate their site to Drupal 8 from Drupal 7, implement new Apache Solr based search interfaces to allow the public to search FOIA records, Case Decisions, and ongoing case filings that had been publicly released. Further, the site needed Spanish translation, Single Sign on, and many other improvements. I was brought on 6 months into the project when the entire development team had resigned and the project was significantly behind schedule. Through effective communication and teamwork, we were able to get the project back on track and complete all objectives by the end of Q3 2020."
      ]
    }
  ]
};

const NLRB = () => (
  <Layout>
    <CaseStudyDetail {...caseStudy} />
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
  <Seo title={`${caseStudy.title} | Michael Lewis`} path={caseStudy.path} />
);

export default NLRB;
