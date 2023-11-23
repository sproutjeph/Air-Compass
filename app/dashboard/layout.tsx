import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import MenuSidebar from "@/components/MenuSidebar";
import AppNavbar from "@/components/Navbar";
import { Database } from "@/types/supabase";
import { cookies } from "next/headers";
import { FC } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = async ({ children }) => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();
  return (
    <section className="min-h-full relative bg-white dark:bg-black">
      <div className="hidden xl:flex h-full xl:w-64 xl:flex-col xl:fixed xl:inset-y-0 z-80">
        <MenuSidebar />
      </div>
      <main className="xl:pl-64 pb-10">
        <AppNavbar session={session} />
        {children}
      </main>
    </section>
  );
};

export default DashboardLayout;
