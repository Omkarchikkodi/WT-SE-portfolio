import React from 'react';

const assignments = [
  {
    id: 1,
    title: "Personal Blog Website",
    tech: "HTML, CSS, Bootstrap",
    description: "A responsive website to publish blogs featuring grid-based layouts and hover animations.",
    link: "https://omkarchikkodi.github.io/assignments/assignments/assignment1/index.html"
  },
  {
    id: 2,
    title: "Task Board (To-Do List)",
    tech: "JavaScript, HTML, CSS",
    description: "Dynamic task manager with status tracking (To-Do, Ongoing, Completed) and LocalStorage persistence.",
    link: "https://omkarchikkodi.github.io/assignments/assignments/assignment2/index.html"
  }
];

export default function Assignments() {
  return (
    <section id="assignments" className="assignments-section">
      <h2 className="section-title">Academic <span style={{ color: 'var(--accent)' }}>Assignments</span></h2>
      <div className="assignments-grid">
        {assignments.map((item) => (
          <div key={item.id} className="assignment-card">
            <div className="assignment-content">
              <h3>{item.title}</h3>
              <p className="tech-stack">{item.tech}</p>
              <p className="description">{item.description}</p>
              <a href={item.link} target="_blank" rel="noreferrer" className="view-link">
                View site →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}