import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import '../styles/components/header.scss';
import Hamburger from '../assets/svgs/hamburger.svg';
import Close from '../assets/svgs/close.svg';
import Linkedin from '../assets/svgs/linkedin.svg';
import profilePic from '../assets/images/profile-pic.webp';
import ResumeButton from "./ResumeButton";
import resumeFile from '../assets/documents/Michael Lewis - Resume.pdf';

const navLinks = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    external: false
  },
  {
    id: 2,
    title: 'Case Studies',
    path: '/case-studies',
    external: false
  },
  {
    id: 3,
    title: 'Resume',
    path: resumeFile,
    external: true
  },
  {
    id: 4,
    title: 'Bio',
    path: '/about',
    external: false
  }
];

const Header = ({ siteTitle }: { siteTitle: string }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileMenuClicked = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    const overlay = document.getElementsByClassName('mobile-flyout-overlay')[0];
    if (mobileNavOpen) {
      body.classList.add('overflow-hidden');
      overlay.classList.remove('hidden');
    } else {
      body.classList.remove('overflow-hidden');
      overlay.classList.add('hidden');
    }
  }, [mobileNavOpen]);
  
  return (
    <header className="header p-0 m-0 border-b-2">
      <div className="header__inner mx-auto max-w-90p">
        <div className="header--mobile flex items-center p-4 justify-between sm:hidden">
          <div className="header--mobile__profile-pic">
            <Link to="/">
              <img src={profilePic} className="h-24 m-0 p-0" alt={siteTitle} />
            </Link>
          </div>
          <div
            className="header--mobile__nav-button"
            onClick={handleMobileMenuClicked}
          >
            <div
              className={`header--mobile__nav-open ${
                mobileNavOpen ? 'hidden' : ''
              }`}
            >
              <Hamburger className="h-12" />
            </div>
            <div
              className={`header--mobile__nav-close ${
                mobileNavOpen ? '' : 'hidden'
              }`}
            >
              <Close className="h-12" />
            </div>
          </div>
        </div>
        <div className="header--desktop hidden sm:flex items-center p-4 gap-12 justify-end">
          <div className="header--desktop__download-resume mr-auto">
            <ResumeButton />
          </div>
          <div className="header--desktop__nav">
            <ul className="header--desktop__menu font-raleway flex text-lg gap-8 items-center">
              {navLinks.map(item => (
                <li
                  key={item.id}
                  className="header--desktop__menu-item uppercase"
                >
                  {item.external === false ? (
                    <Link to={item.path}>{item.title}</Link>
                  ) : (
                    <a href={item.path} target="_blank" rel="noreferrer">
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="header--desktop__social-icons">
            <a
              href="https://www.linkedin.com/in/michael-lewis-74b6143/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-12" />
            </a>
          </div>
          <div className="header--desktop__profile-pic">
            <Link to="/">
              <img src={profilePic} className="h-24 m-0 p-0" alt={siteTitle} />
            </Link>
          </div>
        </div>
      </div>
      <div className="header--mobile__nav">
        <div className="mobile-flyout-overlay fixed left-0 h-full w-full z-50 bg-white-100 border-t-2">
          <ul className="header--mobile__menu mt-32 font-raleway flex flex-col text-lg gap-8 items-center">
            <li key="resume-button" className="mb-16">
              <div className="header--mobile__download-resume">
                <ResumeButton />
              </div>
            </li>
            {navLinks.map(item => (
              <li key={item.id} className="header--mobile__menu-item uppercase">
                {item.external === false ? (
                  <Link to={item.path}>{item.title}</Link>
                ) : (
                  <a href={item.path} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                )}
              </li>
            ))}
            <li
              key="social-icons"
              className="header--mobile__social-icons mt-32"
            >
              <a
                href="https://www.linkedin.com/in/michael-lewis-74b6143/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-12" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header
