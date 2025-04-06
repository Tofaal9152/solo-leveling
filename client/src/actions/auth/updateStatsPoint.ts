import api from "@/lib/api";
import { UpdateStatsType } from "@/types/authTypes";
import { toast } from "sonner";

export const UpdateStatsAction = async ({
  statPoints,
}: {
  statPoints: UpdateStatsType;
}) => {
  console.log(statPoints);
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
  } catch (error: any) {
    toast.error(
      error.response?.data?.message || "An error occurred during Update ."
    );
  }
};
