export default function About() {
  return (
    <section id="about" className="section" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '80px', alignItems: 'center' }}>
      <div>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Engineering <br /> meets <span className="gradient-text">Design</span>.</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem' }}>
          I am a Computer Science Engineering student applying software engineering principles to design and develop efficient, maintainable web applications, with a strong focus on modern web technologies, clean architecture, and real-world problem solving.        </p>
      </div>
      <div
        className="glass"
        style={{
          height: "300px",
          width: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderRadius: "20px",
        }}
      >
        <img
          src="/src/assets/profile.jpg"
          alt="Profile"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
}