import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [projects, setProjects] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL


  useEffect(() => {

    axios.get(`${API_URL}/api/projects`)
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <div className="App">

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Hi, I'm Karishma Sri K</h1>
        <p>Full Stack Developer Intern</p>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <h2>About Me</h2>

        <p>
          I am Karishma Sri K a passionate Full Stack Developer Intern interested in
          web development, programming, and problem solving.
          I enjoy building dynamic applications using React,
          Node.js, Express, and MySQL.
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section className="skills">
        <h2>Technical Skills</h2>

        <div className="skills-container">
          <span>Python</span>
          <span>Java</span>
          <span>C</span>
          <span>C++</span>
          <span>HTML</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MySQL</span>
          <span>XAMPP</span>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="certifications">
        <h2>Certifications</h2>

        <ul>
          <li>AI and Customer Engagement Strategies – IBM</li>
          <li>Tech Trio Programming Course – Cybernaut EdTech</li>
        </ul>
      </section>

      {/* PROJECTS */}
      <section className="projects">
        <h2>My Projects</h2>

        <div className="projects-container">

          {projects.map((project) => (

            <div className="project-card" key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

          ))}

        </div>
      </section>

      {/* SOFT SKILLS */}
      <section className="soft-skills">
        <h2>Soft Skills</h2>

        <div className="skills-container">
          <span>Teamwork</span>
          <span>Willingness to Learn</span>
          <span>Problem Solving</span>
        </div>
      </section>

    </div>
  );
}

export default App;