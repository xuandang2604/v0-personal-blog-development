"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Facebook, Instagram, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitStatus("success")

    setTimeout(() => {
      setSubmitStatus("idle")
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const generateCodeText = (): string => {
    return `// Class đại diện cho thông điệp liên hệ
class DeveloperContact {
  constructor() {
    this.name = "${formData.name || "Tên của bạn"}"
    this.email = "${formData.email || "email@example.com"}"
    this.message = "${formData.message || "Viết lời nhắn..."}"
  }
  
  async sendRequest() {
    if (!this.name || !this.email || !this.message) {
      console.error("Error: Tất cả các trường là bắt buộc.")
      return false
    }
    
    console.log(\`[START] Gửi yêu cầu từ: \${this.name}\`)
    console.log("Status: Request đang được xử lý...")
    
    return true
  }
}

const form = new DeveloperContact()
// form.sendRequest()`
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-background">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Contact With Me
            </span>
            <span className="text-red-500 ml-2 animate-pulse">&lt;3</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Hãy liên hệ với tôi để thảo luận về dự án, cơ hội hợp tác, hoặc chỉ đơn giản là trò chuyện về công nghệ!
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <Card className="p-8 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Tên của bạn
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="Nguyễn Văn A"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Lời nhắn
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                      placeholder="Viết lời nhắn của bạn tại đây..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 text-lg font-semibold hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
                    <Send className="w-5 h-5" />
                  </Button>

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600 text-center">
                      Tin nhắn đã được gửi thành công!
                    </div>
                  )}
                </form>

                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="font-semibold mb-4">Hoặc liên hệ qua:</h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:nguyenlexuandang2004@gmail.com"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span>nguyenlexuandang2004@gmail.com</span>
                    </a>
                    <div className="flex gap-3 pt-2">
                      {[
                        { icon: Github, href: "https://github.com" },
                        { icon: Linkedin, href: "https://linkedin.com" },
                        { icon: Facebook, href: "https://facebook.com" },
                        { icon: Instagram, href: "https://instagram.com" },
                      ].map((social, i) => (
                        <a
                          key={i}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110"
                        >
                          <social.icon className="w-5 h-5 text-primary" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="order-1 lg:order-2 min-h-[500px] lg:min-h-[700px]">
              <Card className="w-full h-full overflow-hidden shadow-2xl bg-slate-900 flex items-start justify-start p-4 md:p-8 relative">
                <div
                  className="absolute top-10 right-10 w-20 h-20 bg-primary/20 rounded-lg animate-float"
                  style={{ animationDelay: "0s" }}
                />
                <div
                  className="absolute bottom-20 left-10 w-16 h-16 bg-accent/20 rounded-lg animate-float"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute top-1/2 right-1/4 w-12 h-12 bg-primary/10 rounded-full animate-float"
                  style={{ animationDelay: "0.5s" }}
                />

                <pre className="text-xs md:text-sm text-green-400 font-mono overflow-auto w-full h-full whitespace-pre-wrap relative z-10">
                  {generateCodeText()}
                </pre>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-10 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Sẵn sàng hợp tác
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Tôi luôn mở lòng với các cơ hội mới, dự án thú vị, và kết nối với những người cùng đam mê công nghệ. Đừng
            ngần ngại liên hệ với tôi!
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="mailto:nguyenlexuandang2004@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-bold hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105"
            >
              Email Me
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-primary text-foreground rounded-lg font-bold hover:bg-primary/10 transition-all hover:scale-105"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
