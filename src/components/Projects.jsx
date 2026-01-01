import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projs = [
    { title: "Smart Hire Plus", tag: "AI / HR-Tech", desc: "Predictive resume analysis using LLMs.", github: "https://github.com/Omkarchikkodi/smarthire-plus"},
    { title: "MedChain", tag: "Web3 / Health", desc: "Blockchain based medicine tracking.", github: "https://github.com/Omkarchikkodi/medchain-frontend", demo:"https://medchain-frontend.vercel.app/"}
  ];

  return (
    <section id="projects" className="section">
      <h2 style={{ marginBottom: '40px' }}>Selected Works</h2>
      <div className="projects-container">
        {projs.map((p, i) => (
          <div key={i} className="glass" style={{ padding: '40px', transition: '0.3s' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <span style={{ background: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent)', padding: '5px 12px', borderRadius: '20px', fontSize: '0.7rem' }}>{p.tag}</span>
              <div style={{ display: 'flex', gap: '10px' }}>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} GitHub`}>
                    <Github size={18} />
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} Demo`}>
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{p.title}</h3>
            <p style={{ color: 'var(--text-dim)' }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}