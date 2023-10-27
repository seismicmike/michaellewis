import React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import CaseStudyDetail from '../../components/CaseStudyDetail';

const caseStudy = {
  title: 'City of Hope',
  date: '2022',
  showDate: true,
  showLink: true,
  link: 'https://www.cityofhope.org',
  path: '/case-studies/city-of-hope',
  image: 'city-of-hope.webp',
  sections: [
    {
      heading: 'Award Winning Development',
      paragraphs: [
        "The eHealthcare Leadership Awards recognize outstanding health websites and digital initiatives, highlighting the role of digital communications in achieving healthcare organizations' business objectives. In 2022, City of Hope won the Platinum award for Best Site Design for a Hospital with 200-399 Beds."
      ],
      images: [
        {
          link: 'https://ehealthcareawards.com/2022-winners/best-site-design/',
          src: 'ehealthcare-leadership.webp',
          alt: 'eHealthcare Leadership Awards'
        }
      ]
    },
    {
      heading: 'Data Migration',
      paragraphs: [
        'City of Hope had over 6,000 pages across a variety of templates and nested in a hierarchical structure in a site built on Oracle WebCenter Sites. We created a series of new well-crafted content types, paragraph components and taxonomies and used the Drupal migrate module to import these pages into Drupal, creating beautiful easily searchable pages.'
      ]
    },
    {
      heading: 'Design Refresh',
      paragraphs: [
        'Building a new website on Drupal gave us a great opportunity to refresh the design of the site, bringing the look of City of Hope into the modern age of web.'
      ],
      images: []
    },
    {
      heading: 'Hierarchical Navigation',
      paragraphs: [
        "Using Oracle's Hierarchical Content Services, the old website had been structured in a nested series of pages. This presented an interesting challenge when moving to Drupal. In Drupal, pages are not usually linked together in a hierarchy. Any relationships between pages is handled loosely through entity relationships, menus, taxonomies, or breadcrumbs based on path alias. To replicate the to called \"Left Nav\" present on their old site, we imported the hierarchy relationships into a custom menu and developed a new paragraph component display the menu tree from a selected top level point."
      ]
    },
    {
      heading: 'Robust Search',
      paragraphs: [
        "Bringing City of Hope's content into Drupal allowed us to leverage the Search API along with the taxonomy and content type models we designed to create a robust search experience. Using Search API, Apache Solr, Facets, Drupal Views and Google Maps Geolocation, we were able to generate a Find a Doctor search and a Find a Location search in addition to their global site search. These new searches are fast and accurate.",
        "Having done that, we went to the next step and created a bespoke system of Search Journey entities that City of Hope site admins could use to comb the search results based on the section of the site a user is in and other factors. This gave City of Hope full control of the search experience so they can make sure users find exactly the page(s) they need."
      ]
    }
  ]
};

const CityOfHope = () => (
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

export default CityOfHope;
