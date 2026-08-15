"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import ActionHub from "@/components/ActionHub";
import HallOfFame from "@/components/HallOfFame";
import LeadModal from "@/components/LeadModal";
import Toast from "@/components/Toast";
import { Phone, MapPin, Sparkles, Heart } from "lucide-react";

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <main className="min-h-screen flex flex-col justify-between relative bg-slate-50 selection:bg-purple-600 selection:text-white">
      {/* Background Decorative Blur Orbs */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-200/40 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-[160px] pointer-events-none -z-10"></div>

      <div>
        {/* Top Header Section */}
        <Header onShowToast={handleShowToast} />

        {/* Summer Tuition Sponsorship Banner */}
        <PromoBanner onOpenModal={setActiveModal} />

        {/* Core Interactive Action Groups & Student Cutout Graphic */}
        <ActionHub onOpenModal={setActiveModal} />

        {/* Bảng Vàng Học Viên (Hall of Fame) */}
        <HallOfFame />
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-10 px-4 sm:px-6 lg:px-8 mt-16 border-t border-slate-800">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-extrabold text-lg mb-1">
              <span>Xa Lộ English</span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Học đúng cách khi hiểu đúng mình cùng quy trình chẩn chữa. Đồng hành 1:1 chinh phục mục tiêu IELTS vượt trội.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
              <span>250 Nguyễn Đình Chính, P. Phú Nhuận, TPHCM</span>
            </div>
            <div className="flex items-center gap-1.5 text-purple-300 font-bold">
              <Phone className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Hotline: 0786688149</span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto pt-8 mt-8 border-t border-slate-800/80 text-center text-xs text-slate-500 flex items-center justify-center gap-1">
          <span>© 2026 Xa Lộ English. </span>
        </div>
      </footer>

      {/* Modal Dialog */}
      <LeadModal
        actionType={activeModal}
        onClose={() => setActiveModal(null)}
        onSuccessToast={handleShowToast}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </main>
  );
}
