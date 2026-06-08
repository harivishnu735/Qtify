import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import styles from "./Carousel.module.css";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";

export default function Carousel({ data, renderComponent }) {
    return (
        <div className={styles.wrapper}>
            <Swiper
                style={{ padding: '0px 20px' }}
                initialSlide={0}
                modules={[Navigation]}
                slidesPerView={"auto"}
                breakpoints={{
                    320: {
                        slidesPerView: 1.5,
                        spaceBetween: 10
                    },
                    480: {
                        slidesPerView: 2.5,
                        spaceBetween: 15
                    },
                    768: {
                        slidesPerView: 4.2,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 6.2,
                        spaceBetween: 30
                    },
                    1440: {
                        slidesPerView: 7.2,
                        spaceBetween: 40
                    }
                }}
                allowTouchMove
            >
                <CarouselLeftNavigation />
                <CarouselRightNavigation />
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        {renderComponent(item)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}