"use client";

import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, Network, Server, Award } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ExpertisePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const mainExpertise = [
    {
      title: "Lập Trình Mạng Java",
      icon: "/icons/java.jpg",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      description:
        "Chuyên gia xây dựng ứng dụng mạng mạnh mẽ, có khả năng mở rộng sử dụng API mạng mạnh mẽ của Java và khả năng đa luồng.",
      skills: [
        "Lập trình Socket (TCP/UDP)",
        "Kiến trúc Server đa luồng",
        "Java NIO cho I/O hiệu suất cao",
        "HTTP Clients & RESTful Services",
        "Triển khai giao thức mạng",
      ],
      tags: ["Socket API", "TCP/UDP", "Đa luồng", "Java NIO", "Concurrency"],
    },
    {
      title: "TypeScript & Node.js",
      icon: "/icons/typescript.jpg",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      description:
        "Thành thạo TypeScript và hệ sinh thái Node.js hiện đại để xây dựng ứng dụng mạng an toàn kiểu, thời gian thực, hướng sự kiện.",
      skills: [
        "Giao tiếp Real-time với WebSocket",
        "Socket.IO Bidirectional Events",
        "RESTful API với Express.js",
        "Async/Await Patterns",
        "TypeScript Type Safety",
      ],
      tags: ["TypeScript", "Node.js", "WebSocket", "Socket.IO", "Express"],
    },
  ];

  const networkingCards = [
    {
      title: "Lập trình Socket",
      description:
        "Thành thạo lập trình socket TCP/UDP để xây dựng ứng dụng client-server mạnh mẽ với truyền dữ liệu đáng tin cậy và quản lý kết nối.",
      icon: <Network className="w-12 h-12" />,
      topics: [
        "TCP Sockets",
        "UDP Datagrams",
        "Kiến trúc Client-Server",
        "Connection Pooling",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Giao tiếp Real-time",
      description:
        "Triển khai WebSocket và Socket.IO cho giao tiếp hai chiều, dựa trên sự kiện trong ứng dụng web hiện đại với độ trễ thấp.",
      icon: <Code2 className="w-12 h-12" />,
      topics: [
        "Giao thức WebSocket",
        "Socket.IO Events",
        "Broadcasting",
        "Quản lý Room",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Hệ thống phân tán",
      description:
        "Hiểu sâu về HTTP/HTTPS, REST APIs và kiến trúc microservices để xây dựng hệ thống phân tán có khả năng mở rộng.",
      icon: <Server className="w-12 h-12" />,
      topics: ["HTTP/HTTPS", "REST APIs", "Microservices", "Cân bằng tải"],
      color: "from-orange-500 to-red-500",
    },
  ];

  const certificates = [
    {
      id: 1,
      title: "Chứng chỉ A",
      src: "/certificates/cert1.png",
      year: "2024",
    },
    {
      id: 2,
      title: "Chứng chỉ B",
      src: "/certificates/cert2.png",
      year: "2024",
    },
    {
      id: 3,
      title: "Chứng chỉ C",
      src: "/certificates/cert3.png",
      year: "2024",
    },
    {
      id: 4,
      title: "Chứng chỉ D",
      src: "/certificates/cert4.png",
      year: "2024",
    },
    {
      id: 5,
      title: "Chứng chỉ E",
      src: "/certificates/cert5.png",
      year: "2024",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/40 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/40 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Chuyên Môn Kỹ Thuật
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Chuyên về{" "}
            <span className="text-primary font-semibold">
              Lập Trình Mạng Java
            </span>
            , <span className="text-accent font-semibold">TypeScript</span> &{" "}
            <span className="text-accent font-semibold">Node.js</span> để xây
            dựng hệ thống phân tán có khả năng mở rộng
          </p>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {mainExpertise.map((expertise, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${expertise.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <div className="relative p-8 md:p-10">
                  <div className="flex items-center gap-6 mb-6">
                    <div
                      className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${expertise.gradient} p-1 group-hover:scale-110 transition-transform duration-500`}
                    >
                      <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                        <img
                          src={expertise.icon || "/placeholder.svg"}
                          alt={expertise.title}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                    </div>
                    <h3
                      className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${expertise.gradient} bg-clip-text text-transparent`}
                    >
                      {expertise.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                    {expertise.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {expertise.skills.map((skill, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 group/item"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${expertise.gradient} mt-2 flex-shrink-0 group-hover:item:scale-150 transition-transform`}
                        />
                        <p className="text-foreground/90 group-hover/item:text-foreground transition-colors">
                          {skill}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {expertise.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${expertise.gradient} text-white hover:scale-110 transition-transform cursor-default`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Chuyên Môn Lập Trình Mạng
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Năng lực cốt lõi trong xây dựng hệ thống phân tán và mạng
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {networkingCards.map((card, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />
                  <div className="relative p-8">
                    <div
                      className={`text-primary mb-6 group-hover:scale-110 transition-transform`}
                    >
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {card.description}
                    </p>
                    <div className="space-y-2">
                      {card.topics.map((topic, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                          <span className="text-sm text-muted-foreground">
                            {topic}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Công Nghệ Hỗ Trợ</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Các công cụ và framework bổ sung cho phát triển full-stack
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                {
                  name: "React",
                  icon: "/icons/react.jpg",
                  desc: "Giao diện hiện đại",
                },
                {
                  name: "Python",
                  icon: "/icons/python.jpg",
                  desc: "Scripting",
                },
                {
                  name: "Git",
                  icon: "/git-logo.png",
                  desc: "Quản lý phiên bản",
                },
                {
                  name: "C#",
                  icon: "/icons/csharp.jpg",
                  desc: "Phát triển .NET",
                },
                {
                  name: "Docker",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
                  desc: "Containers",
                },
                {
                  name: "MongoDB",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                  desc: "NoSQL DB",
                },
              ].map((skill, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                >
                  <div className="relative p-6 text-center">
                    <img
                      src={skill.icon || "/placeholder.svg"}
                      alt={skill.name}
                      className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform"
                    />
                    <h4 className="font-bold mb-1">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {skill.desc}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Chứng Chỉ & Thành Tích
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Chứng chỉ chuyên môn và sự công nhận
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((c) => (
                <Card
                  key={c.id}
                  className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-full h-56 md:h-64 lg:h-72 relative">
                    <img
                      src={c.src}
                      alt={c.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Khám Phá Các Bài Viết Kỹ Thuật
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Đọc các hướng dẫn và bài viết chuyên sâu về lập trình mạng với Java,
            TypeScript và Node.js
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105"
          >
            Xem Bài Viết Blog
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </main>
  );
}
