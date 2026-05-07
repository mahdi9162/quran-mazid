'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, Menu, Moon, Settings, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex h-21.5 max-w-7xl items-center justify-between px-4 md:px-8">
          {/* LEFT */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Quran Mazid" width={42} height={42} className="rounded-xl bg-primary" />

            <div>
              <h1 className="text-[18px] font-bold leading-tight text-[#d7d7d7] md:text-[22px]">Quran Mazid</h1>

              <p className="text-[10px] leading-tight text-[#707070] md:text-[11px]">Read, Study, and Learn The Quran</p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-14 md:flex">
            <Link href="/" className="text-[15px] text-[#8b8b8b] transition hover:text-white">
              Home
            </Link>

            <Link href="/quran" className="text-[15px] text-[#8b8b8b] transition hover:text-white">
              Read Quran
            </Link>

            <Link href="/prayer-time" className="text-[15px] text-[#8b8b8b] transition hover:text-white">
              Prayer Time
            </Link>
          </nav>

          {/* RIGHT */}
          <div className="hidden items-center gap-4 md:flex">
            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#081109] text-[#428038]">
              <Moon size={18} fill="currentColor" />
            </button>

            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#081109] text-[#428038]">
              <Settings size={18} fill="currentColor" />
            </button>

            <button className="flex items-center gap-2 rounded-full bg-[#428038] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4b9241]">
              Support Us
              <Heart size={16} fill="currentColor" />
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#081109] text-[#428038] md:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 z-[999] h-screen w-[85%] max-w-[340px] bg-[#050505] p-5 transition-all duration-300 md:hidden ${
          isOpen ? 'left-0' : '-left-full'
        }`}
      >
        {/* TOP */}
        <div className="flex items-start justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/assets/mosque.svg" alt="Quran Mazid" width={40} height={40} />

            <div>
              <h2 className="text-[20px] font-bold text-[#d7d7d7]">Quran Mazid</h2>

              <p className="text-[10px] text-[#707070]">Read, Study and Learn The Quran</p>
            </div>
          </Link>

          <button onClick={() => setIsOpen(false)} className="text-[#8b8b8b]">
            <X size={28} />
          </button>
        </div>

        {/* TITLE */}
        <div className="mt-10 border-b border-white/10 pb-4">
          <h3 className="text-[16px] font-bold text-[#428038]">Menu</h3>
        </div>

        {/* LINKS */}
        <div className="mt-6 flex flex-col gap-7">
          <Link href="/" className="text-[17px] text-[#8b8b8b] transition hover:text-white">
            Home
          </Link>

          <Link href="/quran" className="text-[17px] text-[#8b8b8b] transition hover:text-white">
            Read Quran
          </Link>

          <Link href="/prayer-time" className="text-[17px] text-[#8b8b8b] transition hover:text-white">
            Prayer Time
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button className="mt-12 flex w-full items-center justify-center gap-2 rounded-full bg-[#428038] py-4 text-sm font-semibold text-white">
          Support Us
          <Heart size={16} fill="currentColor" />
        </button>
      </div>

      {/* OVERLAY */}
      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 z-[998] bg-black/60 backdrop-blur-sm md:hidden" />}
    </>
  );
};

export default Navbar;
