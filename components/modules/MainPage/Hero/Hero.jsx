import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import Image from 'next/image';
import styles from '@/styles/main-page/index.module.scss';

const Hero = () => {
    return (
        <div className='mainContainer'>
            <div className={styles.heroContainer}>
                <div className={`${styles.info} col-md-7`}>
                    <div className={styles.sub}> BE IN STYLE </div>
                    <div className={styles.zIndex}>Summer Sale</div>
                    <div className={styles.subinfo}> [-30% discount on any summer clothes] </div>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    scrollbar={{ draggable: true }}
                    className={`${styles.mySwiper}`}
                >
                    <SwiperSlide className={styles.swiperSlide}>
                        <Image
                            src="/img/hero/1.png"
                            alt="White T-Shirt"
                            layout="fill"
                            objectFit="contain"
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <Image
                            src="/img/hero/2.png"
                            alt="Jumper Sweater"
                            layout="fill"
                            objectFit="contain"
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <Image
                            src="/img/hero/3.png"
                            alt="Sweater"
                            layout="fill"
                            objectFit="contain"
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <Image
                            src="/img/hero/4.png"
                            alt="Transparent Sweater"
                            layout="fill"
                            objectFit="contain"
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <Image
                            src="/img/hero/5.png"
                            alt="Dress Shirt"
                            layout="fill"
                            objectFit="contain"
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <Image
                            src="/img/hero/6.png"
                            alt="T-Shirt"
                            layout="fill"
                            objectFit="contain"
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <Image
                            src="/img/hero/7.png"
                            alt="Men's T-Shirt"
                            layout="fill"
                            objectFit="contain"
                        />
                    </SwiperSlide>
                </Swiper>
                <div className={styles.ad}>
                    Ad <div className={styles.adi}>i</div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
