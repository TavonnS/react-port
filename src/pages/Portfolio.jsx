import React from "react";
import Project from "../components/Project";

const Portfolio = () => {
   

  const projects = [
    {
      title: "Weather Report",
      gitLink: "https://github.com/TavonnS/weather-report-app",
      appLink: "https://tavonns.github.io/weather-report-app/",
      image: "./src/images/weather.png",
    },
    {
      title: "Text Writer",
      gitLink: "https://github.com/TavonnS/pwa-writer-app",
      appLink: "https://writer-app.onrender.com/",
      image: "./src/images/writer.png",
    },
    {
      title: "Blog",
      gitLink: "https://github.com/TavonnS/tech-blog",
      appLink: "https://dry-river-45552-65f9dd09dfff.herokuapp.com/login",
      image: "./src/images/techblog.png",
    },
    // Add more project objects as needed
  ];

  return (
    <div>
      <h3>Portfolio</h3>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          gitLink={project.gitLink}
          appLink={project.appLink}
          image={project.image} 



        />
         
       
      ))}
    </div>
  );
};

export default Portfolio;
