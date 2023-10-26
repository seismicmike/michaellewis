import React from 'react';

export interface ButtonProps {
  href: string;
  className?: string;
  target?: string;
  rel?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  text: string;
  children?: JSX.Element
}

const Button = ({
  href,
  text,
  className = '',
  target = '',
  rel = '',
  bgColor = 'blue-100',
  textColor = 'white-100',
  borderColor = 'blue-100',
  children
}: ButtonProps) => (
  <a href={href} className='button' target={target} rel={rel}>
    <div
      className={`button__content flex items-center justify-center font-raleway p-8 h-12 rounded-8 border-2 border-${borderColor} gap-2 text-lg bg-${bgColor} text-${textColor} ${className}`}
    >
      <div className="button__text p-0 m-0">{text}</div>
      {children}
    </div>
  </a>
);

export default Button;
