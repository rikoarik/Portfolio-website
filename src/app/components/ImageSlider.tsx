"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ImageSliderProps {
  images: string[];
  title: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, title }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {images.map((image, imgIndex) => (
        <SwiperSlide key={imgIndex}>
          <Image
            className="w-full object-cover rounded-xl"
            src={image}
            alt={`${title} - Image ${imgIndex + 1}`}
            width={600}
            height={400}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
