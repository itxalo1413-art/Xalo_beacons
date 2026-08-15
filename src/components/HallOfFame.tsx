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
    <article className="flex flex-col justify-between rounded-2xl bg-card p-5 sm:p-6 shadow-xs border border-border hover:shadow-md transition-shadow">
      <div>
        <div className="flex items-start justify-between gap-3 border-b border-border/40 pb-3 mb-3">
          <h3 className="text-sm sm:text-base font-bold uppercase text-foreground leading-snug">{name}</h3>
          <span className="text-2xl sm:text-3xl font-extrabold text-brand-deep shrink-0">{score}</span>
        </div>
        <div className="flex items-start gap-4">
          <img
            src={image}
            alt={`Kết quả IELTS của ${name}`}
            loading="lazy"
            className="h-[104px] w-[78px] shrink-0 rounded-lg border border-border object-cover bg-slate-100 shadow-2xs"
          />
          <p className="text-xs sm:text-sm italic leading-relaxed text-muted-foreground line-clamp-5">{quote}</p>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={onViewMore}
          className="rounded-lg bg-brand-deep px-6 py-2 text-xs sm:text-sm font-bold text-white transition-opacity hover:opacity-90 cursor-pointer shadow-2xs"
        >
          Xem thêm
        </button>
      </div>
    </article>
  );
}

const STUDENTS_DATA: Student[] = [
  {
    id: "1",
    name: "NGUYỄN THANH THẢO",
    score: "8.0",
    bandCategory: "8.0+",
    teacher: "Đội ngũ Mentor Xa Lộ English",
    image: "/images/hall-of-fame/thanh_thao.jpg",
    quote:
      "Em rất thích học ở đây, mí anh chị rất dth với lại nhiệt tình, kiểu mấy ac dạy với sửa bài cho bọn em rất có tâm, mỗi lần tới trung tâm là vì thích học lun í. Kiểu ac hiểu rõ điểm mạnh vs điểm yếu của tụi em để giúp em cải thiện...",
    fullReview:
      "Em rất thích học ở đây, mí anh chị rất dth với lại nhiệt tình, kiểu mấy ac dạy với sửa bài cho bọn em rất có tâm, mỗi lần tới trung tâm là vì thích học lun í. Kiểu ac hiểu rõ điểm mạnh vs điểm yếu của tụi em để giúp em cải thiện, với điểm như vậy thì em quá là hài lòng",
    date: "Tháng 07/2026",
    highlights: ["Overall 8.0", "Học viên xuất sắc", "Lộ trình cá nhân hóa"],
  },
  {
    id: "2",
    name: "TẠ THỊ HIỀN NGA",
    score: "8.0",
    bandCategory: "8.0+",
    teacher: "Đội ngũ Mentor Xa Lộ English",
    image: "/images/hall-of-fame/hien_nga.jpg",
    quote:
      "Em thấy giảng viên dạy khá nhiệt tình và dễ hiểu, do em học riêng nên chị cũng dạy theo nhu cầu của em, và em thấy khá ổn ạaa",
    fullReview:
      "Em thấy giảng viên dạy khá nhiệt tình và dễ hiểu, do em học riêng nên chị cũng dạy theo nhu cầu của em, và em thấy khá ổn ạaa",
    date: "Tháng 07/2026",
    highlights: ["Overall 8.0", "Lớp học 1:1", "Tối ưu phương pháp"],
  },
  {
    id: "3",
    name: "HOÀNG LÊ MINH DŨNG",
    score: "8.0",
    bandCategory: "8.0+",
    teacher: "Đội ngũ Mentor Xa Lộ English",
    image: "/images/hall-of-fame/minh_dung.jpg",
    quote:
      "em thấy mình học được nhiều speaking ạ, em biết thêm nhiều từ mới hơn với học được cách cải thiện Speaking part 3. với trong quá trình dạy writing được thầy chỉ nhiều chỗ tránh bị mất điểm oan...",
    fullReview:
      "em thấy mình học được nhiều speaking ạ, em biết thêm nhiều từ mới hơn với học được cách cải thiện Speaking part 3. với trong quá trình dạy writing được thầy chỉ nhiều chỗ tránh bị mất điểm oan khi làm bài, nghe xong thì em kiểu nhận ra trước khi bắt đầu học ở XaLo thì em hay bị mất điểm writing ở đâu rùi =)). cách sửa bài writing rất chi tiết nữa chị. thầy cũng share nhiều nguồn tài liệu em thấy dễ tiếp cận và học ạ",
    date: "Tháng 06/2026",
    highlights: ["Overall 8.0", "Bứt phá Speaking Part 3", "Writing chi tiết"],
  },
  {
    id: "4",
    name: "VŨ QUỲNH HƯƠNG",
    score: "8.0",
    bandCategory: "8.0+",
    teacher: "Đội ngũ Mentor Xa Lộ English",
    image: "/images/hall-of-fame/quynh_huong.jpg",
    quote:
      "dạ ổn lắm chị ơii. em được học nhiều cách viết ở lớp còn homework thì bài nhiều nma em làm xong là tự em nhớ luôn. với cả homework thầy sửa bài kĩ lắm chị ơi em cũng rút kinh nghiệm nhiều lắm...",
    fullReview:
      "dạ ổn lắm chị ơii. em được học nhiều cách viết ở lớp còn homework thì bài nhiều nma em làm xong là tự em nhớ luôn. với cả homework thầy sửa bài kĩ lắm chị ơi em cũng rút kinh nghiệm nhiều lắm. trước đây em học wri nhưng viết k hay mà nhờ đc học nên giờ em cảm nhận đc tốc độ em viết đc nhanh hơn với câu cũng vững hơn nữa á. em muốn nói là Xa Lộ English tuyệt vời quá chị ơi 🥰",
    date: "Tháng 06/2026",
    highlights: ["Overall 8.0", "Tăng tốc Writing", "Sửa bài kĩ lưỡng"],
  },
  {
    id: "5",
    name: "NGUYỄN THANH BẢO NGỌC",
    score: "7.5",
    bandCategory: "7.5",
    teacher: "Anh Phúc",
    image: "/images/hall-of-fame/bao_ngoc.jpg",
    quote:
      "Huhu dạ thật sự mà nói là hôm đầu tiên học với anh Phúc em sốc gần chết luôn á chị, em thích mindset với cả cách dạy của anh vô cùng luôn, kiểu bắt kịp với thời đại hiện nay ấy ạ...",
    fullReview:
      "Huhu dạ thật sự mà nói là hôm đầu tiên học với anh Phúc em sốc gần chết luôn á chị, em thích mindset với cả cách dạy của anh vô cùng luôn, kiểu bắt kịp với thời đại hiện nay ấy ạ. Thường em học từ vựng không bao giờ vô đầu nhưng mà riêng học với anh Phúc là em học được 20, 30 từ vựng trong 2 tiếng thôi á. Overall là em cực kì cực kì thích tiết của anh. Nhờ anh mà đợt đó em có một cái nhìn khác về IELTS.",
    date: "Tháng 06/2026",
    highlights: ["Band 7.5", "Nạp 30 từ/2h", "Mindset hiện đại"],
  },
  {
    id: "6",
    name: "PHẠM QUỲNH ANH",
    score: "7.5",
    bandCategory: "7.5",
    teacher: "Đội ngũ Mentor Xa Lộ English",
    image: "/images/hall-of-fame/quynh_anh.jpg",
    quote:
      "Em thấy học tại Xa Lộ English rất thoải mái luôn, em học được nhiều lắm ạ. Em đã chỉnh được mấy lỗi ngữ pháp hay sai trước khi và viết câu bớt lộp chộp hơn nè...",
    fullReview:
      "Em thấy học tại Xa Lộ English rất thoải mái luôn, em học được nhiều lắm ạ. Em đã chỉnh được mấy lỗi ngữ pháp hay sai trước khi và viết câu bớt lộp chộp hơn nè. Còn bài đọc thì khi đọc vô em không còn cảm giác ngán ngẩm như hồi tự làm nữa ạ, chắc là do bị năng lượng của GV lấn át rồi hehe. Với lại lúc đầu em đặt mục tiêu 7.0 thui mà lúc thi được hẳn 7.5 luôn ạaaa",
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
      "chị ơi, ý là em k có gì để phàn nàn ấy, em đang học chị Khánh Thi, em đột nhiên nhớ ra là chị ấy dạy hay quá nên em muốn feedback lại cho bên trung tâm mình thôi ạ^^...",
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
      "ạ em cảm thấy lớp chất lượng ạ , chị Ngọc tạo cảm giác thoải mái cho tụi em nên tụi em dễ dàng tiếp cận kiến thức cũng như không ngần ngại hỏi bài chị ạ...",
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
      "Lớp học vui vẻ - chị luôn tương tác với tất cả các học viên - đặc biệt biệt chị luôn quan tâm đến cách tiếp thu bài học của chị đang dạy để đề ra pp dạy phù hợp",
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
      "Chị ơi. Nhờ chị chuyển lời cho thầy Quang Minh là em cảm ơn thầy nhiều nha. Thầy dạy rất là dễ hiểu, nói chuyện với thầy rất là thoải mái, thầy có mấy tips hữu ích nữa...",
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
    <section className="w-full max-w-7xl mx-auto my-14 px-4 sm:px-6 lg:px-8">
      <div className="bg-brand-tint p-6 sm:p-10 lg:p-12 rounded-3xl border border-border shadow-xs">
        {/* Section Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-brand-deep bg-brand-soft px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2.5">
            <Award className="w-4 h-4 text-brand" />
            <span>Thành tích nổi bật</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground uppercase tracking-wide">
            BẢNG VÀNG HỌC VIÊN
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base mt-1.5">
            Hàng ngàn học viên bứt phá điểm số IELTS cùng Xa Lộ English
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 mt-5">
            {[
              { label: "Tất cả học viên", value: "ALL" },
              { label: "Band 8.0+", value: "8.0+" },
              { label: "Band 7.5", value: "7.5" },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedFilter(tab.value)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedFilter === tab.value
                    ? "bg-brand-deep text-white shadow-sm scale-105"
                    : "bg-background text-foreground hover:bg-brand-soft border border-border"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Multi-row 3-column Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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
          <div className="bg-background rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-border">
            <button
              onClick={() => setActiveStudentModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-muted hover:bg-slate-200 flex items-center justify-center text-foreground transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-deep text-white font-black text-2xl flex items-center justify-center shadow-md shrink-0">
                {activeStudentModal.score}
              </div>
              <div>
                <h3 className="text-base font-extrabold text-foreground">
                  {activeStudentModal.name}
                </h3>
                <p className="text-xs text-brand-deep font-bold">
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
                  className="bg-brand-soft text-brand-deep text-xs font-semibold px-2.5 py-1 rounded-md"
                >
                  ✨ {h}
                </span>
              ))}
            </div>

            <div className="bg-brand-tint p-4 rounded-2xl border border-border text-foreground text-xs sm:text-sm leading-relaxed mb-6">
              <p className="font-semibold text-brand-deep mb-1">Cảm nhận học viên:</p>
              &quot;{activeStudentModal.fullReview}&quot;
            </div>

            <button
              onClick={() => setActiveStudentModal(null)}
              className="w-full bg-brand-deep hover:opacity-90 text-white font-bold py-3 rounded-2xl transition-opacity text-sm cursor-pointer shadow-md"
            >
              Đóng cửa sổ
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
