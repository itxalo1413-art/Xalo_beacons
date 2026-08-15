"use client";

import React from "react";

interface PromoBannerProps {
  onOpenModal: (actionType: string) => void;
}

export default function PromoBanner({ onOpenModal }: PromoBannerProps) {
  return (
    <section className="w-full max-w-7xl mx-auto mt-4 mb-0 px-4 sm:px-6 lg:px-8 flex justify-center">
      <a
        href="https://forms.gle/GXuqNRKJPCJ59sx59"
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer group relative overflow-hidden rounded-3xl transition-transform duration-300 transform hover:scale-[1.005] active:scale-[0.995] w-full flex justify-center block"
      >
        <img
          src="/images/uudaihp.png"
          alt="GV 9.0 tài trợ học phí hè tới 20 TRIỆU ĐỒNG khi đăng ký lộ trình"
          className="w-full max-w-5xl lg:max-w-6xl h-auto object-contain drop-shadow-md rounded-3xl"
        />
      </a>
    </section>
  );
}
