"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 border-b border-gray-200 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex justify-between items-center">
        
        {/* 1. Logo + Nom */}
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src="/logo_edsea.jpg" 
            alt="Logo ED-SEA" 
            className="h-14 w-auto object-contain flex-shrink-0" 
          />
          <div className="flex flex-col justify-center">
            <span className="text-[14px] font-medium text-gray-900 leading-tight">ED-SEA</span>
            <span className="text-[11px] text-gray-500 leading-tight hidden sm:block">École doctorale sciences exactes et appliquées</span>
          </div>
        </Link>

        {/* 2. Navigation (Desktop) */}
        <nav className="hidden md:flex items-center gap-[20px]">
          <a href="/#presentation" className="text-[14px] text-gray-800 hover:text-[#006900] hover:underline underline-offset-4 transition-colors">Qui sommes nous ?</a>
          <a href="/#actualites" className="text-[14px] text-gray-800 hover:text-[#006900] hover:underline underline-offset-4 transition-colors">Actualités</a>
          <a href="/#formations" className="text-[14px] text-gray-800 hover:text-[#006900] hover:underline underline-offset-4 transition-colors">Formations</a>
          <a href="/#admissions" className="text-[14px] text-gray-800 hover:text-[#006900] hover:underline underline-offset-4 transition-colors">Admissions</a>
        </nav>

        {/* 3. Bouton CTA (Desktop) + Burger (Mobile) */}
        <div className="flex items-center gap-4">
          <a 
            href="https://cuo.sigan-uac.bj/" target="_blank" rel="noopener noreferrer"
            className="hidden md:inline-flex bg-[#006900] text-white text-[14px] font-medium px-[16px] py-[9px] rounded-md hover:bg-[#005000] transition-colors shadow-sm"
          >
            Soumettre une candidature
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <a href="/#presentation" onClick={() => setMobileMenuOpen(false)} className="text-[15px] font-medium text-gray-800 hover:text-[#006900]">Qui sommes nous ?</a>
            <a href="/#actualites" onClick={() => setMobileMenuOpen(false)} className="text-[15px] font-medium text-gray-800 hover:text-[#006900]">Actualités</a>
            <a href="/#formations" onClick={() => setMobileMenuOpen(false)} className="text-[15px] font-medium text-gray-800 hover:text-[#006900]">Formations</a>
            <a href="/#admissions" onClick={() => setMobileMenuOpen(false)} className="text-[15px] font-medium text-gray-800 hover:text-[#006900]">Admissions</a>
            <div className="pt-4 border-t border-gray-100">
              <a 
                href="https://cuo.sigan-uac.bj/" target="_blank" rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-[#006900] text-white text-[15px] font-medium px-4 py-3 rounded-md hover:bg-[#005000] transition-colors"
              >
                Soumettre une candidature
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
