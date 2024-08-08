import React, { useState } from 'react'

const useImagePreloader = () => {
    const [imgSpinner, setImgSpinner] = useState(true)
    const handleLoadingImageComplete = async (
        img
    ) => {
        img.currentTarget.classList.remove('opacity-0')
        setImgSpinner(false)
    }

    return { handleLoadingImageComplete, imgSpinner }
}

export default useImagePreloader