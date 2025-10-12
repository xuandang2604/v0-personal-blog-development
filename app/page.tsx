import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4 text-balance">Nguyễn Lê Xuân Đăng</h1>
            <p className="text-xl text-muted-foreground mb-2">Sinh viên năm cuối - HUTECH University</p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Tôi là một sinh viên đam mê lập trình mạng, chuyên về Java và JavaScript. Blog này là nơi tôi chia sẻ
              những kiến thức và kinh nghiệm học tập về lập trình mạng, từ những khái niệm cơ bản đến các ứng dụng thực
              tế.
            </p>

            <div className="flex gap-4">
              <a
                href="mailto:dangnguyenlexuan@gmail.com"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <Card className="p-8 bg-secondary/50">
            <div className="flex items-start gap-4 mb-6">
              <GraduationCap className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Học vấn</h3>
                <p className="text-muted-foreground">Đại học Công nghệ TP.HCM (HUTECH)</p>
                <p className="text-sm text-muted-foreground">Ngành: Công nghệ Thông tin</p>
                <p className="text-sm text-muted-foreground">Năm cuối - Dự kiến tốt nghiệp 2025</p>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="font-semibold text-lg mb-3">Kỹ năng chính</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Java</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">JavaScript</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Socket Programming
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">Node.js</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Network Protocols
                </span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-secondary/30 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Về blog này</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3 text-primary">Lập trình mạng Java</h3>
              <p className="text-muted-foreground leading-relaxed">
                Khám phá Socket programming, TCP/UDP, và các giao thức mạng được triển khai bằng Java.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3 text-accent">JavaScript & Node.js</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tìm hiểu về lập trình mạng với JavaScript, WebSocket, và xây dựng ứng dụng real-time.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3 text-primary">Ứng dụng thực tế</h3>
              <p className="text-muted-foreground leading-relaxed">
                Các dự án và bài tập thực hành giúp củng cố kiến thức lập trình mạng.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Khám phá các bài viết</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Tìm hiểu về lập trình mạng qua các bài viết chi tiết về Java và JavaScript
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Xem tất cả bài viết
        </Link>
      </section>
    </main>
  )
}
