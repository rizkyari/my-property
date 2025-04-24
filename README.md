# 🏠 My Property - Real Estate Landing & Feedback Platform

**My Property** is a modern, responsive frontend application built to showcase a real estate platform landing page along with a customer feedback management system.

This project is designed to demonstrate clean architecture, UI/UX best practices, API integration, and modern frontend techniques using Next.js 14 and React ecosystem tools.

This project is consist of:

1. ✨ **Landing Page (Static)** 
2. 📝 **Feedback System (Dynamic)** 

---

## 📦 Tech Stack

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Shadcn/ui**
- **React Hook Form + Zod**
- **Axios**
- **React Query**

---

## ✨ Features

### 🔹 Landing Page
- Fully responsive and mobile-friendly
- Pixel-perfect layout based on custom Figma design
- Component-based structure for reusability
- Swiper.js carousel integration for customer testimonials
- Interactive FAQ section with accordion behavior

### 🔹 Feedback System
- Create new customer feedback with form validation
- Upload multiple images with real-time preview
- Search by unit or feedback content with debounce
- Filter by status (`waiting`, `pending`, etc.)
- Status badge with colored indicators
- Skeleton loading for smoother UX
- Fully integrated with external REST API

---

## 🌐 Pages Overview

| URL Path       | Description                         |
|----------------|-------------------------------------|
| `/`            | Real estate landing page            |
| `/feedback`    | Customer feedback submission & list |

---

## 🔧 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/your-username/my-property.git
cd my-property

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev

```

## 🔐 Environment Variables

```bash
# Create a .env file and add:
NEXT_PUBLIC_API_BASE=https://devtest.panglimapropertindo.id/api

```

---

## 📁 Folder Structure (Simplified)

```bash

src/
├── app/
│   ├── page.tsx               # Landing page
│   └── feedback/page.tsx      # Feedback feature
├── components/                # UI Components
├── hooks/                     # Custom hooks (e.g. useFeedbacks)
├── lib/                       # API utilities, constants
├── styles/                    # Global CSS

```

## 🧑‍🚀 Author

Developed by Rizky Ari

[Linkedin](https://www.linkedin.com/in/rizkyarihar/) | [GitHub](https://github.com/rizkyari)