import { QuestPanel } from "@/components/Quests/quest-panel";
import { StatsPanel } from "@/components/Stats/stats-panel";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 md:p-6">
      <div className="lg:col-span-1">
        <StatsPanel />
      </div>
      <div className="lg:col-span-2">
        <QuestPanel />
      </div>
    </div>
  );
}
