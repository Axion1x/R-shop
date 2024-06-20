'use client'
import ReactPaginate from 'react-paginate'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import useProductFilters from '@/hooks/useProductFilters'
import { basePropsForMotion } from '@/constants/motion'
import { useLang } from '@/hooks/useLang'
import HeadingWithCount from '@/components/elements/HeadingWithCount/HeadingWithCount'
import { catalogActions } from '@/features/catalogOptions/catalogOptionsSlice'
import CatalogFilters from '@/components/modules/CatalogFilters/CatalogFilters'
import styles from '@/styles/catalog/index.module.scss'
import ProductsListItem from "@/components/modules/ProductListItem/ProductListItem"
import style from '@/styles/product-list-item/index.module.scss'
import skeleton from '@/styles/skeleton/index.module.scss'

const ProductsPage = ({ searchParams, pageName }) => {
    const { lang, translations } = useLang()
    const dispatch = useDispatch()
    const {
        products,
        pageCount,
        currentPage,
        productsSpinner,
        handlePageChange,
        handleApplyFiltersWithCategory,
        handleApplyFiltersWithPrice,
        handleApplyFiltersWithSizes,
    } = useProductFilters(searchParams, pageName, pageName === 'catalog')

    useEffect(() => {
        if (!lang || !pageName) return

        const categoryOptionsMap = {
            'catalog': {
                сategoryOptions: [
                    { id: 2, title: translations[lang].main_menu.cloth, href: '/catalog/cloth' },
                    { id: 3, title: translations[lang].main_menu.accessories, href: '/catalog/accessories' },
                    { id: 4, title: translations[lang].main_menu.souvenirs, href: '/catalog/souvenirs' },
                    { id: 5, title: translations[lang].main_menu.office, href: '/catalog/office' },
                ]
            },
            'accessories': {
                сategoryOptions: [
                    {
                        id: 1,
                        title: translations[lang].comparison.bags,
                        category: 'bags'
                    },
                    {
                        id: 2,
                        title: translations[lang].comparison.headdress,
                        category: 'headdress'
                    },
                    {
                        id: 3,
                        title: translations[lang].comparison.umbrella,
                        category: 'umbrella'
                    },
                ]
            },
            'cloth': {
                сategoryOptions: [
                    {
                        id: 1,
                        title: translations[lang].comparison['t-shirts'],
                        category: 't-shirts'
                    },
                    {
                        id: 2,
                        title: translations[lang].comparison['long-sleeves'],
                        category: 'long-sleeves'
                    },
                    {
                        id: 3,
                        title: translations[lang].comparison.hoodie,
                        category: 'hoodie'
                    },
                    {
                        id: 4,
                        title: translations[lang].comparison.outerwear,
                        category: 'outerwear'
                    },
                ]
            },
            'office': {
                сategoryOptions: [
                    {
                        id: 1,
                        title: translations[lang].comparison.pen,
                        category: 'pen'
                    },
                    {
                        id: 2,
                        title: translations[lang].comparison.notebook,
                        category: 'notebook'
                    },
                ]
            },
            'souvenirs': {
                сategoryOptions: [
                    {
                        id: 1,
                        title: translations[lang].comparison['business-souvenirs'],
                        category: 'business-souvenirs'
                    },
                ]
            }
        }

        dispatch(catalogActions.setCatalogCategoryOptions(categoryOptionsMap[pageName] || {}))
    }, [lang, pageName, translations, dispatch])

    return (
        <>
            <HeadingWithCount
                count={products.count}
                title={translations[lang].breadcrumbs[pageName]}
                spinner={productsSpinner}
            />
            <CatalogFilters
                handleApplyFiltersWithPrice={handleApplyFiltersWithPrice}
                handleApplyFiltersWithSizes={handleApplyFiltersWithSizes}
                handleApplyFiltersWithCategory={handleApplyFiltersWithCategory}
            />

            {productsSpinner ? (
                <motion.ul {...basePropsForMotion} className={skeleton.skeleton} style={{ marginBottom: 60 }}>
                    {Array.from(new Array(12)).map((_, i) => (
                        <li key={i} className={skeleton.skeleton__item}>
                            <div className={skeleton.skeleton__item__light} />
                        </li>
                    ))}
                </motion.ul>
            ) : (
                <motion.ul {...basePropsForMotion} className={`list-reset ${style.productsList}`}>
                    {(products.items || []).map((item) => (
                        <ProductsListItem key={item._id} item={item} />
                    ))}
                </motion.ul>
            )}

            <div className={styles.catalog__bottom}>
                <ReactPaginate
                    pageCount={pageCount}
                    nextLabel={<div className={`${styles.nextBtn} ${styles.btn}`} />}
                    previousLabel={<div className={`${styles.beforeBtn} ${styles.btn}`} />}
                    onPageChange={handlePageChange}
                    previousClassName={currentPage === 1 ? `${styles.disabled} ${styles.beforeBtn}` : `${styles.beforeBtn}`}
                    nextClassName={currentPage === pageCount ? `${styles.disabled} ${styles.nextBtn}` : `${styles.nextBtn}`}
                    containerClassName={styles.pagination}
                    activeClassName={styles.active}
                    breakLabel={'...'}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    forcePage={currentPage - 1}
                />
            </div>
        </>
    )
}

export default ProductsPage
