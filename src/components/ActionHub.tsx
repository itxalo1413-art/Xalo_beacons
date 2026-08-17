"use client";

import React from "react";

type Item = { label: string; href?: string };

export function LinkGroup({
  title,
  items,
  badgeBg = "bg-[#9494FF]",
  onItemClick,
}: {
  title: string;
  items: Item[];
  badgeBg?: string;
  onItemClick?: (label: string) => void;
}) {
  return (
    <div className="rounded-[28px] border-2 border-[#9494FF] bg-background/95 px-6 py-5 backdrop-blur-sm shadow-xs w-full">
      <div className="flex justify-center mb-3">
        <span
          className={`inline-block rounded-full ${badgeBg} px-6 py-1.5 text-center text-base sm:text-xl lg:text-2xl font-black text-white uppercase tracking-wider shadow-sm border border-white/30`}
        >
          {title}
        </span>
      </div>
      <div className="flex flex-col items-center gap-2.5">
        {items.map((it) => {
          if (it.href) {
            return (
              <a
                key={it.label}
                href={it.href}
                target="_blank"
                rel="noreferrer"
                className="w-full max-w-[460px] rounded-full border-2 border-foreground/90 bg-background px-6 py-3 text-center text-sm sm:text-base md:text-lg text-foreground transition-all hover:bg-[#6A5ACD] hover:text-white hover:border-[#6A5ACD] font-bold cursor-pointer shadow-2xs hover:shadow-sm block"
              >
                {it.label}
              </a>
            );
          }
          return (
            <button
              key={it.label}
              type="button"
              onClick={() => onItemClick?.(it.label)}
              className="w-full max-w-[460px] rounded-full border-2 border-foreground/90 bg-background px-6 py-3 text-center text-sm sm:text-base md:text-lg text-foreground transition-all hover:bg-[#6A5ACD] hover:text-white hover:border-[#6A5ACD] font-bold cursor-pointer shadow-2xs hover:shadow-sm"
            >
              {it.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface ActionHubProps {
  onOpenModal: (actionType: string) => void;
}

export default function ActionHub({ onOpenModal }: ActionHubProps) {
  const group1: Item[] = [
    { label: "Tân sinh viên" },
    { label: "Giới thiệu người thân" },
  ];

  const group2: Item[] = [
    {
      label: "Nhận tư vấn lộ trình IELTS",
      href: "https://forms.gle/GXuqNRKJPCJ59sx59",
    },
    {
      label: "Test trình độ và nhận BCB miễn phí",
      href: "https://forms.gle/icQg3n2iCv24zCyC8",
    },
  ];

  const group3: Item[] = [
    {
      label: "Tài liệu tổng hợp",
      href: "https://forms.gle/wwNz3aQZ4CixQGnM9",
    },
    {
      label: "Tài liệu độc quyền by Xa Lộ English",
      href: "https://forms.gle/wwNz3aQZ4CixQGnM9",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto mt-6 mb-10 px-4 sm:px-6">
      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-5">
        {/* Left Column: 3 LinkGroups */}
        <div className="w-full lg:w-[50%] space-y-2.5 z-10 flex flex-col justify-start">
          <LinkGroup
            title="NHẬN ƯU ĐÃI"
            items={group1}
            badgeBg="bg-[#9494FF]"
            onItemClick={onOpenModal}
          />
          <LinkGroup
            title="TƯ VẤN - ĐĂNG KÝ"
            items={group2}
            badgeBg="bg-[#9494FF]"
            onItemClick={onOpenModal}
          />
          <LinkGroup
            title="NHẬN TÀI LIỆU"
            items={group3}
            badgeBg="bg-[#9494FF]"
            onItemClick={onOpenModal}
          />
        </div>

        {/* Right Column: Student Group Cutout Visual (Hidden on mobile, visible on desktop lg) */}
        <div className="hidden lg:flex lg:w-[62%] lg:-ml-24 justify-end items-center z-20 pointer-events-none sm:pointer-events-auto">
          <img
            src="/images/group.png"
            alt="Đội ngũ Học viên Xa Lộ English"
            className="w-full max-w-[760px] lg:max-w-[890px] xl:max-w-[900px] h-auto lg:h-[800px] xl:h-[820px] object-contain object-center drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
