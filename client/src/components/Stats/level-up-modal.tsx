"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useProfile } from "@/hooks/useProfile";
import { getProfileProps } from "@/types/authTypes";
import { useEffect, useState } from "react";
import LevelUpFuntions from "./LevelUpFuntions";
import LeveUpHeader from "./LeveUpHeader";
import UpdateStatsButton from "./UpdateStatsButton";
import { StatPoints } from "@/types/QuestTypes";

export function LevelUpModal() {
  const getProfile: getProfileProps = useProfile();
  const [pointsRemaining, setPointsRemaining] = useState(getProfile.statPoints);
  const [statPoints, setStatPoints] = useState<StatPoints>({
    Strength: 0,
    Intelligence: 0,
    Discipline: 0,
    Charisma: 0,
    Willpower: 0,
  });

  useEffect(() => {
    setPointsRemaining(getProfile.statPoints);
  }, [getProfile.statPoints]);

  return (
    <>
      <Dialog>
        <DialogTrigger className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-none px-2 py-1 rounded-md shadow-lg cursor-pointer animate-pulse">
          Allocate Points
        </DialogTrigger>
        <DialogContent className="sm:max-w-md border-purple-500/30 bg-black/95 backdrop-blur-sm">
          {/* Dialog Header */}
          <DialogHeader className="relative">
            <LeveUpHeader
              pointsRemaining={pointsRemaining}
              getProfile={getProfile}
            />
          </DialogHeader>
          {/* Level Tp Logic */}
          <LevelUpFuntions
            statPoints={statPoints}
            setStatPoints={setStatPoints}
            pointsRemaining={pointsRemaining}
            setPointsRemaining={setPointsRemaining}
          />

          <div className="flex justify-end gap-2 mt-4">
            <DialogClose asChild>
              <Button
                variant="outline"
                className="border-purple-500/30 text-purple-400 hover:text-purple-300 hover:bg-purple-900/20"
              >
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              {/* Update Status Btn */}
              <UpdateStatsButton
                statPoints={statPoints}
                setStatPoints={setStatPoints}
              />
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
