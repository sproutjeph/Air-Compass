"use client";

import { FC } from "react";
import { AcmeLogo } from "./AcmeLogo";
import LinkDropdown from "./LinkDropdown";
import { menuLinks } from "@/constants/data";

interface MenuSidebarProps {}

const MenuSidebar: FC<MenuSidebarProps> = ({}) => {
  return (
    <aside className=" flex flex-col w-64  border-gray-600 border-r-1 border-dotted px- h-full overflow-y-scroll">
      <div className="flex items-center justify-center mt-4 ">
        <AcmeLogo />
        <p className="font-bold text-inherit">J-Sprout</p>
      </div>
      <div className="flex flex-col gap-2 justify-center mx-6 mt-8">
        {menuLinks.map((link, i) => (
          <LinkDropdown data={link} key={i} />
        ))}
      </div>
      <div className="my-8"></div>
    </aside>
  );
};

export default MenuSidebar;
