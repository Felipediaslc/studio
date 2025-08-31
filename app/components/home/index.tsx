


export default function Page() {
  return (
    <section className="h-[100dvh] w-[100dvw]
    bg-fundimage flex items-center justify-center">
      <div className="font-author w-[90vw] h-[50vh] bg-transparent text-secundary mx-auto flex items-center justify-center flex-col gap-4">
        <h1 className="  text-3xl md:text-4xl lg:text-5xl xl:text-6xl  text-center bg-transparent font-bold"> ESPECIALISTA EM<br />
         
              PERSIANAS E CORTINAS<br />
            
            JOÃO PESSOA E REGIÃO</h1>
       <h6
            data-aos="fade-up"
            className="tracking-widest px-5 text-sm md:text-base lg:text-lg xl:text-xl  bg-transparent/10 text-center leading-[20px] mb-4"
          >
            Transforme  seu <strong>Lar</strong> com nossas Cortinas de{" "} <b className="px-1">Alto Padrão</b> Fabricadas <b>Sob Medida</b>, 
            deixando seu ambiente protegido do sol, mais confortável e com mais privacidade.
          </h6>

          <p
            data-aos="fade-up"
            className="text-center  px-8 lg:px-0 tracking-[.25em]  leading-4 text-sm md:text-base lg:text-lg xl:text-xl  font-semibold"
          >
            Vamos até o local. 
            Entrega e instalação grátis.
          </p>

          <h6
            data-aos="fade-up"
            className="tracking-[.10em]  leading-1 text-sm md:text-base lg:text-lg xl:text-xl  font-semibold "
          >
            Solicite um orçamento gratuito agora!
          </h6>
        <p className="tracking-widest  text-sm md:text-base lg:text-lg xl:text-xl ">
        Texto do parágrafo responsivo
        </p>
      </div>
      
    </section>
  );
}