import { useEffect } from "react";
import GetUsersQuest from "@/actions/quest/userCreatedQuest";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setQuests,
  selectQuests,
  selectProfilRefresh,
} from "@/redux/allStateSlice";

export const useQuests = () => {
  const dispatch = useAppDispatch();
  const refresh = useAppSelector(selectProfilRefresh);
  const quests = useAppSelector(selectQuests);

  useEffect(() => {
    GetUsersQuest()
      .then((data) => dispatch(setQuests(data || [])))
      .catch(() => dispatch(setQuests([])));
  }, [dispatch, refresh]);

  return quests;
};
