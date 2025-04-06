"use client";
import { UpdateQuestStatusAction } from "@/actions/quest/updateQuestStatus";
import { Button } from "./ui/button";
import { useActionState, useEffect } from "react";
import { Input } from "./ui/input";
import { useAppDispatch } from "@/redux/hooks";
import { setProfilRefresh } from "@/redux/allStateSlice";
import { Quest } from "@/types/QuestTypes";
const UpdateStatusButton = ({ quest }: { quest: Quest }) => {
  const dispatch = useAppDispatch();
  const [state, action, isPending] = useActionState(
    UpdateQuestStatusAction.bind(null, quest.id),
    {
      errors: {},
    }
  );
  useEffect(() => {
    if (!isPending) {
      dispatch(setProfilRefresh());
    }
  }, [isPending, dispatch]);
  return quest.status === "COMPLETED" ? (
    ""
  ) : (
    <>
      <form action={action} className="mt-4">
        <Input className="hidden" name="status" defaultValue={"COMPLETED"} />
        {state.errors.status && (
          <div className="bg-red-100 text-red-500 p-2 text-sm rounded-lg my-2">
            {state.errors.status}
          </div>
        )}
        <Button
          disabled={isPending}
          size={"sm"}
          variant={"outline"}
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white "
        >
          {isPending ? "Updating..." : "Mark Complete"}
        </Button>
        {state.errors.formError && (
          <div className="bg-red-100 text-red-500 p-2 text-sm rounded-lg mt-4">
            {state.errors.formError}
          </div>
        )}
      </form>
    </>
  );
};

export default UpdateStatusButton;
