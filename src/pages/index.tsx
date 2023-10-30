import * as React from "react"

import Layout from "../components/layout";
import Seo from "../components/seo";
import FrontHero from "../components/FrontHero";
import StatsBanner from "../components/StatsBanner";
import FeaturedStudies from "../components/FeaturedStudies";
import SkillsBanner from "../components/SkillsBanner";
import '../styles/components/case-study-teaser.scss';

const stats = [
  {
    id: 1,
    value: '15',
    label: 'Years of Experience'
  },
  {
    id: 2,
    value: '75+',
    label: 'Sites Worked On'
  },
  {
    id: 3,
    value: '12+',
    label: 'Data Migrations'
  },
  {
    id: 4,
    value: '2',
    label: 'Awards and Certifications'
  }
];

const IndexPage = () => (
  <Layout>
    <>
      <FrontHero />
      <StatsBanner stats={stats} />
      <FeaturedStudies />
      <SkillsBanner />
    </>
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home | Michael Lewis" />

export default IndexPage
