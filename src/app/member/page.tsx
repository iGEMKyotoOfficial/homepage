import { members } from "@/data/members";
import MemberTabs from "@/components/MemberTabs";
import { basePath } from "@/lib/site";

export const metadata = {
  title: "MEMBER",
  description: "iGEM Kyoto の歴代メンバーの紹介です。",
};

export default function MemberPage() {
  return <MemberTabs members={members} basePath={basePath} />;
}
