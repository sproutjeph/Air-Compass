"use client";

import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Divider,
  Card,
} from "@nextui-org/react";
import { MoonIcon, RefreshCwIcon, SettingsIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const SettingsSidebar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Button
        radius="full"
        isIconOnly
        aria-label="more than 9 notifications"
        variant="light"
        onClick={onOpen}
      >
        <SettingsIcon size={40} />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="h-full absolute -right-5 w-80"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center  gap-36">
                <span>Settings</span>
                <Button
                  radius="full"
                  isIconOnly
                  aria-label="more than 9 notifications"
                  variant="light"
                >
                  <RefreshCwIcon />
                </Button>
              </ModalHeader>
              <Divider orientation="horizontal" />
              <ModalBody>
                <div className="">
                  <h4 className="mb-1">Mood</h4>
                  <div className="flex w-full gap-2">
                    <Button
                      className="flex-1 h-20 w-14 items-center justify-center cursor-pointer"
                      onPress={() => setTheme("light")}
                      variant={theme === "dark" ? "bordered" : "solid"}
                      color="success"
                    >
                      <SunIcon />
                    </Button>
                    <Button
                      className="flex-1 h-20 items-center justify-center cursor-pointer"
                      onPress={() => setTheme("dark")}
                      variant={theme === "light" ? "bordered" : "solid"}
                      color="success"
                    >
                      <MoonIcon />
                    </Button>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Close
                </Button>
                <Button color="primary" onClick={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SettingsSidebar;
