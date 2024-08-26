import { useState, useRef, useEffect } from "react";

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  disabled?: boolean;
}

const Magnet = ({ children, padding = 100, disabled = false }: MagnetProps) => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0 });
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (magnetRef.current) {
        const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const distX = Math.abs(centerX - e.clientX);
        const distY = Math.abs(centerY - e.clientY);

        if (distX < width / 2 + padding && distY < height / 2 + padding) {
          setIsActive(true);
          const offsetX = (e.clientX - centerX) / 2;
          const offsetY = (e.clientY - centerY) / 2;
          setPosition({ x: offsetX, y: offsetY });
        } else {
          setIsActive(false);
          setPosition({ x: 0, y: 0 });
        }
      }
    };

    const handleMouseMoveRaf = (e: MouseEvent) => {
      requestAnimationFrame(() => handleMouseMove(e));
    };

    window.addEventListener("mousemove", handleMouseMoveRaf);

    return () => {
      window.removeEventListener("mousemove", handleMouseMoveRaf);
    };
  }, [padding, disabled]);

  return (
    <div ref={magnetRef} style={{ position: "relative", display: "inline-block" }}>
      <div
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: isActive ? "transform 0.1s ease-out" : "transform 0.1s ease-in-out",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
