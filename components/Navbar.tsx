"use client";

import {
  Navbar,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import MobileSidebar from "./MobileSidebar";
import NavbarSearch from "./NavbarSearch";
import React from "react";

export default function AppNavbar() {
  return (
    <Navbar maxWidth="full" className="w-full">
      <NavbarContent as="div" justify="start" className="xl:hidden">
        <MobileSidebar />
        <h1>
          Welcome Back <span className="text-success">John</span>{" "}
        </h1>
        <NavbarSearch />
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        <ThemeSwitcher />

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform ml-4"
              color="primary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>

            <DropdownItem key="logout" color="danger">
              <form action="/auth/signout" method="post">
                <button className="button block" type="submit">
                  Sign out
                </button>
              </form>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
