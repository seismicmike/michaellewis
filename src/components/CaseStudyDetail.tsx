import React from 'react';

import PageHero from './PageHero';
import CaseStudySubHeader from './CaseStudySubHeader';
import ImageHero from './ImageHero';
import Section, {SectionProps} from './Section';
import Heading2 from './heading2';
import TextCopy from './TextCopy';


export interface ImageProps {
  link?: string,
  src: string,
  alt?: string
}

export interface SubSectionProps {
  props?: SectionProps,
  heading: string,
  images?: ImageProps[],
  children?: JSX.Element,
  paragraphs: string[]
};

export interface CaseStudyDetailProps {
  title: string,
  link?: string,
  showLink: boolean,
  showDate: boolean,
  date?: string,
  btnColor?: string,
  btnBgColor?: string,
  className?: string,
  children?: JSX.Element,
  image?: any,
  sections: SubSectionProps[]

}

const CaseStudyDetail = ({
  title = '',
  link = '',
  showLink = false,
  showDate = false,
  date = '',
  btnColor = 'blue-100',
  btnBgColor = 'white-100',
  image = '',
  sections = [
    {
      props: {},
      heading: 'Heading',
      paragraphs: []
    }
  ]
}: CaseStudyDetailProps) => (
  <>
    <PageHero title={title} />
    <CaseStudySubHeader
      showDate={showDate}
      date={date}
      showLink={showLink}
      link={link}
      btnBorderColor={btnColor}
      btnTxtColor={btnColor}
      btnColor={btnBgColor}
    />
    <ImageHero imagePath={image} alt={title} />

    {sections.map((section, key) => (
      <Section key={key} {...section.props}>
        <>
          <Heading2 text={section.heading} />
          <TextCopy>
            <>
              {section.paragraphs.map(paragraph => (
                <p>{paragraph}</p>
              ))}
            </>
          </TextCopy>
          {section.images? (section.images.map(image => (
            <div className="flex justify-center">
              <ImageHero
                imagePath={image.src}
                alt={image.alt}
                link={image.link}
              />
            </div>
          ))) : ("")}
        </>
      </Section>
    ))}
  </>
);

export default CaseStudyDetail;
