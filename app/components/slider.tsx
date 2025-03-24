'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import rev1 from '@/public/rev1.png';
import rev2 from '@/public/rev2.png';
import rev3 from '@/public/rev3.png';
import rev4 from '@/public/rev4.png';
import rev5 from '@/public/rev5.png';
import rev6 from '@/public/rev6.png';
import arR from '@/public/ArrowR.svg';
import arL from '@/public/ArrowL.svg';

const images = [
  { src: rev1, alt: 'Review 1' },
  { src: rev2, alt: 'Review 2' },
  { src: rev3, alt: 'Review 3' },
  { src: rev4, alt: 'Review 4' },
  { src: rev5, alt: 'Review 5' },
  { src: rev6, alt: 'Review 6' },
];

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Определяем количество слайдов и ширину в зависимости от экрана
  useEffect(() => {
    const updateSlider = () => {
      if (trackRef.current) {
        const containerWidth = trackRef.current.parentElement?.offsetWidth || 0;
        let slidesToShow = 1;
        if (window.innerWidth >= 1024) slidesToShow = 3; // lg: 3 слайда
        else if (window.innerWidth >= 768) slidesToShow = 2; // md: 2 слайда
        setSlidesPerView(slidesToShow);
        setSlideWidth(containerWidth / slidesToShow); // Ширина одного слайда
      }
    };

    updateSlider();
    window.addEventListener('resize', updateSlider);
    return () => window.removeEventListener('resize', updateSlider);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, Math.ceil(images.length / slidesPerView) - 1)
    );
  };

  return (
    <div className="mx-4 md:mx-0">
      <div className="grid md:grid-cols-2 mt-14 md:mt-28 md:mb-20">
        <h2 className="text-2xl text-[#31322C] md:text-3xl font-semibold">ОТЗЫВЫ</h2>
        <p className="text-xs mt-3 mb-3 md:mt-0 md:text-2xl font-medium">
          (Все отзывы публикуются с разрешения клиентов и не раскрывают их личных данных)
        </p>
      </div>

      <div className="w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * slideWidth}px)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 max-h-[240px] md:max-h-[360px] flex items-center justify-center"
              style={{ width: `${100 / slidesPerView}%` }} // Ширина в процентах
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={0} // Указываем 0, так как ширина будет динамической
                height={300} // Фиксированная высота
                className="w-auto h-full object-contain"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between mt-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full flex items-center justify-center disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          <Image src={arR} className='w-14 md:w-auto' alt="arrow-left" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full flex items-center justify-center disabled:opacity-50"
          disabled={currentIndex >= Math.ceil(images.length / slidesPerView) - 1}
        >
          <Image src={arL} className='w-14 md:w-auto' alt="arrow-right"/>
        </button>
      </div>
    </div>
  );
};

export default Slider;