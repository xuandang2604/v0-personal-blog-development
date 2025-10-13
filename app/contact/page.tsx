"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Facebook, Instagram } from "lucide-react"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [displayText, setDisplayText] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitStatus("success")

    setTimeout(() => {
      setSubmitStatus("idle")
      setFormData({ name: "", email: "", message: "" })
      setDisplayText("")
    }, 3000)
  }

  const generateCodeText = (currentFormData: typeof formData, fieldName: string, fieldValue: string): string => {
    const currentName = fieldName === "name" ? fieldValue : currentFormData.name
    const currentEmail = fieldName === "email" ? fieldValue : currentFormData.email
    const currentMessage = fieldName === "message" ? fieldValue : currentFormData.message

    return `
// Class đại diện cho thông điệp liên hệ
class DeveloperContact {
  constructor() {
    // Khai báo các thuộc tính (input fields)
    this.name = "${currentName || "Tên của bạn"}"
    this.email = "${currentEmail || "email@example.com"}"
    this.message = "${currentMessage || "Viết lời nhắn của bạn tại đây..."}"
  }
  
  // Hàm gửi yêu cầu (giả lập)
  async sendRequest() {
    if (!this.name || !this.email || !this.message) {
      console.error("Error: Tất cả các trường là bắt buộc.")
      return false
    }
    
    console.log(\`[START] Gửi yêu cầu từ: \${this.name}\`)
    // (await fetch('/api/contact', { method: 'POST', body: JSON.stringify(this) }))
    console.log("Status: Request đang được xử lý...")
    
    return true
  }
}
// Khởi tạo và gọi hàm
const form = new DeveloperContact()
// form.sendRequest()
`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    const updatedFormData = {
      ...formData,
      [name]: value,
    }
    setFormData(updatedFormData)

    setDisplayText(generateCodeText(updatedFormData, name, value))
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Contact With Me
            </span>
            <span className="text-red-500 ml-2">&lt;3</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
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
                    className="w-full py-6 text-lg font-semibold hover:scale-105 transition-all"
                  >
                    {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
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
                {/* Animated floating elements */}
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
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={displayText}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {displayText || generateCodeText(formData, "", "")}
                    </motion.span>
                  </AnimatePresence>
                </pre>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Sẵn sàng hợp tác</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Tôi luôn mở lòng với các cơ hội mới, dự án thú vị, và kết nối với những người cùng đam mê công nghệ. Đừng
            ngần ngại liên hệ với tôi!
          </p>
        </div>
      </section>
    </main>
  )
}
