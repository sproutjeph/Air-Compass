"use client";

import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { landingMenuLinks, menuLinks } from "@/constants/data";
import Link from "next/link";
import { FC } from "react";
import { MenuIcon } from "lucide-react";
import LandingLinkDropdown from "./LandingLinkDropdown";
import { AcmeLogo } from "./AcmeLogo";
import LinkDropdown from "./LinkDropdown";

interface MobileSidebarProps {
  isLanding?: boolean;
}

const MobileSidebar: FC<MobileSidebarProps> = ({ isLanding }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <Button
        radius="full"
        isIconOnly
        aria-label="more than 9 notifications"
        variant="light"
        onClick={onOpen}
      >
        <MenuIcon />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="h-full absolute -left-5 w-60 overflow-y-scroll rounded-sm"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center gap-1">
                <AcmeLogo />
                <p className="font-bold text-inherit">J-sprout</p>
              </ModalHeader>
              <ModalBody className="">
                {isLanding ? (
                  <ul className="flex flex-col gap-y-8">
                    {landingMenuLinks.map((link) => {
                      if (link.subMenu) {
                        return (
                          <LandingLinkDropdown data={link} key={link.id} />
                        );
                      } else {
                        return (
                          <Link
                            key={link.id}
                            href={link.href}
                            className="hover:bg-primary p-2 rounded-md hover:text-white"
                          >
                            <div className="flex items-center gap-2">
                              <link.Icon />
                              <span>{link.title}</span>
                            </div>
                          </Link>
                        );
                      }
                    })}
                  </ul>
                ) : (
                  <div className="flex flex-col gap-y-3">
                    {menuLinks.map((link, i) => (
                      <LinkDropdown data={link} key={i} onClose={onClose} />
                    ))}
                  </div>
                )}
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default MobileSidebar;
