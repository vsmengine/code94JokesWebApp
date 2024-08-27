import { Inter } from "next/font/google";
import "./../globals.css";
import Header from "@/components/custom/header";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="flex flex-col !bg-slate-50">
            <Header/>
            <div className="flex flex-row">
              <Suspense>
                {children}
              </Suspense>
            </div>
          </div>
      </body>
    </html>
  );
}
