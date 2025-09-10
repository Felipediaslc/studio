
"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";


import Link from "next/link";


export default function Page() {
  const [open, setOpen] = useState(false);

  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);



    useEffect(() => {
      console.log("Menu aberto:", open);
    }, [open]);
  // Fecha o menu ao clicar em qualquer link
  const handleLinkClick = () => {
    setOpen(false);
  
    setShowMegaMenu(false);
  };

  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
        setShowMegaMenu(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <header>
      <div className="fixed z-50  w-[100dvw] ">
        <div className="bg-transparent ">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  className=" absolute top-1/3 left-5 block h-[2px] w-[30px] -translate-y-1/2 rounded-xl px-3 py-[6px] text-[28px] font-extralight text-orange-500 transition delay-150 duration-300 ease-in-out sm:ml-1 md:-mt-1 md:ml-5 md:text-[30px] lg:-mt-[0.3rem] lg:text-[32px] xl:-mt-1.5 xl:ml-[1rem] xl:text-[35px] "
                  onClick={() => setOpen(!open)}
                >
                  {open ? <FiX /> : <FiMenu />}
                </button>

<nav 
  ref={menuRef}
  id="navbarCollapse"
  className={`bg-navimage absolute top-full left-4 z-10 rounded-[7px] px-6 py-5 shadow backdrop-blur-xl
    h-[38vh] w-[59vw]                 /* default */
    sm:h-[35vh] sm:w-[57vw]           /* sm - mobile maior */
    sm-mid:!h-[34vh] sm-mid:w-[55vw]   /* breakpoint 428px*/
    sm-mids:!h-[37vh] sm-mids:w-[55vw]   /* breakpoint 526px */
   
    sm-large:h-[35vh] sm-large:w-[56vw] /* breakpoint 640px */
    md:!h-[53vh] md:w-[350px] md:ml-[1rem]   /* md - tablet */
    md-mid:!h-[42vh] md-mid:w-[351px]   /* md-mid - tablet maior */
    lg:!h-[34vh] lg:w-[245px]               /* lg - intermediário */
    xl:!h-[42vh] xl:w-[280px]               /* xl - desktop */
    xl-mid:!h-[43vh]
    xl-mids:!h-[35vh]
     2xl:!h-[30vh]
    transition-all duration-300 
    ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
>
  <ul className="block xl:-ml-3">
    {[
      { href: "/", label: "Home" },
      { href: "#suporte", label: "Por que a DIAS ?" },
      { href: "#feedback", label: "Depoimentos" },
      { href: "#inspirionClient", label: "Clientes" },
      { href: "#sobre", label: "Sobre Nós" },
      { href: "#orcamento", label: "Solicite Orçamento" },
    ].map((item) => (
      <li key={item.href}>
        <Link
          href={item.href}
          className="font-light  text-sm sm:text-sm sm-mid:text-base sm-large:text-base md:text-base lg:text-lg xl:text-xl font-Author flex py-2 lg:py-1 text-secundary tracking-[1px] leading-5 sm:leading-5 sm-mid:leading-6 sm-large:leading-6 md:leading-6 lg:leading-5 xl:leading-8 hover:text-orange-500 transition-colors"
          onClick={handleLinkClick}
        >
          {item.label}
        </Link>
      </li>
    ))}

    {/* Mega Menu */}
    <li className="relative">
      <button
        onClick={() => setShowMegaMenu((prev) => !prev)}
        className="font-light text-sm sm:text-sm sm-mid:text-base sm-large:text-base md:text-base lg:text-lg xl:text-xl font-Author flex w-full items-center justify-between gap-2 py-2 lg:py-1 text-secundary tracking-[1px] leading-5 sm:leading-5 sm-mid:leading-6 sm-large:leading-6 md:leading-6 lg:leading-7 xl:leading-8 hover:text-orange-500 transition-colors"
      >
        Nossos Produtos
        <span className={`transition-transform ${showMegaMenu ? "-rotate-180" : ""}`}>
          <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="font-light w-4 sm:w-4 sm-mid:w-5 sm-large:w-5 md:w-5 lg:w-5 xl:w-6">
            <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z" fill="currentColor"/>
          </svg>
        </span>
      </button>

      {/* Dropdown */}
      <div
        className={`absolute border  top-full left-0 -mt-2 md:mt-2 rounded-[7px] p-6  transition-all duration-300 
          h-[34vh] w-[63vw]                 /* default */
          sm:h-[32vh] sm:w-[57vw]           /* sm - mobile maior */
          sm-mid:h-[31vh] sm-mid:w-[55vw]   /* breakpoint 428px */
          sm-mids:!h-[36vh] sm-mids:w-[55vw]   /* breakpoint 526px */
          sm-large:!h-[33vh] sm-large:w-[56vw] /* breakpoint 640px */

          md:!h-[42vh] md:w-[351px]           /* md - tablet */
          md-mid:!h-[39vh] md-mid:w-[351px]   /* md-mid - tablet maior */
          lg:!h-[37vh] lg:w-[250px]           /* lg - intermediário */
          xl:!h-[47vh] xl:w-[280px]   xl:ml-6        /* xl - desktop */
          xl-mids:!h-[36vh]
          2xl:!h-[33vh]  2xl:ml-8
        bg-navimage  bg-blur-sm ${showMegaMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col space-y-1">
          {[
            { href: "#pregawave", label: "Prega Wave" },
            { href: "#telasolar", label: "Tela Solar" },
            { href: "#persianaromana", label: "Persiana Romana" },
            { href: "#persianarolo", label: "Persiana Rolô" },
            { href: "#persianahorizontal", label: "Persiana Horizontal" },
            { href: "#persianapainel", label: "Persianas Painel" },
            { href: "#doublevision", label: "Double Vision" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-light block px-4 py-1 text-sm sm:text-sm sm-mid:text-base sm-large:text-base md:text-base lg:text-lg xl:text-xl font-Author text-secundary tracking-[0.5px] leading-5 sm:leading-5 sm-mid:leading-6 sm-large:leading-6 md:leading-6 lg:leading-5 xl:leading-8 hover:text-orange-500 transition-colors"
              onClick={handleLinkClick}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </li>
  </ul>
</nav>
              </div>
            </div>

            <div className="text-orange-500 w-[46vw] max-w-full px-4 py-4 md:-mr-[10rem] lg:mr-[1rem] lg:h-[10vh] lg:w-[20vw] xl:ml-[53rem] xl:h-[10vh] xl:w-[35vw] 2xl:ml-[63rem] 2xl:h-[10vh] 2xl:w-[33vw]">
              <a href="#" className="block w-full py-0">
               <h1>Logo</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}