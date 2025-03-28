import { Hero, EarlyAccess, VCList } from '@/components/pages/homepage';
import { Divider } from '@/components/common';
function App() {
  return (
    <div className="relative w-full">
      <Hero />
      <EarlyAccess />
      <Divider className="container mx-auto my-12" />
      <VCList />
    </div>
  );
}

export default App;
