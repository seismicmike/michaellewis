import * as React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import PageHero from '../components/PageHero';
import Image from '../components/Image';
import Heading2 from '../components/heading2';
import Section from '../components/Section';
import '../styles/components/case-study-teaser.scss';

const CaseStudiesPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;
  // console.log(posts);

  if (posts.length === 0) {
    return (
      <Layout>
        <>
          <PageHero title="Case Studies" />
          <Section>
            <p>
              No case studies found. Add markdown posts to
              "content/case-studies" (or the directory you specified for the
              "gatsby-source-filesystem" plugin in gatsby-config.js).
            </p>
          </Section>
        </>
      </Layout>
    );
  }

  return (
    <Layout>
      <>
        <PageHero title="Case Studies" />
        <Section className="section my-32 case-studies-list">
          {posts.map((post, k) => {
            console.log(post.frontmatter.tags);
            const title = post.frontmatter.title || post.fields.slug;

            return (
              <div key={post.fields.slug}>
                <article
                  className="case-study-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <Link to={post.fields.slug} itemProp="url">
                    <div
                      className={`case-study-result sm:mb-16 sm:flex gap-16`}
                    >
                      <div
                        className={`case-study-result__image mb-4 basis-1/2 ${
                          k % 2 == 0 ? 'order-0' : 'order-2'
                        }`}
                      >
                        <Image
                          src={`${post.frontmatter.id}.webp`}
                          alt={post.frontmatter.description}
                        />
                      </div>
                      <div className="case-study-result__detail  basis-1/2">
                        <div className="case-study-result__title">
                          <Heading2
                            color="text-blue-100"
                            className={`mb-4 text-md4`}
                            text={title}
                          />
                        </div>
                        <div
                          className={`case-study-result__description text-lg mb-4`}
                        >
                          {post.frontmatter.description}
                        </div>
                        {post.frontmatter.tags.length !== 0 ? (
                          <div className="text-md3 mt-2">
                            <span className="font-bold">Skills Featured: </span>
                            <ul className="case-study-result__skills inline">
                              {post.frontmatter.tags.map(tag => (
                                <li className="inline">{tag}</li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                    </div>
                  </Link>
                </article>
              </div>
            );
          })}
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
export const Head = () => (
  <Seo title="Case Studies | Michael Lewis" path="/case-studies" />
);

export default CaseStudiesPage;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          id
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`;
