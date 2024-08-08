import PriceSelect from './PriceSelect'
import SizesSelect from './SizesSelect'
import styles from '@/styles/catalog/index.module.scss'
import CategoryFilter from "@/components/modules/CatalogFilters/CategoryFilter";

const CatalogFilters = ({
                            handleApplyFiltersWithPrice,
                            handleApplyFiltersWithSizes,
                            handleApplyFiltersWithCategory,
                        }) => {
    return (
        <>
            <div className={styles.catalog__filters}>
                <div className={styles.catalog__filters}>
                    <SizesSelect
                        handleApplyFiltersWithSizes={handleApplyFiltersWithSizes}/>
                    <PriceSelect
                        handleApplyFiltersWithPrice={handleApplyFiltersWithPrice}/>
                    <CategoryFilter
                        handleApplyFiltersWithCategory={handleApplyFiltersWithCategory}/>

                </div>


            </div>
        </>
    )
}

export default CatalogFilters