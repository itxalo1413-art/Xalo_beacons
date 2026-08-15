"use client";

import React from "react";

type Item = { label: string; href?: string };

export function LinkGroup({
  title,
  items,
  badgeBg = "bg-[#FF6574]",
  onItemClick,
}: {
  title: string;
  items: Item[];
  badgeBg?: string;
  onItemClick?: (label: string) => void;
}) {
  return (
    <div className="rounded-[28px] border-2 border-foreground/90 bg-background/95 px-6 py-6 backdrop-blur-sm shadow-xs w-full">
      <div className="flex justify-center mb-4">
        <span
          className={`inline-block rounded-full ${badgeBg} px-6 py-2 text-center text-base sm:text-xl lg:text-2xl font-black text-white uppercase tracking-wider shadow-sm border border-white/30`}
        >
          {title}
        </span>
      </div>
      <div className="flex flex-col items-center gap-3">
        {items.map((it) => {
          if (it.href) {
            return (
              <a
                key={it.label}
                href={it.href}
                target="_blank"
                rel="noreferrer"
                className="w-full max-w-[460px] rounded-full border-2 border-foreground/90 bg-background px-6 py-3.5 text-center text-sm sm:text-base md:text-lg text-foreground transition-all hover:bg-[#6A5ACD] hover:text-white hover:border-[#6A5ACD] font-bold cursor-pointer shadow-2xs hover:shadow-sm block"
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
              className="w-full max-w-[460px] rounded-full border-2 border-foreground/90 bg-background px-6 py-3.5 text-center text-sm sm:text-base md:text-lg text-foreground transition-all hover:bg-[#6A5ACD] hover:text-white hover:border-[#6A5ACD] font-bold cursor-pointer shadow-2xs hover:shadow-sm"
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
    <section className="w-full max-w-6xl mx-auto mt-1 mb-10 px-4 sm:px-6">
      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left Column: 3 LinkGroups with palette pill badges */}
        <div className="w-full lg:w-[64%] space-y-5 z-10">
          <LinkGroup
            title="NHẬN ƯU ĐÃI"
            items={group1}
            badgeBg="bg-[#9494FF]"
            onItemClick={onOpenModal}
          />
          <LinkGroup
            title="TƯ VẤN - ĐĂNG KÝ"
            items={group2}
            badgeBg="bg-[#6A5ACD]"
            onItemClick={onOpenModal}
          />
          <LinkGroup
            title="NHẬN TÀI LIỆU"
            items={group3}
            badgeBg="bg-[#FF6574]"
            onItemClick={onOpenModal}
          />
        </div>

        {/* Right Column: Student Group Cutout Visual */}
        <div className="w-full lg:w-[48%] lg:-ml-20 flex justify-center lg:justify-end z-20 pointer-events-none sm:pointer-events-auto">
          <img
            src="/images/group.png"
            alt="Đội ngũ Học viên Xa Lộ English"
            className="w-full max-w-[440px] lg:max-w-[500px] h-auto object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
