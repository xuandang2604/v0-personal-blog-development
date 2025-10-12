import { Card } from "@/components/ui/card"
import { blogPosts } from "@/lib/blog-posts"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Technical Blog
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Khám phá các bài viết về lập trình mạng với Java và JavaScript. Từ những kiến thức cơ bản đến các kỹ thuật
            nâng cao.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tags */}
          <div className="flex gap-3 mb-12 justify-center flex-wrap">
            <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              All Posts
            </button>
            <button className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors">
              Java
            </button>
            <button className="px-4 py-2 rounded-full bg-accent/10 text-accent font-medium hover:bg-accent/20 transition-colors">
              JavaScript
            </button>
          </div>

          {/* Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card
                  className="group relative overflow-hidden h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${
                      post.category === "Java"
                        ? "bg-gradient-to-br from-primary to-primary/50"
                        : "bg-gradient-to-br from-accent to-accent/50"
                    }`}
                  />

                  <div className="relative p-6 flex flex-col h-full">
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          post.category === "Java" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                        }`}
                      >
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-balance leading-tight">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3 flex-grow">{post.excerpt}</p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString("vi-VN")}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Read More Arrow */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to learn more?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Khám phá thêm về kỹ năng và kinh nghiệm của tôi trong lập trình mạng
          </p>
          <Link
            href="/expertise"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
          >
            View Expertise
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
