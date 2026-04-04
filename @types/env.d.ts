/// <reference types="next" />

interface Env {
  NEXT_PUBLIC_APP_NAME?: string;
  NEXT_PUBLIC_APP_URL?: string;
  DATABASE_URL?: string;
  NEXTAUTH_URL?: string;
  NEXTAUTH_SECRET?: string;
  GITHUB_ID?: string;
  GITHUB_SECRET?: string;
  GOOGLE_CLIENT_ID?: string;
  GOOGLE_CLIENT_SECRET?: string;
  NEXT_PUBLIC_ANALYTICS_ID?: string;
  NEXT_PUBLIC_ENABLE_DB_CONNECTION?: string;
}

declare global {
  interface NodeJS {
    ProcessEnv: Env;
  }
}

export {};
