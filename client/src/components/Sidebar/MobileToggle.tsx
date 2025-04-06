"use client";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { useSidebar } from "../ui/sidebar";

const MobileToggle = () => {
  const { setOpenMobile, openMobile } = useSidebar();
  return (
    <Button
      variant="ghost"
      size="icon"
      className=" md:hidden bg-black/80 border border-purple-900/30 text-purple-400 hover:text-purple-300"
      onClick={() => {
        setOpenMobile(!openMobile);
      }}
    >
      {openMobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </Button>
  );
};

export default MobileToggle;
