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
    <div className="rounded-[28px] border-2 border-[#9494FF] bg-background/95 px-6 sm:px-8 py-5 backdrop-blur-sm shadow-xs w-full">
      {/* Title badge aligned to start */}
      <div className="flex justify-start mb-3 sm:ml-2">
        <span
          className={`inline-block rounded-full ${badgeBg} px-6 py-1.5 text-center text-base sm:text-xl lg:text-2xl font-black text-white uppercase tracking-wider shadow-sm border border-white/30`}
        >
          {title}
        </span>
      </div>
      {/* Buttons aligned to start with dynamic width fitting content */}
      <div className="flex flex-col items-start gap-2.5 sm:ml-2">
        {items.map((it) => {
          if (it.href) {
            return (
              <a
                key={it.label}
                href={it.href}
                target="_blank"
                rel="noreferrer"
                className="w-fit max-w-full rounded-full border-2 border-foreground/90 bg-background px-6 sm:px-8 py-2.5 sm:py-3 text-left text-sm sm:text-base md:text-lg text-foreground transition-all hover:bg-[#6A5ACD] hover:text-white hover:border-[#6A5ACD] font-bold cursor-pointer shadow-2xs hover:shadow-sm inline-flex items-center justify-start"
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
              className="w-fit max-w-full rounded-full border-2 border-foreground/90 bg-background px-6 sm:px-8 py-2.5 sm:py-3 text-left text-sm sm:text-base md:text-lg text-foreground transition-all hover:bg-[#6A5ACD] hover:text-white hover:border-[#6A5ACD] font-bold cursor-pointer shadow-2xs hover:shadow-sm inline-flex items-center justify-start"
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
    <section className="w-full max-w-7xl mx-auto mt-12 sm:mt-32 mb-10 px-4 sm:px-6">
      {/* Relative wrapper so image can be absolutely positioned */}
      <div className="relative">
        {/* Cards column — extended wide across the section so the right side sits under the students */}
        <div className="w-full lg:w-[82%] xl:w-[85%] space-y-3 z-10 relative">
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

        {/* Student image — absolutely positioned on desktop, overlapping the right edge of the extended cards */}
        <div className="hidden lg:block absolute top-1/3 -translate-y-1/2 -right-[10%] xl:-right-[8%] w-[75%] z-20 pointer-events-none">
          <img
            src="/images/group.png"
            alt="Đội ngũ Học viên Xa Lộ English"
            className="w-full h-auto object-contain object-center drop-shadow-2xl"
            style={{ maxHeight: "1190px" }}
          />
        </div>
      </div>
    </section>
  );
}
