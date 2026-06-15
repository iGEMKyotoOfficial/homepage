import { Building2 } from "lucide-react";
import { getMarkdownContent } from "@/lib/markdown";
import MarkdownContent from "@/components/MarkdownContent";

export const metadata = {
  title: "団体概要",
  description:
    "iGEM Kyoto の概要、合成生物学や iGEM 大会についてご紹介します。",
};

export default async function AboutPage() {
  const { title, subtitle, contentHtml } = await getMarkdownContent("about");

  return (
    <div className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Building2 className="mx-auto mb-4 h-12 w-12 text-gray-400" />
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            {title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>
        </div>
        <MarkdownContent html={contentHtml} />
      </div>
    </div>
  );
}
