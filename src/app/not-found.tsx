"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// GitHub Pages のプロジェクトサイト（/homepage 配下）では、未一致パスに 404.html が返る。
// basePath の外（ルート等）を開いた場合もここに来るため、ホームへ自動リダイレクトする。
export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // basePath が自動付与され、ホーム（/homepage/）へ遷移する
    router.replace("/");
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-lg text-gray-600 dark:text-gray-400">
        ページが見つかりませんでした。ホームへ移動します…
      </p>
      <Link
        href="/"
        className="inline-flex items-center rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
      >
        ホームに戻る
      </Link>
    </div>
  );
}
