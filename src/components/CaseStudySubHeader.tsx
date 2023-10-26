import React from 'react';
import OffsiteLink from '../assets/svgs/external-link.svg';
import Button from './Button';
import Section from './Section';

export interface CaseStudySubHeaderProps {
  showLink?: boolean;
  link?: string;
  showDate?: boolean;
  date?: string;
  btnColor?: string;
  btnTxtColor?: string;
  btnBorderColor?: string;
  btnText?: string;
}

const CaseStudySubHeader = ({
  showLink = false,
  link = '',
  showDate = false,
  date = '',
  btnColor = 'white-100',
  btnTxtColor = 'blue-100',
  btnBorderColor = 'blue-100',
  btnText = 'See Live Site'
}: CaseStudySubHeaderProps) => (
  <Section>
    <div className="date-link-banner text-lg flex items-center mb-4 sm:mb-16 gap-16">
      {showDate ? (
        <div className="date-link-banner__date py-4">{date}</div>
      ) : (
        ''
      )}
      {showLink ? (
        <div className="date-link-banner__link">
          <Button
            href={link}
            target="_blank"
            rel="noreferrer"
            text="See Live Site"
            bgColor={btnColor}
            borderColor={btnBorderColor}
            textColor={btnTxtColor}
            className="text-md sm:text-lg"
          >
            <div className="resume-button__icon">
              <OffsiteLink className="h-8" />
            </div>
          </Button>
        </div>
      ) : (
        ''
      )}
    </div>
  </Section>
);

export default CaseStudySubHeader;
