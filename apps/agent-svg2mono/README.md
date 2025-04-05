# SVG2Mono

SVG2Mono is a web application that converts colorful SVG logos to elegant monochromatic versions while preserving structure and shape. It uses Claude AI to analyze and transform SVG code, making it perfect for creating consistent brand assets for different applications.

## Features

- Preserves original SVG structure and shape
- Converts colors to monochromatic grayscale
- Replaces gradients and complex effects
- Maintains legibility and contrast
- Provides clean white background
- Powered by Claude AI
- React hooks for easy integration
- TypeScript support with full type safety

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

The application provides multiple ways to integrate the SVG conversion functionality:

### Pure Function

The most straightforward way to use SVG2Mono is through our pure function, which doesn't have any React dependencies:

```typescript
import { convertToMono } from '@/hooks/svg-monochrome'

async function convertLogo() {
  try {
    const { convertedSvg, explanation } = await convertToMono(svgCode)
    // Use the converted SVG and explanation
  } catch (error) {
    console.error('Failed to convert SVG:', error)
  }
}
```

You can also specify a custom API endpoint:

```typescript
const result = await convertToMono(svgCode, 'https://your-api.com/convert')
```

### React Hook

For React applications, we provide a custom hook with enhanced UX features:

```typescript
import { useSvgMonochrome } from '@/hooks/svg-monochrome'

function YourComponent() {
  // Optionally specify a custom API endpoint
  const { convert, svg, explanation, isPending, error } = useSvgMonochrome()
  // or with custom API URL:
  // const { convert, svg, explanation, isPending, error } = useSvgMonochrome('https://your-api.com/convert')

  async function handleConvert(svgCode: string) {
    await convert(svgCode)
  }

  return (
    <div>
      {isPending && <div>Converting...</div>}
      {error && <div>Error: {error}</div>}
      {svg && (
        <>
          <div dangerouslySetInnerHTML={{ __html: svg }} />
          {explanation && <p>{explanation}</p>}
        </>
      )}
    </div>
  )
}
```

The hook provides:
- Smooth loading states with React transitions
- Error handling
- Type-safe responses
- Optional API URL configuration
- AI-generated explanations of the conversion

## Technology Stack

- [Next.js](https://nextjs.org/) - React framework
- [AI SDK](https://sdk.vercel.ai/docs) - AI integration
- [Claude 3 Haiku](https://www.anthropic.com/claude) - AI model
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components) - Performance optimization

## Implementation Details

### Hook Implementation

The application uses a custom React hook and a pure function for managing SVG conversion:

```typescript
interface GenerateResponse {
  readonly convertedSvg: string
  readonly explanation: string
}

// Pure function for non-React usage
export async function convertToMono(
  svgCode: string,
  apiUrl?: string
): Promise<GenerateResponse>

// React hook with enhanced UX
interface SvgMonochromeResult {
  readonly svg: string | null
  readonly explanation: string | null
  readonly isPending: boolean
  readonly error: string | null
  readonly convert: (svgCode: string) => Promise<void>
}

export function useSvgMonochrome(apiUrl?: string): SvgMonochromeResult
```

### API Implementation

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
