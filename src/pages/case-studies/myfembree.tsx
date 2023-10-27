import React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import CaseStudyDetail from '../../components/CaseStudyDetail';

const caseStudy = {
  title: 'MyFembree',
  date: '2023',
  showDate: true,
  showLink: true,
  link: 'https://www.myfembree.com',
  path: '/case-studies/myfembree',
  image: "myfembree.webp",
  sections: [
    {
      heading: 'Fast Compliant Website',
      paragraphs: [
        'MyFembree was a React project using Gatsby. The website is fast and simple, providing women who suffer with one of two health conditions information about MyFembree. From the site, prospective patients learn how to talk to their doctors about MyFembree and what to expect when taking it. Content on the site had to be validated by a review board down to the letter for compliance with FDA regulations. Once approved, any change would require a re-review of the entire site. So we were able to use Gatsby without even an API backend to lock in the specific verbiage and bundle the site as an extremely performant single-page app.'
      ]
    }
  ]
};


const MyFembree = () => (
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

export default MyFembree;
