"use client";
import { setProfilRefresh } from "@/redux/allStateSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Quest } from "@/types/QuestTypes";
import { Trash } from "lucide-react";
import { useActionState, useEffect } from "react";

import { DeleteQuestAction } from "@/actions/quest/deleteQuest";
import { Button } from "../ui/button";
const DeleteQuestButton = ({ quest }: { quest: Quest }) => {
  const dispatch = useAppDispatch();
  const [, action, isPending] = useActionState(
    DeleteQuestAction.bind(null, quest.id),
    null
  );
  useEffect(() => {
    if (!isPending) {
      dispatch(setProfilRefresh());
    }
  }, [isPending, dispatch]);
  return (
    <form action={action} className="mt-4">
      <Button
        className="bg-transparent border-0 hover:bg-destructive"
        type="submit"
        disabled={isPending}
        size={"sm"}
        variant={"outline"}
      >
        <Trash />
      </Button>
    </form>
  );
};

export default DeleteQuestButton;
