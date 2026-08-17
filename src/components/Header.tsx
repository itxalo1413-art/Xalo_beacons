"use client";

import React from "react";
import { MapPin, Phone } from "lucide-react";

interface HeaderProps {
  onShowToast: (msg: string) => void;
}

export function SocialBar() {
  return (
    <div className="inline-flex flex-col items-center justify-center text-center">
      <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4">
        Liên hệ với chúng mình qua:
      </p>
      <div className="w-full max-w-[320px] sm:max-w-[380px] flex items-center justify-between mx-auto">
        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@xalo.english"
          target="_blank"
          rel="noreferrer"
          aria-label="TikTok"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FE7789] hover:bg-[#6A5ACD] flex items-center justify-center text-white transition-all shadow-md hover:scale-110"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true">
            <path d="M16.5 3c.3 2.1 1.6 3.6 3.7 3.8v2.4c-1.3.1-2.5-.3-3.7-1v5.9c0 4.6-4.4 6.9-8 5.1-2.3-1.2-3.3-3.8-2.7-6.2.6-2.3 2.7-3.9 5.2-3.8v2.5c-.5.1-1 .2-1.4.4-1.2.5-1.7 1.9-1.2 3 .5 1.2 1.9 1.7 3.1 1.2.8-.4 1.4-1.2 1.4-2.1V3h3.6z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/xalo.english/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FE7789] hover:bg-[#6A5ACD] flex items-center justify-center text-white transition-all shadow-md hover:scale-110"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
          </svg>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/xalo.english"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FE7789] hover:bg-[#6A5ACD] flex items-center justify-center text-white transition-all shadow-md hover:scale-110"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true">
            <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Header({ onShowToast }: HeaderProps) {
  const copyAddress = () => {
    navigator.clipboard.writeText("250 Nguyễn Đình Chính, phường Phú Nhuận, TPHCM");
    onShowToast("Đã sao chép địa chỉ Xa Lộ English!");
  };

  const copyHotline = () => {
    navigator.clipboard.writeText("0786688149");
    onShowToast("Đã sao chép số hotline: 0786688149!");
  };

  return (
    <header className="w-full max-w-7xl mx-auto flex flex-col items-center text-center pt-8 pb-4 px-4 sm:px-6 lg:px-8">
      {/* Brand Logo */}
      <div className="mb-4 flex justify-center cursor-pointer hover:opacity-95 transition-opacity">
        <img
          src="/Logo_XLE.svg"
          alt="Xa Lộ English Logo"
          className="w-16 sm:w-22 md:w-24 h-auto object-contain"
        />
      </div>

      {/* Main Title & Tagline */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#6A5ACD] tracking-tight mb-2 uppercase">
        Xa Lộ English
      </h1>
      <div className="w-full max-w-5xl mx-auto mb-8">
        <p className="text-2xl sm:text-4xl md:text-6xl lg:text-[52px] text-foreground tracking-tight leading-tight sm:leading-[1.15] font-bold mt-12 sm:mt-8">
          HỌC ĐÚNG CÁCH KHI HIỂU ĐÚNG MÌNH
        </p>
        <p className="text-2xl sm:text-4xl md:text-6xl lg:text-[52px] text-foreground tracking-tight leading-tight sm:leading-[1.15] mt-1 font-bold mt-12 sm:mt-6">
          CÙNG QUY TRÌNH CHẨN CHỮA
        </p>
      </div>

      {/* Stats Section (Unboxed, directly on page with brand color #9494FF) */}
      <div className="w-full max-w-3xl lg:max-w-4xl py-4 sm:py-6 px-4 mb-8">
        <div className="grid grid-cols-3 gap-4 text-center items-center divide-x divide-border/60">
          <div className="flex flex-col items-center px-2">
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#9494FF] tracking-tight">
              1000+
            </span>
            <span className="text-xs sm:text-sm md:text-base font-semibold text-muted-foreground tracking-wider mt-1.5 uppercase">
              HỌC VIÊN
            </span>
          </div>

          <div className="flex flex-col items-center px-2">
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#9494FF] tracking-tight">
              98%
            </span>
            <span className="text-xs sm:text-sm md:text-base font-semibold text-muted-foreground tracking-wider mt-1.5 uppercase">
              ĐẠT MỤC TIÊU
            </span>
          </div>

          <div className="flex flex-col items-center px-2">
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#9494FF] tracking-tight">
              8.0+
            </span>
            <span className="text-xs sm:text-sm md:text-base font-semibold text-muted-foreground tracking-wider mt-1.5 uppercase">
              IELTS MENTOR
            </span>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mb-6">
        <SocialBar />
      </div>

      {/* Hotline Info (Restored black color) */}
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center space-y-2 px-4 text-center">
        <button
          onClick={copyHotline}
          className="inline-flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl font-extrabold text-foreground hover:text-[#FE7789] transition-colors cursor-pointer group text-center"
          title="Bấm để sao chép số hotline"
        >
          <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-foreground shrink-0" />
          <span>Hotline: 0786688149</span>
        </button>
      </div>
    </header>
  );
}
