import { ReactNode } from "react";

export default async function AfterLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      에프터 로그인 레이아웃
      {children}
    </div>
  );
}
