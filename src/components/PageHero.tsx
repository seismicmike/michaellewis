import React from "react";

export interface PageHeroProps {
  title: string;
}

const PageHero = ({title}: PageHeroProps) => (
  <div className="page-hero max-w-75p mx-auto font-franklin font-bold text-xxl2">
    <h1 className="page-hero__heading">{title}</h1>
  </div>
);

export default PageHero;