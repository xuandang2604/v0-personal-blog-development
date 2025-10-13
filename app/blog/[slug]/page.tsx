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
     "## Lập trình Socket trong Java: Hướng dẫn từ A đến Z",
      "Chào bạn, có bao giờ bạn tự hỏi làm thế nào mà các ứng dụng chat, game trực tuyến hay những phần mềm chia sẻ dữ liệu có thể giao tiếp với nhau qua mạng internet không? Phép màu đó không gì khác ngoài **lập trình Socket**. Đây là một trong những kỹ năng nền tảng và thiết yếu nhất cho bất kỳ ai muốn dấn thân vào thế giới lập trình mạng.",
      "Trong bài viết này, chúng ta sẽ cùng nhau khám phá mọi thứ về lập trình socket trong Java, từ những khái niệm cơ bản nhất đến việc xây dựng một ứng dụng chat đơn giản.",
      "---",
      "## Socket là gì? Hãy hình dung thật đơn giản",
      "Để dễ hình dung, hãy nghĩ về **socket** như một chiếc phích cắm trên tường. Để một thiết bị (chương trình) có thể kết nối với mạng điện (internet), nó cần phải được cắm vào một ổ điện (socket). Socket là một **điểm cuối (endpoint)** của một kênh giao tiếp hai chiều giữa hai chương trình đang chạy trên mạng. ",
      "Mỗi socket được định danh duy nhất bởi một cặp giá trị: **địa chỉ IP** của máy tính và **số hiệu cổng (port number)**. Địa chỉ IP giống như địa chỉ nhà của bạn, còn số hiệu cổng giống như số phòng trong ngôi nhà đó. Nhờ có cặp địa chỉ này, hệ điều hành biết chính xác dữ liệu được gửi đến là dành cho ứng dụng nào.",
      "## Hai loại Socket chính",
      "Trong lập trình mạng, chúng ta thường làm việc với hai loại socket phổ biến:",
      "- **TCP Socket (Transmission Control Protocol):** Cung cấp kết nối tin cậy và có thứ tự. Khi sử dụng TCP, dữ liệu được đảm bảo đến nơi và đến đúng thứ tự. Hãy tưởng tượng TCP giống như việc gửi thư bảo đảm: bạn biết chắc chắn thư sẽ đến tay người nhận và theo đúng trình tự. Đây là loại socket phổ biến nhất trong các ứng dụng web, chat, và truyền file.",
      "- **UDP Socket (User Datagram Protocol):** Cung cấp kết nối không tin cậy và không có thứ tự. Dữ liệu được gửi đi dưới dạng các gói độc lập (datagram). Gói dữ liệu có thể bị mất, lặp lại hoặc đến không theo thứ tự. UDP thường được sử dụng trong các ứng dụng yêu cầu tốc độ cao và chấp nhận rủi ro mất mát dữ liệu nhỏ, ví dụ như video streaming hoặc game online.",
      "Trong bài viết này, chúng ta sẽ tập trung vào **TCP Socket** vì tính tin cậy và dễ hiểu của nó.",
      "---",
      "## Xây dựng Server Socket: Người 'chủ nhà' lắng nghe",
      "Để bắt đầu một cuộc trò chuyện, chúng ta cần một người 'chủ nhà' để lắng nghe và chào đón 'khách'. Trong Java, vai trò này thuộc về class `java.net.ServerSocket`.",
      "```java\nimport java.net.ServerSocket;\n\npublic class MyServer {\n    public static void main(String[] args) {\n        try (ServerSocket serverSocket = new ServerSocket(8888)) {\n            System.out.println(\"Server đang lắng nghe trên cổng 8888...\");\n            \n            // Chờ đợi client kết nối\n            Socket clientSocket = serverSocket.accept();\n            System.out.println(\"Một client đã kết nối từ: \" + clientSocket.getInetAddress());\n            \n            // ... (Tiếp tục xử lý)\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}\n```",
      "Dòng code `new ServerSocket(8888)` sẽ tạo một socket 'nghe' trên cổng 8888. Quan trọng nhất là phương thức `serverSocket.accept()`. Phương thức này sẽ khiến chương trình **đứng yên (block)** cho đến khi có một client kết nối. Khi kết nối được thiết lập, `accept()` sẽ trả về một đối tượng `Socket` mới. **Đây là điểm cốt yếu**: `ServerSocket` chỉ để chấp nhận kết nối, còn việc giao tiếp thực tế với client lại do đối tượng `Socket` đảm nhận.",
      "---",
      "## Khởi tạo Client Socket: Người 'khách' ghé thăm",
      "Sau khi server đã sẵn sàng, chúng ta cần một client để kết nối. Class `java.net.Socket` là công cụ để làm điều đó.",
      "```java\nimport java.net.Socket;\n\npublic class MyClient {\n    public static void main(String[] args) {\n        String serverAddress = \"127.0.0.1\"; // Địa chỉ IP của máy chủ\n        int serverPort = 8888; // Cổng của máy chủ\n        \n        try (Socket socket = new Socket(serverAddress, serverPort)) {\n            System.out.println(\"Đã kết nối thành công đến server!\");\n            \n            // ... (Bắt đầu giao tiếp)\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}\n```",
      "Khi đối tượng `Socket` được khởi tạo, nó sẽ cố gắng kết nối đến địa chỉ IP và số hiệu cổng đã chỉ định. Nếu kết nối thành công, chương trình client sẽ tiếp tục chạy.",
      "---",
      "## Truyền dữ liệu: Nói chuyện bằng luồng (Streams)",
      "Khi kết nối đã được thiết lập, chúng ta cần một cách để gửi và nhận dữ liệu. Trong Java, mọi thứ đều được xử lý thông qua các luồng (streams).",
      "**Mỗi socket đều có hai luồng:**",
      "- **`InputStream`**: Để đọc dữ liệu được gửi đến từ phía bên kia.",
      "- **`OutputStream`**: Để ghi dữ liệu và gửi đi.",
      "Ví dụ, để gửi một thông điệp từ client đến server:",
      "```java\n// Lấy OutputStream từ socket\nOutputStream outputStream = socket.getOutputStream();\n// Ghi dữ liệu\noutputStream.write(\"Xin chào, Server!\".getBytes());\n```",
      "Và để server đọc dữ liệu đó:",
      "```java\n// Lấy InputStream từ socket\nInputStream inputStream = clientSocket.getInputStream();\n// Đọc dữ liệu\nbyte[] buffer = new byte[1024];\nint bytesRead = inputStream.read(buffer);\nString receivedMessage = new String(buffer, 0, bytesRead);\nSystem.out.println(\"Client nói: \" + receivedMessage);\n```",
      "Lưu ý rằng việc xử lý dữ liệu nhị phân (bytes) có thể hơi phức tạp. Để làm việc với chuỗi (String) hoặc các đối tượng phức tạp hơn, chúng ta thường bọc các luồng này trong các lớp như `PrintWriter` và `BufferedReader`.",
      "---",
      "## Kết luận và bước tiếp theo",
      "Lập trình socket trong Java cung cấp một cách tiếp cận đơn giản nhưng cực kỳ mạnh mẽ để xây dựng các ứng dụng mạng. Hiểu rõ cách hoạt động của `ServerSocket`, `Socket`, và các luồng dữ liệu là bước đầu tiên để phát triển các ứng dụng phân tán phức tạp hơn.",
      "Nếu bạn đã nắm vững những kiến thức cơ bản này, hãy thử thách bản thân bằng cách:",
      "- Xây dựng một ứng dụng chat đa luồng (multi-threaded) để server có thể xử lý nhiều client cùng lúc.",
      "- Triển khai một giao thức đơn giản để client và server có thể trao đổi các loại dữ liệu cụ thể, ví dụ như lệnh truy vấn hoặc thông tin về game.",
      "Chúc bạn thành công trên con đường trở thành một lập trình viên mạng chuyên nghiệp!"
    ],
  },
  "tcp-vs-udp-java": {
    content: [
       "Chào bạn, sau khi đã nắm vững kiến thức cơ bản về lập trình socket, một câu hỏi quan trọng khác sẽ nảy sinh: **Khi nào nên dùng TCP và khi nào nên dùng UDP?** TCP và UDP là hai giao thức truyền tải cốt lõi trong mạng máy tính, và việc lựa chọn đúng sẽ quyết định hiệu suất và độ tin cậy của ứng dụng bạn xây dựng.",
      "Mỗi giao thức đều có ưu và nhược điểm riêng. Hãy cùng đi sâu vào từng loại để hiểu rõ hơn nhé! ",
      "## TCP (Transmission Control Protocol): Người Giao Hàng Đáng Tin Cậy 📦",
      "Hãy hình dung TCP như dịch vụ chuyển phát nhanh có bảo hiểm. Nó sẽ đảm bảo gói hàng (dữ liệu) của bạn đến tay người nhận, nguyên vẹn và theo đúng thứ tự. TCP là một giao thức **hướng kết nối (connection-oriented)**, có nghĩa là trước khi gửi dữ liệu, nó phải thiết lập một kết nối an toàn với máy nhận.",
      "Trong Java, chúng ta sử dụng các class quen thuộc như `Socket` và `ServerSocket` để lập trình với TCP.",
      "### Ưu điểm vượt trội của TCP:",
      "- **Đảm bảo dữ liệu:** Không có gì bị thất lạc! TCP sử dụng cơ chế kiểm soát lỗi và truyền lại để đảm bảo mọi gói tin đều đến đích.",
      "- **Đúng thứ tự:** Các gói dữ liệu sẽ được đánh số và sắp xếp lại đúng trình tự khi đến nơi, giúp bạn không cần phải lo lắng về việc dữ liệu bị lộn xộn.",
      "- **Độ tin cậy cao:** Phù hợp tuyệt đối với những ứng dụng mà tính toàn vẹn của dữ liệu là quan trọng nhất.",
      "### Nhược điểm của TCP:",
      "- **Hiệu suất thấp hơn:** Quá trình thiết lập kết nối và kiểm tra lỗi khiến TCP chậm hơn so với UDP.",
      "- **Overhead cao:** Mỗi gói tin đều có thêm thông tin header để phục vụ cho việc kiểm soát, làm tăng kích thước của gói tin.",
      "---",
      "## UDP (User Datagram Protocol): Người Đưa Thư Nhanh Chóng 🚀",
      "Nếu TCP là chuyển phát nhanh, thì UDP giống như việc bạn gửi một bức thư thường. Bạn chỉ cần thả nó vào hòm thư và hy vọng nó sẽ đến nơi. UDP là giao thức **không kết nối (connectionless)**, có nghĩa là bạn có thể gửi dữ liệu đi ngay lập tức mà không cần thiết lập kết nối trước.",
      "Trong Java, chúng ta sử dụng `DatagramSocket` và `DatagramPacket` để làm việc với UDP.",
      "### Ưu điểm nổi bật của UDP:",
      "- **Tốc độ:** Vì bỏ qua các bước kiểm tra phức tạp, UDP có tốc độ truyền tải cực kỳ nhanh.",
      "- **Overhead thấp:** Kích thước header nhỏ gọn, giúp dữ liệu được truyền đi hiệu quả hơn.",
      "- **Hỗ trợ Broadcast & Multicast:** UDP cho phép bạn gửi một gói dữ liệu đến nhiều máy tính cùng lúc, điều mà TCP không thể làm.",
      "### Nhược điểm của UDP:",
      "- **Không tin cậy:** Gói dữ liệu có thể bị mất, lặp lại hoặc đến không đúng thứ tự.",
      "- **Không có kiểm soát lỗi:** Nếu gói tin bị hỏng, UDP sẽ không có cơ chế để sửa chữa hay gửi lại.",
      "---",
      "## Lựa chọn đúng: TCP hay UDP?",
      "Việc lựa chọn phụ thuộc hoàn toàn vào mục tiêu của ứng dụng bạn. Hãy nhớ quy tắc đơn giản sau:",
      "**Sử dụng TCP khi:**",
      "- **Tính toàn vẹn dữ liệu là số 1:** Ví dụ như khi bạn truyền một file, gửi email, hay xử lý các giao dịch tài chính.",
      "- **Độ tin cậy quan trọng hơn tốc độ:** Bạn thà chậm mà chắc, còn hơn là mất dữ liệu.",
      "**Sử dụng UDP khi:**",
      "- **Tốc độ là ưu tiên hàng đầu:** Ví dụ như trong game online, video streaming, hoặc VoIP (cuộc gọi thoại qua internet). Mất một vài gói tin không ảnh hưởng quá nhiều đến trải nghiệm.",
      "- **Bạn cần broadcast dữ liệu:** Gửi thông tin đến nhiều thiết bị cùng lúc trong mạng LAN.",
      "Hi vọng những phân tích này sẽ giúp bạn đưa ra lựa chọn sáng suốt cho dự án của mình! Hãy tiếp tục tìm hiểu và thực hành nhé."
    ],
  },
  "java-multithreaded-socket-programming": {
    "content": [
      "Bạn đã xây dựng được một server socket đơn giản, nhưng có một vấn đề lớn: server của bạn chỉ có thể phục vụ **một client tại một thời điểm**. Khi client đầu tiên kết nối, server sẽ bị 'đứng hình' và không thể chấp nhận bất kỳ kết nối nào khác cho đến khi client đó ngắt kết nối. Vậy làm thế nào để server có thể xử lý nhiều yêu cầu cùng lúc? Giải pháp chính là **Multithreading** – một kỹ thuật mạnh mẽ cho phép chương trình thực hiện nhiều tác vụ song song.",
      "---",
      "## Vấn đề của Server Đơn Luồng (Single-threaded) 😔",
      "Một server đơn luồng xử lý các yêu cầu theo tuần tự. Khi một client kết nối, server sẽ dành toàn bộ tài nguyên để giao tiếp với client đó. Nếu client gửi dữ liệu chậm, hoặc mất kết nối, các client khác sẽ phải chờ đợi. Điều này không hiệu quả và gần như không thể áp dụng cho các ứng dụng thực tế. ",
      "---",
      "## Giải pháp 1: Một luồng cho mỗi Client (Thread-per-Client) 💡",
      "Cách tiếp cận đơn giản và phổ biến nhất là tạo một luồng (thread) mới cho mỗi client kết nối. Khi server chấp nhận một kết nối mới, nó sẽ khởi tạo một luồng riêng để xử lý tất cả các hoạt động giao tiếp với client đó. Server chính sẽ quay lại lắng nghe và chờ đợi các kết nối tiếp theo.",
      "### Triển khai ClientHandler",
      "Chúng ta sẽ tạo một class riêng, chẳng hạn như `ClientHandler`, để xử lý logic cho từng client. Class này nên implement interface `Runnable` để có thể chạy trong một luồng độc lập.",
      "```java\n// File: ClientHandler.java\nimport java.io.*;\nimport java.net.Socket;\n\npublic class ClientHandler implements Runnable {\n    private Socket clientSocket;\n\n    public ClientHandler(Socket socket) {\n        this.clientSocket = socket;\n    }\n\n    @Override\n    public void run() {\n        try (BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));\n             PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true)) {\n\n            String inputLine;\n            while ((inputLine = in.readLine()) != null) {\n                System.out.println(\"Client \" + clientSocket.getInetAddress() + \" nói: \" + inputLine);\n                out.println(\"Server đã nhận: \" + inputLine);\n            }\n        } catch (IOException e) {\n            System.err.println(\"Lỗi xử lý client: \" + e.getMessage());\n        } finally {\n            try {\n                clientSocket.close();\n            } catch (IOException e) {\n                e.printStackTrace();\n            }\n        }\n    }\n}\n```",
      "```java\n// File: MultiThreadedServer.java\nimport java.net.*;\n\npublic class MultiThreadedServer {\n    public static void main(String[] args) {\n        final int PORT = 8888;\n        try (ServerSocket serverSocket = new ServerSocket(PORT)) {\n            System.out.println(\"Server đa luồng đang lắng nghe trên cổng \" + PORT + \"...\");\n            while (true) {\n                Socket clientSocket = serverSocket.accept();\n                System.out.println(\"Một client đã kết nối từ: \" + clientSocket.getInetAddress());\n                // Tạo và khởi chạy một luồng mới cho mỗi client\n                new Thread(new ClientHandler(clientSocket)).start();\n            }\n        } catch (IOException e) {\n            System.err.println(\"Lỗi Server: \" + e.getMessage());\n        }\n    }\n}\n```",
      "---",
      "## Giải pháp 2: Sử dụng Thread Pool (Hồ bơi luồng) 🏊‍♂️",
      "Mặc dù cách tiếp cận 'mỗi client một luồng' hoạt động tốt, nhưng việc tạo ra hàng ngàn luồng có thể tốn kém về tài nguyên và làm giảm hiệu suất. **Thread Pool** giải quyết vấn đề này bằng cách tái sử dụng các luồng. Thay vì tạo luồng mới cho mỗi client, chúng ta sẽ có một 'hồ bơi' chứa một số luồng đã được khởi tạo sẵn.",
      "```java\nimport java.net.*;\nimport java.io.IOException;\nimport java.util.concurrent.ExecutorService;\nimport java.util.concurrent.Executors;\n\npublic class ThreadPoolServer {\n    public static void main(String[] args) {\n        final int PORT = 8888;\n        final int POOL_SIZE = 10; // Kích thước hồ bơi luồng\n\n        // Tạo một Thread Pool với kích thước cố định\n        ExecutorService executor = Executors.newFixedThreadPool(POOL_SIZE);\n\n        try (ServerSocket serverSocket = new ServerSocket(PORT)) {\n            System.out.println(\"Server với Thread Pool đang lắng nghe trên cổng \" + PORT + \"...\");\n            while (true) {\n                Socket clientSocket = serverSocket.accept();\n                System.out.println(\"Một client đã kết nối từ: \" + clientSocket.getInetAddress());\n                // Giao việc xử lý client cho một luồng trong hồ bơi\n                executor.execute(new ClientHandler(clientSocket));\n            }\n        } catch (IOException e) {\n            System.err.println(\"Lỗi Server: \" + e.getMessage());\n        } finally {\n            executor.shutdown(); // Đóng hồ bơi khi server kết thúc\n        }\n    }\n}\n```",
      "---",
      "## An toàn luồng (Thread Safety) 🔒",
      "Khi nhiều luồng cùng truy cập và sửa đổi một tài nguyên dùng chung, các vấn đề về **thread safety** có thể xảy ra. Để đảm bảo ứng dụng hoạt động chính xác, bạn cần tuân thủ các nguyên tắc sau:",
      "- **Sử dụng `synchronized` blocks:** Giới hạn quyền truy cập vào các đoạn code quan trọng, chỉ cho phép một luồng được thực thi tại một thời điểm.",
      "- **Sử dụng Concurrent Collections:** Thay vì dùng `ArrayList` hay `HashMap` thông thường, hãy sử dụng các collection được thiết kế riêng cho môi trường đa luồng như `ConcurrentHashMap` hay `CopyOnWriteArrayList`.",
      "- **Hạn chế shared mutable state:** Cố gắng thiết kế ứng dụng sao cho mỗi luồng làm việc trên dữ liệu riêng của nó, tránh việc nhiều luồng cùng sửa đổi một biến chung.",
      "---",
      "## Những 'Best Practices' Không Thể Bỏ Qua ✅",
      "Để xây dựng một server socket đa luồng hiệu quả và ổn định, hãy ghi nhớ những lời khuyên sau:",
      "1. **Luôn dùng Thread Pool** thay vì tạo thread mới cho mỗi client.",
      "2. **Đặt timeout cho socket operations** để tránh trường hợp một luồng bị treo vô thời hạn.",
      "3. **Xử lý exceptions đúng cách** trong các luồng con để một client lỗi không làm sập toàn bộ server.",
      "4. **Đóng tài nguyên** (`sockets`, `streams`) trong `finally` block để đảm bảo chúng được giải phóng dù có lỗi xảy ra.",
      "5. **Monitor số lượng kết nối** đang hoạt động để có kế hoạch mở rộng phù hợp."
    ],
  },
  "http-client-java": {
    content: [
     "Bạn đã từng thắc mắc làm sao các ứng dụng Java có thể 'nói chuyện' với các API hay trang web chưa? Câu trả lời nằm ở việc gửi các **HTTP Request**. Trong thế giới Java, chúng ta có hai cách phổ biến để thực hiện điều này: sử dụng **HttpURLConnection** truyền thống và **HttpClient** hiện đại từ Java 11. Việc nắm vững cả hai sẽ giúp bạn xử lý mọi tác vụ mạng một cách hiệu quả.",
      "---",
      "## HttpURLConnection: Vị 'tiền bối' đáng tin cậy 👴",
      "**HttpURLConnection** là API cơ bản, 'lão làng' nhất, có mặt từ Java 1.1. Nó hoạt động tốt nhưng đòi hỏi bạn phải viết khá nhiều code để thiết lập kết nối, xử lý headers và đọc dữ liệu từ các luồng (streams).",
      "### Gửi GET Request",
      "Để gửi một GET request, bạn cần tạo một đối tượng `URL`, mở kết nối, thiết lập phương thức request và đọc mã phản hồi cùng với nội dung trả về. Hãy xem ví dụ sau để thấy rõ hơn:",
      "```java\nURL url = new URL(\"[https://api.example.com/data](https://api.example.com/data)\");\nHttpURLConnection conn = (HttpURLConnection) url.openConnection();\nconn.setRequestMethod(\"GET\");\n\nint responseCode = conn.getResponseCode();\nif (responseCode == HttpURLConnection.HTTP_OK) {\n    // Đọc nội dung từ InputStream\n    try (BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()))) {\n        String inputLine;\n        StringBuilder response = new StringBuilder();\n        while ((inputLine = in.readLine()) != null) {\n            response.append(inputLine);\n        }\n        // Xử lý response.toString()\n    }\n}\n```",
      "### Gửi POST Request",
      "Với POST request, ngoài việc thiết lập phương thức, bạn cần phải cho phép ghi dữ liệu (`setDoOutput(true)`) và sử dụng `OutputStream` để gửi dữ liệu đi. Đây là bước bắt buộc để truyền dữ liệu lên server.",
      "---",
      "## Java 11 HttpClient: Công cụ hiện đại, mạnh mẽ 💪",
      "Được giới thiệu từ Java 11, **HttpClient** mang đến một luồng gió mới với API gọn gàng hơn, dễ sử dụng hơn và hỗ trợ các tính năng hiện đại như HTTP/2 và xử lý bất đồng bộ (asynchronous).",
      "### Synchronous Request (Đồng bộ)",
      "Đây là cách đơn giản nhất để gửi request. Chương trình sẽ 'đứng chờ' cho đến khi nhận được toàn bộ phản hồi từ server. Cú pháp của nó cực kỳ trực quan:",
      "```java\nHttpClient client = HttpClient.newHttpClient();\nHttpRequest request = HttpRequest.newBuilder()\n        .uri(URI.create(\"[https://api.example.com/data](https://api.example.com/data)\"))\n        .build();\n\nHttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\nSystem.out.println(response.body());\n```",
      "### Asynchronous Request (Bất đồng bộ)",
      "Đây là điểm sáng của `HttpClient`. Thay vì chờ đợi, bạn có thể gửi request và để chương trình tiếp tục thực hiện các tác vụ khác. Kết quả sẽ được xử lý sau thông qua `CompletableFuture`, giúp tối ưu hóa hiệu suất ứng dụng của bạn.",
      "```java\nHttpClient client = HttpClient.newHttpClient();\nHttpRequest request = HttpRequest.newBuilder()\n        .uri(URI.create(\"[https://api.example.com/data](https://api.example.com/data)\"))\n        .build();\n\nclient.sendAsync(request, HttpResponse.BodyHandlers.ofString())\n        .thenApply(HttpResponse::body)\n        .thenAccept(System.out::println);\n```",
      "---",
      "## Lựa chọn nào phù hợp cho bạn?",
      "| Tiêu chí | HttpURLConnection | HttpClient (Java 11+) |\n| :--- | :--- | :--- |\n| **Phiên bản Java** | Có sẵn trong mọi phiên bản | Yêu cầu Java 11 trở lên |\n| **API** | Phức tạp, nhiều boilerplate code | Hiện đại, trực quan, dễ sử dụng |\n| **Giao thức** | Chỉ hỗ trợ HTTP/1.1 | Hỗ trợ HTTP/2 và WebSockets |\n| **Xử lý bất đồng bộ** | Khó, phức tạp | Dễ dàng với `CompletableFuture` |\n| **Sự linh hoạt** | Cao, kiểm soát chi tiết | Cao, nhưng với cách tiếp cận mới hơn |",
      "**Kết luận:** Nếu dự án của bạn đang sử dụng Java 11 trở lên, hãy ưu tiên dùng `HttpClient` để tận dụng các tính năng hiện đại và làm cho code của bạn gọn gàng, hiệu quả hơn. `HttpURLConnection` chỉ nên là lựa chọn cuối cùng khi bạn phải làm việc với các hệ thống cũ hoặc các hạn chế về môi trường."
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
