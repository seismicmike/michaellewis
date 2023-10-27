import { Link } from 'gatsby';
import React from 'react';
import Heading3 from './heading3';
import Image from './Image';

export interface CaseStudySearchProps {
  id?: any;
  title: string;
  description: string;
  asset: string;
  path: string;
  orientation?: 'left'|'right';
}

const CaseStudySearchResult = ({
  title,
  description,
  path,
  asset,
  orientation = 'left'
}: CaseStudySearchProps) => (
  <Link to={path}>
    <div className={`case-study-result sm:mb-16 sm:flex gap-16`}>
      <div className={`case-study-result__image mb-4 basis-1/2 ${(orientation == 'left') ? 'order-0' : 'order-2'}`}>
        <Image src={asset} alt={description} />
      </div>
      <div className="case-study-result__detail  basis-1/2">
        <div className="case-study-result__title">
          <Heading3 color="text-blue-100" className={`mb-4`}>
            <>{title}</>
          </Heading3>
        </div>
        <div className={`case-study-result__description text-lg `}>
          {description}
        </div>
      </div>
    </div>
  </Link>
);

export default CaseStudySearchResult;
