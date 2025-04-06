import api from "@/lib/api";
import { questSchema } from "@/schemas/QuestSchema";
import { QuestFormData } from "@/types/QuestTypes";
import axios from "axios";
import { toast } from "sonner";

export const CeateQuestAction = async (
  previousState: QuestFormData,
  formData: FormData
): Promise<QuestFormData> => {
  //  Validate the form data

  const result = questSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    xp: Number(formData.get("xp")),
    healthPoints: Number(formData.get("healthPoints")),
    statPoints: Number(formData.get("statPoints")),
    frequency: formData.get("frequency"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
  console.log(result.data);
  try {
    const res = await api.post(`/quest/create`, {
      title: result.data.title,
      description: result.data.description,
      xp: result.data.xp,
      healthPoints: result.data.healthPoints,
      statPoints: result.data.statPoints,
      frequency: result.data.frequency,
    });

    console.log(res.data);
    toast.success("Quest created successfully", {
      description: "You can now view your quest in the quest board.",
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
