import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../projects";
import { Arrow } from "./Icons";
export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section id="projects" className="section container">
      <div className="section-heading">
        <div>
          <div className="eyebrow">
            <span>04</span> PROJECTS & CONTRIBUTIONS
          </div>
          <h2>
            Turning ideas into solutions<span className="accent">.</span>
          </h2>
        </div>
        <a
          className="text-link"
          href="https://github.com/vidura13"
          target="_blank"
          rel="noopener noreferrer"
        >
          More on GitHub <Arrow diagonal />
        </a>
      </div>
      <p className="section-intro">
        A selection of things I have built and contributed to, from everyday
        solutions to collaborative platforms.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            onOpen={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
