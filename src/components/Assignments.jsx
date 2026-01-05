import React, { useState } from 'react';

const assignments = [
  {
    id: 1,
    title: "Personal Blog Website",
    tech: "HTML, CSS, Bootstrap",
    description: "A responsive website to publish blogs featuring grid-based layouts and hover animations.",
    siteLink: "https://omkarchikkodi.github.io/assignments/assignments/assignment1/index.html",
    codeLink: "https://github.com/omkarchikkodi/assignments/tree/main/assignments/assignment1",
    hasCode: true
  },
  {
    id: 2,
    title: "Task Board (To-Do List)",
    tech: "JavaScript, HTML, CSS",
    description: "Dynamic task manager with status tracking (To-Do, Ongoing, Completed) and LocalStorage persistence.",
    siteLink: "https://omkarchikkodi.github.io/assignments/assignments/assignment2/index.html",
    codeLink: "https://github.com/omkarchikkodi/assignments/tree/main/assignments/assignment2",
    hasCode: true
  },
  {
    id: 3,
    title: "Blogs REST API",
    tech: "Node.js, Express",
    description: "Backend API for CRUD operations",
    screenshots: [
      "/screenshots/assign3/1.jpeg",
      "/screenshots/assign3/2.jpeg",
      "/screenshots/assign3/3.jpeg"
    ],
    hasCode: false
  },
  {
    id: 4,
    title: "Weather Dashboard",
    tech: "React, CSS, API",
    description: "SPA using third-party APIs",
    screenshots: [
      "/screenshots/assign4/1.png",
      "/screenshots/assign4/2.png",
      "/screenshots/assign4/3.png",
      "/screenshots/assign4/4.png"
    ],
    hasCode: false
  },
  {
    id: 5,
    title: "Mobile recharge - Full-Stack MERN App",
    tech: "MongoDB, Express, React, Node.js",
    description: "End-to-end CRUD application",
    screenshots: [
      "/screenshots/assign5/1.png",
      "/screenshots/assign5/2.png",
      "/screenshots/assign5/3.png",
      "/screenshots/assign5/4.png",
      "/screenshots/assign5/5.png",
      "/screenshots/assign5/6.png",
      "/screenshots/assign5/7.png",
      "/screenshots/assign5/8.png",
      "/screenshots/assign5/9.png",
      "/screenshots/assign5/10.png",
      "/screenshots/assign5/11.png",
      "/screenshots/assign5/12.png",
      "/screenshots/assign5/13.png",
      "/screenshots/assign5/14.png",
    ],
    hasCode: false
  }
];

export default function Assignments() {
  const [activeScreenshots, setActiveScreenshots] = useState(null);

  return (
    <>
      <section id="assignments" className="assignments-section">
        <h2 className="section-title">
          Academic <span style={{ color: 'var(--accent)' }}>Assignments</span>
        </h2>

        <div className="assignments-grid">
          {assignments.map((item) => (
            <div key={item.id} className="assignment-card">
              <div className="assignment-content">
                <h3>{item.title}</h3>
                <p className="tech-stack">{item.tech}</p>
                <p className="description">{item.description}</p>

                <div className="assignment-links">
                  {/* View Site / Screenshots */}
                  {item.hasCode ? (
                    <a
                      href={item.siteLink}
                      target="_blank"
                      rel="noreferrer"
                      className="view-link"
                    >
                      View Site →
                    </a>
                  ) : (
                    <button
                      className="view-link"
                      onClick={() => setActiveScreenshots(item.screenshots)}
                    >
                      View Screenshots →
                    </button>
                  )}

                  {/* View Code */}
                  {item.hasCode ? (
                    <a
                      href={item.codeLink}
                      target="_blank"
                      rel="noreferrer"
                      className="view-link secondary"
                    >
                      View Code →
                    </a>
                  ) : (
                    <span className="view-link disabled">Code coming soon</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshot Modal */}
      {activeScreenshots && (
        <div
          className="modal-overlay"
          onClick={() => setActiveScreenshots(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {activeScreenshots.map((img, index) => (
              <img key={index} src={img} alt={`screenshot-${index}`} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
