"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Code2 } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
            <Code2 className="w-6 h-6 text-primary" />
            <span>Nguyễn Lê Xuân Đăng</span>
          </Link>

          <div className="flex gap-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Trang chủ
            </Link>
            <Link
              href="/blog"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname.startsWith("/blog") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
