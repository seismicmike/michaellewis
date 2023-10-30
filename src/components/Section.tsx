import React from 'react';

export interface SectionProps {
  color?: string;
  bgColor?: string;
  children?: JSX.Element;
  className?: string;
}

const Section = ({
  color = 'rich-black-075',
  bgColor = 'white-100',
  className = "",
  children
}: SectionProps) => (
  <section className={`section py-8 py-16 text-${color} bg-${bgColor} ${className}`}>
    <div className="section__inner max-w-75p mx-auto">{children}</div>
  </section>
);

export default Section;
