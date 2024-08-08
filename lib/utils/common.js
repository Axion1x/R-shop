export const getWindowWidth = () => {
    const {innerWidth: windowWidth} = window || {innerWidth: 0}
    return {windowWidth}
}
export const shuffle = (array) => {
    let currentIndex = array.length
    let randomIndex

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }

    return array
}
export const formatPrice = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

export const checkOffsetParam = (offset) => offset && !isNaN(+offset) && +offset >= 0

export const getSearchParamsUrl = () => new URLSearchParams(window.location.search)

export const updateSearchParam = (key, value, pathname) => {
    const urlParams = getSearchParamsUrl()
    urlParams.set(key, value)
    const newPath = `${pathname}?${urlParams.toString()}`
    window.history.pushState({path: newPath}, '', newPath)
}

export const checkPriceParam = (price) => price && !isNaN(price) && price >= 0 && price <= 10000

export const getCheckedArrayParam = (param) => {
    try {
        const arrayParam = JSON.parse(decodeURIComponent(param))
        if (Array.isArray(arrayParam) && arrayParam.length) return arrayParam
    } catch (error) {
        return false
    }
}
