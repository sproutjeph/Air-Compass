import { FC } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <section className="min-h-full relative bg-white dark:bg-black">
      <div className="hidden xl:flex h-full xl:w-64 xl:flex-col xl:fixed xl:inset-y-0 z-80">
        {/* <MenuSidebar /> */}
      </div>
      <main className="xl:pl-64 pb-10">
        {/* <AppNavbar /> */}
        {children}
      </main>
    </section>
  );
};

export default DashboardLayout;
