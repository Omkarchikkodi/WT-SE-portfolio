export default function Contact() {
  return (
    <section id="contact" className="section" style={{ textAlign: 'center' }}>
      <div className="glass" style={{ padding: '60px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '3rem' }}>Let's connect and build something <span className="gradient-text">legendary</span>.</h2>
        <p style={{ margin: '20px 0', color: 'var(--text-dim)' }}>omkarchikkodi26@gmail.com</p>
        <button className="glass" style={{ padding: '15px 40px', background: 'white', color: 'black', fontWeight: 800, border: 'none', cursor: 'pointer' }}>
          <a
            href="mailto:omkarchikkodi26@gmail.com"
            className="glass"
            style={{
              display: "inline-block",
              color: "black",
              fontWeight: 800,
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Contact Me
          </a>
        </button>
      </div>
    </section>
  );
}