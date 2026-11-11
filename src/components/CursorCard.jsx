import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion, useSpring } from 'framer-motion';
import { publicAsset } from '../publicAsset';

export function CursorCard({ children, image, description, href = '#', title, date, imageCredit, className = '' }) {
  const previewRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const springConfig = { damping: 25, stiffness: 300 };
  const springX = useSpring(0, springConfig);
  const springY = useSpring(0, springConfig);
  const reduceMotion = useReducedMotion();

  useEffect(() => { setMounted(true); }, []);
  const handleMouseMove = (event, immediate = false) => {
    const previewWidth = Math.min(280, window.innerWidth - 24);
    const previewHeight = previewRef.current?.offsetHeight || 380;
    const left = Math.min(Math.max(12, event.clientX - previewWidth / 2), window.innerWidth - previewWidth - 12);
    const top = event.clientY + 20 + previewHeight > window.innerHeight ? event.clientY - previewHeight - 16 : event.clientY + 20;
    springX[immediate ? "jump" : "set"](left);
    springY[immediate ? "jump" : "set"](Math.max(12, top));
  };

  const handleFocus = (event) => {
    setIsHovered(true);
    const rect = event.currentTarget.getBoundingClientRect();
    const previewWidth = Math.min(280, window.innerWidth - 24);
    springX.jump(Math.min(Math.max(12, rect.left), window.innerWidth - previewWidth - 12));
    springY.jump(Math.max(12, Math.min(rect.bottom + 12, window.innerHeight - (previewRef.current?.offsetHeight || 380) - 12)));
  };
  const portalTarget = mounted && typeof document !== 'undefined'
    ? document.querySelector('.reader[open]') || document.body
    : null;

  return <>
    <a href={href} className={`cursor-card-link ${className}`}
      onMouseEnter={event => { handleMouseMove(event, true); setIsHovered(true); }} onMouseLeave={() => setIsHovered(false)} onMouseMove={event => handleMouseMove(event)}
      onFocus={handleFocus} onBlur={() => setIsHovered(false)} aria-label={`${title}: ${description}`}
      target="_blank" rel="noreferrer">
      {children}
    </a>
    {portalTarget && createPortal(<AnimatePresence>
      {isHovered && <motion.div ref={previewRef} initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.84 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.84 }} transition={{ duration: reduceMotion ? 0 : .16, ease: 'easeOut' }} style={{ x: springX, y: springY }} className="cursor-preview" aria-hidden="true">
        <img src={publicAsset(image)} alt="" className="cursor-preview-image" />
        <span className="cursor-preview-caption">{imageCredit ? `${imageCredit.caption} · ${imageCredit.author || "Wikimedia Commons"} · ${imageCredit.license || "Ver créditos"}` : "Ilustração de contexto"}</span><div className="cursor-preview-copy"><span className="cursor-preview-date">{date}</span><h3>{title}</h3><p>{description}</p><span className="cursor-preview-source">ABRIR REFERÊNCIA ↗</span></div>
      </motion.div>}
    </AnimatePresence>, portalTarget)}
  </>;
}

export default CursorCard;
