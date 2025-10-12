"use client"

import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ExpertisePage() {
  const networkProgrammingCards = [
    {
      title: "Socket Programming",
      description:
        "Master TCP/UDP socket programming for building robust client-server applications with reliable data transmission.",
      icon: "🔌",
      topics: ["TCP Sockets", "UDP Datagrams", "Client-Server Architecture", "Connection Management"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Real-time Communication",
      description:
        "Implement WebSocket and Socket.IO for bidirectional, event-based communication in modern web applications.",
      icon: "⚡",
      topics: ["WebSocket Protocol", "Socket.IO", "Event-driven Architecture", "Broadcasting"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Network Protocols",
      description:
        "Deep understanding of HTTP/HTTPS, REST APIs, and network protocols for building scalable distributed systems.",
      icon: "🌐",
      topics: ["HTTP/HTTPS", "REST APIs", "Protocol Design", "API Security"],
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Specialized in network programming with Java and JavaScript, building scalable and efficient distributed
            systems
          </p>
        </div>
      </section>

      {/* Main Expertise Cards */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Java Card */}
            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8">
                <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <img src="/icons/java.jpg" alt="Java" className="w-16 h-16" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-primary">Java Network Programming</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  Expert in building robust network applications using Java's powerful networking APIs and
                  multithreading capabilities.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Socket Programming with TCP/UDP protocols</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Multithreaded server architectures</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Java NIO for high-performance I/O</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">HTTP clients and RESTful services</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Socket API
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">TCP/UDP</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Multithreading
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Java NIO
                  </span>
                </div>
              </div>
            </Card>

            {/* JavaScript Card */}
            <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8">
                <div className="w-20 h-20 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <img src="/icons/javascript.png" alt="JavaScript" className="w-16 h-16" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-accent">JavaScript & Node.js</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  Proficient in modern JavaScript ecosystem for building real-time, event-driven network applications.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">WebSocket for real-time communication</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Socket.IO for bidirectional events</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">RESTful API development with Express</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">Async/await patterns for network operations</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">WebSocket</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">Node.js</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">Socket.IO</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">Express</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Network Programming Deep Dive */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Network Programming Specializations</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Core competencies in building distributed and networked systems
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {networkProgrammingCards.map((card, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />
                  <div className="relative p-8">
                    <div className="text-5xl mb-6">{card.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{card.description}</p>
                    <div className="space-y-2">
                      {card.topics.map((topic, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Skills */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Additional Technical Skills</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Supporting technologies and tools for full-stack development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "TypeScript", icon: "/icons/typescript.jpg", desc: "Type-safe development" },
                { name: "React", icon: "/icons/react.jpg", desc: "Modern UI development" },
                { name: "Python", icon: "/icons/python.jpg", desc: "Scripting & automation" },
                { name: "Git", icon: "/git-logo.png", desc: "Version control" },
              ].map((skill, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative p-6 text-center">
                    <img
                      src={skill.icon || "/placeholder.svg"}
                      alt={skill.name}
                      className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform"
                    />
                    <h4 className="font-bold mb-2">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">{skill.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Explore My Technical Articles</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Read in-depth tutorials and guides on network programming with Java and JavaScript
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
          >
            View Blog Posts
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </main>
  )
}
