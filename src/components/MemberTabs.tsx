"use client";

import { useState } from "react";
import { Users, ExternalLink } from "lucide-react";
import { Member } from "@/data/members";
import { pastMembers } from "@/data/pastMembers";
import MemberCard from "@/components/MemberCard";
import PastMemberCard from "@/components/PastMemberCard";

const CURRENT_YEAR = "2026";

interface MemberTabsProps {
  members: Member[];
  basePath: string;
}

export default function MemberTabs({ members, basePath }: MemberTabsProps) {
  const [tab, setTab] = useState(CURRENT_YEAR);

  const years = [CURRENT_YEAR, ...pastMembers.map((y) => y.year)];
  const activePastYear = pastMembers.find((y) => y.year === tab);

  return (
    <div className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <Users className="mx-auto mb-4 h-12 w-12 text-green-500" />
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            MEMBER
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            歴代メンバーを年度毎にご紹介します。iGEM Jamboreeに出場した年はWikiもご覧いただけます。
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-gray-200 bg-white/90 p-2 shadow-lg backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/90">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setTab(year)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  tab === year
                    ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {tab === CURRENT_YEAR && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member) => (
              <MemberCard key={member.id} member={member} basePath={basePath} />
            ))}
          </div>
        )}

        {activePastYear && (
          <div>
            {(activePastYear.theme || activePastYear.wikiUrl) && (
              <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-center">
                {activePastYear.theme && (
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    Theme: {activePastYear.theme}
                  </p>
                )}
                {activePastYear.wikiUrl && (
                  <a
                    href={activePastYear.wikiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-gray-300 px-4 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    Wiki
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            )}

            {activePastYear.members && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {activePastYear.members.map((member) => (
                  <PastMemberCard
                    key={member.name}
                    member={member}
                    basePath={basePath}
                  />
                ))}
              </div>
            )}

            {activePastYear.memberList && (
              <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-md backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/80">
                <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                  {activePastYear.memberList.map((m, i) => (
                    <li
                      key={`${m.name}-${i}`}
                      className="flex justify-between border-b border-gray-100 py-1.5 text-sm dark:border-gray-800"
                    >
                      <span className="font-medium text-gray-900 dark:text-white">
                        {m.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {m.info}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
