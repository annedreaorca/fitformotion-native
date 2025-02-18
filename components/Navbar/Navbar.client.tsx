"use client";

import { Navbar, NavbarContent, NavbarItem } from "@heroui/react";
import {
  IconBarbell,
  IconBodyScan,
  IconHistory,
  IconLayoutDashboard,
  IconListSearch,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarUser from "./NavbarUser";

const NAV_CONTENT_ITEMS = [
  { icon: <IconLayoutDashboard />, href: "/dashboard", label: "Dashboard" },
  { icon: <IconListSearch />, href: "/exercises", label: "Exercises" },
  { icon: <IconBarbell />, href: "/workout", label: "Start Workout" },
  { icon: <IconHistory />, href: "/activity", label: "Activity Log" },
  { icon: <IconBodyScan />, href: "/gallery", label: "Gallery" },
];

export default function MobileNavbarClient({
  username,
  userImage,
}: {
  username: string | undefined;
  userImage: string | undefined;
}) {
  const pathname = usePathname();

  return (
    <Navbar className="bg-white dark:bg-zinc-900 block md:hidden shadow-md">
      {/* Left Section - Logo */}
      <NavbarContent className="justify-start">
        <NavbarItem>
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight"
            aria-label="Home Page"
          >
            <Image
              src="/images/logo/Fitformotion Brandmark Logo White Ver.svg"
              alt="Fitformotion Logo"
              className="w-8 h-8"
              width={30}
              height={30}
            />
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Center Section - Navigation */}
      <NavbarContent className="gap-5 justify-center">
        {NAV_CONTENT_ITEMS.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              href={item.href}
              aria-label={item.label}
              className={`p-2 rounded-md transition ${
                pathname === item.href ? "bg-gray-200 dark:bg-gray-700" : ""
              }`}
            >
              {item.icon}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right Section - User Profile */}
      <NavbarContent className="justify-end">
        <NavbarItem>
          <Link href="/profile">
            <NavbarUser username={username} userImage={userImage} />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
