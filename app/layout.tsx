import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";

const ralewaySans = Raleway({
  variable: "--font-raleway-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClinSP | Clínica Veterinária",
  description:
    "A ClinSP é especializada em cuidados veterinários com atendimento humanizado, prevenção e adoção de pets. Agende sua consulta!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={ralewaySans.variable}>
      <body className={`${ralewaySans.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
