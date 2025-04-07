import api from "@/lib/api";
import { LoginSchema } from "@/schemas/authSchema";
import { LoginType } from "@/types/authTypes";
import axios from "axios";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export const LoginAction = async (
  previousState: LoginType,
  formData: FormData
): Promise<LoginType> => {
  //  Validate the form data
  const result = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    const res = await api.post(`/auth/login/`, {
      email: formData.get("email"),
      password: formData.get("password"),
    });

    localStorage.setItem("access_token", res.data.tokens.access_token);
    localStorage.setItem("refresh_token", res.data.tokens.refresh_token);
    toast.success("Login successful! Redirecting to dashboard...");
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

  redirect("/");
};
