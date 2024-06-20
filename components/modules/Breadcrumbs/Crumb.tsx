import Link from 'next/link'
import { ICrumbProps } from '@/types/modules'
import styles from '@/styles/catalog/index.module.scss';

const Crumb = ({ text: defaultText, href, last = false }: ICrumbProps) =>
    last ? (
        <a className={`${styles.breadCrumb} ${styles.lastCrumb}`}>
            <span>{defaultText}</span>
        </a>
    ) : (
        <Link href={href} className={`${styles.breadCrumb} ${styles.notLastCrumb}`} >
            <span>{defaultText}</span>
        </Link>
    )
export default Crumb