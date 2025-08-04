// components/GhostlikeText.jsx
import React, { useEffect, useRef } from 'react';
import styles from './GhostlikeText.module.css';

const GhostlikeText = ({ 
  children, 
  variant = 'standard',
  delay = 500,
  className = '',
  ...props 
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element || element.querySelector('.char')) return;

    const text = element.textContent;
    element.innerHTML = '';
    
    let charIndex = 0;
    for (let char of text) {
      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = char;
      span.style.setProperty('--i', charIndex);
      element.appendChild(span);
      charIndex++;
    }

    // Auto-trigger animation for 'auto' variant
    if (variant === 'auto') {
      const timer = setTimeout(() => {
        element.classList.add(styles.autoTriggered);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [children, variant, delay]);

  const getVariantClass = () => {
    switch (variant) {
      case 'no-opacity': return styles.noOpacity;
      case 'no-bold': return styles.noBold;
      case 'auto': return styles.auto;
      case 'parent-hover': return styles.parentHover;
      case 'standard':
      default: return styles.standard;
    }
  };

  return (
    <span 
      ref={textRef}
      className={`${styles.base} ${getVariantClass()} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default GhostlikeText;