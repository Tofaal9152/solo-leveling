import { z } from "zod";

export const validateAndParse = <T>(
  schema: z.ZodSchema<T>,
  formData: FormData
) => {
  const result = schema.safeParse(Object.fromEntries(formData.entries()));

  if (!result.success) {
    return {
      valid: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  return {
    valid: true,
    data: result.data,
    errors: {},
  };
};
