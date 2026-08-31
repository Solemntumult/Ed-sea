import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

export const metadata: Metadata = {
  title: "Inscription - Espace Doctorant - UAC",
  description: "Plateforme officielle d'inscription de l'École Doctorale (ED-SEA) de l'Université d'Abomey-Calavi.",
  icons: {
    icon: '/logo_edsea.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans bg-[#F8FAFC] text-[#162534] antialiased`}>
        {children}
      </body>
    </html>
  );
}
