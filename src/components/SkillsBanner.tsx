import React from "react";
import Heading2 from "./heading2";

const skills = [
  'Drupal',
  'PHP',
  'MySQL',
  'HTML',
  'CSS',
  'Responsive Design',
  'JavaScript',
  'TypeScript',
  'React',
  'Gatsby',
  'SASS',
  'Node.js',
  'Acquia Cloud',
  'Acquia Site Studio',
  'Acquia Site Factory',
  'REST APIs',
  'Single Sign On',
  'eCommerce',
  'Pantheon',
  'Docker',
  'Lando',
  'Docksal',
  'Linux',
  'Apache',
  'Python',
  'ETL Data Migration',
  'Google Cloud Platform',
  'BigQuery',
  'Google Cloud Dataflow (Apache Beam)',
  'Google Cloud Composer (Apache Airflow)',
  'Etapestry CRM',
  'Azure DevOps',
  'Atlassian Jira',
  'Atlassian Bitbucket',
  'Leadership',
  'Communication',
  'Agile Development'
];

const SkillsBanner = () => (
  <div className="skills-banner bg-gray-100 py-20">
    <div className="skills-banner__inner max-w-75p mx-auto">
      <Heading2 color="text-rich-black-100" text="My Skills" />
      <div className="skills-banner__list">
        <ul className="skills-banner__skills-list text-lg sm:ml-[10vw] list-disc grid grid-cols-2 sm:grid-cols-3 gap-4 p-0">
          {skills.map((item, key) => (
            <li className="skills-banner__skill" key={key}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default SkillsBanner;