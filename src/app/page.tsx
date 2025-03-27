import { Hero, EarlyAccess, VCList } from '@/components/pages/homepage';
import { Divider } from '@/components/common';
function App() {
  return (
    <div className="relative w-full">
      <div className="relative h-fit container mx-auto">
        {/* Background blur */}
        <div className="absolute top-[530px] left-0 w-[100px] h-[300px] rotate-30 bg-background-brand-main blur-[120px] opacity-70 rounded-full" />
        <Hero />
        <EarlyAccess />
        <Divider className="my-12" />
        <VCList />
      </div>
    </div>
  );
}

export default App;
