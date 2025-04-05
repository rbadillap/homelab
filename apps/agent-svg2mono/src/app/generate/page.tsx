'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSvgMonochrome } from '@/hooks/use-svg-monochrome';

interface PreviewProps {
  svg: string | null;
  type: 'original' | 'converted';
}

function Preview({ svg, type }: PreviewProps) {
  if (!svg) return (
    <div className="border border-gray-700/30 rounded-lg p-5 bg-gray-900/50 flex items-center justify-center h-[250px] text-gray-500 shadow-inner backdrop-blur-sm">
      <div className="text-center">
        <svg className="mx-auto h-12 w-12 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={
            type === 'original' 
              ? "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              : "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          } />
        </svg>
        <p className="mt-2">{type === 'original' ? 'Original' : 'Converted'} SVG preview will appear here</p>
      </div>
    </div>
  );

  return (
    <div 
      className="border border-gray-700/50 rounded-lg p-5 bg-gradient-to-b from-white to-gray-100 flex items-center justify-center h-[250px] shadow-inner" 
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );
}

const EXAMPLE_SVG = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="12" fill="#444CE7"/>
  <!-- Paste your SVG code here -->
</svg>`;

export default function GeneratePage() {
  const [svgCode, setSvgCode] = useState('');
  const { convert, svg: convertedSvg, isPending, error } = useSvgMonochrome();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await convert(svgCode);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
      <div className="container mx-auto max-w-6xl py-12 px-6">
        <nav className="mb-12 flex items-center">
          <Link href="/" className="flex items-center group">
            <svg className="h-8 w-8 text-gray-300 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="ml-2 text-gray-300 group-hover:text-white transition-colors">Back to Home</span>
          </Link>
        </nav>
        
        <header className="mb-10 border-b border-gray-800 pb-10">
          <h1 className="text-3xl font-bold mb-3 text-white tracking-tight">SVG to Monochromatic Converter</h1>
          <p className="text-lg text-gray-400 max-w-3xl">
            Transform your colorful SVG logos to elegant monochromatic versions while preserving 
            structure and shape. Perfect for creating consistent brand assets.
          </p>
        </header>
      
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <label htmlFor="svgCode" className="block font-medium text-gray-200 text-sm tracking-wide uppercase">
                  Original SVG Code
                </label>
                <textarea
                  id="svgCode"
                  rows={12}
                  className="w-full p-4 border border-gray-700 rounded-lg font-mono text-sm bg-gray-800/80 text-gray-100 shadow-inner focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 focus:outline-none transition-all"
                  value={svgCode}
                  onChange={(e) => setSvgCode(e.target.value)}
                  placeholder={EXAMPLE_SVG}
                  required
                />
                <p className="text-sm text-gray-500">
                  Paste your complete SVG code including the opening and closing &lt;svg&gt; tags.
                </p>
              </div>
              
              <button
                type="submit"
                disabled={isPending}
                className="w-full px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium shadow-lg shadow-blue-700/20 hover:from-blue-500 hover:to-blue-700 transition-all disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                {isPending ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Converting...
                  </span>
                ) : 'Convert to Monochromatic'}
              </button>
            </form>
            
            {error && (
              <div className="mt-6 p-4 bg-red-900/30 border border-red-800/50 text-red-300 rounded-lg flex items-start">
                <svg className="flex-shrink-0 h-5 w-5 text-red-400 mt-0.5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>{error}</span>
              </div>
            )}
          </div>
          
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">Original SVG</h2>
                {svgCode && (
                  <span className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded">
                    Preview
                  </span>
                )}
              </div>
              <Preview svg={svgCode} type="original" />
            </div>
            
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">Monochromatic Version</h2>
                {convertedSvg && (
                  <span className="text-xs px-2 py-1 bg-blue-900/30 text-blue-300 rounded border border-blue-800/30">
                    Result
                  </span>
                )}
              </div>
              <Preview svg={convertedSvg} type="converted" />
            </div>
            
            {convertedSvg && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-md font-medium text-gray-300">Generated Code</h3>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(convertedSvg);
                      alert('SVG code copied to clipboard!');
                    }}
                    className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-1.5 text-sm"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    <span>Copy SVG Code</span>
                  </button>
                </div>
                <pre className="p-4 bg-gray-800/80 border border-gray-700/50 overflow-x-auto rounded-lg text-sm font-mono text-gray-300 shadow-inner max-h-[300px]">
                  {convertedSvg}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 