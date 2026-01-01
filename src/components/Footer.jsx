export default function Footer() {
  return (
    <footer style={{ padding: '40px 10%', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', color: 'var(--text-dim)', fontSize: '0.8rem' }}>
      <p>© 2026 | OMKAR P C. Built with React & Passion.</p>
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="https://github.com/Omkarchikkodi" style={{ color: 'inherit', textDecoration: 'none' }}>GITHUB</a>
        <a href="https://www.linkedin.com/in/omkar-pandit-chikkodi" style={{ color: 'inherit', textDecoration: 'none' }}>LINKEDIN</a>
      </div>
    </footer>
  );
}