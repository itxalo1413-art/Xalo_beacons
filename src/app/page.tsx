"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import ActionHub from "@/components/ActionHub";
import HallOfFame from "@/components/HallOfFame";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
import Toast from "@/components/Toast";

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <main className="min-h-screen flex flex-col justify-between relative bg-slate-50 selection:bg-[#9494FF] selection:text-white">
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

      {/* Modern Footer */}
      <Footer />

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
