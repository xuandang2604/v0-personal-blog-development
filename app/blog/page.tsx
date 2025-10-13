"use client"
import { blogPosts } from "@/lib/blog-posts"
import { TrendingUp } from "lucide-react"
import { useState } from "react"

export default function BlogPage() {
  const [filter, setFilter] = useState<"all" | "Java" | "JavaScript">("all")

  const filteredPosts = filter === "all" ? blogPosts : blogPosts.filter((post) => post.category === filter)

  return (
    <main className="min-h-screen bg-background">
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/40 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/40 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">100M+ Views Target</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Technical Blog
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Khám phá các bài viết chuyên sâu về <span className="text-primary font-semibold">lập trình mạng</span> với
            Java, TypeScript và Node.js
          </p>
        </div>
      </section>

      {/* ... existing filter section ... */}

      {/* ... existing blog posts grid ... */}

      {/* ... existing explore expertise section ... */}
    </main>
  )
}
