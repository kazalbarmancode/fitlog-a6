"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={`transition-colors font-medium ${
          isActive
            ? "text-[#C2F800] font-bold"
            : "text-gray-300 "
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
