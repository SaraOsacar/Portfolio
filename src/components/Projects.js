import React from 'react';
import '../styles/Projects.scss';

const projects = [
  {
    id: 1,
    title: 'Rick & Morty',
    description: 'Listado de personajes',
    imageUrl: 'https://i.ebayimg.com/images/g/znEAAOSwHWRc5Zl-/s-l500.jpg',
    projectUrl: 'https://saraosacar.github.io/Rick-and-Morty-React-Project/',
  },
  {
    id: 2,
    title: 'Task List',
    description: 'Aplicación para anotar tareas',
    imageUrl:
      'https://img.freepik.com/fotos-premium/cuaderno-blanco-boligrafo-encima-mesa-escritorio-oficina-madera-computadora-portatil-vista-superior_340270-360.jpg?w=740',
    projectUrl: 'https://saraosacar.github.io/Task-List/',
  },
  {
    id: 3,
    title: 'Friends',
    description: 'Frases míticas de Friends',
    imageUrl: 'https://m.media-amazon.com/images/I/6135B629VZL._AC_SL1000_.jpg',
    projectUrl: 'https://saraosacar.github.io/Friends-React-Project/',
  },
  {
    id: 4,
    title: 'Dados y Apuestas',
    description: 'Juego de apuestas',
    imageUrl:
      'https://www.rushbet.co/blog/wp-content/uploads/2022/04/craps-games.jpg',
    projectUrl:
      'https://saraosacar.github.io/Dados-y-apuestas-JavaScript-project/',
  },
  {
    id: 5,
    title: 'Awesome Profile Cards',
    description: 'Personalizar tarjetas de contacto',
    imageUrl:
      'http://beta.adalab.es/project-promo-t-module-2-team-2/assets/images/logo.png',
    projectUrl: 'http://beta.adalab.es/project-promo-t-module-2-team-2/',
  },
  {
    id: 6,
    title: 'Cleopatras Digital Empire',
    description: 'Web de equipo',
    imageUrl:
      'https://cadenaser.com/resizer/hIo8_l1sKWpqCYGb29p2VJI-zH8=/768x576/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/QJY44JN2EJDBJOZ47ZRP5TAGSY.jpg',
    projectUrl: 'http://beta.adalab.es/project-promo-t-module-1-team-1/',
  },
  {
    id: 7,
    title: 'Anonymous Proxy',
    description: 'Web maquetación y estilo',
    imageUrl:
      'https://queverenelmundo.com/guias/wp-content/uploads/Vistas-rockefeller-center-1.jpg',
    projectUrl: 'https://saraosacar.github.io/Anonymous-Proxy/',
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>PROJECTS</h1>
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
              View project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;