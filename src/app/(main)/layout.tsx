import { Sidebar } from "@/components/sidebar";
import { dashboardConfig } from "../config/dashboard";
import { getServerAuthSession } from "@/server/auth";
import { UserAccountNav } from "@/components/user-account-nav";
import { User } from "@prisma/client";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function MainLayout({ children }: DashboardLayoutProps) {
  const user = await getServerAuthSession();

  return (
    <div className="flex flex-col gap-10">
      <header className="border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          INSQUBE
          <UserAccountNav user={user?.user as User} />
        </div>
      </header>
      <div className="container grid flex-1 grid-cols-[20px_1fr] gap-12 pb-10 md:grid-cols-[200px_1fr]">
        <aside className="w-[20px] flex-col md:flex md:w-[200px]">
          <Sidebar items={dashboardConfig.sidebarNav} />
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
