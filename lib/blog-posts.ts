export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  category: "Java" | "JavaScript"
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "java-socket-programming-basics",
    title: "Lập trình Socket cơ bản với Java",
    excerpt: "Tìm hiểu về Socket programming trong Java, cách tạo kết nối client-server và truyền dữ liệu qua mạng.",
    date: "2024-12-15",
    category: "Java",
    readTime: "8 phút",
  },
  {
    id: "tcp-vs-udp-java",
    title: "So sánh TCP và UDP trong Java",
    excerpt:
      "Phân tích sự khác biệt giữa giao thức TCP và UDP, khi nào nên sử dụng từng loại trong lập trình mạng Java.",
    date: "2024-12-10",
    category: "Java",
    readTime: "10 phút",
  },
  {
    id: "java-multithreaded-server",
    title: "Xây dựng Server đa luồng với Java",
    excerpt: "Hướng dẫn tạo server có khả năng xử lý nhiều client đồng thời sử dụng multithreading trong Java.",
    date: "2024-12-05",
    category: "Java",
    readTime: "12 phút",
  },
  {
    id: "http-client-java",
    title: "HTTP Client trong Java: HttpURLConnection và HttpClient",
    excerpt: "Khám phá cách gửi HTTP requests trong Java sử dụng HttpURLConnection và Java 11 HttpClient API.",
    date: "2024-11-28",
    category: "Java",
    readTime: "9 phút",
  },
  {
    id: "java-nio-networking",
    title: "Java NIO cho lập trình mạng hiệu suất cao",
    excerpt: "Tìm hiểu về Java NIO (Non-blocking I/O) và cách sử dụng để xây dựng ứng dụng mạng có hiệu suất cao.",
    date: "2024-11-20",
    category: "Java",
    readTime: "15 phút",
  },
  {
    id: "nodejs-networking-basics",
    title: "Lập trình mạng cơ bản với Node.js",
    excerpt: "Giới thiệu về module net trong Node.js và cách tạo TCP server/client đơn giản.",
    date: "2024-11-15",
    category: "JavaScript",
    readTime: "7 phút",
  },
  {
    id: "websocket-realtime-apps",
    title: "WebSocket: Xây dựng ứng dụng Real-time",
    excerpt: "Hướng dẫn sử dụng WebSocket để tạo ứng dụng chat và các ứng dụng real-time khác với JavaScript.",
    date: "2024-11-08",
    category: "JavaScript",
    readTime: "11 phút",
  },
  {
    id: "express-rest-api",
    title: "Tạo REST API với Express.js",
    excerpt: "Xây dựng RESTful API hoàn chỉnh sử dụng Express.js, bao gồm routing, middleware và error handling.",
    date: "2024-11-01",
    category: "JavaScript",
    readTime: "13 phút",
  },
  {
    id: "socketio-nodejs",
    title: "Socket.IO: Giao tiếp real-time với Node.js",
    excerpt: "Khám phá Socket.IO library để xây dựng ứng dụng real-time với tính năng fallback và room management.",
    date: "2024-10-25",
    category: "JavaScript",
    readTime: "10 phút",
  },
]
