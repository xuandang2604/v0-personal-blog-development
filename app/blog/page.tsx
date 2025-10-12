"use client"

import { Card } from "@/components/ui/card"
import { blogPosts } from "@/lib/blog-posts"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react"
import { useState } from "react"

export default function BlogPage() {
  const [filter, setFilter] = useState<"all" | "Java" | "JavaScript">("all")

  const filteredPosts = filter === "all" ? blogPosts : blogPosts.filter((post) => post.category === filter)

  return (
    <main className="min-h-screen bg-background">
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
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

      <section className="py-8 bg-secondary/30 sticky top-0 z-40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 justify-center flex-wrap">
            {[
              { label: "All Posts", value: "all" as const, count: blogPosts.length },
              { label: "Java", value: "Java" as const, count: blogPosts.filter((p) => p.category === "Java").length },
              {
                label: "JavaScript",
                value: "JavaScript" as const,
                count: blogPosts.filter((p) => p.category === "JavaScript").length,
              },
            ].map((btn) => (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                className={`px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 ${
                  filter === btn.value
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg"
                    : "bg-card text-foreground hover:bg-card/80"
                }`}
              >
                {btn.label} <span className="ml-1 text-sm opacity-75">({btn.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card
                  className="group relative overflow-hidden h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      post.category === "Java"
                        ? "bg-gradient-to-br from-orange-500/10 to-red-500/10"
                        : "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
                    }`}
                  />

                  <div className="relative p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                          post.category === "Java"
                            ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                            : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                        }`}
                      >
                        {post.category}
                      </span>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-balance leading-tight">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3 flex-grow">{post.excerpt}</p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString("vi-VN")}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Want to learn more?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Khám phá thêm về kỹ năng và kinh nghiệm của tôi trong lập trình mạng
          </p>
          <Link
            href="/expertise"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-bold hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105"
          >
            View Expertise
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
