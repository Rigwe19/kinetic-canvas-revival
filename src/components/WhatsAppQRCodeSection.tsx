import { useEffect, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { gsap } from 'gsap';
import { MessageSquare } from 'lucide-react';
import QRCode from "react-qr-code";

const WhatsAppQRCodeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const qrRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      gsap.from(qrRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const whatsappNumber = '+2348103382000';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}`;

  return (
    <section 
      ref={sectionRef}
      style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '6rem clamp(1.5rem, 6vw, 5rem)',
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border-c)',
        borderBottom: '1px solid var(--border-c)'
      }}
    >
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '3rem'
      }}>
        <div ref={contentRef} style={{ flex: '1', minWidth: '300px' }}>
          <div style={{ 
            fontFamily: 'var(--font-mono)', 
            fontSize: 11, 
            letterSpacing: '0.15em', 
            textTransform: 'uppercase', 
            color: 'var(--accent-c)', 
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <MessageSquare size={14} /> Let's Connect
          </div>
          <h2 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            letterSpacing: '-0.03em', 
            color: 'var(--ink)',
            marginBottom: '1.5rem',
            lineHeight: 1.1
          }}>
            Scan to chat on WhatsApp
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'var(--ink2)', 
            lineHeight: 1.6, 
            maxWidth: '500px',
            marginBottom: '2rem'
          }}>
            Have a project in mind or just want to say hi? Scan the QR code to start a conversation directly with me on WhatsApp. I'm usually quick to respond!
          </p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 14,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: 'var(--ink)',
              textDecoration: 'none',
              padding: '1rem 2rem',
              border: '1px solid var(--accent-c)',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              background: 'transparent'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--accent-c)';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--ink)';
            }}
          >
            Open in WhatsApp
          </a>
        </div>

        <div 
          ref={qrRef}
          style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '1.5rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <QRCode 
            value={whatsappUrl} 
            size={200}
            level="H"
            // includeMargin={false}
            // imageSettings={{
            //   src: "/favicon.ico",
            //   x: undefined,
            //   y: undefined,
            //   height: 40,
            //   width: 40,
            //   excavate: true,
            // }}
          />
          <span style={{ 
            fontFamily: 'var(--font-mono)', 
            fontSize: 10, 
            color: '#0e0d0b', 
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            {whatsappNumber}
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppQRCodeSection;
