import api from "@/lib/api";
import { questStatusSchema } from "@/schemas/QuestSchema";
import { QuestStatusFormData } from "@/types/QuestTypes";
import axios from "axios";
import { toast } from "sonner";

export const UpdateQuestStatusAction = async (
  id: string,
  previousState: QuestStatusFormData,
  formData: FormData
): Promise<QuestStatusFormData> => {
  //  Validate the form data

  const result = questStatusSchema.safeParse({
    status: formData.get("status"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await api.put(`/quest/update-status/${id}`, {
      status: result.data.status,
    });

    toast.success("Quest status updated successfully", {
      description: "Your quest status has been updated.",
    });
  } catch (error) {
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

  return {
    errors: {},
  };
};
