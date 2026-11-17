import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'Folashade Fashion',
    url: 'https://folashadefashion.com',
    tech: ['React Router v8', 'React Query', 'TailwindCSS'],
    desc: 'A modern e-commerce platform for Folashade Fashion, built with React Router v8, React Query, and TailwindCSS for a seamless shopping experience.',
  },
  {
    name: 'Frontlett',
    url: 'https://uloofstories.com',
    tech: ['PHP', 'Laravel', 'React Router v7'],
    desc: 'A dynamic storytelling platform that combines PHP, Laravel, and React Router v7 to deliver engaging narratives with interactive features.',
  },
  {
    name: 'Care Ambassadors',
    url: 'https://careambassadors.com',
    tech: ['React'],
    desc: 'A healthcare-focused platform for managing patient care and medical records with a modern React interface.',
  },
  {
    name: 'Bammy Bestowed',
    url: 'https://bammbestowed.com',
    tech: ['React'],
    desc: 'Polished React application with modern component architecture and optimised performance.',
  },
  {
    name: 'Wanodu Barter',
    url: 'https://wanodu.com',
    tech: ['Laravel', 'React'],
    desc: 'A peer-to-peer barter exchange marketplace built on Laravel + React with secure trading flows.',
  },
  {
    name: 'SincPartners',
    url: 'https://sincpartners.com',
    tech: ['React'],
    desc: 'Professional corporate web presence showcasing partnership offerings with clean, conversion-focused design.',
  },
  {
    name: 'HostUll',
    url: 'https://hostull.com',
    tech: ['PHP', 'Laravel', 'React'],
    desc: 'Web hosting platform with PHP/Laravel backend and React frontend — domain management, billing, and hosting at scale.',
  },
  {
    name: 'Ullweb',
    url: 'https://ullweb.com.ng',
    tech: ['React'],
    desc: 'Nigerian-based digital agency platform with a localized approach and strong performance focus.',
  },
  {
    name: 'Ideas Global',
    url: 'https://ideasglobal.org',
    tech: ['React'],
    desc: 'iDEAS (Initiative for Development Empowerment and Social Action) builds lasting impact through education, inclusion, and collective action inspired by the UN Sustainable Development Goals.'
  },
  {
    name: 'Vive Cafe',
    url: 'https://vivecafe.com.ng',
    tech: ['React'],
    desc: 'Experience the perfect harmony of premium coffee, artisanal cuisine, and professional ambiance in the heart of downtown. Your perfect spot for meetings, dates, and everything in between.'
  },
  {
    name: 'Space trxform',
    url: 'https://spacetrxform.com',
    tech: ['React'],
    desc: 'At Spacetrxform, We design spaces that blend creativity, engineering, and culture to shape environments that inspire and empower communities.'
  },
  {
    name: 'Dallas Ville',
    url: 'https://dallasville.com',
    tech: ['React'],
    desc: 'Dallasville is a leading real estate company dedicated to helping individuals and families find their perfect homes.'
  }
];

// Uses thum.io — free, no API key, just works
// const thumbUrl = (url: string) =>
//   `https://image.thum.io/get/width/800/crop/500/allowJPG/noanimate/${url}`;

// Using Microlink which is more robust for JS-heavy sites
const thumbUrl = (url: string) => {
  const params = new URLSearchParams({
    url,
    screenshot: 'true',
    meta: 'false',
    embed: 'screenshot.url',
    'viewport.width': '1280',
    'viewport.height': '800',
    waitUntil: 'domcontentloaded',
    waitForSelector: '#root main',
  });

  return `https://api.microlink.io?${params.toString()}`;
};
const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [imgState, setImgState] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: 'var(--bg2)',
        border: '1px solid var(--border-c)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.25s',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--ink3)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-c)')}
    >
      {/* Thumbnail */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden', background: 'var(--bg3)', borderBottom: '1px solid var(--border-c)' }}>
        {imgState === 'loading' && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 24, height: 24, border: '2px solid var(--border-c)', borderTopColor: 'var(--ink3)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
          </div>
        )}
        {imgState === 'error' && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em', color: 'var(--ink3)', textTransform: 'uppercase' }}>
              {project.url.replace('https://', '')}
            </span>
          </div>
        )}
        <img
          src={thumbUrl(project.url)}
          alt={project.name}
          loading="lazy"
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            opacity: imgState === 'loaded' ? 1 : 0,
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
          onLoad={() => setImgState('loaded')}
          onError={() => setImgState('error')}
        />
        {/* Overlay on hover */}
        <div
          className="thumb-overlay"
          style={{
            position: 'absolute', inset: 0,
            background: 'rgba(14,13,11,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: 0, transition: 'opacity 0.25s',
          }}
        >
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--ink)', padding: '10px 20px', border: '1px solid var(--ink)', textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: 6,
            }}
          >
            Visit Site <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '1.25rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {project.tech.map(t => (
            <span
              key={t}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase',
                padding: '3px 8px', border: '1px solid var(--border-c)', color: 'var(--ink3)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', letterSpacing: '-0.02em', color: 'var(--ink)', lineHeight: 1.2 }}>
          {project.name}
        </div>
        <p style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.65, flex: 1 }}>{project.desc}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase',
            color: 'var(--ink)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6,
            borderBottom: '1px solid var(--border-c)', paddingBottom: 2, width: 'fit-content', transition: 'border-color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--ink)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-c)'}
        >
          Visit site →
        </a>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .thumb-overlay { opacity: 0 !important; }
        *:hover > .thumb-overlay { opacity: 1 !important; }
      `}</style>
    </motion.div>
  );
};

const ProjectsSection = () => (
  <section id="work" style={{ maxWidth: '1400px', margin: '0 auto', padding: '6rem clamp(1.5rem, 6vw, 5rem)' }}>
    {/* Header */}
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-c)' }}>
      <div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: '0.4rem' }}>
          Selected work
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', color: 'var(--ink)' }}>
          Live Projects
        </motion.h2>
      </div>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink3)', letterSpacing: '0.08em' }}>08 projects</span>
    </div>

    {/* Grid */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '1px', background: 'var(--border-c)' }}>
      {projects.map((p, i) => (
        <ProjectCard key={p.url} project={p} index={i} />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
