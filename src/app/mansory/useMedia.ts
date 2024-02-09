import { useEffect, useState } from 'react'

export default function useMedia(queries: string[], values: number[], defaultValue: number) {
  // this code checks the current screen size 
  // and determine what its range in the given media queries 
  // then return the number of items should be displayed
  const match = () => values[queries.findIndex(q => matchMedia(q).matches)] || defaultValue;
  const [value, set] = useState(match);
  useEffect(() => {
    const handler = () => set(match)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return value
}
