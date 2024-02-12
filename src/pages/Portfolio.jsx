import React from "react";
import Project from "../components/Project";

const Portfolio = () => {

  const projects = [
    {
      title: "Weather Report",
      gitLink: "https://github.com/project1",
      appLink: "https://project1.com",
      image: "project1.jpg",
    },
    {
      title: "Writer",
      gitLink: "https://github.com/project2",
      appLink: "https://project2.com",
      image: "project2.jpg",
    },
    // Add more project objects as needed
  ];

  return (
    <div>
      <h2>Portfolio</h2>
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
