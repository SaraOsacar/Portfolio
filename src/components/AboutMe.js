import React from 'react';
import '../styles/AboutMe.scss';
import myImage from '../images/MyImage.jpg';

const AboutMe = () => {
  return (
    <div className="about-me">
      <h1 className="about-me-title">About me</h1>
      <div className="info">
        <div className="content-container">
          <img src={myImage} alt="Mi Foto" className="my-image" />
          <div className="text-container">
            <p>
              I've transitioned from an extensive career in cultural management
              and production to becoming a passionate{' '}
              <strong>Frontend developer</strong>. My creative flair and tech
              fascination led me to pivot towards coding, embarking on a
              bootcamp journey that equipped me with skills in{' '}
              <strong>HTML5</strong>, <strong>CSS3</strong>,{' '}
              <strong>SASS</strong>, <strong>JavaScript</strong>,{' '}
              <strong>ReactJS</strong>, <strong>NodeJS</strong>,{' '}
              <strong>SQL</strong>, and more. With over a decade of project
              management and communication experience, I excel in organization,
              adaptability, teamwork, and communication. My track record
              includes coordinating multidisciplinary teams for live shows,
              leading 360° cultural campaigns, and managing press releases for
              publishing labels and agencies. I'm looking forward to fusing my
              creativity with technology while continuously expanding my skills.
              For more extensive information about my background, you can access
              my {''}
              <a
                href="https://drive.google.com/file/d/1a08zboF7GVbkUxq06suediVcveXWT6ns/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-link"
              >
                CV
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
