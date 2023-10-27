import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import '../styles/components/footer.scss';
import Linkedin from '../assets/svgs/linkedin.svg';
import resumeFile from '../assets/documents/Michael-Lewis_Resume_2023-10-26.pdf';
import Heading2 from './heading2';

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

const Footer = () => {
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
    <footer className="footer py-16 m-0 border-t-2 bg-blue-100">
      <div className="footer__inner mx-auto max-w-75p">
        <div className="footer__name-menu">
          <div className="footer__name">
            <Heading2 color="text-white-100" text="Michael Lewis" />
          </div>
          <div className="footer__menu text-white-100 mb-16">
            <ul className="footer__menu-links font-raleway flex flex-col text-lg gap-8 items-start sm:flex-row sm:text-right sm:items-end">
              {navLinks.map(item => (
                <li key={item.id} className="footer__menu-link">
                  {item.external === false ? (
                    <Link to={item.path}>{item.title}</Link>
                  ) : (
                    <a href={item.path} target="_blank" rel="noreferrer">
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
              <li key="linked-in">
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
        <div className="footer__social"></div>
      </div>
    </footer>
  );
};

export default Footer;
