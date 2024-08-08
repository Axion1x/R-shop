export const getCheckedPriceFrom = (price) =>
    +price > 10000 ? '5000' : price

export const getCheckedPriceTo = (price) =>
    +price > 10000 ? '10000' : price