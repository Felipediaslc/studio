"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";
import Image from "next/image";

export default function FeaturedProducts() {
  // Inicializa o plugin de autoplay corretamente
  const autoplay = React.useRef(
    new (Autoplay as unknown as { new (options: Record<string, unknown>): AutoplayType })({ delay: 3000, stopOnInteraction: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const products = [
    { image: "/client01.jpg", title: "Painting of tiger", author: "Jhone smith", price: "From $90.00" },
    { image: "/client02.jpg", title: "Painting of tiger", author: "Jhone smith", price: "From $90.00" },
    { image: "/client03.jpg", title: "Painting of tiger", author: "Jhone smith", price: "From $90.00" },
    { image: "/client04.jpg", title: "Painting of tiger", author: "Jhone smith", price: "From $90.00" },
    { image: "/client01.jpg", title: "Painting of tiger", author: "Jhone smith", price: "From $90.00" },
    { image: "/client02.jpg", title: "Painting of tiger", author: "Jhone smith", price: "From $90.00" },
    { image: "/client03.jpg", title: "Painting of tiger", author: "Jhone smith", price: "From $90.00" },
    { image: "/client04.jpg", title: "Painting of tiger", author: "Jhone smith", price: "From $90.00" },
  ];

  // Atualiza o índice e snaps
  React.useEffect(() => {
    if (!emblaApi) return undefined;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="w-full bg-transparent py-12 px-6 lg:px-20">
      {/* Cabeçalho */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold  font-author text-secondary">
          Imoveis <br /> Destaque
        </h2>
        <div className="mt-4 lg:mt-0 max-w-lg text-secondary">
          <p className="mb-4 text-sm sm:text-base font-author">
            Agende visitas online, negocie sem intermediários e assine o contrato
      digitalmente. Sem fiador. Sem depósito caução. Sem filas.
          </p>
          <a
            href="#"
            className="font-author inline-block px-6 py-3 bg-quinary/70 text-white font-medium rounded-full shadow hover:bg-primary/50 transition-colors text-sm sm:text-base"
          >
            See All Collection
          </a>
        </div>
      </div>

      {/* Carrossel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex-[0_0_95%] sm:flex-[0_0_90%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] px-2"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                <div className="relative w-full h-52 sm:h-60">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 font-author flex flex-col flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-quinary">
                    {product.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    By {product.author}
                  </p>
                  <span className="mt-2 text-quinary font-author font-semibold text-sm sm:text-base">
                    {product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots de navegação */}
      <div className="flex justify-center mt-6 gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === selectedIndex
                ? "bg-secondary scale-110"
                : "bg-secondary/60 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}