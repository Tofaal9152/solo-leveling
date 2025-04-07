"use client";
import { useQuests } from "@/hooks/useQuests";
import { useMemo } from "react";
import QuestList from "./QuestLIst";
import { TabsContent } from "../ui/tabs";
import { Quest } from "@/types/QuestTypes";

const TabsContents = () => {
  const quests = useQuests();
  const questList = useMemo(() => {
    const QuestData = quests?.results || [];
    return {
      daily: QuestData.filter((q: Quest) => q.frequency === "DAILY"),
      weekly: QuestData.filter((q: Quest) => q.frequency === "WEEKLY"),
      monthly: QuestData.filter((q: Quest) => q.frequency === "MONTHLY"),
    };
  }, [quests]);
  return (
    <>
      {Object.entries(questList).map(([key, questList]) => (
        <TabsContent key={key} value={key} className="mt-0">
          {questList.length > 0 ? (
            <QuestList quests={questList} />
          ) : (
            <p className="text-center text-gray-400 capitalize">
              No {key} quests available!
            </p>
          )}
        </TabsContent>
      ))}
    </>
  );
};

export default TabsContents;
