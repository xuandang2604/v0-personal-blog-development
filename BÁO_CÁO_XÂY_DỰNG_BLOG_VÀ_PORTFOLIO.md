# BÁO CÁO XÂY DỰNG BLOG VÀ PORTFOLIO CÁ NHÂN

**Sinh viên:** Nguyễn Lê Xuân Đăng  
**Lớp:** Năm cuối  
**Trường:** Đại học HUTECH  
**Chuyên ngành:** Lập trình Mạng  
**Ngày hoàn thành:** Tháng 12 năm 2024

---

## MỤC LỤC

1. [Giới thiệu](#giới-thiệu)
2. [Mục tiêu dự án](#mục-tiêu-dự-án)
3. [Kiến trúc hệ thống](#kiến-trúc-hệ-thống)
4. [Công nghệ sử dụng](#công-nghệ-sử-dụng)
5. [Các tính năng chính](#các-tính-năng-chính)
6. [Chi tiết triển khai](#chi-tiết-triển-khai)
7. [Thách thức và giải pháp](#thách-thức-và-giải-pháp)
8. [Kết luận](#kết-luận)
9. [Tài liệu tham khảo](#tài-liệu-tham-khảo)

---

## 1. GIỚI THIỆU {#giới-thiệu}

Dự án này là một blog và portfolio cá nhân được xây dựng nhằm chia sẻ kiến thức về lập trình mạng, đặc biệt là các chủ đề liên quan đến Java và JavaScript. Portfolio này không chỉ là một nơi để trưng bày các kỹ năng lập trình mà còn là một nền tảng để chia sẻ kinh nghiệm học tập và phát triển chuyên môn.

Dự án được phát triển bằng các công nghệ web hiện đại, tập trung vào trải nghiệm người dùng (UX) tuyệt vời, hiệu suất cao, và thiết kế responsive. Toàn bộ ứng dụng được xây dựng trên nền tảng Next.js 15 với TypeScript, đảm bảo tính an toàn về kiểu dữ liệu và khả năng bảo trì cao.

---

## 2. MỤC TIÊU DỰ ÁN {#mục-tiêu-dự-án}

### 2.1 Mục tiêu chính

- **Chia sẻ kiến thức:** Cung cấp một nền tảng để chia sẻ các bài viết chuyên sâu về lập trình mạng
- **Trưng bày kỹ năng:** Giới thiệu các công nghệ và kỹ năng lập trình mà tôi đã học được
- **Xây dựng danh tiếng:** Tạo một portfolio chuyên nghiệp để thu hút các cơ hội việc làm
- **Học tập liên tục:** Thực hành các công nghệ web mới nhất thông qua dự án thực tế

### 2.2 Mục tiêu kỹ thuật

- Xây dựng một ứng dụng web full-stack hiệu suất cao
- Triển khai các tính năng interactive và animations mượt mà
- Đảm bảo responsive design trên tất cả các thiết bị
- Tối ưu hóa SEO và performance

---

## 3. KIẾN TRÚC HỆ THỐNG {#kiến-trúc-hệ-thống}

### 3.1 Sơ đồ kiến trúc

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                    Client Layer (Browser)               │
│  ┌──────────────────────────────────────────────────┐   │
│  │  React Components (TSX)                          │   │
│  │  - Navigation, Footer, Pages                     │   │
│  │  - Interactive Components (3D Cards, Animations) │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│              Next.js 15 App Router Layer                │
│  ┌──────────────────────────────────────────────────┐   │
│  │  Pages:                                          │   │
│  │  - /              (About Me - Hero Section)      │   │
│  │  - /expertise     (Technical Skills)             │   │
│  │  - /blog          (Blog Listing)                 │   │
│  │  - /blog/[slug]   (Blog Post Detail)             │   │
│  │  - /activities    (Activities & Achievements)    │   │
│  │  - /contact       (Contact Form)                 │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│              Styling & Animation Layer                  │
│  ┌──────────────────────────────────────────────────┐   │
│  │  Tailwind CSS v4 + Custom CSS Animations        │   │
│  │  - Network Programming Animations               │   │
│  │  - Scroll-based Zoom Effects                    │   │
│  │  - Gradient Backgrounds                         │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│              Static Content Layer                       │
│  ┌──────────────────────────────────────────────────┐   │
│  │  - Blog Posts Data (lib/blog-posts.ts)           │   │
│  │  - Images & Icons (public/)                      │   │
│  │  - Certificates & Activities Images             │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
\`\`\`

### 3.2 Cấu trúc thư mục

\`\`\`
project-root/
├── app/
│   ├── page.tsx                 # About Me page (Hero section)
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles & animations
│   ├── blog/
│   │   ├── page.tsx             # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx         # Blog post detail page
│   ├── expertise/
│   │   └── page.tsx             # Expertise & skills page
│   ├── activities/
│   │   └── page.tsx             # Activities showcase page
│   └── contact/
│       └── page.tsx             # Contact form page
├── components/
│   ├── navigation.tsx           # Header navigation
│   ├── footer.tsx               # Footer with social links
│   ├── GlobalAudio.tsx          # Global audio player
│   ├── somethings/
│   │   ├── ThreeDCard.tsx       # 3D avatar card
│   │   ├── Decrypting.tsx       # Decrypting text animation
│   │   └── DocApp.tsx           # Dock app component
│   └── ui/                      # shadcn/ui components
├── lib/
│   ├── blog-posts.ts            # Blog posts data
│   └── utils.ts                 # Utility functions
├── public/
│   ├── icons/                   # Programming language icons
│   ├── activities/              # Activity images
│   ├── certificates/            # Certificate images
│   └── avatar.png               # Profile avatar
└── package.json                 # Dependencies
\`\`\`

---

## 4. CÔNG NGHỆ SỬ DỤNG {#công-nghệ-sử-dụng}

### 4.1 Frontend Framework

| Công nghệ | Phiên bản | Mục đích |
|-----------|----------|---------|
| **Next.js** | 15 | Framework React với SSR, SSG, API routes |
| **React** | 19 | Library UI components |
| **TypeScript** | 5.x | Type-safe JavaScript |
| **Tailwind CSS** | v4 | Utility-first CSS framework |

### 4.2 UI Components & Libraries

| Thư viện | Mục đích |
|---------|---------|
| **shadcn/ui** | Pre-built accessible components |
| **Lucide React** | Icon library |
| **Radix UI** | Headless UI primitives |

### 4.3 Styling & Animation

| Công nghệ | Mục đích |
|-----------|---------|
| **CSS Animations** | Network programming theme animations |
| **Tailwind CSS** | Responsive design & utility classes |
| **CSS Gradients** | Beautiful gradient backgrounds |
| **CSS Transforms** | 3D effects & scroll-based animations |

### 4.4 Deployment & Hosting

| Dịch vụ | Mục đích |
|--------|---------|
| **Vercel** | Hosting & deployment |
| **GitHub** | Version control & repository |

---

## 5. CÁC TÍNH NĂNG CHÍNH {#các-tính-năng-chính}

### 5.1 About Me Page (Trang chủ)

**Tính năng:**
- Hero section với video background về lập trình mạng
- Animated 3D avatar card
- Decrypting text animation cho tên
- Dock app component với social links
- Tech stack grid (15 ngôn ngữ lập trình)
- Scroll-based zoom effect vào featured technology
- Work skills section (3 kỹ năng mềm)
- Scrolling tech company logos
- Professional work experience timeline (5 mốc thời gian)

**Công nghệ:**
- React hooks (useState, useRef, useEffect)
- CSS animations & transforms
- Scroll event listeners
- Random featured card selection

### 5.2 Blog Page

**Tính năng:**
- Hero section với gradient background
- Blog posts listing với filter by category
- Read time estimation
- Responsive card layout
- Related posts suggestions
- Search functionality

**Nội dung:**
- 9 bài viết về Java & JavaScript network programming
- Các chủ đề: Socket programming, TCP/UDP, Multithreading, HTTP Client, NIO, Node.js, WebSocket, REST API, Socket.IO

### 5.3 Blog Post Detail Page

**Tính năng:**
- Full blog post content
- Table of contents
- Code syntax highlighting
- Author information
- Related posts
- Share buttons

### 5.4 Expertise Page

**Tính năng:**
- Technical skills showcase
- 15 programming languages/technologies
- 6 support technologies (Google, Microsoft, Meta, Amazon, Netflix, Apple, IBM, Oracle)
- Certificates section (5 certificates)
- Skill descriptions

### 5.5 Activities Page

**Tính năng:**
- Timeline of activities & achievements
- 5 activity categories:
  - Bóng đá (Football)
  - Tình nguyện (Volunteering)
  - CLB Lập trình (Programming Club)
  - Chạy bộ & Gym (Running & Fitness)
  - Các hoạt động khác
- Images for each activity
- Zigzag layout for visual interest

### 5.6 Contact Page

**Tính năng:**
- Contact form (Name, Email, Message)
- Form validation
- 3D animated background
- Code visualization
- Social links
- Email integration ready

---

## 6. CHI TIẾT TRIỂN KHAI {#chi-tiết-triển-khai}

### 6.1 Hero Section Implementation

\`\`\`typescript
// Key features:
- Video background (6-second loop)
- Network animation overlay
- Gradient backgrounds with blur effects
- Animated scroll indicator
- Responsive layout (4:6 ratio on desktop)
\`\`\`

**Thách thức:**
- Video autoplay bị chặn trên một số trình duyệt
- **Giải pháp:** Tạo CSS animation thay thế với network programming theme

### 6.2 Tech Stack Zoom Effect

\`\`\`typescript
// Implementation:
- 15 cards displayed in 5 columns
- Random featured card selection on page load
- Scroll-based zoom animation (4x scale)
- Featured card moves to center on scroll
- Non-featured cards fade out
- Smooth transitions with CSS transforms
\`\`\`

**Công thức tính toán:**
\`\`\`
scale = initialScale + scrollProgress * zoomFactor
opacity = isFeatured ? 1 : Math.max(0, 1 - scrollProgress * 3)
\`\`\`

### 6.3 Timeline Experience Section

\`\`\`typescript
// Features:
- Zigzag layout (left-right alternating)
- 5 experience milestones (2022-2024)
- Gradient colored icons
- Responsive design
- Hover effects with shadow
\`\`\`

### 6.4 Global Audio Player

\`\`\`typescript
// Implementation:
- Auto-play on page load (with fallback)
- Volume control (30% default)
- Muted state handling
- Error handling for browser policies
- Global component in layout
\`\`\`

### 6.5 Animations

**Network Programming Animation:**
\`\`\`css
@keyframes network-pulse {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
}

@keyframes data-flow {
  0% { transform: translateX(-100%); opacity: 0; }
  100% { transform: translateX(100%); opacity: 0; }
}

@keyframes network-nodes {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, -20px) scale(1.2); }
}
\`\`\`

---

## 7. THÁCH THỨC VÀ GIẢI PHÁP {#thách-thức-và-giải-pháp}

### 7.1 Thách thức 1: Video Background Autoplay

**Vấn đề:** Các trình duyệt hiện đại chặn autoplay video không có muted attribute

**Giải pháp:**
- Thêm `muted` attribute cho video
- Tạo CSS animation thay thế với network programming theme
- Sử dụng `playsInline` cho mobile compatibility

### 7.2 Thách thức 2: Scroll-based Zoom Effect

**Vấn đề:** Tính toán scroll progress và áp dụng transform mượt mà

**Giải pháp:**
\`\`\`typescript
const handleScroll = () => {
  const rect = techStackRef.current.getBoundingClientRect();
  const scrolled = -rect.top;
  const progress = Math.max(0, Math.min(1, 
    scrolled / (sectionHeight - viewportHeight)
  ));
  setScrollProgress(progress);
};
\`\`\`

### 7.3 Thách thức 3: Responsive Design

**Vấn đề:** Đảm bảo layout hoạt động tốt trên tất cả kích thước màn hình

**Giải pháp:**
- Sử dụng Tailwind CSS responsive prefixes (sm:, md:, lg:)
- Mobile-first approach
- Flexible grid layouts
- Adaptive font sizes

### 7.4 Thách thức 4: Performance Optimization

**Vấn đề:** Tối ưu hóa hiệu suất với nhiều animations

**Giải pháp:**
- Sử dụng CSS animations thay vì JavaScript
- Lazy loading cho images
- Code splitting với Next.js
- Optimize bundle size

### 7.5 Thách thức 5: Audio Autoplay Policy

**Vấn đề:** Trình duyệt chặn autoplay audio không có user interaction

**Giải pháp:**
\`\`\`typescript
const tryPlay = async () => {
  try {
    await audioRef.current.play();
  } catch (error) {
    // Fallback: muted autoplay
    audioRef.current.muted = true;
    await audioRef.current.play();
  }
};
\`\`\`

---

## 8. KẾT LUẬN {#kết-luận}

### 8.1 Thành tựu đạt được

1. **Xây dựng thành công một portfolio chuyên nghiệp** với thiết kế hiện đại và tính năng phong phú
2. **Chia sẻ kiến thức** thông qua 9 bài viết chuyên sâu về lập trình mạng
3. **Áp dụng công nghệ web mới nhất** (Next.js 15, TypeScript, Tailwind CSS v4)
4. **Tạo trải nghiệm người dùng tuyệt vời** với animations mượt mà và responsive design
5. **Học tập thực hành** các kỹ năng lập trình web hiện đại

### 8.2 Bài học rút ra

- **Tầm quan trọng của UX/UI:** Thiết kế tốt giúp tăng engagement
- **Performance matters:** Animations phải mượt mà để tạo ấn tượng tốt
- **Responsive design là bắt buộc:** Phải hỗ trợ tất cả thiết bị
- **Continuous learning:** Công nghệ web luôn phát triển, cần cập nhật liên tục

### 8.3 Hướng phát triển tương lai

1. **Thêm tính năng:**
   - Comment system cho blog posts
   - Newsletter subscription
   - Dark mode toggle
   - Multi-language support

2. **Cải thiện hiệu suất:**
   - Implement caching strategy
   - Optimize images with WebP
   - Add service worker for offline support

3. **Mở rộng nội dung:**
   - Thêm video tutorials
   - Interactive code examples
   - Live coding sessions

4. **SEO & Marketing:**
   - Improve SEO metadata
   - Add sitemap & robots.txt
   - Social media integration

---

## 9. TÀI LIỆU THAM KHẢO {#tài-liệu-tham-khảo}

### 9.1 Tài liệu chính thức

1. Next.js Documentation: https://nextjs.org/docs
2. React Documentation: https://react.dev
3. TypeScript Handbook: https://www.typescriptlang.org/docs
4. Tailwind CSS Documentation: https://tailwindcss.com/docs
5. shadcn/ui Components: https://ui.shadcn.com

### 9.2 Tài liệu lập trình mạng

1. Java Socket Programming: https://docs.oracle.com/javase/tutorial/networking/
2. Node.js Net Module: https://nodejs.org/api/net.html
3. WebSocket Protocol: https://tools.ietf.org/html/rfc6455
4. HTTP/2 Specification: https://tools.ietf.org/html/rfc7540

### 9.3 Công cụ & Dịch vụ

1. Vercel Deployment: https://vercel.com
2. GitHub Repository: https://github.com
3. Tailwind CSS: https://tailwindcss.com
4. Lucide Icons: https://lucide.dev

---

## PHỤ LỤC

### A. Danh sách Blog Posts

| STT | Tiêu đề | Danh mục | Thời gian đọc |
|-----|---------|---------|---------------|
| 1 | Lập trình Socket cơ bản với Java | Java | 8 phút |
| 2 | So sánh TCP và UDP trong Java | Java | 10 phút |
| 3 | Xây dựng Server đa luồng với Java | Java | 12 phút |
| 4 | HTTP Client trong Java | Java | 9 phút |
| 5 | Java NIO cho lập trình mạng | Java | 15 phút |
| 6 | Lập trình mạng cơ bản với Node.js | JavaScript | 7 phút |
| 7 | WebSocket: Xây dựng ứng dụng Real-time | JavaScript | 11 phút |
| 8 | Tạo REST API với Express.js | JavaScript | 13 phút |
| 9 | Socket.IO: Giao tiếp real-time | JavaScript | 10 phút |

### B. Công nghệ được sử dụng

**Frontend:**
- Next.js 15
- React 19
- TypeScript 5.x
- Tailwind CSS v4
- shadcn/ui
- Lucide React

**Deployment:**
- Vercel
- GitHub

**Tools:**
- VS Code
- Git
- npm/pnpm

### C. Thông tin liên hệ

- **Email:** xuandang2604@gmail.com
- **GitHub:** https://github.com/xuandang2604
- **LinkedIn:** [LinkedIn Profile]
- **Portfolio:** https://v0-personal-blog-development.vercel.app

---

**Ngày hoàn thành báo cáo:** Tháng 12 năm 2024  
**Người viết:** Nguyễn Lê Xuân Đăng  
**Trường:** Đại học HUTECH  
**Chuyên ngành:** Lập trình Mạng
