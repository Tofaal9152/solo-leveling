"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getProfileProps } from "@/types/authTypes";
import { useState } from "react";
import UpdateStatsButton from "./UpdateStatsButton";

export function LevelUpModal({ getProfile }: { getProfile: getProfileProps }) {
  const [statPoints, setStatPoints] = useState({
    Strength: 0,
    Intelligence: 0,
    Discipline: 0,
    Charisma: 0,
    Willpower: 0,
  });

  const [pointsRemaining, setPointsRemaining] = useState(getProfile.statPoints);

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
    <>
      <Dialog>
        <DialogTrigger className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-none px-2 py-1 rounded-md shadow-lg cursor-pointer animate-pulse">
          Allocate Points
        </DialogTrigger>
        <DialogContent className="sm:max-w-md border-purple-500/30 bg-black/95 backdrop-blur-sm">
          <DialogHeader className="relative">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-32 h-32">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse" />
              <div className="absolute inset-4 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl font-bold text-white">
                  {getProfile.level}
                </div>
              </div>
            </div>

            <DialogTitle className="text-center pt-12 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              LEVEL UP!
            </DialogTitle>

            <div className="text-center text-gray-400 mt-1">
              You have {pointsRemaining} stat points to allocate
            </div>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            {Object.entries(statPoints).map(([stat, points]) => (
              <div key={stat} className="flex items-center justify-between">
                <div className="font-medium">{stat}</div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7 rounded-full border-purple-500/30 text-purple-400 hover:text-purple-300 hover:bg-purple-900/20"
                    onClick={() =>
                      decrementStat(stat as keyof typeof statPoints)
                    }
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
                    onClick={() =>
                      incrementStat(stat as keyof typeof statPoints)
                    }
                    disabled={pointsRemaining === 0}
                  >
                    <span className="text-lg">+</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>

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
              <UpdateStatsButton statPoints={statPoints} setStatPoints={setStatPoints}/>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
