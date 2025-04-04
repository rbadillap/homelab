import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const exampleOriginalSvg = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#a)"><g clip-path="url(#b)"><rect width="48" height="48" rx="12" fill="#444CE7"/><path fill="url(#c)" d="M0 0h48v48H0z"/><g filter="url(#d)" fill-rule="evenodd" clip-rule="evenodd"><path opacity=".5" d="m34.94 12.3-7.264-1.946c-.502-.134-.909.178-.909.697v7.521c0 .52.407 1.05.909 1.184l7.265 1.946c.501.135.908-.177.908-.697v-7.52c0-.52-.407-1.05-.908-1.184m-7.264-4.767c-2.007-.537-3.633.71-3.633 2.788v7.521c0 2.077 1.626 4.197 3.633 4.734l7.265 1.947c2.006.537 3.632-.71 3.632-2.788v-7.52c0-2.078-1.626-4.197-3.632-4.735z" fill="url(#e)"/><path opacity=".7" d="m29.235 18.428-9.081-2.433c-.502-.135-.908.177-.908.697v9.401c0 .52.407 1.05.908 1.184l9.081 2.433c.502.135.909-.177.909-.697v-9.401c0-.52-.407-1.05-.909-1.184m-9.081-5.254c-2.006-.537-3.633.71-3.633 2.788v9.401c0 2.077 1.627 4.197 3.633 4.734l9.081 2.434c2.007.537 3.633-.71 3.633-2.788v-9.401c0-2.077-1.626-4.197-3.633-4.734z" fill="url(#f)"/><path d="m23.53 24.556-10.897-2.92c-.502-.135-.909.177-.909.697v11.282c0 .519.407 1.049.909 1.183l10.897 2.92c.502.134.908-.178.908-.697V25.74c0-.52-.406-1.049-.908-1.183m-10.897-5.74C10.626 18.277 9 19.525 9 21.602v11.282c0 2.077 1.626 4.196 3.633 4.734l10.897 2.92c2.006.537 3.633-.71 3.633-2.788V26.47c0-2.077-1.627-4.196-3.633-4.734z" fill="url(#g)"/></g></g><rect x="1" y="1" width="46" height="46" rx="11" stroke="url(#h)" stroke-width="2"/></g><defs><linearGradient id="c" x1="24" y1="0" x2="26" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".12"/></linearGradient><linearGradient id="e" x1="31.308" y1="8.507" x2="27.547" y2="22.542" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".8"/><stop offset="1" stop-color="#fff" stop-opacity=".5"/></linearGradient><linearGradient id="f" x1="24.695" y1="14.391" x2="20.464" y2="30.18" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".8"/><stop offset="1" stop-color="#fff" stop-opacity=".5"/></linearGradient><linearGradient id="g" x1="18.081" y1="20.275" x2="13.38" y2="37.819" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".8"/><stop offset="1" stop-color="#fff" stop-opacity=".5"/></linearGradient><linearGradient id="h" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".12"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="a" x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="-3"/><feGaussianBlur stdDeviation="1.5"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/><feBlend in2="shape" result="effect1_innerShadow_3051_46847"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="3"/><feGaussianBlur stdDeviation="1.5"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/><feBlend in2="effect1_innerShadow_3051_46847" result="effect2_innerShadow_3051_46847"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feMorphology radius="1" in="SourceAlpha" result="effect3_innerShadow_3051_46847"/><feOffset/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/><feBlend in2="effect2_innerShadow_3051_46847" result="effect3_innerShadow_3051_46847"/></filter><filter id="d" x="6" y="5.25" width="36" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feMorphology radius="1.5" in="SourceAlpha" result="effect1_dropShadow_3051_46847"/><feOffset dy="2.25"/><feGaussianBlur stdDeviation="2.25"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_3051_46847"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_3051_46847" result="shape"/></filter><clipPath id="b"><rect width="48" height="48" rx="12" fill="#fff"/></clipPath></defs></svg>`;
  
  const exampleMonoSvg = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="12" fill="#444444"/>
  <g fill-rule="evenodd" clip-rule="evenodd">
    <path opacity=".5" d="m34.94 12.3-7.264-1.946c-.502-.134-.909.178-.909.697v7.521c0 .52.407 1.05.909 1.184l7.265 1.946c.501.135.908-.177.908-.697v-7.52c0-.52-.407-1.05-.908-1.184m-7.264-4.767c-2.007-.537-3.633.71-3.633 2.788v7.521c0 2.077 1.626 4.197 3.633 4.734l7.265 1.947c2.006.537 3.632-.71 3.632-2.788v-7.52c0-2.078-1.626-4.197-3.632-4.735z" fill="#CCCCCC"/>
    <path opacity=".7" d="m29.235 18.428-9.081-2.433c-.502-.135-.908.177-.908.697v9.401c0 .52.407 1.05.908 1.184l9.081 2.433c.502.135.909-.177.909-.697v-9.401c0-.52-.407-1.05-.909-1.184m-9.081-5.254c-2.006-.537-3.633.71-3.633 2.788v9.401c0 2.077 1.627 4.197 3.633 4.734l9.081 2.434c2.007.537 3.633-.71 3.633-2.788v-9.401c0-2.077-1.626-4.197-3.633-4.734z" fill="#AAAAAA"/>
    <path d="m23.53 24.556-10.897-2.92c-.502-.135-.909.177-.909.697v11.282c0 .519.407 1.049.909 1.183l10.897 2.92c.502.134.908-.178.908-.697V25.74c0-.52-.406-1.049-.908-1.183m-10.897-5.74C10.626 18.277 9 19.525 9 21.602v11.282c0 2.077 1.626 4.196 3.633 4.734l10.897 2.92c2.006.537 3.633-.71 3.633-2.788V26.47c0-2.077-1.627-4.196-3.633-4.734z" fill="#888888"/>
  </g>
  <rect x="1" y="1" width="46" height="46" rx="11" stroke="#DDDDDD" stroke-width="2"/>
</svg>`;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold mb-2 text-white">SVG2Mono</h1>
        <p className="text-lg mb-6 max-w-2xl text-gray-300">
          Convert your colorful SVG logos to elegant monochromatic versions while preserving 
          structure and shape. Perfect for creating consistent brand assets for different applications.
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl">
          <div className="flex-1 p-6 border border-gray-700 rounded-lg bg-gray-800">
            <h2 className="text-xl font-bold mb-4 text-gray-100">Features</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Preserves original SVG structure and shape</li>
              <li>Converts colors to monochromatic grayscale</li>
              <li>Replaces gradients and complex effects</li>
              <li>Maintains legibility and contrast</li>
              <li>Provides clean white background</li>
              <li>Powered by Claude AI</li>
            </ul>
          </div>
          
          <div className="flex-1 p-6 border border-gray-700 rounded-lg bg-gray-800">
            <h2 className="text-xl font-bold mb-4 text-gray-100">How It Works</h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-300">
              <li>Paste your SVG code</li>
              <li>Click the convert button</li>
              <li>Preview the monochromatic version</li>
              <li>Copy the converted SVG code</li>
            </ol>
          </div>
        </div>
        
        <div className="w-full max-w-3xl mt-6">
          <h2 className="text-xl font-bold mb-4 text-gray-100">Example</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border border-gray-700 rounded-lg bg-gray-800">
            <div>
              <h3 className="font-bold mb-3 text-gray-200">Original (Colored)</h3>
              <div className="border border-gray-700 rounded p-4 bg-white flex items-center justify-center h-[200px]" 
                  dangerouslySetInnerHTML={{ __html: exampleOriginalSvg }} />
            </div>
            <div>
              <h3 className="font-bold mb-3 text-gray-200">Converted (Monochromatic)</h3>
              <div className="border border-gray-700 rounded p-4 bg-white flex items-center justify-center h-[200px]" 
                  dangerouslySetInnerHTML={{ __html: exampleMonoSvg }} />
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-6">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/generate"
          >
            Convert SVG to Mono
          </Link>
          <a
            className="rounded-full border border-solid border-gray-700 transition-colors flex items-center justify-center hover:bg-gray-800 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px] text-gray-300"
            href="https://github.com/rbadillap/agent-svg2mono"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <span className="text-sm text-gray-400">
          Created by <a href="mailto:info@rbadillap.dev" className="underline text-gray-300">Ronny Badilla</a>
        </span>
      </footer>
    </div>
  );
}
