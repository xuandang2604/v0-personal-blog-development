import { Code2, Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-gradient-to-b from-background via-primary/5 to-accent/10 backdrop-blur-md">
      {/* Light glow layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,theme(colors.primary/15),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,theme(colors.accent/10),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-lg mb-4"
            >
              <Code2 className="w-6 h-6 text-primary" />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">
                Nguyễn Lê Xuân Đăng
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Chia sẻ kiến thức, kinh nghiệm và góc nhìn công nghệ qua blog cá
              nhân.
            </p>

            <div className="flex gap-3">
              {[
                {
                  href: "https://github.com/xuandang2604",
                  icon: <Github className="w-5 h-5" />,
                  label: "GitHub",
                },
                {
                  href: "https://linkedin.com",
                  icon: <Linkedin className="w-5 h-5" />,
                  label: "LinkedIn",
                },
                {
                  href: "https://facebook.com/nguyenlexuandangdeptraitailang",
                  icon: <Facebook className="w-5 h-5" />,
                  label: "Facebook",
                },
                {
                  href: "https://www.instagram.com/caphedendakhongduongmoingay/",
                  icon: <Instagram className="w-5 h-5" />,
                  label: "Instagram",
                },
                {
                  href: "https://x.com",
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                  label: "X (Twitter)",
                },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110 hover:shadow-[0_0_10px_var(--primary)]"
                  aria-label={link.label}
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
                  <div className="relative text-primary">{link.icon}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground/90">
              Truy cập nhanh
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              {[
                { label: "Trang Chủ", href: "/" },
                { label: "Chuyên Môn", href: "/expertise" },
                { label: "Bài Viết", href: "/blog" },
                { label: "Liên Hệ Với Tôi", href: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground/90">
              Thông Tin Cá Nhân
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>nguyenlexuandang2004@gmail.com</li>
              <li>0987654321</li>
              <li>HUTECH University</li>
              <li>Ho Chi Minh City, Vietnam</li>
            </ul>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-border/50 my-6" />

        {/* Copyright */}
        <div className="text-center text-sm">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()}{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Nguyễn Lê Xuân Đăng
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
