"use client";

import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function GlobalAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.18;

    const tryPlay = async () => {
      try {
        a.muted = false;
        await a.play();
        setIsPlaying(true);
        setIsMuted(false);
      } catch {
        try {
          a.muted = true;
          await a.play();
          setIsPlaying(true);
          setIsMuted(true);
        } catch {
          setIsPlaying(false);
          setIsMuted(true);
        }
      }
    };

    tryPlay();

    return () => {
      if (audioRef.current) audioRef.current.pause();
    };
  }, []);

  const toggleMute = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.muted) {
      a.muted = false;
      a.volume = 0.18;
      a.play().catch(() => {});
      setIsMuted(false);
      setIsPlaying(true);
    } else {
      a.muted = true;
      setIsMuted(true);
      // keep isPlaying true (audio continues but muted)
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/jazz.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMute}
        aria-label={
          isMuted ? "Unmute background audio" : "Mute background audio"
        }
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-primary/20 backdrop-blur-sm border-2 border-primary/30 flex items-center justify-center hover:bg-primary/30 transition-all hover:scale-105 shadow-xl"
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-primary" />
        ) : (
          <Volume2 className="w-6 h-6 text-primary animate-pulse" />
        )}
      </button>
    </>
  );
}
