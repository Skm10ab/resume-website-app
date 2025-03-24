import React from 'react';

function PreviewWebsite({ resumeData, theme }) {
  return (
    <div className={`preview-container ${theme}`}>
      <h2>Website Preview</h2>

      <section>
        <h3>Projects</h3>
        {resumeData.projects.map((project, index) => (
          <div key={index}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </div>
        ))}
      </section>

      <section>
        <h3>Work Experience</h3>
        {resumeData.work_experience.map((job, index) => (
          <div key={index}>
            <strong>{job.company}</strong> - {job.role}
          </div>
        ))}
      </section>

      <section>
        <h3>Testimonials</h3>
        {resumeData.testimonials.map((testimonial, index) => (
          <blockquote key={index}>
            "{testimonial.content}" - {testimonial.author}
          </blockquote>
        ))}
      </section>

      <section>
        <h3>Education</h3>
        {resumeData.education.map((edu, index) => (
          <div key={index}>
            {edu.school} - {edu.degree}
          </div>
        ))}
      </section>
    </div>
  );
}

export default PreviewWebsite;
