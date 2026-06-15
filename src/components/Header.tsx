"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { basePath } from "@/lib/site";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "団体概要" },
  { href: "/project", label: "PROJECT" },
  { href: "/member", label: "MEMBER" },
  { href: "/news", label: "NEWS" },
  { href: "/contact", label: "CONTACT" },
  { href: "/sponsor", label: "協賛・寄付" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-4 right-4 left-4 z-50 flex items-start justify-between">
      {/* Logo - 左上 */}
      <Link href="/">
        <img
          src={`${basePath}/favicon.ico`}
          alt="iGEM Kyoto"
          className="h-24 w-24"
        />
      </Link>

      {/* Desktop Navigation - 右上に浮かせる */}
      <nav className="hidden rounded-full border border-gray-200 bg-white/90 px-2 py-2 shadow-lg backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/90 md:flex md:items-center md:gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Menu Button */}
      <div className="ml-auto md:hidden">
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white/90 shadow-lg backdrop-blur-md transition-colors dark:border-gray-700 dark:bg-gray-900/90"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="absolute right-0 top-14 w-56 rounded-2xl border border-gray-200 bg-white/95 p-2 shadow-lg backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/95">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
