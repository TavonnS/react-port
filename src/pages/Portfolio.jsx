import React from 'react';
import Project from '../components/Project';
 
import techblog from '../images/techblog.png';
import travelapp from '../images/travelapp.png';
import weather from '../images/weather.png';
import writer from '../images/writer.png';


const Portfolio = () => {
  const projects = [
    {
      title: 'Text Writer',
      githubLink: 'https://github.com/TavonnS/pwa-writer-app',
      deployedLink: 'https://writer-app.onrender.com/',
      image: writer,
    },
    {
      title: 'Blog',
      githubLink: 'https://github.com/TavonnS/tech-blog',
      deployedLink: 'https://dry-river-45552-65f9dd09dfff.herokuapp.com/login',
      image: techblog,
    },
    {
      title: 'Travel Log',
      githubLink: 'https://github.com/Jdrei01/travel-log-app',
      deployedLink: 'https://travel-log-app-2f2b22f463d1.herokuapp.com/',
      image: travelapp,
    },
    {
      title: 'Weather Report',
      githubLink: 'https://github.com/TavonnS/weather-report-app',
      deployedLink: 'https://tavonns.github.io/weather-report-app/',
      image: weather,
    },
  ];

  return (
    <div>
      <h3>Portfolio</h3>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          image={project.image}
          githubLink={project.githubLink}
          deployedLink={project.deployedLink}
        />
      ))}
    </div>
  );
};

export default Portfolio;