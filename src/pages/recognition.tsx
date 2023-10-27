import React from 'react';

import Seo from '../components/seo';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import Heading2 from '../components/heading2';
import ImageHero from '../components/ImageHero';
import certificateImage from '../assets/images/acquia-certificate.webp';
import award from '../assets/images/ehealthcare-leadership.webp';
import Layout from '../components/layout';
import TextCopy from '../components/TextCopy';
import { Link } from 'gatsby';

const Recognition = () => (
  <Layout>
    <>
      <PageHero title="Recognition" />
      <Section>
        <>
          <Heading2 text="2022 eHealthcare Leadership Award - City of Hope" />
          <ImageHero
            alt="2022 eHealthcare Leadership Awards"
            link="https://ehealthcareawards.com/2022-winners/best-site-design/"
            imageAsset={award}
          />
          <TextCopy>
            <p>
                In 2022, my work on City of Hope won them the Platinum award for Best Site Design for a hostpital with 200-399 beds. <Link className="text-blue-100 hover:underline" to="/case-studies/city-of-hope">Read More</Link>
            </p>
          </TextCopy>
        </>
      </Section>
      <Section>
        <>
          <Heading2 text="2018 Acquia Certified Drupal Developer - Drupal 8" />
          <ImageHero
            alt="Acquia Certified Drupal Developer - Drupal 8"
            imageAsset={certificateImage}
          />
        </>
      </Section>
    </>
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
  <Seo title="Recognition | Michael Lewis" path="/about" />
);

export default Recognition;
