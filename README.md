# Whatsapp Clone - Fullstack Application

## Giới thiệu

Dự án "Whatsapp Clone" là một ứng dụng nhắn tin đa nền tảng (multi-platform messaging application) được phát triển dưới dạng Fullstack, mô phỏng các tính năng cốt lõi của ứng dụng WhatsApp nổi tiếng. Dự án này được xây dựng nhằm mục đích minh họa việc tích hợp các công nghệ Backend mạnh mẽ (Spring Boot) với một giao diện người dùng hiện đại và phản hồi (Angular), kết hợp với hệ thống xác thực tập trung (Keycloak) và giao tiếp thời gian thực (WebSocket).

## Các tính năng chính

Dự án này bao gồm việc triển khai các module và chức năng sau:

### Backend (Spring Boot)

* **Tạo dự án Spring Boot**: Khởi tạo cấu trúc dự án và các thiết lập cơ bản.
* **Cấu hình Keycloak**: Tích hợp và cấu hình Keycloak làm Identity and Access Management (IAM) Server để xử lý xác thực và ủy quyền.
* **Cấu hình dự án**: Thiết lập các dependency và cấu hình chung cho ứng dụng.
* **Cấu hình bảo mật**: Triển khai các lớp bảo mật, thường sử dụng Spring Security, để bảo vệ các endpoint API và tài nguyên.
* **Thiết kế Entities và Relationships**: Xây dựng mô hình dữ liệu (các thực thể như User, Chat, Message) và định nghĩa các mối quan hệ giữa chúng trong cơ sở dữ liệu.
* **Tạo Named Queries**: Định nghĩa các truy vấn JPA/Hibernate được đặt tên để truy vấn dữ liệu hiệu quả.
* **Đồng bộ hóa người dùng với Keycloak**: Quản lý thông tin người dùng tập trung tại Keycloak, và có thể đồng bộ hoặc liên kết với hệ thống người dùng nội bộ của ứng dụng khi cần thiết (để lưu trữ dữ liệu nghiệp vụ riêng).
* **Triển khai Chat Domain**: Xây dựng logic và API liên quan đến các cuộc trò chuyện (tạo, liệt kê, quản lý thành viên).
* **Triển khai Message Domain**: Xây dựng logic và API cho việc gửi, nhận và quản lý tin nhắn.
* **Triển khai File Service**: Xử lý việc tải lên, lưu trữ và truy xuất các file đính kèm (media) trong tin nhắn.
* **Triển khai User Domain**: Quản lý thông tin và các hành động liên quan đến người dùng ứng dụng.
* **Cấu hình Websocket**: Thiết lập kênh giao tiếp thời gian thực cho tin nhắn và thông báo.
* **Triển khai Notification Service**: Xử lý và gửi các thông báo đến người dùng.
* **Thêm OpenAPI (Swagger)**: Tích hợp tài liệu API tự động để dễ dàng kiểm thử và hiểu các endpoint backend.
* **Kiểm thử Backend**: Thực hiện các bài kiểm thử để đảm bảo các API và logic backend hoạt động đúng.

### Frontend (Angular)

* **Tạo và cấu hình dự án Frontend**: Khởi tạo ứng dụng Angular và thiết lập các cấu hình ban đầu.
* **Cấu hình Keycloak**: Tích hợp Angular với Keycloak để xử lý quá trình đăng nhập, đăng xuất và quản lý phiên người dùng.
* **Thêm và cấu hình Http Interceptor**: Triển khai các Interceptor để tự động thêm các token xác thực vào mỗi yêu cầu HTTP gửi đến Backend.
* **Triển khai giao diện chính (Main Interface)**: Xây dựng bố cục tổng thể của ứng dụng, bao gồm thanh điều hướng, khu vực chat list và khu vực tin nhắn.
* **Triển khai Chat List Component**: Hiển thị danh sách các cuộc trò chuyện của người dùng, bao gồm thông tin về cuộc trò chuyện gần nhất và số tin nhắn chưa đọc.
* **Triển khai Messages List UI**: Hiển thị danh sách các tin nhắn trong một cuộc trò chuyện cụ thể, bao gồm tin nhắn văn bản và media.
* **Triển khai gửi tin nhắn với Emojis**: Tích hợp chức năng chọn và gửi biểu tượng cảm xúc trong tin nhắn.
* **Triển khai WebSocket**: Thiết lập kết nối WebSocket từ Frontend để nhận tin nhắn và thông báo theo thời gian thực.
* **Triển khai Media Upload**: Cho phép người dùng tải lên và gửi các file đa phương tiện (hình ảnh, video) trong cuộc trò chuyện.

## Công nghệ sử dụng

* **Backend**:
    * Java
    * Spring Boot
    * Spring Data JPA / Hibernate
    * Spring Security
    * WebSockets (Spring WebSocket)
    * Lombok
    * Maven / Gradle
    * OpenAPI / Swagger
* **Frontend**:
    * Angular (Phiên bản 20.0.2)
    * TypeScript
    * SCSS (Sass)
    * Angular Router
    * RxJS
    * ngx-emoji-mart
    * WebSockets (client-side)
* **Database**: PostgreSQL
* **Xác thực / Ủy quyền**: Keycloak
* **Triển khai**: Docker, Docker Compose

## Yêu cầu hệ thống

* **Node.js** (v22.16.0)
* **npm**
* **Angular CLI** (Phiên bản 20.0.2)
* **Java Development Kit (JDK)** (jdk 17)
* **Maven** 
* **Docker Desktop** (Bao gồm Docker Engine và Docker Compose)

## Cài đặt và Khởi chạy dự án

Để cài đặt và khởi chạy ứng dụng này, vui lòng làm theo các bước sau:

1.  **Clone repository:**
    ```bash
    git clone <URL_repository_của_bạn>
    cd WhatsappClone
    ```
    *(Thay `WhatsappClone` bằng tên thư mục gốc của dự án nếu khác)*

2.  **Thiết lập Backend Services (PostgreSQL & Keycloak):**
    Sử dụng Docker Compose để khởi chạy các dịch vụ cơ sở dữ liệu và xác thực.
    ```bash
    docker-compose up -d
    ```
    Bạn sẽ cần cấu hình file `docker-compose.yml` theo môi trường của bạn. Vui lòng tham khảo tài liệu chi tiết hoặc các file cấu hình mẫu trong thư mục dự án để biết thông tin kết nối Keycloak (admin console, client ID, realm, user) và cơ sở dữ liệu.

3.  **Khởi chạy Backend Project (Spring Boot):**
    Điều hướng đến thư mục dự án Backend và chạy ứng dụng Spring Boot. Đảm bảo cấu hình kết nối cơ sở dữ liệu và Keycloak trong backend của bạn đã chính xác.
    ```bash

    mvn spring-boot:run


4.  **Khởi chạy Frontend Project (Angular):**
    Điều hướng đến thư mục dự án Frontend, cài đặt các dependencies và khởi chạy ứng dụng. Đảm bảo cấu hình môi trường Angular (Keycloak client và URL backend API) đã chính xác.
    ```bash
    npm install
    ng serve 
    ```

## Liên hệ

Nếu có bất kỳ câu hỏi hoặc góp ý nào về dự án, vui lòng liên hệ:

* **Đỗ Văn Huy** -(dovanhuy2003za@gmail.com)
* [Link GitHub của bạn](https://github.com/dovanhuy2003za)
* [Link LinkedIn của bạn](https://www.linkedin.com/in/%C4%91%E1%BB%97-v%C4%83n-huy-69287b282/)
