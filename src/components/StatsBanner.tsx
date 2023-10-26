import React from "react";
import StatBlock from "./StatBlock";
import { StatBlockProps } from "./StatBlock";

export interface StatsBannerProps {
  stats: StatBlockProps[];
}

const StatsBanner = ({stats}: StatsBannerProps) => (
  <div className="stats-banner bg-pearl-100">
    <div className="stats-banner__inner max-w-75p mx-auto flex flex-col items-center gap-24 py-24 sm:flex-row sm:justify-center sm:py-32">
      {stats.map(item => (
        <div className="stats-banner__item" key={item.id}>
          <StatBlock id={item.id} value={item.value} label={item.label} />
        </div>
      ))}
    </div>
  </div>
);

export default StatsBanner;