import Image from 'next/image';

function App() {
  return (
    <>
      <div className="relative w-full h-[100vh]">
        <Image
          src="/images/hero-bg.png"
          alt="Hero"
          fill
          className="object-cover"
        />
      </div>
    </>
  );
}

export default App;
