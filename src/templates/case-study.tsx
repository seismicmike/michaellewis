import * as React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import PageHero from '../components/PageHero';
import CaseStudySubHeader from '../components/CaseStudySubHeader';
import Section, { SectionProps } from '../components/Section';
import "../styles/templates/case-study.scss";

const CaseStudyTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location
}) => {
  const siteTitle = site.siteMetadata.title || `Title`;
  return (
    <Layout>
      <>
        <article
          className="case-study"
          itemScope
          itemType="https://schema.org/Article"
        >
          <PageHero title={post.frontmatter.title} />
          <CaseStudySubHeader
            showDate={post.frontmatter.showDate}
            date={post.frontmatter.displayDate}
            showLink={post.frontmatter.showLink}
            link={post.frontmatter.link}
            btnBorderColor={post.frontmatter.btnColor}
            btnTxtColor={post.frontmatter.btnColor}
            btnColor={post.frontmatter.btnBgColor}
          />
          <Section>
            <div
              className="case-study-body"
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
          </Section>
        </article>

        <Section>
          <nav className="case-study-nav">
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </Section>
      </>
    </Layout>
  );
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ data: { markdownRemark: post } }) => (
  <Seo
    title={`${post.frontmatter.title} | Michael Lewis`}
    description={post.frontmatter.description}
  />
);

export default CaseStudyTemplate;

export const pageQuery = graphql`
  query CaseStudyBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        showDate
        displayDate: date(formatString: "YYYY")
        showLink
        link
        btnColor
        btnColor
        btnBgColor
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
