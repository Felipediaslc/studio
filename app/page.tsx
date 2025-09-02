import Page from './components/home';
import Motion from './components/motivation';

export default function Home() {
  return (
<>
      <main className="bg-fundimage w-[100dvw] h-[100dvh] overflow-x-hidden">
        <Page />
        <Motion />
      </main>
    </>

   
   
  );
}
