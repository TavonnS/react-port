import React from 'react';

const Project = ({ image, title, deployedLink, githubLink }) => {

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    flexDirection: 'column',
    margin: 'auto',
    };

  const projectStyle = {
    width: '75%',
    height: '500px',
    border: '5px solid #000C52',  
    padding: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    display: 'flex',
    borderRadius: '11px',
  };
 

  return (
    <div style={containerStyle}>
      <div className="project" style={projectStyle}>
        <img src={image} alt={title} style={{ width: '80%', height: '80%' }} />
        <h3>{title}</h3>
        <p><a href={deployedLink} target='_blank' rel='noreferrer noopener'>Live Application</a></p>
        <p><a href={githubLink} target='blank' rel='noreferrer noopener'>GitHub Repository</a></p>
      </div>
    </div>
  );
};

export default Project;