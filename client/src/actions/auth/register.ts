import api from "@/lib/api";
import { RegisterSchema } from "@/schemas/authSchema";
import { RegisterType } from "@/types/authTypes";
import axios from "axios";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export const RegisterAction = async (
  previousState: RegisterType,
  formData: FormData
): Promise<RegisterType> => {
  //  Validate the form data
  const result = RegisterSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await api.post(`/auth/register/`, {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    });

    toast.success("Registration successful! Please login to continue.");
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

  redirect("/auth/login");
};
