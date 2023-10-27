import React from 'react';

import CaseStudySearchResult from './CaseStudySearchResult';

const studies = [
  {
    id: 1,
    asset: "city-of-hope.webp",
    path: '/case-studies/city-of-hope',
    title: 'City of Hope',
    description:
      'A complete data migration from Oracle with a fresh design, user experience, authoring back-end, and highly tuned search to empower City of Hope to lead the fight against cancer.',
    tags: ['Drupal', 'Apache Solr', 'Migration'],
    orientation: 'left',
    featured: true
  },
  {
    id: 2,
    asset: "lutron-luxury.webp",
    title: 'Lutron Luxury',
    path: '/case-studies/lutron-luxury',
    tags: ['Drupal', 'Acquia Site Studio', 'Leadership', 'Front-End'],
    orientation: 'right',
    description:
      "A content hub, an image gallery, and new components to highlight design projects that showcase the power of Lutron's Luxury line of products"
  },
  {
    id: 3,
    asset: "chicago-botanic.webp",
    title: 'Chicago Botanic Garden',
    path: '/case-studies/chicago-botanic',
    tags: ['Drupal', 'eCommerce', 'API Integrations'],
    orientation: 'left',
    description:
      'An online point of sale to give CBG guests a convenient way to acquire passes for parking and ticketed events at the garden.'
  },
  {
    id: 4,
    asset: "nlrb.webp",
    title: 'National Labor Relations Board',
    path: '/case-studies/nlrb',
    tags: ['Drupal', 'Apache Solr', 'Single Sign On', 'Content Translation'],
    orientation: 'right',
    description:
      'Rescued a project that was 6 months behind schedule.'
  },
  {
    id: 5,
    asset: "myfembree.webp",
    title: 'MyFembree',
    path: '/case-studies/myfembree',
    tags: ['React', 'Gatsby', 'CSS', 'Front-End'],
    orientation: 'left',
    description:
      'Fast and regulatory compliant website to help women suffering from one of two sets of symptoms find information about MyFembree.'
  }
];

const CaseStudiesList = () => (
  <div className="section my-32">
    <div className="case-studies-list max-w-75p mx-auto ">
      {studies.map(item => (
        <React.Fragment key={item.id}>
          <CaseStudySearchResult {...item} />
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default CaseStudiesList;
