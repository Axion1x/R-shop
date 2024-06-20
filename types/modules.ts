export interface IAccordionProps {
    children: React.ReactNode
    title: string | JSX.Element
    titleClass: string
    rotateIconClass?: string
}

export interface IProductListItemProps {
    item: IProduct
    title?:string
}


export interface IProduct {
    _id: string
    type: string
    category: string
    collection: string
    price: number
    name: string
    description: string
    characteristics: { [index: string]: string }
    images: string[]
    vendorCode: string
    inStock: string
    isBestseller: boolean
    isNew: boolean
    sizes: any
    popularity: number
    errorMessage?: string
}

export interface IBreadcrumbsProps {
    getTextGenerator: (arg0: string, query: string[]) => void
    getDefaultTextGenerator: (arg0: string) => string
}

export interface ICrumbProps {
    text: string
    textGenerator: () => string
    href: string
    last: boolean
}
export type SearchParams = { [key: string]: string | string[] | undefined }

export interface IProductsPage {
    searchParams: SearchParams
    pageName: string
}