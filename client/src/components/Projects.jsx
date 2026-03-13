import "../styles/Projects.css"
import passwordGeneratApp from "../assets/passwordGeneratApp.png"
import photo from "../assets/photo.jpg"
import calculatorApp from "../assets/calculatorApp.png"

function Projects(){

  return(
    <section id="projects" className="projects">

      <h2>My Projects</h2>

      <div className="projects-grid">


        <div className="project-card">
          <div className="project-img">
            <img src={passwordGeneratApp} alt="passwordGeneratApp"/>
          </div>

          <h3>Password Generator</h3>

          <p>Secure password generator using JavaScript. Includes customizable options for length, character types, and copy-to-clipboard functionality.</p>

          <div className="project-links">
            <a href="https://haylamlak.github.io/passwordGenerators">Live Demo</a>
            <a href="#">GitHub</a>
          </div>

        </div>




        <div className="project-card">

          <div className="project-img">
            <img src={photo} alt="photo"/>
          </div>

          <h3>Portfolio Website</h3>

          <p>Responsive personal portfolio website showcasing projects, skills, and contact form, built using React, CSS, and modern web practices.</p>

          <div className="project-links">
            <a href="https://haylamlak.github.io/My_Portfolio">Live Demo</a>
            <a href="#">GitHub</a>
          </div>

        </div>



        <div className="project-card">

          <div className="project-img">
            <img src={calculatorApp} alt="calculatorApp"/>
          </div>

          <h3>Portfolio Website</h3>

          <p>Responsive personal portfolio website showcasing projects, skills, and contact form, built using React, CSS, and modern web practices.</p>

          <div className="project-links">
            <a href="https://haylamlak.github.io/My_Portfolio/calculator/index.html">Live Demo</a>
            <a href="#">GitHub</a>
          </div>

        </div>




      </div>

    </section>
  )
}

export default Projects