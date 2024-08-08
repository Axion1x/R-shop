import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLang } from '@/hooks/useLang'
import styles from '@/styles/product-item/index.module.scss'

const HeadingWithCount = ({
                              count,
                              title,
                              spinner,
                          }) => {
    const { lang, translations } = useLang()
    return (
        <h1 className={`site-title ${styles.title}`}>
            <span>{title}</span>
            <span className={styles.title__count}>
        {spinner ? <FontAwesomeIcon icon={faSpinner} spin /> : count}{` ${translations[lang].catalog.found}`}
      </span>
        </h1>
    )
}

export default HeadingWithCount