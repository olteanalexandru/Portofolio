'use client';
import Image from 'next/image';
import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

interface SliderProps {
  projectType: 'recipe' | 'farm';
}

const imagesByProject = {
  recipe: [
    '/recipe/0.png',
    '/recipe/01.png',
    '/recipe/2.png',
    '/recipe/3.png',
    '/recipe/4.png',
    '/recipe/5.png',
    '/recipe/6.png',
    '/recipe/7.png',
    '/recipe/8.png',
    '/recipe/9.png',
    '/recipe/10.png',
    '/recipe/11.png',
    '/recipe/12.png',
    '/recipe/13.png',
    '/recipe/14.png',
    '/recipe/15.png',
    '/recipe/16.png',
  ],
  farm: [
    '/farm/1.png',
    '/farm/2.png',
    '/farm/3.png',
    '/farm/4.png',
    '/farm/5.png',
    '/farm/6.png',
    '/farm/7.png',
    '/farm/8.png',
    '/farm/9.png',
    '/farm/10.png',
    '/farm/11.png',
    '/farm/12.png',
    '/farm/13.png',
  ],
  shop: ['/shop/1.png', '/shop/2.png', '/shop/3.png', '/shop/4.png', '/shop/5.png'],
};

const SliderComponent = ({ projectType }: SliderProps) => {
  const images = imagesByProject[projectType];

  return (
    <div className="mx-auto mb-8 w-full max-w-4xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="rounded-lg shadow-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-video w-full">
              <Image
                src={image}
                alt={`${projectType} Screenshot ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderComponent;
