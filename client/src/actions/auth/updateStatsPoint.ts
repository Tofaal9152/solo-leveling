import api from "@/lib/api";
import { UpdateStatsType } from "@/types/authTypes";
import axios from "axios";

import { toast } from "sonner";
type UpdateProps = {
  errors?: {
    formError?: string[];
  };
  success?: boolean;
};
export const UpdateStatsAction = async ({
  statPoints,
}: {
  statPoints: UpdateStatsType;
}): Promise<UpdateProps> => {
  try {
    const res = await api.put(`/auth/update-stats/`, {
      statStrength: statPoints.Strength,
      statIntelligence: statPoints.Intelligence,
      statDiscipline: statPoints.Discipline,
      statCharisma: statPoints.Charisma,
      statWillpower: statPoints.Willpower,
    });
    console.log(res);
    toast.success("Stats updated successfully!");
    return {
      success: true,
    };
  } catch (error: any) {
    toast.error("Failed to update stats. Please try again.");
    if (error instanceof Error) {
      return {
        errors: {
          formError: axios.isAxiosError(error)
            ? error.response?.data.message
            : [error.message],
        },
      };
    } else {
      return {
        errors: {
          formError: ["Unknown error"],
        },
      };
    }
  }
};
