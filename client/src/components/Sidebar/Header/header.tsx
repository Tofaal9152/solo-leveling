"use client";

import { HealthBar } from "@/components/Sidebar/Header/health-bar";
import { ProgressBar } from "@/components/ui/progress-bar";
import { selectGetProfile } from "@/redux/allStateSlice";
import { useAppSelector } from "@/redux/hooks";

export function Header() {
  const getProfile = useAppSelector(selectGetProfile);

  return (
    <header className="border-b border-purple-900/30 bg-black/80 backdrop-blur-sm sticky top-0 z-30">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        <div className="md:flex hidden">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            LEVEL {getProfile?.level}
          </h1>
        </div>

        <div className="flex-1 max-w-md mx-4">
          <div className="flex items-center gap-2">
            <div className="text-xs font-bold text-blue-400">
              LVL {getProfile?.level}
            </div>
            <ProgressBar
              value={getProfile?.xp}
              max={getProfile?.levelUpXp || 100}
              className="h-2 flex-1"
              barClassName="bg-gradient-to-r from-blue-500 to-purple-600"
            />
            <div className="text-xs font-bold text-blue-400">
              {getProfile?.xp}/{getProfile?.levelUpXp} xp
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <HealthBar
            value={getProfile?.health}
            max={getProfile?.levelUpHealth}
          />
        </div>
      </div>
    </header>
  );
}
