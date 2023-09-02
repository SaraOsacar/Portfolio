import React from 'react';
import '../styles/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <header className="header">
      <div className="contact">
        <a
          href="https://www.linkedin.com/in/saraosacar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="contact-icon1" />
        </a>
        <a
          href="https://github.com/SaraOsacar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="contact-icon2" />
        </a>
        <a href="mailto:saraosacar@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon3" />
        </a>
      </div>
      <div className="name-title">
        <div className="name">Sara Osácar</div>
        <div className="title">Frontend Developer</div>
      </div>
    </header>
  );
};

export default Contact;
