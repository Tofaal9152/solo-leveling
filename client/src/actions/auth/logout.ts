import { redirect } from "next/navigation";
import api from "@/lib/api";
import { toast } from "sonner";

export const LogOutAction = async () => {
  try {
    const res = await api.post("/auth/logout/");
    console.log(res);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    toast.success("You have been logged out");
  } catch {
    toast.error("An error occurred");
  }
  redirect("/auth/login");
};
