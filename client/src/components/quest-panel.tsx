"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsTriggerData } from "@/constants/constants";
import { Quest } from "@/types/QuestTypes";
import QuestList from "./QuestLIst";
import { useMemo } from "react";

export function QuestPanel({ questsData }: { questsData: Quest[] }) {
  const quests = useMemo(
    () => ({
      daily: questsData.filter((q) => q.frequency === "DAILY"),
      weekly: questsData.filter((q) => q.frequency === "WEEKLY"),
      monthly: questsData.filter((q) => q.frequency === "MONTHLY"),
    }),
    [questsData]
  );

  return (
    <Card className="border-purple-900/30 py-0 overflow-hidden bg-black/60 backdrop-blur-sm h-full">
      <CardHeader className="bg-gradient-to-r flx items-center justify-center from-blue-900/30 to-purple-900/30 border-b border-purple-900/30">
        <CardTitle className="text-lg font-bold flex items-center">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            QUEST LOG
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-4">
        {/* Tabs Trigger */}
        <Tabs defaultValue="daily">
          <TabsList className="grid grid-cols-3 mb-4 bg-black/60 border border-purple-900/30">
            {TabsTriggerData.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:bg-gradient-to-r cursor-pointer data-[state=active]:from-blue-600/20 data-[state=active]:to-purple-600/20 data-[state=active]:text-white"
              >
                <tab.icon className="h-4 w-4 mr-2" />
                <span>{tab.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {/* TabsContent */}
          {Object.entries(quests).map(([key, questList]) => (
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
        </Tabs>
      </CardContent>
    </Card>
  );
}
