import React from 'react';
import styles from "@/styles/catalog/index.module.scss";
import {useSelector} from "react-redux";
import SelectBtn from "@/components/modules/CatalogFilters/SelectBtn";
import {AnimatePresence, motion} from "framer-motion";
import {basePropsForMotion} from "@/constants/motion";
import {useClickOutside} from "@/hooks/useClickOutside";
import {useLang} from "@/hooks/useLang";
import {useCategoryFilter} from "@/hooks/useCategoryFilter";

const CategoryFilter = ({handleApplyFiltersWithCategory}) => {
    const {lang, translations} = useLang()
    const { open, ref, toggle, setOpen } = useClickOutside()

    const categoryOptions = useSelector(state => state.catalog.catalogCategoryOptions.сategoryOptions);
    const { setOption, option } = useCategoryFilter();
    const handleFilterClick = (category) => {
        setOption(category);
        handleApplyFiltersWithCategory(category);
        setOpen(false)
    };

    return (
        <div className={styles.catalogCustom} ref={ref}>
            <SelectBtn

                open={open}
                toggle={toggle}
                defaultText={translations[lang].catalog.categories}
                dynamicText={translations[lang].comparison[option]}
            />
            <AnimatePresence>
                {open && (
                    <motion.ul
                        className={`list-reset ${styles.categoryList}`}
                        {...basePropsForMotion}
                    >
                        {categoryOptions.map(option => (
                            <button key={option.id}
                                    onClick={() => handleFilterClick(option.category)}
                            >
                                {option.title}
                            </button>


                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CategoryFilter;