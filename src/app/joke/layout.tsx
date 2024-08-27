import { Inter } from "next/font/google";
import "./../globals.css";

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
            <div className="flex flex-row">
              {children}
            </div>
          </div>
      </body>
    </html>
  );
}
