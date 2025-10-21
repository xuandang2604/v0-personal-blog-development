"use client";
import type React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-+=[]{}|;:,.<>?";

interface DecryptingTextProps {
  targetText: string;
  speed?: number;
  className?: string;
}

const DecryptingText: React.FC<DecryptingTextProps> = ({
  targetText,
  speed = 2,
  className = "",
}) => {
  const [currentText, setCurrentText] = useState<string>("");

  useEffect(() => {
    if (!targetText) {
      setCurrentText("");
      return;
    }

    let animationFrameId: number | null = null;
    let iteration = 0;
    let isMounted = true;
    const animationSpeed = Math.max(1, speed);

    const scramble = () => {
      if (!isMounted) return;

      const newText = targetText
        .split("")
        .map((char, index) => {
          if (iteration / animationSpeed > index) {
            return targetText[index];
          }
          if (char === " ") return " ";
          return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        })
        .join("");

      setCurrentText(newText);

      if (iteration < targetText.length * animationSpeed) {
        iteration += 1;
        animationFrameId = requestAnimationFrame(scramble);
      } else {
        setCurrentText(targetText);
      }
    };

    scramble();

    return () => {
      isMounted = false;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [targetText, speed]);

  return (
    <motion.span
      className={`inline ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      aria-live="polite"
    >
      {currentText}
    </motion.span>
  );
};

export const HeroDecryptingText: React.FC<{
  name?: string;
  role?: string;
  subtitle?: string;
}> = ({
  name = "Nguyễn Lê Xuân Đăng",
  role = "Lập Trình Viên Mạng",
  subtitle = "Sinh viên năm cuối | Đại học HUTECH",
}) => {
  const preParagraph = "Đam mê với lập trình mạng và công nghệ. Chuyên về ";
  const emphasized = "lập trình mạng Java & JavaScript";
  const postParagraph =
    ", luôn tìm tòi học hỏi các công nghệ mới và chia sẻ kiến thức qua blog cá nhân.";

  return (
    <div>
      <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-balance leading-tight">
        <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
          <DecryptingText
            targetText={name}
            speed={2}
            className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient"
          />
        </span>
      </h1>

      <p className="text-2xl font-semibold text-primary mb-2">
        <DecryptingText targetText={role} speed={2} className="text-primary" />
      </p>

      <p className="text-lg text-muted-foreground/90">
        <DecryptingText
          targetText={subtitle}
          speed={2}
          className="text-muted-foreground/90"
        />
      </p>

      <p className="text-lg text-foreground/80 leading-relaxed text-balance">
        <DecryptingText
          targetText={preParagraph}
          speed={2}
          className="text-foreground/80"
        />{" "}
        <DecryptingText
          targetText={emphasized}
          speed={2}
          className="text-primary font-semibold"
        />{" "}
        <DecryptingText
          targetText={postParagraph}
          speed={2}
          className="text-foreground/80"
        />
      </p>
    </div>
  );
};

export default DecryptingText;
