import { getWindowWidth } from '@/lib/utils/common'
import { useEffect, useState } from 'react'

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(getWindowWidth())

    useEffect(() => {
        const handleResize = () => setWindowWidth(getWindowWidth())

        window.addEventListener('resize', handleResize, true)

        return () => window.removeEventListener('resize', handleResize, true)
    }, [])

    return windowWidth
}

export const useMediaQuery = (maxWidth) => {
    const windowWidth = useWindowWidth()
    const [isMedia, setIsMedia] = useState(windowWidth <= maxWidth)

    useEffect(() => {
        setIsMedia(windowWidth <= maxWidth)
    }, [windowWidth, maxWidth])

    return isMedia
}