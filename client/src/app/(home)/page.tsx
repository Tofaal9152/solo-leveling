"use client";

import { QuestPanel } from "@/components/quest-panel";
import { StatsPanel } from "@/components/stats-panel";
import { useProfile } from "@/hooks/useProfile";
import { useQuests } from "@/hooks/useQuests";

export default function Home() {
  const profile = useProfile();
  const quests = useQuests();

  if (!profile || !quests) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 md:p-6">
      <div className="lg:col-span-1">
        <StatsPanel getProfile={profile} />
      </div>
      <div className="lg:col-span-2">
        <QuestPanel questsData={quests?.results || []} />
      </div>
    </div>
  );
}
