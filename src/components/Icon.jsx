export default function Icon({ name = 'arrow-up-right', className = '' }) {
  const paths = { 'arrow-up-right': 'M6 18 18 6M6 6h12v12', 'arrow-up': 'M12 20V4m-6 6 6-6 6 6', close: 'm6 6 12 12M6 18 18 6' };
  return <svg className={`line-icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name] || paths['arrow-up-right']} /></svg>;
}
