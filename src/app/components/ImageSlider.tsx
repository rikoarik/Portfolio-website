"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
      navigation={{
        hideOnClick: false,
        hiddenClass: 'hidden',
      }}
      pagination={{ clickable: true }}
    >
      {images.map((image, imgIndex) => (
        
        <SwiperSlide key={imgIndex}>
          <Link href={image} target="_blank" rel="noopener noreferrer">
          <Image
            className="w-full object-cover rounded-xl"
            src={image}
            alt={`${title} - Image ${imgIndex + 1}`}
            width={1080}
            height={720}
          />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
