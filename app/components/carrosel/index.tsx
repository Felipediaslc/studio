"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


import cleint01 from "../../../public/banner_img_01.png"
import cleint02 from "../../../public/banner_img_03.png"
import cleint03 from "../../../public/banner_img_01.png"
import cleint04 from "../../../public/banner_img_03.png"
import cleint05 from "../../../public/banner_img_03.png"

const slides = [
  {
    img: cleint01,
    title: "Zay eCommerce",
    subtitle: "Modelo de comércio eletrônico pequeno e perfeito",
    text: "Zay Shop é um modelo HTML5 CSS para e-commerce com Bootstrap 5. Este modelo é 100% gratuito e fornecido pelo site TemplateMo.",
  },
  {
    img: cleint02,
    title: "Loja Virtual Moderna",
    subtitle: "Layout flexível e responsivo",
    text: "Perfeito para negócios que desejam expandir online, com design limpo e otimizado para dispositivos móveis.",
  },
  {
    img: cleint03,
    title: "Experiência do Usuário",
    subtitle: "Interface simples e atraente",
    text: "Ofereça aos clientes uma experiência de compra prática, intuitiva e envolvente com este modelo pronto.",
  },
  {
    img: cleint04,
    title: "Integração Fácil",
    subtitle: "Compatível com diversas plataformas",
    text: "Adaptável para integração com sistemas de pagamento, carrinhos de compra e soluções de estoque.",
  },
  {
    img: cleint05,
    title: "Design Profissional",
    subtitle: "Ideal para pequenas empresas",
    text: "Modelo projetado para empreendedores que buscam um site profissional sem complicação.",
  },
]

export default function CarouselPlugin() {
  const plugin = React.useRef<ReturnType<typeof Autoplay>>(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative w-[100vw]  max-w-[92vw] h-[80vh] mx-[5.8rem] lg:mb-12"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="shadow-none border-0">
                <CardContent className="p-0">
                  <article className="flex flex-col items-center lg:flex-row-reverse lg:justify-center 
                  w-full h-[70vh] lg:h-[80vh] p-6 lg:p-12">
                    <Image
                      className="m-4 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[480px]"
                      src={slide.img}
                      alt={`banner_img_${index + 1}`}
                    />
                    <section className="w-full lg:w-[45%] mt-10 lg:mt-0 lg:mr-10">
                      <h1 className="mb-5 text-4xl font-light text-quaternary">
                        {slide.title}
                      </h1>
                      <h2 className="mb-4 text-xl text-secondary">
                        {slide.subtitle}
                      </h2>
                      <p className="text-secondary leading-relaxed">
                        {slide.text}
                      </p>
                    </section>
                  </article>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Botões de navegação sobrepostos */}
      <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-2" />
      <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-2" />
    </Carousel>
  )
}
