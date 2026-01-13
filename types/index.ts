export type UserRole = 'USER' | 'ADMIN';

export interface User {
  id: string;
  name: string | null;
  email: string;
  role: UserRole;
  createdAt: Date;
}

export interface Project {
  id: string;
  name: string;
  description: string | null;
  userId: string;
  createdAt: Date;
}

export interface Prompt {
  id: string;
  title: string;
  content: string;
  projectId: string;
  version: number;
  createdAt: Date;
}
