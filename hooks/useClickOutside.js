import { MutableRefObject, useEffect, useRef, useState } from 'react'

export const useClickOutside = () => {
    const ref = useRef()
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!ref.current.contains(e.target)) {
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [ref])

    return { open, setOpen, toggle, ref }
}