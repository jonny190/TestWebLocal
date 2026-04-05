import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { User } from "@prisma/client";

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

type SessionCallbackParams = {
  session: {
    user?: {
      id?: string;
    };
  };
  user: User;
};

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
    async session({ session, user }: SessionCallbackParams) {
      if (session.user) {
        session.user.id = user.id;
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
