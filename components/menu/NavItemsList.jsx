import React from "react";
import Link from "next/link";
import { navLinks } from "@/utils/navLinks";

const NavItemsList = ({ items, mobileMenu }) => {
  return (
    <>
      {navLinks.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={`py-5 px-6 px-md-3 text-dark font-semibold hover:text-gray-900 ${
            mobileMenu ? "block" : ""
          }`}
        >
          {item.text}
        </Link>
      ))}
      {mobileMenu && (
        <Link
          href="/explore"
          className="py-5 px-6 px-md-3 text-dark font-semibold hover:text-gray-900 block"
        >
          Book Now
        </Link>
      )}
    </>
  );
};

export default NavItemsList;
