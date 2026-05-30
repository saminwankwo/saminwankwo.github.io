import { useState, useCallback } from 'react'

export function useClipboard(resetMs = 2000) {
  const [copied, setCopied] = useState(false)

  const copy = useCallback((text) => {
    if (!navigator.clipboard) return

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), resetMs)
    }).catch(err => {
      console.warn('Clipboard copy failed:', err)
    })
  }, [resetMs])

  return { copied, copy }
}
