import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image = ({ src, alt, className }: ImageProps) => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  console.log(data);

  const imageNode = data.allFile.nodes.find(node => node.relativePath === src);
  const image = getImage(imageNode);

  if (!image) {
    return null;
  }

  return <GatsbyImage image={image} alt={alt} />;
};

export default Image;
