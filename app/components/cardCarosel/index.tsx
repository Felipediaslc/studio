"use client";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

interface PropertyCardProps {
  images: string[];
  badge?: string;
  title: string;
  price: string;
  total: string;
  details: string;
  address: string;
}

function PropertyCard({
  images,
  badge,
  title,
  price,
  total,
  details,
  address,
}: PropertyCardProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="max-w-sm w-full rounded-2xl shadow-md overflow-hidden bg-white">
      {/* Carrossel */}
      <div className="relative">
        <div className="overflow-hidden rounded-t-2xl" ref={emblaRef}>
          <div className="flex">
            {images.map((img, i) => (
              <div key={i} className="flex-[0_0_100%] relative h-48 w-full">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-fill"
                  priority={i === 0} // primeira imagem com prioridade
                />
              </div>
            ))}
          </div>
        </div>

        {/* Badge */}
        {badge && (
          <span className="absolute top-2 left-2 bg-white text-black text-xs font-medium px-2 py-1 rounded-md shadow">
            {badge}
          </span>
        )}

        {/* Indicadores (bolinhas) */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition ${
                i === selectedIndex ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => emblaApi?.scrollTo(i)}
            />
          ))}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-4 flex flex-col gap-2">
        <p className="text-sm text-gray-600">{title}</p>

        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-quinary">
            {price} <span className="font-normal text-sm">aluguel</span>
          </p>
          <Heart className="w-5 h-5 text-gray-500 hover:text-red-500 cursor-pointer" />
        </div>

        <p className="text-sm text-gray-500">{total} total</p>

        <p className="text-sm font-medium text-quinary">{details}</p>
        <p className="text-sm text-gray-600">{address}</p>
      </div>
    </div>
  );
}

export default function Page() {
  const properties = [
    {
      images: ["/client01.jpg", "/client02.jpg", "/client03.jpg", "/client07.jpg", "/client08.jpg"],
      badge: "Exclusivo",
      title: "Apartamento para alugar em Itaim Bibi de 54 m².",
      price: "R$ 4.457",
      total: "R$ 5.861",
      details: "54 m² · 1 quarto · 1 vaga",
      address: "Rua Bandeira Paulista, Itaim Bibi · São Paulo",
    },
    {
      images: ["/client04.jpg", "/client05.jpg", "/client06.jpg", "/client09.jpg", "/client10.jpg"],
      badge: "Anúncio novo",
      title: "Apartamento com 1 quarto. Conta com piscina e churrasqueira.",
      price: "R$ 3.900",
      total: "R$ 5.070",
      details: "38 m² · 1 quarto · 1 vaga",
      address: "Rua Alves Guimarães, Pinheiros · São Paulo",
    },
    {
      images: ["/client11.jpg", "/client12.jpg", "/client13.jpg", "/client14.jpg", "/client15.jpg"],
      badge: "Exclusivo",
      title: "Apartamento com 1 quarto. Conta com piscina e academia.",
      price: "R$ 4.000",
      total: "R$ 5.680",
      details: "33 m² · 1 quarto",
      address: "Rua Alves Guimarães, Pinheiros · São Paulo",
    },
    {
      images: ["/client11.jpg", "/client12.jpg", "/client13.jpg", "/client14.jpg", "/client15.jpg"],
      badge: "Exclusivo",
      title: "Apartamento com 1 quarto. Conta com piscina e academia.",
      price: "R$ 4.000",
      total: "R$ 5.680",
      details: "33 m² · 1 quarto",
      address: "Rua Alves Guimarães, Pinheiros · São Paulo",
    },
    {
      images: ["/client01.jpg", "/client02.jpg", "/client03.jpg", "/client07.jpg", "/client08.jpg"],
      badge: "Exclusivo",
      title: "Apartamento para alugar em Itaim Bibi de 54 m².",
      price: "R$ 4.457",
      total: "R$ 5.861",
      details: "54 m² · 1 quarto · 1 vaga",
      address: "Rua Bandeira Paulista, Itaim Bibi · São Paulo",
    },
    {
      images: ["/client04.jpg", "/client05.jpg", "/client06.jpg", "/client09.jpg", "/client10.jpg"],
      badge: "Anúncio novo",
      title: "Apartamento com 1 quarto. Conta com piscina e churrasqueira.",
      price: "R$ 3.900",
      total: "R$ 5.070",
      details: "38 m² · 1 quarto · 1 vaga",
      address: "Rua Alves Guimarães, Pinheiros · São Paulo",
    },
    {
      images: ["/client11.jpg", "/client12.jpg", "/client13.jpg", "/client14.jpg", "/client15.jpg"],
      badge: "Exclusivo",
      title: "Apartamento com 1 quarto. Conta com piscina e academia.",
      price: "R$ 4.000",
      total: "R$ 5.680",
      details: "33 m² · 1 quarto",
      address: "Rua Alves Guimarães, Pinheiros · São Paulo",
    },
    {
      images: ["/client11.jpg", "/client12.jpg", "/client13.jpg", "/client14.jpg", "/client15.jpg"],
      badge: "Exclusivo",
      title: "Apartamento com 1 quarto. Conta com piscina e academia.",
      price: "R$ 4.000",
      total: "R$ 5.680",
      details: "33 m² · 1 quarto",
      address: "Rua Alves Guimarães, Pinheiros · São Paulo",
    },
  ];

  return (
      <section className=" py-10 lg:py-24 px-2 lg:h-[150vh]">
    {/* Título */}
    <h2 className="lg:mb-24 text-[20px] tracking-[.25em] sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-center font-author mb-6 text-white">
      Imóveis em destaque
    </h2>

    {/* Container dos cards */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 px-4 py-2.5  lg:grid-cols-4 gap-6 justify-items-center">
      {properties.map((property, index) => (
        <PropertyCard key={index} {...property} />
      ))}
    </div>
  </section>
  );
}