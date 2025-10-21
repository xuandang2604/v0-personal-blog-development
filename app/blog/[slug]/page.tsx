import { blogPosts } from "@/lib/blog-posts";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

const blogContent: Record<string, { content: string[] }> = {
  "java-socket-programming-basics": {
    content: [
      "## Lập trình Socket trong Java: Từ cơ bản đến ứng dụng thực tế",
      "Trong hầu hết các hệ thống mạng ngày nay, lập trình socket đóng vai trò như cầu nối giữa các thiết bị và dịch vụ. Dù bạn đang xây dựng một ứng dụng chat, game nhiều người chơi hay một server IoT, việc hiểu rõ cơ chế hoạt động của socket là điều bắt buộc. Java cung cấp thư viện mạnh mẽ, trừu tượng hóa các chi tiết phức tạp của mạng, giúp bạn làm việc với TCP và UDP dễ dàng hơn nhiều.",
      "Bài viết này trình bày toàn diện về **Java Socket Programming** — từ khái niệm cơ bản, các loại giao thức, đến ví dụ thực tiễn. Mục tiêu là giúp bạn không chỉ hiểu “làm thế nào”, mà còn “tại sao” nó lại hoạt động như vậy.",

      "---",
      "## 1. Socket là gì? Một cái nhìn nền tảng",
      "Về bản chất, **socket** là điểm cuối (endpoint) của một kết nối mạng giữa hai tiến trình (process). Một tiến trình có thể ở cùng máy hoặc khác máy, miễn là chúng có thể giao tiếp thông qua giao thức TCP/IP.",
      "Một socket được xác định duy nhất bởi cặp `(IP address, port number)`. Trong đó:\n- **IP Address**: Định danh thiết bị trong mạng.\n- **Port Number**: Định danh ứng dụng cụ thể đang lắng nghe trên thiết bị đó.",
      "Khi hai tiến trình muốn trao đổi dữ liệu, chúng phải thiết lập một kết nối giữa **client socket** và **server socket**. Client gửi yêu cầu kết nối, server chấp nhận và hai bên bắt đầu trao đổi dữ liệu qua dòng byte.",

      "---",
      "## 2. Giao thức truyền thông: TCP vs UDP",
      "Java hỗ trợ hai giao thức truyền thông chính thông qua các lớp socket khác nhau:",
      "- **TCP (Transmission Control Protocol)**: đảm bảo tính tin cậy, dữ liệu đến đích theo đúng thứ tự và không bị mất mát. Phù hợp với ứng dụng cần tính toàn vẹn dữ liệu cao như HTTP, FTP, email, hoặc truyền file.\n- **UDP (User Datagram Protocol)**: không đảm bảo dữ liệu đến nơi hoặc theo thứ tự, nhưng tốc độ nhanh hơn. Phù hợp với streaming, VoIP hoặc game online.",
      "Trong Java:\n- TCP được hiện thực qua `Socket` (client) và `ServerSocket` (server).\n- UDP được hiện thực qua `DatagramSocket` và `DatagramPacket`.",
      "Ví dụ: Khi bạn xây dựng ứng dụng chat hoặc truyền file, TCP là lựa chọn hiển nhiên. Nhưng với game bắn súng trực tuyến hoặc truyền hình trực tiếp, UDP giúp giảm độ trễ đáng kể.",

      "---",
      "## 3. Cấu trúc lập trình client-server trong Java",
      "Một mô hình client-server TCP bao gồm hai phần chính:\n- **Server**: lắng nghe kết nối trên một cổng cố định, chấp nhận client và xử lý yêu cầu.\n- **Client**: khởi tạo kết nối tới server, gửi yêu cầu và nhận phản hồi.",
      "Sơ đồ hoạt động tổng quát:",
      "```text\nClient                    Server\n  |                           |\n  |  Kết nối (Socket)  --->   |\n  |                           |--- accept() ---> tạo socket riêng cho client\n  |  Gửi dữ liệu      --->   |\n  |  <--- Nhận phản hồi       |\n  |                           |\n```",
      "Dưới đây là ví dụ hoàn chỉnh cho một ứng dụng **Echo Server** — một chương trình cơ bản nhưng chứa đầy đủ nguyên tắc cốt lõi của lập trình mạng.",

      "---",
      "## 4. Ví dụ: Ứng dụng Echo Server (TCP)",
      "### Server Side – Lắng nghe và phản hồi",
      '```java\nimport java.io.*;\nimport java.net.*;\n\npublic class EchoServer {\n    public static void main(String[] args) {\n        final int PORT = 5000;\n        try (ServerSocket serverSocket = new ServerSocket(PORT)) {\n            System.out.println("Server đang lắng nghe tại cổng " + PORT);\n\n            // Vòng lặp để chấp nhận nhiều client nối tiếp nhau\n            while (true) {\n                Socket clientSocket = serverSocket.accept();\n                System.out.println("Client kết nối từ: " + clientSocket.getInetAddress());\n\n                try (\n                    BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));\n                    PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true)\n                ) {\n                    String message;\n                    while ((message = in.readLine()) != null) {\n                        System.out.println("Nhận từ client: " + message);\n                        out.println("Echo: " + message);\n                        if (message.equalsIgnoreCase("exit")) break;\n                    }\n                } catch (IOException e) {\n                    System.err.println("Lỗi khi xử lý client: " + e.getMessage());\n                }\n                clientSocket.close();\n            }\n        } catch (IOException e) {\n            System.err.println("Không thể khởi động server: " + e.getMessage());\n        }\n    }\n}\n```',

      "### Client Side – Gửi và nhận dữ liệu",
      '```java\nimport java.io.*;\nimport java.net.*;\n\npublic class EchoClient {\n    public static void main(String[] args) {\n        final String HOST = "localhost";\n        final int PORT = 5000;\n\n        try (Socket socket = new Socket(HOST, PORT);\n             BufferedReader console = new BufferedReader(new InputStreamReader(System.in));\n             PrintWriter out = new PrintWriter(socket.getOutputStream(), true);\n             BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()))) {\n\n            System.out.println("Đã kết nối tới server tại " + HOST + ":" + PORT);\n            System.out.println("Nhập tin nhắn (gõ \'exit\' để thoát):");\n\n            String input;\n            while ((input = console.readLine()) != null) {\n                out.println(input);\n                String response = in.readLine();\n                System.out.println("Server phản hồi: " + response);\n                if (input.equalsIgnoreCase("exit")) break;\n            }\n        } catch (IOException e) {\n            System.err.println("Lỗi kết nối: " + e.getMessage());\n        }\n    }\n}\n```',
      "Chương trình trên thể hiện một vòng đời kết nối TCP đầy đủ:\n1. Client khởi tạo socket tới địa chỉ IP và cổng của server.\n2. Server chấp nhận kết nối, tạo socket riêng cho client.\n3. Hai bên trao đổi dữ liệu thông qua `InputStream` và `OutputStream`.\n4. Khi client gửi “exit”, cả hai bên đóng kết nối an toàn.",

      "---",
      "## 5. Quản lý tài nguyên và xử lý lỗi trong thực tế",
      "Sau khi làm việc với nhiều ứng dụng socket, có vài nguyên tắc quan trọng mà bạn nên tuân thủ:",
      "1. **Đóng tài nguyên đúng cách**: Luôn sử dụng `try-with-resources` để đảm bảo socket và stream được đóng tự động.\n2. **Xử lý lỗi mạng có kiểm soát**: Mạng là môi trường không ổn định. Hãy xử lý `SocketTimeoutException`, `ConnectException`, và ghi log hợp lý thay vì để ứng dụng dừng đột ngột.\n3. **Thiết lập timeout**: Đặt `socket.setSoTimeout(milliseconds)` để tránh việc đọc/ghi bị treo vô thời hạn.\n4. **Tách luồng xử lý (multi-threading)**: Mỗi client nên được xử lý bởi một thread riêng hoặc `ExecutorService`, giúp server phục vụ nhiều kết nối đồng thời.\n5. **Thiết kế giao thức riêng (Application Protocol)**: Đừng gửi text tự do. Hãy thống nhất cấu trúc gói tin, ví dụ: JSON hoặc custom delimiter, để server hiểu chính xác ý nghĩa của dữ liệu.",

      "---",
      "## 6. Mở rộng: Xây dựng Server đa luồng",
      "Một server thực tế phải phục vụ nhiều client cùng lúc. Ta có thể mở rộng ví dụ trên bằng cách tạo luồng riêng cho mỗi client:",
      '```java\nclass ClientHandler implements Runnable {\n    private Socket socket;\n\n    public ClientHandler(Socket socket) {\n        this.socket = socket;\n    }\n\n    @Override\n    public void run() {\n        try (\n            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));\n            PrintWriter out = new PrintWriter(socket.getOutputStream(), true)\n        ) {\n            String msg;\n            while ((msg = in.readLine()) != null) {\n                System.out.println("Client gửi: " + msg);\n                out.println("[Server phản hồi] " + msg);\n                if (msg.equalsIgnoreCase("exit")) break;\n            }\n        } catch (IOException e) {\n            System.err.println("Lỗi khi xử lý client: " + e.getMessage());\n        } finally {\n            try { socket.close(); } catch (IOException ignored) {}\n        }\n    }\n}\n\npublic class MultiThreadedServer {\n    public static void main(String[] args) {\n        final int PORT = 6000;\n        try (ServerSocket serverSocket = new ServerSocket(PORT)) {\n            System.out.println("Server đa luồng đang chạy tại cổng " + PORT);\n            while (true) {\n                Socket clientSocket = serverSocket.accept();\n                new Thread(new ClientHandler(clientSocket)).start();\n            }\n        } catch (IOException e) {\n            System.err.println("Không thể khởi động server: " + e.getMessage());\n        }\n    }\n}\n```',
      "Mỗi khi một client kết nối, server tạo một `Thread` mới để xử lý nó. Điều này giúp server có thể xử lý đồng thời hàng chục hoặc hàng trăm kết nối mà không bị nghẽn. Trong thực tế, bạn nên dùng `ExecutorService` để tái sử dụng luồng hiệu quả hơn.",

      "---",
      "## 7. Kết luận và hướng phát triển",
      "Lập trình socket trong Java là nền tảng cho mọi loại giao tiếp mạng. Nắm vững nó giúp bạn hiểu cách hoạt động của HTTP, FTP, MQTT, WebSocket và nhiều giao thức khác ở tầng cao hơn.",
      "Các bước tiếp theo mà bạn có thể nghiên cứu để mở rộng kiến thức:\n- Tạo server hỗ trợ nhiều client và nhiều loại thông điệp.\n- Tích hợp cơ chế mã hóa dữ liệu (AES, RSA) để bảo mật truyền thông.\n- Kết hợp Java NIO (non-blocking I/O) để đạt hiệu năng cao hơn.\n- Viết giao thức riêng cho ứng dụng của bạn (ví dụ: custom chat protocol).",
      "Khi hiểu rõ cơ chế hoạt động của socket, bạn không chỉ viết được chương trình hoạt động ổn định hơn, mà còn hiểu sâu hơn về **nguyên lý truyền thông trong mạng máy tính** – thứ vẫn là cốt lõi của mọi hệ thống phân tán hiện đại.",
    ],
  },

  "tcp-vs-udp-java": {
    content: [
      "## TCP vs UDP trong Java: Chọn đúng công cụ cho đúng công việc",
      "Khi làm việc với lập trình mạng trong Java, việc lựa chọn giữa TCP và UDP không chỉ là vấn đề kỹ thuật — mà còn là chiến lược thiết kế. Cả hai giao thức đều phục vụ mục tiêu khác nhau: TCP đảm bảo độ tin cậy, trong khi UDP tối ưu cho tốc độ và độ trễ thấp. Hiểu rõ cách hoạt động, ưu điểm và hạn chế của mỗi giao thức là bước quan trọng để bạn thiết kế hệ thống mạng đúng hướng.",
      "Bài viết này đi sâu vào cách TCP và UDP vận hành trong Java, cách hiện thực chúng, và các tình huống thực tế để bạn biết chính xác nên dùng giao thức nào trong từng bối cảnh cụ thể.",

      "---",
      "## 1. Tổng quan cơ chế hoạt động của TCP và UDP",
      "### TCP (Transmission Control Protocol)",
      "TCP là giao thức **hướng kết nối (connection-oriented)**, nghĩa là trước khi trao đổi dữ liệu, hai bên phải thiết lập một phiên kết nối ổn định. Dữ liệu được truyền dưới dạng luồng byte liên tục và được đảm bảo không mất mát, không trùng lặp, đúng thứ tự.",
      "Cơ chế chính của TCP bao gồm:",
      "- **Three-way Handshake** để thiết lập kết nối (SYN → SYN-ACK → ACK).",
      "- **Đánh số thứ tự (Sequence Number)** và **ACK** để xác nhận dữ liệu đã đến nơi.",
      "- **Cơ chế truyền lại (Retransmission)** nếu gói tin bị mất.",
      "- **Kiểm soát luồng (Flow Control)** và **Kiểm soát tắc nghẽn (Congestion Control)** nhằm tránh quá tải mạng.",
      "TCP giống như một đường ống hai chiều an toàn giữa hai tiến trình. Một khi đường ống được mở, bạn có thể gửi dữ liệu liên tục và tin tưởng rằng tất cả sẽ đến nơi chính xác.",

      "### UDP (User Datagram Protocol)",
      "Ngược lại, UDP là **giao thức không kết nối (connectionless)**. Mỗi gói tin (datagram) được gửi đi độc lập, không có đảm bảo về việc đến đích, thứ tự hay trùng lặp. UDP chỉ đơn giản gửi dữ liệu nhanh nhất có thể — chính vì thế mà nó cực kỳ nhanh, nhưng không đáng tin cậy.",
      "Các đặc điểm chính của UDP:",
      "- Không cần thiết lập kết nối trước khi gửi.",
      "- Không có xác nhận hay kiểm soát lỗi ở tầng giao thức.",
      "- Không đảm bảo thứ tự gói tin.",
      "- Mỗi datagram được xử lý độc lập.",
      "UDP giống như việc bạn gửi nhiều bức thư không hồi đáp — nhanh, nhẹ, nhưng không chắc người nhận có đọc đủ tất cả.",

      "---",
      "## 2. Triển khai TCP trong Java: Bảo đảm độ tin cậy",
      "Java cung cấp lớp `ServerSocket` cho phía server và `Socket` cho phía client để hiện thực giao tiếp TCP.",
      "### Ví dụ Server TCP đơn giản",
      '```java\nimport java.io.*;\nimport java.net.*;\n\npublic class TCPServer {\n    public static void main(String[] args) {\n        final int PORT = 8888;\n        try (ServerSocket serverSocket = new ServerSocket(PORT)) {\n            System.out.println("TCP Server đang lắng nghe tại cổng " + PORT);\n\n            while (true) {\n                Socket clientSocket = serverSocket.accept();\n                System.out.println("Kết nối mới từ " + clientSocket.getInetAddress());\n\n                try (\n                    BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));\n                    PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true)\n                ) {\n                    String message = in.readLine();\n                    out.println("Đã nhận: " + message);\n                }\n                clientSocket.close();\n            }\n        } catch (IOException e) {\n            System.err.println("Lỗi TCP Server: " + e.getMessage());\n        }\n    }\n}\n```',

      "### Ví dụ Client TCP đơn giản",
      '```java\nimport java.io.*;\nimport java.net.*;\n\npublic class TCPClient {\n    public static void main(String[] args) {\n        final String HOST = "localhost";\n        final int PORT = 8888;\n\n        try (Socket socket = new Socket(HOST, PORT);\n             BufferedReader console = new BufferedReader(new InputStreamReader(System.in));\n             PrintWriter out = new PrintWriter(socket.getOutputStream(), true);\n             BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()))) {\n\n            System.out.print("Nhập dữ liệu gửi đến server: ");\n            String input = console.readLine();\n            out.println(input);\n\n            String response = in.readLine();\n            System.out.println("Phản hồi từ server: " + response);\n        } catch (IOException e) {\n            System.err.println("Lỗi TCP Client: " + e.getMessage());\n        }\n    }\n}\n```',
      "Với TCP, Java tự động quản lý việc đánh số gói tin, truyền lại nếu mất, và đảm bảo dữ liệu được gửi đến đúng thứ tự. Điều này khiến TCP lý tưởng cho các ứng dụng cần độ tin cậy tuyệt đối.",

      "### Khi nào chọn TCP",
      "- Giao tiếp giữa trình duyệt và web server (HTTP/HTTPS).",
      "- Truyền file hoặc dữ liệu lớn cần chính xác tuyệt đối (FTP, SFTP).",
      "- Giao tiếp cơ sở dữ liệu (MySQL, PostgreSQL).",
      "- API RESTful hoặc SOAP dựa trên HTTP.",
      "- Email, tin nhắn, hoặc bất kỳ ứng dụng nào cần toàn vẹn dữ liệu.",

      "---",
      "## 3. Triển khai UDP trong Java: Tối đa hóa tốc độ",
      "UDP hoạt động nhanh và nhẹ hơn nhiều vì không cần bắt tay hoặc xác nhận. Trong Java, bạn làm việc với UDP qua `DatagramSocket` và `DatagramPacket`.",
      "### Ví dụ UDP Server",
      '```java\nimport java.net.*;\n\npublic class UDPServer {\n    public static void main(String[] args) {\n        final int PORT = 9876;\n        byte[] buffer = new byte[1024];\n\n        try (DatagramSocket serverSocket = new DatagramSocket(PORT)) {\n            System.out.println("UDP Server đang chạy tại cổng " + PORT);\n\n            while (true) {\n                DatagramPacket packet = new DatagramPacket(buffer, buffer.length);\n                serverSocket.receive(packet); // Chờ nhận dữ liệu\n\n                String received = new String(packet.getData(), 0, packet.getLength());\n                System.out.println("Nhận từ client: " + received);\n\n                String response = "Server nhận: " + received;\n                byte[] sendData = response.getBytes();\n                DatagramPacket sendPacket = new DatagramPacket(\n                    sendData, sendData.length, packet.getAddress(), packet.getPort()\n                );\n                serverSocket.send(sendPacket);\n            }\n        } catch (Exception e) {\n            System.err.println("Lỗi UDP Server: " + e.getMessage());\n        }\n    }\n}\n```',

      "### Ví dụ UDP Client",
      '```java\nimport java.net.*;\n\npublic class UDPClient {\n    public static void main(String[] args) {\n        final String HOST = "localhost";\n        final int PORT = 9876;\n\n        try (DatagramSocket socket = new DatagramSocket()) {\n            String message = "Xin chào server";\n            byte[] sendData = message.getBytes();\n\n            InetAddress address = InetAddress.getByName(HOST);\n            DatagramPacket sendPacket = new DatagramPacket(sendData, sendData.length, address, PORT);\n            socket.send(sendPacket);\n\n            byte[] buffer = new byte[1024];\n            DatagramPacket receivePacket = new DatagramPacket(buffer, buffer.length);\n            socket.receive(receivePacket);\n\n            String response = new String(receivePacket.getData(), 0, receivePacket.getLength());\n            System.out.println("Phản hồi từ server: " + response);\n        } catch (Exception e) {\n            System.err.println("Lỗi UDP Client: " + e.getMessage());\n        }\n    }\n}\n```',

      "### Khi nào chọn UDP",
      "- Streaming video/audio (RTSP, RTP).",
      "- VoIP (Voice over IP).",
      "- Game trực tuyến thời gian thực (đồng bộ vị trí, hành động).",
      "- DNS lookup hoặc các truy vấn nhanh một chiều.",
      "- Gửi dữ liệu cảm biến trong IoT, nơi mất mát nhỏ có thể chấp nhận được.",

      "---",
      "## 4. So sánh chuyên sâu: TCP vs UDP trong thực tế",
      "| Tiêu chí | TCP | UDP |\n|-----------|------|-----|\n| Kết nối | Có (connection-oriented) | Không (connectionless) |\n| Độ tin cậy | Cao – đảm bảo dữ liệu đến đúng thứ tự | Thấp – không đảm bảo nhận hoặc thứ tự |\n| Kiểm soát lỗi | Có (ACK, retransmit) | Không |\n| Tốc độ | Chậm hơn (do overhead quản lý) | Nhanh hơn (do không cần xác nhận) |\n| Độ trễ | Cao hơn | Rất thấp |\n| Ứng dụng tiêu biểu | HTTP, FTP, Email, Database | VoIP, Video, Game, DNS |\n| Lớp trong Java | Socket, ServerSocket | DatagramSocket, DatagramPacket |",

      "---",
      "## 5. Best Practices và lỗi thường gặp",
      "Khi làm việc với TCP hoặc UDP trong Java, có một số lưu ý giúp bạn tránh lỗi phổ biến:",
      "1. **Đặt timeout hợp lý**: Với TCP, dùng `socket.setSoTimeout()` để tránh treo. Với UDP, timeout giúp phát hiện khi gói tin bị mất.\n2. **Đừng gửi dữ liệu quá lớn qua UDP**: Giới hạn kích thước datagram khoảng 64KB. Nếu lớn hơn, hãy chia nhỏ hoặc dùng TCP.\n3. **Đóng socket đúng cách**: Luôn gọi `close()` hoặc dùng `try-with-resources` để tránh rò rỉ tài nguyên.\n4. **Đừng giả định UDP luôn nhanh hơn TCP**: Trong mạng có nhiều mất mát, việc gửi lại ở tầng ứng dụng có thể khiến UDP chậm hơn TCP.\n5. **Giám sát băng thông**: Với ứng dụng real-time, cần cân nhắc giữa tốc độ gửi dữ liệu và khả năng xử lý của mạng.",

      "---",
      "## 6. Kết luận: Không có giao thức nào “tốt hơn” – chỉ có giao thức phù hợp hơn",
      "TCP và UDP đều có vị trí riêng trong lập trình mạng. Lựa chọn phụ thuộc vào đặc điểm ứng dụng:",
      "- Nếu bạn cần **độ chính xác và toàn vẹn dữ liệu**, hãy chọn **TCP**.\n- Nếu bạn cần **tốc độ, phản hồi nhanh và độ trễ thấp**, hãy chọn **UDP**.",
      "Trong nhiều hệ thống phức tạp, việc kết hợp cả hai giao thức là lựa chọn tối ưu. Ví dụ, game online có thể dùng UDP cho dữ liệu vị trí (real-time) và TCP cho chat hoặc cập nhật cấu hình.",
      "Hiểu sâu cơ chế hoạt động của TCP và UDP không chỉ giúp bạn viết code mạng chính xác hơn, mà còn giúp bạn **tư duy như một kỹ sư hệ thống** — người biết chọn đúng công cụ cho đúng mục tiêu.",
    ],
  },
  "java-multithreaded-socket-programming": {
    content: [
      "## Lập trình Socket đa luồng trong Java: Xử lý hàng nghìn kết nối đồng thời",
      "Trong lập trình mạng, xử lý nhiều client cùng lúc là một trong những thách thức lớn nhất. Một server đơn luồng chỉ có thể phục vụ một client tại một thời điểm, dẫn đến nghẽn cổ chai khi có nhiều kết nối. Giải pháp chính là **đa luồng (multithreading)**, cho phép mỗi client được phục vụ bởi một luồng riêng biệt, giúp hệ thống hoạt động mượt mà hơn.",
      "---",
      "## 1. Mô hình hoạt động của server đa luồng",
      "Server TCP đa luồng thường tuân theo quy trình sau:\n1. Khởi tạo `ServerSocket` để lắng nghe kết nối.\n2. Khi một client kết nối, chấp nhận socket mới bằng `accept()`.\n3. Tạo một luồng mới để xử lý client đó.\n4. Quay lại lắng nghe các kết nối tiếp theo.",
      "Sơ đồ khái quát:",
      "```text\n+----------------------+          +----------------------+\n|      Main Thread     |          |     ClientHandler    |\n|----------------------|          |----------------------|\n| accept() kết nối     |<-------> | đọc/ghi dữ liệu      |\n| tạo Thread mới       |          | đóng socket khi xong |\n+----------------------+          +----------------------+\n```",
      "---",
      "## 2. Ví dụ: Multi-threaded TCP Server cơ bản",
      "Dưới đây là ví dụ một server có khả năng xử lý đồng thời nhiều client:",
      '```java\nimport java.io.*;\nimport java.net.*;\n\npublic class MultiThreadedServer {\n    public static void main(String[] args) {\n        final int PORT = 8888;\n        try (ServerSocket serverSocket = new ServerSocket(PORT)) {\n            System.out.println("Server đang chạy tại cổng " + PORT);\n\n            while (true) {\n                Socket clientSocket = serverSocket.accept();\n                System.out.println("Kết nối mới từ: " + clientSocket.getInetAddress());\n                new Thread(new ClientHandler(clientSocket)).start();\n            }\n        } catch (IOException e) {\n            System.err.println("Lỗi khi khởi động server: " + e.getMessage());\n        }\n    }\n}\n\nclass ClientHandler implements Runnable {\n    private Socket clientSocket;\n\n    public ClientHandler(Socket socket) {\n        this.clientSocket = socket;\n    }\n\n    @Override\n    public void run() {\n        try (\n            BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));\n            PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true)\n        ) {\n            String message;\n            while ((message = in.readLine()) != null) {\n                System.out.println("Client gửi: " + message);\n                out.println("Server nhận: " + message);\n                if (message.equalsIgnoreCase("exit")) break;\n            }\n        } catch (IOException e) {\n            System.err.println("Lỗi xử lý client: " + e.getMessage());\n        } finally {\n            try { clientSocket.close(); } catch (IOException ignored) {}\n            System.out.println("Client đã ngắt kết nối.");\n        }\n    }\n}\n```',
      "---",
      "## 3. Sử dụng Thread Pool để tối ưu hiệu năng",
      "Khi số lượng client lớn, việc tạo mới một thread cho mỗi kết nối sẽ tốn tài nguyên. Thay vào đó, ta có thể sử dụng `ExecutorService` để tái sử dụng luồng.",
      '```java\nimport java.io.*;\nimport java.net.*;\nimport java.util.concurrent.*;\n\npublic class ThreadPoolServer {\n    public static void main(String[] args) {\n        final int PORT = 9000;\n        ExecutorService pool = Executors.newFixedThreadPool(10); // Tối đa 10 luồng xử lý song song\n\n        try (ServerSocket serverSocket = new ServerSocket(PORT)) {\n            System.out.println("ThreadPool Server đang chạy tại cổng " + PORT);\n\n            while (true) {\n                Socket clientSocket = serverSocket.accept();\n                pool.execute(new ClientTask(clientSocket));\n            }\n        } catch (IOException e) {\n            System.err.println("Lỗi server: " + e.getMessage());\n        }\n    }\n}\n\nclass ClientTask implements Runnable {\n    private final Socket socket;\n\n    public ClientTask(Socket socket) {\n        this.socket = socket;\n    }\n\n    @Override\n    public void run() {\n        try (\n            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));\n            PrintWriter out = new PrintWriter(socket.getOutputStream(), true)\n        ) {\n            String input;\n            while ((input = in.readLine()) != null) {\n                System.out.println("[" + Thread.currentThread().getName() + "] Nhận: " + input);\n                out.println("Server trả lời: " + input);\n            }\n        } catch (IOException e) {\n            System.err.println("Lỗi xử lý client: " + e.getMessage());\n        } finally {\n            try { socket.close(); } catch (IOException ignored) {}\n        }\n    }\n}\n```',
      "---",
      "## 4. Một số lưu ý quan trọng",
      "1. **Thread Pool** giúp tránh việc tạo hàng nghìn luồng không kiểm soát, cải thiện hiệu năng.\n2. **Đồng bộ hóa tài nguyên chung**: Nếu các client cùng ghi vào một log file hoặc counter, cần dùng `synchronized` hoặc `ReentrantLock` để tránh race condition.\n3. **Timeout**: Đặt `socket.setSoTimeout()` để tránh việc luồng bị treo vô thời hạn khi client không phản hồi.\n4. **Graceful shutdown**: Khi tắt server, hãy đóng `ExecutorService` bằng `shutdown()` để đảm bảo các luồng đang chạy được hoàn tất.",
      "---",
      "## 5. Kết luận",
      "Lập trình socket đa luồng là nền tảng cho mọi server quy mô lớn — từ chat server, game server đến hệ thống phân tán. Việc hiểu rõ cách tạo, quản lý, và tối ưu luồng sẽ giúp bạn xây dựng ứng dụng có khả năng mở rộng cao và hoạt động ổn định trong môi trường thực tế.",
    ],
  },
  "http-client-java": {
    content: [
      "## Gửi HTTP Requests trong Java: HttpURLConnection vs HttpClient (So sánh chuyên sâu)",
      "Trong bất kỳ ứng dụng nào có liên quan đến giao tiếp với server, việc gửi HTTP requests là một tác vụ thường xuyên. Trước đây, Java chỉ có thể làm điều này thông qua `HttpURLConnection` – một API cổ điển nhưng cồng kềnh. Từ Java 11, `HttpClient` đã xuất hiện, mang lại cú pháp hiện đại, mạnh mẽ và dễ bảo trì hơn nhiều.",
      "Bài viết này cung cấp hướng dẫn chi tiết, ví dụ thực tiễn, và so sánh chuyên sâu giữa hai phương pháp, giúp bạn chọn đúng công cụ cho từng hoàn cảnh.",
      "---",
      "## 1. HttpURLConnection – API truyền thống (Pre-Java 11)",
      "`HttpURLConnection` là một lớp thuộc `java.net` tồn tại từ những phiên bản đầu tiên của Java. Mặc dù hiệu quả và đơn giản, API này đòi hỏi lập trình viên phải xử lý thủ công hầu hết các tác vụ: từ cấu hình header, đọc dữ liệu phản hồi, cho đến việc đóng luồng (stream).",
      "### Ví dụ: Gửi HTTP GET request với HttpURLConnection",
      '```java\nimport java.io.*;\nimport java.net.*;\n\npublic class LegacyHttpClient {\n    public static String sendGet(String urlStr) throws IOException {\n        URL url = new URL(urlStr);\n        HttpURLConnection conn = (HttpURLConnection) url.openConnection();\n\n        conn.setRequestMethod("GET");\n        conn.setConnectTimeout(5000);\n        conn.setReadTimeout(5000);\n\n        int status = conn.getResponseCode();\n        if (status == HttpURLConnection.HTTP_OK) {\n            BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));\n            StringBuilder response = new StringBuilder();\n            String line;\n            while ((line = in.readLine()) != null) {\n                response.append(line);\n            }\n            in.close();\n            return response.toString();\n        } else {\n            return "Request thất bại, mã phản hồi: " + status;\n        }\n    }\n}\n```',
      "### Gửi HTTP POST request với dữ liệu JSON",
      '```java\npublic static String sendPost(String urlStr, String jsonData) throws IOException {\n    URL url = new URL(urlStr);\n    HttpURLConnection conn = (HttpURLConnection) url.openConnection();\n\n    conn.setRequestMethod("POST");\n    conn.setRequestProperty("Content-Type", "application/json; utf-8");\n    conn.setDoOutput(true);\n    conn.setConnectTimeout(5000);\n    conn.setReadTimeout(5000);\n\n    try (OutputStream os = conn.getOutputStream()) {\n        byte[] input = jsonData.getBytes("utf-8");\n        os.write(input, 0, input.length);\n    }\n\n    BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream(), "utf-8"));\n    StringBuilder response = new StringBuilder();\n    String line;\n    while ((line = reader.readLine()) != null) {\n        response.append(line.trim());\n    }\n    reader.close();\n    return response.toString();\n}\n```',
      "Mặc dù hoạt động ổn định, code với `HttpURLConnection` thường dài dòng, khó bảo trì và không hỗ trợ request bất đồng bộ. Bạn phải tự quản lý việc đọc luồng dữ liệu, xử lý lỗi và kết nối.",
      "---",
      "## 2. HttpClient – API hiện đại (Java 11+)",
      "Từ Java 11, gói `java.net.http` được giới thiệu, cung cấp lớp `HttpClient` – một API thiết kế hiện đại, hướng đối tượng, hỗ trợ **HTTP/2**, **bất đồng bộ**, và **cú pháp fluent builder** giúp mã ngắn gọn và dễ đọc hơn.",
      "### Ví dụ: Gửi HTTP GET request với HttpClient",
      "```java\nimport java.io.IOException;\nimport java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\nimport java.time.Duration;\n\npublic class ModernHttpClient {\n    public static String sendGet(String uri) throws IOException, InterruptedException {\n        HttpClient client = HttpClient.newHttpClient();\n        HttpRequest request = HttpRequest.newBuilder()\n                .uri(URI.create(uri))\n                .timeout(Duration.ofSeconds(5))\n                .GET()\n                .build();\n\n        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n        return response.body();\n    }\n}\n```",
      "### Gửi HTTP POST request với dữ liệu JSON",
      '```java\npublic static String sendPost(String uri, String jsonData) throws IOException, InterruptedException {\n    HttpClient client = HttpClient.newHttpClient();\n    HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(uri))\n            .timeout(Duration.ofSeconds(5))\n            .header("Content-Type", "application/json")\n            .POST(HttpRequest.BodyPublishers.ofString(jsonData))\n            .build();\n\n    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n    return response.body();\n}\n```',
      "---",
      "## 3. Gửi request bất đồng bộ (Asynchronous HTTP Request)",
      "Một trong những tính năng mạnh nhất của `HttpClient` là khả năng gửi request bất đồng bộ, giúp ứng dụng không bị chặn luồng chính trong khi chờ phản hồi từ server.",
      '```java\nimport java.util.concurrent.*;\nimport java.net.http.*;\nimport java.net.URI;\n\npublic class AsyncHttpClientExample {\n    public static void main(String[] args) {\n        HttpClient client = HttpClient.newHttpClient();\n\n        HttpRequest request = HttpRequest.newBuilder()\n                .uri(URI.create("https://jsonplaceholder.typicode.com/posts/1"))\n                .build();\n\n        CompletableFuture<HttpResponse<String>> future = client.sendAsync(request, HttpResponse.BodyHandlers.ofString());\n\n        future.thenApply(HttpResponse::body)\n              .thenAccept(System.out::println)\n              .join();\n    }\n}\n```',
      "Với API bất đồng bộ, bạn có thể gửi hàng trăm request song song mà không cần tạo nhiều luồng thủ công. `CompletableFuture` giúp quản lý kết quả dễ dàng, và bạn có thể kết hợp các thao tác xử lý dữ liệu theo chuỗi.",
      "---",
      "## 4. So sánh HttpURLConnection vs HttpClient",
      "| Đặc điểm | HttpURLConnection | HttpClient (Java 11+) |\n|-----------|-------------------|-----------------------|\n| Cú pháp | Dài dòng, xử lý thủ công | Gọn gàng, fluent API |\n| HTTP/2 | Không hỗ trợ | Có hỗ trợ |\n| Bất đồng bộ | Không hỗ trợ | Có (CompletableFuture) |\n| Xử lý stream | Thủ công | Tự động, thân thiện hơn |\n| Quản lý header | Khó, phải set thủ công | Dễ, builder pattern |\n| Hỗ trợ cookie | Hạn chế | Có thể mở rộng dễ dàng |\n| Phiên bản Java | 1.1+ | 11+ |",
      "---",
      "## 5. Khi nào nên dùng phương pháp nào",
      "### Nên dùng HttpURLConnection khi:",
      "- Dự án của bạn chạy trên Java 8 hoặc cũ hơn.\n- Bạn chỉ cần gửi một vài request đơn giản, không cần bất đồng bộ.\n- Bạn muốn tránh thêm thư viện bên ngoài và cần sự tương thích cao.",
      "### Nên dùng HttpClient khi:",
      "- Bạn sử dụng Java 11 trở lên.\n- Ứng dụng cần gửi nhiều request song song hoặc xử lý dữ liệu lớn.\n- Cần hỗ trợ HTTP/2, timeout, và xử lý headers linh hoạt.\n- Bạn muốn code ngắn gọn, rõ ràng và dễ test hơn.",
      "---",
      "## 6. Kinh nghiệm thực tế và lời khuyên",
      "1. **Dùng `HttpClient` nếu có thể**: Cú pháp gọn hơn, an toàn hơn, hỗ trợ async và HTTP/2.\n2. **Giữ nguyên `HttpURLConnection`** nếu dự án yêu cầu tương thích Java 8 trở về trước.\n3. **Tránh re-create HttpClient liên tục**: Tạo một instance dùng chung, vì nó thread-safe và được tối ưu hóa kết nối nội bộ.\n4. **Luôn đặt timeout hợp lý** (`connectTimeout`, `readTimeout` hoặc `Duration.ofSeconds()`): Tránh treo ứng dụng khi server không phản hồi.\n5. **Đừng quên handle lỗi**: Sử dụng `HttpResponse.statusCode()` để kiểm tra phản hồi và xử lý exception đầy đủ.",
      "---",
      "## 7. Kết luận",
      "Việc chọn giữa `HttpURLConnection` và `HttpClient` phụ thuộc vào phiên bản Java và yêu cầu của dự án. Tuy nhiên, xu hướng hiện nay rõ ràng nghiêng về `HttpClient` nhờ cú pháp hiện đại, hiệu năng cao và hỗ trợ đa luồng, bất đồng bộ.",
      "Nếu bạn đang phát triển hệ thống microservice, API gateway, hay crawler, `HttpClient` là lựa chọn gần như bắt buộc. Còn với các ứng dụng Java cổ điển hoặc cần tương thích ngược, `HttpURLConnection` vẫn đủ tốt nếu được quản lý đúng cách.",
      "Việc hiểu rõ hai cách tiếp cận này không chỉ giúp bạn viết code HTTP hiệu quả, mà còn giúp bạn nắm bắt rõ hơn cách hoạt động của tầng giao tiếp mạng trong hệ sinh thái Java.",
    ],
  },
  "java-nio-networking": {
    content: [
      "## Lập trình mạng hiệu năng cao với Java NIO (Non-blocking I/O)",
      "Trong các ứng dụng mạng hiện đại, khả năng xử lý hàng nghìn kết nối đồng thời là yếu tố quyết định hiệu năng của server. Mô hình **blocking I/O** truyền thống của Java – nơi mỗi kết nối được gắn với một luồng riêng biệt – không còn đủ hiệu quả khi quy mô tăng lên. Đó là lý do Java giới thiệu **NIO (New Input/Output)** từ phiên bản Java 1.4, mang đến cách tiếp cận hoàn toàn khác: **Non-blocking I/O**.",
      "---",
      "## 1. Tư duy khác biệt: Blocking vs Non-blocking I/O",
      "Hãy tưởng tượng một server web xử lý 10.000 người dùng cùng lúc.",
      "- Với **blocking I/O**, mỗi client yêu cầu một thread. Nếu có 10.000 client, bạn cần 10.000 thread – tốn bộ nhớ, CPU và dễ gây deadlock.\n- Với **non-blocking I/O**, một hoặc vài thread có thể quản lý tất cả client. Bất kỳ socket nào có dữ liệu sẵn sàng thì mới được xử lý. Nhờ đó, tài nguyên được tận dụng tối đa.",
      "### Ví dụ minh họa sự khác biệt:",
      "```text\nBlocking I/O:\n   [Thread-1] --> socket1.read()  (đang chờ dữ liệu...)\n   [Thread-2] --> socket2.read()  (đang chờ dữ liệu...)\n   => Mỗi socket cần một thread riêng.\n\nNon-blocking I/O:\n   [Single Thread]\n     ├── socket1: chưa có dữ liệu → bỏ qua\n     ├── socket2: có dữ liệu → đọc\n     └── socket3: có dữ liệu → ghi\n   => Một thread quản lý hàng nghìn kết nối.\n```",
      "---",
      "## 2. Kiến trúc cốt lõi của Java NIO",
      "Java NIO được xây dựng dựa trên ba thành phần chính: **Buffer**, **Channel**, và **Selector**. Hiểu rõ mối quan hệ giữa chúng là chìa khóa để lập trình hiệu quả.",
      "### 1. Buffer – Bộ nhớ trung gian dữ liệu",
      "Thay vì đọc/ghi trực tiếp qua stream, NIO lưu dữ liệu vào `Buffer`. Đây là vùng bộ nhớ có thể truy cập ngẫu nhiên, hỗ trợ cả đọc và ghi.",
      '```java\nByteBuffer buffer = ByteBuffer.allocate(1024);\n\n// Ghi dữ liệu vào buffer\nbuffer.put("Hello NIO".getBytes());\n\n// Chuẩn bị buffer để đọc\nbuffer.flip();\n\nwhile (buffer.hasRemaining()) {\n    System.out.print((char) buffer.get());\n}\n```',
      "Các loại buffer phổ biến: `ByteBuffer`, `CharBuffer`, `IntBuffer`, `LongBuffer`…",
      "### 2. Channel – Kênh giao tiếp hai chiều",
      "`Channel` là cửa ngõ kết nối dữ liệu giữa hệ thống và buffer. Một channel có thể đọc hoặc ghi mà không chặn luồng hiện tại (nếu được cấu hình non-blocking).",
      '```java\nSocketChannel channel = SocketChannel.open(new InetSocketAddress("localhost", 8080));\nchannel.configureBlocking(false);\n\nByteBuffer buf = ByteBuffer.allocate(256);\nbuf.put("Ping".getBytes());\nbuf.flip();\n\nwhile (buf.hasRemaining()) {\n    channel.write(buf);\n}\n```',
      "Các loại channel phổ biến:\n- `SocketChannel` – giao tiếp TCP client.\n- `ServerSocketChannel` – lắng nghe kết nối TCP server.\n- `DatagramChannel` – làm việc với UDP.\n- `FileChannel` – đọc/ghi file theo non-blocking I/O.",
      "### 3. Selector – Bộ điều phối kết nối",
      "`Selector` cho phép một luồng theo dõi nhiều channel cùng lúc. Nó thông báo cho bạn biết khi nào channel sẵn sàng đọc/ghi hoặc có kết nối mới.",
      '```java\nSelector selector = Selector.open();\nServerSocketChannel serverChannel = ServerSocketChannel.open();\nserverChannel.bind(new InetSocketAddress(9000));\nserverChannel.configureBlocking(false);\nserverChannel.register(selector, SelectionKey.OP_ACCEPT);\n\nwhile (true) {\n    selector.select(); // Chờ đến khi có sự kiện\n    Iterator<SelectionKey> keys = selector.selectedKeys().iterator();\n\n    while (keys.hasNext()) {\n        SelectionKey key = keys.next();\n        keys.remove();\n\n        if (key.isAcceptable()) {\n            SocketChannel client = serverChannel.accept();\n            client.configureBlocking(false);\n            client.register(selector, SelectionKey.OP_READ);\n            System.out.println("Client mới kết nối");\n        } else if (key.isReadable()) {\n            SocketChannel client = (SocketChannel) key.channel();\n            ByteBuffer buffer = ByteBuffer.allocate(256);\n            int bytesRead = client.read(buffer);\n            if (bytesRead == -1) {\n                client.close();\n                continue;\n            }\n            buffer.flip();\n            System.out.println("Nhận: " + new String(buffer.array(), 0, bytesRead));\n        }\n    }\n}\n```',
      "Trong ví dụ trên, **một luồng duy nhất** có thể quản lý nhiều kết nối nhờ `Selector` – mỗi lần chỉ xử lý các socket thực sự có dữ liệu.",
      "---",
      "## 3. Khi nào nên dùng Java NIO?",
      "Không phải lúc nào NIO cũng tốt hơn I/O truyền thống. Dưới đây là hướng dẫn lựa chọn:",
      "| Tình huống | Nên dùng | Giải thích |\n|-------------|-----------|-------------|\n| Server cần xử lý hàng nghìn client đồng thời | **NIO** | Non-blocking giúp tránh tạo hàng nghìn thread |\n| Ứng dụng chat, game, API gateway | **NIO** | Độ trễ thấp, hiệu năng cao |\n| Ứng dụng nhỏ, ít kết nối | **IO truyền thống** | Đơn giản, dễ triển khai |\n| Xử lý file nhỏ, không yêu cầu đồng thời | **IO truyền thống** | Tránh độ phức tạp không cần thiết |",
      "---",
      "## 4. Lưu ý khi lập trình với NIO",
      "1. **Hiểu rõ trạng thái của buffer** – biết khi nào cần `flip()`, `clear()`, `compact()` để tránh lỗi logic.\n2. **Đừng quên remove key** sau khi xử lý (`keys.remove()`), nếu không selector sẽ xử lý lại sự kiện cũ.\n3. **Đặt channel ở non-blocking mode** bằng `channel.configureBlocking(false)` – nếu quên, code sẽ hoạt động như I/O cũ.\n4. **Xử lý lỗi cẩn thận** – nếu một client ngắt kết nối, phải `close()` channel để tránh leak.\n5. **Kết hợp với thread pool hoặc Reactor pattern** để đạt hiệu năng cao trong hệ thống lớn.",
      "---",
      "## 5. NIO trong các framework hiện đại",
      "Các framework như **Netty**, **Vert.x**, hay **Spring WebFlux** đều được xây dựng dựa trên nền tảng NIO. Chúng tận dụng mô hình event-driven, giúp server có thể xử lý hàng chục nghìn kết nối mà không tạo hàng chục nghìn luồng.",
      "Điều này chứng minh rằng hiểu NIO không chỉ giúp bạn lập trình socket hiệu quả hơn mà còn giúp bạn hiểu nền tảng của các công nghệ hiện đại như microservices, reactive systems hay non-blocking APIs.",
      "---",
      "## 6. Kết luận",
      "Java NIO là bước tiến lớn trong cách Java xử lý I/O. Nó mang lại khả năng mở rộng và hiệu năng vượt trội, đặc biệt trong các ứng dụng cần xử lý song song hàng loạt kết nối. Tuy nhiên, lập trình NIO đòi hỏi sự cẩn trọng cao và hiểu biết vững chắc về mô hình event-driven.",
      "Nếu bạn cần tối đa hóa hiệu năng hệ thống mạng, NIO là lựa chọn đáng đầu tư. Nhưng nếu bạn đang xây dựng ứng dụng nhỏ, IO truyền thống vẫn là giải pháp nhanh chóng và dễ hiểu hơn.",
    ],
  },
  "nodejs-networking-basics": {
    content: [
      "## Lập trình mạng trong Node.js: Hiểu rõ sức mạnh bất đồng bộ",
      "Trước khi Node.js xuất hiện, JavaScript chỉ được biết đến như một ngôn ngữ chạy trong trình duyệt. Tuy nhiên, khi **Ryan Dahl** giới thiệu Node.js vào năm 2009, ông đã thay đổi hoàn toàn cục diện. Với mô hình **event-driven** (hướng sự kiện) và **non-blocking I/O** (I/O không chặn), Node.js trở thành lựa chọn hàng đầu cho lập trình mạng, đặc biệt trong các ứng dụng cần hiệu năng cao như chat app, game server, và hệ thống streaming.",
      "---",
      "## 1. Kiến trúc Non-blocking I/O trong Node.js",
      "Node.js hoạt động dựa trên **event loop** – một vòng lặp sự kiện đơn luồng, nhưng có khả năng xử lý hàng nghìn kết nối song song. Khi một tác vụ I/O (đọc file, nhận dữ liệu socket, gọi API) được gọi, Node.js không chờ đợi mà chuyển việc đó cho hệ điều hành. Khi tác vụ hoàn tất, hệ điều hành sẽ gửi thông báo ngược lại (callback).",
      "Điều này giúp Node.js tránh được vấn đề nghẽn luồng (blocking), thứ thường xảy ra trong mô hình đa luồng truyền thống.",
      "### Minh họa cơ bản:",
      "```text\n[Client] --> gửi yêu cầu đến Server\n[Server Thread]\n   ├─> Ghi nhận yêu cầu, giao cho hệ điều hành xử lý I/O\n   ├─> Tiếp tục nhận yêu cầu khác (không chặn)\n   └─> Khi I/O hoàn tất → callback được kích hoạt\n```",
      "### Mô hình này mang lại 3 lợi ích chính:",
      "1. **Hiệu suất cao** – Một luồng duy nhất có thể quản lý hàng nghìn kết nối.\n2. **Tiết kiệm tài nguyên** – Không cần tạo luồng riêng cho mỗi client.\n3. **Phù hợp cho ứng dụng thời gian thực** – Dữ liệu được xử lý ngay khi sẵn sàng.",
      "---",
      "## 2. Xây dựng server TCP đầu tiên với module `net`",
      "Module `net` trong Node.js cung cấp API cấp thấp để tạo server TCP và client socket. Đây là nền tảng cho các module cấp cao hơn như `http`, `https`, hay `ws` (WebSocket).",
      "```javascript\n// File: tcp_server.js\nconst net = require('net');\n\n// Tạo một server TCP\nconst server = net.createServer((socket) => {\n  console.log('Client mới đã kết nối:', socket.remoteAddress);\n\n  // Gửi thông điệp chào mừng\n  socket.write('Chào mừng bạn đến với TCP Server Node.js!\\n');\n\n  // Lắng nghe dữ liệu từ client\n  socket.on('data', (data) => {\n    const message = data.toString().trim();\n    console.log(`Nhận được từ client: ${message}`);\n\n    // Gửi lại dữ liệu (echo)\n    socket.write(`Server đã nhận: ${message}\\n`);\n\n    // Nếu client gửi 'exit', đóng kết nối\n    if (message.toLowerCase() === 'exit') {\n      socket.end('Tạm biệt!\\n');\n    }\n  });\n\n  // Khi client ngắt kết nối\n  socket.on('end', () => {\n    console.log('Client đã ngắt kết nối.');\n  });\n\n  // Xử lý lỗi socket\n  socket.on('error', (err) => {\n    console.error('Lỗi socket:', err.message);\n  });\n});\n\n// Server lắng nghe tại địa chỉ và cổng\nconst HOST = '127.0.0.1';\nconst PORT = 4000;\nserver.listen(PORT, HOST, () => {\n  console.log(`Server đang chạy tại tcp://${HOST}:${PORT}`);\n});\n```",
      "### Giải thích từng phần:",
      "- `net.createServer(callback)`: Tạo server TCP. Callback được gọi khi có client kết nối mới.\n- `socket`: Đại diện cho kết nối giữa server và client (đối tượng `Duplex Stream`).\n- `socket.on('data', callback)`: Bắt sự kiện khi có dữ liệu đến từ client.\n- `socket.write(data)`: Gửi dữ liệu từ server về client.\n- `socket.end()`: Đóng kết nối an toàn.\n- `server.listen(port, host)`: Bắt đầu lắng nghe kết nối.",
      "---",
      "## 3. Tạo TCP Client để kiểm thử",
      "Chúng ta có thể viết một TCP client đơn giản để kiểm tra server.",
      "```javascript\n// File: tcp_client.js\nconst net = require('net');\n\nconst client = new net.Socket();\nclient.connect(4000, '127.0.0.1', () => {\n  console.log('Đã kết nối đến server!');\n  client.write('Xin chào server!');\n});\n\nclient.on('data', (data) => {\n  console.log('Phản hồi từ server:', data.toString());\n});\n\nclient.on('close', () => {\n  console.log('Kết nối đã đóng.');\n});\n```",
      "Chạy thử bằng lệnh:\n```bash\nnode tcp_server.js\n# Mở terminal khác:\nnode tcp_client.js\n```",
      "Bạn sẽ thấy server phản hồi lại các tin nhắn từ client ngay lập tức – đó là minh chứng cho cơ chế **event-driven** và **non-blocking** trong Node.js.",
      "---",
      "## 4. So sánh Node.js với các mô hình mạng khác",
      "| Đặc điểm | Node.js | Java (Blocking I/O) | Java NIO | Python (threaded server) |\n|-----------|----------|---------------------|-----------|--------------------------|\n| Luồng xử lý | 1 (event loop) | 1 thread / client | 1 thread / nhiều client | 1 thread / client |\n| Khả năng mở rộng | Rất cao | Trung bình | Cao | Trung bình |\n| Cơ chế I/O | Non-blocking | Blocking | Non-blocking | Blocking |\n| Mức độ phức tạp | Thấp | Thấp | Cao | Thấp |\n| Thích hợp cho | Realtime apps, API, Chat | App nhỏ | Game server, API lớn | Script nhỏ |",
      "---",
      "## 5. Mở rộng: Giới thiệu về EventEmitter & Streams",
      "Node.js xây dựng hầu hết các thành phần mạng của mình dựa trên **EventEmitter** và **Stream**:\n- `socket` trong `net` là một **Duplex Stream** – có thể vừa đọc vừa ghi.\n- Sự kiện như `data`, `end`, `error` đều kế thừa từ `EventEmitter`.\n- Điều này cho phép lập trình viên dễ dàng mở rộng, tái sử dụng và lồng ghép các mô hình event-driven phức tạp hơn.",
      "Ví dụ nhỏ với `EventEmitter`:\n```javascript\nconst EventEmitter = require('events');\nclass ChatServer extends EventEmitter {}\nconst chat = new ChatServer();\n\nchat.on('message', (msg) => {\n  console.log('Tin nhắn:', msg);\n});\n\nchat.emit('message', 'Xin chào Node.js NIO!');\n```",
      "---",
      "## 6. Kết luận",
      "Node.js không chỉ là một runtime JavaScript – nó là một nền tảng mạng mạnh mẽ, đơn luồng nhưng có thể xử lý hàng nghìn kết nối đồng thời nhờ mô hình bất đồng bộ. Việc nắm vững module `net`, `events`, và `stream` sẽ giúp bạn hiểu sâu cách Node.js hoạt động bên dưới các framework phổ biến như Express, Socket.IO, hay NestJS.",
      "Hiểu về lập trình mạng trong Node.js chính là bước đầu tiên để bạn tạo ra các ứng dụng realtime đẳng cấp, từ chat app, server game cho đến microservices hiệu năng cao.",
    ],
  },
  "websocket-realtime-apps  ": {
    content: [
      "Bạn đã bao giờ tự hỏi làm thế nào các ứng dụng chat, game online, hoặc các bảng điều khiển chứng khoán có thể cập nhật dữ liệu ngay lập tức mà không cần phải tải lại trang chưa? Câu trả lời không phải là HTTP, mà là một giao thức khác mạnh mẽ hơn nhiều: **WebSocket**.",
      "HTTP được xây dựng dựa trên mô hình yêu cầu-phản hồi (request-response). Client gửi yêu cầu, server trả về phản hồi, và kết nối bị ngắt. Để có dữ liệu mới, client lại phải gửi một yêu cầu khác. Điều này hiệu quả cho các trang web tĩnh, nhưng lại kém tối ưu cho ứng dụng thời gian thực.",
      "WebSocket đã thay đổi cuộc chơi. Thay vì một kết nối ngắn ngủi, nó thiết lập một kênh giao tiếp **hai chiều, liên tục** giữa client và server. Giống như một cuộc điện thoại, cả hai bên có thể nói chuyện cùng lúc mà không cần phải tắt máy và gọi lại. ",
      "---",
      "## Ưu điểm vượt trội của WebSocket",
      "WebSocket không chỉ là một sự lựa chọn thay thế, mà là một bước tiến lớn cho các ứng dụng thời gian thực:",
      "1.  **Giao tiếp hai chiều (Full-Duplex)**: Client và server có thể gửi dữ liệu cho nhau bất cứ lúc nào, không cần chờ đợi. Điều này tạo ra sự tương tác mượt mà và tức thì.",
      "2.  **Độ trễ thấp (Low Latency)**: Sau khi kết nối được thiết lập, không có thêm header HTTP cồng kềnh nào được gửi đi nữa. Các gói tin rất nhỏ, giúp giảm đáng kể độ trễ.",
      "3.  **Hiệu quả cao**: Chỉ cần một kết nối duy nhất được duy trì. Điều này giảm gánh nặng lên server và giảm lượng dữ liệu truyền qua mạng.",
      "---",
      "## WebSocket hoạt động như thế nào?",
      'Quá trình thiết lập kết nối WebSocket bắt đầu bằng một "bước nâng cấp" (upgrade) từ HTTP. Client gửi một yêu cầu HTTP đặc biệt đến server, bao gồm header `Upgrade: websocket`. Nếu server hỗ trợ giao thức này, nó sẽ trả lời bằng một phản hồi đồng ý. Sau đó, kết nối HTTP sẽ được chuyển đổi thành một kết nối WebSocket liên tục.',
      "Kể từ lúc này, mọi giao tiếp sẽ diễn ra thông qua kết nối WebSocket, không còn bị ràng buộc bởi mô hình yêu cầu-phản hồi của HTTP nữa.",
      "---",
      "## Ví dụ: WebSocket với JavaScript",
      "WebSockets được tích hợp sẵn trong tất cả các trình duyệt hiện đại, và việc sử dụng nó cực kỳ đơn giản.",
      "### Phía Client (Browser):",
      "```javascript\nconst socket = new WebSocket('ws://localhost:8080');\n\nsocket.onopen = function(e) {\n  console.log('[open] Kết nối đã được thiết lập');\n  socket.send('Xin chào từ client!');\n};\n\nsocket.onmessage = function(event) {\n  console.log(`[message] Dữ liệu nhận được: ${event.data}`);\n};\n\nsocket.onclose = function(event) {\n  console.log(`[close] Kết nối bị đóng, code: ${event.code}, reason: ${event.reason}`);\n};\n\nsocket.onerror = function(error) {\n  console.log(`[error] ${error.message}`);\n};\n```",
      "### Phía Server (Node.js với thư viện `ws`):",
      "```javascript\nconst WebSocket = require('ws');\n\nconst wss = new WebSocket.Server({ port: 8080 });\n\nwss.on('connection', function connection(ws) {\n  console.log('Một client mới đã kết nối!');\n\n  ws.on('message', function incoming(message) {\n    console.log(`Dữ liệu nhận được: ${message}`);\n\n    // Gửi lại dữ liệu cho client\n    ws.send(`Server đã nhận: ${message}`);\n  });\n});\n\nconsole.log('WebSocket server đang chạy tại port 8080');\n```",
      "Bạn thấy đấy, mô hình này đơn giản nhưng cực kỳ mạnh mẽ, cho phép bạn xây dựng các ứng dụng có khả năng cập nhật dữ liệu gần như ngay lập tức.",
      "---",
      "## Kết luận",
      "WebSocket là công cụ không thể thiếu cho bất kỳ ai muốn phát triển các ứng dụng có tính năng thời gian thực. Nó giải quyết triệt để những hạn chế của HTTP và mở ra một kỷ nguyên mới cho web. Từ các game online, ứng dụng chat, đến các công cụ quản lý thời gian thực, tất cả đều đang được xây dựng trên nền tảng vững chắc của WebSocket. Hãy thử nghiệm với nó để đưa ứng dụng của bạn lên một tầm cao mới nhé!",
    ],
  },
  "express-rest-api": {
    content: [
      "Trong lập trình web hiện đại, **RESTful API** là nền tảng giao tiếp giữa client và server. Thay vì gửi HTML hoàn chỉnh, server chỉ cung cấp dữ liệu (thường là JSON) để client tự hiển thị. Đây là nguyên tắc cốt lõi của kiến trúc ứng dụng hiện đại, từ web app đến mobile app.",
      "Một RESTful API tuân theo 4 nguyên tắc cơ bản: **stateless**, **client-server**, **cacheable** và **uniform interface**. Mỗi hành động CRUD (Create, Read, Update, Delete) được ánh xạ trực tiếp vào các phương thức HTTP: `POST`, `GET`, `PUT`, `DELETE`. Và để hiện thực hoá một API như vậy một cách nhanh chóng, **Express.js** là lựa chọn hàng đầu.",
      "Express.js là một framework nhẹ, linh hoạt cho Node.js. Nó không bắt buộc cấu trúc thư mục phức tạp, không ép bạn theo một khuôn mẫu cố định, mà cung cấp đúng những gì cần thiết để triển khai API một cách tối giản, hiệu quả, và có khả năng mở rộng.",
      "---",
      "## 1. Khởi tạo và cấu hình dự án Express.js",
      "Trước hết, khởi tạo một dự án Node.js và cài đặt Express.js:",
      "```bash\nnpm init -y\nnpm install express\n```",
      "Tạo file `app.js` làm điểm khởi đầu cho ứng dụng:",
      "```javascript\n// File: app.js\nconst express = require('express');\nconst app = express();\nconst port = 3000;\n\n// Middleware để tự động parse JSON trong body request\napp.use(express.json());\n\n// Định nghĩa route GET đơn giản\napp.get('/', (req, res) => {\n  res.send('Chào mừng đến với RESTful API sử dụng Express.js');\n});\n\n// Lắng nghe cổng 3000\napp.listen(port, () => {\n  console.log(`Server đang chạy tại http://localhost:${port}`);\n});\n```",
      "Khi chạy `node app.js`, bạn sẽ có một server hoạt động ngay. Dòng `app.use(express.json())` giúp Express tự động chuyển phần thân (body) của các request JSON thành đối tượng JavaScript trong `req.body`. Đây là bước thiết yếu trước khi bạn thao tác với dữ liệu gửi từ client.",
      "---",
      "## 2. Xây dựng tài nguyên RESTful đầu tiên",
      "Giả sử chúng ta cần xây dựng một API quản lý người dùng. Dữ liệu tạm thời sẽ được lưu trong một mảng JavaScript, mô phỏng cơ sở dữ liệu:",
      "```javascript\nlet users = [\n  { id: 1, name: 'Alice', email: 'alice@example.com' },\n  { id: 2, name: 'Bob', email: 'bob@example.com' }\n];\n```",
      "Giờ chúng ta sẽ định nghĩa các endpoint RESTful tương ứng với từng hành động CRUD:",
      "```javascript\n// Lấy toàn bộ danh sách người dùng\napp.get('/users', (req, res) => {\n  res.status(200).json(users);\n});\n\n// Lấy thông tin chi tiết của một người dùng theo id\napp.get('/users/:id', (req, res) => {\n  const id = parseInt(req.params.id);\n  const user = users.find(u => u.id === id);\n  if (user) {\n    res.status(200).json(user);\n  } else {\n    res.status(404).json({ message: 'Không tìm thấy người dùng.' });\n  }\n});\n\n// Thêm người dùng mới\napp.post('/users', (req, res) => {\n  const { name, email } = req.body;\n  if (!name || !email) {\n    return res.status(400).json({ message: 'Thiếu thông tin name hoặc email.' });\n  }\n  const newUser = {\n    id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,\n    name,\n    email\n  };\n  users.push(newUser);\n  res.status(201).json(newUser);\n});\n\n// Cập nhật thông tin người dùng\napp.put('/users/:id', (req, res) => {\n  const id = parseInt(req.params.id);\n  const { name, email } = req.body;\n  const user = users.find(u => u.id === id);\n  if (!user) {\n    return res.status(404).json({ message: 'Không tìm thấy người dùng.' });\n  }\n  user.name = name || user.name;\n  user.email = email || user.email;\n  res.status(200).json(user);\n});\n\n// Xóa người dùng khỏi danh sách\napp.delete('/users/:id', (req, res) => {\n  const id = parseInt(req.params.id);\n  const initialLength = users.length;\n  users = users.filter(u => u.id !== id);\n  if (users.length < initialLength) {\n    res.status(204).send(); // Thành công, không có nội dung trả về\n  } else {\n    res.status(404).json({ message: 'Không tìm thấy người dùng để xóa.' });\n  }\n});\n```",
      "Mỗi endpoint trên tương ứng với một hành động HTTP tiêu chuẩn trong REST:",
      "- `GET /users`: Trả về danh sách tất cả người dùng.\n- `GET /users/:id`: Trả về thông tin người dùng cụ thể.\n- `POST /users`: Thêm một người dùng mới.\n- `PUT /users/:id`: Cập nhật dữ liệu của người dùng hiện có.\n- `DELETE /users/:id`: Xóa người dùng khỏi hệ thống.",
      "Các phương thức này phản ánh đúng triết lý REST — thao tác trên tài nguyên thông qua HTTP verb và định danh (URI).",
      "---",
      "## 3. Middleware và xử lý lỗi nâng cao",
      "Trong ứng dụng thực tế, API cần có khả năng xử lý lỗi tập trung để dễ bảo trì. Express cho phép bạn khai báo middleware tùy chỉnh cho mục đích này:",
      "```javascript\n// Middleware kiểm tra Content-Type\napp.use((req, res, next) => {\n  if (req.method !== 'GET' && req.headers['content-type'] !== 'application/json') {\n    return res.status(415).json({ message: 'Yêu cầu phải có Content-Type: application/json' });\n  }\n  next();\n});\n\n// Middleware xử lý lỗi tổng quát\napp.use((err, req, res, next) => {\n  console.error('Lỗi:', err.stack);\n  res.status(500).json({ message: 'Đã xảy ra lỗi trên server.' });\n});\n```",
      "Middleware là điểm mạnh lớn nhất của Express. Bạn có thể sử dụng nó để kiểm tra xác thực, ghi log, giới hạn truy cập, hoặc chuyển hướng request. Mọi request đi qua chuỗi middleware theo thứ tự, cho đến khi được xử lý hoặc trả về response.",
      "---",
      "## 4. Tổ chức cấu trúc dự án chuyên nghiệp hơn",
      "Khi dự án lớn dần, bạn nên tách code ra thành nhiều module để dễ quản lý:",
      "```text\nproject/\n├── app.js\n├── routes/\n│   └── users.js\n└── data/\n    └── users.js\n```",
      "Ví dụ: trong `routes/users.js`, ta định nghĩa riêng các route cho người dùng:",
      "```javascript\nconst express = require('express');\nconst router = express.Router();\nlet users = require('../data/users');\n\nrouter.get('/', (req, res) => res.json(users));\nrouter.post('/', (req, res) => {\n  const { name, email } = req.body;\n  const newUser = { id: users.length + 1, name, email };\n  users.push(newUser);\n  res.status(201).json(newUser);\n});\n\nmodule.exports = router;\n```",
      "Sau đó, trong `app.js`, chỉ cần import route này vào:\n```javascript\nconst userRoutes = require('./routes/users');\napp.use('/users', userRoutes);\n```",
      "Cấu trúc này giúp code rõ ràng, dễ bảo trì, và tách biệt giữa các tầng: routing, logic, và dữ liệu.",
      "---",
      "## 5. Kết luận: Sức mạnh đến từ sự đơn giản",
      "Express.js không có nhiều tính năng rườm rà — chính điều đó khiến nó linh hoạt và mạnh mẽ. Bạn có thể bắt đầu từ một file duy nhất, rồi dần dần mở rộng thành một kiến trúc hoàn chỉnh với router, middleware, validation, authentication và caching.",
      "RESTful API không chỉ là cách truyền dữ liệu, mà là một mô hình tư duy — giúp bạn thiết kế hệ thống rõ ràng, thống nhất và dễ mở rộng. Express.js là công cụ lý tưởng để hiện thực hóa mô hình đó trong thế giới Node.js.",
      "Khi đã nắm vững nền tảng này, bạn có thể dễ dàng tích hợp với cơ sở dữ liệu (MySQL, MongoDB, PostgreSQL), thêm xác thực JWT, hoặc kết hợp cùng các frontend như React và Next.js để xây dựng ứng dụng hoàn chỉnh từ backend đến giao diện người dùng.",
    ],
  },
  "socketio-nodejs": {
    content: [
      "Bạn đã bao giờ tự hỏi vì sao các ứng dụng như Messenger, Slack, hay TradingView có thể cập nhật dữ liệu ngay tức thì mà không cần reload lại trang? 🤔",
      "Câu trả lời không phải là HTTP, mà là **WebSocket** – một giao thức cho phép **truyền dữ liệu hai chiều (bi-directional)** giữa client và server trong thời gian thực.",
      "Nhưng nếu WebSocket là trái tim, thì **Socket.IO** chính là bộ não điều khiển — nó biến các gói tin thô của WebSocket thành một hệ thống giao tiếp mạnh mẽ, có khả năng tự phục hồi, mở rộng và tổ chức theo sự kiện.",
      "---",
      "## ⚡ WebSocket có giới hạn — và Socket.IO vượt qua chúng như thế nào?",
      "WebSocket thuần chỉ cung cấp kết nối hai chiều, nhưng không hỗ trợ fallback, reconnect hay broadcasting. Socket.IO thì khác — nó sinh ra để giải quyết các 'vết đau' này:",
      "1.  **Tự động kết nối lại (Auto Reconnect)**: Nếu client bị mất mạng, Socket.IO sẽ tự động thử kết nối lại theo chu kỳ tăng dần, có giới hạn retry, và thậm chí lưu lại tin nhắn đệm. Bạn không cần viết thêm 1 dòng code nào.",
      "2.  **Fallback thông minh**: Không phải trình duyệt nào cũng hỗ trợ WebSocket, đặc biệt là trong môi trường firewall hoặc proxy. Socket.IO có thể chuyển sang **HTTP Long-Polling** khi cần, đảm bảo kết nối không bao giờ bị 'chết yểu'.",
      "3.  **Phòng (Rooms) và Không gian (Namespaces)**: Cho phép phân nhóm người dùng, ví dụ: mỗi phòng chat, mỗi game lobby, hoặc mỗi dashboard riêng biệt — tất cả chạy song song mà không ảnh hưởng nhau.",
      "4.  **Sự kiện tùy chỉnh (Custom Events)**: Thay vì chỉ nhận tin nhắn dạng text, bạn có thể phát sự kiện tuỳ chỉnh như `orderPlaced`, `playerJoined`, hay `priceUpdated` và xử lý từng loại logic riêng biệt.",
      "5.  **Bảo mật và kiểm soát phiên (Authentication)**: Socket.IO hỗ trợ xác thực bằng JWT hoặc session cookie ngay khi handshake, giúp ngăn truy cập trái phép vào các kên private.",
      "---",
      "## 🧠 Kiến trúc tổng thể của Socket.IO",
      "Socket.IO bao gồm hai thành phần chính:",
      "- **Server**: chạy trên Node.js, lắng nghe kết nối và phát các sự kiện.\n- **Client**: là thư viện JavaScript trên trình duyệt, dùng để kết nối và gửi/nhận dữ liệu.",
      "```mermaid\nsequenceDiagram\n    participant Browser as Client\n    participant Node as Socket.IO Server\n    Browser->>Node: Kết nối (Handshake + Token)\n    Node-->>Browser: Xác nhận kết nối ✅\n    Browser-->>Node: Emit('chat message', data)\n    Node-->>Browser: Broadcast đến cùng phòng\n```",
      "---",
      "## 🧩 Bắt tay vào xây dựng: Chat Server có Rooms và Broadcast",
      "Chúng ta sẽ xây dựng một ứng dụng chat có thể chia phòng, gửi tin nhắn, và broadcast đến đúng nhóm người dùng.",
      "### 🔹 Bước 1: Cài đặt thư viện",
      "```bash\nnpm init -y\nnpm install express socket.io\n```",
      "### 🔹 Bước 2: Tạo file `server.js` và khởi tạo Socket.IO",
      "```js\nimport express from 'express';\nimport { createServer } from 'http';\nimport { Server } from 'socket.io';\n\nconst app = express();\nconst server = createServer(app);\nconst io = new Server(server, {\n  cors: {\n    origin: '*',\n    methods: ['GET', 'POST']\n  }\n});\n\napp.get('/', (req, res) => {\n  res.sendFile(__dirname + '/index.html');\n});\n\nserver.listen(3000, () => {\n  console.log('\\x1b[36mServer chạy tại:\\x1b[0m http://localhost:3000 🚀');\n});\n```",
      "### 🔹 Bước 3: Xử lý logic phòng (Rooms) và tin nhắn",
      "```js\nio.on('connection', (socket) => {\n  console.log(`🔌 Kết nối mới: ${socket.id}`);\n\n  // Khi người dùng tham gia phòng\n  socket.on('join-room', (room) => {\n    for (const r of socket.rooms) {\n      if (r !== socket.id) socket.leave(r);\n    }\n    socket.join(room);\n    console.log(`👥 ${socket.id} đã vào phòng ${room}`);\n    io.to(room).emit('system', `🟢 ${socket.id} đã tham gia phòng ${room}`);\n  });\n\n  // Khi người dùng gửi tin nhắn\n  socket.on('chat-message', (msg) => {\n    const room = Array.from(socket.rooms).find(r => r !== socket.id);\n    if (room) {\n      io.to(room).emit('chat-message', `💬 ${socket.id}: ${msg}`);\n    }\n  });\n\n  // Khi ngắt kết nối\n  socket.on('disconnect', () => {\n    console.log(`❌ ${socket.id} đã ngắt kết nối`);\n  });\n});\n```",
      "---",
      "## 💻 Bước 4: Tạo giao diện client với Socket.IO Client",
      "File `index.html`:",
      "```html\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <title>Socket.IO Chat</title>\n    <style>\n      body { font-family: Arial, sans-serif; background: #0d1117; color: #c9d1d9; }\n      input, button { padding: 8px; margin: 5px; border-radius: 5px; }\n      #messages { list-style: none; padding: 0; }\n      li { margin: 4px 0; background: #161b22; padding: 6px 10px; border-radius: 5px; }\n    </style>\n  </head>\n  <body>\n    <h2>💬 Chat App — Socket.IO</h2>\n    <form id=\"roomForm\">\n      <input id=\"room\" placeholder=\"Nhập tên phòng...\" required />\n      <button>Tham gia phòng</button>\n    </form>\n    <ul id=\"messages\"></ul>\n    <form id=\"msgForm\">\n      <input id=\"msg\" placeholder=\"Nhập tin nhắn...\" required />\n      <button>Gửi</button>\n    </form>\n\n    <script src=\"/socket.io/socket.io.js\"></script>\n    <script>\n      const socket = io();\n      const roomForm = document.getElementById('roomForm');\n      const msgForm = document.getElementById('msgForm');\n      const messages = document.getElementById('messages');\n\n      roomForm.addEventListener('submit', e => {\n        e.preventDefault();\n        const room = document.getElementById('room').value.trim();\n        if (room) socket.emit('join-room', room);\n      });\n\n      msgForm.addEventListener('submit', e => {\n        e.preventDefault();\n        const msg = document.getElementById('msg').value.trim();\n        if (msg) socket.emit('chat-message', msg);\n        document.getElementById('msg').value = '';\n      });\n\n      socket.on('chat-message', msg => {\n        const li = document.createElement('li');\n        li.innerHTML = `<span style='color:#58a6ff;'>${msg}</span>`;\n        messages.appendChild(li);\n      });\n\n      socket.on('system', msg => {\n        const li = document.createElement('li');\n        li.style.color = '#3fb950';\n        li.innerHTML = `<b>${msg}</b>`;\n        messages.appendChild(li);\n      });\n    </script>\n  </body>\n</html>\n```",
      "---",
      "## 🌐 Hoạt động của hệ thống",
      "1️⃣ Khi người dùng nhập tên phòng → emit sự kiện `'join-room'` đến server.\n\n2️⃣ Server xử lý và gán socket đó vào phòng tương ứng.\n\n3️⃣ Khi người dùng gửi tin nhắn → server sẽ phát lại (`io.to(room).emit`) cho tất cả các socket trong cùng phòng đó.\n\n4️⃣ Khi mất mạng, Socket.IO tự động reconnect, giúp giữ trải nghiệm liên tục.",
      "```bash\n# Mô phỏng dòng log trong terminal\n🔌 Kết nối mới: 1u8dAjk3\n👥 1u8dAjk3 đã vào phòng javascript\n💬 1u8dAjk3: Hello world!\n❌ 1u8dAjk3 đã ngắt kết nối\n```",
      "---",
      "## 🧰 Mở rộng và tối ưu",
      "Sau khi hiểu cơ bản, bạn có thể mở rộng với các tính năng nâng cao:",
      "- **Phân cụm (Clustering)**: Dùng Redis Adapter để mở rộng Socket.IO qua nhiều tiến trình.\n- **Xác thực (JWT)**: Kiểm tra token trước khi `connection`.\n- **Load Balancing**: Sử dụng Nginx hoặc HAProxy với sticky-session.\n- **Thống kê real-time**: Dùng Socket.IO + Chart.js để vẽ dashboard động.",
      "---",
      "## 🏁 Kết luận — Khi mọi gói tin đều mang nhịp đập thời gian thực",
      "Socket.IO không chỉ là một thư viện, mà là một **hệ sinh thái thời gian thực**. Nó xử lý mọi thứ mà WebSocket thuần không thể làm được: từ auto reconnect, fallback, rooms, namespaces cho tới bảo mật nâng cao.",
      "Nếu bạn đang xây dựng một ứng dụng **chat, game nhiều người chơi, dashboard giao dịch, hoặc hệ thống IoT**, thì Socket.IO chính là nền móng bạn cần.",
      "✨ Hãy thử ngay hôm nay — vì thế giới web thời gian thực đang chờ bạn chạm tới! 🌍",
    ],
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  // await params per Next.js dynamic API requirement
  const { slug } = await params;

  const post = blogPosts.find((p) => p.id === slug);

  if (!post) {
    notFound();
  }

  const content = blogContent[slug];

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

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
                  post.category === "Java"
                    ? "bg-primary/10 text-primary"
                    : "bg-accent/10 text-accent"
                }`}
              >
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight">
              {post.title}
            </h1>

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
                    <h2
                      key={index}
                      className="text-3xl font-bold mt-12 mb-6 text-foreground first:mt-0"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                } else if (paragraph.startsWith("### ")) {
                  return (
                    <h3
                      key={index}
                      className="text-2xl font-semibold mt-8 mb-4 text-foreground"
                    >
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                } else if (paragraph.includes("```")) {
                  const code = paragraph.split("```")[1];
                  return (
                    <pre
                      key={index}
                      className="bg-muted p-6 rounded-lg overflow-x-auto my-6 border border-border"
                    >
                      <code className="text-sm font-mono">{code}</code>
                    </pre>
                  );
                } else if (
                  paragraph.startsWith("**") ||
                  paragraph.includes("\n-")
                ) {
                  return (
                    <div
                      key={index}
                      className="my-6 text-foreground leading-relaxed whitespace-pre-line text-lg"
                    >
                      {paragraph}
                    </div>
                  );
                } else {
                  return (
                    <p
                      key={index}
                      className="mb-6 text-foreground leading-relaxed text-lg"
                    >
                      {paragraph}
                    </p>
                  );
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
            <h2 className="text-3xl font-bold mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                  <Card className="group relative overflow-hidden h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative p-6">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                          relatedPost.category === "Java"
                            ? "bg-primary/10 text-primary"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Xem Thêm Bài Viết
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Khám phá thêm các kiến thức lập trình mạng với Java và JavaScript.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
          >
            Xem Tất Cả
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </section>
    </main>
  );
}
