import Page from './components/home';
import Motion from './components/motivation';

import NovaPage from './components/novaPage';


export default function Home() {
  return (

      <section className="bg-fundimage w-auto h-full overflow-hidden">
        <Page />
        <Motion />
      
        <NovaPage />
     
       
      
      </section>
    

   
   
  );
}
