"use client";
import React from "react";
import Carosel from "../carrosel";

export default function Page() {
  return (
    <section
      className="flex flex-col h-[120vh] w-[100dvw] lg:pr-3 py-3 translate-y-24 lg:translate-y-32 justify-center items-center"
    >
   

      {/* Carrossel */}
      <Carosel />
    </section>
  );
}