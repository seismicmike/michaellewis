import React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import CaseStudyDetail from '../../components/CaseStudyDetail';

const caseStudy = {
  title: 'Lutron Luxury v2',
  date: '2023',
  showDate: true,
  showLink: true,
  link: 'https://luxury.lutron.com',
  path: '/case-studies/lutron-luxury',
  image: "lutron-luxury.webp",
  sections: [
    {
      heading: 'Content Hub',
      paragraphs: [
        'Luxury designers like Sasha Bikoff have used Lutron projects to create stunning interior designs that can only be considered works of art. In order to show off these projects, and highlight the ways that Lutron facilitated their creation, a Content Hub featured a filterable list of articles, visually stunning components, and engaging animations was created.'
      ],
      images: [
        {
          src: "lutron-content-hub.webp",
          link: 'https://luxury.lutron.com/stories',
          alt: 'Lutron Luxury v2 Content Hub'
        },
        {
          src: "lutron-hamptons-barnhouse.webp",
          link: 'https://luxury.lutron.com/stories/hamptons-barnhouse-case-study',
          alt: 'Lutron Luxury v2 Hamptons Barnhouse Project Case Study'
        }
      ]
    },
    {
      heading: 'Image Gallery',
      paragraphs: [
        'Home spaces that are augmented with Lutron projects create stunning visuals that must be shown off! The Image Gallery collects photographs from all the various projects into an array of high quality graphics that provide inspiration to anyone who wants to spruce up their decor.'
      ],
      images: [
        {
          src: "lutron-image-gallery.webp",
          link: 'https://luxury.lutron.com/gallery',
          alt: 'Lutron Luxury v2 Image Gallery'
        }
      ]
    },
    {
      heading: 'Acquia Site Studio',
      paragraphs: [
        'Under the hood, the Lutron website was built using Acquia Site Studio. Site Studio allows construction and arrangement of content components with no backend coding required. Components can be created as building blocks to be used to build larger components, or saved as templates that can be dropped in and arranged on any page. The flexibility of Site Studio is virtually endless.'
      ]
    }
  ]
};

const LutronLuxury = () => (
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

export default LutronLuxury;
