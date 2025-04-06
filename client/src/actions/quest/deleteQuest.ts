import api from "@/lib/api";
import { toast } from "sonner";

export const DeleteQuestAction = async (id: string) => {
  try {
    await api.delete(`/quest/delete/${id}`);
    toast.success("Quest deleted successfully", {
      description: "Your quest has been deleted.",
    });
  } catch (error) {
    toast.error("Error deleting quest", {
      description: "An error occurred while deleting the quest.",
    });
  }
};
