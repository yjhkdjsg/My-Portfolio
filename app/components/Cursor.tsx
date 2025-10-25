'use client';
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  if (typeof window === 'undefined') return null;
  return createPortal(
    <div ref={cursorRef} className="custom-cursor" />,
    document.body
  );
}
