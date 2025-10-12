import { Card } from "@/components/ui/card"
import { Code2, Zap, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />

        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Programming-themed background image */}
        <div className="absolute inset-0 opacity-20">
          <img src="/abstract-code-programming-network-connections-dark.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Code The Network
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance">
              Khám phá thế giới lập trình mạng với Java & JavaScript
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
              >
                Khám phá bài viết
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary/50 text-foreground rounded-lg font-semibold text-lg hover:bg-primary/10 transition-all hover:scale-105"
              >
                Tìm hiểu thêm
              </a>
            </div>
          </div>
        </div>

        {/* Stats section at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 backdrop-blur-sm bg-card/50 rounded-xl p-8 border border-border/50">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">9+</div>
                <div className="text-sm text-muted-foreground">Bài viết chuyên sâu về Java & JavaScript</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">2</div>
                <div className="text-sm text-muted-foreground">Ngôn ngữ lập trình chính: Java & JavaScript</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Nội dung thực hành và ứng dụng thực tế</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Chuyên môn & Kỹ năng</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sinh viên năm cuối tại HUTECH University, đam mê lập trình mạng và công nghệ
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Java Card */}
            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <img src="/java-logo.png" alt="Java" className="w-12 h-12" />
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

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Code Examples</h4>
              <p className="text-sm text-muted-foreground">Ví dụ code thực tế và dễ hiểu</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Thực hành</h4>
              <p className="text-sm text-muted-foreground">Bài tập và dự án thực tế</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Cộng đồng</h4>
              <p className="text-sm text-muted-foreground">Chia sẻ kiến thức và kinh nghiệm</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Về tác giả</h2>
              <h3 className="text-2xl font-semibold text-primary mb-4">Nguyễn Lê Xuân Đăng</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Sinh viên năm cuối ngành Công nghệ Thông tin tại Đại học Công nghệ TP.HCM (HUTECH). Đam mê với lập trình
                mạng và luôn tìm tòi học hỏi các công nghệ mới.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Blog này là nơi tôi chia sẻ những kiến thức đã học được về lập trình mạng, từ những khái niệm cơ bản đến
                các ứng dụng thực tế với Java và JavaScript.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Đọc các bài viết của tôi
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <img
                src="/developer-coding-programming-workspace-modern-tech.jpg"
                alt="Developer workspace"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Sẵn sàng học lập trình mạng?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
            Khám phá 9+ bài viết chi tiết về Java và JavaScript network programming
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
          >
            Bắt đầu ngay
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </main>
  )
}
