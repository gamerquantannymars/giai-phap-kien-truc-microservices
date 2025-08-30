# Giai Pháp Kiến Trúc Microservices

## Giới Thiệu
Dự án này nhằm mục đích cung cấp một cái nhìn tổng quan về kiến trúc Microservices thông qua việc phát triển ứng dụng quản lý sách đơn giản. Ứng dụng bao gồm các dịch vụ độc lập như quản lý sách, quản lý tác giả và quản lý người dùng.

## Cách Triển Khai
1. Cài đặt Docker để chạy các dịch vụ microservices.
2. Kéo các hình ảnh Docker từ kho chứa.
3. Chạy các container với lệnh: `docker-compose up`.

## Cấu Trúc Dự Án
- **book-service**: Dịch vụ quản lý thông tin sách.
- **author-service**: Dịch vụ quản lý thông tin tác giả.
- **user-service**: Dịch vụ quản lý người dùng.

## Công Nghệ Sử Dụng
- Node.js cho backend
- MongoDB cho cơ sở dữ liệu
- Docker cho quản lý container

## Tích Hợp và Liên Kết
Dịch vụ giao tiếp với nhau qua RESTful API. Bạn có thể thử nghiệm API bằng Postman.

## Liên Hệ
Nếu bạn có bất kỳ câu hỏi nào, vui lòng mở vấn đề trên GitHub hoặc gửi email đến [your-email@example.com].