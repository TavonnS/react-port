import mypic from '../images/mypic.jpg';

export default function About() {
    return (
      <div>
        <h3>About Me</h3>
        <img src={mypic} alt="me" />
        <div>
        <h3>
          Welcome to my Portfolio! My name is Tavonn and I'm a web developer. 
          </h3>
        <p>Here you will find a collection of my projects and contact information.
        </p>
      </div>
        <p>
          I am a conscientious and hardworking coder with a passion for learning. 
        </p>
      </div>
    );
  }
  