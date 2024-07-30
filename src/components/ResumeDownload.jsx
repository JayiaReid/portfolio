// ResumeDownload.jsx
import React from 'react';

const ResumeDownload = () => {
    // rounded button
  return (
    <button className="bg-primary outline hover:bg-white hover:text-primary text-white resume-download rounded-es-md rounded-se-md my-5 flex justify-left">
      <a
        href="/resume.pdf"
        download="Resume_Jayia_Reid.pdf" //on you
        className=" font-bold py-2 px-4 rounded"
      >
        Download My Resume
      </a>
    </button>
  );
};

export default ResumeDownload;
