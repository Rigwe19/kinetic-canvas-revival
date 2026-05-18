import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    name: 'Fullstack Web Development',
    desc: 'End-to-end applications with Laravel backends and React/Vue frontends. RESTful APIs, database design, auth, and deployment.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="28" height="20" rx="2"/>
        <path d="M11 14l-4 2 4 2M21 14l4 2-4 2M15 22l2-10"/>
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Laravel Application Development',
    desc: 'Scalable Laravel apps — multi-tenant SaaS, CMS, ERP, CRM, and custom business logic with clean architecture principles.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3L28 9.5v13L16 29 4 22.5v-13L16 3z"/>
        <path d="M16 3v26M4 9.5l12 7 12-7"/>
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Mobile App Development',
    desc: 'Cross-platform iOS & Android apps with React Native and Ionic, tightly integrated with REST APIs.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="9" y="2" width="14" height="28" rx="3"/>
        <path d="M13 27h6"/>
        <circle cx="16" cy="6" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    num: '04',
    name: 'API Design & Development',
    desc: 'RESTful and GraphQL APIs with authentication, versioning, rate limiting, and thorough documentation.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="16" cy="16" r="12"/>
        <path d="M16 4c0 0-6 5.4-6 12s6 12 6 12M16 4c0 0 6 5.4 6 12s-6 12-6 12M4 16h24"/>
      </svg>
    ),
  },
  {
    num: '05',
    name: 'Database Architecture',
    desc: 'Database modeling, optimisation, and migration strategies for MySQL, PostgreSQL, and MongoDB at scale.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <ellipse cx="16" cy="9" rx="11" ry="4.5"/>
        <path d="M5 9v6.5c0 2.5 4.9 4.5 11 4.5s11-2 11-4.5V9"/>
        <path d="M5 15.5V22c0 2.5 4.9 4.5 11 4.5S27 24.5 27 22v-6.5"/>
      </svg>
    ),
  },
  {
    num: '06',
    name: 'E-Commerce Development',
    desc: 'Multi-vendor marketplaces, payment gateway integrations (Stripe, Flutterwave), inventory management, and order systems.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h3l2.4 12.4a2 2 0 002 1.6h9.2a2 2 0 001.96-1.6L24 9H8"/>
        <circle cx="11" cy="27" r="2"/>
        <circle cx="21" cy="27" r="2"/>
      </svg>
    ),
  },
  {
    num: '07',
    name: 'SaaS Product Development',
    desc: 'Subscription-based SaaS from scratch — multi-tenancy, billing (Paddle/Stripe), onboarding flows, and analytics dashboards.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 28l5.5-5.5 3.5 3.5 5.5-7.5L26 28"/>
        <rect x="2" y="2" width="28" height="28" rx="2"/>
      </svg>
    ),
  },
  {
    num: '08',
    name: 'System Integration & DevOps',
    desc: 'Docker containerisation, CI/CD pipelines, third-party API integrations, cloud deployments on AWS/DigitalOcean.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M16 2a14 14 0 1014 14A14 14 0 0016 2z"/>
        <path d="M16 8v8l5 5"/>
      </svg>
    ),
  },
  {
    num: '09',
    name: 'Technical Consulting',
    desc: 'Architecture reviews, code audits, tech stack selection, and mentoring teams to improve quality and delivery speed.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="16" cy="11" r="5.5"/>
        <path d="M5 28c0-6.1 4.9-11 11-11s11 4.9 11 11"/>
      </svg>
    ),
  },
];

const ServicesSection = () => (
  <div style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border-c)' }}>
    <section id="services" style={{ maxWidth: '1400px', margin: '0 auto', padding: '6rem clamp(1.5rem, 6vw, 5rem)' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-c)' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: '0.4rem' }}>What I do</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', color: 'var(--ink)' }}>Services</h2>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink3)', letterSpacing: '0.08em' }}>09 services</span>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '1px', background: 'var(--border-c)', border: '1px solid var(--border-c)' }}>
        {services.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
            style={{ background: 'var(--bg)', padding: '1.75rem', transition: 'background 0.2s', cursor: 'default' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--bg3)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--bg)'}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--ink3)', marginBottom: '1rem', textTransform: 'uppercase' }}>{s.num}</div>
            <div style={{ color: 'var(--ink2)', marginBottom: '0.75rem' }}>{s.icon}</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: '0.6rem', lineHeight: 1.25 }}>{s.name}</div>
            <p style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.65 }}>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default ServicesSection;
