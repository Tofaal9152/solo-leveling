"use client";
import { selectGetProfile } from "@/redux/allStateSlice";
import { useAppSelector } from "@/redux/hooks";

const SidebarFooterProfile = () => {
  const getProfile = useAppSelector(selectGetProfile);
  
  return (
    <div className="w-full ">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
          E
        </div>
        <div>
          <div className="text-sm font-bold">{getProfile?.name}</div>
          <div className="text-xs text-purple-400">Stat Points = {getProfile?.statPoints}</div>
        </div>
      </div>
    </div>
  );
};

export default SidebarFooterProfile;
