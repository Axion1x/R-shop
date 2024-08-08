import Link from 'next/link';
import { useMemo } from 'react';
import Crumb from './Crumb';
import { useLang } from '@/hooks/useLang';
import { usePathname, useSearchParams } from 'next/navigation';
import styles from "@/styles/catalog/index.module.scss";

const generatePathParts = (pathStr) => {
    const pathWithoutQuery = pathStr.split('?')[0];
    return pathWithoutQuery.split('/').filter((v) => v.length > 0);
};

const Breadcrumbs = ({
    getTextGenerator,
    getDefaultTextGenerator,
}) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { lang, translations } = useLang();

    const breadcrumbs = useMemo(() => {
        const pathParts = generatePathParts(pathname);

        return pathParts.map((subpath, idx) => {
            const param = pathParts[idx].replace('[', '').replace(']', '');
            const href = '/' + pathParts.slice(0, idx + 1).join('/');

            return {
                href,
                textGenerator: getTextGenerator(param, searchParams.toString()),
                text: getDefaultTextGenerator(subpath, href),
            };
        });
    }, [pathname, getTextGenerator, getDefaultTextGenerator, searchParams]);

    return (
        <div className="container breadcrumbs__container">
            <ul className={styles.breadCrumbs}>
                <li>
                    <Link href="/" className={`${styles.breadCrumb} ${styles.notLastCrumb}`}>
                        {translations[lang].breadcrumbs.main}
                    </Link>
                </li>
                {breadcrumbs.map((crumb, idx) =>
                    crumb.text ? (
                        <li key={`${crumb.href}-${idx}`} className="breadcrumbs__item">
                            <Crumb
                                {...crumb}
                                last={idx === breadcrumbs.length - 1}
                            />
                        </li>
                    ) : null
                )}
            </ul>
        </div>
    );
}

export default Breadcrumbs;
