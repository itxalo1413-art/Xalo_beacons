"use client";

import React, { useState } from "react";
import { Award, X } from "lucide-react";

interface Student {
  id: string;
  stt: number;
  name: string;
  course: string;
  inputScore: string;
  outputScore: string;
  duration: string;
  bandCategory: "8.0+" | "7.5" | "7.0";
  image: string;
  quote: string;
  fullReview: string;
}

export function ReviewCard({
  student,
  onViewMore,
}: {
  student: Student;
  onViewMore?: () => void;
}) {
  return (
    <article className="flex flex-col justify-between rounded-3xl bg-card p-6 sm:p-7 shadow-xs border border-border hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
      <div>
        <div className="flex items-start justify-between gap-3 border-b border-border/40 pb-4 mb-4">
          <div>
            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
              #{student.stt}
            </span>
            <h3 className="text-base sm:text-lg font-extrabold uppercase text-foreground leading-snug tracking-tight">
              {student.name}
            </h3>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
              OVERALL
            </span>
            <span className="text-3xl sm:text-4xl font-black text-[#FE7789] shrink-0 leading-none mt-0.5">
              {student.outputScore}
            </span>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <img
            src={student.image}
            alt={`Bảng điểm IELTS của ${student.name}`}
            loading="lazy"
            className="h-[110px] w-[82px] shrink-0 rounded-xl border border-border object-cover bg-slate-100 shadow-2xs cursor-pointer hover:opacity-90 transition-opacity"
            onClick={onViewMore}
          />
          <p className="text-xs sm:text-sm italic leading-relaxed text-muted-foreground line-clamp-5">
            &quot;{student.quote}&quot;
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-center pt-2">
        <button
          onClick={onViewMore}
          className="w-full bg-[#6A5ACD] hover:bg-[#523ae0] text-white font-bold py-2.5 px-5 rounded-full text-xs sm:text-sm transition-all shadow-sm cursor-pointer text-center"
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
    stt: 1,
    name: "Nguyễn Thanh Thảo",
    course: "1 ON 1",
    inputScore: "7.5",
    outputScore: "8.0",
    duration: "17h trong 01 tháng",
    bandCategory: "8.0+",
    image: "/images/hall-of-fame/thanh_thao.jpg",
    quote:
      "Lớp học nhẹ nhàng, cô dạy siêu hay và chữa bài kỹ lắm luôn ạ! Nhờ lộ trình cá nhân hóa của Xa Lộ English mà em đã bứt phá đạt Band 8.0...",
    fullReview:
      "Lớp học nhẹ nhàng, cô dạy siêu hay và chữa bài kỹ lắm luôn ạ! Nhờ lộ trình cá nhân hóa của Xa Lộ English mà em đã bứt phá đạt Band 8.0 IELTS thành công rực rỡ ngoài mong đợi. Cảm ơn đội ngũ Xa Lộ English rất nhiều!",
  },
  {
    id: "2",
    stt: 2,
    name: "Tạ Thị Hiền Nga",
    course: "1 ON 1",
    inputScore: "6.0",
    outputScore: "8.0",
    duration: "34h trong 02 tháng",
    bandCategory: "8.0+",
    image: "/images/hall-of-fame/hien_nga.jpg",
    quote:
      "Cô dạy siêu kỹ và chi tiết, theo sát từng kỹ năng. Nhờ đó mà em tự tin thi và vượt mục tiêu đạt Band 8.0 ngọt ngào...",
    fullReview:
      "Cô dạy siêu kỹ và chi tiết, theo sát từng kỹ năng. Nhờ đó mà em tự tin thi và vượt mục tiêu đạt Band 8.0 ngọt ngào. Các buổi chữa bài Speaking & Writing 1:1 thực sự mang lại hiệu quả khác biệt!",
  },
  {
    id: "3",
    stt: 3,
    name: "Hoàng Lê Minh Dũng",
    course: "Lớp Advanced (Lớp nhóm Offline)",
    inputScore: "5.5",
    outputScore: "8.0",
    duration: "48h trong 02 tháng",
    bandCategory: "8.0+",
    image: "/images/hall-of-fame/minh_dung.jpg",
    quote:
      "Môi trường học tập đầy cảm hứng. Quy trình chẩn chữa giúp em nhận ra đúng điểm yếu và cải thiện cực nhanh...",
    fullReview:
      "Môi trường học tập đầy cảm hứng. Quy trình chẩn chữa giúp em nhận ra đúng điểm yếu và cải thiện cực nhanh. Đội ngũ Mentor hỗ trợ nhiệt tình bất kể ngày đêm!",
  },
  {
    id: "4",
    stt: 4,
    name: "Vũ Quỳnh Hương",
    course: "1 ON 1",
    inputScore: "7.0",
    outputScore: "8.0",
    duration: "24h trong 01 tháng",
    bandCategory: "8.0+",
    image: "/images/hall-of-fame/quynh_huong.jpg",
    quote:
      "Em thi lại lần 2 và tăng hẳn 1.0 Band sau khi theo học tại Xa Lộ English. Phương pháp dạy logic, không học vẹt...",
    fullReview:
      "Em thi lại lần 2 và tăng hẳn 1.0 Band sau khi theo học tại Xa Lộ English. Phương pháp dạy logic, không học vẹt giúp em nắm vững bản chất kiến thức và làm bài hiệu quả.",
  },
  {
    id: "5",
    stt: 5,
    name: "Nguyễn Thanh Bảo Ngọc",
    course: "IELTS Online",
    inputScore: "6.0",
    outputScore: "7.5",
    duration: "48h trong 02 tháng",
    bandCategory: "7.5",
    image: "/images/hall-of-fame/bao_ngoc.jpg",
    quote:
      "Mọi người ở trung tâm đều thân thiện, nhiệt tình. Nhờ Xa Lộ English mà em đã đạt được con số 7.5 mơ ước...",
    fullReview:
      "Mọi người ở trung tâm đều thân thiện, nhiệt tình. Nhờ Xa Lộ English mà em đã đạt được con số 7.5 mơ ước để nộp hồ sơ săn học bổng thành công!",
  },
  {
    id: "6",
    stt: 6,
    name: "Phạm Quỳnh Anh",
    course: "1 ON 1 + IELTS Online",
    inputScore: "6.5",
    outputScore: "7.5",
    duration: "34h trong 02 tháng (Lớp 1 ON 1) + 48h trong 02 tháng (Lớp IELTS Online)",
    bandCategory: "7.5",
    image: "/images/hall-of-fame/quynh_anh.jpg",
    quote:
      "Em thấy học tại Xa Lộ English rất thoải mái luôn, em học được nhiều lắm ạ. Lúc đầu em đặt mục tiêu 7.0 thui mà lúc thi được hẳn 7.5 luôn...",
    fullReview:
      "Em thấy học tại Xa Lộ English rất thoải mái luôn, em học được nhiều lắm ạ. Em đã chỉnh được mấy lỗi ngữ pháp hay sai trước khi và viết câu bớt lộp chộp hơn nè. Còn bài đọc thì khi đọc vô em không còn cảm giác ngán ngẩm như hồi tự làm nữa ạ. Lúc đầu em đặt mục tiêu 7.0 thui mà lúc thi được hẳn 7.5 luôn ạaaa",
  },
  {
    id: "7",
    stt: 7,
    name: "Đoàn Ngọc Uyên Trang",
    course: "Advanced",
    inputScore: "6.5",
    outputScore: "7.5",
    duration: "3 tháng",
    bandCategory: "7.5",
    image: "/images/hall-of-fame/uyen_trang.jpg",
    quote:
      "chị ơi, ý là em k có gì để phàn nàn ấy, em đang học chị Khánh Thi, em đột nhiên nhớ ra là chị ấy dạy hay quá nên em muốn feedback lại...",
    fullReview:
      "chị ơi, ý là em k có gì để phàn nàn ấy, em đang học chị Khánh Thi, em đột nhiên nhớ ra là chị ấy dạy hay quá nên em muốn feedback lại cho bên trung tâm mình thôi ạ^^ nói chung là k có gì để chê luôn, nhịp dạy bài vừa đủ, chị ấy giải thích cũng rõ ràng tường tận nữa",
  },
  {
    id: "8",
    stt: 8,
    name: "Phùng Quốc Đạt",
    course: "Upstream + Soar",
    inputScore: "5.5",
    outputScore: "7.5",
    duration: "6 tháng",
    bandCategory: "7.5",
    image: "/images/hall-of-fame/quoc_dat.jpg",
    quote:
      "em cảm thấy lớp chất lượng ạ, chị Ngọc tạo cảm giác thoải mái cho tụi em nên tụi em dễ dàng tiếp cận kiến thức cũng như không ngần ngại hỏi bài...",
    fullReview:
      "ạ em cảm thấy lớp chất lượng ạ , chị Ngọc tạo cảm giác thoải mái cho tụi em nên tụi em dễ dàng tiếp cận kiến thức cũng như không ngần ngại hỏi bài chị ạ , bên cạnh đó chị luôn động viên tụi em để tạo động lực trong việc học nên em cảm thấy đây là một môi trường học thuật chuyên nghiệp ạ .",
  },
  {
    id: "9",
    stt: 9,
    name: "Nguyễn Phương Nam",
    course: "1-1",
    inputScore: "6.5",
    outputScore: "7.5",
    duration: "36h",
    bandCategory: "7.5",
    image: "/images/hall-of-fame/phuong_nam.jpg",
    quote:
      "Lớp học vui vẻ - chị luôn tương tác với tất cả các học viên - đặc biệt chị luôn quan tâm đến cách tiếp thu bài học để đề ra pp dạy phù hợp...",
    fullReview:
      "Lớp học vui vẻ - chị luôn tương tác với tất cả các học viên - đặc biệt biệt chị luôn quan tâm đến cách tiếp thu bài học của chị đang dạy để đề ra pp dạy phù hợp",
  },
  {
    id: "10",
    stt: 10,
    name: "Nguyễn Ngọc Khánh Trâm",
    course: "Advanced",
    inputScore: "6.5",
    outputScore: "7.5",
    duration: "72h",
    bandCategory: "7.5",
    image: "/images/hall-of-fame/khanh_tram.jpg",
    quote:
      "Nhờ chị chuyển lời cho thầy Quang Minh là em cảm ơn thầy nhiều nha. Thầy dạy rất là dễ hiểu, nói chuyện với thầy rất là thoải mái...",
    fullReview:
      "Chị ơi. Nhờ chị chuyển lời cho thầy Quang Minh là em cảm ơn thầy nhiều nha. Thầy dạy rất là dễ hiểu, nói chuyện với thầy rất là thoải mái, thầy có mấy tips hữu ích nữa. Học cũng hơi mệt, nhưng thầy feedback chi tiết, dễ thương nên rất là thích ạ.",
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
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 text-brand-deep bg-brand-soft px-6 py-2 rounded-full text-sm sm:text-base font-extrabold uppercase tracking-wider mb-6 sm:mb-8 shadow-2xs">
            <Award className="w-5 h-5 text-brand" />
            <span>Thành tích nổi bật</span>
          </div>

          {/* Pink Title Badge for BẢNG VÀNG HỌC VIÊN */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <h2 className="inline-block bg-[#FE7789] text-white px-8 py-2.5 sm:px-10 sm:py-3 lg:px-10 lg:py-3 rounded-full text-xl sm:text-3xl lg:text-[38px] xl:text-[40px] font-black uppercase tracking-wide shadow-md">
              BẢNG VÀNG HỌC VIÊN
            </h2>
          </div>

          <p className="text-muted-foreground text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
            Hàng ngàn học viên bứt phá điểm số IELTS cùng Xa Lộ English
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-10 sm:mt-12">
            {[
              { label: "Tất cả học viên", value: "ALL" },
              { label: "Band 8.0+", value: "8.0+" },
              { label: "Band 7.5", value: "7.5" },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedFilter(tab.value)}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-2xs ${
                  selectedFilter === tab.value
                    ? "bg-[#6A5ACD] text-white shadow-sm"
                    : "bg-background text-foreground hover:bg-muted"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Multi-row 3-column Review Cards Grid with larger row gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {filteredStudents.map((student) => (
            <ReviewCard
              key={student.id}
              student={student}
              onViewMore={() => setActiveStudentModal(student)}
            />
          ))}
        </div>
      </div>

      {/* Student Detail Modal with Full Certificate Image, Course Details Table, and Student Feedback */}
      {activeStudentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div className="bg-background rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-border text-foreground my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveStudentModal(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-muted hover:bg-slate-200 flex items-center justify-center text-foreground transition-colors cursor-pointer z-10"
              title="Đóng cửa sổ"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-5">
              <div className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-[#FE7789] text-white shadow-md shrink-0 px-2 py-1">
                <span className="text-[9px] font-extrabold uppercase tracking-wider leading-tight">Overall</span>
                <span className="font-black text-2xl leading-none mt-0.5">{activeStudentModal.outputScore}</span>
              </div>
              <div>
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                  Học viên #{activeStudentModal.stt}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-foreground uppercase leading-tight">
                  {activeStudentModal.name}
                </h3>
                <p className="text-xs text-[#6A5ACD] font-bold mt-0.5">
                  Bảng điểm IELTS chính thức
                </p>
              </div>
            </div>

            {/* Certificate / Score Report Image */}
            <div className="mb-5 rounded-2xl overflow-hidden border-2 border-[#9494FF]/40 shadow-md bg-slate-100 flex justify-center p-1">
              <img
                src={activeStudentModal.image}
                alt={`Chứng chỉ IELTS của ${activeStudentModal.name}`}
                className="w-full max-h-[380px] object-contain rounded-xl"
              />
            </div>

            {/* Detailed Table / Info Box */}
            <div className="bg-brand-tint rounded-2xl border border-border p-4 sm:p-5 mb-5 space-y-3">
              <h4 className="font-extrabold text-xs sm:text-sm text-[#6A5ACD] uppercase tracking-wide border-b border-border/50 pb-2">
                Thông tin chi tiết khóa học
              </h4>
              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between items-start gap-2 border-b border-border/30 pb-2">
                  <span className="text-muted-foreground font-medium shrink-0">Khóa học:</span>
                  <span className="font-bold text-foreground text-right">{activeStudentModal.course}</span>
                </div>
                <div className="flex justify-between items-center gap-2 border-b border-border/30 pb-2">
                  <span className="text-muted-foreground font-medium">Điểm đầu vào:</span>
                  <span className="font-extrabold text-base text-[#6A5ACD]">{activeStudentModal.inputScore}</span>
                </div>
                <div className="flex justify-between items-center gap-2 border-b border-border/30 pb-2">
                  <span className="text-muted-foreground font-medium">Điểm Overall đầu ra:</span>
                  <span className="font-extrabold text-base text-[#FE7789]">{activeStudentModal.outputScore} IELTS</span>
                </div>
                <div className="flex justify-between items-start gap-2 pt-0.5">
                  <span className="text-muted-foreground font-medium shrink-0">Thời gian học:</span>
                  <span className="font-bold text-foreground text-right">{activeStudentModal.duration}</span>
                </div>
              </div>
            </div>


            <button
              onClick={() => setActiveStudentModal(null)}
              className="w-full bg-[#6A5ACD] hover:bg-[#523ae0] text-white font-bold py-3 rounded-2xl transition-all text-sm cursor-pointer shadow-md"
            >
              Đóng cửa sổ
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
