"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Navbar,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import MobileSidebar from "./MobileSidebar";
import NavbarSearch from "./NavbarSearch";
import { ThemeSwitcher } from "./ThemeSwitcher";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";

export default function AppNavbar({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient<Database>();

  const [fullname, setFullname] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<string | null>(null);
  const [website, setWebsite] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);
  const user = session?.user;

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from("profiles")
        .select(`full_name, username, website, avatar_url`)
        .eq("id", String(user?.id))
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setFullname(data.full_name);
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  console.log(fullname);
  console.log(username);
  console.log(avatar_url);

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
