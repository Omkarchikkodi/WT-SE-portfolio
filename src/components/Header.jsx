export default function Header() {
  return (
    <header className="header">
      <div className="logo">OMKAR P CHIKKODI<span style={{ color: 'var(--accent)' }}>.</span></div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#assignments">Assignments</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}