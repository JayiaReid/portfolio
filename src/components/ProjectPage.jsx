import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from "../constants";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">{project.name}</h2>
      <p className="mt-3">{project.description}</p>
      <div className="mt-5">
        {project.tags.map((tag, index) => (
          <span key={index} className={`text-sm mr-2 ${tag.color}`}>
            #{tag.name}
          </span>
        ))}
      </div>
      <div className="mt-5">
        <a href={project.source_code_link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          View Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
