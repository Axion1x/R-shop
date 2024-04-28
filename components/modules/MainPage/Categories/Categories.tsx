'use client'
import Image from 'next/image'
import Link from 'next/link'
import useImagePreloader from '@/hooks/useImagPreloader'
import {useLang} from '@/hooks/useLang'
import img1 from '@/public/img/img1.jpg'
import img2 from '@/public/img/img2.jpg'
import img3 from '@/public/img/img3.png'
import img4 from '@/public/img/img4.jpg'
import styles from '@/styles/main-page/index.module.scss'
import {useEffect, useState} from "react";

const Categories = () => {
    const {lang, translations} = useLang()
    const {handleLoadingImageComplete, imgSpinner} = useImagePreloader()
    const imgSpinnerClass = imgSpinner ? 'img_loading' : '';
    const [screenWidth, setScreenWidth] = useState<number | null>(null);

    useEffect(() => {
        const updateScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        setScreenWidth(window.innerWidth);

        window.addEventListener('resize', updateScreenWidth);

        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []);

    return (
        <section className={styles.categories}>
            <div className={`container `}>
                <h2 className={`site-title ${styles.categories__title}`}>
                    {translations[lang].main_page.category_title}
                </h2>
                <div className={styles.categories__inner}>
                    <>
                        <Link
                            href='/catalog/cloth'
                            className={`${styles.categories__right} ${styles.categories__img} ${imgSpinnerClass}`}
                        >
                            <Image
                                priority={1}
                                src={img1}
                                alt='Cloth'
                                className='transition-opacity opacity-0 duration'
                                onLoad={handleLoadingImageComplete}
                            />
                            <span>{translations[lang].main_page.category_cloth}</span>
                        </Link>
                        <div className={styles.categories__left}>
                            <div className={styles.categories__left__top}>
                                <Link
                                    href='/catalog/accessories'
                                    className={`${styles.categories__left__top__right} ${styles.categories__img} ${imgSpinnerClass}`}
                                >
                                    <Image
                                        src={img2}
                                        alt='Accessories'
                                        className='transition-opacity opacity-0 duration'
                                        onLoad={handleLoadingImageComplete}
                                    />
                                    <span>{translations[lang].main_page.category_accessories}</span>
                                </Link>
                                <Link
                                    href='/catalog/souvenirs'
                                    className={`${styles.categories__left__top__left} ${styles.categories__img} ${imgSpinnerClass}`}
                                >
                                    <Image
                                        src={img3}
                                        alt='Souvenirs'
                                        className='transition-opacity opacity-0 duration'
                                        onLoad={handleLoadingImageComplete}
                                    />
                                    <span>
                      {translations[lang].main_page.category_souvenirs}
                    </span>
                                </Link>
                            </div>
                            <Link
                                href='/catalog/office'
                                className={`${styles.categories__left__bottom} ${styles.categories__img} ${imgSpinnerClass}`}
                            >
                                <Image
                                    src={img4}
                                    alt='Office'
                                    className='transition-opacity opacity-0 duration'
                                    onLoad={handleLoadingImageComplete}
                                />
                                <span>{translations[lang].main_page.category_office}</span>
                            </Link>
                        </div>
                    </>
                </div>
            </div>
        </section>
    )
}

export default Categories