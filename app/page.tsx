import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Twitter, ArrowRight, Zap, Shield, Cpu, Database, Globe, Code } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Badge variant="secondary" className="mb-4">
            🚀 Modern Tech Stack
          </Badge>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
            Build with the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Latest Technologies
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive starter kit featuring Next.js 14, TypeScript, Tailwind CSS,
            Prisma ORM, and more. Ready for production deployment on Coolify.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" className="gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Github className="w-4 h-4" />
              Star on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack Highlights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built with modern, production-ready technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <div className="p-3 bg-blue-500/10 rounded-lg w-fit mb-4">
                <Code className="w-6 h-6 text-blue-500" />
              </div>
              <CardTitle>Next.js 14</CardTitle>
              <CardDescription>App Router & Server Components</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Latest React framework with SSR, SSG, and edge rendering capabilities
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="p-3 bg-blue-600/10 rounded-lg w-fit mb-4">
                <Cpu className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>TypeScript</CardTitle>
              <CardDescription>Strict Mode</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Full type safety with strict TypeScript configuration
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="p-3 bg-purple-500/10 rounded-lg w-fit mb-4">
                <Zap className="w-6 h-6 text-purple-500" />
              </div>
              <CardTitle>Tailwind CSS</CardTitle>
              <CardDescription>Utility-First Styling</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Modern styling with Tailwind and shadcn/ui components
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="p-3 bg-green-500/10 rounded-lg w-fit mb-4">
                <Database className="w-6 h-6 text-green-500" />
              </div>
              <CardTitle>Prisma ORM</CardTitle>
              <CardDescription>Type-Safe Database</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Next-generation Node.js and TypeScript ORM
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="p-3 bg-orange-500/10 rounded-lg w-fit mb-4">
                <Shield className="w-6 h-6 text-orange-500" />
              </div>
              <CardTitle>Auth.js</CardTitle>
              <CardDescription>NextAuth v4</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Secure authentication with multiple providers
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="p-3 bg-pink-500/10 rounded-lg w-fit mb-4">
                <Globe className="w-6 h-6 text-pink-500" />
              </div>
              <CardTitle>Open Graph</CardTitle>
              <CardDescription>Social Cards</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Beautiful social media previews with dynamic OG images
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="p-3 bg-indigo-500/10 rounded-lg w-fit mb-4">
                <Globe className="w-6 h-6 text-indigo-500" />
              </div>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>Vercel Analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Real-time analytics with Vercel Analytics
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="p-3 bg-teal-500/10 rounded-lg w-fit mb-4">
                <Zap className="w-6 h-6 text-teal-500" />
              </div>
              <CardTitle>Speed Insights</CardTitle>
              <CardDescription>Performance Monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Real-world performance data with Vercel Speed Insights
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Optimized for performance with Next.js edge runtime, static generation, and code splitting.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Secure by Default</h3>
            <p className="text-muted-foreground">
              Built-in security features including Content Security Policy, XSS protection, and secure headers.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Developer Experience</h3>
            <p className="text-muted-foreground">
              Perfect DX with TypeScript, ESLint, Prettier, and hot reloading development server.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Demo Section */}
      <section className="container mx-auto px-4 py-12">
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Ready to Deploy</CardTitle>
            <CardDescription>
              This application is ready for production deployment on Coolify
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">One-Click Deploy</h4>
                <p className="text-sm text-muted-foreground">
                  Click the deploy button below to deploy this application to your Coolify server
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Environment Variables</h4>
                <p className="text-sm text-muted-foreground">
                  Configure your database URL, auth secrets, and provider credentials
                </p>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-4 font-mono text-sm">
              <p className="mb-2">Copy the repository URL and deploy to Coolify:</p>
              <p className="text-green-600">https://github.com/yourusername/your-repo.git</p>
            </div>

            <Button className="w-full md:w-auto gap-2">
              <Globe className="w-4 h-4" />
              Deploy to Coolify
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
