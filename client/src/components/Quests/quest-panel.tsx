import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsTriggerData } from "@/constants/constants";
import TabsContents from "./TabsContents";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export function QuestPanel() {
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
        <Tabs defaultValue="daily">
          <TabsList className="grid grid-cols-3 mb-4 bg-black/60 border border-purple-900/30">
            {TabsTriggerData.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:bg-gradient-to-r cursor-pointer data-[state=active]:from-blue-600/20 data-[state=active]:to-purple-600/20 data-[state=active]:text-white"
              >
                <span>{tab.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {/* TabsContent */}
          <TabsContents />
        </Tabs>
      </CardContent>
    </Card>
  );
}
