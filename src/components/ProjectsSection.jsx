import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../projects";
import React, { useState, useEffect } from "react";

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedProject]);

    return (

        <section id="projects" className="py-20 px-4 md:px-8 bg-white dark:bg-gray-800">
            <motion.h2
                className="text-3xl font-bold text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Projects & Contributions
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <div key={idx} onClick={() => setSelectedProject(project)}>
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            link={undefined} 
                        />
                    </div>
                ))}
            </div>
            <ProjectModal
                show={!!selectedProject}
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default ProjectsSection;