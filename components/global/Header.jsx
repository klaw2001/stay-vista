"use client"
import { Fragment, useState } from "react";
import logo from "@/assets/images/logo-login.png";
import Image from "next/image";
import Link from "next/link";
import LanguageBox from "../LanguageBox";
import { FaArrowRightLong } from "react-icons/fa6";
import NavItemsList from "../menu/NavItemsList";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* // <!-- navbar goes here --> */}
      <header class="fixed top-0 left-0 right-0 ">
        <div class="container">
          <div class="flex justify-between">
            <div class="flex space-x-4">
              {/* <!-- logo --> */}
              <div>
                <Link
                  href="#"
                  class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <Image src={logo} />
                </Link>
              </div>

              {/* <!-- primary nav --> */}
              <div class="hidden md:flex items-center space-x-1">
               <NavItemsList/>
              </div>
            </div>

            {/* <!-- secondary nav --> */}
            <div class="hidden md:flex items-center space-x-1 gap-2">
              <LanguageBox />
              <button className="w-full">
                <Link
                  href="/explore"
                  className="global-btn text-white bg-dark-blue rounded font-bold text-lg w-full block"
                >
                  Book Now <FaArrowRightLong className="inline"/>

                </Link>
              </button>
            </div>

            {/* <!-- mobile button goes here --> */}
            <div class="md:hidden flex items-center"  onClick={toggleMobileMenu}>
              <button class="mobile-menu-button">
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

       <div className={`mobile-menu ${isMobileMenuOpen ? '' : 'hidden'} md:hidden`}>
        <NavItemsList mobileMenu={isMobileMenuOpen}/>
        </div>
      </header>

      {/* // <!-- content goes here --> */}
    </>
  );
}
