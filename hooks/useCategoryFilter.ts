import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLang } from './useLang';
import { getSearchParamsUrl } from '@/lib/utils/common';

export const useCategoryFilter = () => {
    const { lang, translations } = useLang();
    const catalogCategoryOptions = useSelector((state) => state.catalog.catalogCategoryOptions);
    const [option, setOption] = useState('');
    const currentOptions = (Object.values(catalogCategoryOptions || {})[0]) || [];
    const allCategoriesTitle = translations[lang].catalog.all_categories;
    const handleSelectAllCategories = () => setOption(allCategoriesTitle);

    useEffect(() => {
        const urlParams = getSearchParamsUrl();
        const typeParam = urlParams.get('type');
        if (typeParam) {
            const newOption = translations[lang].comparison[typeParam];
            setOption(newOption);
        }
    }, [lang, translations]);

    return {
        handleSelectAllCategories,
        currentOptions,
        option,
        setOption,
        catalogCategoryOptions,
        allCategoriesTitle,
    };
};
