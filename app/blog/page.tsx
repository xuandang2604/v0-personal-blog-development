"use client"
import { Card } from "@/components/ui/card"
import { blogPosts } from "@/lib/blog-posts"
import { TrendingUp, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function BlogPage() {
  const [filter, setFilter] = useState<"all" | "Java" | "JavaScript">("all")

  const filteredPosts = filter === "all" ? blogPosts : blogPosts.filter((post) => post.category === filter)

  return (
    <main className="min-h-screen bg-background">
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/40 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/40 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 animate-fade-in-up">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">100M+ Views Target</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight animate-fade-in-up">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Technical Blog
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed animate-fade-in-up">
            Khám phá các bài viết chuyên sâu về <span className="text-primary font-semibold">lập trình mạng</span> với
            Java, TypeScript và Node.js
          </p>
        </div>
      </section>

      <section className="py-12 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["all", "Java", "JavaScript"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category as typeof filter)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  filter === category
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg scale-105"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                {category === "all" ? "Tất cả" : category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="group h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/20">{post.category === "Java" ? "☕" : "⚡"}</div>
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          post.category === "Java" ? "bg-orange-500 text-white" : "bg-yellow-500 text-black"
                        }`}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <span>{new Date(post.date).toLocaleDateString("vi-VN")}</span>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                      Đọc thêm
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Explore expertise section */}
      <section className="py-12 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">Khám phá kỹ năng chuyên môn</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{/* Placeholder for expertise cards */}</div>
        </div>
      </section>
    </main>
  )
}
