import { Mail } from "lucide-react";
import { getMarkdownContent } from "@/lib/markdown";
import MarkdownContent from "@/components/MarkdownContent";

export const metadata = {
  title: "CONTACT",
  description: "iGEM Kyoto へのお問い合わせ先のご案内です。",
};

export default async function ContactPage() {
  const { title, subtitle, contentHtml } = await getMarkdownContent("contact");

  return (
    <div className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Mail className="mx-auto mb-4 h-12 w-12 text-orange-500" />
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
