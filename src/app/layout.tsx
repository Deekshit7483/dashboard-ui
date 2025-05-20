import "@/app/styles/globals.css";
import { Sidebar } from "@/app/components/sidebar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " flex min-h-screen bg-[#f8fafc]"}>
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <main className="flex-1 p-4 md:p-8 overflow-auto bg-white w-full">{children}</main>
      </body>
    </html>
  );
}