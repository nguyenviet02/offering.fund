import { Hero, EarlyAccess } from '@/components/pages/homepage';

function App() {
  return (
    <div className="relative w-full">
      <div className="relative h-fit container mx-auto">
        {/* Background blur */}
        <div className="absolute top-[530px] left-0 w-[100px] h-[300px] rotate-30 bg-background-brand-main blur-[120px] opacity-70 rounded-full" />
        <Hero />
        <EarlyAccess />
      </div>
    </div>
  );
}

export default App;
