import React from 'react';
import '../styles/Projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const projects = [
  {
    id: 1,
    title: 'Countdown Timer',
    description: (
      <>
        <div className="project-title">
          Countdown to Concert Ticket sales activation
        </div>
        <div className="project-tools">HTML5 | CSS3 | JavaScript</div>
      </>
    ),
    imageUrl:
      'https://i.discogs.com/MSHpAtmN7T46E38M8Ur1-_00g8mLYSaAViyh396tW40/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU3NDY5/MDctMTQwMTU0MDAy/OC00MjQ4LmpwZWc.jpeg',
    projectUrl: 'https://saraosacar.github.io/Countdown-Timer/',
    projectUrlGithub: 'https://github.com/SaraOsacar/Countdown-Timer',
  },

  {
    id: 2,
    title: 'Memory Game',
    description: (
      <>
        <div className="project-title">
          Match musical instruments in this memory game
        </div>
        <div className="project-tools">HTML5 | CSS3 | JavaScript</div>
      </>
    ),
    imageUrl:
      'https://t4.ftcdn.net/jpg/04/75/34/67/360_F_475346781_TJif9FzyRfkpEhfFFIi1te5VIqt2bFMa.jpg',
    projectUrl: 'https://saraosacar.github.io/Matching-Game/',
    projectUrlGithub: 'https://github.com/SaraOsacar/Matching-Game',
  },

  {
    id: 3,
    title: 'Weather Widget',
    description: (
      <>
        <div className="project-title">
          Weather forecast App in the city of your choice
        </div>
        <div className="project-tools">HTML5 | SASS | REACT</div>
      </>
    ),
    imageUrl:
      'https://cdn4.vectorstock.com/i/1000x1000/14/23/realistic-weather-widget-vector-3421423.jpg',
    projectUrl: 'https://saraosacar.github.io/Weather-Widget//',
    projectUrlGithub: 'https://github.com/SaraOsacar/Weather-Widget',
  },

  {
    id: 4,
    title: 'Rick & Morty',
    description: (
      <>
        <div className="project-title">
          Favorite character and series information search
        </div>
        <div className="project-tools">HTML5 | SASS | REACT</div>
      </>
    ),
    imageUrl:
      'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/series-television/11-cosas-que-no-sabias-de-rick-y-morty/137666502-1-esl-ES/11-cosas-que-no-sabias-de-Rick-y-Morty.jpg?crop=1xw:0.75xh;center,top&resize=1200:*',
    projectUrl: 'https://saraosacar.github.io/Rick-and-Morty-React-Project/',
    projectUrlGithub:
      'https://github.com/SaraOsacar/Rick-and-Morty-React-Project',
  },

  {
    id: 5,
    title: 'Login',
    description: (
      <>
        <div className="project-title">
          Login system with personalized home page on successful authentication
        </div>
        <div className="project-tools">HTML5 | CSS3 | REACT</div>
      </>
    ),
    imageUrl:
      'https://images.pexels.com/photos/3038740/pexels-photo-3038740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    projectUrl: 'https://saraosacar.github.io/Log-in/',
    projectUrlGithub: 'https://github.com/SaraOsacar/Log-in',
  },

  {
    id: 6,
    title: 'Friends',
    description: (
      <>
        <div className="project-title">
          Search engine for the most famous Friends quotes
        </div>
        <div className="project-tools">HTML5 | SASS | REACT</div>
      </>
    ),
    imageUrl: 'https://www.magisnet.com/wp-content/uploads/2019/09/friends.jpg',
    projectUrl: 'https://saraosacar.github.io/Friends-React-Project/',
    projectUrlGithub: 'https://github.com/SaraOsacar/Friends-React-Project',
  },
  {
    id: 7,
    title: 'Dice Bets',
    description: (
      <>
        <div className="project-title">
          Dice betting game where you can lose or double your bet
        </div>
        <div className="project-tools">HTML5 | CSS3 | JavaScript</div>
      </>
    ),
    imageUrl:
      'https://www.rushbet.co/blog/wp-content/uploads/2022/04/craps-games.jpg',
    projectUrl:
      'https://saraosacar.github.io/Dados-y-apuestas-JavaScript-project/',
    projectUrlGithub:
      'https://github.com/SaraOsacar/Dados-y-apuestas-JavaScript-project',
  },

  {
    id: 8,
    title: 'Plants Gallery',
    description: (
      <>
        <div className="project-title">
          Guide to Types and Care for Plant Lovers
        </div>
        <div className="project-tools">HTML5 | CSS3 | JavaScript</div>
      </>
    ),
    imageUrl:
      'https://www.moiplants.com/wp-content/uploads/2021/04/MG_9868-1024x939.jpg',
    projectUrl: 'https://saraosacar.github.io/Plants-Gallery/',
    projectUrlGithub: 'https://github.com/SaraOsacar/Plants-Gallery',
  },

  {
    id: 9,
    title: 'Task List',
    description: (
      <>
        <div className="project-title">
          Task list App for adding, modifying or deleting tasks
        </div>
        <div className="project-tools">HTML5 | SASS | REACT</div>
      </>
    ),
    imageUrl:
      'https://img.freepik.com/fotos-premium/cuaderno-blanco-boligrafo-encima-mesa-escritorio-oficina-madera-computadora-portatil-vista-superior_340270-360.jpg?w=740',
    projectUrl: 'https://saraosacar.github.io/Task-List/',
    projectUrlGithub: 'https://github.com/SaraOsacar/Task-List',
  },
  {
    id: 10,
    title: 'Awesome Profile Cards',
    description: (
      <>
        <div className="project-title">
          Team project for generating personalized contact cards
        </div>
        <div className="project-tools">HTML5 | SASS | JavaScript</div>
      </>
    ),
    imageUrl:
      'http://beta.adalab.es/project-promo-t-module-2-team-2/assets/images/logo.png',
    projectUrl: 'http://beta.adalab.es/project-promo-t-module-2-team-2/',
    projectUrlGithub:
      'https://github.com/SaraOsacar/Awesome-Profile-Cards-JavaScript-Team-Project',
  },

  {
    id: 11,
    title: 'Cleopatras Digital Empire',
    description: (
      <>
        <div className="project-title">
          Team project to create company website template
        </div>
        <div className="project-tools">HTML5 | CSS3 |</div>
      </>
    ),
    imageUrl:
      'https://cadenaser.com/resizer/hIo8_l1sKWpqCYGb29p2VJI-zH8=/768x576/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/QJY44JN2EJDBJOZ47ZRP5TAGSY.jpg',
    projectUrl: 'http://beta.adalab.es/project-promo-t-module-1-team-1/',
    projectUrlGithub:
      'https://github.com/SaraOsacar/Cleopatras-s-Digital-Empire-Team-Project',
  },
  {
    id: 12,
    title: 'Anonymous Proxy',
    description: (
      <>
        <div className="project-title">
          Responsive web and styling created via a Zeplin design
        </div>
        <div className="project-tools">HTML5 | CSS3</div>
      </>
    ),
    imageUrl:
      'https://media.admagazine.com/photos/625465331fc7637dbef3f48d/1:1/w_3571,h_3571,c_limit/5.%20Photo%20by%20Dronalist.jpeg',
    projectUrl: 'https://saraosacar.github.io/Anonymous-Proxy/',
    projectUrlGithub: 'https://github.com/SaraOsacar/Anonymous-Proxy',
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects">
        <div className="title-container">
          <h1>PROJECTS</h1>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <div className="project" key={project.id}>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-img"
              />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-links-container">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGlobe} className="faGlobe" />
                </a>
                <a
                  href={project.projectUrlGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="faGithub" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
