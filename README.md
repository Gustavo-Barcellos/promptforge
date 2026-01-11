# PromptForge

PromptForge is a web-based platform designed to streamline the lifecycle of LLM prompts. It enables developers and AI practitioners to create, refine, version, document, and test prompts with ease. The platform provides tools for prompt refactoring via LLMs, automatic Markdown documentation generation, and basic prompt testing with cost and quality metrics.

## Features (MVP)

- **Prompt Management**: Organize prompts into projects with full CRUD operations.
- **Prompt Editor**: A clean editor interface with prompt refactoring capabilities.
- **Prompt Refactoring**: Automatically optimize prompts for clarity and token efficiency using LLMs.
- **Versioning**: Keep track of prompt changes with a simple version history.
- **Auto Documentation**: Generate Markdown documentation for each prompt with descriptions and examples.
- **Prompt Testing**: Run prompts against example inputs and collect basic metrics (tokens, cost estimation).
- **LLM Integration**: Connect to OpenAI and RouteLLM APIs for prompt execution and refactoring.
- **User Authentication**: Secure login via OAuth (Google/GitHub).

## Tech Stack

- **Frontend**: Next.js (TypeScript) + Tailwind CSS
- **Backend**: Next.js API Routes (TypeScript)
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js (OAuth providers: Google, GitHub)
- **Editor**: Monaco Editor
- **Deployment**: Vercel (Frontend), Render (Backend), PostgreSQL (hosted)
- **LLM APIs**: OpenAI, RouteLLM

## Getting Started

### Prerequisites

- Node.js >= 18.x
- PostgreSQL >= 14.x
- Docker (optional, for containerized services)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Gustavo-Barcellos/promptforge.git
   cd promptforge
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:

   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/promptforge
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   GITHUB_ID=your_github_oauth_id
   GITHUB_SECRET=your_github_oauth_secret
   GOOGLE_ID=your_google_oauth_id
   GOOGLE_SECRET=your_google_oauth_secret
   OPENAI_API_KEY=your_openai_api_key
   ```

4. Set up the database:

   ```bash
   npx prisma migrate dev --name init
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
promptforge/
├── prisma/                  # Prisma schema and migrations
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable UI components
│   ├── lib/                 # Utility functions and database client
│   ├── pages/               # Next.js pages and API routes
│   ├── styles/              # Global styles
│   └── types/               # TypeScript types
├── .env.local               # Environment variables
├── next.config.js           # Next.js configuration
├── package.json             # Project dependencies
└── tsconfig.json            # TypeScript configuration
```

## Roadmap

- Prompt chaining and workflows
- A/B testing for prompts
- VSCode extension for local prompt management
- GitHub Actions integration for prompt testing
- Advanced metrics and prompt quality analysis

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on how to submit pull requests, report issues, and suggest improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions, suggestions, or feedback, please open an issue on GitHub or contact [Gustavo Barcellos](https://github.com/Gustavo-Barcellos).
