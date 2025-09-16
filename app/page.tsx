import Page from './components/home';
import Motion from './components/motivation';

import NovaPage from './components/novaPage';

import Imovel from './components/cardCarosel';
import Banner from './components/Banner';
import Product from './components/FeactureProduts';




export default function Home() {
  return (

      <section className="bg-fundimage w-auto h-full overflow-hidden">
        <Page />
        <Motion />
      
        <NovaPage />
        <Imovel />
       
        <Banner  />
        <Product />
      
      </section>
    

   
   
  );
}
