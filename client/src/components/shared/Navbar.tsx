'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  BadgeInfo,
  Bookmark,
  ChevronDown,
  Heart,
  Home,
  MessageCircle,
  MessagesSquare,
  Moon,
  PanelsTopLeft,
  Settings,
  Shield,
  ShieldCheck,
  Sun,
  X,
  Grid2X2,
  CircleUserRound,
  Send,
  Sunrise,
} from 'lucide-react';
import { useState } from 'react';
import Container from './Container';
import SideLight from '../Svg/SideLight';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-xl lg:bg-[#131313]">
        {/* Lights */}
        <SideLight className="pointer-events-none absolute top-0 left-30 hidden h-50 w-16 text-white opacity-80 lg:block xl:left-50" />

        <SideLight className="pointer-events-none absolute top-0 right-30 hidden h-50 w-16 -scale-x-100 text-white opacity-80 lg:block xl:right-50" />

        <Container>
          <div className="flex h-19 items-center justify-between">
            <Link href="/" className="hidden items-center gap-3 md:flex">
              <Image src="/logo.svg" alt="Quran Mazid" width={40} height={40} className="rounded-lg bg-primary w-9" />
              <div>
                <h1 className="text-[22px] font-bold leading-tight text-[#d7d7d7]">Quran Mazid</h1>
                <p className="text-[11px] leading-tight text-[#707070]">Read, Study, and Learn The Quran</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-10 lg:flex">
              <Link href="/" className="text-[15px] text-[#8b8b8b] transition hover:text-white">
                Home
              </Link>
              <Link href="/quran" className="text-[15px] text-[#8b8b8b] transition hover:text-white">
                Read Quran
              </Link>
              <Link href="/prayer-time" className="text-[15px] text-[#8b8b8b] transition hover:text-white">
                Prayer Time
              </Link>
              <Link href="/ramadan-2026" className="text-[15px] text-[#8b8b8b] transition hover:text-white">
                Ramadan 2026
              </Link>

              <div className="group relative">
                <button className="flex items-center gap-2 text-[15px] text-[#8b8b8b] transition hover:text-white cursor-pointer">
                  Others <ChevronDown size={14} />
                </button>

                <div className="invisible absolute top-8 left-1/2 grid w-107.5 -translate-x-1/2 grid-cols-2 gap-x-10 gap-y-6 rounded-xl bg-[#151515] p-6 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <Link href="/blog" className="flex items-center gap-4 text-[15px] text-[#777] hover:text-white">
                    <MessagesSquare size={20} />
                    Blog
                  </Link>
                  <Link href="/bookmarks" className="flex items-center gap-4 text-[15px] text-[#777] hover:text-white">
                    <Bookmark size={20} />
                    Bookmarks
                  </Link>
                  <Link href="/about" className="flex items-center gap-4 text-[15px] text-[#777] hover:text-white">
                    <BadgeInfo size={20} />
                    About Us
                  </Link>
                  <Link href="/copyright" className="flex items-center gap-4 text-[15px] text-[#777] hover:text-white">
                    <ShieldCheck size={20} />
                    Copyright
                  </Link>
                  <Link href="/contact" className="flex items-center gap-4 text-[15px] text-[#777] hover:text-white">
                    <MessageCircle size={20} />
                    Contact Us
                  </Link>
                  <Link href="/thanks" className="flex items-center gap-4 text-[15px] text-[#777] hover:text-white">
                    <MessagesSquare size={20} />
                    Thanks & Credits
                  </Link>
                  <Link href="/privacy-policy" className="flex items-center gap-4 text-[15px] text-[#777] hover:text-white">
                    <Shield size={20} />
                    Privacy Policy
                  </Link>
                  <Link href="/projects" className="flex items-center gap-4 text-[15px] text-[#777] hover:text-white">
                    <PanelsTopLeft size={20} />
                    Our Projects
                  </Link>
                </div>
              </div>
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              <button className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#081109] text-primary">
                <Moon size={18} fill="currentColor" />
              </button>
              <button className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#081109] text-primary">
                <Settings size={18} />
              </button>
              <button className="flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4b9241]">
                Support Us <Heart size={16} fill="currentColor" />
              </button>
            </div>

            <div className="ml-auto flex gap-4 lg:hidden">
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#42803212] text-primary">
                <Moon size={16} fill="currentColor" />
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#42803212] text-primary"
              >
                <Settings size={16} />
              </button>
              <button className="flex cursor-pointer items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4b9241]">
                Support Us <Heart size={16} fill="currentColor" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* drawer nav mobile and tablet */}
      <nav
        className={`fixed top-0 z-999 h-screen w-full md:w-[50%] bg-[#121212] px-5 py-6 transition-all duration-300 lg:hidden ${
          isOpen ? 'right-0' : '-right-full'
        }`}
      >
        <div className="flex items-start justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Quran Mazid" width={36} height={36} className="rounded-lg bg-primary" />
            <div>
              <h2 className="text-[21px] font-bold leading-tight text-[#d7d7d7]">Quran Mazid</h2>
              <p className="text-[10px] leading-tight text-[#707070]">Read, Study and Learn The Quran</p>
            </div>
          </Link>

          <button onClick={() => setIsOpen(false)} className="text-[#8b8b8b]">
            <X size={28} />
          </button>
        </div>

        <div className="mt-9 border-b border-white/10 pb-4">
          <h3 className="text-[20px] font-bold text-primary">Menu</h3>
        </div>

        <div className="mt-5 flex flex-col gap-7">
          <Link href="/" className="flex items-center gap-5 text-[16px] text-[#777] hover:text-white">
            <Home size={20} />
            Home
          </Link>
          <Link href="/prayer-time" className="flex items-center gap-5 text-[16px] text-[#777] hover:text-white">
            <Sun size={20} />
            Prayer Time
          </Link>
          <Link href="/quran" className="flex items-center gap-5 text-[16px] text-[#777] hover:text-white">
            <Grid2X2 size={20} />
            Read Quran
          </Link>
          <Link href="/profile" className="flex items-center gap-5 text-[16px] text-[#777] hover:text-white">
            <CircleUserRound size={20} />
            Profile
          </Link>
          <Link href="/go-to-ayah" className="flex items-center gap-5 text-[16px] text-[#777] hover:text-white">
            <Send size={20} />
            Go to Ayah
          </Link>
          <Link href="/about" className="flex items-center gap-5 text-[16px] text-[#777] hover:text-white">
            <BadgeInfo size={20} />
            About Us
          </Link>
          <Link href="/copyright" className="flex items-center gap-5 text-[16px] text-[#777] hover:text-white">
            <ShieldCheck size={20} />
            Copyright
          </Link>
          <Link href="/contact" className="flex items-center gap-5 text-[16px] text-[#777] hover:text-white">
            <MessageCircle size={20} />
            Contact Us
          </Link>
          <Link href="/thanks" className="flex items-center gap-5 text-[16px] text-[#777] hover:text-white">
            <MessagesSquare size={20} />
            Thanks & Credits
          </Link>
          <Link href="/privacy-policy" className="flex items-center gap-5 text-[16px] text-[#777] hover:text-white">
            <Shield size={20} />
            Privacy Policy
          </Link>
          <Link href="/prayer" className="flex items-center gap-5 text-[16px] text-[#777] hover:text-white">
            <Sunrise size={20} />
            Prayer
          </Link>
          <Link href="/projects" className="flex items-center gap-5 text-[16px] text-[#777] hover:text-white">
            <PanelsTopLeft size={20} />
            Our Projects
          </Link>
        </div>
      </nav>

      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 z-998 bg-black/60 backdrop-blur-sm lg:hidden" />}
    </>
  );
};

export default Navbar;
