import { Newspaper } from "lucide-react";
import { getMarkdownContent } from "@/lib/markdown";
import MarkdownContent from "@/components/MarkdownContent";

export const metadata = {
  title: "NEWS",
  description: "iGEM Kyoto の最新の活動情報をお届けします。",
};

export default async function NewsPage() {
  const { title, subtitle, contentHtml } = await getMarkdownContent("news");

  return (
    <div className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Newspaper className="mx-auto mb-4 h-12 w-12 text-purple-500" />
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
