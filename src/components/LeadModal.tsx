"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Send, Sparkles, ShieldCheck } from "lucide-react";

interface LeadModalProps {
  actionType: string | null;
  onClose: () => void;
  onSuccessToast: (msg: string) => void;
}

export default function LeadModal({ actionType, onClose, onSuccessToast }: LeadModalProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [targetScore, setTargetScore] = useState("7.0");
  const [currentLevel, setCurrentLevel] = useState("Mới bắt đầu / Mất gốc");
  const [note, setNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!actionType) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onSuccessToast(`Đã gửi yêu cầu "${actionType}" thành công! Xa Lộ English sẽ liên hệ bạn ngay.`);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-purple-100 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">Đăng ký thành công!</h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
              Cảm ơn <strong>{fullName}</strong>! Đội ngũ tư vấn Xa Lộ English đã nhận được thông tin cho dịch vụ <strong>{actionType}</strong>.
            </p>
            <div className="bg-purple-50 p-4 rounded-2xl border border-purple-100 text-xs text-purple-900 font-medium">
              🎁 Ưu đãi & tài liệu đã được gửi sẵn sàng. Chúng mình sẽ gọi/Zalo lại cho bạn trong vòng 15 phút!
            </div>
            <button
              onClick={onClose}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-2xl transition-colors text-sm shadow-md mt-4"
            >
              Hoàn tất
            </button>
          </div>
        ) : (
          <div>
            {/* Header Title */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Xa Lộ English Support</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 leading-snug">
                {actionType}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Điền thông tin bên dưới để nhận tư vấn trực tiếp và quà tặng học tập độc quyền!
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn A"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-600 focus:border-purple-600 outline-none text-sm transition-all bg-slate-50 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Số điện thoại / Zalo <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ví dụ: 0987654321"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-600 focus:border-purple-600 outline-none text-sm transition-all bg-slate-50 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mục tiêu điểm
                  </label>
                  <select
                    value={targetScore}
                    onChange={(e) => setTargetScore(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-600 outline-none text-sm bg-slate-50"
                  >
                    <option value="6.0">IELTS 6.0</option>
                    <option value="6.5">IELTS 6.5</option>
                    <option value="7.0">IELTS 7.0</option>
                    <option value="7.5">IELTS 7.5</option>
                    <option value="8.0+">IELTS 8.0+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Trình độ hiện tại
                  </label>
                  <select
                    value={currentLevel}
                    onChange={(e) => setCurrentLevel(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-600 outline-none text-sm bg-slate-50 truncate"
                  >
                    <option value="Mới bắt đầu / Mất gốc">Mới bắt đầu</option>
                    <option value="Đã có nền tảng 4.0-5.0">Khá 4.0-5.0</option>
                    <option value="Đang ở mức 5.5-6.0">Tốt 5.5-6.0</option>
                    <option value="Cần thi gấp cấp tốc">Cần thi gấp</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Ghi chú hoặc thắc mắc (Không bắt buộc)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ví dụ: Em muốn xếp lịch học buổi tối..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-600 outline-none text-sm bg-slate-50"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cam kết bảo mật thông tin 100% bởi Xa Lộ English.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-extrabold text-sm py-3.5 px-6 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Đang gửi thông tin...</span>
                ) : (
                  <>
                    <span>GỬI YÊU CẦU NGAY</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
