"use client";

import Carousel from "../Carossel03/index";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-3 ">
      <div className="w-full max-w-[95vw] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row 
       h-[78vh] sm:h-[78vh] sm-mids:h-[80vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh] ">
   
<div
  className="flex-0 md:flex-1 p-6 sm-mid:p-8 md:p-10 lg:p-12  flex flex-col justify-between bg-secondary
             h-[55vh]  sm:h-[30vh] sm-mids:h-[35vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh]"
>
  <div>
    {/* Título */}
    <h1
      className="
        text-xl sm:text-2xl sm-mids:text-3xl 
        md:text-3xl md-mid:text-4xl 
        lg:text-[2.2rem] xl:text-[2.5rem] 
        2xl:text-[2.8rem]
        font-bold leading-snug mb-4 text-quinary
      "
    >
      Alugar bem, sem complicação e fiador
    </h1>

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
    mb-3 
    text-quinary leading-relaxed
  "
    >
      Agende visitas online, negocie sem intermediários e assine o contrato
      digitalmente. Sem fiador. Sem depósito caução. Sem filas.
    </p>

   {/* Botão + Link logo abaixo */}
<div className="flex flex-col items-start">
  {/* Botão */}
  <a
    href="#"
    className="
      inline-block
      py-1.5 px-3             /* default mobile */
      sm:py-2 sm:px-4
      sm-mids:py-2 sm-mids:px-4.5
      sm-large:py-2.5 sm-large:px-5
      md:py-3 md:px-6
      md-mid:py-3 md-mid:px-6.5
      lg:py-3.5 lg:px-7
      bg-white rounded-full
      text-[0.5rem]           /* default / 390px */
      sm:text-[0.55rem]
      sm-mids:text-[0.6rem]
      sm-large:text-[0.65rem]
      md:text-[0.7rem]
      md-mid:text-[0.75rem]
      lg:text-[0.8rem]
      xl:text-[0.85rem]
      xl-mid:text-[0.85rem]
      xl-mids:text-[0.9rem]
      2xl:text-[0.9rem]
      text-quinary font-semibold
      shadow-md hover:bg-gray-100
      transition-colors
    "
  >
    Ver apartamentos para alugar
  </a>

  {/* Link secundário colado no botão */}
  <a
    href="#"
    className="pl-3 
      flex items-center mt-6
      text-[0.5rem]           /* default / 390px */
      sm:text-[0.55rem]
      sm-mids:text-[0.6rem]
      sm-large:text-[0.65rem]
      md:text-[0.7rem]
      md-mid:text-[0.75rem]
      lg:text-[0.8rem]
      xl:text-[0.85rem]
      xl-mid:text-[0.85rem]
      xl-mids:text-[0.9rem]
      2xl:text-[0.9rem]
      text-quinary hover:text-primary
      transition-colors
    "
  >
    Como alugar no DiasMoll
    <svg
      className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10.293 15.707a1 1 0 01-1.414-1.414L12.586 10l-3.707-3.707a1 1 0 011.414-1.414l4.414 4.414a1 1 0 010 1.414l-4.414 4.414z"
        clipRule="evenodd"
      />
    </svg>
  </a>
</div>
  </div>


</div>
        {/* Right Side: Carousel */}
        <div
          className="
            flex-1 w-full md:w-1/2 
            min-h-[300px] sm-large:min-h-[400px] md:min-h-[500px] 
            lg:min-h-[550px] xl:min-h-[600px] 2xl:min-h-[650px]
          "
        >
          <Carousel />
        </div>
      </div>
    </div>
  );
}