// import {
//   Activity,
//   BarChartIcon,
//   BookIcon,
//   BrifeCaseIcon,
//   CalendarIcon,
//   CartIcon,
//   ChatIcon,
//   DashboardIcon,
//   HomeIcon,
//   MailIcon,
// } from "@/components/icons/Icons";
import { ILandingMenuLink, IMenuLink, ITech } from "@/types";
import {
  Activity,
  BarChartIcon,
  BookDashed,
  BookIcon,
  Briefcase,
  CalendarIcon,
  CarTaxiFrontIcon,
  ChefHatIcon,
  HomeIcon,
  LayoutDashboardIcon,
  MailIcon,
  User,
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

export const techUsed: ITech[] = [
  {
    id: 1,
    title: "Typescript",
    src: "/assets/image/typescript.png",
    alt: "Typescript Logo",
  },
  {
    id: 2,
    title: "React",
    src: "/assets/image/react.png",
    alt: "React Logo",
  },
  {
    id: 3,
    title: "Nextjs",
    src: "/assets/image/nextjs.jpeg",
    alt: "Next JS Logo",
    addjust: true,
  },
  {
    id: 4,
    title: "Tailwindcss",
    src: "/assets/image/tailwindcss.png",
    alt: "Tailwindcss Logo",
  },
  {
    id: 5,
    title: "Zustand",
    src: "/assets/image/zustand.png",
    alt: "Zustand Logo",
  },
  {
    id: 6,
    title: "Supabase",
    src: "/assets/image/supabase.png",
    alt: "Supabase Logo",
  },
  {
    id: 7,
    title: "Vercel",
    src: "/assets/image/vercel.png",
    alt: "Vercel Logo",
    addjust: true,
  },
];

export const standardSubData = [
  "One end products",
  "12 months updates",
  "6 months of support",
  "TypeScript version",
  "Commercial applications",
];
export const standardPlusSubData = [
  "One end products",
  "12 months updates",
  "6 months of support",
  "TypeScript version",
  "Commercial applications",
  "Design Resources",
];
export const extendedSubData = [
  "One end products",
  "12 months updates",
  "6 months of support",
  "TypeScript version",
  "Commercial applications",
  "Design Resources",
];

export const menuLinks: IMenuLink[] = [
  {
    group: "Overview",
    children: [
      {
        title: "Dashboard",
        href: "/dashboard/overview",
        Icon: LayoutDashboardIcon,
      },
      {
        title: "E-Commerce",
        href: "/dashboard/e-commerce",
        Icon: CarTaxiFrontIcon,
      },
      {
        title: "Analytics",
        href: "/dashboard/analytics",
        Icon: BarChartIcon,
      },
      {
        title: "Banking",
        href: "/dashboard/banking",
        Icon: BookIcon,
      },
      {
        title: "Crypto",
        href: "/dashboard/crypto",
        Icon: BookIcon,
      },
      {
        title: "AI Chat",
        href: "/dashboard/ai-chat",
        Icon: ChefHatIcon,
      },
      {
        title: "Landing pages",
        href: "/dashboard/landing-pages/one",
        Icon: BookDashed,
        subMenu: [
          {
            href: "/dashboard/landing-pages/one",
            title: "Page One",
          },
          {
            href: "/dashboard/landing-pages/two",
            title: "Page Two",
          },
        ],
      },
      {
        title: "Auth pages",
        href: "/dashboard/auth-page/one",
        Icon: BookDashed,
        subMenu: [
          {
            href: "/dashboard/auth-page/one",
            title: "Page One",
          },
          {
            href: "/dashboard/auth-page/two",
            title: "Page Two",
          },
        ],
      },
    ],
  },
  {
    group: "Management",
    children: [
      {
        title: "User",
        href: "/dashboard/user/profile",
        Icon: User,
        subMenu: [
          {
            href: "/dashboard/user/profile",
            title: "Profile",
          },
          {
            href: "/dashboard/user/cards",
            title: "Cards",
          },
          {
            href: "/dashboard/user/list",
            title: "List",
          },
          {
            href: "/dashboard/user/create",
            title: "Create",
          },
          {
            href: "/dashboard/user/edit",
            title: "Edit",
          },
          {
            href: "/dashboard/user/account",
            title: "Account",
          },
        ],
      },
      {
        title: "Product",
        href: "/dashboard/product/list",
        Icon: LayoutDashboardIcon,
        subMenu: [
          {
            href: "/dashboard/product/list",
            title: "list",
          },
          {
            href: "/dashboard/product/details",
            title: "details",
          },
          {
            href: "/dashboard/product/create",
            title: "create",
          },
          {
            href: "/dashboard/product/edit",
            title: "edit",
          },
        ],
      },
      {
        title: "Order",
        href: "/dashboard/order/list",
        Icon: LayoutDashboardIcon,
        subMenu: [
          {
            href: "/dashboard/order/list",
            title: "list",
          },
          {
            href: "/dashboard/order/details",
            title: "details",
          },
        ],
      },
      {
        title: "Invoice",
        href: "/dashboard/invoice/list",
        Icon: Activity,
        subMenu: [
          {
            href: "/dashboard/invoice/list",
            title: "list",
          },
          {
            href: "/dashboard/invoice/details",
            title: "details",
          },
          {
            href: "/dashboard/invoice/create",
            title: "create",
          },
          {
            href: "/dashboard/invoice/edit",
            title: "edit",
          },
        ],
      },
      {
        title: "Blog",
        href: "/dashboard/blog/list",
        Icon: LayoutDashboardIcon,
        subMenu: [
          {
            href: "/dashboard/blog/list",
            title: "list",
          },
          {
            href: "/dashboard/blog/details",
            title: "details",
          },
          {
            href: "/dashboard/blog/create",
            title: "create",
          },
          {
            href: "/dashboard/blog/edit",
            title: "edit",
          },
        ],
      },
      {
        title: "Job",
        href: "/dashboard/job/list",
        Icon: Briefcase,
        subMenu: [
          {
            href: "/dashboard/job/list",
            title: "list",
          },
          {
            href: "/dashboard/job/details",
            title: "details",
          },
          {
            href: "/dashboard/job/create",
            title: "create",
          },
          {
            href: "/dashboard/job/edit",
            title: "edit",
          },
        ],
      },
      {
        title: "Tour",
        href: "/dashboard/tour/list",
        Icon: LayoutDashboardIcon,
        subMenu: [
          {
            href: "/dashboard/tour/list",
            title: "list",
          },
          {
            href: "/dashboard/tour/details",
            title: "details",
          },
          {
            href: "/dashboard/tour/create",
            title: "create",
          },
          {
            href: "/dashboard/tour/edit",
            title: "edit",
          },
        ],
      },
      {
        title: "Mail",
        href: "/dashboard/mail",
        Icon: MailIcon,
      },
      {
        title: "Chat",
        href: "/dashboard/chat",
        Icon: ChefHatIcon,
      },
      {
        title: "Calendar",
        href: "/dashboard/calendar",
        Icon: CalendarIcon,
      },
      {
        title: "Kanban",
        href: "/dashboard/kanban",
        Icon: LayoutDashboardIcon,
      },
    ],
  },
];

export const followersData = [
  {
    name: "John Doe",
    location: "New Jessy USA",
    imageUrl: "/assets/avatars/avatar_11.jpg",
    job: "Web Developer",
  },
  {
    name: "Alice Smith",
    location: "Los Angeles, USA",
    imageUrl: "/assets/avatars/avatar_9.jpg",
    job: "Web Designer",
  },
  {
    name: "David Johnson",
    location: "Chicago, USA",
    imageUrl: "/assets/avatars/avatar_8.jpg",
    job: "UI/UX Designer",
  },
  {
    name: "Emily Brown",
    location: "San Francisco, USA",
    imageUrl: "/assets/avatars/avatar_7.jpg",
    job: "Web Developer",
  },
  {
    name: "Michael Davis",
    location: "Houston, USA",
    imageUrl: "/assets/avatars/avatar_6.jpg",
    job: "Data Analyst",
  },
  {
    name: "Sophia Wilson",
    location: "Miami, USA",
    imageUrl: "/assets/avatars/avatar_5.jpg",
    job: "HR Manager",
  },
  {
    name: "Ethan Martinez",
    location: "Seattle, USA",
    imageUrl: "/assets/avatars/avatar_4.jpg",
    job: "Legal Counsel",
  },
  {
    name: "Olivia Lopez",
    location: "Boston, USA",
    imageUrl: "/assets/avatars/avatar_3.jpg",
    job: "Project Manager",
  },
  {
    name: "Daniel Garcia",
    location: "Denver, USA",
    imageUrl: "/assets/avatars/avatar_2.jpg",
    job: "Registered Nurse",
  },
  {
    name: "Mia Rodriguez",
    location: "Atlanta, USA",
    imageUrl: "/assets/avatars/avatar_1.jpg",
    job: "Financial Planner",
  },
];

export const invoiceTableHeaders = [
  "Invoice ID",
  "Price",
  "Category",
  "Status",
  "Actions",
];
export const invoiceTableData = [
  {
    invoiceId: "INV001",
    price: "$100",
    category: "Electronics",
    status: "Paid",
  },
  {
    invoiceId: "INV002",
    price: "$75",
    category: "Clothing",
    status: "Pending",
  },
  {
    invoiceId: "INV003",
    price: "$50",
    category: "Books",
    status: "Paid",
  },
  {
    invoiceId: "INV004",
    price: "$120",
    category: "Home Appliances",
    status: "Pending",
  },
  {
    invoiceId: "INV005",
    price: "$200",
    category: "Furniture",
    status: "Paid",
  },
  {
    invoiceId: "INV006",
    price: "$90",
    category: "Sports Equipment",
    status: "Pending",
  },
];
