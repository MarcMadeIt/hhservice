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

