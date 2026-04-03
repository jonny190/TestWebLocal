# 🚀 Deploy to Coolify

This guide will help you deploy this Next.js application to Coolify.

## Prerequisites

- A Coolify account (https://coolify.io)
- A PostgreSQL database (can be created in Coolify or external)
- GitHub repository (optional but recommended)

## Quick Deploy (One-Click)

### Option 1: Deploy from GitHub

1. Push your code to a GitHub repository
2. Log in to Coolify
3. Click "Add Resource" → "Git Repository"
4. Select your repository
5. Configure environment variables:
   - `DATABASE_URL` - Your PostgreSQL connection string
   - `NEXTAUTH_SECRET` - A secure random string (use `openssl rand -hex 32`)
   - `NEXTAUTH_URL` - Your application URL
6. Click "Deploy"

### Option 2: Deploy from Docker Image

1. Build the Docker image locally:
   ```bash
   docker build -t modern-stack .
   ```

2. Push to Docker Hub or GitHub Container Registry:
   ```bash
   docker tag modern-stack your-username/modern-stack:latest
   docker push your-username/modern-stack:latest
   ```

3. In Coolify, add a new resource → "Docker Image"
4. Enter your image name
5. Configure environment variables
6. Deploy!

## Environment Variables

Required environment variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host:5432/db?schema=public` |
| `NEXTAUTH_SECRET` | Secret for NextAuth | `your-random-secret-string` |
| `NEXTAUTH_URL` | Application URL | `https://your-app.example.com` |

Optional environment variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `GITHUB_ID` | GitHub OAuth client ID | `your-client-id` |
| `GITHUB_SECRET` | GitHub OAuth client secret | `your-client-secret` |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | `your-client-id` |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | `your-client-secret` |

## Database Setup

### Option 1: Create Database in Coolify

1. In Coolify, go to "Resources" → "Add Resource" → "Database" → "PostgreSQL"
2. Configure your database settings
3. Copy the connection string
4. Add it to your application's environment variables

### Option 2: Use External PostgreSQL

1. Create a PostgreSQL database on your preferred provider (Supabase, Railway, AWS RDS, etc.)
2. Update the `DATABASE_URL` environment variable with your connection string
3. Run database migrations:
   ```bash
   npx prisma db push
   ```

## Running Migrations

After deployment, you need to run database migrations:

1. Connect to your Coolify server via SSH or use the web terminal
2. Run:
   ```bash
   npx prisma db push
   ```

## Custom Domain

1. In Coolify, go to your application settings
2. Add your custom domain
3. Update DNS records to point to your Coolify server
4. Enable SSL/TLS certificate (automatic with Let's Encrypt)

## Monitoring

- View logs in Coolify's dashboard
- Monitor resource usage
- Set up alerts for errors and downtime

## Troubleshooting

### Application won't start
- Check environment variables are set correctly
- Verify DATABASE_URL is accessible
- Check application logs for errors

### Database connection failed
- Verify DATABASE_URL is correct
- Check firewall settings
- Ensure PostgreSQL is running and accessible

### Build failed
- Check Node.js version compatibility
- Verify all dependencies are listed in package.json
- Check build logs for specific errors

## Support

For issues:
- Check the main README.md
- Open an issue on GitHub
- Join our community Discord

---

Happy deploying! 🎉
