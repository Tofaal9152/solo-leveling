import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
interface problemState {
  // check user login or not
  isLogin: boolean;
  // profile
  profilRefresh: boolean;
  getProfile: any;
  // dashboard data
  quests: any;
}

const initialState: problemState = {
  // check user login or not
  isLogin: false,
  // profile
  profilRefresh: false,
  getProfile: [],

  // dashboard data
  quests: [],
};
const allStateSlice = createSlice({
  name: "problem",
  initialState,
  reducers: {
    //  check user login or not
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    // profile
    setProfilRefresh: (state) => {
      state.profilRefresh = !state.profilRefresh;
    },
    setGetProfile: (state, action) => {
      state.getProfile = action.payload;
    },
    // dashboard data
    setQuests: (state, action) => {
      state.quests = action.payload;
    },
  },
});

export const {
  // check user login or not
  setIsLogin,
  // profile
  setProfilRefresh,
  setGetProfile,
  // dashboard data
  setQuests,  
} = allStateSlice.actions;

// check user login or not
export const selectIsLogin = (state: RootState) => state.problem.isLogin;
// profile
export const selectProfilRefresh = (state: RootState) =>
  state.problem.profilRefresh;
export const selectGetProfile = (state: RootState) => state.problem.getProfile;

// dashboard data
export const selectQuests = (state: RootState) => state.problem.quests;
export default allStateSlice.reducer;
