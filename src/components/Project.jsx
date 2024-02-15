import React from 'react';

const Project = ({ image, title, deployedLink, githubLink }) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Adjust the height as needed
  };

  const projectStyle = {
    width: '75%',
    height: '500px',
    border: '2px solid #333', // Example border styling
    padding: '20px',
    textAlign: 'center',
  };
 

  return (
    <div style={containerStyle}>
      <div className="project" style={projectStyle}>
        <img src={image} alt={title} style={{ width: '75%', height: '75%' }} />
        <h3>{title}</h3>
        <p><a href={deployedLink}>Deployed Application</a></p>
        <p><a href={githubLink}>GitHub Repository</a></p>
      </div>
    </div>
  );
};

export default Project;