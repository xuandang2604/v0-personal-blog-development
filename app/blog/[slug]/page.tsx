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
      "Hồi đại học, tôi từng cảm thấy bối rối khi lần đầu tiếp xúc với lập trình mạng. Các khái niệm như socket, port, client-server model nghe thật trừu tượng và khó nắm bắt. Nhưng sau nhiều năm làm việc với chúng, tôi nhận ra rằng socket programming thực ra rất logic và thú vị.",

      "Bài viết này sẽ chia sẻ những hiểu biết của tôi về lập trình socket trong Java - từ những khái niệm cơ bản nhất đến cách xây dựng ứng dụng thực tế. Tôi sẽ cố gắng giải thích mọi thứ theo cách đơn giản nhất, như thể tôi đang nói chuyện với một người bạn.",

      "## Socket là gì? Giải thích theo cách đơn giản nhất",
      "Tôi thích giải thích socket bằng phép so sánh với đường dây điện thoại. Khi bạn muốn nói chuyện với ai đó qua điện thoại, bạn cần biết số điện thoại của họ và cần có một kết nối thông suốt giữa hai máy. Trong lập trình mạng, socket chính là 'đường dây điện thoại' ảo đó.",

      "Mỗi socket được xác định bởi một cặp địa chỉ IP và số hiệu cổng (port number). Địa chỉ IP giống như mã vùng điện thoại, còn port number giống như số máy lẻ trong một tòa nhà. Khi kết hợp lại, chúng tạo thành một điểm cuối (endpoint) duy nhất trong mạng.",

      "## TCP vs UDP: Khi nào dùng cái nào?",
      "Trong thế giới lập trình socket, chúng ta thường làm việc với hai giao thức chính:",

      "**TCP (Transmission Control Protocol)**: Đảm bảo dữ liệu được gửi đến đích một cách đáng tin cậy, theo đúng thứ tự và không bị mất mát. Điều này làm cho TCP trở thành lựa chọn lý tưởng cho các ứng dụng yêu cầu độ chính xác cao như truyền file, email, web browsing.",

      "**UDP (User Datagram Protocol)**: Ưu tiên tốc độ hơn độ tin cậy. UDP không đảm bảo rằng dữ liệu sẽ đến đích hoặc đến theo đúng thứ tự. Điều này khiến nó phù hợp cho các ứng dụng thời gian thực như video streaming, VoIP hoặc game online.",

      "Trong phát triển thực tế, tôi thường chọn TCP cho hầu hết các trường hợp, trừ khi tôi cần tối ưu hóa cho tốc độ và có thể chấp nhận mất một số gói dữ liệu.",

      "## Xây dựng ứng dụng client-server đơn giản",
      "Hãy bắt đầu với một ví dụ đơn giản: ứng dụng echo server, nơi server sẽ gửi trả lại bất kỳ thông điệp nào nó nhận được từ client.",

      "### Server Side",
      '```java\nimport java.io.*;\nimport java.net.*;\n\npublic class EchoServer {\n    public static void main(String[] args) {\n        try (ServerSocket serverSocket = new ServerSocket(5000)) {\n            System.out.println("Server đang lắng nghe trên cổng 5000...");\n            \n            // Chấp nhận kết nối từ client\n            Socket clientSocket = serverSocket.accept();\n            System.out.println("Client kết nối từ " + clientSocket.getInetAddress());\n            \n            // Thiết lập streams để đọc/ghi dữ liệu\n            BufferedReader in = new BufferedReader(\n                new InputStreamReader(clientSocket.getInputStream()));\n            PrintWriter out = new PrintWriter(\n                clientSocket.getOutputStream(), true);\n            \n            String inputLine;\n            // Đọc dữ liệu từ client và gửi lại\n            while ((inputLine = in.readLine()) != null) {\n                System.out.println("Nhận từ client: " + inputLine);\n                out.println("Echo: " + inputLine);\n                \n                if (inputLine.equals("exit"))\n                    break;\n            }\n            \n            clientSocket.close();\n        } catch (IOException e) {\n            System.out.println("Exception xảy ra khi lắng nghe cổng hoặc I/O: " + e.getMessage());\n        }\n    }\n}\n```',

      "### Client Side",
      '```java\nimport java.io.*;\nimport java.net.*;\n\npublic class EchoClient {\n    public static void main(String[] args) {\n        try {\n            Socket socket = new Socket("localhost", 5000);\n            \n            // Streams để đọc/ghi dữ liệu\n            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);\n            BufferedReader in = new BufferedReader(\n                new InputStreamReader(socket.getInputStream()));\n            BufferedReader stdIn = new BufferedReader(\n                new InputStreamReader(System.in));\n            \n            String userInput;\n            System.out.println("Nhập text (gõ \'exit\' để thoát):");\n            \n            // Đọc input từ người dùng và gửi đến server\n            while ((userInput = stdIn.readLine()) != null) {\n                out.println(userInput);\n                System.out.println("Server trả lời: " + in.readLine());\n                \n                if (userInput.equals("exit"))\n                    break;\n            }\n            \n            socket.close();\n        } catch (IOException e) {\n            System.out.println("Exception: " + e.getMessage());\n        }\n    }\n}\n```',

      "## Xử lý thực tế: Những điều tôi học được sau nhiều dự án",

      "Sau khi làm việc với nhiều dự án sử dụng socket, tôi nhận ra một số điều quan trọng:",

      "1. **Luôn đóng tài nguyên**: Sử dụng try-with-resources để đảm bảo sockets và streams luôn được đóng đúng cách, ngay cả khi có lỗi xảy ra.",

      "2. **Xử lý exceptions hợp lý**: Trong môi trường mạng, lỗi là điều không thể tránh khỏi. Client có thể ngắt kết nối đột ngột, mạng có thể bị ngắt... Đừng để ứng dụng của bạn sụp đổ chỉ vì một kết nối thất bại.",

      "3. **Tạo protocol rõ ràng**: Khi xây dựng ứng dụng thực tế, việc định nghĩa một protocol giao tiếp rõ ràng giữa client và server là vô cùng quan trọng. Protocol này quy định cấu trúc của các thông điệp, cách bắt đầu/kết thúc một giao dịch, v.v.",

      "4. **Timeout là bạn tốt**: Đặt timeout cho các operations để tránh blocking vô thời hạn khi đối tác không phản hồi.",

      "## Kết luận",
      "Lập trình socket trong Java có vẻ phức tạp ban đầu, nhưng khi đã hiểu các khái niệm cơ bản, bạn sẽ thấy nó thật logic và mạnh mẽ. Đây là nền tảng cho hầu hết các giao tiếp mạng hiện đại, từ web services đến ứng dụng chat, từ game online đến IoT.",

      "Trong bài tiếp theo, tôi sẽ đi sâu vào lập trình socket đa luồng - cách xây dựng server có thể xử lý nhiều client cùng lúc. Hãy theo dõi nhé!",
    ],
  },
  "tcp-vs-udp-java": {
    content: [
      "## TCP vs UDP trong Java: Chọn đúng công cụ cho đúng công việc",

      'Một trong những câu hỏi mà tôi thường xuyên nhận được từ các lập trình viên mới là: "Khi nào nên dùng TCP và khi nào nên dùng UDP?" Đây là câu hỏi quan trọng vì nó ảnh hưởng trực tiếp đến hiệu suất và độ tin cậy của ứng dụng mạng bạn đang xây dựng.',

      "Trong bài viết này, tôi muốn chia sẻ kinh nghiệm thực tế về hai giao thức này, khi nào nên sử dụng chúng và làm thế nào để triển khai hiệu quả trong Java.",

      "## TCP: Khi độ tin cậy là ưu tiên hàng đầu",

      "TCP (Transmission Control Protocol) được thiết kế với mục tiêu đảm bảo dữ liệu được truyền đi một cách đáng tin cậy. Mỗi khi tôi cần chắc chắn rằng mọi byte dữ liệu đều đến đích và đúng thứ tự, TCP là lựa chọn hiển nhiên.",

      "### Cách TCP hoạt động",

      "Đơn giản hóa cực độ, TCP hoạt động như sau:",

      "1. Thiết lập kết nối thông qua quá trình bắt tay 3 bước (three-way handshake)",
      "2. Chia dữ liệu thành các gói nhỏ và đánh số thứ tự",
      "3. Gửi từng gói và chờ xác nhận (ACK) từ bên nhận",
      "4. Nếu không nhận được ACK trong một khoảng thời gian nhất định, gửi lại gói đó",
      "5. Bên nhận sắp xếp lại các gói theo số thứ tự và chuyển cho ứng dụng",
      "6. Đóng kết nối khi hoàn tất",

      "### Triển khai TCP trong Java",

      "Java cung cấp các lớp Socket và ServerSocket để làm việc với TCP. Đây là một ví dụ đơn giản về server TCP:",

      '```java\nServerSocket serverSocket = new ServerSocket(8888);\nSocket clientSocket = serverSocket.accept();\n\n// Tạo streams để giao tiếp\nBufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));\nPrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);\n\n// Đọc dữ liệu từ client\nString input = in.readLine();\n\n// Xử lý và trả về kết quả\nout.println("Đã nhận: " + input);\n```',

      "### Khi nào tôi chọn TCP",

      "- **Web browsers và HTTP**: Mọi trang web đều phụ thuộc vào TCP để đảm bảo HTML, CSS và JavaScript được tải đầy đủ và chính xác.",
      "- **Truyền file**: Khi bạn cần đảm bảo mỗi byte của file đều được truyền đúng.",
      "- **Database communications**: Bạn không muốn mất hoặc sai lệch dữ liệu khi làm việc với cơ sở dữ liệu.",
      "- **Email**: Không ai muốn email bị mất một phần nội dung.",
      "- **APIs và Web Services**: REST, SOAP đều dựa trên HTTP, và do đó dựa trên TCP.",

      "## UDP: Khi tốc độ là ưu tiên số một",

      'UDP (User Datagram Protocol) là giao thức "tốt nhất có thể" - không đảm bảo dữ liệu sẽ đến đích hoặc đến theo đúng thứ tự. Nghe có vẻ không đáng tin cậy, nhưng có nhiều trường hợp UDP lại là lựa chọn tốt hơn.',

      "### Cách UDP hoạt động",

      "UDP đơn giản hơn nhiều so với TCP:",

      "1. Không thiết lập kết nối trước",
      "2. Chia dữ liệu thành các datagram độc lập",
      "3. Gửi mỗi datagram đi mà không quan tâm liệu nó có đến đích hay không",
      "4. Không có cơ chế tự động gửi lại nếu dữ liệu bị mất",
      "5. Bên nhận xử lý mỗi datagram ngay khi nó đến, không quan tâm thứ tự",

      "### Triển khai UDP trong Java",

      "Java sử dụng DatagramSocket và DatagramPacket để làm việc với UDP:",

      '```java\n// UDP Server\nDatagramSocket serverSocket = new DatagramSocket(9876);\nbyte[] receiveData = new byte[1024];\n\nDatagramPacket receivePacket = new DatagramPacket(receiveData, receiveData.length);\nserverSocket.receive(receivePacket); // Block cho đến khi nhận được gói tin\n\nString sentence = new String(receivePacket.getData(), 0, receivePacket.getLength());\nSystem.out.println("RECEIVED: " + sentence);\n```',

      "### Khi nào tôi chọn UDP",

      "- **Video streaming**: Mất một vài frame không ảnh hưởng nhiều đến trải nghiệm người dùng.",
      "- **Voice over IP (VoIP)**: Tương tự, mất một phần nhỏ âm thanh không đáng kể bằng độ trễ cao.",
      "- **Online gaming**: Cập nhật vị trí liên tục, tốc độ quan trọng hơn việc đảm bảo mỗi cập nhật đều đến đích.",
      "- **DNS lookups**: Một DNS query đơn giản không cần thiết lập kết nối phức tạp.",
      "- **IoT sensor data**: Với dữ liệu được gửi liên tục từ cảm biến, mất một vài điểm dữ liệu không phải là vấn đề lớn.",
      "## Thử nghiệm thực tế: TCP vs UDP",
      "Để hiểu rõ hơn sự khác biệt, tôi đã thực hiện một thử nghiệm nhỏ truyền file 100MB qua mạng LAN:",

      "- **TCP**: Truyền hoàn tất trong 5.2 giây, file hoàn toàn giống bản gốc.",
      "- **UDP**: Truyền hoàn tất trong 3.1 giây, nhưng mất khoảng 0.1% dữ liệu.",

      "Trong trường hợp truyền file, sự khác biệt về tốc độ không đáng kể so với việc đảm bảo dữ liệu toàn vẹn. Nhưng trong một game online nơi cần cập nhật vị trí 60 lần mỗi giây, UDP rõ ràng là lựa chọn tốt hơn.",

      "## Kết luận: Hiểu rõ để lựa chọn đúng",

      'Quyết định sử dụng TCP hay UDP không phải là việc chọn giao thức "tốt hơn" mà là chọn công cụ phù hợp với nhiệm vụ. Hãy nhớ rằng:',

      "- Nếu dữ liệu của bạn PHẢI đến đích đầy đủ và chính xác (như giao dịch ngân hàng), chọn TCP.",
      "- Nếu bạn ưu tiên tốc độ và độ trễ thấp, và có thể chịu được việc mất một số dữ liệu (như game thời gian thực), chọn UDP.",

      "-Trong thực tế, nhiều ứng dụng phức tạp thậm chí sử dụng cả TCP và UDP cho các phần khác nhau của hệ thống. Hiểu rõ điểm mạnh và điểm yếu của mỗi giao thức sẽ giúp bạn thiết kế ứng dụng mạng hiệu quả và đáng tin cậy hơn.",

      "Hy vọng bài viết này đã giúp bạn hiểu rõ hơn về TCP và UDP trong Java. Hãy để lại comment nếu bạn có bất kỳ câu hỏi nào nhé!",
    ],
  },
  "java-multithreaded-socket-programming": {
    content: [
      "Bạn đã từng tự hỏi làm thế nào một web server có thể phục vụ hàng nghìn người dùng cùng lúc chưa? Chắc chắn rồi, việc xử lý một kết nối duy nhất là khá đơn giản, nhưng trong thế giới thực, ứng dụng của chúng ta cần phải đón tiếp nhiều khách hàng. Đây chính là lúc chúng ta cần đến **lập trình đa luồng (multithreaded programming)**.",
      "### Tại sao cần đa luồng?",
      "Hãy tưởng tượng bạn mở một cửa hàng bán cà phê. Nếu bạn chỉ có một nhân viên, anh ta chỉ có thể phục vụ từng khách hàng một. Khách hàng thứ hai sẽ phải chờ cho đến khi khách hàng đầu tiên được phục vụ xong. Tương tự, nếu một server TCP chỉ có một luồng (thread) duy nhất, nó sẽ bị **block** (chặn) khi xử lý kết nối của client đầu tiên và không thể chấp nhận bất kỳ kết nối mới nào. Điều này dẫn đến trải nghiệm người dùng tồi tệ và hiệu suất kém.",
      "Để giải quyết vấn đề này, chúng ta sẽ áp dụng mô hình **đa luồng**. Về cơ bản, khi server nhận được một kết nối mới, nó sẽ **tạo ra một luồng mới** để xử lý kết nối đó, cho phép luồng chính quay lại và tiếp tục chờ đợi các kết nối khác.",
      "---",
      "### Triển khai server đa luồng trong Java",
      "Việc xây dựng một server đa luồng trong Java khá trực quan. Chúng ta sẽ sử dụng một vòng lặp vô hạn để liên tục lắng nghe các kết nối mới, và khi một kết nối được chấp nhận, chúng ta sẽ khởi tạo một luồng riêng biệt để xử lý nó.",
      "Dưới đây là một ví dụ đơn giản về cấu trúc của server đa luồng:",
      '```java\nimport java.net.*;\nimport java.io.*;\n\npublic class MultiThreadedServer {\n    public static void main(String[] args) throws IOException {\n        ServerSocket serverSocket = new ServerSocket(8888);\n        System.out.println("Server đang chạy tại port 8888...");\n\n        while (true) {\n            Socket clientSocket = serverSocket.accept(); // Lắng nghe và chấp nhận kết nối\n            System.out.println("Một client mới đã kết nối: " + clientSocket.getInetAddress().getHostAddress());\n\n            // Tạo một luồng mới để xử lý kết nối này\n            new Thread(() -> {\n                try {\n                    // Logic xử lý client ở đây\n                    BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));\n                    PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);\n                    \n                    String inputLine;\n                    while ((inputLine = in.readLine()) != null) {\n                        System.out.println("Client nói: " + inputLine);\n                        out.println("Server đã nhận: " + inputLine);\n                    }\n                    \n                    System.out.println("Client đã ngắt kết nối.");\n                    clientSocket.close();\n                } catch (IOException e) {\n                    e.printStackTrace();\n                }\n            }).start();\n        }\n    }\n}\n```',
      'Trong đoạn mã trên, dòng `new Thread(...)` chính là "phép màu". Thay vì xử lý trực tiếp, chúng ta gói gọn logic xử lý client vào trong một luồng riêng và gọi `.start()`. Điều này giải phóng luồng chính (main thread) để quay trở lại `serverSocket.accept()` và chờ đợi client tiếp theo.',
      "---",
      "### Những điều cần lưu ý",
      "Lập trình đa luồng mang lại sức mạnh nhưng cũng đi kèm với một số thách thức:",
      "1. **Quản lý tài nguyên**: Mỗi luồng đều tiêu tốn một chút bộ nhớ và CPU. Nếu bạn tạo ra quá nhiều luồng, server của bạn có thể bị quá tải. Đây là lý do tại sao các ứng dụng lớn thường sử dụng **thread pool** (hồ luồng) để tái sử dụng các luồng thay vì tạo mới liên tục.",
      "2. **Đồng bộ hóa**: Nếu nhiều luồng cùng truy cập và thay đổi một tài nguyên dùng chung (ví dụ: một biến toàn cục), bạn cần phải cẩn thận với vấn đề **race condition**. Các từ khóa như `synchronized` hoặc các lớp trong gói `java.util.concurrent` sẽ giúp bạn giải quyết vấn đề này.",
      "---",
      "### Kết luận",
      "Việc nắm vững cách làm việc với lập trình socket đa luồng là một kỹ năng thiết yếu cho bất kỳ lập trình viên Java nào muốn xây dựng các ứng dụng mạng có thể mở rộng. Nó giúp ứng dụng của bạn không chỉ chạy được mà còn chạy mượt mà, sẵn sàng phục vụ hàng chục, hàng trăm, thậm chí hàng nghìn client cùng một lúc.",
      "Bạn đã từng đối mặt với vấn đề nào khi xử lý nhiều client chưa? Hãy chia sẻ kinh nghiệm của bạn trong phần bình luận nhé!",
    ],
  },
  "http-client-java": {
    content: [
      "## Gửi HTTP Requests trong Java: HttpURLConnection vs HttpClient",

      "Khi bắt đầu lập trình Java vào năm 2008, tôi nhớ mình đã phải viết hàng chục dòng code chỉ để thực hiện một HTTP GET request đơn giản. Đó là thời kỳ mà `HttpURLConnection` còn là lựa chọn duy nhất trong JDK cho việc gửi HTTP requests. May mắn thay, Java đã phát triển rất nhiều từ đó đến nay.",

      "Trong bài viết này, tôi sẽ chia sẻ kinh nghiệm sử dụng cả hai phương pháp gửi HTTP request trong Java: `HttpURLConnection` truyền thống và `HttpClient` hiện đại (ra mắt từ Java 11). Tôi cũng sẽ chỉ cho bạn biết khi nào nên sử dụng cái nào.",

      "## HttpURLConnection: Phương pháp truyền thống",

      "Trước Java 11, bất kỳ ai muốn gửi HTTP request mà không sử dụng thư viện bên ngoài đều phải làm quen với `HttpURLConnection`. Đây là API có từ những ngày đầu của Java và, nói thẳng ra, nó không phải là thứ dễ sử dụng nhất.",

      "Đây là một ví dụ về cách gửi GET request sử dụng `HttpURLConnection`:",

      '```java\npublic String sendGetRequest(String urlStr) throws IOException {\n    URL url = new URL(urlStr);\n    HttpURLConnection connection = (HttpURLConnection) url.openConnection();\n    \n    // Thiết lập các thuộc tính cho request\n    connection.setRequestMethod("GET");\n    connection.setConnectTimeout(5000);\n    connection.setReadTimeout(5000);\n    \n    // Đọc response\n    int responseCode = connection.getResponseCode();\n    \n    if (responseCode == HttpURLConnection.HTTP_OK) {\n        BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));\n        String inputLine;\n        StringBuilder response = new StringBuilder();\n        \n        while ((inputLine = in.readLine()) != null) {\n            response.append(inputLine);\n        }\n        in.close();\n        \n        return response.toString();\n    } else {\n        return "GET request failed. Response Code: " + responseCode;\n    }\n}\n```',

      "Và đây là cách gửi POST request với dữ liệu:",

      '```java\npublic String sendPostRequest(String urlStr, String postData) throws IOException {\n    URL url = new URL(urlStr);\n    HttpURLConnection connection = (HttpURLConnection) url.openConnection();\n    \n    // Thiết lập các thuộc tính cho request\n    connection.setRequestMethod("POST");\n    connection.setRequestProperty("Content-Type", "application/json");\n    connection.setDoOutput(true);\n    connection.setConnectTimeout(5000);\n    connection.setReadTimeout(5000);\n    \n    // Gửi dữ liệu\n    try (OutputStream os = connection.getOutputStream()) {\n        byte[] input = postData.getBytes("utf-8");\n        os.write(input, 0, input.length);\n    }\n    \n    // Đọc response\n    int responseCode = connection.getResponseCode();\n    \n    try (BufferedReader br = new BufferedReader(\n            new InputStreamReader(connection.getInputStream(), "utf-8"))) {\n        StringBuilder response = new StringBuilder();\n        String responseLine = null;\n        while ((responseLine = br.readLine()) != null) {\n            response.append(responseLine.trim());\n        }\n        return response.toString();\n    } catch (IOException e) {\n        // Xử lý lỗi và đọc error stream\n        try (BufferedReader br = new BufferedReader(\n                new InputStreamReader(connection.getErrorStream(), "utf-8"))) {\n            // Đọc error stream\n        }\n        throw e; // Re-throw exception sau khi xử lý\n    }\n}\n```',

      "Có thể thấy, code khá dài dòng và có nhiều chi tiết cần xử lý thủ công như mở/đóng streams, đọc response line-by-line, và xử lý lỗi.",

      "## HttpClient: Phương pháp hiện đại",

      "Từ Java 11, chúng ta có một API mới là `java.net.http.HttpClient`. API này được thiết kế hiện đại hơn với cú pháp fluent, hỗ trợ HTTP/2, và đặc biệt là hỗ trợ các request bất đồng bộ.",

      "Đây là cách gửi GET request với `HttpClient`:",

      "```java\npublic String sendGetRequestModern(String uri) throws IOException, InterruptedException {\n    HttpClient client = HttpClient.newHttpClient();\n    \n    HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(uri))\n            .timeout(Duration.ofSeconds(5))\n            .GET() // GET là mặc định, nhưng thêm vào cho rõ ràng\n            .build();\n    \n    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n    \n    return response.body();\n}\n```",

      "Và đây là cách gửi POST request:",

      '```java\npublic String sendPostRequestModern(String uri, String data) throws IOException, InterruptedException {\n    HttpClient client = HttpClient.newHttpClient();\n    \n    HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(uri))\n            .timeout(Duration.ofSeconds(5))\n            .header("Content-Type", "application/json")\n            .POST(HttpRequest.BodyPublishers.ofString(data))\n            .build();\n    \n    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n    \n    return response.body();\n}\n```',

      "## Request bất đồng bộ với HttpClient",

      "Một trong những ưu điểm lớn nhất của `HttpClient` là khả năng thực hiện các request bất đồng bộ, không chặn luồng chính của ứng dụng:",

      '```java\npublic CompletableFuture<String> sendAsyncRequest(String uri) {\n    HttpClient client = HttpClient.newHttpClient();\n    \n    HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(uri))\n            .build();\n    \n    return client.sendAsync(request, HttpResponse.BodyHandlers.ofString())\n            .thenApply(HttpResponse::body);\n}\n\n// Sử dụng:\npublic void processMultipleRequestsAsync() {\n    List<URI> uris = Arrays.asList(\n            URI.create("https://api.example.com/data1"),\n            URI.create("https://api.example.com/data2"),\n            URI.create("https://api.example.com/data3")\n    );\n    \n    HttpClient client = HttpClient.newHttpClient();\n    \n    List<CompletableFuture<String>> futures = uris.stream()\n            .map(uri -> client.sendAsync(\n                    HttpRequest.newBuilder(uri).build(),\n                    HttpResponse.BodyHandlers.ofString())\n                    .thenApply(HttpResponse::body))\n            .collect(Collectors.toList());\n    \n    // Đợi tất cả các request hoàn thành\n    CompletableFuture.allOf(futures.toArray(new CompletableFuture[0]))\n            .thenAccept(v -> {\n                for (int i = 0; i < uris.size(); i++) {\n                    try {\n                        System.out.println(uris.get(i) + ": " + futures.get(i).get());\n                    } catch (Exception e) {\n                        System.err.println("Error: " + e.getMessage());\n                    }\n                }\n            });\n}\n```',

      "## So sánh và khi nào nên dùng cái nào",

      "### HttpURLConnection",

      "**Ưu điểm:**",
      "- Có sẵn từ các phiên bản Java cũ (Java 1.1 trở lên)",
      "- Không cần thư viện bổ sung",
      "- Quen thuộc với nhiều lập trình viên Java",

      "**Nhược điểm:**",
      "- API khó sử dụng, dài dòng",
      "- Không có hỗ trợ tích hợp cho request bất đồng bộ",
      "- Không hỗ trợ HTTP/2",
      "- Yêu cầu nhiều boilerplate code để xử lý streams và exceptions",

      "### HttpClient (Java 11+)",

      "**Ưu điểm:**",
      "- API hiện đại, fluent",
      "- Hỗ trợ HTTP/1.1 và HTTP/2",
      "- Hỗ trợ request đồng bộ và bất đồng bộ",
      "- Tích hợp với Stream API và CompletableFuture",
      "- Xử lý header, cookie, redirection dễ dàng hơn",

      "**Nhược điểm:**",
      "- Yêu cầu Java 11 trở lên",
      "- Không thể dùng trong các dự án yêu cầu tương thích với Java 8 hoặc cũ hơn",

      "## Kinh nghiệm thực tế",

      "Sau nhiều năm làm việc với cả hai API, tôi có một số lời khuyên:",

      "1. **Nếu bạn có thể dùng Java 11 trở lên**, hãy sử dụng `HttpClient`. API này hiện đại hơn, code gọn gàng hơn và dễ sử dụng hơn nhiều.",

      "2. **Nếu dự án của bạn cần tương thích với Java 8 hoặc cũ hơn**, bạn có hai lựa chọn:",
      " - Sử dụng `HttpURLConnection`",
      "- Hoặc sử dụng thư viện bên thứ ba như Apache HttpClient, OkHttp, hoặc Retrofit.",

      "3. **Nếu bạn cần thực hiện nhiều request đồng thời**, `HttpClient` với API bất đồng bộ là lựa chọn tốt nhất.",

      "4. **Đối với các ứng dụng microservice hiện đại** cần giao tiếp với nhiều API khác, tôi thường khuyên dùng `HttpClient` hoặc thư viện chuyên dụng như Spring WebClient.",

      "## Kết luận",

      "HTTP Client là một phần không thể thiếu của hầu hết các ứng dụng Java hiện đại. Cho dù bạn đang xây dựng ứng dụng giao tiếp với REST APIs, microservices, hoặc đơn giản là tải dữ liệu từ web, việc hiểu và chọn đúng công cụ sẽ giúp bạn viết code hiệu quả và dễ bảo trì hơn.",

      "Nếu bạn đang phát triển một dự án mới và có thể sử dụng Java 11+, tôi mạnh mẽ khuyên bạn nên sử dụng `HttpClient`. Nếu bạn phải làm việc với các hệ thống cũ hoặc môi trường hạn chế, hãy cân nhắc sử dụng một thư viện bên thứ ba thay vì `HttpURLConnection` thuần túy.",

      "Hy vọng bài viết này giúp bạn hiểu rõ hơn về các tùy chọn gửi HTTP requests trong Java. Chúc bạn lập trình vui vẻ!",
    ],
  },
  "java-nio-networking": {
    content: [
      "Bạn đã làm quen với lập trình Socket truyền thống (IO Blocking) trong Java. Nó đơn giản, dễ hiểu, nhưng lại có một nhược điểm lớn: mỗi khi một luồng (thread) thực hiện một thao tác I/O (như `socket.read()`), nó sẽ bị **chặn** lại cho đến khi dữ liệu sẵn sàng. Đối với các ứng dụng nhỏ thì không sao, nhưng với server cần xử lý hàng nghìn kết nối cùng lúc, việc này sẽ trở thành nút thắt cổ chai khủng khiếp.",
      "Đây chính là lúc **Java NIO (Non-blocking I/O)** xuất hiện. NIO không phải là một sự thay thế hoàn toàn, mà là một cách tiếp cận khác, hướng tới hiệu năng cao và khả năng mở rộng.",
      "---",
      "## Sự khác biệt cốt lõi: Blocking vs Non-blocking",
      "Hãy hình dung một nhà hàng:",
      "- **Blocking I/O**: Giống như một bồi bàn chỉ phục vụ duy nhất một bàn. Trong lúc bàn đó đang gọi món, anh ta đứng chờ mà không làm gì khác. Sau khi xong, anh ta mới đi phục vụ bàn tiếp theo. Cách này dễ quản lý nhưng kém hiệu quả.",
      "- **Non-blocking I/O (NIO)**: Giống như một bồi bàn phục vụ nhiều bàn cùng lúc. Anh ta hỏi các bàn xem đã sẵn sàng gọi món chưa. Bàn nào sẵn sàng thì anh ta lấy order, bàn nào chưa thì anh ta chuyển sang bàn khác mà không đứng chờ. Bằng cách này, anh ta luôn bận rộn và có thể phục vụ nhiều khách hơn.",
      "Java NIO sử dụng một mô hình duy nhất: một hoặc một vài luồng duy nhất có thể quản lý hàng nghìn kết nối. ",
      "---",
      "## Ba thành phần chính của NIO",
      "Để hiểu về NIO, bạn cần nắm vững ba khái niệm chính:",
      "### 1. `Buffer`",
      "Trong IO truyền thống, dữ liệu được gửi trực tiếp từ luồng này sang luồng khác. Trong NIO, mọi thao tác I/O đều đi qua một `Buffer` (vùng đệm). Bạn ghi dữ liệu vào `Buffer`, sau đó `Buffer` sẽ gửi dữ liệu đó đi. Điều này cho phép bạn kiểm soát dữ liệu hiệu quả hơn.",
      "### 2. `Channel`",
      "Một `Channel` là một đường dẫn hai chiều đến một thực thể I/O, chẳng hạn như một file, một socket mạng. Nó giống như một ống dẫn mà qua đó dữ liệu được đọc từ hoặc ghi vào `Buffer`.",
      "### 3. `Selector`",
      "Đây là trái tim của NIO. Một `Selector` cho phép một luồng duy nhất quản lý nhiều `Channel`. `Selector` sẽ theo dõi các `Channel` đã đăng ký và cho bạn biết khi nào có một sự kiện sẵn sàng (ví dụ: dữ liệu đến trên một socket, một kết nối mới đã sẵn sàng). Bằng cách này, bạn không cần phải tạo hàng nghìn luồng để xử lý hàng nghìn kết nối.",
      "---",
      "## Khi nào nên sử dụng NIO?",
      "NIO không phải là giải pháp cho mọi vấn đề. Lập trình với NIO phức tạp hơn nhiều so với IO truyền thống. Bạn nên sử dụng NIO khi:",
      "- **Xây dựng server hiệu năng cao**: Các ứng dụng cần xử lý hàng ngàn kết nối đồng thời, như chat server, server game, hoặc các API microservices.",
      "- **Xử lý các tác vụ I/O tốn thời gian**: Khi bạn không muốn một luồng bị chặn quá lâu, ảnh hưởng đến các tác vụ khác.",
      "- **Cần kiểm soát chặt chẽ luồng dữ liệu**: Ví dụ, bạn muốn đọc một lượng dữ liệu nhất định, xử lý, rồi mới đọc tiếp.",
      "Nếu ứng dụng của bạn chỉ cần xử lý một vài kết nối cùng lúc, hoặc các tác vụ I/O không phải là điểm nghẽn, thì IO truyền thống vẫn là lựa chọn tốt hơn vì tính đơn giản của nó.",
      "---",
      "## Kết luận",
      "NIO là một công cụ mạnh mẽ trong hộp công cụ của lập trình viên Java, nhưng nó đòi hỏi một sự đầu tư học tập đáng kể. Hiểu rõ sự khác biệt giữa Blocking I/O và Non-blocking I/O sẽ giúp bạn đưa ra lựa chọn đúng đắn cho dự án của mình, đảm bảo ứng dụng của bạn không chỉ hoạt động mà còn mở rộng được một cách hiệu quả nhất có thể.",
    ],
  },
  "nodejs-networking-basics": {
    content: [
      "JavaScript thường được biết đến là ngôn ngữ của trình duyệt, nhưng Node.js đã thay đổi hoàn toàn điều đó. Với kiến trúc bất đồng bộ (asynchronous) và dựa trên sự kiện (event-driven) mạnh mẽ, Node.js trở thành một nền tảng lý tưởng để xây dựng các ứng dụng mạng hiệu suất cao, từ web server đơn giản đến các ứng dụng thời gian thực phức tạp như chat app hay game online.",
      "Trong bài viết này, chúng ta sẽ khám phá cách Node.js xử lý mạng, từ những khái niệm cốt lõi đến việc tạo ra một server TCP đơn giản đầu tiên của bạn. Hãy cùng nhau bắt đầu hành trình này nhé!",
      "---",
      "## Tại sao Node.js lại mạnh về mạng?",
      "Câu trả lời nằm ở mô hình **Non-blocking I/O (I/O không khóa)**. Giống như Java NIO, Node.js không bị chặn khi chờ đợi các thao tác I/O. Khi bạn yêu cầu Node.js đọc dữ liệu từ một socket, nó sẽ không đứng chờ mà sẽ chuyển yêu cầu đó cho hệ điều hành và tiếp tục xử lý các tác vụ khác. Khi dữ liệu đã sẵn sàng, hệ điều hành sẽ thông báo lại cho Node.js thông qua một **vòng lặp sự kiện (event loop)**, và Node.js sẽ xử lý dữ liệu đó bằng một callback.",
      "Mô hình này giúp một luồng duy nhất của Node.js có thể xử lý hàng nghìn kết nối đồng thời, vượt trội so với các mô hình đa luồng truyền thống khi phải tạo ra một luồng riêng cho mỗi kết nối.",
      "---",
      "## Xây dựng server TCP đầu tiên",
      "Để hiểu rõ hơn, chúng ta sẽ xây dựng một server TCP cơ bản bằng module `net` của Node.js. Server này sẽ lắng nghe trên một port nhất định và gửi lại mọi thứ mà client gửi đến.",
      "```javascript\nconst net = require('net');\n\nconst server = net.createServer((socket) => {\n  console.log('Một client mới đã kết nối!');\n\n  // Gửi một tin nhắn chào mừng đến client\n  socket.write('Chào mừng bạn đến với server TCP!\n');\n\n  // Lắng nghe dữ liệu từ client\n  socket.on('data', (data) => {\n    const receivedData = data.toString();\n    console.log(`Dữ liệu nhận được: ${receivedData}`);\n    \n    // Gửi lại dữ liệu cho client\n    socket.write(`Server đã nhận: ${receivedData}`);\n  });\n\n  // Xử lý khi client ngắt kết nối\n  socket.on('end', () => {\n    console.log('Client đã ngắt kết nối.');\n  });\n\n  // Xử lý lỗi\n  socket.on('error', (err) => {\n    console.error('Lỗi kết nối:', err.message);\n  });\n});\n\n// Lắng nghe kết nối trên port 3000\nserver.listen(3000, '127.0.0.1', () => {\n  console.log('Server đang lắng nghe tại 127.0.0.1:3000');\n});\n```",
      "### Phân tích đoạn code",
      "1.  **`net.createServer(...)`**: Đây là hàm tạo server TCP. Nó nhận một callback, và callback này sẽ được gọi mỗi khi có một client mới kết nối.",
      "2.  **`socket`**: Biến `socket` là một đối tượng `Duplex Stream` đại diện cho kết nối hiện tại giữa server và client. Nó cho phép chúng ta đọc dữ liệu từ client (`socket.on('data', ...)`), và ghi dữ liệu ra client (`socket.write(...)`).",
      "3.  **Sự kiện**: Thay vì bị chặn, chúng ta lắng nghe các sự kiện: `data` (dữ liệu đến), `end` (client ngắt kết nối), `error` (lỗi). Đây chính là cách Node.js xử lý bất đồng bộ, dựa trên sự kiện.",
      "---",
      "## Tiếp theo là gì?",
      "Sau khi nắm vững những khái niệm cơ bản này, bạn có thể dễ dàng mở rộng để xây dựng các ứng dụng phức tạp hơn. Hầu hết các module mạng cấp cao hơn của Node.js, như HTTP và WebSocket, đều được xây dựng trên nền tảng của `net`. Hiểu về `net` chính là hiểu về trái tim của Node.js.",
      "Việc lập trình mạng với Node.js là một trải nghiệm thú vị và mạnh mẽ. Bạn không cần phải lo lắng về quản lý luồng phức tạp mà vẫn có thể tạo ra các server có khả năng mở rộng cực tốt. Hãy thử chạy đoạn code trên và kiểm tra với một client (như `telnet` hoặc Netcat) để xem nó hoạt động như thế nào nhé!",
      "Bạn đã sẵn sàng để xây dựng ứng dụng chat thời gian thực đầu tiên của mình chưa? Chia sẻ ý tưởng của bạn trong phần bình luận nhé!",
    ],
  },
  "websocket-realtime-apps": {
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
      'Trong thế giới lập trình web hiện đại, **RESTful API** là một tiêu chuẩn vàng để các ứng dụng "nói chuyện" với nhau. Nó giúp bạn xây dựng các dịch vụ web đơn giản, có thể mở rộng, sử dụng các phương thức HTTP tiêu chuẩn (GET, POST, PUT, DELETE) để thực hiện các thao tác trên tài nguyên. Và **Express.js** chính là công cụ hoàn hảo để hiện thực hóa điều đó.',
      "Express.js là một framework web tối giản và linh hoạt cho Node.js. Nó không ép buộc bạn theo một quy tắc cứng nhắc nào, mà cung cấp những công cụ cốt lõi để bạn nhanh chóng xây dựng các route (tuyến đường) và xử lý yêu cầu HTTP. Nó giống như một bộ khung sườn chắc chắn, giúp bạn dễ dàng lắp ráp các bộ phận khác theo ý muốn.",
      "---",
      "## 1. Khởi tạo một dự án API cơ bản",
      "Đầu tiên, hãy cài đặt Express.js và khởi tạo một server đơn giản. Đây là bước đệm cho mọi API mà bạn sẽ xây dựng:",
      "```javascript\n// Khởi tạo dự án và cài đặt Express\nnpm init -y\nnpm install express\n\n// File: app.js\nconst express = require('express');\nconst app = express();\nconst port = 3000;\n\n// Middleware để phân tích JSON từ body của request\napp.use(express.json());\n\n// Route GET đơn giản\napp.get('/', (req, res) => {\n  res.send('Chào mừng đến với API!');\n});\n\napp.listen(port, () => {\n  console.log(`Server API đang chạy tại http://localhost:${port}`);\n});\n```",
      "Chúng ta đã tạo một server lắng nghe tại port 3000. Dòng `app.use(express.json());` rất quan trọng, nó cho phép Express tự động phân tích các dữ liệu JSON được gửi từ client, giúp chúng ta dễ dàng truy cập vào `req.body`.",
      "---",
      "## 2. Xây dựng các Endpoint RESTful",
      "Giờ là lúc áp dụng các phương thức HTTP để thao tác với một tài nguyên, ví dụ như một danh sách người dùng. Chúng ta sẽ mô phỏng một database bằng một mảng đơn giản.",
      "```javascript\nlet users = [\n  { id: 1, name: 'Alice' },\n  { id: 2, name: 'Bob' }\n];\n\n// GET /users: Lấy tất cả người dùng\napp.get('/users', (req, res) => {\n  res.json(users);\n});\n\n// GET /users/:id: Lấy một người dùng cụ thể\napp.get('/users/:id', (req, res) => {\n  const id = parseInt(req.params.id);\n  const user = users.find(u => u.id === id);\n  if (user) {\n    res.json(user);\n  } else {\n    res.status(404).send('Không tìm thấy người dùng!');\n  }\n});\n\n// POST /users: Tạo người dùng mới\napp.post('/users', (req, res) => {\n  const newUser = req.body;\n  newUser.id = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;\n  users.push(newUser);\n  res.status(201).json(newUser);\n});\n\n// PUT /users/:id: Cập nhật người dùng\napp.put('/users/:id', (req, res) => {\n  const id = parseInt(req.params.id);\n  let user = users.find(u => u.id === id);\n  if (user) {\n    user.name = req.body.name;\n    res.json(user);\n  } else {\n    res.status(404).send('Không tìm thấy người dùng!');\n  }\n});\n\n// DELETE /users/:id: Xóa người dùng\napp.delete('/users/:id', (req, res) => {\n  const id = parseInt(req.params.id);\n  const initialLength = users.length;\n  users = users.filter(u => u.id !== id);\n  if (users.length < initialLength) {\n    res.status(204).send(); // No Content\n  } else {\n    res.status(404).send('Không tìm thấy người dùng!');\n  }\n});\n```",
      "Mỗi endpoint ở trên đều tuân theo các nguyên tắc của RESTful API: sử dụng động từ HTTP để biểu thị hành động và URL để biểu thị tài nguyên. `req.params.id` giúp chúng ta lấy được giá trị từ URL động, còn `req.body` chứa dữ liệu được gửi đến từ client.",
      "---",
      "## 3. Kết luận: Đơn giản nhưng mạnh mẽ",
      "Express.js chứng minh rằng bạn không cần một framework cồng kềnh để xây dựng một API mạnh mẽ. Với chỉ vài dòng code, bạn đã có thể tạo ra một dịch vụ web tuân thủ các nguyên tắc RESTful. Sự đơn giản, linh hoạt và kho thư viện khổng lồ của Node.js giúp Express trở thành lựa chọn hàng đầu cho các nhà phát triển muốn xây dựng API một cách nhanh chóng và hiệu quả.",
      "Bạn đã sẵn sàng để xây dựng API cho dự án tiếp theo của mình chưa? Hãy thử nghiệm với các endpoint trên và xem chúng hoạt động như thế nào nhé!",
    ],
  },
  "socketio-nodejs": {
    content: [
      "Bạn đã bao giờ tự hỏi làm thế nào các ứng dụng chat, game online, hoặc các bảng điều khiển chứng khoán có thể cập nhật dữ liệu ngay lập tức mà không cần phải tải lại trang chưa? Câu trả lời không phải là HTTP, mà là một giao thức khác mạnh mẽ hơn nhiều: **WebSocket**.",
      "Và nếu WebSocket là trái tim của các ứng dụng thời gian thực, thì **Socket.IO** chính là bộ não và hệ thần kinh, biến những kết nối thô sơ thành một trải nghiệm giao tiếp mạnh mẽ, mượt mà và gần như không thể bị ngắt quãng. Socket.IO không chỉ là một thư viện Node.js, nó là một nền tảng hoàn chỉnh cho phép bạn xây dựng các ứng dụng hai chiều, dựa trên sự kiện một cách dễ dàng và đáng tin cậy.",
      "Vậy tại sao bạn nên chọn Socket.IO thay vì chỉ dùng WebSocket thuần túy?",
      "---",
      "## Vượt trội hơn WebSocket, tại sao?",
      'Socket.IO được sinh ra để khắc phục những nhược điểm cố hữu của WebSocket. Nó cung cấp một loạt các tính năng "thần thánh" giúp việc lập trình trở nên dễ dàng hơn bao giờ hết:',
      "1.  **Tự động kết nối lại**: Internet không phải lúc nào cũng ổn định. Khi mạng bị ngắt, WebSocket thô sẽ bị mất kết nối và bạn phải tự mình viết code để xử lý việc kết nối lại. Socket.IO sẽ tự động xử lý việc này một cách thông minh, đảm bảo ứng dụng của bạn không bị gián đoạn. Bạn không cần phải viết thêm bất kỳ dòng code phức tạp nào.",
      "2.  **Fallback linh hoạt**: Không phải trình duyệt hay môi trường nào cũng hỗ trợ WebSocket. Socket.IO tự động dò tìm và chuyển sang các giao thức thay thế như **HTTP long-polling** để đảm bảo kết nối vẫn được thiết lập, dù trong bất kỳ điều kiện nào. Điều này đảm bảo ứng dụng của bạn hoạt động trên nhiều nền tảng và trình duyệt cũ hơn.",
      "3.  **Broadcasting mạnh mẽ**: Đây là tính năng cốt lõi cho các ứng dụng đa người dùng. Với Socket.IO, bạn có thể dễ dàng gửi tin nhắn cho tất cả client, cho một nhóm client cụ thể (phòng), hoặc ngoại trừ một client nào đó. Điều này là nền tảng cho các ứng dụng chat, game nhiều người chơi, và các dashboard thời gian thực.",
      "4.  **Phát hiện và xử lý lỗi**: Nó cung cấp các sự kiện lỗi rõ ràng, giúp bạn dễ dàng gỡ lỗi và quản lý trạng thái kết nối, thay vì phải xử lý các lỗi cấp thấp hơn của WebSocket.",
      "---",
      "## Xây dựng Chat Server đỉnh cao với Rooms",
      'Để cảm nhận sức mạnh của Socket.IO, chúng ta sẽ xây dựng một chat server có hỗ trợ "phòng" (rooms). Người dùng có thể tham gia các phòng chat khác nhau và chỉ nhận tin nhắn từ phòng đó.',
      "### Bước 1: Khởi động server cơ bản",
      "Đầu tiên, hãy cài đặt các thư viện cần thiết và thiết lập một server Express.js để phục vụ file HTML cho client.",
      "```bash\nnpm init -y\nnpm install express socket.io\n```",
      "```javascript\n// File: server.js\nconst express = require('express');\nconst { createServer } = require('http');\nconst { Server } = require('socket.io');\n\nconst app = express();\nconst server = createServer(app);\nconst io = new Server(server);\n\n// Phục vụ file HTML client\napp.get('/', (req, res) => {\n  res.sendFile(__dirname + '/index.html');\n});\n\nserver.listen(3000, () => {\n  console.log('Server đang chạy tại http://localhost:3000');\n});\n```",
      "### Bước 2: Thêm logic Chat và Rooms",
      "Bây giờ, chúng ta sẽ thêm logic của Socket.IO để xử lý kết nối, tham gia phòng và gửi tin nhắn.",
      "```javascript\n// ... (đoạn code server phía trên)\n\nio.on('connection', (socket) => {\n  console.log(`User ${socket.id} đã kết nối`);\n\n  // Lắng nghe sự kiện 'join room' từ client\n  socket.on('join room', (room) => {\n    // Thoát khỏi phòng cũ nếu có\n    const currentRooms = socket.rooms;\n    currentRooms.forEach(r => {\n      if (r !== socket.id) {\n        socket.leave(r);\n      }\n    });\n    \n    // Tham gia phòng mới\n    socket.join(room);\n    console.log(`User ${socket.id} đã tham gia phòng ${room}`);\n    \n    // Gửi tin nhắn chào mừng chỉ trong phòng đó\n    io.to(room).emit('chat message', `[SERVER] User ${socket.id} đã tham gia phòng ${room}.`);\n  });\n\n  // Lắng nghe sự kiện 'chat message' từ client\n  socket.on('chat message', (msg) => {\n    const currentRoom = Array.from(socket.rooms).find(room => room !== socket.id);\n    if (currentRoom) {\n      // Gửi tin nhắn đến tất cả người dùng trong cùng phòng\n      io.to(currentRoom).emit('chat message', `${socket.id}: ${msg}`);\n      console.log(`Tin nhắn từ ${socket.id} trong phòng ${currentRoom}: ${msg}`);\n    }\n  });\n\n  // Xử lý khi người dùng ngắt kết nối\n  socket.on('disconnect', () => {\n    console.log(`User ${socket.id} đã ngắt kết nối`);\n  });\n});\n```",
      "### Bước 3: Hoàn thiện Client",
      "Cuối cùng, cập nhật file `index.html` để người dùng có thể nhập tên phòng và gửi tin nhắn.",
      "```html\n\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>Chat App</title>\n    <style> body { font-family: sans-serif; } </style>\n  </head>\n  <body>\n    <h1>Chat với Socket.IO (Phòng chat)</h1>\n    <form id=\"room-form\">\n      <input id=\"room-input\" autocomplete=\"off\" placeholder=\"Nhập tên phòng...\"/>\n      <button>Tham gia phòng</button>\n    </form>\n    <hr/>\n    <ul id=\"messages\"></ul>\n    <form id=\"form\" action=\"\">\n      <input id=\"input\" autocomplete=\"off\" placeholder=\"Nhập tin nhắn...\"/><button>Gửi</button>\n    </form>\n\n    <script src=\"/socket.io/socket.io.js\"></script>\n    <script>\n      const socket = io();\n      const form = document.getElementById('form');\n      const input = document.getElementById('input');\n      const messages = document.getElementById('messages');\n      const roomForm = document.getElementById('room-form');\n      const roomInput = document.getElementById('room-input');\n\n      // Xử lý khi tham gia phòng\n      roomForm.addEventListener('submit', (e) => {\n        e.preventDefault();\n        if (roomInput.value) {\n          socket.emit('join room', roomInput.value);\n          roomInput.value = '';\n        }\n      });\n\n      // Xử lý khi gửi tin nhắn\n      form.addEventListener('submit', (e) => {\n        e.preventDefault();\n        if (input.value) {\n          socket.emit('chat message', input.value);\n          input.value = '';\n        }\n      });\n\n      // Nhận và hiển thị tin nhắn\n      socket.on('chat message', (msg) => {\n        const item = document.createElement('li');\n        item.textContent = msg;\n        messages.appendChild(item);\n        window.scrollTo(0, document.body.scrollHeight);\n      });\n    </script>\n  </body>\n</html>\n```",
      "---",
      "## Kết luận: Sức mạnh trong tầm tay",
      "Socket.IO không chỉ là một thư viện, nó là một giải pháp toàn diện cho những ai muốn xây dựng các ứng dụng tương tác thời gian thực. Sự đơn giản của API, cùng với các tính năng tự động mạnh mẽ, giúp bạn tập trung vào logic của ứng dụng thay vì phải lo lắng về những vấn đề kết nối phức tạp. Nếu bạn muốn xây dựng một ứng dụng chat, một game đa người chơi, hay bất kỳ hệ thống nào cần cập nhật dữ liệu tức thì, Socket.IO chính là lựa chọn không thể bỏ qua.",
      'Bạn đã sẵn sàng để tạo nên một ứng dụng thời gian thực "đỉnh cao" chưa? Hãy bắt đầu với Socket.IO ngay hôm nay!',
    ],
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.id === params.slug);

  if (!post) {
    notFound();
  }

  const content = blogContent[params.slug];

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
