"use client";

import type React from "react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Facebook,
  Instagram,
  Send,
} from "lucide-react";
import { useState, useEffect, useRef, useMemo } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // fake code + reveal state for "hackertyper" behavior
  const [reveal, setReveal] = useState(0);
  const preRef = useRef<HTMLPreElement | null>(null);

  // generate a long fake code block (header uses current form values)
  const fakeCode = useMemo(() => {
    const header = `// Class đại diện cho thông điệp liên hệ
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
    return true
  }
}

const form = new DeveloperContact()
// form.sendRequest()
`;

    const filler = `// helper
function hashPayload(payload){let r=5381;for(let i=0;i<payload.length;i++){r=(r*33)^payload.charCodeAt(i)}return (r>>>0).toString(16)}

function sleep(ms){return new Promise(r=>setTimeout(r,ms))}

async function transmit(packet){for(let i=0;i<3;i++){console.log("Attempt",i+1,"->",packet.id);await sleep(8)}return {ok:true,id:packet.id}}

console.log("runtime:",Date.now())`;

    // repeat filler to make the block long enough
    return header + "\n\n" + Array(40).fill(filler).join("\n\n");
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus("success");
    setReveal(0);
    setTimeout(() => {
      setSubmitStatus("idle");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // reveal characters when user types inside inputs/textareas
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const active = document.activeElement?.tagName;
      if (!active || !["INPUT", "TEXTAREA"].includes(active)) return;
      // roughly emulate hackertyper: reveal a random chunk per keystroke
      const delta =
        e.key === "Backspace"
          ? Math.max(1, Math.floor(Math.random() * 3))
          : Math.floor(Math.random() * 8) + 3;
      setReveal((prev) => Math.min(fakeCode.length, Math.max(0, prev + delta)));
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [fakeCode]);

  // auto-scroll revealed pre to bottom
  useEffect(() => {
    if (preRef.current) preRef.current.scrollTop = preRef.current.scrollHeight;
  }, [reveal]);

  // close modal on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
            Hãy liên hệ với tôi để thảo luận về dự án, cơ hội hợp tác, hoặc chỉ
            đơn giản là trò chuyện về công nghệ!
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
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
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
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
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
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
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
              <Card
                onClick={() => setIsModalOpen(true)}
                className="w-full h-full overflow-hidden shadow-2xl bg-slate-900 flex items-start justify-start p-4 md:p-8 relative cursor-pointer"
              >
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

                {/* code panel: initially empty, reveals when user types in the form */}
                <pre
                  ref={preRef as any}
                  className="text-xs md:text-sm text-green-400 font-mono overflow-auto w-full h-full whitespace-pre-wrap relative z-10 select-text p-4"
                  aria-hidden={false}
                >
                  {fakeCode.slice(0, reveal)}
                  <span className="inline-block animate-pulse">|</span>
                </pre>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-6"
          onClick={() => setIsModalOpen(false)}
          aria-modal="true"
        >
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl max-h-[85vh] bg-[#07121a] rounded-xl shadow-2xl overflow-hidden border border-slate-800"
            role="dialog"
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <div className="text-sm text-slate-400">Code Preview</div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-300 hover:text-white px-3 py-1 rounded hover:bg-slate-800"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="p-4 overflow-auto">
              <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">
                {fakeCode.slice(0, reveal)}
              </pre>
            </div>
          </div>
        </div>
      )}

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
            Tôi luôn mở lòng với các cơ hội mới, dự án thú vị, và kết nối với
            những người cùng đam mê công nghệ. Đừng ngần ngại liên hệ với tôi!
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="mailto:nguyenlexuandang2004@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-bold hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105"
            >
              Email Me
            </a>
            <a
              href="https://github.com/xuandang2604"
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
  );
}
