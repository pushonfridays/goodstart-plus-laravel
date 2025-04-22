import * as React from 'react'
export function useMobileNavigation() {
  return React.useCallback(() => {
    // Remove pointer-events style from body...
    document.body.style.removeProperty('pointer-events')
  }, [])
}
