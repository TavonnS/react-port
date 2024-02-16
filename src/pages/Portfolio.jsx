import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Text Writer',
      githubLink: 'https://github.com/TavonnS/pwa-writer-app',
      deployedLink: 'https://writer-app.onrender.com/',
      image: './public/writer.png',
    },
    {
      title: 'Blog',
      githubLink: 'https://github.com/TavonnS/tech-blog',
      deployedLink: 'https://dry-river-45552-65f9dd09dfff.herokuapp.com/login',
      image: './public/techblog.png',
    },
    {
      title: 'Travel Log',
      githubLink: 'https://github.com/Jdrei01/travel-log-app',
      deployedLink: 'https://travel-log-app-2f2b22f463d1.herokuapp.com/',
      image: './public/travelapp.png',
    },
    {
      title: 'Weather Report',
      githubLink: 'https://github.com/TavonnS/weather-report-app',
      deployedLink: 'https://tavonns.github.io/weather-report-app/',
      image: './public/weather.png',
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