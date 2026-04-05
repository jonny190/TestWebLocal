import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";

// PrismaClient will be available after running `npm install` and `npx prisma generate`
// @ts-ignore
const prisma = new (require("@prisma/client").PrismaClient)();

const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;
const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const nextAuthSecret = process.env.NEXTAUTH_SECRET;

if (!nextAuthSecret) {
  throw new Error("NEXTAUTH_SECRET is not set");
}

const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    ...(githubId && githubSecret
      ? [
          Github({
            clientId: githubId,
            clientSecret: githubSecret,
          }),
        ]
      : []),
    ...(googleClientId && googleClientSecret
      ? [
          Google({
            clientId: googleClientId,
            clientSecret: googleClientSecret,
          }),
        ]
      : []),
  ],
  callbacks: {
    async session({ session, user }: { session: any; user: any }) {
      if (session.user) {
        (session.user as { id?: string }).id = (user as { id: string }).id;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
  secret: nextAuthSecret,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
