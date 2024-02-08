import { debounce } from 'lodash'
import { useEffect, useRef, useMemo } from 'react'

export const useDebounce = (callback: () => void, delay: number = 300) => {
  const ref = useRef(callback)

  useEffect(() => {
    ref.current = callback
  }, [callback])

  const debounced = useMemo(() => {
    return debounce(() => ref.current(), delay)
  }, [])

  return debounced
}
