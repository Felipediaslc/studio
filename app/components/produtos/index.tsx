"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import cleint01 from "../../../public/banner_img_01.png";
import cleint02 from "../../../public/banner_img_02.jpg";
import cleint03 from "../../../public/banner_img_03.png";

export default function Page() {
  const carrosselRef = useRef<HTMLDivElement | null>(null);
  const slidesRef = useRef<HTMLDivElement | null>(null);
  const indexRef = useRef(0); // 🔹 Guarda o índice atual entre renders

  useEffect(() => {
    const slides = slidesRef.current;
    if (!slides) return;

    const totalSlides = slides.children.length;

    function mostrarSlide(n: number) {
      if (n < 0) indexRef.current = totalSlides - 1;
      else if (n >= totalSlides) indexRef.current = 0;
      else indexRef.current = n;

      if (slides) {
        slides.style.transform = `translateX(-${indexRef.current * 100}%)`;
      }
    }

    // Handlers fixos (pra poder remover depois)
    const handleAnterior = () => mostrarSlide(indexRef.current - 1);
    const handleProximo = () => mostrarSlide(indexRef.current + 1);

    const btnAnterior = document.querySelector(".btnAnterior");
    const btnProximo = document.querySelector(".btnProximo");

    btnAnterior?.addEventListener("click", handleAnterior);
    btnProximo?.addEventListener("click", handleProximo);

    // Auto-play infinito
    const interval = setInterval(() => {
      mostrarSlide(indexRef.current + 1);
    }, 6000);

    return () => {
      clearInterval(interval);
      btnAnterior?.removeEventListener("click", handleAnterior);
      btnProximo?.removeEventListener("click", handleProximo);
    };
  }, []);

  return (
    <main
      ref={carrosselRef}
      className="flex bg-red-500  w-[100dvw] h-auto py-32 transition-transform ease-in-out duration-500 z-20 translate-y-24 lg:translate-y-32 justify-center items-center  shadow-[inset_0_4px_15px_rgba(0,0,0,0.200)]"
    >
      {/* Botões */}
      <button
        className="absolute btnAnterior top-[50vh] lg:top-[36vh] left-0 ml-4 text-6xl text-orange-500 hover:text-orange-400 z-30"
        aria-label="Slide anterior"
      >
        &#10094;
      </button>
      <button
        className="absolute btnProximo top-[50vh] lg:top-[36vh] right-0 mr-4 text-6xl  text-orange-500 hover:text-orange-400 z-30"
        aria-label="Próximo slide"
      >
        &#10095;
      </button>

      {/* Carrossel */}
      <section
        className="relative overflow-hidden flex flex-col justify-center w-full"
        aria-label="Banner principal"
      >
        {/* Slides que se movem */}
        <div
        id="slides"
          ref={slidesRef}
          className="flex w-full transition-transform duration-[600ms] ease-in-out"
        >
          {/* Slide 1 */}
          <article className="w-full flex-shrink-0 flex flex-col items-center lg:h-[36rem] p-10 h-[53rem] lg:flex-row-reverse lg:justify-center">
            <Image
              className="m-4 w-[300px] md:w-[350px] lg:w-[500px]"
              src={cleint01}
              alt="banner_img_02"
            />
            <section className="md:w-[80%] sm:w-[70%] mt-16 px-5 lg:w-[40%]">
              <h1 className="mb-5 mt-10 text-5xl text-secundary font-[200]">
                Zay eCommerce
              </h1>
              <h2 className="mb-4 text-2xl text-secundary">
                Modelo de comércio eletrônico pequeno e perfeito
              </h2>
              <p className="text-secundary">
                Zay Shop é um modelo HTML5 CSS para e-commerce com a versão mais
                recente do Bootstrap 5 (beta 1). Este modelo é 100% gratuito e
                fornecido pelo site TemplateMo. Os créditos das imagens vão para
                Freepik Stories, Unsplash e Icons 8.
              </p>
            </section>
          </article>

          {/* Slide 2 */}
          <article className="w-full flex-shrink-0 flex flex-col items-center lg:h-[36rem] h-[53rem] p-10 lg:flex-row-reverse lg:justify-center">
            <Image
              className="m-4 w-[300px] md:w-[350px] lg:w-[500px]"
              src={cleint02}
              alt="banner_img_02"
            />
            <section className="md:w-[80%] sm:w-[70%] mt-16 px-5 lg:w-[40%]">
              <h1 className="mb-5 mt-10 text-5xl text-secundary font-[200]">
                Zay eCommerce
              </h1>
              <h2 className="mb-4 text-2xl text-secundary">
                Modelo de comércio eletrônico pequeno e perfeito
              </h2>
              <p className="text-secundary">
                Zay Shop é um modelo HTML5 CSS para e-commerce com a versão mais
                recente do Bootstrap 5 (beta 1). Este modelo é 100% gratuito e
                fornecido pelo site TemplateMo. Os créditos das imagens vão para
                Freepik Stories, Unsplash e Icons 8.
              </p>
            </section>
          </article>

          {/* Slide 3 */}
          <article className="w-full flex-shrink-0 flex flex-col items-center lg:h-[36rem] lg:justify-center h-[53rem] p-10 lg:flex-row-reverse">
            <Image
              className="m-4 w-[300px] md:w-[350px] lg:w-[500px]"
              src={cleint03}
              alt="banner_img_03"
            />
            <section className="md:w-[80%] sm:w-[70%] mt-16 px-5 lg:w-[40%]">
              <h1 className="mb-5 mt-10 text-5xl text-secundary font-[200]">
                Zay eCommerce
              </h1>
              <h2 className="mb-4 text-2xl text-secundary">
                Modelo de comércio eletrônico pequeno e perfeito
              </h2>
              <p className="text-secundary">
                Zay Shop é um modelo HTML5 CSS para e-commerce com a versão mais
                recente do Bootstrap 5 (beta 1). Este modelo é 100% gratuito e
                fornecido pelo site TemplateMo. Os créditos das imagens vão para
                Freepik Stories, Unsplash e Icons 8.
              </p>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}










