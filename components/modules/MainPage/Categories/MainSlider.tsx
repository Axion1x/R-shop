import React from 'react';
import {EffectFade, Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import {Swiper, SwiperSlide} from "swiper/react"; // Pagination module
const MainSlider = () => {

    return (
        <div className='container'>
            <Swiper modules={[EffectFade]} effect="fade" className='swiper'>
                {[1, 2, 3].map((i, el) => {
                    return <SwiperSlide key={i}>Slide {el}</SwiperSlide>;
                })}
            </Swiper>
        </div>
    )
};

export default MainSlider;