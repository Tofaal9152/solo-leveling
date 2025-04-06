"use client";

import { CeateQuestAction } from "@/actions/quest/createQuest";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Loader } from "lucide-react";
import { useActionState } from "react";

const Page = () => {
  const [state, action, isPending] = useActionState(CeateQuestAction, {
    errors: {},
  });
  

  return (
    <div className="max-w-xl mx-auto mt-10 ">
      <Card className="bg-black/50 ">
        <CardHeader>
          <CardTitle className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text font-bold text-xl">
            Create Workout Quest
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action={action} className="space-y-4">
            <div className="gap-2 flex flex-col">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" placeholder="Enter quest title" />
            </div>
            {state.errors.title && (
              <div className="bg-red-100 text-red-500 p-2 text-sm rounded-lg mb-4">
                {state.errors.title}
              </div>
            )}
            <div className="gap-2 flex flex-col">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                name="description"
                placeholder="Enter quest description"
              />
            </div>
            {state.errors.description && (
              <div className="bg-red-100 text-red-500 p-2 text-sm rounded-lg mb-4">
                {state.errors.description}
              </div>
            )}
            <div className="gap-2 flex flex-col">
              <Label htmlFor="xp">XP</Label>
              <Input
                id="xp"
                type="number"
                name="xp"
                placeholder="Enter quest XP"
              />
            </div>
            {state.errors.xp && (
              <div className="bg-red-100 text-red-500 p-2 text-sm rounded-lg mb-4">
                {state.errors.xp}
              </div>
            )}
            <div className="gap-2 flex flex-col">
              <Label htmlFor="statPoints">Stat Points</Label>
              <Input
                id="statPoints"
                type="number"
                name="statPoints"
                placeholder="Enter stat points"
              />
            </div>
            {state.errors.statPoints && (
              <div className="bg-red-100 text-red-500 p-2 text-sm rounded-lg mb-4">
                {state.errors.statPoints}
              </div>
            )}
            <div className="gap-2 flex flex-col">
              <Label htmlFor="healthPoints">Health Points</Label>
              <Input
                id="healthPoints"
                type="number"
                name="healthPoints"
                placeholder="Enter health points"
              />
            </div>
            {state.errors.healthPoints && (
              <div className="bg-red-100 text-red-500 p-2 text-sm rounded-lg mb-4">
                {state.errors.healthPoints}
              </div>
            )}
            <div className="gap-2 flex flex-col">
              <Label>Quest Type</Label>
              <Select defaultValue="DAILY" name="frequency">
                <SelectTrigger>
                  <SelectValue placeholder="Select Frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DAILY">DAILY</SelectItem>
                  <SelectItem value="WEEKLY">WEEKLY</SelectItem>
                  <SelectItem value="MONTHLY">MONTHLY</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {state.errors.frequency && (
              <div className="bg-red-100 text-red-500 p-2 text-sm rounded-lg mb-4">
                {state.errors.frequency}
              </div>
            )}
            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-gradient-to-l hover:from-blue-600 hover:to-purple-600"
            >
              {isPending && <Loader className="mr-2 animate-spin" size={18} />}
              Submit Quest
            </Button>
            {state.errors.formError && (
              <div className="bg-red-100 text-red-500 p-2 text-sm rounded-lg mt-4">
                {state.errors.formError}
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
