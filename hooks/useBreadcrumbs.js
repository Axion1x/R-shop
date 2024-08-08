import { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useCrumbText } from './useCrumbText';
import { usePageTitle } from './usePageTitle';
import { useLang } from './useLang';
import { productCategories } from '@/constants/product';

export const useBreadcrumbs = (page) => {
    const [dynamicTitle, setDynamicTitle] = useState('');
    const { lang, translations } = useLang();
    const pathname = usePathname();
    const { crumbText } = useCrumbText(page);

    const getDefaultTextGenerator = useCallback((subpath, href) => {
        const defaultText = translations[lang]?.breadcrumbs[subpath];
        return defaultText || subpath;
    }, [lang, translations]);

    const getTextGenerator = useCallback((param, query) => {
        if (param === 'someDynamicRouteParam') {
            return 'Dynamic Route Name';
        }
        return '';
    }, []);

    usePageTitle(page, dynamicTitle);

    useEffect(() => {
        const lastCrumb = document.querySelector('.last-crumb');
        if (lastCrumb) {
            const productTypePathname = pathname.split(`/${page}/`)[1];

            if (!productTypePathname) {
                setDynamicTitle('');
                lastCrumb.textContent = crumbText;
                return;
            }

            if (!productCategories.some((item) => item === productTypePathname)) {
                return;
            }

            setDynamicTitle(translations[lang]?.breadcrumbs[productTypePathname] || productTypePathname);
        }
    }, [crumbText, lang, pathname, translations, page]);

    return { getDefaultTextGenerator, getTextGenerator };
}
