import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import Image from "next/image";
import heroImg from "@/assets/images/hero.png";
import LocationFilter from "@/components/filters/location";
import DateHero from "@/components/filters/date";
import GuestBox from "@/components/filters/guestbox";
const HeroSection = () => {
  return (
    <div className="hero-wrapper">
      <div className="container">
        <div className="hero-wrap flex">
          <div className="hero-text md:w-1/2 px-4 py-24">
            <h4 className="text-blue-grey font-bold">
              Stay in Style, Your Way.
            </h4>
            <h1 className="text-dark font-bold">Discover Your Perfect Stay</h1>
            <div className="align-box items-center gap-3 flex my-3">
              <div
                className="aside-p px-6"
                style={{ borderColor: "#5e7b8c" }}
              ></div>
              <p className="p2 mt-2 relative">
                Access your account to view upcoming stays, modify bookings, and
                enjoy a hassle-free experience.
              </p>
            </div>
            <div className="watch-our-story py-2 px-3 rounded-full">
              <div className="align-box items-center gap-5 flex my-3 justify-center">
                <div className="aside-p px-6"></div>
                <button>
                  <FaCirclePlay style={{ color: "#fff", fontSize: "60px" }} />
                </button>
                <h4 className="relative text-white">Watch Our Story</h4>
              </div>
            </div>
            <div className="filters">
              <div className="filter-box pt-3">
                <h5>Location</h5>
                <LocationFilter />
              </div>
              <div className="filter-box py-3">
                <h5>Check In - Check Out</h5>
                <DateHero />
              </div>
              <div className="filter-box pb-3">
                <LocationFilter />
              </div>
            </div>
            <button className="global-btn text-white bg-dark-blue rounded font-bold text-lg w-full flex justify-center items-center gap-3">
              Discover Now{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="hero-img hero-aside md:w-1/2 ">
            {/* <Image src={heroImg} alt="" height={'750px'} className="hero-img" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
