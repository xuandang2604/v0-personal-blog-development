"use client";

import { useEffect, useRef, useState } from "react";
import {
  Dock,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Volume2,
  VolumeX,
} from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { HeroDecryptingText } from "@/components/somethings/Decrypting";
import ThreeDCard from "@/components/somethings/ThreeDCard";
import DockApp from "@/components/somethings/DocApp";

export default function AboutPage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [featuredIndex, setFeaturedIndex] = useState(7); // Random featured card on load
  const [isMuted, setIsMuted] = useState(true);
  const techStackRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   const randomIndex = Math.floor(Math.random() * 15);
  //   setFeaturedIndex(randomIndex);
  // }, []);

  useEffect(() => {
    const featureableTechs = [
      "TypeScript",
      "Java",
      "JavaScript",
      "C#",
      "Node.js",
    ];
    const featureableIndexes = techStack
      .map((tech, index) => {
        // Tìm index của các card có tên nằm trong danh sách featureableTechs
        if (featureableTechs.includes(tech.name)) {
          return index;
        }
        return null;
      })
      // Lọc bỏ các giá trị null
      .filter((index) => index !== null);

    if (featureableIndexes.length > 0) {
      // Chọn một chỉ mục ngẫu nhiên từ danh sách đã lọc
      const randomIndex = Math.floor(Math.random() * featureableIndexes.length);
      setFeaturedIndex(featureableIndexes[randomIndex]);
    }
  }, []);

  // useEffect(() => {
  //   // try to autoplay unmuted first; if blocked, fall back to muted autoplay
  //   const a = audioRef.current;
  //   if (!a) return;
  //   a.volume = 0.18;
  //   const tryPlay = async () => {
  //     try {
  //       a.muted = false;
  //       await a.play();
  //       setIsPlaying(true);
  //       setIsMuted(false);
  //     } catch {
  //       // unmuted autoplay blocked -> try muted autoplay
  //       try {
  //         a.muted = true;
  //         await a.play();
  //         setIsPlaying(true);
  //         setIsMuted(true);
  //       } catch {
  //         setIsPlaying(false);
  //         setIsMuted(true);
  //       }
  //     }
  //   };
  //   tryPlay();
  //   return () => {
  //     if (audioRef.current) audioRef.current.pause();
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (techStackRef.current) {
        const rect = techStackRef.current.getBoundingClientRect();
        const sectionHeight = techStackRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;

        const scrolled = -rect.top;
        const progress = Math.max(
          0,
          Math.min(1, scrolled / (sectionHeight - viewportHeight))
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const techStack = [
    { name: "Python", icon: "/icons/python.jpg" },
    { name: "React", icon: "/icons/react.jpg" },
    { name: "Go", icon: "/icons/go.jpg" },
    { name: "Rust", icon: "/icons/rust.jpg" },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    { name: "C#", icon: "/icons/csharp.jpg" },
    { name: "Java", icon: "/icons/java.jpg" },
    { name: "JavaScript", icon: "/icons/javascript.png" },
    { name: "TypeScript", icon: "/icons/typescript.jpg" },
    { name: "Node.js", icon: "/icons/nodejs.jpg" },
    {
      name: "Ruby",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
    },
    {
      name: "Swift",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    },
    {
      name: "Kotlin",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Dart",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    },
  ];

  const techLogos = [
    {
      name: "Google",
      icon: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
    },
    {
      name: "Microsoft",
      icon: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
    },
    {
      name: "Meta",
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    },
    {
      name: "Amazon",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      name: "Netflix",
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
    {
      name: "Apple",
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      name: "IBM",
      icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    },
    {
      name: "Oracle",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    },
  ];

  const centerRow = 1; // Middle row (0-indexed)
  const centerCol = 2; // Middle column (0-indexed)

  return (
    <main className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* video background (stronger visual) */}
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-60"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_RWrCzlAzFsBFMSBtl5BvopvV4o92/KDQsdJFuacVfXeNFqXYNoz/public/videos/it-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-transparent to-pink-50 opacity-90" />
          <div className="absolute -left-40 -top-20 w-[800px] h-[800px] rounded-full bg-primary/40 blur-3xl animate-pulse opacity-95" />
          <div className="absolute -right-40 bottom-0 w-[700px] h-[700px] rounded-full bg-accent/30 blur-3xl animate-pulse opacity-95" />
          <div
            className="network-animation absolute inset-0"
            style={{
              opacity: 1,
              mixBlendMode: "screen",
              filter: "saturate(1.3) contrast(1.05)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/20" />
        </div>

        {/* hero content (existing) */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-10 gap-12 items-center">
            <div className="lg:col-span-4 space-y-8 animate-fade-in-up">
              <ThreeDCard avatarSrc="/avatar.png" className="inline-block" />

              <HeroDecryptingText />
              <div className="flex gap-4">
                {/* social icons */}
                <DockApp />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/expertise"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-bold hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105"
                >
                  Xem Chuyên Môn
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary/50 text-foreground rounded-lg font-bold hover:bg-primary/10 transition-all hover:scale-105"
                >
                  Đọc Blog
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>
      <section
        ref={techStackRef}
        className="relative min-h-[300vh] bg-gradient-to-br from-background via-primary/5 to-accent/5"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

          <div className="relative w-full max-w-6xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Ngôn Ngữ Lập Trình
              </h2>
              <p className="text-muted-foreground mt-2">
                Các công nghệ tôi sử dụng
              </p>
            </div>

            <div className="grid grid-cols-5 gap-3 md:gap-4">
              {techStack.map((tech, index) => {
                const isFeatured = index === featuredIndex;
                const initialScale = 0.7;
                const zoomFactor = 4;

                const scale = isFeatured
                  ? initialScale + scrollProgress * zoomFactor
                  : initialScale - scrollProgress * 0.4;
                const opacity = isFeatured
                  ? 1
                  : Math.max(0, 1 - scrollProgress * 3);
                const zIndex = isFeatured
                  ? 50
                  : 10 - Math.abs(index - featuredIndex);

                let gridColumn = "";
                let gridRow = "";
                if (isFeatured && scrollProgress > 0.3) {
                  gridColumn = "3";
                  gridRow = "2";
                }

                return (
                  <div
                    key={tech.name}
                    className="relative flex items-center justify-center"
                    style={{
                      transform: `scale(${scale}) translateZ(${
                        isFeatured ? scrollProgress * 150 : -scrollProgress * 80
                      }px)`,
                      opacity: opacity,
                      zIndex: zIndex,
                      gridColumn: gridColumn,
                      gridRow: gridRow,
                      transition:
                        "transform 0.3s ease-out, opacity 0.3s ease-out",
                    }}
                  >
                    <Card
                      className={`group relative overflow-hidden aspect-square w-full flex flex-col items-center justify-center p-2 md:p-3 ${
                        isFeatured
                          ? "shadow-2xl shadow-primary/50 border-2 border-primary"
                          : "hover:shadow-xl"
                      } transition-all duration-300`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${
                          isFeatured
                            ? "from-primary/20 to-accent/20"
                            : "from-primary/5 to-accent/5"
                        } opacity-0 group-hover:opacity-100 transition-opacity`}
                      />
                      <img
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        className="w-8 h-8 md:w-12 md:h-12 object-contain mb-1 md:mb-2 transform group-hover:scale-110 transition-transform"
                      />
                      <h3
                        className={`font-bold text-center text-xs md:text-sm ${
                          isFeatured ? "text-primary" : ""
                        }`}
                      >
                        {tech.name}
                      </h3>
                      {isFeatured && scrollProgress > 0.6 && (
                        <div className="absolute top-1 right-1">
                          <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full font-bold animate-pulse">
                            Nổi bật
                          </span>
                        </div>
                      )}
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-secondary/30">
        <div className="max-w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Kỹ Năng Làm Việc
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Những kỹ năng mềm giúp tôi làm việc hiệu quả
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: "Tinh thần học hỏi",
                desc: "Luôn sẵn sàng tiếp thu kiến thức mới và nâng cao kỹ năng lập trình qua dự án thực tế.",
                icon: "📚",
                color: "from-yellow-500/20 to-orange-500/20",
              },
              {
                title: "Giao tiếp & làm việc nhóm",
                desc: "Trao đổi rõ ràng, tích cực hợp tác trong các dự án nhóm để hoàn thành mục tiêu chung hiệu quả.",
                icon: "💬",
                color: "from-cyan-500/20 to-blue-500/20",
              },
              {
                title: "Trách nhiệm & đúng tiến độ",
                desc: "Luôn cố gắng hoàn thành công việc đúng thời hạn và đảm bảo chất lượng trong từng nhiệm vụ được giao.",
                icon: "⏰",
                color: "from-purple-500/20 to-pink-500/20",
              },
            ].map((skill, i) => (
              <Card
                key={i}
                className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
                <div className="relative p-5 text-center">
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {skill.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <div className="relative">
        <section className="py-6 overflow-hidden">
          <div className="relative">
            {/* Tiêu đề được đặt lên trên cùng, căn giữa khung logo */}
            <h2
              className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl font-bold z-20 pointer-events-none
                   bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              aria-hidden="true"
            >
              Công Ty Mơ Ước
            </h2>

            {/* Wrapper với padding-top để đảm bảo logo không chồng trực tiếp lên chữ khi layout nhỏ */}
            <div className="relative pt-24">
              <div className="flex animate-scroll-left gap-12 items-center">
                {[...techLogos, ...techLogos, ...techLogos].map((logo, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100"
                  >
                    <img
                      src={logo.icon || "/placeholder.svg"}
                      alt={logo.name}
                      className="h-6 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Một layer mờ nhẹ phía dưới chữ (tùy chọn) để cải thiện độ tương phản */}
            {/* <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-28 bg-gradient-to-t from-background/80 to-transparent" />
            </div> */}
          </div>
        </section>
      </div>
      <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Kinh Nghiệm Làm Việc
            </h2>
            <p className="text-lg text-muted-foreground">
              Hành trình học tập và phát triển của tôi
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2 hidden md:block" />

            <div className="space-y-16">
              {[
                {
                  title: "Bắt đầu học lập trình",
                  company: "Đại học HUTECH",
                  period: "09/2022 - 12/2022",
                  icon: "🎓",
                  color: "from-blue-500 to-cyan-500",
                  side: "left",
                  responsibilities: [
                    "Học các ngôn ngữ lập trình cơ bản: C, C++, Java.",
                    "Làm quen với thuật toán và cấu trúc dữ liệu.",
                    "Tham gia các buổi workshop về lập trình.",
                  ],
                },
                {
                  title: "Dự án Web đầu tiên",
                  company: "Đại học HUTECH",
                  period: "03/2023 - 06/2023",
                  icon: "🌐",
                  color: "from-green-500 to-emerald-500",
                  side: "right",
                  responsibilities: [
                    "Xây dựng website quản lý thư viện với HTML, CSS, JavaScript.",
                    "Học cách làm việc với database MySQL.",
                    "Áp dụng responsive design cho mobile.",
                  ],
                },
                {
                  title: "Dự án Lập trình Mạng",
                  company: "Đại học HUTECH",
                  period: "09/2023 - 12/2023",
                  icon: "🔌",
                  color: "from-orange-500 to-red-500",
                  side: "left",
                  responsibilities: [
                    "Phát triển ứng dụng chat với Java Socket Programming.",
                    "Implement multithreading để xử lý nhiều client đồng thời.",
                    "Tìm hiểu và áp dụng các giao thức mạng (TCP/UDP).",
                  ],
                },
                {
                  title: "Thực tập sinh Frontend",
                  company: "Hostinger",
                  period: "06/2024 - 09/2024",
                  icon: "💼",
                  color: "from-purple-500 to-pink-500",
                  side: "right",
                  responsibilities: [
                    "Học và áp dụng ReactJS vào xây dựng giao diện web.",
                    "Thực hành làm việc nhóm với Git và quản lý task qua Trello.",
                    "Tối ưu trải nghiệm người dùng dựa trên phản hồi từ mentor.",
                  ],
                },
                {
                  title: "Dự án học phần Web nâng cao",
                  company: "Đại học HUTECH",
                  period: "09/2024 - 12/2024",
                  icon: "🚀",
                  color: "from-cyan-500 to-blue-500",
                  side: "left",
                  responsibilities: [
                    "Xây dựng ứng dụng web full-stack với Node.js và MongoDB.",
                    "Implement RESTful API và WebSocket cho tính năng real-time.",
                    "Áp dụng best practices trong tổ chức code và bảo mật.",
                  ],
                },
              ].map((exp, i) => (
                <div
                  key={i}
                  className={`relative ${
                    exp.side === "right"
                      ? "md:ml-auto md:pl-8"
                      : "md:mr-auto md:pr-8"
                  } md:w-1/2`}
                >
                  <div
                    className={`absolute top-8 ${
                      exp.side === "right" ? "md:-left-4" : "md:-right-4"
                    } left-0 md:left-auto w-8 h-8 rounded-full bg-gradient-to-br ${
                      exp.color
                    } flex items-center justify-center text-white font-bold text-sm shadow-lg z-10 border-4 border-background`}
                  >
                    {exp.icon}
                  </div>

                  <Card
                    className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                      exp.side === "left" ? "md:text-right" : ""
                    }`}
                  >
                    <div className="p-6">
                      <div
                        className={`flex items-start ${
                          exp.side === "left"
                            ? "md:flex-row-reverse"
                            : "flex-row"
                        } justify-between mb-3 gap-4`}
                      >
                        <div
                          className={exp.side === "left" ? "md:text-right" : ""}
                        >
                          <h3 className="text-xl md:text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-base text-muted-foreground font-semibold">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-xs md:text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>

                      <div
                        className={`space-y-2 mt-4 ${
                          exp.side === "left" ? "md:text-right" : ""
                        }`}
                      >
                        <p className="text-sm font-semibold text-muted-foreground italic">
                          Trách nhiệm
                        </p>
                        {exp.responsibilities.map((resp, j) => (
                          <div
                            key={j}
                            className={`flex items-start gap-2 ${
                              exp.side === "left" ? "md:flex-row-reverse" : ""
                            }`}
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <p className="text-muted-foreground text-sm">
                              {resp}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
