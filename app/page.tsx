"use client"

import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function AboutPage() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    // Auto-play background music when component mounts
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        // Auto-play might be blocked by browser
        setIsPlaying(false)
      })
      setIsPlaying(true)
    }
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-20">
            <source src="https://cdn.pixabay.com/video/2022/12/13/143195-780755158_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>

        {/* Background Music */}
        <audio ref={audioRef} loop>
          <source src="https://cdn.pixabay.com/audio/2022/03/10/audio_4a8f1b6e8e.mp3" type="audio/mpeg" />
        </audio>

        {/* Music Control Button */}
        <button
          onClick={toggleMusic}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center hover:bg-primary/30 transition-all hover:scale-110"
          aria-label="Toggle music"
        >
          {isPlaying ? (
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-10 gap-12 items-center">
            {/* Left Side - Author Info (40%) */}
            <div className="lg:col-span-4 space-y-8 animate-fade-in-up">
              {/* Profile Image */}
              <div className="inline-block">
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-50 animate-pulse" />
                  <div className="relative w-full h-full bg-gradient-to-br from-primary to-accent rounded-full p-1">
                    <div className="w-full h-full bg-background rounded-full flex items-center justify-center text-6xl font-bold text-primary">
                      NĐ
                    </div>
                  </div>
                </div>
              </div>

              {/* Name and Title */}
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-balance">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Nguyễn Lê Xuân Đăng
                  </span>
                </h1>
                <p className="text-2xl text-muted-foreground mb-2">Network Programming Developer</p>
                <p className="text-lg text-muted-foreground/80">Sinh viên năm cuối | HUTECH University</p>
              </div>

              {/* Bio */}
              <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                Đam mê với lập trình mạng và công nghệ. Chuyên về Java & JavaScript network programming, luôn tìm tòi
                học hỏi các công nghệ mới và chia sẻ kiến thức qua blog cá nhân.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
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
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Facebook className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/expertise"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
                >
                  View Expertise
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary/50 text-foreground rounded-lg font-semibold hover:bg-primary/10 transition-all hover:scale-105"
                >
                  Read Blog
                </Link>
              </div>
            </div>

            {/* Right Side - Tech Showcase (60%) */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Floating tech cards */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: "Java", icon: "/icons/java.jpg", delay: "0s" },
                    { name: "JavaScript", icon: "/icons/javascript.png", delay: "0.2s" },
                    { name: "TypeScript", icon: "/icons/typescript.jpg", delay: "0.4s" },
                    { name: "Python", icon: "/icons/python.jpg", delay: "0.1s" },
                    { name: "React", icon: "/icons/react.jpg", delay: "0.3s" },
                    { name: "Node.js", icon: "/icons/nodejs.jpg", delay: "0.5s" },
                  ].map((tech, index) => (
                    <Card
                      key={tech.name}
                      className="group relative overflow-hidden aspect-square flex flex-col items-center justify-center p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-float"
                      style={{ animationDelay: tech.delay }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <img
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        className="w-16 h-16 object-contain mb-3 transform group-hover:scale-110 transition-transform"
                      />
                      <h3 className="font-bold text-sm text-center">{tech.name}</h3>
                    </Card>
                  ))}
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div
                  className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
              </div>
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

      <section className="py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Kỹ năng làm việc</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Những kỹ năng mềm giúp tôi làm việc hiệu quả
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Learning Spirit */}
            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8 text-center">
                <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Tinh thần học hỏi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Luôn sẵn sàng tiếp thu kiến thức mới và nâng cao kỹ năng lập trình qua dự án thực tế.
                </p>
              </div>
            </Card>

            {/* Communication & Teamwork */}
            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8 text-center">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Giao tiếp & làm việc nhóm</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Trao đổi rõ ràng, tích cực hợp tác trong các dự án nhóm để hoàn thành mục tiêu chung hiệu quả.
                </p>
              </div>
            </Card>

            {/* Responsibility & Punctuality */}
            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8 text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Trách nhiệm & đúng tiến độ</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Luôn cố gắng hoàn thành công việc đúng thời hạn và đảm bảo chất lượng trong từng nhiệm vụ được giao.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Personal Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Hành trình học tập và phát triển của tôi</p>
          </div>

          <div className="space-y-8">
            {/* Education */}
            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">HUTECH University</h3>
                        <p className="text-lg text-muted-foreground">Sinh viên năm cuối - Công nghệ thông tin</p>
                      </div>
                      <span className="text-sm text-muted-foreground">2021 - 2025</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Chuyên ngành Công nghệ phần mềm, tập trung vào lập trình mạng và phát triển ứng dụng web. GPA:
                      3.5/4.0
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        Network Programming
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Web Development</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Data Structures</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Projects */}
            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Academic Projects</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Chat Application với Socket Programming</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Xây dựng ứng dụng chat real-time sử dụng Java Socket API, hỗ trợ nhiều client đồng thời với
                          multithreading.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">REST API Server với Node.js</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Phát triển RESTful API server với Express.js, tích hợp MongoDB và JWT authentication.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">WebSocket Game Server</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Tạo game server real-time sử dụng WebSocket và Socket.IO, xử lý đồng bộ trạng thái game giữa
                          nhiều người chơi.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Certifications & Learning */}
            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Continuous Learning</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Tích cực tự học và cập nhật kiến thức mới qua các khóa học online, tài liệu kỹ thuật và thực hành
                      dự án cá nhân. Tham gia các cộng đồng lập trình để trao đổi kinh nghiệm và học hỏi từ những
                      developer khác.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                        Self-motivated learner
                      </span>
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Problem solver</span>
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Team player</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
