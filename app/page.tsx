"use client"

import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function HomePage() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!gridRef.current) return

      const rect = gridRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementTop = rect.top
      const elementHeight = rect.height

      // Calculate scroll progress when element is in view
      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)))
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const languages = [
    { name: "Python", icon: "/icons/python.jpg", color: "from-blue-500 to-yellow-500" },
    { name: "C#", icon: "/icons/csharp.jpg", color: "from-purple-600 to-purple-400" },
    { name: "Java", icon: "/icons/java.jpg", color: "from-red-600 to-blue-600" },
    { name: "JavaScript", icon: "/icons/javascript.png", color: "from-yellow-400 to-yellow-300" },
    { name: "TypeScript", icon: "/icons/typescript.jpg", color: "from-blue-600 to-blue-400", featured: true },
    { name: "React", icon: "/icons/react.jpg", color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", icon: "/icons/nodejs.jpg", color: "from-green-600 to-green-400" },
    { name: "Go", icon: "/icons/go.jpg", color: "from-cyan-500 to-blue-400" },
    { name: "Rust", icon: "/icons/rust.jpg", color: "from-orange-600 to-orange-400" },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Author Info */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated tech background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in-up">
            {/* Profile Image */}
            <div className="mb-8 inline-block">
              <div className="relative w-32 h-32 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-50 animate-pulse" />
                <div className="relative w-full h-full bg-gradient-to-br from-primary to-accent rounded-full p-1">
                  <div className="w-full h-full bg-background rounded-full flex items-center justify-center text-5xl font-bold text-primary">
                    NĐ
                  </div>
                </div>
              </div>
            </div>

            {/* Name and Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Nguyễn Lê Xuân Đăng
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-3">Network Programming Developer</p>

            <p className="text-lg text-muted-foreground/80 mb-8">Sinh viên năm cuối | HUTECH University</p>

            {/* Social Links */}
            <div className="flex gap-4 justify-center mb-12">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110"
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
            </div>

            {/* Bio */}
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-balance">
              Đam mê với lập trình mạng và công nghệ. Chuyên về Java & JavaScript network programming, luôn tìm tòi học
              hỏi các công nghệ mới và chia sẻ kiến thức qua blog cá nhân.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
              >
                Xem bài viết
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#tech-stack"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary/50 text-foreground rounded-lg font-semibold text-lg hover:bg-primary/10 transition-all hover:scale-105"
              >
                Tech Stack
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Tech Stack Grid with Zoom Effect */}
      <section
        id="tech-stack"
        className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Các công nghệ và ngôn ngữ lập trình tôi sử dụng
            </p>
          </div>

          <div ref={gridRef} className="relative min-h-[800px] flex items-center justify-center">
            <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto perspective-1000">
              {languages.map((lang, index) => {
                const isFeatured = lang.featured
                const scale = isFeatured ? 1 + scrollProgress * 0.5 : 1 - scrollProgress * 0.3
                const opacity = isFeatured ? 1 : 1 - scrollProgress * 0.6
                const zIndex = isFeatured ? 50 : 10 - Math.abs(index - 4)

                return (
                  <div
                    key={lang.name}
                    className="relative group"
                    style={{
                      transform: `scale(${scale}) ${isFeatured ? `translateZ(${scrollProgress * 50}px)` : ""}`,
                      opacity: opacity,
                      zIndex: zIndex,
                      transition: "all 0.3s ease-out",
                    }}
                  >
                    <Card
                      className={`relative overflow-hidden aspect-square flex flex-col items-center justify-center p-6 hover:shadow-2xl transition-all duration-300 ${
                        isFeatured ? "border-2 border-primary shadow-xl shadow-primary/20" : ""
                      }`}
                    >
                      {/* Gradient overlay on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${lang.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      {/* Icon */}
                      <div className="relative mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={lang.icon || "/placeholder.svg"}
                          alt={lang.name}
                          className="w-16 h-16 md:w-20 md:h-20 object-contain"
                        />
                      </div>

                      {/* Name */}
                      <h3 className={`font-bold text-center ${isFeatured ? "text-xl text-primary" : "text-lg"}`}>
                        {lang.name}
                      </h3>

                      {/* Featured badge */}
                      {isFeatured && (
                        <div className="absolute top-2 right-2 px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                          Focus
                        </div>
                      )}
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Tech decorations */}
        <div className="absolute top-20 left-10 opacity-10">
          <div className="text-9xl font-mono text-primary">&lt;/&gt;</div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <div className="text-9xl font-mono text-accent">{}</div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Chuyên môn</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Kiến thức chuyên sâu về lập trình mạng</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Java Card */}
            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <img src="/icons/java.jpg" alt="Java" className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-primary">Java Network Programming</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Socket Programming, TCP/UDP Protocols, Multithreading, Java NIO, và các kỹ thuật lập trình mạng nâng
                  cao
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Socket API</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TCP/UDP</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Multithreading</span>
                </div>
              </div>
            </Card>

            {/* JavaScript Card */}
            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <img src="/icons/javascript.png" alt="JavaScript" className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-accent">JavaScript & Node.js</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  WebSocket, Real-time Communication, REST APIs, Socket.IO, và xây dựng ứng dụng mạng hiện đại
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">WebSocket</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Socket.IO</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Khám phá kiến thức lập trình mạng</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
            9+ bài viết chi tiết về Java và JavaScript network programming
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
          >
            Đọc bài viết
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </main>
  )
}
