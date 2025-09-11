"use client";
import React from "react";
import Carosel from "../carrosel";

export default function Page() {
  return (
    <section
      className="flex flex-col h-[120vh] w-[100dvw] lg:pr-3 py-3 translate-y-24 lg:translate-y-32 justify-center items-center"
    >
      {/* Título */}
     <h1 className="text-[20px] tracking-[.25em] sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center font-author mb-6 text-secondary">
       Título
      </h1>

      {/* Carrossel */}
      <Carosel />
    </section>
  );
}