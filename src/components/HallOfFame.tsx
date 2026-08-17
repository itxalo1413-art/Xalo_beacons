"use client";

import React, { useState } from "react";
import { Award, X } from "lucide-react";

interface Student {
  id: string;
  name: string;
  score: string;
  bandCategory: "8.0+" | "7.5" | "7.0";
  teacher: string;
  quote: string;
  fullReview: string;
  date: string;
  image: string;
  highlights: string[];
}

export function ReviewCard({
  name,
  score,
  quote,
  image,
  onViewMore,
}: {
  name: string;
  score: string;
  quote: string;
  image: string;
  onViewMore?: () => void;
}) {
  return (
    <article className="flex flex-col justify-between rounded-3xl bg-card p-6 sm:p-7 shadow-xs border border-border hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
      <div>
        <div className="flex items-start justify-between gap-3 border-b border-border/40 pb-4 mb-4">
          <h3 className="text-base sm:text-lg font-extrabold uppercase text-foreground leading-snug tracking-tight">
            {name}
          </h3>
          <span className="text-3xl sm:text-4xl font-black text-[#FE7789] shrink-0">
            {score}
          </span>
        </div>
        <div className="flex items-start gap-4">
          <img
            src={image}
            alt={`Kết quả IELTS của ${name}`}
            loading="lazy"
            className="h-[110px] w-[82px] shrink-0 rounded-xl border border-border object-cover bg-slate-100 shadow-2xs"
          />
          <p className="text-xs sm:text-sm italic leading-relaxed text-muted-foreground line-clamp-5">
            &quot;{quote}&quot;
          </p>
        </div>
      </div>
      <div className="mt-6 flex justify-center pt-2">
        <button
          onClick={onViewMore}
          className="w-full bg-[#FE7789] hover:bg-[#e66375] text-white font-bold py-2.5 px-5 rounded-full text-xs sm:text-sm transition-all shadow-sm cursor-pointer text-center"
        >
          Xem chi tiết bảng điểm ➔
        </button>
      </div>
    </article>
  );
}

const STUDENTS_DATA: Student[] = [
  {
    id: "1",
    name: "TRẦN THANH THẢO",
    score: "8.5",
    bandCategory: "8.0+",
    teacher: "Cô Trúc Phương",
    image: "/images/hall-of-fame/thanh_thao.jpg",
    quote:
      "Lớp học nhẹ nhàng, cô dạy siêu hay và chữa bài kỹ lắm luôn ạ! Nhờ lộ trình cá nhân hóa của Xa Lộ English mà em đã bứt phá đạt Band 8.5...",
    fullReview:
      "Lớp học nhẹ nhàng, cô dạy siêu hay và chữa bài kỹ lắm luôn ạ! Nhờ lộ trình cá nhân hóa của Xa Lộ English mà em đã bứt phá đạt Band 8.5 IELTS thành công rực rỡ ngoài mong đợi. Cảm ơn cô Trúc Phương và đội ngũ Xa Lộ English rất nhiều!",
    date: "Tháng 07/2026",
    highlights: ["Band 8.5 IELTS", "Chữa bài cá nhân hóa 1:1", "Tối ưu phương pháp"],
  },
  {
    id: "2",
    name: "TẠ VŨ HIỀN NGA",
    score: "8.0",
    bandCategory: "8.0+",
    teacher: "Cô Trúc Phương",
    image: "/images/hall-of-fame/hien_nga.jpg",
    quote:
      "Cô dạy siêu kỹ và chi tiết, theo sát từng kỹ năng. Nhờ đó mà em tự tin thi và vượt mục tiêu đạt Band 8.0 ngọt ngào...",
    fullReview:
      "Cô dạy siêu kỹ và chi tiết, theo sát từng kỹ năng. Nhờ đó mà em tự tin thi và vượt mục tiêu đạt Band 8.0 ngọt ngào. Các buổi chữa bài Speaking & Writing 1:1 thực sự mang lại hiệu quả khác biệt!",
    date: "Tháng 07/2026",
    highlights: ["Band 8.0 IELTS", "Theo sát tiến độ", "Bứt phá kỹ năng"],
  },
  {
    id: "3",
    name: "NGUYỄN MINH DŨNG",
    score: "8.0",
    bandCategory: "8.0+",
    teacher: "Đội ngũ Mentor Xa Lộ English",
    image: "/images/hall-of-fame/minh_dung.jpg",
    quote:
      "Môi trường học tập đầy cảm hứng. Quy trình chẩn chữa giúp em nhận ra đúng điểm yếu và cải thiện cực nhanh...",
    fullReview:
      "Môi trường học tập đầy cảm hứng. Quy trình chẩn chữa giúp em nhận ra đúng điểm yếu và cải thiện cực nhanh. Đội ngũ Mentor hỗ trợ nhiệt tình bất kể ngày đêm!",
    date: "Tháng 06/2026",
    highlights: ["Band 8.0 IELTS", "Quy trình chẩn chữa 1:1", "Mentor tận tâm"],
  },
  {
    id: "4",
    name: "BÙI QUỲNH HƯƠNG",
    score: "8.0",
    bandCategory: "8.0+",
    teacher: "Cô Trúc Phương",
    image: "/images/hall-of-fame/quynh_huong.jpg",
    quote:
      "Em thi lại lần 2 và tăng hẳn 1.0 Band sau khi theo học tại Xa Lộ English. Phương pháp dạy logic, không học vẹt...",
    fullReview:
      "Em thi lại lần 2 và tăng hẳn 1.0 Band sau khi theo học tại Xa Lộ English. Phương pháp dạy logic, không học vẹt giúp em nắm vững bản chất kiến thức và làm bài hiệu quả.",
    date: "Tháng 06/2026",
    highlights: ["Tăng 1.0 Band", "Tư duy logic", "Nắm vững bản chất"],
  },
  {
    id: "5",
    name: "NGUYỄN NỮ BẢO NGỌC",
    score: "7.5",
    bandCategory: "7.5",
    teacher: "Chị Ngọc",
    image: "/images/hall-of-fame/bao_ngoc.jpg",
    quote:
      "Mọi người ở trung tâm đều thân thiện, nhiệt tình. Nhờ Xa Lộ English mà em đã đạt được con số 7.5 mơ ước...",
    fullReview:
      "Mọi người ở trung tâm đều thân thiện, nhiệt tình. Nhờ Xa Lộ English mà em đã đạt được con số 7.5 mơ ước để nộp hồ sơ săn học bổng thành công!",
    date: "Tháng 06/2026",
    highlights: ["Band 7.5", "Săn học bổng thành công", "Môi trường thân thiện"],
  },
  {
    id: "6",
    name: "PHẠM QUỲNH ANH",
    score: "7.5",
    bandCategory: "7.5",
    teacher: "Đội ngũ Mentor Xa Lộ English",
    image: "/images/hall-of-fame/quynh_anh.jpg",
    quote:
      "Em thấy học tại Xa Lộ English rất thoải mái luôn, em học được nhiều lắm ạ. Lúc đầu em đặt mục tiêu 7.0 thui mà lúc thi được hẳn 7.5 luôn...",
    fullReview:
      "Em thấy học tại Xa Lộ English rất thoải mái luôn, em học được nhiều lắm ạ. Em đã chỉnh được mấy lỗi ngữ pháp hay sai trước khi và viết câu bớt lộp chộp hơn nè. Còn bài đọc thì khi đọc vô em không còn cảm giác ngán ngẩm như hồi tự làm nữa ạ. Lúc đầu em đặt mục tiêu 7.0 thui mà lúc thi được hẳn 7.5 luôn ạaaa",
    date: "Tháng 05/2026",
    highlights: ["Band 7.5 (Mục tiêu 7.0)", "Khắc phục lỗi Grammar", "Học siêu thoải mái"],
  },
  {
    id: "7",
    name: "ĐOÀN NGỌC UYÊN TRANG",
    score: "7.5",
    bandCategory: "7.5",
    teacher: "Chị Khánh Thi",
    image: "/images/hall-of-fame/uyen_trang.jpg",
    quote:
      "chị ơi, ý là em k có gì để phàn nàn ấy, em đang học chị Khánh Thi, em đột nhiên nhớ ra là chị ấy dạy hay quá nên em muốn feedback lại...",
    fullReview:
      "chị ơi, ý là em k có gì để phàn nàn ấy, em đang học chị Khánh Thi, em đột nhiên nhớ ra là chị ấy dạy hay quá nên em muốn feedback lại cho bên trung tâm mình thôi ạ^^ nói chung là k có gì để chê luôn, nhịp dạy bài vừa đủ, chị ấy giải thích cũng rõ ràng tường tận nữa",
    date: "Tháng 05/2026",
    highlights: ["Band 7.5", "Giải thích tường tận", "Nhịp dạy vừa đủ"],
  },
  {
    id: "8",
    name: "PHÙNG QUỐC ĐẠT",
    score: "7.5",
    bandCategory: "7.5",
    teacher: "Chị Ngọc",
    image: "/images/hall-of-fame/quoc_dat.jpg",
    quote:
      "em cảm thấy lớp chất lượng ạ, chị Ngọc tạo cảm giác thoải mái cho tụi em nên tụi em dễ dàng tiếp cận kiến thức cũng như không ngần ngại hỏi bài...",
    fullReview:
      "ạ em cảm thấy lớp chất lượng ạ , chị Ngọc tạo cảm giác thoải mái cho tụi em nên tụi em dễ dàng tiếp cận kiến thức cũng như không ngần ngại hỏi bài chị ạ , bên cạnh đó chị luôn động viên tụi em để tạo động lực trong việc học nên em cảm thấy đây là một môi trường học thuật chuyên nghiệp ạ .",
    date: "Tháng 05/2026",
    highlights: ["Band 7.5", "Môi trường chuyên nghiệp", "Động viên học tập"],
  },
  {
    id: "9",
    name: "NGUYỄN PHƯƠNG NAM",
    score: "7.5",
    bandCategory: "7.5",
    teacher: "Mentor Xa Lộ English",
    image: "/images/hall-of-fame/phuong_nam.jpg",
    quote:
      "Lớp học vui vẻ - chị luôn tương tác với tất cả các học viên - đặc biệt chị luôn quan tâm đến cách tiếp thu bài học để đề ra pp dạy phù hợp...",
    fullReview:
      "Lớp học vui vẻ - chị luôn tương tác với tất cả các học viên - đặc biệt biệt chị luôn quan tâm đến cách tiếp thu bài học của chị đang dạy để đề ra pp dạy phù hợp",
    date: "Tháng 04/2026",
    highlights: ["Band 7.5", "Tương tác liên tục", "Phương pháp phù hợp"],
  },
  {
    id: "10",
    name: "NGUYỄN NGỌC KHÁNH TRÂM",
    score: "7.5",
    bandCategory: "7.5",
    teacher: "Thầy Quang Minh",
    image: "/images/hall-of-fame/khanh_tram.jpg",
    quote:
      "Nhờ chị chuyển lời cho thầy Quang Minh là em cảm ơn thầy nhiều nha. Thầy dạy rất là dễ hiểu, nói chuyện với thầy rất là thoải mái...",
    fullReview:
      "Chị ơi. Nhờ chị chuyển lời cho thầy Quang Minh là em cảm ơn thầy nhiều nha. Thầy dạy rất là dễ hiểu, nói chuyện với thầy rất là thoải mái, thầy có mấy tips hữu ích nữa. Học cũng hơi mệt, nhưng thầy feedback chi tiết, dễ thương nên rất là thích ạ.",
    date: "Tháng 04/2026",
    highlights: ["Band 7.5", "Tips thi hữu ích", "Feedback chi tiết"],
  },
];

export default function HallOfFame() {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");
  const [activeStudentModal, setActiveStudentModal] = useState<Student | null>(null);

  const filteredStudents =
    selectedFilter === "ALL"
      ? STUDENTS_DATA
      : STUDENTS_DATA.filter((s) => s.bandCategory === selectedFilter);

  return (
    <section className="w-full max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-brand-tint p-6 sm:p-10 lg:p-12 rounded-3xl border border-border shadow-xs">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 text-brand-deep bg-brand-soft px-5 py-1.5 rounded-full text-sm sm:text-base font-extrabold uppercase tracking-wider mb-4 shadow-2xs">
            <Award className="w-5 h-5 text-brand" />
            <span>Thành tích nổi bật</span>
          </div>

          {/* Pink Title Badge for BẢNG VÀNG HỌC VIÊN */}
          <div className="flex justify-center mb-3">
            <h2 className="inline-block bg-[#FE7789] text-white px-8 py-3 rounded-full text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide shadow-md">
              BẢNG VÀNG HỌC VIÊN
            </h2>
          </div>

          <p className="text-muted-foreground text-sm sm:text-base md:text-xl font-medium mt-3">
            Hàng ngàn học viên bứt phá điểm số IELTS cùng Xa Lộ English
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8">
            {[
              { label: "Tất cả học viên", value: "ALL" },
              { label: "Band 8.0+", value: "8.0+" },
              { label: "Band 7.5", value: "7.5" },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedFilter(tab.value)}
                className={`px-6 py-2.5 rounded-full text-sm sm:text-base md:text-lg font-extrabold transition-all cursor-pointer ${
                  selectedFilter === tab.value
                    ? "bg-[#6A5ACD] text-white shadow-md scale-105"
                    : "bg-background text-foreground hover:bg-slate-100 border border-border"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Multi-row 3-column Review Cards Grid with larger row gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {filteredStudents.map((student) => (
            <ReviewCard
              key={student.id}
              name={student.name}
              score={student.score}
              quote={student.quote}
              image={student.image}
              onViewMore={() => setActiveStudentModal(student)}
            />
          ))}
        </div>
      </div>

      {/* Student Detail Modal */}
      {activeStudentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-background rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-border text-foreground">
            <button
              onClick={() => setActiveStudentModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-muted hover:bg-slate-200 flex items-center justify-center text-foreground transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FE7789] text-white font-black text-2xl flex items-center justify-center shadow-md shrink-0">
                {activeStudentModal.score}
              </div>
              <div>
                <h3 className="text-base font-extrabold text-foreground">
                  {activeStudentModal.name}
                </h3>
                <p className="text-xs text-[#FE7789] font-bold">
                  Mentor hướng dẫn: {activeStudentModal.teacher}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  Thời gian thi: {activeStudentModal.date}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {activeStudentModal.highlights.map((h, i) => (
                <span
                  key={i}
                  className="bg-brand-soft text-[#FE7789] border border-pink-200 text-xs font-semibold px-2.5 py-1 rounded-md"
                >
                  ✨ {h}
                </span>
              ))}
            </div>

            <div className="bg-brand-tint p-4 rounded-2xl border border-border text-foreground text-xs sm:text-sm leading-relaxed mb-6">
              <p className="font-semibold text-[#FE7789] mb-1">Cảm nhận học viên:</p>
              &quot;{activeStudentModal.fullReview}&quot;
            </div>

            <button
              onClick={() => setActiveStudentModal(null)}
              className="w-full bg-[#FE7789] hover:bg-[#e66375] text-white font-bold py-3 rounded-2xl transition-opacity text-sm cursor-pointer shadow-md"
            >
              Đóng cửa sổ
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
