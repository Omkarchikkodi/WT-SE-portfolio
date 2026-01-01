import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="section" style={{ textAlign: 'center' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <span style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '2px', fontSize: '0.8rem' }}>ASPIRING COMPUTER SCIENCE STUDENT</span>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 800, margin: '20px 0' }}>
          From <span className="gradient-text">Ideas</span> <br /> To Interface.
        </h1>
        <div style={{ marginTop: '30px' }}>
          <a href="#projects" className="btn-primary">View My Work</a>
        </div>
      </motion.div>
    </section>
  );
}