"use client";

import React from "react";
import { MapPin, Phone } from "lucide-react";

interface HeaderProps {
  onShowToast: (msg: string) => void;
}

export function SocialBar() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <p className="text-base sm:text-lg md:text-xl font-medium text-foreground mb-3">
        Liên hệ với chúng mình qua:
      </p>
      <div className="rounded-full bg-[#9494FF] px-7 py-2.5 flex items-center justify-center gap-6 shadow-sm">
        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@xalo.english"
          target="_blank"
          rel="noreferrer"
          aria-label="TikTok"
          className="text-white transition-opacity hover:opacity-75 p-1"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
            <path d="M16.5 3c.3 2.1 1.6 3.6 3.7 3.8v2.4c-1.3.1-2.5-.3-3.7-1v5.9c0 4.6-4.4 6.9-8 5.1-2.3-1.2-3.3-3.8-2.7-6.2.6-2.3 2.7-3.9 5.2-3.8v2.5c-.5.1-1 .2-1.4.4-1.2.5-1.7 1.9-1.2 3 .5 1.2 1.9 1.7 3.1 1.2.8-.4 1.4-1.2 1.4-2.1V3h3.6z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/xalo.english/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="text-white transition-opacity hover:opacity-75 p-1"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
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
          className="text-white transition-opacity hover:opacity-75 p-1"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
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
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight mb-2">
        Xa Lộ English
      </h1>
      <div className="w-full max-w-5xl mx-auto mb-8">
        <p className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] text-foreground tracking-tight leading-tight sm:leading-[1.15]">
          Học đúng cách khi hiểu đúng mình
        </p>
        <p className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] text-foreground tracking-tight leading-tight sm:leading-[1.15] mt-1">
          cùng quy trình chẩn chữa
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

      {/* Address & Hotline Info (Centered with Icons matching text size) */}
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-foreground text-base sm:text-lg md:text-xl font-medium space-y-2 px-4 text-center">
        <button
          onClick={copyAddress}
          className="inline-flex items-center justify-center gap-2 hover:text-[#9494FF] transition-colors cursor-pointer group text-center break-words max-w-full"
          title="Bấm để sao chép địa chỉ"
        >
          <MapPin className="w-5 h-5 text-[#9494FF] shrink-0" />
          <span>Địa chỉ: 250 Nguyễn Đình Chính, phường Phú Nhuận, TPHCM</span>
        </button>

        <button
          onClick={copyHotline}
          className="inline-flex items-center justify-center gap-2 hover:text-[#9494FF] transition-colors cursor-pointer group text-center"
          title="Bấm để sao chép số hotline"
        >
          <Phone className="w-5 h-5 text-[#9494FF] shrink-0" />
          <span>Hotline: 0786688149</span>
        </button>
      </div>
    </header>
  );
}
