'use client'

import { useState, useTransition } from 'react'

interface SvgMonochromeState {
  readonly svg: string | null
  readonly explanation: string | null
  readonly error: string | null
}

interface GenerateResponse {
  readonly convertedSvg: string
  readonly explanation: string
}

interface SvgMonochromeResult extends SvgMonochromeState {
  readonly isPending: boolean
  readonly convert: (svgCode: string) => Promise<void>
}

const DEFAULT_API_URL = '/api/generate'

/**
 * Pure function to convert SVG to monochrome without React dependencies
 */
export async function convertToMono(
  svgCode: string,
  apiUrl: string = DEFAULT_API_URL
): Promise<GenerateResponse> {
  if (!svgCode?.trim()) {
    throw new Error('SVG code is required')
  }

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ svgCode }),
  })

  if (!response.ok) {
    throw new Error(`Failed to convert SVG: ${response.statusText}`)
  }

  return response.json()
}

const initialState: SvgMonochromeState = {
  svg: null,
  explanation: null,
  error: null,
}

/**
 * React hook for SVG to monochrome conversion with enhanced UX
 */
export function useSvgMonochrome(apiUrl: string = DEFAULT_API_URL): SvgMonochromeResult {
  const [isPending, startTransition] = useTransition()
  const [state, setState] = useState<SvgMonochromeState>(initialState)

  async function convert(svgCode: string): Promise<void> {
    if (!svgCode?.trim()) return

    startTransition(() => {
      setState(prev => ({ ...prev, error: null }))
    })

    try {
      const data = await convertToMono(svgCode, apiUrl)

      startTransition(() => {
        setState({
          svg: data.convertedSvg,
          explanation: data.explanation,
          error: null,
        })
      })
    } catch (err) {
      startTransition(() => {
        setState(prev => ({
          ...prev,
          error: err instanceof Error ? err.message : 'Failed to convert SVG',
        }))
      })
    }
  }

  return {
    ...state,
    isPending,
    convert,
  }
} 