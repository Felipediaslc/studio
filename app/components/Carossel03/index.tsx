"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BannerCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    const onScroll = () => {
      if (!emblaApi) return;
      const totalSlides = emblaApi.scrollSnapList().length;
      const scroll = emblaApi.scrollProgress() * totalSlides;
      const currentSlide = Math.floor(scroll) % totalSlides;
      const currentProgress = scroll - currentSlide;
      setProgress(currentProgress);
    };

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("scroll", onScroll);

    onSelect();
    onScroll();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("scroll", onScroll);
    };
  }, [emblaApi]);
  
   const slides = [
        {
      id: 1,
      image: "/client01.jpg",
      title: "Apartamentos com 2 quartos",
      description: "Apartamentos com mais quartos para você e sua família.",
      link: "Ver apartamentos com 2 quartos →",
    },
    {
      id: 2,
      image: "/client02.jpg",
      title: "Apartamentos mobiliados",
      description: "Encontre imóveis prontos para morar, com todo o conforto.",
      link: "Ver apartamentos mobiliados →",
    },
    {
      id: 3,
      image: "/client03.jpg",
      title: "Apartamentos com 2 quartos",
      description: "Apartamentos com mais quartos para você e sua família.",
      link: "Ver apartamentos com 2 quartos →",
    },
    {
      id: 4,
      image: "/client04.jpg",
      title: "Apartamentos mobiliados",
      description: "Encontre imóveis prontos para morar, com todo o conforto.",
      link: "Ver apartamentos mobiliados →",
    },
  ];

   return (
    <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[75vh] xl-mid:h-[80vh] xl-mids:h-[80vh]">
  {/* Carrossel */}
  <div className="overflow-hidden rounded-xl h-full" ref={emblaRef}>
    <div className="flex h-full">
      {slides.map((slide) => (
        <div key={slide.id} className="flex-[0_0_100%] relative h-full">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover w-full h-full"
            priority
          />

{/* CARD SOBRE A IMAGEM */}
<div
  className="absolute top-4 left-4 sm:top-6 sm:left-6 
             bg-secondary/70 p-3 sm:p-4 md:p-5 lg:p-6 
             rounded-xl shadow max-w-[85%] sm:max-w-sm"
>
  <h2 className="text-quinary text-lg sm:text-xl md:text-2xl lg:text-[1.7rem] font-bold mb-2">
    {slide.title}
  </h2>

  {/* Parágrafo */}
  <p
    className="
    text-[0.5rem]           /* default / 390px - ultra pequeno */
    sm:text-[0.55rem]       /* 428px */
    sm-mids:text-[0.6rem]   /* 526px */
    sm-large:text-[0.65rem] /* 640px */
    md:text-[0.7rem]        /* 800px */
    md-mid:text-[0.75rem]   /* 1024px */
    lg:text-[0.8rem]        /* 1200px */
    xl:text-[0.85rem]       /* 1440px */
    xl-mid:text-[0.85rem]   /* 1536px */
    xl-mids:text-[0.9rem]   /* 1550px */
    2xl:text-[0.9rem]       /* 1700px */
    mb-3 leading-snug"
  >
    {slide.description}
  </p>

  {/* Botão */}
  <button
     className="
       font-medium
      text-[0.55rem]           /* default / 390px - bem pequeno */
      sm:text-[0.6rem]
      sm-mids:text-[0.65rem]
      sm-large:text-[0.7rem]
      md:text-[0.75rem]
      md-mid:text-[0.8rem]
      lg:text-[0.85rem]
      xl:text-[0.9rem]
      xl-mid:text-[0.9rem]
      xl-mids:text-[0.95rem]
      2xl:text-[0.95rem]
      text-quinary
    "
  >
    {slide.link}
  </button>
</div>
        </div>
      ))}
    </div>
  </div>

  {/* Barra de progresso + setas */}
  <div className="absolute bottom-4 left-0 w-full flex flex-col items-end px-4 sm:px-6">
    {/* Setas/bolinhas */}
    <div className="flex gap-2 mb-1">
      <button
        onClick={scrollPrev}
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex items-center justify-center 
                   rounded-full bg-white/90 shadow hover:bg-white transition"
      >
        <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-quinary" />
      </button>
      <button
        onClick={scrollNext}
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex items-center justify-center 
                   rounded-full bg-white/90 shadow hover:bg-white transition"
      >
        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-quinary" />
      </button>
    </div>

    {/* Traços de progresso */}
    <div className="w-full flex">
      {slides.map((_, index) => {
        let widthPercent = 0;
        if (index === selectedIndex) widthPercent = progress * 100;
        else if (index < selectedIndex) widthPercent = 100;

        return (
          <div
            key={index}
            className="relative flex-1 h-1.5 bg-primary/50 overflow-hidden"
          >
            <div
              className="absolute left-0 top-0 h-1.5 bg-secondary transition-all duration-100"
              style={{ width: `${widthPercent}%` }}
            />
          </div>
        );
      })}
    </div>
  </div>
</div>
  );
}


