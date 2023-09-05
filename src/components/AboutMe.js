import React from 'react';
import '../styles/AboutMe.scss';
import myImage from '../images/MyImage.jpg';

const AboutMe = () => {
  return (
    <div id="about-me">
      <div className="about-me">
        <h1 className="about-me-title">About me</h1>
        <div className="info">
          <div className="content-container">
            <img src={myImage} alt="Mi Foto" className="my-image" />
            <div className="text-container">
              <p>
                After an extensive career in production & cultural management,
                my creativity and fascination with technology have led me to
                pivot towards the IT sector. I have successfully completed a
                Full Stack web development bootcamp, acquiring skills in a
                variety of technologies such as <strong>HTML5</strong>,{' '}
                <strong>CSS3</strong>, <strong>SASS</strong>,{' '}
                <strong>JavaScript</strong>, <strong>ReactJS</strong>,{' '}
                <strong>NodeJS</strong>, <strong>SQL</strong>,{' '}
                <strong>ExpressJS</strong> and <strong>MongoDB</strong>. I have
                also worked in <strong>Agile</strong> and{' '}
                <strong>Scrum </strong>
                environments. With over a decade of experience in project
                management, production, and communication (Spain and Latin
                America), I would highlight my organizational ability,
                adaptability, teamwork, and effective communication. Throughout
                my career, I have coordinated multidisciplinary teams for live
                performances, led comprehensive cultural campaigns, managed
                press releases for record labels and publishers, and facilitated
                coordination between different departments. I am excited to
                continue expanding my skills and furthering my growth and
                development in the sector. For more extensive information about
                my background, you can access my CV {''}
                <a
                  href="https://drive.google.com/file/d/1DNCAJJng8GggWHdrb9LkzxzRTbifOJdC/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                </a>
                {' in '}
                <a
                  href="https://drive.google.com/file/d/140di3mrJ8OJlvMSt_24DkPvntBnBSdBP/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-link"
                >
                  spanish
                </a>{' '}
                or{' '}
                <a
                  href="https://drive.google.com/file/d/1DNCAJJng8GggWHdrb9LkzxzRTbifOJdC/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-link"
                >
                  english
                </a>
                , as you wish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

