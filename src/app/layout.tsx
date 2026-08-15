import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xa Lộ English | Học đúng cách khi hiểu đúng mình cùng quy trình chẩn chữa",
  description:
    "Xa Lộ English - Trung tâm luyện thi IELTS uy tín tại 250 Nguyễn Đình Chính, Phú Nhuận, TPHCM. Mentor IELTS 8.0+, quy trình chẩn chữa độc quyền, tài trợ học phí tới 20 triệu đồng.",
  keywords: [
    "Xa Lộ English",
    "Luyện thi IELTS Phú Nhuận",
    "IELTS Mentor 8.0",
    "Quy trình chẩn chữa IELTS",
    "Học IELTS TPHCM",
    "Test trình độ IELTS miễn phí",
  ],
  icons: {
    icon: "/Logo_XLE.svg",
    shortcut: "/Logo_XLE.svg",
    apple: "/Logo_XLE.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased selection:bg-purple-500 selection:text-white min-h-screen bg-slate-50">
        {children}
      </body>
    </html>
  );
}
