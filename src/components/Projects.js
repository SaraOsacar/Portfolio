import React from 'react';
import '../styles/Projects.scss';


const projects = [
  {
    id: 1,
    title: 'Rick & Morty',
    description: (
      <>
        <div className="project-tools">HTML5 | SASS | REACT</div>
        <div className="project-title">
          Favorite character and series information search
        </div>
      </>
    ),
    imageUrl:
      'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/series-television/11-cosas-que-no-sabias-de-rick-y-morty/137666502-1-esl-ES/11-cosas-que-no-sabias-de-Rick-y-Morty.jpg?crop=1xw:0.75xh;center,top&resize=1200:*',
    projectUrl: 'https://saraosacar.github.io/Rick-and-Morty-React-Project/',
  },
  {
    id: 2,
    title: 'Task List',
    description: (
      <>
        <div className="project-tools">HTML5 | SASS | REACT</div>
        <div className="project-title">
          Task list App for adding, modifying or deleting tasks
        </div>
      </>
    ),
    imageUrl:
      'https://img.freepik.com/fotos-premium/cuaderno-blanco-boligrafo-encima-mesa-escritorio-oficina-madera-computadora-portatil-vista-superior_340270-360.jpg?w=740',
    projectUrl: 'https://saraosacar.github.io/Task-List/',
  },
  {
    id: 3,
    title: 'Weather Widget',
    description: (
      <>
        <div className="project-tools">HTML5 | SASS | REACT</div>
        <div className="project-title">
          Weather forecast App in the city of your choice
        </div>
      </>
    ),
    imageUrl:
      'https://img.freepik.com/vector-gratis/solicitud-pronostico-tiempo_1284-34616.jpg',
    projectUrl: 'https://saraosacar.github.io/Weather-Widget//',
  },
  {
    id: 4,
    title: 'Friends',
    description: (
      <>
        <div className="project-tools">HTML5 | SASS | REACT</div>
        <div className="project-title">
          Search engine for the most famous Friends quotes
        </div>
      </>
    ),
    imageUrl: 'https://www.magisnet.com/wp-content/uploads/2019/09/friends.jpg',
    projectUrl: 'https://saraosacar.github.io/Friends-React-Project/',
  },
  {
    id: 5,
    title: 'Dice Bets',
    description: (
      <>
        <div className="project-tools">HTML5 | CSS3 | JavaScript</div>
        <div className="project-title">
          Dice betting game where you can lose or double your bet
        </div>
      </>
    ),
    imageUrl:
      'https://www.rushbet.co/blog/wp-content/uploads/2022/04/craps-games.jpg',
    projectUrl:
      'https://saraosacar.github.io/Dados-y-apuestas-JavaScript-project/',
  },
  {
    id: 6,
    title: 'Awesome Profile Cards',
    description: (
      <>
        <div className="project-tools">HTML5 | SASS | JavaScript</div>
        <div className="project-title">
          Team project for generating personalized contact cards
        </div>
      </>
    ),
    imageUrl:
      'http://beta.adalab.es/project-promo-t-module-2-team-2/assets/images/logo.png',
    projectUrl: 'http://beta.adalab.es/project-promo-t-module-2-team-2/',
  },
  {
    id: 7,
    title: 'Cleopatras Digital Empire',
    description: (
      <>
        <div className="project-tools">HTML5 | CSS3 |</div>
        <div className="project-title">
          Team project to create company website template
        </div>
      </>
    ),
    imageUrl:
      'https://cadenaser.com/resizer/hIo8_l1sKWpqCYGb29p2VJI-zH8=/768x576/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/QJY44JN2EJDBJOZ47ZRP5TAGSY.jpg',
    projectUrl: 'http://beta.adalab.es/project-promo-t-module-1-team-1/',
  },
  {
    id: 8,
    title: 'Anonymous Proxy',
    description: (
      <>
        <div className="project-tools">HTML5 | CSS3</div>
        <div className="project-title">
          Responsive web and styling created via a Zeplin design
        </div>
      </>
    ),
    imageUrl:
      'https://queverenelmundo.com/guias/wp-content/uploads/Vistas-rockefeller-center-1.jpg',
    projectUrl: 'https://saraosacar.github.io/Anonymous-Proxy/',
  },
];

const Projects = () => {
  
  return (
    <div className="projects">
      <div className="title-container">
        <h1>PROJECTS</h1>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <img src={project.imageUrl} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
