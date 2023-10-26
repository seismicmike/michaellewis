import React from 'react';
import Section from './Section';

export interface ImageHeroProps {
  imageAsset: any;
  link?: string;
  alt?: string;
  bgColor?: string;
}

const ImageHero = ({
  imageAsset,
  link = '',
  alt = '',
  bgColor = 'white-100'
}: ImageHeroProps) => (
  <Section bgColor={bgColor} className="flex">
    <>
      {link ? (
        <a href={link} target="_blank">
          <img src={imageAsset} alt={alt} />
        </a>
      ) : (
        <img src={imageAsset} alt={alt} />
      )}
    </>
  </Section>
);

export default ImageHero;
