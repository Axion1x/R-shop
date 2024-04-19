import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import {A11y, EffectCoverflow, EffectFade, Navigation, Pagination, Scrollbar} from 'swiper/modules';
import styles from '@/styles/main-page/index.module.scss'



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
                    className={`${styles.mySwiper} `}
                >
                    <SwiperSlide className={styles.swiperSlide}>
                        <img src="https://purepng.com/public/uploads/large/white-tshirt-n0j.png" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img src="https://www.pngall.com/wp-content/uploads/12/Jumper-Sweater-PNG-Clipart.png" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img src="https://www.pngall.com/wp-content/uploads/6/Sweater-PNG-Images.png" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img src="https://www.pngmart.com/files/6/Sweater-Transparent-PNG.png" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img src="https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8090.png" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img src="https://pngfre.com/wp-content/uploads/T-Shirt-3-1.png" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img src="https://purepng.com/public/uploads/large/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839zoswy.png" />
                    </SwiperSlide>
                </Swiper>
                <div className={styles.ad}>Ad <div className={styles.adi}> i</div> </div>

            </div>
        </div>
    );
};

export default Hero;