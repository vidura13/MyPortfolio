import { Arrow } from "./Icons";
export default function ProjectCard({ project, index, onOpen }) {
  const tags = project.techStack.split(",").slice(0, 3);
  return (
    <article className={`project-card project-${index + 1}`}>
      <button
        type="button"
        className="project-trigger"
        onClick={onOpen}
        aria-label={`View ${project.title} details`}
        aria-haspopup="dialog"
      >
        <div className="project-image">
          <span className="project-number">0{index + 1} / PROJECT</span>
          <img
            src={project.image}
            alt={`${project.title} interface`}
            loading="lazy"
            width="1000"
            height="600"
          />
          <span className="project-image-link">
            <Arrow diagonal />
          </span>
        </div>
        <div className="project-meta">
          <span>{index === 3 ? "MOBILE APPLICATION" : "WEB APPLICATION"}</span>
          <span>
            VIEW PROJECT <Arrow diagonal />
          </span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {tags.map((tag) => (
            <span key={tag}>{tag.trim()}</span>
          ))}
        </div>
      </button>
    </article>
  );
}
