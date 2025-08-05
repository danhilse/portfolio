// components/GhostlikeText.jsx
import React, { useEffect, useRef, useState } from 'react';
import styles from './GhostlikeText.module.css';

const GhostlikeText = ({ 
  children, 
  variant = 'standard',
  delay = 500,
  className = '',
  ...props 
}) => {
  const textRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize character spans on mount
  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // Get the original text content
    const text = element.textContent;
    if (!text || element.querySelector('.char')) return;

    // Clear and rebuild the character spans
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

    setIsInitialized(true);
  }, []); // Run only on mount

  // Handle auto animation after initialization
  useEffect(() => {
    if (!isInitialized || variant !== 'auto') return;

    const element = textRef.current;
    if (!element) return;

    const timer = setTimeout(() => {
      element.classList.add(styles.autoTriggered);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [isInitialized, variant, delay]);

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