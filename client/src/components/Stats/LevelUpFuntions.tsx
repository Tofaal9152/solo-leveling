"use client";
import { Button } from "@/components/ui/button";
import { StatPoints } from "@/types/QuestTypes";
const LevelUpFuntions = ({
  statPoints,
  setStatPoints,
  pointsRemaining,
  setPointsRemaining,
}: {
  statPoints: StatPoints;
  setStatPoints: React.Dispatch<React.SetStateAction<StatPoints>>;
  pointsRemaining: number;
  setPointsRemaining: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const incrementStat = (stat: keyof typeof statPoints) => {
    if (pointsRemaining > 0) {
      setStatPoints((prev) => ({
        ...prev,
        [stat]: prev[stat] + 1,
      }));
      setPointsRemaining((prev) => prev - 1);
    }
  };

  const decrementStat = (stat: keyof typeof statPoints) => {
    if (statPoints[stat] > 0) {
      setStatPoints((prev) => ({
        ...prev,
        [stat]: prev[stat] - 1,
      }));
      setPointsRemaining((prev) => prev + 1);
    }
  };
  return (
    <div className="space-y-4 mt-4">
      {Object.entries(statPoints).map(([stat, points]) => (
        <div key={stat} className="flex items-center justify-between">
          <div className="font-medium">{stat}</div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7 rounded-full border-purple-500/30 text-purple-400 hover:text-purple-300 hover:bg-purple-900/20"
              onClick={() => decrementStat(stat as keyof typeof statPoints)}
              disabled={points === 0}
            >
              <span className="text-lg">-</span>
            </Button>

            <div className="w-8 text-center font-bold">
              {points > 0 ? (
                <span className="text-green-400">+{points}</span>
              ) : (
                <span>0</span>
              )}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7 rounded-full border-purple-500/30 text-purple-400 hover:text-purple-300 hover:bg-purple-900/20"
              onClick={() => incrementStat(stat as keyof typeof statPoints)}
              disabled={pointsRemaining === 0}
            >
              <span className="text-lg">+</span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LevelUpFuntions;
