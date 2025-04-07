"use client";

import { UpdateStatsAction } from "@/actions/auth/updateStatsPoint";
import { setProfilRefresh } from "@/redux/allStateSlice";
import { useAppDispatch } from "@/redux/hooks";
import { UpdateStatsType } from "@/types/authTypes";
import { Loader } from "lucide-react";
import { useActionState, useEffect } from "react";
import { Button } from "./ui/button";

const UpdateStatsButton = ({
  statPoints,
  setStatPoints,
}: {
  statPoints: UpdateStatsType;
  setStatPoints: any;
}) => {
  const dispatch = useAppDispatch();
  const [state, action, isPending] = useActionState(
    UpdateStatsAction.bind(null, { statPoints }),
    {
      errors: {},
    }
  );
  useEffect(() => {
    if (state?.success && !isPending) {
      dispatch(setProfilRefresh());
    }
  }, [state, isPending, dispatch]);
  // Reset stat points after successful update
  useEffect(() => {
    if (state?.success) {
      setStatPoints({
        Strength: 0,
        Intelligence: 0,
        Discipline: 0,
        Charisma: 0,
        Willpower: 0,
      });
    }
  }, [state, setStatPoints]);

  const allZero =
    statPoints.Strength === 0 &&
    statPoints.Intelligence === 0 &&
    statPoints.Discipline === 0 &&
    statPoints.Charisma === 0 &&
    statPoints.Willpower === 0;
  return (
    <form action={action}>
      <Button
        disabled={isPending || allZero}
        type="submit"
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white"
      >
        {isPending ? <Loader className="animate-spin" /> : "Confirm"}
      </Button>
      {state?.errors?.formError && (
        <div className="text-red-500 text-sm mt-2">
          {state.errors.formError}
        </div>
      )}
    </form>
  );
};

export default UpdateStatsButton;
