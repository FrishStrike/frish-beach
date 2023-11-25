import type { Metadata } from "next";

import { Poppins } from "next/font/google";

import "./globals.css";

import SideBar from "@/components/SideBar";
import ModalProvider from "@/providers/ModalProvider";
import CustomMenu from "@/components/CustomMenu";
import NavBar from "@/components/NavBar";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Steazy",
  description: "The great music platform forever!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <SideBar>
          <CustomMenu />
          <NavBar />
          {children}
        </SideBar>
      </body>
    </html>
  );
}
