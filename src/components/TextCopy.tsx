import React from 'react';

import '../styles/components/text-copy.scss';

export interface TextCopyProps {
  children?: JSX.Element;
}

const TextCopy = ({ children }: TextCopyProps) => (
  <div className="text-copy font-raleway text-md4">{children}</div>
);

export default TextCopy;
