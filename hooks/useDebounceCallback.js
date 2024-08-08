import { MutableRefObject, useEffect, useRef } from 'react'

export const useDebounceCallback = (delay = 100) => {
    const timerRef = useRef()

    useEffect(() => clearTimeout(timerRef.current), [])

    return (callback) => {
        clearTimeout(timerRef.current)
        timerRef.current = setTimeout(callback, delay)
    }
}