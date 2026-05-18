import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mobileApps = [
  {
    name: 'Certification App',
    image: '/mobile/cert-dark-2c030111.jpg',
    desc: 'A secure and streamlined application for digital certifications and credential management.',
    tech: ['React Native', 'Firebase', 'TypeScript']
  },
  {
    name: 'Geolocation Tracker',
    image: '/mobile/geo-dark-fdffd28a.jpg',
    desc: 'Real-time location tracking and geofencing solutions for logistics and personal safety.',
    tech: ['React Native', 'Google Maps API', 'Node.js']
  },
  {
    name: 'JJB Mobile App',
    image: '/mobile/jjb-app-ea5963ac.jpg',
    desc: 'Comprehensive mobile solution for business management and customer engagement.',
    tech: ['Flutter', 'Dart', 'REST API']
  }
];

const MobileAppsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.mobile-header', {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.mobile-header',
          start: 'top 80%',
        }
      });

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            y: 100,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            }
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="mobile-apps"
      ref={sectionRef}
      style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '6rem clamp(1.5rem, 6vw, 5rem)',
        background: 'var(--bg)'
      }}
    >
      <div className="mobile-header" style={{ marginBottom: '4rem', borderBottom: '1px solid var(--border-c)', paddingBottom: '1.5rem' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-c)', marginBottom: '0.4rem' }}>
          Mobile Solutions
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em', color: 'var(--ink)', margin: 0 }}>
          Mobile Applications
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {mobileApps.map((app, index) => (
          <div
            key={app.name}
            ref={el => cardsRef.current[index] = el}
            className="mobile-app-card"
            // style={{
            //   background: 'var(--bg2)',
            //   border: '1px solid var(--border-c)',
            //   borderRadius: '1rem',
            //   overflow: 'hidden',
            //   transition: 'transform 0.3s ease, border-color 0.3s ease',
            //   cursor: 'pointer'
            // }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.borderColor = 'var(--accent-c)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border-c)';
            }}
          >
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
              <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                <img src={app.image} className="dark:hidden w-[272px] h-[572px]" />
                <img src={app.image} className="hidden dark:block w-[272px] h-[572px]" />
              </div>
            </div>
            <div className='flex justify-center flex-col' style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                {app.tech.map(t => (
                  <span
                    key={t}
                    style={{
                      fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase',
                      padding: '2px 8px', borderRadius: '4px', background: 'var(--bg3)', color: 'var(--ink2)', border: '1px solid var(--border-c)'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>
                {app.name}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--ink2)', lineHeight: 1.6 }}>
                {app.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileAppsSection;
