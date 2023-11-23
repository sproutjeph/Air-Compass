"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { ILandingMenuLink } from "@/types";

interface ILandingLinkDropdown {
  data: ILandingMenuLink;
}

const LandingLinkDropdown: FC<ILandingLinkDropdown> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prevOpen) => !prevOpen);

  return (
    <div className="cursor-pointer">
      <div
        className="flex justify-between p-1 rounded-md hover:bg-primary hover:text-white items-center"
        onClick={toggleOpen}
      >
        <div className="flex gap-2">
          <data.Icon />
          <span className="">{data.title}</span>
        </div>
        <div className="">
          {open ? <ChevronUpIcon size={18} /> : <ChevronDownIcon size={18} />}
        </div>
      </div>
      {open && (
        <div className=" p-1 mt-2 rounded-md flex-col gap-y-4 flex mx-1">
          {data.subMenu?.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:bg-primary py-1 px-3 rounded-md"
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LandingLinkDropdown;
