import { cn } from "@/lib/utils";
import { Quest } from "@/types/QuestTypes";
import { Check, Clock } from "lucide-react";
import DeleteQuestButton from "./DeleteQuest";
import UpdateStatusButton from "./UpdateStatusButton";

const QuestList = ({ quests }: { quests: Quest[] }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return <Check className="h-5 w-5 text-green-400" />;
      case "PENDING":
        return <Clock className="h-5 w-5 text-yellow-400" />;
    }
  };

  return (
    <section>
      <div className="space-y-3">
        {quests.map((quest) => (
          <div
            key={quest.id}
            className={cn(
              "p-3 rounded-lg border transition-all duration-300",
              quest.status === "COMPLETED"
                ? "border-green-500/30 bg-green-900/10"
                : "border-purple-900/30 bg-blue-900/10 hover:bg-blue-900/20"
            )}
          >
            <div className="flex items-start gap-3">
              <button
                className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center border",
                  quest.status === "COMPLETED"
                    ? "border-green-500/50 bg-green-900/20"
                    : "border-yellow-500/50 bg-yellow-900/20"
                )}
              >
                {getStatusIcon(quest.status)}
              </button>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3
                    className={cn(
                      "font-bold text-sm",
                      quest.status === "COMPLETED" &&
                        "line-through text-green-400"
                    )}
                  >
                    {quest.title}
                  </h3>
                  <div className="flex-shrink-0 text-xs font-bold text-blue-400 px-2 py-0.5 rounded bg-blue-900/20 border border-blue-500/30">
                    +{quest.xp} XP
                  </div>
                </div>

                <p className="text-xs text-gray-400 mt-1">
                  {quest.description}
                </p>

                <div className="flex items-center justify-between mt-2">
                  <div className="text-xs text-purple-400">
                    {quest.statPoints} stat
                  </div>

                  <div className="text-xs text-gray-400 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {quest.healthPoints} hp
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <DeleteQuestButton quest={quest} />
              <UpdateStatusButton quest={quest} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default QuestList;
