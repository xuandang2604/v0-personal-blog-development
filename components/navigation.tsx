"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2 } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {/* Spacer div to prevent content jump when navbar becomes fixed */}
      <div className="h-16"></div>

      <nav className="fixed top-0 left-0 right-0 w-full border-b border-border bg-card/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-lg"
            >
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
                Trang Chủ
              </Link>
              <Link
                href="/expertise"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/expertise"
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                Chuyên Môn
              </Link>
              <Link
                href="/blog"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname.startsWith("/blog")
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                Bài Viết
              </Link>
              <Link
                href="/activities"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/activities"
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                Hoạt Động
              </Link>
              <Link
                href="/contact"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/contact"
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                Liên Hệ Với Tôi <span className="text-red-500">&lt;3</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
