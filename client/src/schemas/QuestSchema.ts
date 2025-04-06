import { z } from "zod";
export const questSchema = z.object({
  title: z.string().min(1, "Please enter a valid title"),
  description: z.string().min(1, "Please enter a valid description"),
  xp: z.number().min(1, "Please enter a valid xp"),
  statPoints: z.number().min(1, "Please enter a valid stat type"),
  healthPoints: z.number().min(1, "Please enter a valid stat type"),
  frequency: z.enum(["DAILY", "WEEKLY", "MONTHLY"], {
    errorMap: () => ({ message: "Please select a valid frequency" }),
  }),
});
export const questStatusSchema = z.object({
  status: z.enum(["COMPLETED", "PENDING"], {
    errorMap: () => ({ message: "Please select a valid status" }),
  }),
});
