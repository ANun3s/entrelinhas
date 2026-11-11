import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { publicAsset } from '../publicAsset';

export function CursorCard({ children, image, description, href = '#', title, date, className = '' }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const reduceMotion = useReducedMotion();

  useEffect(() => { setMounted(true); }, []);
  const handleMouseMove = (event) => {
    const previewWidth = window.innerWidth < 560 ? Math.min(240, window.innerWidth - 36) : 240;
    const left = Math.min(Math.max(12, event.clientX - previewWidth / 2), window.innerWidth - previewWidth - 12);
    const top = event.clientY + 20 + 190 > window.innerHeight ? event.clientY - 210 : event.clientY + 20;
    x.set(left);
    y.set(Math.max(12, top));
  };

  const handleFocus = (event) => {
    setIsHovered(true);
    const rect = event.currentTarget.getBoundingClientRect();
    const previewWidth = Math.min(240, window.innerWidth - 24);
    x.set(Math.min(Math.max(12, rect.left), window.innerWidth - previewWidth - 12));
    y.set(Math.min(Math.max(12, rect.bottom + 12), window.innerHeight - 200));
  };
  const portalTarget = mounted && typeof document !== 'undefined'
    ? document.querySelector('.reader[open]') || document.body
    : null;

  return <>
    <a href={href} className={`cursor-card-link ${className}`}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onMouseMove={handleMouseMove}
      onFocus={handleFocus} onBlur={() => setIsHovered(false)} aria-label={`${title}: ${description}`}
      target="_blank" rel="noreferrer">
      {children}
    </a>
    {portalTarget && createPortal(<AnimatePresence>
      {isHovered && <motion.div initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.84 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.84 }} transition={{ duration: reduceMotion ? 0 : .16, ease: 'easeOut' }} style={{ x: springX, y: springY }} className="cursor-preview" aria-hidden="true">
        <img src={publicAsset(image)} alt="" className="cursor-preview-image" />
        <div className="cursor-preview-copy"><span className="cursor-preview-date">{date}</span><h3>{title}</h3><p>{description}</p><span className="cursor-preview-source">ABRIR REFERÊNCIA ↗</span></div>
      </motion.div>}
    </AnimatePresence>, portalTarget)}
  </>;
}

export default CursorCard;
