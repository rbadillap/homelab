import { anthropic } from '@ai-sdk/anthropic';
import { generateText } from 'ai';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const { svgCode } = await req.json();
    
    if (!svgCode) {
      return NextResponse.json(
        { error: 'SVG code is required' },
        { status: 400 }
      );
    }
    
    const prompt = `
I have the following SVG of a logo and I need to convert it to a monochromatic version with a white background. 
Please preserve the structure and shape of the original logo, but replace all colors, gradients, and complex effects 
with a monochromatic grayscale palette that maintains good legibility and contrast. 
The background should be white (#FFFFFF). 

Here's an example of the conversion I'm looking for:

Original SVG:
\`\`\`svg
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#a)"><g clip-path="url(#b)"><rect width="48" height="48" rx="12" fill="#444CE7"/><path fill="url(#c)" d="M0 0h48v48H0z"/><g filter="url(#d)" fill-rule="evenodd" clip-rule="evenodd"><path opacity=".5" d="m34.94 12.3-7.264-1.946c-.502-.134-.909.178-.909.697v7.521c0 .52.407 1.05.909 1.184l7.265 1.946c.501.135.908-.177.908-.697v-7.52c0-.52-.407-1.05-.908-1.184m-7.264-4.767c-2.007-.537-3.633.71-3.633 2.788v7.521c0 2.077 1.626 4.197 3.633 4.734l7.265 1.947c2.006.537 3.632-.71 3.632-2.788v-7.52c0-2.078-1.626-4.197-3.632-4.735z" fill="url(#e)"/><path opacity=".7" d="m29.235 18.428-9.081-2.433c-.502-.135-.908.177-.908.697v9.401c0 .52.407 1.05.908 1.184l9.081 2.433c.502.135.909-.177.909-.697v-9.401c0-.52-.407-1.05-.909-1.184m-9.081-5.254c-2.006-.537-3.633.71-3.633 2.788v9.401c0 2.077 1.627 4.197 3.633 4.734l9.081 2.434c2.007.537 3.633-.71 3.633-2.788v-9.401c0-2.077-1.626-4.197-3.633-4.734z" fill="url(#f)"/><path d="m23.53 24.556-10.897-2.92c-.502-.135-.909.177-.909.697v11.282c0 .519.407 1.049.909 1.183l10.897 2.92c.502.134.908-.178.908-.697V25.74c0-.52-.406-1.049-.908-1.183m-10.897-5.74C10.626 18.277 9 19.525 9 21.602v11.282c0 2.077 1.626 4.196 3.633 4.734l10.897 2.92c2.006.537 3.633-.71 3.633-2.788V26.47c0-2.077-1.627-4.196-3.633-4.734z" fill="url(#g)"/></g></g><rect x="1" y="1" width="46" height="46" rx="11" stroke="url(#h)" stroke-width="2"/></g><defs><linearGradient id="c" x1="24" y1="0" x2="26" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".12"/></linearGradient><linearGradient id="e" x1="31.308" y1="8.507" x2="27.547" y2="22.542" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".8"/><stop offset="1" stop-color="#fff" stop-opacity=".5"/></linearGradient><linearGradient id="f" x1="24.695" y1="14.391" x2="20.464" y2="30.18" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".8"/><stop offset="1" stop-color="#fff" stop-opacity=".5"/></linearGradient><linearGradient id="g" x1="18.081" y1="20.275" x2="13.38" y2="37.819" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".8"/><stop offset="1" stop-color="#fff" stop-opacity=".5"/></linearGradient><linearGradient id="h" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".12"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="a" x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="-3"/><feGaussianBlur stdDeviation="1.5"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/><feBlend in2="shape" result="effect1_innerShadow_3051_46847"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="3"/><feGaussianBlur stdDeviation="1.5"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/><feBlend in2="effect1_innerShadow_3051_46847" result="effect2_innerShadow_3051_46847"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feMorphology radius="1" in="SourceAlpha" result="effect3_innerShadow_3051_46847"/><feOffset/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/><feBlend in2="effect2_innerShadow_3051_46847" result="effect3_innerShadow_3051_46847"/></filter><filter id="d" x="6" y="5.25" width="36" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feMorphology radius="1.5" in="SourceAlpha" result="effect1_dropShadow_3051_46847"/><feOffset dy="2.25"/><feGaussianBlur stdDeviation="2.25"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_3051_46847"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_3051_46847" result="shape"/></filter><clipPath id="b"><rect width="48" height="48" rx="12" fill="#fff"/></clipPath></defs></svg>
\`\`\`

Monochromatic version:
\`\`\`svg
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="12" fill="#444444"/>
  <g fill-rule="evenodd" clip-rule="evenodd">
    <path opacity=".5" d="m34.94 12.3-7.264-1.946c-.502-.134-.909.178-.909.697v7.521c0 .52.407 1.05.909 1.184l7.265 1.946c.501.135.908-.177.908-.697v-7.52c0-.52-.407-1.05-.908-1.184m-7.264-4.767c-2.007-.537-3.633.71-3.633 2.788v7.521c0 2.077 1.626 4.197 3.633 4.734l7.265 1.947c2.006.537 3.632-.71 3.632-2.788v-7.52c0-2.078-1.626-4.197-3.632-4.735z" fill="#CCCCCC"/>
    <path opacity=".7" d="m29.235 18.428-9.081-2.433c-.502-.135-.908.177-.908.697v9.401c0 .52.407 1.05.908 1.184l9.081 2.433c.502.135.909-.177.909-.697v-9.401c0-.52-.407-1.05-.909-1.184m-9.081-5.254c-2.006-.537-3.633.71-3.633 2.788v9.401c0 2.077 1.627 4.197 3.633 4.734l9.081 2.434c2.007.537 3.633-.71 3.633-2.788v-9.401c0-2.077-1.626-4.197-3.633-4.734z" fill="#AAAAAA"/>
    <path d="m23.53 24.556-10.897-2.92c-.502-.135-.909.177-.909.697v11.282c0 .519.407 1.049.909 1.183l10.897 2.92c.502.134.908-.178.908-.697V25.74c0-.52-.406-1.049-.908-1.183m-10.897-5.74C10.626 18.277 9 19.525 9 21.602v11.282c0 2.077 1.626 4.196 3.633 4.734l10.897 2.92c2.006.537 3.633-.71 3.633-2.788V26.47c0-2.077-1.627-4.196-3.633-4.734z" fill="#888888"/>
  </g>
  <rect x="1" y="1" width="46" height="46" rx="11" stroke="#DDDDDD" stroke-width="2"/>
</svg>
\`\`\`

Notice how the complex filters, gradient effects, and colored elements are all converted to grayscale values 
while maintaining the original structure and relative visual hierarchy of the elements. The various shades of gray 
help maintain contrast and legibility.

Now, here is the original SVG code I need you to convert:

\`\`\`svg
${svgCode}
\`\`\`

Please provide ONLY the complete monochromatic version of the SVG code without any explanation.
`;
    
    const { text } = await generateText({
      model: anthropic('claude-3-haiku-20240307'),
      prompt,
    });
    
    // Extract SVG code from the response
    const svgRegex = /```svg\s*([\s\S]*?)\s*```|<svg[\s\S]*?<\/svg>/;
    const match = text.match(svgRegex);
    const convertedSvg = match ? match[1] || match[0] : text;
    
    return NextResponse.json({ 
      convertedSvg,
      explanation: text.replace(svgRegex, '').trim()
    });
  } catch (error) {
    console.error('Error converting SVG:', error);
    return NextResponse.json(
      { error: 'Failed to convert SVG to monochromatic version' },
      { status: 500 }
    );
  }
} 