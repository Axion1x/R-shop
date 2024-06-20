import Link from 'next/link';
import { useMemo } from 'react';
import Crumb from './Crumb';
import { useLang } from '@/hooks/useLang';
import { usePathname, useSearchParams } from 'next/navigation';
import { IBreadcrumbsProps } from '@/types/modules';
import styles from "@/styles/catalog/index.module.scss";

const generatePathParts = (pathStr: string) => {
    const pathWithoutQuery = pathStr.split('?')[0];
    return pathWithoutQuery.split('/').filter((v) => v.length > 0);
};

const Breadcrumbs = ({
                         getTextGenerator,
                         getDefaultTextGenerator,
                     }: IBreadcrumbsProps) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { lang, translations } = useLang();

    const breadcrumbs = useMemo(
        function generateBreadcrumbs() {
            const asPathNestedRoutes = generatePathParts(pathname);
            const pathnameNestedRoutes = generatePathParts(pathname);

            const crumbList = asPathNestedRoutes.map((subpath, idx) => {
                const param = pathnameNestedRoutes[idx].replace('[', '').replace(']', '');

                const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/');

                return {
                    href,
                    textGenerator: getTextGenerator(param, searchParams.toString()),
                    text: getDefaultTextGenerator(subpath, href),
                };
            });

            return [...crumbList];
        },
        [pathname, getTextGenerator, getDefaultTextGenerator, searchParams, lang]
    );

    return (
        <div className='container breadcrumbs__container'>
            <ul className={styles.breadCrumbs}>
                <li>
                    <Link href='/' className={`${styles.breadCrumb} ${styles.notLastCrumb}`}>
                        {translations[lang].breadcrumbs.main}
                    </Link>
                </li>
                {breadcrumbs.map((crumb, idx) =>
                    crumb.text ? (
                        <li key={idx} className='breadcrumbs__item'>
                            <Crumb
                                {...crumb}
                                key={idx}
                                last={idx === breadcrumbs.length - 1}
                            />
                        </li>
                    ) : (
                        ''
                    )
                )}
            </ul>
        </div>
    );
}

export default Breadcrumbs;
