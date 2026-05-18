const Footer = () => (
  <footer style={{
    borderTop: '1px solid var(--border-c)',
    padding: '1.75rem clamp(1.5rem, 6vw, 5rem)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem',
    background: 'var(--bg2)',
  }}>
    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink3)', letterSpacing: '0.04em' }}>
      © 2025 Reinhard — Fullstack Developer
    </span>
    <div style={{ display: 'flex', gap: '1.5rem' }}>
      {['Work', 'Services', 'Skills', 'Contact'].map(label => (
        <button
          key={label}
          onClick={() => { const el = document.getElementById(label.toLowerCase()); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
          style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink3)', letterSpacing: '0.04em', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--ink)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--ink3)'}
        >
          {label}
        </button>
      ))}
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink3)', letterSpacing: '0.04em', textDecoration: 'none', transition: 'color 0.2s' }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--ink)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--ink3)'}
      >
        GitHub ↗
      </a>
    </div>
  </footer>
);

export default Footer;
