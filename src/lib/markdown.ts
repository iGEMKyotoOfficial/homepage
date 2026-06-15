import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { basePath } from "./site";

const contentDirectory = path.join(process.cwd(), "content");

export interface MarkdownContent {
  title: string;
  subtitle: string;
  contentHtml: string;
}

export async function getMarkdownContent(
  filename: string
): Promise<MarkdownContent> {
  const fullPath = path.join(contentDirectory, `${filename}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  // `../public/foo` 形式の相対パスを公開URL（basePath 配下）へ書き換える。
  const adjustedContent = content.replace(/\.\.\/public\//g, `${basePath}/`);
  // コンテンツは内部で執筆する信頼済みの Markdown のため、
  // 協賛ページ等で使う生 HTML / インライン style を保持するよう sanitize を無効化する。
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(adjustedContent);
  const contentHtml = processedContent.toString();

  return {
    title: data.title || "",
    subtitle: data.subtitle || "",
    contentHtml,
  };
}
