import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as any },
  });

  const stats = [
    { num: '8+',   label: 'Years experience' },
    { num: '50+',  label: 'Projects shipped' },
    { num: '12+',  label: 'Technologies' },
    { num: '100%', label: 'Client satisfaction' },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        paddingTop: 'calc(4rem + 64px)',
        paddingBottom: '5rem',
        paddingLeft: 'clamp(1.5rem, 6vw, 5rem)',
        paddingRight: 'clamp(1.5rem, 6vw, 5rem)',
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
        gap: '4rem',
        alignItems: 'center',
      }}
    >
      {/* Left */}
      <div>
        <motion.div {...fadeUp(0.1)} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem' }}>
          <span style={{ width: 24, height: 1, background: 'var(--ink3)', display: 'inline-block' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', color: 'var(--ink3)', textTransform: 'uppercase' }}>
            Fullstack Web Developer
          </span>
        </motion.div>

        {/* Availability */}
        <motion.div {...fadeUp(0.15)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '1.5rem', padding: '6px 14px', border: '1px solid var(--border-c)', background: 'var(--bg2)' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4caf7d', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--ink2)' }}>Available for new projects</span>
        </motion.div>

        <motion.h1 {...fadeUp(0.2)} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 1.0, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '1.5rem' }}>
          Building the<br /><em style={{ color: 'var(--ink2)' }}>web</em> that<br />works.
        </motion.h1>

        <motion.p {...fadeUp(0.3)} style={{ fontSize: 17, color: 'var(--ink2)', maxWidth: 480, lineHeight: 1.75, marginBottom: '2.5rem' }}>
          I'm Reinhard — a fullstack developer with{' '}
          <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>8+ years</strong> of experience crafting
          robust applications with{' '}
          <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>PHP, Laravel, React, Vue.js</strong> and{' '}
          <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Node.js</strong>. From concept to deployment.
        </motion.p>

        <motion.div {...fadeUp(0.4)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => scrollTo('work')}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '14px 28px', background: 'var(--primary)', color: 'var(--primary-foreground)', border: 'none', cursor: 'pointer', transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            View My Work
          </button>
          <button
            onClick={() => scrollTo('contact')}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '14px 28px', background: 'transparent', color: 'var(--ink)', border: '1px solid var(--border-c)', cursor: 'pointer', transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--ink)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-c)'}
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* Right — stats grid */}
      <motion.div
        {...fadeUp(0.35)}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1px',
          background: 'var(--border-c)',
          border: '1px solid var(--border-c)',
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            style={{ background: 'var(--bg2)', padding: '2rem', textAlign: 'center' }}
          >
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: 1, letterSpacing: '-0.04em', color: 'var(--ink)', marginBottom: '0.4rem' }}>
              {s.num}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--ink3)', textTransform: 'uppercase' }}>
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
