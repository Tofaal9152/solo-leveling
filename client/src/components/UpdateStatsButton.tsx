"use client";

import { useEffect, useTransition } from "react";
import { Button } from "./ui/button";
import { UpdateStatsAction } from "@/actions/auth/updateStatsPoint";
import { Loader } from "lucide-react";
import { UpdateStatsType } from "@/types/authTypes";
import { useAppDispatch } from "@/redux/hooks";
import { setProfilRefresh } from "@/redux/allStateSlice";

const UpdateStatsButton = ({
  statPoints,
  setStatPoints,
}: {
  statPoints: UpdateStatsType;
  setStatPoints: React.Dispatch<React.SetStateAction<UpdateStatsType>>;
}) => {
  const dispatch = useAppDispatch();
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      UpdateStatsAction({ statPoints });
      setStatPoints({
        Strength: 0,
        Intelligence: 0,
        Discipline: 0,
        Charisma: 0,
        Willpower: 0,
      });
    });
  };
  useEffect(() => {
    if (!isPending) {
      dispatch(setProfilRefresh());
    }
  }, [isPending, dispatch]);
  return (
    <Button
      disabled={isPending}
      onClick={handleClick}
      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white"
    >
      {isPending ? <Loader className="animate-spin" /> : "Confirm"}
    </Button>
  );
};

export default UpdateStatsButton;
