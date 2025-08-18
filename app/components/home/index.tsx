


export default function Page() {
  return (
    <section className="h-[100dvh] w-[100dvw]
    bg-lime-600 flex items-center justify-center">
      <div className="font-author w-[90vw] h-[50vh] bg-orange-400  mx-auto flex items-center justify-center flex-col gap-4">
        <h1 className="  text-3xl md:text-4xl lg:text-5xl xl:text-6xl  text-center bg-red-400 font-bold"> ESPECIALISTA EM<br />
         
              PERSIANAS E CORTINAS<br />
            
            JOÃO PESSOA E REGIÃO</h1>
       <h6
            data-aos="fade-up"
            className="text-sm md:text-base lg:text-lg xl:text-xl  bg-transparent/10 text-center leading-[35px]"
          >
            Transforme seu <b>Lar</b> com nossas Cortinas de{" "}
            <b className="px-1">Alto Padrão</b>
            Fabricadas <b>Sob Medida</b> ,<br /> deixando seu ambiente protegido do
            sol, mais confortável e com mais privacidade.
          </h6>

          <h6
            data-aos="fade-up"
            className="text-sm md:text-base lg:text-lg xl:text-xl  font-semibold"
          >
            Vamos até o local. Entrega e instalação grátis.
          </h6>

          <h6
            data-aos="fade-up"
            className="text-sm md:text-base lg:text-lg xl:text-xl  font-semibold "
          >
            Solicite um orçamento gratuito agora!
          </h6>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl ">
        Texto do parágrafo responsivo
        </p>
      </div>
      
    </section>
  );
}