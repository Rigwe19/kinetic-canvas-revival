import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const groups = [
  {
    title: 'Backend & Frameworks',
    skills: [
      { name: 'Laravel / PHP', pct: 98 },
      { name: 'Inertia.js', pct: 95 },
      { name: 'Adonis.js', pct: 92 },
      { name: 'Ts.Ed / Express.js', pct: 90 },
      { name: 'Node.js', pct: 88 },
      { name: 'MySQL / PostgreSQL', pct: 93 },
      { name: 'MongoDB', pct: 82 },
    ],
  },
  {
    title: 'Frontend & Mobile',
    skills: [
      { name: 'React / Next.js', pct: 95 },
      { name: 'Vue.js / Nuxt', pct: 90 },
      { name: 'TypeScript', pct: 88 },
      { name: 'React Native', pct: 85 },
      { name: 'Ionic', pct: 88 },
      { name: 'Angular / Svelte', pct: 82 },
      { name: 'Docker / CI/CD', pct: 80 },
    ],
  },
];

const SkillBar = ({ name, pct, delay }: { name: string; pct: number; delay: number }) => {
  const [filled, setFilled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setFilled(true); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.55rem 0', borderBottom: '1px solid var(--border-c)' }}>
      <span style={{ fontSize: 13, color: 'var(--ink)', minWidth: 160 }}>{name}</span>
      <div style={{ flex: 1, height: 2, background: 'var(--border-c)', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            background: 'var(--ink)',
            width: filled ? `${pct}%` : '0%',
            transition: `width 1s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
          }}
        />
      </div>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink3)', minWidth: 30, textAlign: 'right' }}>{pct}%</span>
    </div>
  );
};

const SkillsSection = () => (
  <section id="skills" style={{ maxWidth: '1400px', margin: '0 auto', padding: '6rem clamp(1.5rem, 6vw, 5rem)' }}>
    {/* Header */}
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-c)' }}>
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: '0.4rem' }}>Technical proficiency</div>
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', color: 'var(--ink)' }}>
          Skills
        </motion.h2>
      </div>
    </div>

    {/* Two-column grid */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '4rem' }}>
      {groups.map((g) => (
        <div key={g.title}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-c)' }}>
            {g.title}
          </div>
          {g.skills.map((s, i) => (
            <SkillBar key={s.name} name={s.name} pct={s.pct} delay={i * 80} />
          ))}
        </div>
      ))}
    </div>

    {/* Summary box */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      style={{ marginTop: '4rem', padding: '2.5rem', border: '1px solid var(--border-c)', background: 'var(--bg2)' }}
    >
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: '0.75rem' }}>Full Stack Expertise</div>
      <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.75, maxWidth: 760 }}>
        Specialised in creating <span style={{ color: 'var(--ink)', fontWeight: 500 }}>RESTful APIs</span>,
        building responsive frontends, and implementing <span style={{ color: 'var(--ink)', fontWeight: 500 }}>scalable architectures</span>.
        Experienced with both monolithic and microservice approaches, including{' '}
        <span style={{ color: 'var(--ink)', fontWeight: 500 }}>InertiaJS</span> for seamless full-stack development with Laravel and React.
      </p>
    </motion.div>
  </section>
);

export default SkillsSection;
