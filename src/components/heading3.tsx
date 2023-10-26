import React from 'react';

export interface HeadingProps {
  className?: string;
  color: string;
  children?: JSX.Element;
}

const Heading3 = ({ className, color, children }: HeadingProps) => (
  <h3
    className={`heading3 text-lg4 ${color} font-raleway font-semibold mb-8 ${className ? className : ''}`}
  >
    {children}
  </h3>
);

export default Heading3;
