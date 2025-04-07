import { getProfileProps } from "@/types/authTypes";
import { DialogTitle } from "../ui/dialog";

const LeveUpHeader = ({
  pointsRemaining,
  getProfile,
}: {
  pointsRemaining: number;
  getProfile: getProfileProps;
}) => {
  return (
    <>
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-32 h-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse" />
        <div className="absolute inset-4 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl font-bold text-white">
            {getProfile.level}
          </div>
        </div>
      </div>

      <DialogTitle className="text-center pt-12 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        LEVEL UP!
      </DialogTitle>

      <div className="text-center text-gray-400 mt-1">
        You have {pointsRemaining} stat points to allocate
      </div>
    </>
  );
};

export default LeveUpHeader;
