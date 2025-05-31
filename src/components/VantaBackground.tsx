
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

const VantaBackground = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    // Load Three.js
    const threeScript = document.createElement('script');
    threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js';
    threeScript.onload = () => {
      // Load Vanta.js after Three.js
      const vantaScript = document.createElement('script');
      vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.cells.min.js';
      vantaScript.onload = () => {
        if (window.VANTA && vantaRef.current) {
          vantaEffect.current = window.VANTA.CELLS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            color1: 0x870cf,
            color2: 0xf5f5f5,
            size: 2.00,
            speed: 0.80
          });
        }
      };
      document.head.appendChild(vantaScript);
    };
    document.head.appendChild(threeScript);

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default VantaBackground;
