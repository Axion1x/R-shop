import { useLang } from './useLang'

export const useCrumbText = (initialText) => {
    const { lang, translations } = useLang()
    const crumbText = (
        translations[lang].breadcrumbs
    )[initialText]
    return { crumbText }
}