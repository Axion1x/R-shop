import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toggleMobileCatalog} from "@/features/menu/mobileCatalog";
import {useLang} from "@/hooks/useLang";


const MobileCatalog = () => {
    const toggleMobile = useSelector((state) => state.mobileCatalog.catalogIsOpen);
    const dispatch = useDispatch();
    const { lang, translations } = useLang();
    const [openIndex, setOpenIndex] = useState(null);
    useEffect(() => {
        if (toggleMobile) {
            document.body.classList.add('stopScroll');
        } else {
            document.body.classList.remove('stopScroll');
        }
    }, [toggleMobile]);
    const handleCatalogClick = () => {
        dispatch(toggleMobileCatalog(1));
    }

    const handleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    const items = {
        label: translations[lang].main_menu.catalog,
        content: [
            {
                category: translations[lang].main_menu.cloth,
                items: [
                    {
                        id: 1,
                        text: translations[lang].comparison['t-shirts'],
                        href: '/catalog/cloth?offset=0&type=t-shirts',
                    },
                    {
                        id: 2,
                        text: translations[lang].comparison['long-sleeves'],
                        href: '/catalog/cloth?offset=0&type=long-sleeves',
                    },
                    {
                        id: 3,
                        text: translations[lang].comparison.hoodie,
                        href: '/catalog/cloth?offset=0&type=hoodie',
                    },
                    {
                        id: 4,
                        text: translations[lang].comparison.outerwear,
                        href: '/catalog/cloth?offset=0&type=outerwear',
                    },
                ],
            },
            {
                category: translations[lang].main_menu.accessories,
                items: [
                    {
                        id: 1,
                        text: translations[lang].comparison.bags,
                        href: '/catalog/accessories?offset=0&type=bags',
                    },
                    {
                        id: 2,
                        text: translations[lang].comparison.headdress,
                        href: '/catalog/accessories?offset=0&type=headdress',
                    },
                    {
                        id: 3,
                        text: translations[lang].comparison.umbrella,
                        href: '/catalog/accessories?offset=0&type=umbrella',
                    },
                ],
            },
            {
                category: translations[lang].main_menu.souvenirs,
                items: [
                    {
                        id: 1,
                        text: translations[lang].comparison['business-souvenirs'],
                        href: '/catalog/souvenirs?offset=0&type=business-souvenirs',
                    },
                    {
                        id: 2,
                        text: translations[lang].comparison['promotional-souvenirs'],
                        href: '/catalog/souvenirs?offset=0&type=promotional-souvenirs',
                    },
                ],
            },
            {
                category: translations[lang].main_menu.office,
                items: [
                    {
                        id: 1,
                        text: translations[lang].comparison.notebook,
                        href: '/catalog/office?offset=0&type=notebook',
                    },
                    {
                        id: 2,
                        text: translations[lang].comparison.pen,
                        href: '/catalog/office?offset=0&type=pen',
                    },
                ],
            },
        ],
    }
    return (
        <div className={`mobileCatalogBg ${toggleMobile ? 'active' : ''}`}>
            <div className="mobileCatalogContainer">
                <div className="h1">{translations[lang].main_menu.catalog}</div>
                <button className="closeButton" onClick={handleCatalogClick}></button>
                {items.content.map((item, index) => (
                    <div key={index} className={`theme ${openIndex === index ? 'opened-label' : ''}`} onClick={() => handleIndex(index)}>
                        <div>{item.category}</div>
                        {openIndex === index && (
                            <div className="theme-content">
                                {item.items.map((subItem, subIndex) => (
                                    <div key={subIndex}>{subItem.text}</div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobileCatalog;
