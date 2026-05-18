import { useLocation } from "react-router-dom";
const NotFound = () => {
  const location = useLocation();
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '4rem', color: 'var(--ink)' }}>404</h1>
        <p style={{ color: 'var(--ink2)', marginBottom: '1rem' }}>Page not found: {location.pathname}</p>
        <a href="/" style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--border-c)' }}>← Back home</a>
      </div>
    </div>
  );
};
export default NotFound;
