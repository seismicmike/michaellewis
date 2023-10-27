import * as React from 'react';
import Section from '../components/Section';

import Layout from '../components/layout';
import Seo from '../components/seo';
import PageHero from '../components/PageHero';
import ImageHero from '../components/ImageHero';
import Heading2 from '../components/heading2'; 
import TextCopy from '../components/TextCopy';

const AboutPage = () => (
  <Layout>
    <>
      <PageHero title="About Me" />
      <ImageHero imagePath="photo.webp" alt="Me" />
      <Section>
        <>
          <Heading2 text="Worship" />
          <TextCopy>
            <>
              <p>
                The chief end of man is to glorify God and enjoy him forever. As
                a follower of Jesus Christ, it is my mission in life to exalt
                his name to my family, neighbors, friends, and processional
                acquaintances. Whether through private and family worship,
                public gathering with my local church, fellowshiping with my
                local body of believers, or volunteering in sunday school or
                with church projects, I make it my aim to serve Christ in
                whatever I do.
              </p>
            </>
          </TextCopy>
        </>
      </Section>
      <Section>
        <>
          <Heading2 text="Family" />
          <TextCopy>
            <>
              <p>
                My wife, Mandie has been by my side since 2006. Together we have
                5 kids who we homeschool. Loving my wife and my kids is the most
                worthy pursuit God has given me in this life.
              </p>
            </>
          </TextCopy>
        </>
      </Section>
      <Section>
        <>
          <Heading2 text="Music" />
          <TextCopy>
            <>
              <p>
                Music is a particular pleasure of mine. I've played the trombone
                since middle school, and picked up bass guitar as an adult. I
                play in the praise band at church for corporate worship, and
                also in a small CCM cover band that operates out of the church.
                I enjoy jazz, rock, metal, and occasionally even a little
                bluegrass.
              </p>
            </>
          </TextCopy>
        </>
      </Section>
      <Section>
        <>
          <Heading2 text="Other Hobbies" />
          <TextCopy>
            <>
              <p>
                Aside from these, I enjoy playing disc golf, working with my
                hands around the house, and reading.
              </p>
            </>
          </TextCopy>
        </>
      </Section>
      <Section>
        <>
          <Heading2 text="Work" />
          <TextCopy>
            <>
              <p>
                I've been a web developer for 15 years. I started with TQINet
                back in 2008. Later I moved on to Duo Consulting, the NLRB, and
                VML. I have worked remotely my entire career out of my home in
                southwest Ohio.
              </p>
            </>
          </TextCopy>
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
export const Head = () => <Seo title="Bio | Michael Lewis" path="/about" />;

export default AboutPage;
