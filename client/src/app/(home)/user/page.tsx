"use client";

import SignOut from "@/components/user/LogOut";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { selectGetProfile } from "@/redux/allStateSlice";
import { useAppSelector } from "@/redux/hooks";
import { Heart, LogOut, Mail, Trophy } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const user = useAppSelector(selectGetProfile);

  return (
    <div className="px-4 md:px-6">
      {/* User Info Card */}
      <Card className="border-purple-900/30 bg-black/60 backdrop-blur-sm">
        <CardHeader className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-b border-purple-900/30">
          <CardTitle className="text-lg font-bold flex items-center justify-between">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              HUNTER PROFILE
            </span>
            <SignOut />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-[3px] mb-4">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <span className="text-3xl font-bold text-white">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
            <h2 className="text-xl font-bold text-white mb-1">{user.name}</h2>
            <p className="text-gray-400 flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              {user.email}
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-blue-400">
                  <Trophy className="h-4 w-4 mr-2" />
                  <span className="font-medium">Level</span>
                </div>
                <span className="text-lg font-bold text-white">
                  {user.level}
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">XP Progress</span>
                  <span className="text-blue-400">
                    {user.xp} / {user.levelUpXp}
                  </span>
                </div>
                <ProgressBar
                  value={user.xp}
                  max={user.levelUpXp}
                  className="h-2"
                  barClassName="bg-gradient-to-r from-blue-500 to-purple-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-red-400">
                  <Heart className="h-4 w-4 mr-2" />
                  <span className="font-medium">Health</span>
                </div>
                <span className="text-lg font-bold text-white">
                  {user.health} / {user.levelUpHealth}
                </span>
              </div>
              <ProgressBar
                value={user.health}
                max={user.levelUpHealth}
                className="h-2"
                barClassName="bg-gradient-to-r from-red-500 to-red-600"
              />
            </div>

            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center text-purple-400">
                  <Trophy className="h-4 w-4 mr-2" />
                  <span className="font-medium">Stat Points Available</span>
                </div>
                <span className="text-lg font-bold text-white">
                  {user.statPoints}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
