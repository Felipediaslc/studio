"use client";
import React from "react";

export default function Page() {
  return (
    <section className=" bg-transparent py-44 px-1 w-[100dvw] h-auto flex items-center justify-center">
      <div className="font-author  overflow-hidden rounded lg:mr-4">
        <div className=" rounded flex flex-col gap-[3.75rem] p-6 lg:p-[0.5rem]  ">
         <h2 className="text-center text-2xl font-cooper-bold text-secundary 
lg:text-4xl">Título Section</h2>

          <div className="  flex -mt-6 flex-col justify-between gap-8 lg:flex-row">
            <div className="lg:max-w-[25.875rem]">
              <div className="mt-6 w-full flex-1 border-b border-orange-500 pb-6 last:border-none">
                <span className="text-xl font-author text-secundary lg:text-2xl">
                  Para aprender do zero
                </span>
                <p className="mt-2 text-sm text-secundary lg:text-base">
                  Fundamentos da programação web HTML, CSS, Git, banco de dados
                  relacional e não relacional, back-end e front-end.
                </p>
              </div>

              <div className="mt-6 w-full flex-1 border-b border-orange-500 pb-6 last:border-none">
                <span className="text-xl font-author text-secundary lg:text-2xl">
                  Para se especializar
                </span>
                <p className="mt-2 text-sm text-secundary lg:text-base">
                  Trilhas de React e Node.js com ferramentas e tecnologias
                  alinhadas com o mercado.
                </p>
              </div>

              <div className="mt-6 w-full flex-1 border-b border-orange-500 pb-6 last:border-none">
                <span className="text-xl font-author text-secundary">
                  Para se manter atualizado
                </span>
                <p className="mt-2 text-sm text-secundary lg:text-base">
                  Masterclass exclusivas, encontros por voz com convidados e
                  newsletter com novidades do mercado.
                </p>
              </div>
            </div>

            {/* Substituí o <Image> por uma div com bg-fundimage */}
            <div className="bg-fundimage self-center rounded-[10px] w-[533px] h-[419px] bg-cover bg-center"></div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2 lg:gap-8">
              <div className="flex-grow border-t border-orange-500"></div>
              <div className="group/tag w-fit border border-transparent bg-gradient-to-b from-transparent to-transparent bg-origin-border overflow-hidden rounded">
                <div className="flex items-center bg-primary/30 w-fit p-2 max-h-8 lg:px-4 lg:h-9 rounded">
                  <span className="text-xs lg:text-sm whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-secundary to-secundary font-medium font-mono">
                    Também é para quem_
                  </span>
                </div>
              </div>
              <div className="flex-grow border-t border-orange-500"></div>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              {[
                "Quer fazer transição de carreira para a programação",
                "Quer ganhar melhores salários ou fazer um upgrade de carreira",
                "Quer conquistar uma vaga internacional",
                "Quer trabalhar de casa ou remoto",
              ].map((text, i) => (
                <div key={i} className="group flex flex-col items-center gap-2">
                  <svg
                    fill="none"
                    height="41"
                    viewBox="0 0 40 41"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="stroke-[#00FF00]"
                      cx="20"
                      cy="20.2148"
                      r="15.5"
                    ></circle>
                    <circle
                      className="fill-primary/30"
                      cx="20"
                      cy="20.2148"
                      r="12"
                    ></circle>
                    <path
                      d="M25 17.2148L18.75 23.4648L15 19.7148"
                      stroke="#00FF00"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <p className="text-center text-secundary text-sm lg:text-base lg:group-last:max-w-[8.25rem] lg:group-[&:nth-child(2)]:max-w-[14.4375rem] lg:group-[&:nth-child(3)]:max-w-[11.3125rem]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




