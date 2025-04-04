# SVG2Mono

SVG2Mono is a web application that converts colorful SVG logos to elegant monochromatic versions while preserving structure and shape. It uses Claude AI to analyze and transform SVG code, making it perfect for creating consistent brand assets for different applications.

## Features

- Preserves original SVG structure and shape
- Converts colors to monochromatic grayscale
- Replaces gradients and complex effects
- Maintains legibility and contrast
- Provides clean white background
- Powered by Claude AI

## Getting Started

First, set up your environment variables by creating a `.env.local` file in the root directory with your Anthropic API key:

```bash
ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How It Works

1. Paste your SVG code into the converter
2. Click the "Convert to Monochromatic" button
3. Preview the monochromatic version
4. Copy the converted SVG code

## API Usage

The application provides a simple API endpoint that you can use directly:

```typescript
async function convertSvgToMono(svgCode: string) {
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ svgCode }),
  });
  
  const data = await response.json();
  return data.convertedSvg;
}
```

## Technology Stack

- [Next.js](https://nextjs.org/) - React framework
- [AI SDK](https://sdk.vercel.ai/docs) - AI integration
- [Claude 3 Haiku](https://www.anthropic.com/claude) - AI model

## Created By

```typescript
import { anthropic } from '@ai-sdk/anthropic';
import { generateText } from 'ai';

// POST /api/generate
export async function POST(req) {
  const { prompt } = await req.json();
  const { text } = await generateText({
    model: anthropic('claude-3-haiku-20240307'),
    prompt,
  });
  return Response.json({ text });
}
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
