import React from "react";
import CaseStudyTeaser from "./CaseStudyTeaser";

import cohAsset from '../assets/images/city-of-hope.webp';
import cbgAsset from '../assets/images/chicago-botanic.webp';
import lutronAsset from '../assets/images/lutron-luxury.webp';
import Heading2 from "./heading2";

const featuredStudy = {
  id: 1,
  asset: cohAsset,
  path: "/case-studies/city-of-hope",
  title: "City of Hope",
  description: "A complete data migration from Oracle with a fresh design, user experience, authoring back-end, and highly tuned search to empower City of Hope to lead the fight against cancer.",
  featured: true
};
const otherStudies = [
  {
    id: 2,
    asset: lutronAsset,
    title: "Lutron Luxury",
    path: "/case-studies/lutron-luxury",
    description: "A content hub, an image gallery, and new components to highlight design projects that showcase the power of Lutron's Luxury line of products"
  },
  {
    id: 3,
    asset: cbgAsset,
    title: "Chicago Botanic Garden",
    path: "/case-studies/chicago-botanic",
    description: "An online point of sale to give CBG guests a convenient way to acquire passes for parking and ticketed events at the garden."
  }
];

const FeaturedStudies = () => (
  <div className="featured-studies max-w-75p mx-auto py-32">
    <Heading2 className="featured-studies__heading" color="text-blue-100" text="My Work" />
    <div className="featured-studies__studies sm:flex gap-8">
      <div className="featured-studies__featured sm:basis-2/3">
        <div className="featured-studies__study featured-studies__study--featured">
          <CaseStudyTeaser {...featuredStudy} />
        </div>
      </div>
      <div className="featured-studies__other sm:basis-1/3">
        {otherStudies.map(item => (
          <div className="featured-studies__study sm:mb-8" key={item.id}>
            <CaseStudyTeaser {...item} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default FeaturedStudies;