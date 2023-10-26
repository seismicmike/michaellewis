import React from "react";

export interface StatBlockProps {
  id: any;
  value: string;
  label: string;
};

const StatBlock = ({ value, label }: StatBlockProps) => (
  <div className="stat-block text-center font-raleway">
    <div className="stat-block__value text-xxl2 mb-8 text-blue-100">{value}</div>
    <div className="stat-block__label text-lg2">{label}</div>
  </div>
);

export default StatBlock;