import React from 'react'
// import Swiper core and required modules
import SwiperCore, { Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const PaymentSlider = (props) => {
    SwiperCore.use([Autoplay]);

    return (
        <Swiper breakpoints={{
            // when window width is >= 640px
            640: {
                slidesPerView:5,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 5,
            },
        }}
            spaceBetween={10}
            slidesPerView={props.number}
            autoplay={{
                delay: 1000,
            }
            }
        >
            <SwiperSlide style={{ justifyContent: 'center' }} align="center"><img src="https://paymob.com/8080/uploads/paymob/logos/1596645203master.png" alt="Master card" /></SwiperSlide>
            <SwiperSlide><img src="https://paymob.com/8080/uploads/paymob/logos/1596022646Group%202759.png" alt="aman" /></SwiperSlide>
            <SwiperSlide><img src="https://paymob.com/8080/uploads/paymob/logos/1596022647Group%202760.png" alt="vodafon" /></SwiperSlide>
            <SwiperSlide><img src="https://paymob.com/8080/uploads/paymob/logos/1596022647Group%202762.png" alt="masary" /></SwiperSlide>
            <SwiperSlide><img src="https://paymob.com/8080/uploads/paymob/logos/1596022647Group%202761.png" alt="alahly" /></SwiperSlide>
            <SwiperSlide><img src="https://paymob.com/8080/uploads/paymob/logos/1596022647Mask%20Group%2040.png" alt="mmoken" /></SwiperSlide>
            <SwiperSlide><img src="https://paymob.com/8080/uploads/paymob/logos/1596022647Group%202763.png" alt="bank du cairo" /></SwiperSlide>
            <SwiperSlide><img src="https://paymob.com/8080/uploads/paymob/logos/1596022647Group%202764.png" alt="bank audi" /></SwiperSlide>
            <SwiperSlide><img src="https://paymob.com/8080/uploads/paymob/logos/1596022647Group%2018019.png" alt="bank saib" /></SwiperSlide>
            <SwiperSlide><img src="https://paymob.com/8080/uploads/paymob/logos/1596022647Mask%20Group%2017402.png" alt="meza" /></SwiperSlide>
            <SwiperSlide><img src="https://paymob.com/8080/uploads/paymob/logos/1596022647Mask%20Group%2017401.png" alt="CIB" /></SwiperSlide>
            <SwiperSlide><img src="https://paymob.com/8080/uploads/paymob/logos/1596022647Mask%20Group%2017400.png" alt="bank misr" /></SwiperSlide>
            <SwiperSlide><img width="100%" src="https://accept.paymobsolutions.com/static/img/ValU.png" alt="ValU" /></SwiperSlide>
        </Swiper>
    )
}

export default PaymentSlider