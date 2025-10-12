import { Card } from "@/components/ui/card"
import { blogPosts } from "@/lib/blog-posts"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Khám phá các bài viết về lập trình mạng với Java và JavaScript. Từ những kiến thức cơ bản đến các kỹ thuật
            nâng cao.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="p-6 h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      post.category === "Java" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                    }`}
                  >
                    {post.category}
                  </span>
                </div>

                <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors text-balance">
                  {post.title}
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString("vi-VN")}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
