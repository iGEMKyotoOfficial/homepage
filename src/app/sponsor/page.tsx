import { getMarkdownContent } from "@/lib/markdown";
import SponsorTabs from "@/components/SponsorTabs";

export const metadata = {
  title: "協賛・寄付",
  description:
    "iGEM Kyoto の活動への協賛・寄付のご案内と、ご支援くださった皆様のご紹介です。",
};

export default async function SponsorPage() {
  const introContent = await getMarkdownContent("sponsor-intro");
  const supportContent = await getMarkdownContent("sponsor-support");

  return (
    <SponsorTabs introContent={introContent} supportContent={supportContent} />
  );
}
