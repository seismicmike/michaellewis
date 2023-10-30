import React from "react";

export interface PageHeroProps {
  title: string;
}

const PageHero = ({title}: PageHeroProps) => (
  <header className="page-hero max-w-75p mx-auto font-franklin font-bold text-xxl2">
    <h1 className="page-hero__heading">{title}</h1>
  </header>
);

export default PageHero;