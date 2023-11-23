import { ILandingMenuLink, IMenuLink } from "@/types";
import {
  Activity,
  BookIcon,
  FileQuestion,
  HomeIcon,
  LayoutDashboardIcon,
  Map,
} from "lucide-react";

export const landingMenuLinks: ILandingMenuLink[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
    Icon: HomeIcon,
  },
  {
    id: 2,
    title: "Components",
    href: "/",
    Icon: Activity,
  },
  {
    id: 3,
    title: "Pages",
    href: "/",
    Icon: LayoutDashboardIcon,
    subMenu: [
      {
        href: "/",
        title: "About Us",
      },
      {
        href: "/",
        title: "Contact Us",
      },
      {
        href: "/",
        title: "FAQS",
      },
      {
        href: "/",
        title: "Pricing",
      },
      {
        href: "/",
        title: "Payment",
      },
    ],
  },
  {
    id: 4,
    title: "Docs",
    href: "/",
    Icon: BookIcon,
  },
];

export const menuLinks: IMenuLink[] = [
  {
    group: "",
    children: [
      {
        title: "Dashboard",
        href: "/dashboard/overview",
        Icon: LayoutDashboardIcon,
      },
      {
        title: "Map",
        href: "/dashboard/map",
        Icon: Map,
      },
      {
        title: "Resources",
        href: "/dashboard/resources",
        Icon: BookIcon,
      },
      {
        title: "Support & FAQ",
        href: "/dashboard/support",
        Icon: FileQuestion,
      },
    ],
  },
];
