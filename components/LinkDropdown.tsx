"use client";

import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { IMenuLink } from "@/types";

interface ILinkDropdown {
  data: IMenuLink;
  onClose?: () => void;
}

const LinkDropdown: FC<ILinkDropdown> = ({ data, onClose }) => {
  const pathName = usePathname();

  const [openItems, setOpenItems] = useState(
    Array(data.children.length).fill(false)
  );

  const toggleOpen = (index: number) => {
    setOpenItems((prevOpenItems) => {
      const newOpenItems = [...prevOpenItems];
      newOpenItems[index] = !newOpenItems[index];
      return newOpenItems;
    });
  };

  return (
    <div className="cursor-pointer flex flex-col gap-y-4">
      <div className="text-gray-500 dark:text-gray-300  hover:text-black hover:bg-primary p-1 rounded-md">
        {data.group}
      </div>

      {data.children.map((child, index) => {
        const isActive =
          child.href.split("/")?.[2] === pathName.split("/")?.[2];

        return (
          <div key={child.title} className=" rounded-md">
            <div
              className={cn(
                "flex justify-between p-2 rounded-md items-center group hover:bg-primary mb-6",
                isActive && "bg-success"
              )}
              onClick={() => {
                child.subMenu && toggleOpen(index);
              }}
            >
              <Link
                href={child.href}
                className={cn(
                  "flex gap-2  group-hover:text-white",
                  isActive ? "text-white" : "dark:text-gray-400 text-gray-600"
                )}
                onClick={onClose}
              >
                <child.Icon />
                <span className={`  text-sm`}>{child.title}</span>
              </Link>
              {child.subMenu && (
                <div className="group-hover:text-white">
                  {openItems[index] ? (
                    <ChevronUpIcon size={18} />
                  ) : (
                    <ChevronDownIcon size={18} />
                  )}
                </div>
              )}
            </div>
            {openItems[index] && (
              <div className=" p-1 mt-2 rounded-md flex-col gap-y-4 flex mx-1 ">
                {child.subMenu?.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="hover:bg-primary py-1 px-3 rounded-md text-sm hover:text-white flex items-center gap-2"
                    onClick={onClose}
                  >
                    <div
                      className={`h-2 w-2 ${
                        pathName === link.href ? "bg-success" : "bg-gray-300"
                      }  rounded-full`}
                    />
                    {link.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LinkDropdown;
