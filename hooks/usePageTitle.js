import { useEffect } from 'react'
import { useLang } from './useLang'

export const usePageTitle = (page, additionalText = '') => {
    const { lang, translations } = useLang()

    useEffect(() => {
        document.title = `${lang === 'ua' ? 'Магазин Rusty' : 'Rusty Shop'} | ${
            (translations[lang].breadcrumbs)[page]
        }${additionalText ? ` - ${additionalText}` : ''}`
    }, [additionalText, lang, page, translations])
}