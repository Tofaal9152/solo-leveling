import GetProfile from "@/actions/auth/getProfile";
import {
  selectGetProfile,
  selectProfilRefresh,
  setGetProfile
} from "@/redux/allStateSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export const useProfile = () => {
  const dispatch = useAppDispatch();
  const refresh = useAppSelector(selectProfilRefresh);
  const profile = useAppSelector(selectGetProfile);

  useEffect(() => {
    GetProfile()
      .then((e) => {
        if (e) {
          dispatch(setGetProfile(e));
        } else {
          dispatch(setGetProfile(null));
          redirect("/auth/login");
        }
      })
      .catch(() => {
        redirect("/auth/login");
      });
  }, [dispatch, refresh]);

  return profile;
};
