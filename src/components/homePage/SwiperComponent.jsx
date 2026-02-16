import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import MoviesCard from "./MoviesCard";

const SwiperComponent = ({movies}) => {
    return (
        <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            slidesPerGroup={4}
            pagination={{ clickable: true, }}
            className="mySwiper w-[100%] h-[500px]"
        >
            {movies.map((movie) => (
                <SwiperSlide key={movie.id} className="text-white">
                    <MoviesCard movie={movie} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SwiperComponent
