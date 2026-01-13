import type { PrismaConfig } from '@prisma/client/runtime';

const config: PrismaConfig = {
  adapter: 'postgresql',
  url: process.env.DATABASE_URL!,
};

export default config;
