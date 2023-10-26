import React from 'react';

export interface HeadingProps {
  className?: string;
  color?: string;
  text: string;
}

const Heading2 = ({ className, color = "rich-black-75", text }: HeadingProps) => (
  <h2
    className={`heading2 text-xxl ${color} font-raleway font-semibold mb-16 ${className ? className : ''}`}
  >
    {text}
  </h2>
);

export default Heading2;
