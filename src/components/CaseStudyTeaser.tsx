import { Link } from "gatsby";
import React from "react";
import Heading3 from "./heading3";
import ImageHero from "./ImageHero";
import Image from "./Image";


export interface CaseStudyProps {
  id?: any;
  title: string;
  description: string;
  asset: any;
  path: string;
  featured?: boolean;
}

const CaseStudyTeaser = ({
  title,
  description,
  path,
  asset,
  featured = false
}: CaseStudyProps) => (
  <div className={`case-study-teaser mb-16 sm:mb-4 ${featured ? "" : "sm:mb-8"}`}>
    <Link to={path}>
      <div className="case-study-teaser__image mb-4">
        <Image src={asset} alt={description} />
      </div>
      <div className="case-study-teaser__detail">
        <div className="case-study-teaser__title">
          <Heading3 color="text-blue-100" className={`mb-4 ${featured ? "" : "sm:text-lg sm:mb-2"}`}>
            <>{title}</>
          </Heading3>
        </div>
        <div className={`case-study-teaser__description text-lg ${featured ? "" : "sm:text-md"}`}>
          {description}
        </div>
      </div>
    </Link>
  </div>
);

export default CaseStudyTeaser;