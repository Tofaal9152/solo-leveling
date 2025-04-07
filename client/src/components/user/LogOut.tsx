"use client";
import { LogOutAction } from "@/actions/auth/logout";
import { Loader, LogOut } from "lucide-react";
import { useActionState } from "react";

const SignOut = () => {
  const [, action, isPending] = useActionState(LogOutAction, {
    errors: {},
  });

  return (
    <form
      action={action}
      className="text-red-400 p-2 rounded-md hover:bg-accent font-semibold text-xs  flex items-center gap-2 cursor-pointer"
    >
      <button
        type="submit"
        disabled={isPending}
        className="text-red-400 w-full flex items-center gap-2 cursor-pointer"
      >
        {isPending && <Loader className="w-4 h-4 animate-spin" />}
        <LogOut className="w-4 h-4 " />
      </button>
    </form>
  );
};

export default SignOut;
