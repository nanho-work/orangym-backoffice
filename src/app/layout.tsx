import "../styles/globals.css"
import Sidebar from "../components/layout/Sidebar";

export const metadata = {
  title: "Orangym Backoffice",
  description: "헬스장 관리 백오피스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="flex">
        {/* 사이드바 */}
        <Sidebar />
        {/* 메인 컨텐츠 */}
        <main className="flex-1 p-6 bg-white">{children}</main>
      </body>
    </html>
  );
}