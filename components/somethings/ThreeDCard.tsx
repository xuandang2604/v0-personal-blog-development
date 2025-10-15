// ...existing code...
"use client";
import React, {
  useState,
  useRef,
  useCallback,
  ReactNode,
  CSSProperties,
} from "react";

interface ThreeDCardProps {
  children?: ReactNode;
  className?: string;
  maxRotation?: number;
  glowOpacity?: number;
  shadowBlur?: number;
  parallaxOffset?: number;
  transitionDuration?: string;
  backgroundImage?: string | null;
  enableGlow?: boolean;
  enableShadow?: boolean;
  enableParallax?: boolean;

  avatarSrc?: string;
  avatarAlt?: string;
  avatarMaxRotation?: number;
}

function ThreeDCard({
  children,
  className = "",
  maxRotation = 120, // slightly larger by default
  glowOpacity = 0.32,
  shadowBlur = 140, // stronger shadow blur
  parallaxOffset = 160, // stronger parallax
  transitionDuration = "0.36s",
  backgroundImage = null,
  enableGlow = true,
  enableShadow = true,
  enableParallax = true,
  avatarSrc,
  avatarAlt = "Avatar",
  avatarMaxRotation = 12,
}: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    glowX: 50,
    glowY: 50,
    shadowX: 0,
    shadowY: 22,
    isHovered: false,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const { width, height, left, top } = rect;

      const mouseX = e.clientX - left;
      const mouseY = e.clientY - top;

      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      const usedMaxRotation = avatarSrc ? avatarMaxRotation : maxRotation;

      const newRotateX = yPct * -1 * usedMaxRotation;
      const newRotateY = xPct * usedMaxRotation;

      setTransform((prev) => ({
        ...prev,
        rotateX: newRotateX,
        rotateY: newRotateY,
        glowX: (mouseX / width) * 100,
        glowY: (mouseY / height) * 100,
        shadowX: enableShadow ? newRotateY * 1.2 : 0,
        shadowY: enableShadow ? 24 - newRotateX * 0.7 : 22,
      }));
    },
    [maxRotation, avatarMaxRotation, enableShadow, avatarSrc]
  );

  const handleMouseEnter = useCallback(() => {
    setTransform((prev) => ({ ...prev, isHovered: true }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransform({
      rotateX: 0,
      rotateY: 0,
      glowX: 50,
      glowY: 50,
      shadowX: 0,
      shadowY: 22,
      isHovered: false,
    });
  }, []);

  const cardStyle: CSSProperties = {
    transform: `perspective(1400px) rotateX(${transform.rotateX}deg) rotateY(${
      transform.rotateY
    }deg) scale3d(${transform.isHovered ? 1.04 : 1}, ${
      transform.isHovered ? 1.04 : 1
    }, 1)`,
    boxShadow: enableShadow
      ? `${transform.shadowX}px ${transform.shadowY}px ${shadowBlur}px rgba(0, 0, 0, 0.45)`
      : "none",
    transition: `transform ${transitionDuration} cubic-bezier(0.23, 1, 0.32, 1), box-shadow ${transitionDuration} cubic-bezier(0.23, 1, 0.32, 1)`,
    transformStyle: "preserve-3d",
  };

  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: transform.isHovered ? 1 : 0,
        transition: `opacity 0.45s ease-in-out`,
      }
    : {};

  const glowStyle = enableGlow
    ? {
        background: `radial-gradient(circle at ${transform.glowX}% ${
          transform.glowY
        }%, rgba(34,197,94, ${glowOpacity}), rgba(3,105,122, ${
          glowOpacity * 0.6
        }), transparent 35%)`,
        filter: "blur(22px)",
        opacity: transform.isHovered ? 1 : 0.88,
        transition: "opacity 0.35s ease-in-out",
      }
    : {};

  const contentStyle: CSSProperties = enableParallax
    ? {
        transform: `translateZ(${parallaxOffset}px)`,
        transformStyle: "preserve-3d",
      }
    : {};

  if (avatarSrc) {
    return (
      <div style={{ perspective: "1400px" }} className={className}>
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={cardStyle}
          className="relative rounded-full overflow-visible"
          role="img"
          tabIndex={0}
          onFocus={handleMouseEnter}
          onBlur={handleMouseLeave}
        >
          {/* stronger soft background ring */}
          <div
            className="absolute -inset-1 rounded-full pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(3,105,122,0.28), rgba(16,185,129,0.2))",
              filter: "blur(22px)",
              opacity: transform.isHovered ? 1 : 0.95,
              transition: "opacity 0.25s ease",
            }}
            aria-hidden="true"
          />

          {/* ambient glow */}
          {enableGlow && (
            <div
              className="absolute inset-0 z-0 rounded-full pointer-events-none"
              style={glowStyle}
              aria-hidden="true"
            />
          )}

          {/* Avatar size classes (responsive) with an outer ring */}
          <div className="relative z-20 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden m-0">
            {/* outer gradient ring (visible) */}
            <div
              className="absolute inset-0 rounded-full p-1 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, rgba(3,105,122,0.95), rgba(16,185,129,0.9))",
                maskImage: "linear-gradient(black, black)", // keeps full ring
              }}
            />

            {/* inner circle with image, lifted for stronger parallax */}
            <div
              className="relative w-full h-full rounded-full bg-background overflow-hidden flex items-center justify-center"
              style={{
                transform: transform.isHovered
                  ? `translateZ(${parallaxOffset + 6}px)`
                  : "translateZ(20px)",
                transition: `transform ${transitionDuration} ease`,
              }}
            >
              <img
                src={avatarSrc}
                alt={avatarAlt}
                className="w-full h-full object-cover rounded-full"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ perspective: "1400px" }} className={className}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={cardStyle}
        className="relative bg-gray-800 rounded-2xl overflow-hidden"
        role="img"
        tabIndex={0}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
      >
        {backgroundImage && (
          <div
            className="absolute inset-0 rounded-2xl"
            style={backgroundStyle}
            aria-hidden="true"
          />
        )}

        <div
          className="absolute inset-0 border border-white/8 rounded-2xl pointer-events-none"
          aria-hidden="true"
        />

        {enableGlow && (
          <div
            className="absolute inset-0 z-0 rounded-2xl pointer-events-none"
            style={glowStyle}
            aria-hidden="true"
          />
        )}

        <div style={contentStyle} className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ThreeDCard;
// ...existing code...
