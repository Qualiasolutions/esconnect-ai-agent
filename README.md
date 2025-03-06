# ESConnect AI Agent

ESConnect AI is an intelligent assistant for energy sector professionals, providing real-time insights, analysis, and support for energy markets, sustainability planning, and regulatory compliance.

## Features

- **Energy Sector Analysis**: Get real-time insights and analysis for energy markets and trends
- **Sustainability Planning**: Develop comprehensive sustainability strategies with AI assistance
- **Regulatory Compliance**: Stay updated on energy regulations and compliance requirements
- **AI-Powered Chat**: Interact with Qualia, our specialized energy sector AI assistant

## Tech Stack

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- OpenAI API
- Vercel Analytics
- Mistral AI (coming soon)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/esconnect-ai-agent.git
   cd esconnect-ai-agent
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Set the environment variables in the Vercel dashboard
4. Deploy!

## Project Structure

```
esconnect-ai-agent/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js app router
│   │   ├── api/         # API routes
│   │   │   └── chat/    # Chat API endpoint
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   ├── components/      # React components
│   │   ├── ui/          # UI components
│   │   └── QualiaChat.tsx # Chat component
│   └── lib/             # Utility functions and libraries
│       ├── mistral.ts   # Mistral AI integration
│       └── utils.ts     # Helper functions
├── .gitignore           # Git ignore file
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies
├── README.md            # Project documentation
└── tailwind.config.js   # Tailwind CSS configuration
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenAI](https://openai.com/)
- [Vercel](https://vercel.com/)
- [Mistral AI](https://mistral.ai/)