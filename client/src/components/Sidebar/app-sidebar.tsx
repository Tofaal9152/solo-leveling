import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";
import { menuItems } from "@/constants/constants";
import { cn } from "@/lib/utils";
import MobileToggle from "./MobileToggle";
import SidebarFooterProfile from "./SidebarFooter";
import Link from "next/link";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <div className="bg-black/80">
      <Sidebar collapsible="offcanvas" {...props}>
        {/* Header */}
        <SidebarHeader className="bg-black/80">
          <div className="h-14 flex items-center justify-between border-b border-purple-900/30">
            <h2 className="text-xl uppercase font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              solo leveling
            </h2>

            <MobileToggle />
          </div>
        </SidebarHeader>

        {/* Solo Leveling Content */}
        <SidebarContent className="bg-black/80">
          <div className="mt-6">
            <div className="text-xs text-purple-400 mb-2 px-2">Hunter Menu</div>
            <ul className="space-y-1 px-2">
              {menuItems.map((item, index) => (
                <Link href={item.link} key={index}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-sm font-medium h-10",
                      item.active
                        ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-purple-500/30 text-white"
                        : "text-purple-300 hover:text-white hover:bg-purple-900/20"
                    )}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              ))}
            </ul>
          </div>
        </SidebarContent>

        {/* Footer */}
        <SidebarFooter className="bg-black/80">
          <SidebarFooterProfile />
        </SidebarFooter>

        <SidebarRail />
      </Sidebar>

      {/* Mobile Toggle Button */}
      <div className="fixed bottom-4 left-4 z-40 md:hidden">
        <MobileToggle />
      </div>
    </div>
  );
}
