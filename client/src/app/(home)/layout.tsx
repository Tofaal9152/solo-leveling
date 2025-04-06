import { AppSidebar } from "@/components/Sidebar/app-sidebar";
import { Header } from "@/components/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { IsAuthenticatedInDashboard } from "@/hooks/isAuthenticated";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <IsAuthenticatedInDashboard>
      <SidebarProvider>
        <AppSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-auto relative">
            <div className={cn("container mx-auto py-6 relative z-10")}>
              {children}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </IsAuthenticatedInDashboard>
  );
}
