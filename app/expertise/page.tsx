"use client"

import { Card } from "@/components/ui/card"
import { ArrowRight, Code2, Network, Server } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ExpertisePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const mainExpertise = [
    {
      title: "Java Network Programming",
      icon: "/icons/java.jpg",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      description:
        "Expert in building robust, scalable network applications using Java's powerful networking APIs and multithreading capabilities.",
      skills: [
        "Socket Programming (TCP/UDP)",
        "Multithreaded Server Architecture",
        "Java NIO for High-Performance I/O",
        "HTTP Clients & RESTful Services",
        "Network Protocol Implementation",
      ],
      tags: ["Socket API", "TCP/UDP", "Multithreading", "Java NIO", "Concurrency"],
    },
    {
      title: "TypeScript & Node.js",
      icon: "/icons/typescript.jpg",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      description:
        "Proficient in modern TypeScript and Node.js ecosystem for building type-safe, real-time, event-driven network applications.",
      skills: [
        "WebSocket Real-time Communication",
        "Socket.IO Bidirectional Events",
        "RESTful API with Express.js",
        "Async/Await Patterns",
        "TypeScript Type Safety",
      ],
      tags: ["TypeScript", "Node.js", "WebSocket", "Socket.IO", "Express"],
    },
  ]

  const networkingCards = [
    {
      title: "Socket Programming",
      description:
        "Master TCP/UDP socket programming for building robust client-server applications with reliable data transmission and connection management.",
      icon: <Network className="w-12 h-12" />,
      topics: ["TCP Sockets", "UDP Datagrams", "Client-Server Architecture", "Connection Pooling"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Real-time Communication",
      description:
        "Implement WebSocket and Socket.IO for bidirectional, event-based communication in modern web applications with low latency.",
      icon: <Code2 className="w-12 h-12" />,
      topics: ["WebSocket Protocol", "Socket.IO Events", "Broadcasting", "Room Management"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Distributed Systems",
      description:
        "Deep understanding of HTTP/HTTPS, REST APIs, and microservices architecture for building scalable distributed systems.",
      icon: <Server className="w-12 h-12" />,
      topics: ["HTTP/HTTPS", "REST APIs", "Microservices", "Load Balancing"],
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Technical Expertise
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Specialized in <span className="text-primary font-semibold">Java Network Programming</span>,{" "}
            <span className="text-accent font-semibold">TypeScript</span> &{" "}
            <span className="text-accent font-semibold">Node.js</span> for building scalable distributed systems
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

                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">{expertise.description}</p>

                  <div className="space-y-3 mb-6">
                    {expertise.skills.map((skill, i) => (
                      <div key={i} className="flex items-start gap-3 group/item">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${expertise.gradient} mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform`}
                        />
                        <p className="text-foreground/90 group-hover/item:text-foreground transition-colors">{skill}</p>
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
                Network Programming Specializations
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Core competencies in building distributed and networked systems
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
                    <div className={`text-primary mb-6 group-hover:scale-110 transition-transform`}>{card.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{card.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{card.description}</p>
                    <div className="space-y-2">
                      {card.topics.map((topic, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                          <span className="text-sm text-muted-foreground">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Supporting Technologies</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Additional tools and frameworks for full-stack development
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "React", icon: "/icons/react.jpg", desc: "Modern UI" },
                { name: "Python", icon: "/icons/python.jpg", desc: "Scripting" },
                { name: "Git", icon: "/git-logo.png", desc: "Version Control" },
                { name: "C#", icon: "/icons/csharp.jpg", desc: ".NET Development" },
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
                    <p className="text-sm text-muted-foreground">{skill.desc}</p>
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
            Explore My Technical Articles
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Read in-depth tutorials and guides on network programming with Java, TypeScript, and Node.js
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105"
          >
            View Blog Posts
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </main>
  )
}
