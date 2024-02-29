"use client";
import React, { useState } from 'react';
import { Swiper as SwiperObj } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './stideshow.css';
import Image from 'next/image';

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductSlideshow = ({ images, title, className }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObj>();
  return (
    <div className={className}>
      <Swiper
        style={{
          // '--swiper-navigation-color': '#fff',
          // '--swiper-pagination-color': '#fff',
        } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 2500
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
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
                className='rounded-lg'
              />
            </SwiperSlide>

          ))
        }
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                width={300}
                height={300}
                src={`/products/${image}`}
                alt={title}
                layout="responsive"
                className='rounded-lg object-fill'
              />
            </SwiperSlide>

          ))
        }
      </Swiper>
    </div>
  );
};
