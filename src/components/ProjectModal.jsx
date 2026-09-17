import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Arrow, Close } from "./Icons";
export default function ProjectModal({ project, onClose }) {
  const dialog = useRef(null);
  const lightbox = useRef(null);
  const [enlargedImg, setEnlargedImg] = useState(null);
  useEffect(() => {
    const element = dialog.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);
  useEffect(() => {
    if (enlargedImg) lightbox.current?.showModal();
  }, [enlargedImg]);
  function trapFocus(event) {
    if (event.key !== "Tab") return;
    event.stopPropagation();
    const root = event.currentTarget;
    const focusable = [
      ...root.querySelectorAll('button, a[href], [tabindex="0"]'),
    ].filter(
      (element) =>
        element.closest("dialog") === root && element.getClientRects().length,
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }
  function closeLightbox() {
    lightbox.current?.close();
    setEnlargedImg(null);
  }
  return createPortal(
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onKeyDown={trapFocus}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="dialog-content">
        <div className="dialog-topline">
          <span className="eyebrow">PROJECT DETAILS</span>
          <button
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label="Close project details"
            autoFocus
          >
            <Close />
          </button>
        </div>
        <h2 id="project-dialog-title">{project.title}</h2>
        <p>{project.longDescription}</p>
        <h3>What it does</h3>
        <ul>
          {project.functionalities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3>Built with</h3>
        <div className="tags">
          {project.techStack.split(",").map((tech) => (
            <span key={tech}>{tech.trim()}</span>
          ))}
        </div>
        {project.collaborators && (
          <>
            <h3>Collaborators</h3>
            <p>{project.collaborators.join(", ")}</p>
          </>
        )}
        <h3>A closer look</h3>
        <p className="small-text">Select a screenshot to enlarge</p>
        <div className="dialog-screenshots">
          {project.screenshots?.map((src, index) => (
            <button
              type="button"
              key={src}
              onClick={() => setEnlargedImg(src)}
              aria-label={`Enlarge ${project.title} screenshot ${index + 1}`}
            >
              <img src={src} alt={`${project.title} screenshot ${index + 1}`} />
            </button>
          ))}
        </div>
        {project.link && project.link !== "#" && (
          <a
            className="button button-primary"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repository / Live Demo<Arrow diagonal />
          </a>
        )}
        {enlargedImg && (
          <dialog
            ref={lightbox}
            className="image-dialog"
            aria-label="Enlarged project screenshot"
            onKeyDown={trapFocus}
            onCancel={(event) => {
              event.preventDefault();
              event.stopPropagation();
              closeLightbox();
            }}
            onClick={(event) => {
              if (event.target === event.currentTarget) closeLightbox();
            }}
          >
            <button
              type="button"
              className="icon-button"
              onClick={closeLightbox}
              aria-label="Close enlarged screenshot"
              autoFocus
            >
              <Close />
            </button>
            <img
              src={enlargedImg}
              alt={`${project.title} enlarged screenshot`}
            />
          </dialog>
        )}
      </div>
    </dialog>,
    document.body,
  );
}
