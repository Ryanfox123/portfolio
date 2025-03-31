"use client"; // Ensure this runs only on the client-side
import { useEffect, useRef, useState } from "react";
import * as THREE from "three"; // Import THREE.js to pass to Vanta
import NET from "vanta/dist/vanta.net.min"; // Import the NET effect from Vanta

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x028090,
          backgroundColor: 0xf1f2f5,
          points: 16,
          maxDistance: 19,
          spacing: 16,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full"></div>
  );
}
