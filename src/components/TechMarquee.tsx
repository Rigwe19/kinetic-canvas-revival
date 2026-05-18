const items = [
  'PHP', 'Laravel', 'React', 'Vue.js', 'Node.js', 'Inertia.js',
  'MySQL', 'PostgreSQL', 'MongoDB', 'Docker', 'React Native', 'Ionic',
  'TypeScript', 'Next.js', 'TailwindCSS', 'REST APIs',
];

const TechMarquee = () => (
  <div style={{ borderTop: '1px solid var(--border-c)', borderBottom: '1px solid var(--border-c)', padding: '13px 0', background: 'var(--bg2)', overflow: 'hidden', whiteSpace: 'nowrap' }}>
    <div style={{ display: 'inline-flex', animation: 'marquee 28s linear infinite', gap: '3rem' }}>
      {[...items, ...items].map((item, i) => (
        <span
          key={i}
          style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: i % 3 === 0 ? 'var(--ink2)' : 'var(--ink3)', flexShrink: 0 }}
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default TechMarquee;
