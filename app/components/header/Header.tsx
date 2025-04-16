import Image from "next/image";

export default function Header() {
  return (
    <header className="relative h-screen w-full overflow-hidden bg-neutral-100 text-white pt-16">
    
      <Image
        src="/cloth2.jpg"
        alt="Fashion Background"
        fill
        className="z-0 object-cover"
        priority
      />
   
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      <div className="relative z-20 flex flex-col justify-center items-start h-full px-6 md:px-24 max-w-7xl mx-auto -mt-20">
        <p className="inline-block bg-gray-400 text-red-500 text-xs px-3 py-1 rounded-full font-medium">
          Made in Indonesia, dedicated to Indonesia
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold leading-tight text-white max-w-2xl">
          Discover the Art of
          <br />
          Dressing Up
        </h1>
        <p className="mt-15 text-sm tracking-widest text-gray-300 uppercase">
          Scroll down ↓
        </p>
      </div>
    </header>
  );
}
