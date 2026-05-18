import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, CheckCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useSendEmail } from '../hooks/useSendEmail';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectType: '',
    message: ''
  });

  const { sendEmail, isLoading } = useSendEmail({
    toast: ({ title, description, status }) => {
      toast({
        title,
        description,
        // variant: status === "error" ? "destructive" : "default",
      });
    },
    onSuccess: () => setSent(true),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendEmail({
      data: formData,
      subject: `New Project Inquiry from ${formData.firstName} ${formData.lastName}`,
      emailTitle: "New Contact Form Submission",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactItems = [
    { icon: <Mail size={14} />, label: 'Email', value: 'contact@reinhard.name.ng' },
    { icon: <MapPin size={14} />, label: 'Location', value: 'Remote — Worldwide' },
    { icon: <Clock size={14} />, label: 'Response time', value: 'Within 24 hours' },
  ];

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--bg)',
    border: '1px solid var(--border-c)',
    padding: '10px 12px',
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    color: 'var(--ink)',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-mono)',
    fontSize: 10,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: 'var(--ink3)',
    marginBottom: 6,
    display: 'block',
  };

  return (
    <div style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border-c)' }}>
      <section id="contact" style={{ maxWidth: '1400px', margin: '0 auto', padding: '6rem clamp(1.5rem, 6vw, 5rem)' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-c)' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: '0.4rem' }}>Let's work together</div>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', color: 'var(--ink)' }}>
              Contact
            </motion.h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '1px', background: 'var(--border-c)', border: '1px solid var(--border-c)' }}>
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ background: 'var(--bg)', padding: '3rem' }}
          >
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--ink)', marginBottom: '1rem' }}>
              Got a project<br />in <em style={{ color: 'var(--ink2)' }}>mind?</em>
            </h3>
            <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
              Whether it's a new build, a complex integration, or a system that needs rescuing — I'm happy to talk.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Availability badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 14px', border: '1px solid var(--border-c)', background: 'var(--bg2)', width: 'fit-content', marginBottom: '0.5rem' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4caf7d' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#4caf7d', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Open for new projects</span>
              </div>

              {contactItems.map(item => (
                <div key={item.label}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ color: 'var(--ink3)' }}>{item.icon}</span>
                    {item.label}
                  </div>
                  <div style={{ fontSize: 14, color: 'var(--ink)' }}>{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ background: 'var(--bg3)', padding: '3rem' }}
          >
            {sent ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '1rem', minHeight: 320 }}>
                <CheckCircle size={40} color="#4caf7d" />
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--ink)' }}>Message sent!</div>
                <p style={{ color: 'var(--ink2)', fontSize: 14, textAlign: 'center' }}>I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" required style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--ink)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border-c)'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" required style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--ink)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border-c)'}
                    />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--ink)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border-c)'}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Project type</label>
                  <input type="text" name="projectType" value={formData.projectType} onChange={handleChange} placeholder="Web app, API, Mobile app..." style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--ink)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border-c)'}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, and budget..."
                    rows={5}
                    required
                    style={{ ...inputStyle, resize: 'none' }}
                    onFocus={e => e.target.style.borderColor = 'var(--ink)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border-c)'}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '14px', background: 'var(--ink)', color: 'var(--bg)', border: 'none', cursor: isLoading ? 'not-allowed' : 'pointer', transition: 'opacity 0.2s', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    opacity: isLoading ? 0.7 : 1
                  }}
                  onMouseEnter={e => !isLoading && (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={e => !isLoading && (e.currentTarget.style.opacity = '1')}
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message →'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
