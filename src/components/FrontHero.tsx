import React from "react";
import ResumeButton from "./ResumeButton";
import { Link } from "gatsby";

const FrontHero = () => (
  <div className="front-hero max-w-75p mx-auto mb-32">
    <div className="front-hero__name">
      <h1 className="heading1 font-franklin text-xxl4 font-bold text-center mb-8">Michael Lewis</h1>
    </div>
    <div className="front-hero__tag font-franklin text-xxl text-center mb-8">
      Worshiper, Husband, Father, Expert Drupal Leader and Developer
    </div>
    <div className="front-hero__buttons flex flex-col sm:flex-row gap-4 justify-center">
      <div className="front-hero__resume-button">
        <ResumeButton />
      </div>
      <div className="front-hero__case-studies-button">
        <Link
          to="/case-studies"
          className="case-studies-button"
        >
          <div className="case-studies-button__content flex items-center justify-center font-raleway p-8 h-12 rounded-8 border-2 gap-2 text-lg bg-white-100 text-blue-100 border-blue-100">
            <div className="case-studies-button__text p-0 m-0">View Case Studies</div>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default FrontHero;