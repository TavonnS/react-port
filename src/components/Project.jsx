const Project = ({ title, image, gitLink, appLink }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt="Project" />
      <p>{gitLink}</p>
      <p>{appLink}</p>
    </div>
  );
};

export default Project;