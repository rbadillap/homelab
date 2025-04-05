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

const initialState: SvgMonochromeState = {
  svg: null,
  explanation: null,
  error: null,
}

export function useSvgMonochrome(): SvgMonochromeResult {
  const [isPending, startTransition] = useTransition()
  const [state, setState] = useState<SvgMonochromeState>(initialState)

  async function convert(svgCode: string): Promise<void> {
    if (!svgCode?.trim()) return

    startTransition(() => {
      setState(prev => ({ ...prev, error: null }))
    })

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ svgCode }),
      })

      if (!response.ok) {
        throw new Error(`Failed to convert SVG: ${response.statusText}`)
      }

      const data = (await response.json()) as GenerateResponse

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