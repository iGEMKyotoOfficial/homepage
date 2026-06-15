import { Users } from "lucide-react";
import { members } from "@/data/members";
import MemberCard from "@/components/MemberCard";
import { basePath } from "@/lib/site";

export const metadata = {
  title: "MEMBER",
  description: "iGEM Kyoto のメンバー紹介です。",
};

export default function MemberPage() {
  return (
    <div className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <Users className="mx-auto mb-4 h-12 w-12 text-green-500" />
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            MEMBER
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Our Team</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} basePath={basePath} />
          ))}
        </div>
      </div>
    </div>
  );
}
