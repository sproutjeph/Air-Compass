"use client";

import React from "react";
import {
  Navbar,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Badge,
  Button,
} from "@nextui-org/react";
import { NotificationIcon } from "@/components/icons/Icons";
import SettingsSidebar from "./SettingsSidebar";
import MobileSidebar from "./MobileSidebar";
import NavbarSearch from "./NavbarSearch";

export default function AppNavbar() {
  return (
    <Navbar maxWidth="full" className="w-full">
      <NavbarContent as="div" justify="start" className="xl:hidden">
        <MobileSidebar />
        <NavbarSearch />
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        <SettingsSidebar />
        <Badge content="9+" shape="circle" color="danger">
          <Button
            radius="full"
            isIconOnly
            aria-label="more than 9 notifications"
            variant="light"
          >
            <NotificationIcon size={24} />
          </Button>
        </Badge>

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
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
