# Halsnæs Haveservice 🌿

A modern, SEO-optimized website for **Halsnæs Haveservice**, a Danish gardening service provider. Built with [Next.js](https://nextjs.org/) and [Supabase](https://supabase.com/), this site is designed for performance, scalability, and conversion.

## 🚀 Features

- ⚡️ **Next.js 14** - App Router architecture for fast, scalable web applications
- 🛠️ **Supabase** - Secure backend for authentication and data (e.g. contact form submissions)
- 🌐 **SEO Optimized** - Dynamic city-specific landing pages and meta tags for better Google rankings
- 📱 **Responsive Design** - Mobile-first UI for an optimal experience across all devices
- 🗺️ **Local SEO** - Individual pages for key cities in Halsnæs Kommune
- 📩 **Contact Form** - Integrated with Supabase for real-time form submissions
- 🔒 **Auth (Optional)** - Supabase Auth (Magic Link, Google OAuth) ready

## 🏡 Pages and Structure

- `/` - Homepage with hero section, services, testimonials, and contact
- `/service/[slug]` - Service-specific landing pages (e.g. Lawn mowing, Hedge trimming)
- `/service/[slug]/[city]` - City-specific SEO landing pages (e.g. `graesslaaning/frederiksværk`)
- `/kontakt` - Contact page with form
- `/login` (Optional) - Admin login for client dashboard (if needed)

## 🧠 Tech Stack

| Technology     | Purpose                                |
|----------------|----------------------------------------|
| Next.js        | Frontend Framework                     |
| Supabase       | Backend (Auth, DB, API)                |
| Tailwind CSS   | Styling                                |
| Vercel / VPS   | Deployment (depending on hosting plan) |
| PostgreSQL     | Database (via Supabase)                |

## ⚙️ Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-org/halsnaes-haveservice.git
   cd halsnaes-haveservice


2. **Install dependencies:**
   
   ```bash
     npm install

3. **Create .env.local file and add:**

     ```bash
        NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
        NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
        SUPABASE_SERVICE_ROLE_KEY=your-service-role-key (if using server actions)

4. **Run locally:**

      ```bash
         npm run dev

---

## 🔍 SEO Strategy

The SEO strategy is designed to ensure high visibility in search engines, especially for local searches related to the services provided by Halsnæs Haveservice:

- ✅ **Dynamic Meta Titles & Descriptions**: Each page has custom meta tags for better search engine indexing.
- ✅ **Page Headings & Schema.org Structured Data**: City and service names are dynamically included in the headings and structured data for improved search engine understanding.
- ✅ **Sitemap & robots.txt**: Automatically generated to ensure search engines can efficiently crawl and index the site.
- ✅ **Clean, Human-Friendly URLs**: Examples like `/service/graesslaaning/frederiksværk` provide clarity and improve SEO.
- ✅ **Optimized Performance Scores**: Core Web Vitals (LCP, CLS, etc.) are considered to improve rankings and provide a better user experience.

---

## 📦 Deployment

This website can be deployed easily using two different methods:

- **Vercel**: The simplest and most efficient option for Next.js deployments, offering automatic scaling and performance optimizations out of the box.
- **VPS Deployment**:
  - Recommended setup: Ubuntu server with Node.js, PM2 for process management, and Nginx as a reverse proxy.
  - Ideal for those looking to self-host or manage the infrastructure.

---

## ✍️ Author

This project was developed as a client solution for **Halsnæs Haveservice** by a freelance/agency team focused on delivering modern, high-performing websites with a focus on user conversion and SEO optimization.

---

## 📄 License

This project is proprietary and developed exclusively for the client **Halsnæs Haveservice**. Redistribution, reuse, or any form of commercial use without permission is strictly prohibited.

> ⚠️ Redistribution, resale, or unauthorized reuse of this project is not permitted.

---


Let me know if you'd like this adapted to a private GitHub repo format, or need a Danish version too!

