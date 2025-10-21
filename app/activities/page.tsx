"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy, Star, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function ActivitiesPage() {
  const activities = [
    {
      title: "Bóng Đá",
      period: "2022 - Nay",
      color: "from-green-500 via-emerald-400 to-lime-500",
      description:
        "Sân cỏ là nơi tôi bùng nổ năng lượng, học cách kết nối và dẫn dắt đồng đội. Mỗi trận đấu là một hành trình chinh phục.",
      achievements: ["Vô địch khoa 2023", "Cầu thủ xuất sắc tháng 10/2023"],
      image: "/activities/act1.png",
    },
    {
      title: "Tình Nguyện",
      period: "2023 - Nay",
      color: "from-rose-500 via-pink-500 to-fuchsia-500",
      description:
        "Tôi yêu việc lan tỏa năng lượng tích cực qua các hoạt động thiện nguyện — mỗi lần giúp đỡ ai đó là một lần mình trưởng thành hơn.",
      achievements: [
        "Tình nguyện viên tiêu biểu 2023",
        "Tham gia 15+ dự án cộng đồng",
      ],
      image: "/activities/act2.png",
    },
    {
      title: "Lập trình",
      period: "2022 - Nay",
      color: "from-sky-500 via-blue-500 to-cyan-400",
      description:
        "Công nghệ giúp tôi thể hiện tư duy sáng tạo. Tôi thích khám phá, dẫn dắt và truyền cảm hứng qua từng dòng code.",
      achievements: [
        "Đội trưởng dự án Open Source",
        "Mentor kỹ thuật năm nhất",
      ],
      image: "/activities/act3.png",
    },
    {
      title: "Chạy bộ",
      period: "2023 - Nay",
      color: "from-amber-500 via-orange-500 to-red-500",
      description:
        "Chạy giúp tôi duy trì kỷ luật, năng lượng và tinh thần thép. Mỗi bước chạy là một lần vượt qua chính mình.",
      achievements: ["Half Marathon 2024", "Tập luyện 5 buổi/tuần"],
      image: "/activities/act4.png",
    },
  ];

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* === BACKGROUND LAYER === */}
      <div className="absolute inset-0 z-0">
        <div className="network-animation opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/10 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_20%,theme(colors.primary/15),transparent_70%)]" />
      </div>

      {/* === HERO === */}
      <section className="relative z-10 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient"
        >
          Tôi Là Người Hành Động
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          Đam mê – Nhiệt huyết – Sáng tạo – Tinh thần không giới hạn.
        </motion.p>
      </section>

      {/* === TIMELINE SECTION === */}
      <section className="relative z-10 py-32 overflow-hidden">
        <div className="absolute left-1/2 top-0 w-[4px] h-full bg-gradient-to-b from-accent/60 via-primary/70 to-transparent blur-sm hidden lg:block animate-pulse" />

        <div className="max-w-6xl mx-auto space-y-44 px-6 sm:px-8">
          {activities.map((act, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "relative grid lg:grid-cols-2 gap-16 items-center group",
                i % 2 === 1 && "lg:flex-row-reverse"
              )}
            >
              {/* === IMAGE 3D + LIGHT === */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: i % 2 ? -5 : 5 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative perspective-1000"
              >
                <Card className="overflow-hidden rounded-3xl shadow-2xl border border-border/20 bg-card relative">
                  {/* moving light reflection */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-50"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                  />
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-[420px] object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${act.color} opacity-20 group-hover:opacity-40 transition-opacity`}
                  />
                  <div className="absolute bottom-4 left-4 bg-background/70 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-medium border border-border/40">
                    {act.period}
                  </div>
                </Card>
              </motion.div>

              {/* === TEXT SIDE === */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2
                  className={`text-4xl md:text-5xl font-extrabold bg-gradient-to-r ${act.color} bg-clip-text text-transparent`}
                >
                  {act.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-primary/50 pl-4 italic tracking-wide hover:text-foreground transition-colors">
                  {act.description}
                </p>

                <div className="pt-3">
                  <h3 className="text-primary font-semibold text-base flex items-center gap-2 mb-2">
                    <Trophy className="w-4 h-4" /> Thành tích nổi bật
                  </h3>
                  <ul className="space-y-1">
                    {act.achievements.map((a, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Star className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === CTA SECTION === */}
      <section className="relative z-10 py-32 bg-gradient-to-tr from-primary/10 via-accent/10 to-background text-center overflow-hidden">
        <div className="absolute inset-0 network-animation opacity-40" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 relative z-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary via-accent to-fuchsia-500 bg-clip-text text-transparent animate-gradient">
            “Cân Bằng Là Sức Mạnh.”
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            Đam Mê - Hành Động - Cống Hiến
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-bold text-lg hover:shadow-[0_0_30px_var(--accent)] hover:scale-110 transition-all"
          >
            Liên hệ với tôi
            <ArrowRight className="w-6 h-6" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
