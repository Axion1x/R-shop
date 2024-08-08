import React, { useEffect, useState } from 'react';
import { useLang } from '@/hooks/useLang';
import '@/app/globalStyles/menu.scss';

function Accordion() {
    const { lang, translations } = useLang();
    const items = [
        {
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
        },
        {
            label: translations[lang].main_menu.buyers,
            content: [
                { category: "About" },
                { category: "Blog" },
                { category: "Shipping and payment" },
                { category: "Purchase returns" },
            ],
        },
        {
            label: translations[lang].main_menu.contacts,
            content: [
                { category: "Telegram" },
                { category: "Facebook" },
                { category: 'YouTube' },
                { category: '+38 (044) 12-34-567' },
            ],
        },
    ];

    return (
        <>
            <AccordionMenu items={items}></AccordionMenu>
        </>
    );
};

export default Accordion;

export function AccordionMenu({ items }) {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        function handleResize() {
            const isSmallScreen = window.matchMedia('(max-width: 800px)').matches;
            setWidth(window.innerWidth);
            if (isSmallScreen) {
                setHoveredIndex(1);
            } else {
                // Reset hoveredIndex if not a small screen
                setHoveredIndex(0);
            }
        }

        handleResize(); // Initial call to set hoveredIndex based on screen width

        window.addEventListener('resize', handleResize); // Listen for window resize events

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup on component unmount
        };
    }, []);

    const handleClick = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    const handleHover = (index) => {
        index == hoveredIndex ? null : handleClick(null)
        setHoveredIndex(index);
    };

    return (
        <div className='accordionContainer'>
            <div className='accordionHeaders'>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`catalog ${hoveredIndex === index ? 'opened-label' : ''}`}
                        onMouseEnter={() => handleHover(index)}
                    >
                        {item.label}
                        {width < 700 ?
                            <div>
                                {item.content.map((category, categoryIndex) => (
                                    <div key={categoryIndex} className="accordion-item">
                                        {(hoveredIndex === index) && (
                                            <div className="accordion-content">
                                                <h3
                                                    onClick={() => handleClick(categoryIndex)}
                                                    className={`h3 ${categoryIndex == expandedIndex ? 'active' : ''}`}
                                                >{category.category}</h3>
                                                {(expandedIndex === categoryIndex && category.items && category.items.length > 0) && (
                                                    <ul className='categoryItemList'>
                                                        {category.items.map((subItem) => (
                                                            <li key={subItem.id}>
                                                                <a className='categoryItem' href={subItem.href}>{subItem.text}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div> : null}
                    </div>
                ))}
            </div>{width > 700 ?
            <div>
                {items.map((item, index) => (
                    <div key={index} className="accordion-item">
                        {(hoveredIndex === index) && (
                            <div className="accordion-content">
                                {item.content.map((category, categoryIndex) => (
                                    <div key={categoryIndex} className='accordionItem'>
                                        <h3
                                            onClick={() => handleClick(categoryIndex)}
                                            className={`h3 ${categoryIndex == expandedIndex ? 'active' : ''}`}
                                        >{category.category}</h3>
                                        {(expandedIndex === categoryIndex && category.items && category.items.length > 0) && (
                                            <ul className='categoryItemList'>
                                                {category.items.map((subItem) => (
                                                    <li key={subItem.id}>
                                                        <a className='categoryItem' href={subItem.href}>{subItem.text}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div> : null}
        </div>
    );
}