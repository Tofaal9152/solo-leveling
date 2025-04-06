import { ProgressBar } from "@/components/progress-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProfileProps } from "@/types/authTypes";
import { Brain, Dumbbell, Flame, MessageSquare, Target } from "lucide-react";
import { LevelUpModal } from "./level-up-modal";

export function StatsPanel({ getProfile }: { getProfile: getProfileProps }) {
  const stats = [
    {
      name: "Strength",
      icon: Dumbbell,
      value: getProfile?.statStrength,
      emoji: "💪",
    },
    {
      name: "Intelligence",
      icon: Brain,
      value: getProfile?.statIntelligence,
      emoji: "🧠",
    },
    {
      name: "Discipline",
      icon: Target,
      value: getProfile?.statDiscipline,
      emoji: "🎯",
    },
    {
      name: "Charisma",
      icon: MessageSquare,
      value: getProfile?.statCharisma,
      emoji: "🗣️",
    },
    {
      name: "Willpower",
      icon: Flame,
      value: getProfile?.statWillpower,
      emoji: "🔥",
    },
  ];
  return (
    <Card className="border-purple-900/30 py-0 bg-black/60 backdrop-blur-sm overflow-hidden">
      <CardHeader className="bg-gradient-to-r  flex items-center justify-center w-full h-full from-blue-900/30 to-purple-900/30 border-b border-purple-900/30">
        <CardTitle className="text-lg font-bold flex items-center">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            MY STATS
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-md bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-purple-500/30 flex items-center justify-center text-white">
                    <stat.icon className="h-4 w-4" />
                  </div>
                  <div className="font-medium text-sm">
                    {stat.name} {stat.emoji}
                  </div>
                </div>
                <div className="text-sm font-bold text-blue-400">
                  {stat.value}
                </div>
              </div>
              <ProgressBar
                value={stat.value}
                max={100}
                className="h-2 mt-2"
                barClassName={`bg-gradient-to-r ${
                  index % 2 === 0
                    ? "from-blue-500 to-purple-600"
                    : "from-purple-600 to-blue-500"
                }`}
              />
            </div>
          ))}
        </div>

        <LevelUpModal getProfile={getProfile} />
      </CardContent>
    </Card>
  );
}
