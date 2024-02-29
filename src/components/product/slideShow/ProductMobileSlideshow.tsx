"use client";
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './stideshow.css';

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductMobileSlideshow = ({ images, title, className }: Props) => {
  return (
    <div className={className}>
      <Swiper
        style={{
          width: '100Vw',
          height: '500px'
        }}
        autoplay={{
          delay: 2500
        }}
        pagination
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper2"
      >
        {
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                style={{
                  objectFit: 'fill'
                }}
                layout="fill" // Ajusta la imagen para llenar el contenedor
                objectFit="contain" // Asegura que la imagen se ajuste sin recortarse
                src={`/products/${image}`}
                alt={title}
              />
            </SwiperSlide>

          ))
        }
      </Swiper>


    </div>
  );
};
