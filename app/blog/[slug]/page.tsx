import { blogPosts } from "@/lib/blog-posts"
import { notFound } from "next/navigation"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }))
}

const blogContent: Record<string, { content: string[] }> = {
  "java-socket-programming-basics": {
    content: [
      "Socket programming là nền tảng của lập trình mạng, cho phép các ứng dụng giao tiếp với nhau qua mạng. Trong Java, Socket API cung cấp các class để tạo kết nối client-server.",
      "## Khái niệm Socket\n\nSocket là một endpoint trong giao tiếp hai chiều giữa hai chương trình chạy trên mạng. Một socket được gắn với một port number để TCP layer có thể xác định ứng dụng nào dữ liệu sẽ được gửi đến.",
      "## Tạo Server Socket\n\nĐể tạo một server socket trong Java, chúng ta sử dụng class ServerSocket.",
      "Method accept() sẽ block cho đến khi có client kết nối. Khi có kết nối, nó trả về một Socket object để giao tiếp với client.",
      "## Tạo Client Socket\n\nPhía client, chúng ta sử dụng class Socket để kết nối đến server.",
      "## Truyền dữ liệu\n\nSau khi có kết nối, chúng ta có thể sử dụng InputStream và OutputStream để đọc và ghi dữ liệu.",
      "## Kết luận\n\nSocket programming trong Java cung cấp một cách đơn giản nhưng mạnh mẽ để xây dựng ứng dụng mạng. Hiểu rõ các khái niệm cơ bản này là bước đầu tiên để phát triển các ứng dụng phân tán phức tạp hơn.",
    ],
  },
  "tcp-vs-udp-java": {
    content: [
      "TCP và UDP là hai giao thức truyền tải chính trong mạng máy tính. Mỗi giao thức có ưu điểm và nhược điểm riêng, phù hợp với các trường hợp sử dụng khác nhau.",
      "## TCP (Transmission Control Protocol)\n\nTCP là giao thức hướng kết nối, đảm bảo dữ liệu được truyền đầy đủ và theo đúng thứ tự. Trong Java, chúng ta sử dụng Socket và ServerSocket cho TCP.",
      "### Ưu điểm của TCP:\n- Đảm bảo dữ liệu được gửi đầy đủ\n- Dữ liệu đến theo đúng thứ tự\n- Có cơ chế kiểm soát lỗi và truyền lại\n- Phù hợp cho các ứng dụng yêu cầu độ tin cậy cao",
      "### Nhược điểm của TCP:\n- Overhead cao hơn UDP\n- Chậm hơn do cần thiết lập kết nối\n- Không phù hợp cho streaming real-time",
      "## UDP (User Datagram Protocol)\n\nUDP là giao thức không kết nối, không đảm bảo dữ liệu đến đích. Trong Java, chúng ta sử dụng DatagramSocket và DatagramPacket.",
      "### Ưu điểm của UDP:\n- Nhanh hơn TCP\n- Overhead thấp\n- Phù hợp cho streaming, gaming\n- Hỗ trợ broadcast và multicast",
      "### Nhược điểm của UDP:\n- Không đảm bảo dữ liệu đến đích\n- Không có cơ chế kiểm soát lỗi\n- Dữ liệu có thể đến không đúng thứ tự",
      "## Khi nào sử dụng?\n\n**Sử dụng TCP khi:**\n- Cần đảm bảo dữ liệu đầy đủ (file transfer, email)\n- Thứ tự dữ liệu quan trọng\n- Độ tin cậy quan trọng hơn tốc độ\n\n**Sử dụng UDP khi:**\n- Tốc độ quan trọng hơn độ tin cậy\n- Có thể chấp nhận mất một số dữ liệu (video streaming)\n- Cần broadcast/multicast",
    ],
  },
  "java-multithreaded-server": {
    content: [
      "Một server đơn luồng chỉ có thể xử lý một client tại một thời điểm. Để xử lý nhiều client đồng thời, chúng ta cần sử dụng multithreading.",
      "## Vấn đề với Single-threaded Server\n\nServer đơn luồng sẽ block khi xử lý một client, khiến các client khác phải chờ đợi. Điều này không hiệu quả và không thể mở rộng.",
      "## Giải pháp: Thread per Client\n\nMột cách tiếp cận phổ biến là tạo một thread mới cho mỗi client kết nối. Server sẽ lắng nghe và tạo thread mới cho mỗi kết nối.",
      "## Implement ClientHandler\n\nClientHandler là một class implement Runnable để xử lý logic cho mỗi client trong thread riêng biệt.",
      "## Sử dụng Thread Pool\n\nTạo thread mới cho mỗi client có thể tốn kém. Thread pool giúp tái sử dụng threads và quản lý tài nguyên hiệu quả hơn.",
      "## Thread Safety\n\nKhi nhiều threads truy cập shared resources, cần đảm bảo thread safety:\n- Sử dụng synchronized blocks\n- Sử dụng concurrent collections\n- Tránh shared mutable state",
      "## Best Practices\n\n1. Sử dụng thread pool thay vì tạo thread mới\n2. Đặt timeout cho socket operations\n3. Xử lý exceptions đúng cách\n4. Đóng resources trong finally block\n5. Monitor số lượng active connections",
    ],
  },
  "http-client-java": {
    content: [
      "Java cung cấp nhiều cách để gửi HTTP requests. Từ HttpURLConnection truyền thống đến HttpClient hiện đại trong Java 11+.",
      "## HttpURLConnection\n\nHttpURLConnection là API cơ bản có sẵn từ Java 1.1 để thực hiện các HTTP requests.",
      "### Gửi GET Request\n\nĐể gửi GET request, chúng ta tạo connection, đọc response code và xử lý response body.",
      "### Gửi POST Request\n\nPOST request yêu cầu set request method, enable output và ghi dữ liệu vào output stream.",
      "## Java 11 HttpClient\n\nHttpClient mới cung cấp API hiện đại hơn với hỗ trợ async và HTTP/2.",
      "### Synchronous Request\n\nSynchronous request sẽ block cho đến khi nhận được response.",
      "### Asynchronous Request\n\nAsynchronous request cho phép xử lý non-blocking với CompletableFuture.",
      "## So sánh\n\n**HttpURLConnection:**\n- Có sẵn trong tất cả Java versions\n- API phức tạp hơn\n- Chỉ hỗ trợ HTTP/1.1\n\n**HttpClient:**\n- Yêu cầu Java 11+\n- API hiện đại, dễ sử dụng\n- Hỗ trợ HTTP/2\n- Hỗ trợ async operations",
    ],
  },
  "java-nio-networking": {
    content: [
      "Java NIO (New I/O) cung cấp một cách tiếp cận khác cho I/O operations, đặc biệt hữu ích cho các ứng dụng mạng có hiệu suất cao.",
      "## Blocking vs Non-blocking I/O\n\nTraditional I/O (java.io) là blocking - thread sẽ chờ cho đến khi operation hoàn thành. NIO cho phép non-blocking operations.",
      "## Core Components của NIO\n\n### Channels\nChannels tương tự như streams nhưng có thể đọc và ghi. ServerSocketChannel được sử dụng để tạo non-blocking server.",
      "### Buffers\nBuffers là containers cho dữ liệu. ByteBuffer là buffer phổ biến nhất cho network operations.",
      "### Selectors\nSelectors cho phép một thread quản lý nhiều channels, giúp xử lý nhiều connections đồng thời.",
      "## Xây dựng NIO Server\n\nNIO server sử dụng selector để monitor nhiều channels và xử lý events khi chúng sẵn sàng.",
      "## Ưu điểm của NIO\n\n1. **Scalability**: Một thread có thể xử lý nhiều connections\n2. **Performance**: Giảm context switching\n3. **Resource efficiency**: Ít threads hơn\n4. **Non-blocking**: Không block khi chờ I/O",
      "## Khi nào sử dụng NIO?\n\n- Server cần xử lý nhiều connections đồng thời\n- Connections có thể idle trong thời gian dài\n- Cần hiệu suất cao và scalability\n\n**Không nên dùng khi:**\n- Ứng dụng đơn giản với ít connections\n- Code complexity không đáng giá",
    ],
  },
  "nodejs-networking-basics": {
    content: [
      "Node.js được xây dựng trên V8 JavaScript engine và cung cấp các module mạnh mẽ cho lập trình mạng. Module net là nền tảng cho TCP networking.",
      "## Module Net trong Node.js\n\nModule net cung cấp API để tạo TCP servers và clients.",
      "## Tạo TCP Server\n\nTạo server với net.createServer, xử lý events như data, end và error.",
      "## Tạo TCP Client\n\nClient sử dụng net.createConnection để kết nối đến server.",
      "## Event-driven Architecture\n\nNode.js sử dụng event-driven architecture, rất phù hợp cho I/O operations:\n\n- connection: Khi có client mới\n- data: Khi nhận được dữ liệu\n- end: Khi connection đóng\n- error: Khi có lỗi xảy ra",
      "## Xử lý nhiều Clients\n\nNode.js xử lý nhiều connections một cách tự nhiên nhờ event loop. Có thể lưu danh sách clients và broadcast messages.",
      "## Best Practices\n\n1. Luôn xử lý errors\n2. Set timeouts cho connections\n3. Cleanup khi connection đóng\n4. Sử dụng Buffer đúng cách\n5. Monitor memory usage",
    ],
  },
  "websocket-realtime-apps": {
    content: [
      "WebSocket cung cấp giao tiếp hai chiều full-duplex qua một TCP connection duy nhất, hoàn hảo cho các ứng dụng real-time.",
      "## WebSocket vs HTTP\n\nHTTP là request-response protocol, trong khi WebSocket cho phép server push data đến client bất cứ lúc nào mà không cần client request.",
      "## WebSocket API trong Browser\n\nBrowser cung cấp WebSocket API để tạo connection, gửi và nhận messages.",
      "## WebSocket Server với Node.js\n\nSử dụng thư viện ws để tạo WebSocket server trong Node.js.",
      "## Xây dựng Chat Application\n\n### Server Side\n\nServer quản lý danh sách clients và broadcast messages đến tất cả clients đang kết nối.",
      "### Client Side\n\nClient tạo WebSocket connection, gửi messages dạng JSON và xử lý incoming messages.",
      "## Xử lý Reconnection\n\nImplement auto-reconnection logic để tự động kết nối lại khi connection bị đóng.",
      "## Use Cases\n\n- Chat applications\n- Live notifications\n- Collaborative editing\n- Real-time gaming\n- Live sports updates\n- Stock trading platforms",
    ],
  },
  "express-rest-api": {
    content: [
      "Express.js là web framework phổ biến nhất cho Node.js, cung cấp các công cụ mạnh mẽ để xây dựng REST APIs.",
      "## Cài đặt và Setup\n\nCài đặt Express qua npm và tạo basic server với express().",
      "## REST API Basics\n\nREST sử dụng HTTP methods:\n- GET: Lấy dữ liệu\n- POST: Tạo mới\n- PUT: Cập nhật toàn bộ\n- PATCH: Cập nhật một phần\n- DELETE: Xóa",
      "## Định nghĩa Routes\n\nRoutes định nghĩa endpoints và handlers cho các HTTP methods khác nhau.",
      "## POST Request\n\nPOST request được sử dụng để tạo resources mới, thường trả về status 201 Created.",
      "## Middleware\n\nMiddleware là functions xử lý request trước khi đến route handler. Có thể dùng cho logging, authentication, validation.",
      "## Error Handling\n\nError handling middleware có 4 parameters và được định nghĩa cuối cùng để catch tất cả errors.",
      "## Validation\n\nValidation middleware kiểm tra input data trước khi xử lý request.",
      "## Best Practices\n\n1. Sử dụng proper HTTP status codes\n2. Version your API (/api/v1/users)\n3. Implement pagination cho large datasets\n4. Use middleware cho common tasks\n5. Validate input data\n6. Handle errors properly\n7. Document your API",
    ],
  },
  "socketio-nodejs": {
    content: [
      "Socket.IO là thư viện JavaScript cho real-time, bidirectional communication giữa web clients và servers. Nó xây dựng trên WebSocket nhưng cung cấp nhiều tính năng bổ sung.",
      "## Socket.IO vs WebSocket\n\nSocket.IO cung cấp:\n- Automatic reconnection\n- Fallback options (polling nếu WebSocket không available)\n- Room và namespace support\n- Broadcasting\n- Acknowledgements",
      "## Cài đặt\n\nCài đặt socket.io và tích hợp với Express server.",
      "## Basic Events\n\nSocket.IO sử dụng event-based communication với connection, message và disconnect events.",
      "## Broadcasting\n\nSocket.IO cung cấp nhiều cách broadcast messages: đến tất cả, đến tất cả trừ sender, hoặc đến specific client.",
      "## Rooms\n\nRooms cho phép group sockets lại với nhau để broadcast messages đến một nhóm cụ thể.",
      "## Client Side\n\nClient sử dụng socket.io-client library để kết nối và giao tiếp với server.",
      "## Chat Application Example\n\nChat application demo với join, message và disconnect events.",
      "## Namespaces\n\nNamespaces cho phép tách biệt logic thành các channels khác nhau.",
      "## Middleware\n\nSocket.IO middleware có thể dùng cho authentication và authorization.",
    ],
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.id === params.slug)

  if (!post) {
    notFound()
  }

  const content = blogContent[params.slug]

  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  post.category === "Java" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                }`}
              >
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight">{post.title}</h1>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(post.date).toLocaleDateString("vi-VN")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="font-medium">Share</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 md:p-12 shadow-xl">
            <div className="prose prose-lg max-w-none">
              {content.content.map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-3xl font-bold mt-12 mb-6 text-foreground first:mt-0">
                      {paragraph.replace("## ", "")}
                    </h2>
                  )
                } else if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={index} className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                      {paragraph.replace("### ", "")}
                    </h3>
                  )
                } else if (paragraph.includes("```")) {
                  const code = paragraph.split("```")[1]
                  return (
                    <pre key={index} className="bg-muted p-6 rounded-lg overflow-x-auto my-6 border border-border">
                      <code className="text-sm font-mono">{code}</code>
                    </pre>
                  )
                } else if (paragraph.startsWith("**") || paragraph.includes("\n-")) {
                  return (
                    <div key={index} className="my-6 text-foreground leading-relaxed whitespace-pre-line text-lg">
                      {paragraph}
                    </div>
                  )
                } else {
                  return (
                    <p key={index} className="mb-6 text-foreground leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  )
                }
              })}
            </div>
          </Card>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                  <Card className="group relative overflow-hidden h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative p-6">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                          relatedPost.category === "Java" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                        }`}
                      >
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Explore More Articles</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Discover more insights on network programming with Java and JavaScript
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
          >
            View All Posts
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </section>
    </main>
  )
}
