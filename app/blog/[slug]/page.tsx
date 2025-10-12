import { blogPosts } from "@/lib/blog-posts"
import { notFound } from "next/navigation"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
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
      "## Tạo Server Socket\n\nĐể tạo một server socket trong Java, chúng ta sử dụng class `ServerSocket`:\n\n```java\nServerSocket serverSocket = new ServerSocket(8080);\nSocket clientSocket = serverSocket.accept();\n```",
      "Method `accept()` sẽ block cho đến khi có client kết nối. Khi có kết nối, nó trả về một Socket object để giao tiếp với client.",
      '## Tạo Client Socket\n\nPhía client, chúng ta sử dụng class `Socket` để kết nối đến server:\n\n```java\nSocket socket = new Socket("localhost", 8080);\n```',
      '## Truyền dữ liệu\n\nSau khi có kết nối, chúng ta có thể sử dụng InputStream và OutputStream để đọc và ghi dữ liệu:\n\n```java\nOutputStream output = socket.getOutputStream();\nPrintWriter writer = new PrintWriter(output, true);\nwriter.println("Hello Server");\n```',
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
      "## Giải pháp: Thread per Client\n\nMột cách tiếp cận phổ biến là tạo một thread mới cho mỗi client kết nối:\n\n```java\nwhile (true) {\n    Socket clientSocket = serverSocket.accept();\n    new Thread(new ClientHandler(clientSocket)).start();\n}\n```",
      "## Implement ClientHandler\n\n```java\nclass ClientHandler implements Runnable {\n    private Socket socket;\n    \n    public ClientHandler(Socket socket) {\n        this.socket = socket;\n    }\n    \n    @Override\n    public void run() {\n        // Xử lý client\n    }\n}\n```",
      "## Sử dụng Thread Pool\n\nTạo thread mới cho mỗi client có thể tốn kém. Thread pool giúp tái sử dụng threads:\n\n```java\nExecutorService executor = Executors.newFixedThreadPool(10);\nwhile (true) {\n    Socket clientSocket = serverSocket.accept();\n    executor.submit(new ClientHandler(clientSocket));\n}\n```",
      "## Thread Safety\n\nKhi nhiều threads truy cập shared resources, cần đảm bảo thread safety:\n- Sử dụng synchronized blocks\n- Sử dụng concurrent collections\n- Tránh shared mutable state",
      "## Best Practices\n\n1. Sử dụng thread pool thay vì tạo thread mới\n2. Đặt timeout cho socket operations\n3. Xử lý exceptions đúng cách\n4. Đóng resources trong finally block\n5. Monitor số lượng active connections",
    ],
  },
  "http-client-java": {
    content: [
      "Java cung cấp nhiều cách để gửi HTTP requests. Từ HttpURLConnection truyền thống đến HttpClient hiện đại trong Java 11+.",
      '## HttpURLConnection\n\nHttpURLConnection là API cơ bản có sẵn từ Java 1.1:\n\n```java\nURL url = new URL("https://api.example.com/data");\nHttpURLConnection con = (HttpURLConnection) url.openConnection();\ncon.setRequestMethod("GET");\n```',
      "### Gửi GET Request\n\n```java\nint status = con.getResponseCode();\nBufferedReader in = new BufferedReader(\n    new InputStreamReader(con.getInputStream()));\nString inputLine;\nStringBuilder content = new StringBuilder();\nwhile ((inputLine = in.readLine()) != null) {\n    content.append(inputLine);\n}\nin.close();\n```",
      '### Gửi POST Request\n\n```java\ncon.setRequestMethod("POST");\ncon.setDoOutput(true);\nOutputStream os = con.getOutputStream();\nos.write(data.getBytes());\nos.flush();\nos.close();\n```',
      '## Java 11 HttpClient\n\nHttpClient mới cung cấp API hiện đại hơn với hỗ trợ async:\n\n```java\nHttpClient client = HttpClient.newHttpClient();\nHttpRequest request = HttpRequest.newBuilder()\n    .uri(URI.create("https://api.example.com/data"))\n    .build();\n```',
      "### Synchronous Request\n\n```java\nHttpResponse<String> response = client.send(request,\n    HttpResponse.BodyHandlers.ofString());\nSystem.out.println(response.body());\n```",
      "### Asynchronous Request\n\n```java\nclient.sendAsync(request, HttpResponse.BodyHandlers.ofString())\n    .thenApply(HttpResponse::body)\n    .thenAccept(System.out::println)\n    .join();\n```",
      "## So sánh\n\n**HttpURLConnection:**\n- Có sẵn trong tất cả Java versions\n- API phức tạp hơn\n- Chỉ hỗ trợ HTTP/1.1\n\n**HttpClient:**\n- Yêu cầu Java 11+\n- API hiện đại, dễ sử dụng\n- Hỗ trợ HTTP/2\n- Hỗ trợ async operations",
    ],
  },
  "java-nio-networking": {
    content: [
      "Java NIO (New I/O) cung cấp một cách tiếp cận khác cho I/O operations, đặc biệt hữu ích cho các ứng dụng mạng có hiệu suất cao.",
      "## Blocking vs Non-blocking I/O\n\nTraditional I/O (java.io) là blocking - thread sẽ chờ cho đến khi operation hoàn thành. NIO cho phép non-blocking operations.",
      "## Core Components của NIO\n\n### Channels\nChannels tương tự như streams nhưng có thể đọc và ghi:\n\n```java\nServerSocketChannel serverChannel = ServerSocketChannel.open();\nserverChannel.bind(new InetSocketAddress(8080));\nserverChannel.configureBlocking(false);\n```",
      "### Buffers\nBuffers là containers cho dữ liệu:\n\n```java\nByteBuffer buffer = ByteBuffer.allocate(1024);\nint bytesRead = channel.read(buffer);\n```",
      "### Selectors\nSelectors cho phép một thread quản lý nhiều channels:\n\n```java\nSelector selector = Selector.open();\nserverChannel.register(selector, SelectionKey.OP_ACCEPT);\n```",
      "## Xây dựng NIO Server\n\n```java\nwhile (true) {\n    selector.select();\n    Set<SelectionKey> selectedKeys = selector.selectedKeys();\n    \n    for (SelectionKey key : selectedKeys) {\n        if (key.isAcceptable()) {\n            // Accept new connection\n        } else if (key.isReadable()) {\n            // Read data\n        }\n    }\n    selectedKeys.clear();\n}\n```",
      "## Ưu điểm của NIO\n\n1. **Scalability**: Một thread có thể xử lý nhiều connections\n2. **Performance**: Giảm context switching\n3. **Resource efficiency**: Ít threads hơn\n4. **Non-blocking**: Không block khi chờ I/O",
      "## Khi nào sử dụng NIO?\n\n- Server cần xử lý nhiều connections đồng thời\n- Connections có thể idle trong thời gian dài\n- Cần hiệu suất cao và scalability\n\n**Không nên dùng khi:**\n- Ứng dụng đơn giản với ít connections\n- Code complexity không đáng giá",
    ],
  },
  "nodejs-networking-basics": {
    content: [
      "Node.js được xây dựng trên V8 JavaScript engine và cung cấp các module mạnh mẽ cho lập trình mạng. Module `net` là nền tảng cho TCP networking.",
      "## Module Net trong Node.js\n\nModule `net` cung cấp API để tạo TCP servers và clients:\n\n```javascript\nconst net = require('net');\n```",
      "## Tạo TCP Server\n\n```javascript\nconst server = net.createServer((socket) => {\n    console.log('Client connected');\n    \n    socket.on('data', (data) => {\n        console.log('Received:', data.toString());\n        socket.write('Echo: ' + data);\n    });\n    \n    socket.on('end', () => {\n        console.log('Client disconnected');\n    });\n});\n\nserver.listen(8080, () => {\n    console.log('Server listening on port 8080');\n});\n```",
      "## Tạo TCP Client\n\n```javascript\nconst client = net.createConnection({ port: 8080 }, () => {\n    console.log('Connected to server');\n    client.write('Hello Server!');\n});\n\nclient.on('data', (data) => {\n    console.log('Received:', data.toString());\n    client.end();\n});\n\nclient.on('end', () => {\n    console.log('Disconnected from server');\n});\n```",
      "## Event-driven Architecture\n\nNode.js sử dụng event-driven architecture, rất phù hợp cho I/O operations:\n\n- `connection`: Khi có client mới\n- `data`: Khi nhận được dữ liệu\n- `end`: Khi connection đóng\n- `error`: Khi có lỗi xảy ra",
      "## Xử lý nhiều Clients\n\nNode.js xử lý nhiều connections một cách tự nhiên nhờ event loop:\n\n```javascript\nconst clients = [];\n\nconst server = net.createServer((socket) => {\n    clients.push(socket);\n    \n    socket.on('data', (data) => {\n        // Broadcast to all clients\n        clients.forEach(client => {\n            if (client !== socket) {\n                client.write(data);\n            }\n        });\n    });\n});\n```",
      "## Best Practices\n\n1. Luôn xử lý errors\n2. Set timeouts cho connections\n3. Cleanup khi connection đóng\n4. Sử dụng Buffer đúng cách\n5. Monitor memory usage",
    ],
  },
  "websocket-realtime-apps": {
    content: [
      "WebSocket cung cấp giao tiếp hai chiều full-duplex qua một TCP connection duy nhất, hoàn hảo cho các ứng dụng real-time.",
      "## WebSocket vs HTTP\n\nHTTP là request-response protocol, trong khi WebSocket cho phép server push data đến client bất cứ lúc nào mà không cần client request.",
      "## WebSocket API trong Browser\n\n```javascript\nconst socket = new WebSocket('ws://localhost:8080');\n\nsocket.addEventListener('open', (event) => {\n    console.log('Connected to server');\n    socket.send('Hello Server!');\n});\n\nsocket.addEventListener('message', (event) => {\n    console.log('Message from server:', event.data);\n});\n```",
      "## WebSocket Server với Node.js\n\nSử dụng thư viện `ws`:\n\n```javascript\nconst WebSocket = require('ws');\nconst wss = new WebSocket.Server({ port: 8080 });\n\nwss.on('connection', (ws) => {\n    console.log('Client connected');\n    \n    ws.on('message', (message) => {\n        console.log('Received:', message);\n        ws.send('Echo: ' + message);\n    });\n});\n```",
      "## Xây dựng Chat Application\n\n### Server Side\n\n```javascript\nconst clients = new Set();\n\nwss.on('connection', (ws) => {\n    clients.add(ws);\n    \n    ws.on('message', (message) => {\n        // Broadcast to all clients\n        clients.forEach(client => {\n            if (client.readyState === WebSocket.OPEN) {\n                client.send(message);\n            }\n        });\n    });\n    \n    ws.on('close', () => {\n        clients.delete(ws);\n    });\n});\n```",
      "### Client Side\n\n```javascript\nconst socket = new WebSocket('ws://localhost:8080');\n\nfunction sendMessage(message) {\n    socket.send(JSON.stringify({\n        type: 'message',\n        text: message,\n        timestamp: Date.now()\n    }));\n}\n\nsocket.addEventListener('message', (event) => {\n    const data = JSON.parse(event.data);\n    displayMessage(data);\n});\n```",
      "## Xử lý Reconnection\n\n```javascript\nfunction connect() {\n    const socket = new WebSocket('ws://localhost:8080');\n    \n    socket.addEventListener('close', () => {\n        console.log('Disconnected. Reconnecting...');\n        setTimeout(connect, 1000);\n    });\n    \n    return socket;\n}\n```",
      "## Use Cases\n\n- Chat applications\n- Live notifications\n- Collaborative editing\n- Real-time gaming\n- Live sports updates\n- Stock trading platforms",
    ],
  },
  "express-rest-api": {
    content: [
      "Express.js là web framework phổ biến nhất cho Node.js, cung cấp các công cụ mạnh mẽ để xây dựng REST APIs.",
      "## Cài đặt và Setup\n\n```bash\nnpm install express\n```\n\n```javascript\nconst express = require('express');\nconst app = express();\n\napp.use(express.json());\n\napp.listen(3000, () => {\n    console.log('Server running on port 3000');\n});\n```",
      "## REST API Basics\n\nREST sử dụng HTTP methods:\n- GET: Lấy dữ liệu\n- POST: Tạo mới\n- PUT: Cập nhật toàn bộ\n- PATCH: Cập nhật một phần\n- DELETE: Xóa",
      "## Định nghĩa Routes\n\n```javascript\n// GET all users\napp.get('/api/users', (req, res) => {\n    res.json(users);\n});\n\n// GET user by ID\napp.get('/api/users/:id', (req, res) => {\n    const user = users.find(u => u.id === req.params.id);\n    if (!user) return res.status(404).json({ error: 'User not found' });\n    res.json(user);\n});\n```",
      "## POST Request\n\n```javascript\napp.post('/api/users', (req, res) => {\n    const newUser = {\n        id: generateId(),\n        name: req.body.name,\n        email: req.body.email\n    };\n    \n    users.push(newUser);\n    res.status(201).json(newUser);\n});\n```",
      "## Middleware\n\nMiddleware là functions xử lý request trước khi đến route handler:\n\n```javascript\n// Logging middleware\napp.use((req, res, next) => {\n    console.log(`${req.method} ${req.url}`);\n    next();\n});\n\n// Authentication middleware\nconst authenticate = (req, res, next) => {\n    const token = req.headers.authorization;\n    if (!token) return res.status(401).json({ error: 'Unauthorized' });\n    next();\n};\n\napp.get('/api/protected', authenticate, (req, res) => {\n    res.json({ message: 'Protected data' });\n});\n```",
      "## Error Handling\n\n```javascript\n// Error handling middleware\napp.use((err, req, res, next) => {\n    console.error(err.stack);\n    res.status(500).json({ \n        error: 'Something went wrong!',\n        message: err.message \n    });\n});\n```",
      "## Validation\n\n```javascript\nconst validateUser = (req, res, next) => {\n    const { name, email } = req.body;\n    \n    if (!name || !email) {\n        return res.status(400).json({ \n            error: 'Name and email are required' \n        });\n    }\n    \n    next();\n};\n\napp.post('/api/users', validateUser, (req, res) => {\n    // Create user\n});\n```",
      "## Best Practices\n\n1. Sử dụng proper HTTP status codes\n2. Version your API (/api/v1/users)\n3. Implement pagination cho large datasets\n4. Use middleware cho common tasks\n5. Validate input data\n6. Handle errors properly\n7. Document your API",
    ],
  },
  "socketio-nodejs": {
    content: [
      "Socket.IO là thư viện JavaScript cho real-time, bidirectional communication giữa web clients và servers. Nó xây dựng trên WebSocket nhưng cung cấp nhiều tính năng bổ sung.",
      "## Socket.IO vs WebSocket\n\nSocket.IO cung cấp:\n- Automatic reconnection\n- Fallback options (polling nếu WebSocket không available)\n- Room và namespace support\n- Broadcasting\n- Acknowledgements",
      "## Cài đặt\n\n```bash\nnpm install socket.io\n```\n\n### Server Setup\n\n```javascript\nconst express = require('express');\nconst http = require('http');\nconst socketIo = require('socket.io');\n\nconst app = express();\nconst server = http.createServer(app);\nconst io = socketIo(server);\n\nserver.listen(3000);\n```",
      "## Basic Events\n\n```javascript\nio.on('connection', (socket) => {\n    console.log('User connected:', socket.id);\n    \n    socket.on('message', (data) => {\n        console.log('Received:', data);\n        socket.emit('response', 'Message received');\n    });\n    \n    socket.on('disconnect', () => {\n        console.log('User disconnected:', socket.id);\n    });\n});\n```",
      "## Broadcasting\n\n```javascript\n// Gửi đến tất cả clients\nio.emit('broadcast', 'Message to all');\n\n// Gửi đến tất cả trừ sender\nsocket.broadcast.emit('broadcast', 'Message to others');\n\n// Gửi đến specific client\nio.to(socketId).emit('private', 'Private message');\n```",
      "## Rooms\n\nRooms cho phép group sockets:\n\n```javascript\n// Join room\nsocket.join('room1');\n\n// Emit to room\nio.to('room1').emit('message', 'Hello room');\n\n// Leave room\nsocket.leave('room1');\n\n// Get rooms\nconst rooms = Array.from(socket.rooms);\n```",
      "## Client Side\n\n```javascript\nconst socket = io('http://localhost:3000');\n\nsocket.on('connect', () => {\n    console.log('Connected:', socket.id);\n});\n\nsocket.emit('message', 'Hello Server');\n\nsocket.on('response', (data) => {\n    console.log('Response:', data);\n});\n```",
      "## Chat Application Example\n\n### Server\n\n```javascript\nio.on('connection', (socket) => {\n    socket.on('join', (username) => {\n        socket.username = username;\n        socket.broadcast.emit('user-joined', username);\n    });\n    \n    socket.on('chat-message', (message) => {\n        io.emit('chat-message', {\n            username: socket.username,\n            message: message,\n            timestamp: Date.now()\n        });\n    });\n    \n    socket.on('disconnect', () => {\n        if (socket.username) {\n            io.emit('user-left', socket.username);\n        }\n    });\n});\n```",
      "## Namespaces\n\nNamespaces cho phép tách biệt logic:\n\n```javascript\nconst chatNamespace = io.of('/chat');\nconst adminNamespace = io.of('/admin');\n\nchatNamespace.on('connection', (socket) => {\n    // Chat logic\n});\n\nadminNamespace.on('connection', (socket) => {\n    // Admin logic\n});\n```",
      "## Middleware\n\n```javascript\nio.use((socket, next) => {\n    const token = socket.handshake.auth.token;\n    if (isValidToken(token)) {\n        next();\n    } else {\n        next(new Error('Authentication error'));\n    }\n});\n```",
    ],
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.id === params.slug)

  if (!post) {
    notFound()
  }

  const content = blogContent[params.slug]

  return (
    <main className="min-h-screen">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Quay lại Blog
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                post.category === "Java" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
              }`}
            >
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-balance">{post.title}</h1>

          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString("vi-VN")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        <Card className="p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {content.content.map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              } else if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-foreground">
                    {paragraph.replace("### ", "")}
                  </h3>
                )
              } else if (paragraph.includes("```")) {
                const code = paragraph.split("```")[1]
                return (
                  <pre key={index} className="bg-muted p-4 rounded-lg overflow-x-auto my-4">
                    <code className="text-sm font-mono">{code}</code>
                  </pre>
                )
              } else if (paragraph.startsWith("**") || paragraph.includes("\n-")) {
                return (
                  <div key={index} className="my-4 text-foreground leading-relaxed whitespace-pre-line">
                    {paragraph}
                  </div>
                )
              } else {
                return (
                  <p key={index} className="mb-4 text-foreground leading-relaxed">
                    {paragraph}
                  </p>
                )
              }
            })}
          </div>
        </Card>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Xem thêm bài viết
          </Link>
        </div>
      </article>
    </main>
  )
}
