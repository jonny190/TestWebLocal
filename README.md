# 🚀 Modern Tech Stack - Next.js 14 Boilerplate

[![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)](https://tailwindcss.com)
[![Prisma](https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=41B883)](https://prisma.io)
[![Docker](https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com)
[![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![License](https://img.shields.io/github/license/yourusername/your-repo?style=for-the-badge&color=blue)](LICENSE)
[![Deploy to Coolify](https://img.shields.io/badge/Deploy_to_Coolify-007BFF?style=for-the-badge&logo=coolify&logoColor=white)](https://coolify.io)
[![CI/CD](https://img.shields.io/badge/CI-CD-121011?style=for-the-badge&logo=github&logoColor=white)](https://github.com/features/actions)
[![Next.js 14](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/docs)

✨ Modern • 🚀 Fast • 🔒 Secure • 📦 Production Ready

A production-ready, full-stack boilerplate featuring the latest technologies for building modern web applications. Ready for deployment on [Coolify](https://coolify.io), [Vercel](https://vercel.com), and [Docker](https://docker.com).

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Framework** | Next.js | 14.2.3 |
| **Language** | TypeScript | 5.4.5 |
| **UI Library** | React | 18.3.1 |
| **Styling** | Tailwind CSS | 3.4.3 |
| **Icons** | Lucide React | Latest |
| **Components** | shadcn/ui | Latest |
| **Database** | PostgreSQL | 15 |
| **ORM** | Prisma | 5.14.0 |
| **Auth** | NextAuth.js | 4.24.7 |

### Core Framework
- **Next.js 14** - App Router, Server Components, Edge Runtime
- **TypeScript** - Full type safety with strict mode
- **React 18** - Latest React with concurrent features

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautifully designed components
- **Lucide React** - High-quality icon set

### Database
- **Prisma ORM** - Type-safe database client
- **PostgreSQL** - Production-ready relational database

### Authentication
- **Auth.js (NextAuth v4)** - Secure authentication with multiple providers

### Deployment
- **Docker** - Containerization for easy deployment
- **Coolify Ready** - One-click deployment support
- **Vercel Ready** - Optimized for Vercel deployment

### Monitoring & Analytics
- **Vercel Analytics** - Real-time analytics
- **Vercel Speed Insights** - Performance monitoring

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Environment Variables](#-environment-variables)
- [Database](#-database)
- [Contributing](#-contributing)

## 🎨 Features

- ✅ **Modern Stack** - Next.js 14, React 18, TypeScript, Tailwind CSS
- ✅ **Dark Mode** - Built-in theme provider with persistence
- ✅ **Responsive** - Mobile-first design with Tailwind CSS
- ✅ **Type-Safe** - Full TypeScript with strict mode
- ✅ **SEO Optimized** - Metadata and Open Graph support
- ✅ **Database Ready** - Prisma ORM with PostgreSQL
- ✅ **Authentication** - NextAuth.js ready
- ✅ **Docker** - Containerization for easy deployment
- ✅ **CI/CD** - GitHub Actions ready
- ✅ **Performance** - Optimized for production

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- PostgreSQL
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/your-repo.git
cd TestWebLocal

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Edit .env.local with your configuration
# Add your DATABASE_URL and NEXTAUTH_SECRET

# Run database migrations
npx prisma db push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

```bash
# Development
npm run dev           # Start development server
npm run build         # Build for production
npm start             # Start production server
npm run lint          # Run ESLint

# Database
npm run db:generate   # Generate Prisma client
npm run db:migrate    # Run database migrations
npm run db:push       # Push schema to database
npm run db:studio     # Open Prisma Studio

# Docker
docker-compose up     # Start with Docker
docker-compose down   # Stop Docker containers
```

## 🌐 Deployment

### Deploy to Coolify

This application is ready for deployment on [Coolify](https://coolify.io/).

1. Push your code to a GitHub repository
2. Add your repository to Coolify
3. Configure environment variables:
   - `DATABASE_URL`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL`
4. Deploy!

### Docker Deployment

```bash
# Build the Docker image
docker build -t modern-stack .

# Run the container
docker run -p 3000:3000 -e DATABASE_URL="your-db-url" modern-stack
```

## 📁 Project Structure

```
TestWebLocal/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   └── health/              # Health check endpoint
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Home page with modern design
│   └── globals.css              # Global styles with Tailwind
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── sheet.tsx
│   │   └── index.ts
│   ├── navbar.tsx               # Responsive navigation
│   ├── footer.tsx               # Footer with newsletter
│   ├── theme-provider.tsx       # Theme context provider
│   └── theme-toggle.tsx         # Dark mode toggle
├── lib/                         # Utilities
│   └── utils.ts                 # cn() helper function
├── prisma/                      # Prisma configuration
│   └── schema.prisma            # Database schema
├── public/                      # Static assets
├── .github/                     # GitHub workflows
│   └── workflows/
│       └── ci.yml               # CI/CD pipeline
├── Dockerfile                   # Production Dockerfile
├── Dockerfile.dev              # Development Dockerfile
├── docker-compose.yml          # Production compose file
├── docker-compose.dev.yml      # Development compose file
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── .eslintrc.json              # ESLint configuration
├── .env.example                # Environment variables template
├── .env.local                  # Local environment variables
├── .gitignore                  # Git ignore rules
├── .dockerignore               # Docker ignore rules
├── package.json                # Dependencies
├── README.md                   # Project documentation
├── COOLIFY_DEPLOYMENT.md       # Coolify deployment guide
├── PROJECT_SUMMARY.md          # Project summary
└── LICENSE                     # MIT License
```

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `NEXTAUTH_SECRET` | Secret for authentication | Yes |
| `NEXTAUTH_URL` | Application URL | Yes (production) |
| `GITHUB_ID` | GitHub OAuth client ID | No |
| `GITHUB_SECRET` | GitHub OAuth client secret | No |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | No |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | No |

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🌍 Internationalization

Ready for i18n with Next.js 14's App Router support.

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.dev)
- [Auth.js Documentation](https://authjs.dev)
- [Docker Documentation](https://docs.docker.com)

## 🤝 Contributing

Please read our [Contributing Guidelines](.github/CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.dev) for the amazing component library
- [Next.js](https://nextjs.org) for the incredible framework
- [Prisma](https://www.prisma.io) for the best ORM experience
- [Coolify](https://coolify.io) for the amazing deployment platform
- [Vercel](https://vercel.com) for the amazing developer experience

## 📊 Project Stats

| Metric | Status |
|--------|--------|
| **Status** | 🟢 Production Ready |
| **Framework** | Next.js 14 |
| **Language** | TypeScript |
| **Components** | 20+ UI Components |
| **Database** | PostgreSQL + Prisma |
| **Auth** | NextAuth.js Ready |
| **Docker** | ✅ Supported |
| **Analytics** | ✅ Vercel Analytics |
| **CI/CD** | ✅ GitHub Actions |

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run database migrations
npx prisma db push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.dev)
- [Auth.js Documentation](https://authjs.dev)
- [Docker Documentation](https://docs.docker.com)
- [Coolify Documentation](https://coolify.io/docs)

## 🤝 Contributing

Please read our [Contributing Guidelines](.github/CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.dev) for the amazing component library
- [Next.js](https://nextjs.org) for the incredible framework
- [Prisma](https://www.prisma.io) for the best ORM experience
- [Coolify](https://coolify.io) for the amazing deployment platform
- [Vercel](https://vercel.com) for the amazing developer experience

---

Made with ❤️ using modern web technologies

**Happy Coding!** 🚀
