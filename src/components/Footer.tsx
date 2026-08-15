"use client";

import React from "react";
import { MapPin, Phone, ArrowUpRight, Sparkles } from "lucide-react";

export default function Footer() {
  const copyAddress = () => {
    navigator.clipboard.writeText("250 Nguyễn Đình Chính, phường Phú Nhuận, TPHCM");
  };

  const copyHotline = () => {
    navigator.clipboard.writeText("0786688149");
  };

  return (
    <footer className="w-full bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800/80 relative overflow-hidden">
      {/* Background Subtle Gradient Orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#9494FF]/10 rounded-full blur-[140px] pointer-events-none -z-0"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand Info & Tagline (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/Logo_XLE.svg"
                alt="Xa Lộ English Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-white text-xl sm:text-2xl font-black tracking-tight">
                Xa Lộ English
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Học đúng cách khi hiểu đúng mình cùng quy trình chẩn chữa. Đồng hành 1:1 chinh phục mục tiêu IELTS vượt trội.
            </p>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Kết nối:
              </span>
              <div className="flex items-center gap-2.5">
                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@xalo.english"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#9494FF] hover:border-[#9494FF] transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M16.5 3c.3 2.1 1.6 3.6 3.7 3.8v2.4c-1.3.1-2.5-.3-3.7-1v5.9c0 4.6-4.4 6.9-8 5.1-2.3-1.2-3.3-3.8-2.7-6.2.6-2.3 2.7-3.9 5.2-3.8v2.5c-.5.1-1 .2-1.4.4-1.2.5-1.7 1.9-1.2 3 .5 1.2 1.9 1.7 3.1 1.2.8-.4 1.4-1.2 1.4-2.1V3h3.6z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/xalo.english/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#9494FF] hover:border-[#9494FF] transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
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
                  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#9494FF] hover:border-[#9494FF] transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-extrabold uppercase tracking-wider">
              Liên kết nhanh
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <a
                  href="https://forms.gle/GXuqNRKJPCJ59sx59"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-[#9494FF] transition-colors"
                >
                  <span>Tư vấn lộ trình IELTS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              </li>
              <li>
                <a
                  href="https://forms.gle/icQg3n2iCv24zCyC8"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-[#9494FF] transition-colors"
                >
                  <span>Test trình độ & BCB miễn phí</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              </li>
              <li>
                <a
                  href="https://forms.gle/wwNz3aQZ4CixQGnM9"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-[#9494FF] transition-colors"
                >
                  <span>Tài liệu độc quyền Xa Lộ English</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info Card (4 cols) */}
          <div className="md:col-span-4 space-y-3 bg-slate-900/60 p-5 rounded-2xl border border-slate-800/90">
            <h4 className="text-white text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#9494FF]" />
              <span>Thông tin liên hệ</span>
            </h4>

            <div className="space-y-3 text-xs sm:text-sm font-medium">
              <button
                onClick={copyAddress}
                className="w-full text-left flex items-start gap-2.5 text-slate-300 hover:text-[#9494FF] transition-colors cursor-pointer group"
                title="Bấm để sao chép địa chỉ"
              >
                <MapPin className="w-4 h-4 text-[#9494FF] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  250 Nguyễn Đình Chính, phường Phú Nhuận, TPHCM
                </span>
              </button>

              <button
                onClick={copyHotline}
                className="w-full text-left flex items-center gap-2.5 text-slate-300 hover:text-[#9494FF] transition-colors cursor-pointer group"
                title="Bấm để sao chép số hotline"
              >
                <Phone className="w-4 h-4 text-[#9494FF] shrink-0" />
                <span className="font-bold text-[#9494FF]">Hotline: 0786688149</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>© 2026 Xa Lộ English. Tất cả quyền được bảo lưu.</p>
          <p className="text-slate-600">Học đúng cách khi hiểu đúng mình cùng quy trình chẩn chữa.</p>
        </div>
      </div>
    </footer>
  );
}
