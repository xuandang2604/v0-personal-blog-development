"use client"

import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, Facebook, Instagram, Volume2, VolumeX } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function AboutPage() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const techStackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        setIsPlaying(false)
      })
      setIsPlaying(true)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (techStackRef.current) {
        const rect = techStackRef.current.getBoundingClientRect()
        const sectionHeight = techStackRef.current.offsetHeight
        const viewportHeight = window.innerHeight

        const scrolled = -rect.top
        const progress = Math.max(0, Math.min(1, scrolled / (sectionHeight - viewportHeight)))
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
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

  const techStack = [
    { name: "Java", icon: "/icons/java.jpg" },
    { name: "JavaScript", icon: "/icons/javascript.png" },
    { name: "Python", icon: "/icons/python.jpg" },
    { name: "C#", icon: "/icons/csharp.jpg" },
    { name: "TypeScript", icon: "/icons/typescript.jpg", featured: true },
    { name: "React", icon: "/icons/react.jpg" },
    { name: "Node.js", icon: "/icons/nodejs.jpg" },
    { name: "Go", icon: "/icons/go.jpg" },
    { name: "Rust", icon: "/icons/rust.jpg" },
  ]

  const techLogos = [
    { name: "Google", icon: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" },
    {
      name: "Microsoft",
      icon: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
    },
    { name: "Meta", icon: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "Amazon", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Netflix", icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Apple", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Author Info */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />
        </div>

        <audio ref={audioRef} loop className="hidden">
          <source src="https://cdn.pixabay.com/audio/2022/03/10/audio_4a8f1b6e8e.mp3" type="audio/mpeg" />
        </audio>

        <button
          onClick={toggleMusic}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-primary/20 backdrop-blur-sm border-2 border-primary/30 flex items-center justify-center hover:bg-primary/30 transition-all hover:scale-110 group"
          aria-label="Toggle music"
        >
          {isPlaying ? (
            <Volume2 className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
          ) : (
            <VolumeX className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
          )}
        </button>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-10 gap-12 items-center">
            {/* Left: Author Info (4 columns) */}
            <div className="lg:col-span-4 space-y-8 animate-fade-in-up">
              <div className="inline-block">
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary rounded-full blur-2xl opacity-60 animate-pulse" />
                  <div className="relative w-full h-full bg-gradient-to-br from-primary via-accent to-primary rounded-full p-1 animate-gradient">
                    <div className="w-full h-full bg-background rounded-full flex items-center justify-center text-6xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                      NĐ
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-balance leading-tight">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                    Nguyễn Lê Xuân Đăng
                  </span>
                </h1>
                <p className="text-2xl font-semibold text-primary mb-2">Network Programming Developer</p>
                <p className="text-lg text-muted-foreground/90">Sinh viên năm cuối | HUTECH University</p>
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                Đam mê với lập trình mạng và công nghệ. Chuyên về{" "}
                <span className="text-primary font-semibold">Java & JavaScript network programming</span>, luôn tìm tòi
                học hỏi các công nghệ mới và chia sẻ kiến thức qua blog cá nhân.
              </p>

              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
                  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                  </a>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/expertise"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-bold hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105"
                >
                  View Expertise
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary/50 text-foreground rounded-lg font-bold hover:bg-primary/10 transition-all hover:scale-105"
                >
                  Read Blog
                </Link>
              </div>
            </div>

            {/* Right: Video Background (6 columns) */}
            <div className="lg:col-span-6 relative h-[500px] lg:h-[600px]">
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src="https://cdn.pixabay.com/video/2022/12/13/143195-780755158_large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="text-4xl font-mono font-bold text-primary animate-pulse">{"<Code />"}</div>
                    <p className="text-xl text-foreground/90 font-semibold">Building the Future</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      <section ref={techStackRef} className="relative min-h-[300vh] bg-background">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

          <div className="relative w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-3 gap-6 md:gap-8 perspective-1000">
              {techStack.map((tech, index) => {
                const isFeatured = tech.featured
                const initialScale = 0.6
                const zoomFactor = 3

                const scale = isFeatured ? initialScale + scrollProgress * zoomFactor : initialScale
                const opacity = isFeatured ? 1 : 1 - scrollProgress * 2.5
                const zIndex = isFeatured ? 50 : 10 - index

                return (
                  <div
                    key={tech.name}
                    className="relative"
                    style={{
                      transform: `scale(${scale}) translateZ(${isFeatured ? scrollProgress * 100 : -scrollProgress * 50}px)`,
                      opacity: opacity,
                      zIndex: zIndex,
                      transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
                    }}
                  >
                    <Card
                      className={`group relative overflow-hidden aspect-square flex flex-col items-center justify-center p-6 ${isFeatured ? "shadow-2xl shadow-primary/50" : "hover:shadow-xl"} transition-all duration-300`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${isFeatured ? "from-primary/20 to-accent/20" : "from-primary/5 to-accent/5"} opacity-0 group-hover:opacity-100 transition-opacity`}
                      />
                      <img
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        className="w-16 h-16 md:w-20 md:h-20 object-contain mb-3 transform group-hover:scale-110 transition-transform"
                      />
                      <h3 className={`font-bold text-center ${isFeatured ? "text-primary text-lg" : "text-sm"}`}>
                        {tech.name}
                      </h3>
                      {isFeatured && scrollProgress > 0.5 && (
                        <p className="text-xs text-center text-muted-foreground mt-2 animate-fade-in-up">Featured</p>
                      )}
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Work Skills Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Kỹ năng làm việc
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Những kỹ năng mềm giúp tôi làm việc hiệu quả
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Tinh thần học hỏi",
                desc: "Luôn sẵn sàng tiếp thu kiến thức mới và nâng cao kỹ năng lập trình qua dự án thực tế.",
                icon: "📚",
                color: "from-yellow-500/20 to-orange-500/20",
              },
              {
                title: "Giao tiếp & làm việc nhóm",
                desc: "Trao đổi rõ ràng, tích cực hợp tác trong các dự án nhóm để hoàn thành mục tiêu chung hiệu quả.",
                icon: "💬",
                color: "from-cyan-500/20 to-blue-500/20",
              },
              {
                title: "Trách nhiệm & đúng tiến độ",
                desc: "Luôn cố gắng hoàn thành công việc đúng thời hạn và đảm bảo chất lượng trong từng nhiệm vụ được giao.",
                icon: "⏰",
                color: "from-purple-500/20 to-pink-500/20",
              },
            ].map((skill, i) => (
              <Card
                key={i}
                className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
                <div className="relative p-6 text-center">
                  <div className="text-5xl mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{skill.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Logos Scrolling Section */}
      <section className="py-8 bg-background overflow-hidden">
        <div className="relative">
          <div className="flex animate-scroll-left gap-12 items-center">
            {[...techLogos, ...techLogos, ...techLogos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100"
              >
                <img src={logo.icon || "/placeholder.svg"} alt={logo.name} className="h-8 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Professional Work Experience
            </h2>
            <p className="text-lg text-muted-foreground">Hành trình học tập và phát triển của tôi</p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

            <div className="space-y-12">
              {[
                {
                  title: "Thực tập sinh Frontend",
                  company: "Hostinger",
                  period: "06/2024 - 09/2024",
                  icon: "H",
                  color: "from-purple-500 to-pink-500",
                  responsibilities: [
                    "Học và áp dụng ReactJS vào xây dựng giao diện web.",
                    "Thực hành làm việc nhóm với Git và quản lý task qua Trello.",
                    "Tối ưu trải nghiệm người dùng dựa trên phản hồi từ mentor.",
                  ],
                },
                {
                  title: "Dự án học phần Web nâng cao",
                  company: "HUTECH University",
                  period: "09/2024 - 12/2024",
                  icon: "G",
                  color: "from-cyan-500 to-blue-500",
                  responsibilities: [
                    "Xây dựng ứng dụng web full-stack với Node.js và MongoDB.",
                    "Implement RESTful API và WebSocket cho real-time features.",
                    "Áp dụng best practices trong code organization và security.",
                  ],
                },
                {
                  title: "Dự án Network Programming",
                  company: "HUTECH University",
                  period: "03/2024 - 06/2024",
                  icon: "N",
                  color: "from-orange-500 to-red-500",
                  responsibilities: [
                    "Phát triển chat application với Java Socket Programming.",
                    "Implement multithreading để xử lý multiple clients.",
                    "Tìm hiểu và áp dụng các network protocols (TCP/UDP).",
                  ],
                },
              ].map((exp, i) => (
                <div key={i} className="relative pl-20">
                  <div
                    className={`absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                  >
                    {exp.icon}
                  </div>

                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-muted-foreground">{exp.company}</p>
                        </div>
                        <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>

                      <div className="space-y-2 mt-4">
                        <p className="text-sm font-semibold text-muted-foreground italic">Responsibilities</p>
                        {exp.responsibilities.map((resp, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <p className="text-muted-foreground">{resp}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
