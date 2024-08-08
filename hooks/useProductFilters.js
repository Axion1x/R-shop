import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import api from '@/api/apiInstance'
import {
    checkOffsetParam,
    getSearchParamsUrl,
    updateSearchParam,
} from '@/lib/utils/common'

const useProductFilters = (
    searchParams,
    category,
    isCatalog = false
) => {
    const [products, setProducts] = useState({ count: 0, items: [] })
    const isValidOffset = checkOffsetParam(searchParams.offset)
    const pageCount = Math.ceil((products.count || 12) / 12)
    const [currentPage, setCurrentPage] = useState(
        isValidOffset ? +(searchParams.offset || 1) : 1 // Перевірка на 1-індекс
    )
    const pathname = usePathname()
    const [productsSpinner, setProductsSpinner] = useState(false)

    const loadProductsByFilter = async ({ limit, offset, additionalParam, isCatalog, category }) => {
        setProductsSpinner(true)
        try {
            const response = await api.get(`/api/goods/filter?limit=${limit}&offset=${offset}&${additionalParam}&isCatalog=${isCatalog}&category=${category}`)
            const data = await response.data;
            if (typeof data !== 'object') {
                throw new Error('Unexpected data format');
            }

            setProducts(data)
        } catch (error) {
            console.error('Error loading products:', error)
            setProducts({ count: 0, items: [] }); // Reset products on error
        } finally {
            setProductsSpinner(false)
        }
    }

    useEffect(() => {
        const urlParams = getSearchParamsUrl()
        urlParams.delete('offset')

        if (!isValidOffset) {
            loadProductsByFilter({
                limit: 12,
                offset: 0,
                additionalParam: urlParams.toString(),
                isCatalog,
                category,
            })

            updateSearchParam('offset', 1, pathname) // Перевірка на 1-індекс
            setCurrentPage(1) // Перевірка на 1-індекс
            return
        }

        loadProductsByFilter({
            limit: 12 * +(searchParams.offset || 1),
            offset: (+(searchParams.offset || 1) - 1) * 12, // Перевірка на 1-індекс
            additionalParam: urlParams.toString(),
            isCatalog,
            category,
        })

        setCurrentPage(+(searchParams.offset || 1)) // Перевірка на 1-індекс
    }, [])

    const handlePageChange = ({ selected }) => {
        const urlParams = getSearchParamsUrl()
        urlParams.delete('offset')

        loadProductsByFilter({
            limit: 12 * (selected + 1), // Перевірка на 1-індекс
            offset: selected * 12,
            additionalParam: urlParams.toString(),
            isCatalog,
            category,
        })

        updateSearchParam('offset', selected + 1, pathname) // Перевірка на 1-індекс
        setCurrentPage(selected + 1) // Перевірка на 1-індекс
    }

    const handleApplyFiltersWithCategory = (categoryType) =>{
        updateSearchParam('type', categoryType, pathname)
        handlePageChange({ selected: 0 })
    }

    const handleApplyFiltersWithPrice = (priceFrom, priceTo) => {
        updateSearchParam('priceFrom', priceFrom, pathname)
        updateSearchParam('priceTo', priceTo, pathname)
        handlePageChange({ selected: 0 })
    }

    const handleApplyFiltersWithSizes = (sizes) => {
        updateSearchParam('sizes', encodeURIComponent(JSON.stringify(sizes)), pathname)
        handlePageChange({ selected: 0 })
    }
    return {
        products,
        pageCount,
        currentPage,
        productsSpinner,
        handlePageChange,
        handleApplyFiltersWithCategory,
        handleApplyFiltersWithPrice,
        handleApplyFiltersWithSizes,
    }
}

export default useProductFilters
