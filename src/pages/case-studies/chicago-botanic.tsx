import React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import image from '../../assets/images/chicago-botanic.webp';
import eventCalendar from '../../assets/images/cbg-events.webp';
import CaseStudyDetail from '../../components/CaseStudyDetail';

const caseStudy = {
  title: 'Chicago Botanic Garden',
  date: '2017',
  showDate: true,
  showLink: false,
  path: '/case-studies/chicago-botanic',
  image: image,
  sections: [
    {
      heading: 'Drupal Commerce',
      paragraphs: [
        "The Chicago Botanic Garden was an online point of sale system for guests of the garden who wanted to purchase event tickets, memberships, and parking passes in advance of coming to the park. It leveraged Drupal Commerce to create a fast, beautiful and easy to use website to help guests find the passes they need for the events they wanted to attend. CBG runs 4 annual events that have high volume and require ticketing for very specific time slots. Drupal Commerce was instrumental in keeping straight which event times there were, how many tickets were available, and what the pricing was."
      ]
    },
    {
      heading: 'Gateway Ticketing / Galaxy Backend',
      paragraphs: [
        "The source of truth for pricing, availability, customer data, and sales was a backend system called Galaxy, from Gateway Ticketing Systems. All tickets listed on the website had to be keep up-to-the-minute for availability and pricing from eGalaxy. This required developing fast, efficient code to communicate to the Galaxy API in real time, creating scheduled imports from Galaxy to nightly update event availability, and weekly imports of Memberhsip pass information that could be used for verification."
      ]
    },
    {
      heading: 'Event Calendar',
      paragraphs: [
        "A primary feature I developed was the event calendar, a filterable list of available events that were available to purchase. This required leveraging Drupal's internal caching system to create performant results that were as up-to-the-minute as possible. We used nightly imports to feed the list of events, then cached the results to create the search list. Then, when a user loaded the event detail page, updated ticketing information was fetched from Galaxy to verify that tickets were still available. If necessary, relevant information was used to refresh the cached search results so that events that were known to be sold out, were grayed out on the results page."
      ],
      images: [
        {
          src: eventCalendar,
          alt: 'CBG Event Calendar',
        }
      ]
    }
  ]
};

const ChicagoBotanic = () => (
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

export default ChicagoBotanic;
