import { Search } from 'lucide-react';
import { cinzel, cinzelDecorative } from '@/app/layout';
import Mosque from '../Svg/Mosque';
import LeftWave from '../Svg/LeftWave';
import LogoIcon from '../Svg/LogoIcon';
import HeroVerseSlider from './HeroVerseSlider';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black/60 md:bg-[#131313]">
      <div className="mx-auto flex flex-col min-h-screen w-full max-w-4xl -translate-y-50 md:-translate-y-10  items-center justify-center px-4 text-center">
        <div className="flex gap-3 items-center">
          <LogoIcon className="text-primary block md:hidden" />
          <h1 className={`${cinzel.className} text-2xl md:text-5xl lg:text-6xl font-bold uppercase leading-none text-[#c4c4c4]`}>
            <span className={cinzelDecorative.className}>Q</span>uran <span className={cinzelDecorative.className}>M</span>azid
          </h1>
        </div>

        <div className="mt-12 flex h-12 w-full max-w-145 items-center rounded-full border border-primary/30 bg-secondary px-5">
          <Search size={18} className="shrink-0 text-accent" />

          <input
            type="text"
            placeholder="What do you want to read?"
            className="ml-3 flex-1 bg-transparent text-sm text-[#c4c4c4] outline-none placeholder:text-accent placeholder:text-xs md:placeholder:text-sm"
          />

          <span className="rounded-full bg-[#111] px-3 py-1 text-xs text-accent">Ctrl+k</span>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-secondary px-5 md:px-8 py-2 text-sm text-accent cursor-pointer">Al Mulk</button>
          <button className="rounded-full bg-secondary px-5 md:px-8 py-2 text-sm text-accent cursor-pointer">Yasin</button>
          <button className="rounded-full bg-secondary px-5 md:px-8 py-2 text-sm text-accent cursor-pointer">Al Kahf</button>
          <button className="rounded-full bg-secondary px-5 md:px-8 py-2 text-sm text-accent cursor-pointer">Al Ikhlas</button>
          <button className="block md:hidden rounded-full bg-secondary px-5 md:px-8 py-2 text-sm text-accent cursor-pointer">
            As Sajda
          </button>
        </div>
        <div className="hidden md:block">
          <HeroVerseSlider />
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-75 w-full overflow-hidden hidden md:block">
        <LeftWave className="absolute bottom-0 left-0 z-20 h-57.5 w-[52vw] text-white opacity-[0.06] hidden lg:block" />

        <LeftWave className="absolute right-0 bottom-0 z-20 h-57.5 w-[52vw] -scale-x-100 text-white opacity-[0.06] hidden lg:block" />

        <Mosque className="absolute -bottom-10 lg:-bottom-6 md:left-[40%] lg:left-[46%] z-30 w-350 max-w-none -translate-x-1/2 text-white opacity-[0.70]" />
      </div>
    </section>
  );
};

export default Hero;
