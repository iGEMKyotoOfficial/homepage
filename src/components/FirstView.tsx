"use client";

import { ChevronDown } from "lucide-react";
import { basePath } from "@/lib/site";

export default function FirstView() {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      className="relative flex min-h-screen items-center justify-center px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${basePath}/images/home_firstview.png)`,
      }}
    >
      <div className="relative z-10 text-center">
        <h1 className="fv-title text-5xl font-bold leading-tight tracking-wide text-gray-900 dark:text-white md:text-7xl lg:text-8xl">
          合成生物学で世界に挑む
        </h1>
        <p className="fv-subtitle mt-8 inline-block text-base text-gray-600 dark:text-gray-400 md:text-lg bg-white/60 px-1">
          私たちは「合成生物学」の世界大会 iGEM
          へ参加する京都大学学部生によるサークルです
        </p>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="fv-scroll absolute bottom-10 left-1/2 z-10 -translate-x-1/2 cursor-pointer border-none bg-transparent text-gray-400 transition-colors hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </button>
    </section>
  );
}
