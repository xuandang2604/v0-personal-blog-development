"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

export default function GlobalAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    a.volume = 0.28

    const tryPlay = async () => {
      try {
        a.muted = false
        await a.play()
        setIsPlaying(true)
        setIsMuted(false)
      } catch {
        // If unmuted autoplay fails, try muted
        try {
          a.muted = true
          await a.play()
          setIsPlaying(true)
          setIsMuted(true)
        } catch {
          setIsPlaying(false)
          setIsMuted(true)
        }
      }
    }

    tryPlay()

    const enableAudioOnInteraction = async () => {
      if (!isPlaying && audioRef.current) {
        try {
          audioRef.current.muted = false
          await audioRef.current.play()
          setIsPlaying(true)
          setIsMuted(false)
          document.removeEventListener("click", enableAudioOnInteraction)
        } catch (e) {
          console.log("[v0] Audio autoplay still blocked")
        }
      }
    }

    document.addEventListener("click", enableAudioOnInteraction)

    return () => {
      if (audioRef.current) audioRef.current.pause()
      document.removeEventListener("click", enableAudioOnInteraction)
    }
  }, [isPlaying])

  const toggleMute = () => {
    const a = audioRef.current
    if (!a) return
    if (a.muted) {
      a.muted = false
      a.volume = 0.28
      a.play().catch(() => {})
      setIsMuted(false)
      setIsPlaying(true)
    } else {
      a.muted = true
      setIsMuted(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_RWrCzlAzFsBFMSBtl5BvopvV4o92/5XGb5SWxxQRYaICeSvbzGM/public/audio/jazz.mp3"
          type="audio/mpeg"
        />
      </audio>

      <button
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute background audio" : "Mute background audio"}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-primary/20 backdrop-blur-sm border-2 border-primary/30 flex items-center justify-center hover:bg-primary/30 transition-all hover:scale-105 shadow-xl"
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-primary" />
        ) : (
          <Volume2 className="w-6 h-6 text-primary animate-pulse" />
        )}
      </button>
    </>
  )
}
