import React from "react";
import DownloadIcon from '../assets/svgs/download.svg';
import resumeFile from '../assets/documents/Michael-Lewis_Resume_2023-10-26.pdf';
import { Link } from "gatsby";
import Button from "./Button";

const ResumeButton = () => (
  <Button href={resumeFile} text="Get Resume" className="resume-button" target="_blank" rel="noreferrer">
    <div className="resume-button__icon">
      <DownloadIcon className="h-8" />
    </div>
  </Button>
);

export default ResumeButton;