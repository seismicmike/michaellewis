import React from 'react';
import Section from './Section';
import Image from './Image';

export interface ImageHeroProps {
  imagePath: string;
  link?: string;
  alt?: string;
  bgColor?: string;
}

const ImageHero = ({
  imagePath,
  link = '',
  alt = '',
  bgColor = 'white-100'
}: ImageHeroProps) => {
  return (
    <Section bgColor={bgColor} className="flex">
    <>
      {link ? (
        <a href={link} target="_blank">
          <Image src={imagePath} alt={alt} />
        </a>
      ) : (
        <Image src={imagePath} alt={alt} />
      )}
    </>
  </Section>
  )
};

export default ImageHero;
