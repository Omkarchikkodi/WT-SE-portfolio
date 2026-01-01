export default function Skills() {
  const skills = [
    { name: "Frontend", level: "HTML, CSS, javascript, React", span: "span 2" },
    { name: "Backend", level: "Node.js, Express.js", span: "span 1" },
    { name: "Containerisation", level: "Docker", span: "span 1" },
    { name: "AI/ML", level: "Python", span: "span 1" },
    { name: "Database", level: "MySQL, Firebase", span: "span 2" },
    { name: "Orchestration", level: "Kubernetes", span: "span 1" },
  ];

  return (
    <section id="skills" className="section">
      <h2 style={{ fontSize: '2.5rem' }}>Tech <span className="gradient-text">Arsenal</span></h2>
      <div className="bento-grid">
        {skills.map((s, i) => (
          <div key={i} className="glass-card" style={{ gridColumn: s.span, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <p style={{ color: 'var(--accent)', fontSize: '0.7rem', fontWeight: 700 }}>{s.level}</p>
            <h3 style={{ fontSize: '1.4rem' }}>{s.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}