import './globals.css';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'PromptForge | Master Your AI Prompts',
  description:
    'The ultimate platform for prompt engineering, versioning, and testing.',
  keywords: ['AI', 'Prompt Engineering', 'LLM', 'SaaS'],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {}
        {children}
        {}
      </body>
    </html>
  );
}
