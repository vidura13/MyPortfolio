import React, { useState } from "react";

const ProjectModal = ({ show, onClose, project }) => {
  // State for the enlarged screenshot
  const [enlargedImg, setEnlargedImg] = useState(null);

  if (!show || !project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      {/* Main Project Modal */}
      <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] p-6 overflow-y-auto">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-2xl text-gray-600 dark:text-gray-100 hover:text-red-500"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {/* Modal content */}
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300">{project.longDescription}</p>
        <div className="mb-3">
          <span className="font-semibold">Technologies: </span>
          <span>{project.techStack}</span>
        </div>
        {project.collaborators && (
          <div className="mb-3">
            <span className="font-semibold">Collaborators: </span>
            {project.collaborators.join(", ")}
          </div>
        )}
        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div>
            <span className="font-semibold">Screenshots:</span>
            <div className="flex gap-2 mt-2 flex-wrap">
              {project.screenshots.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Screenshot ${idx + 1}`}
                  className="w-32 h-20 object-cover rounded border border-gray-300 dark:border-gray-700 cursor-pointer hover:scale-110 transition"
                  onClick={() => setEnlargedImg(src)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Screenshot Lightbox Modal */}
      {enlargedImg && (
        <div
          className="fixed inset-0 z-60 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setEnlargedImg(null)}
        >
          <img
            src={enlargedImg}
            alt="Enlarged Screenshot"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg border-4 border-white"
            onClick={e => e.stopPropagation()} // Prevent click from closing modal when clicking image
          />
          <button
            className="absolute top-6 right-8 text-4xl text-white hover:text-red-400"
            onClick={() => setEnlargedImg(null)}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectModal;