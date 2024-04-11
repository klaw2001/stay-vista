import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo-login.png";
// import logo from "@/assets/images/login-side.jpg";
import { CiGlobe } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Form from "@/components/auth/Form";

const RegisterPage = () => {
  const path = "register";
  return (
    <div className="login-wrapper bg py-4" style={{ height: "100vh" }}>
      <div className="container">
        <div className="login-wrap flex justify-center md:flex-row flex-col">
          <div className="login-nav-box md:w-1/2 md:p-10">
            <nav className="flex justify-between items-center w-full">
              <Image src={logo} alt="" width={105} height={50} />
              <div className="lang">
                <div className="box flex items-center gap-1">
                  <CiGlobe className="text-xl" />
                  <h6 className="">EN</h6>
                  <svg
                    className="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </nav>
            <div className="buttons-box my-6 flex items-center gap-2 w-full">
              <button className="w-full">
                <Link
                  href="/login"
                  className="global-btn text-dark-grey  rounded font-bold text-2xl w-full block "
                >
                  Sign In
                </Link>
              </button>
              <button className="w-full">
                <Link
                  href="/register"
                  className="global-btn text-white bg-dark-blue rounded font-bold text-2xl w-full block"
                >
                  Sign Up
                </Link>
              </button>
            </div>
            <div className="login-text my-4 text-dark">
              <h3 className="text-dark">Join Now !</h3>
              <p className="p2">
                Sign up now to explore a world of curated information tailored
                to your interests!
              </p>
            </div>
            <div className="form-box my-6 ">
              {/* <form action="">
                <div className="input-box ">
                  <label
                    htmlFor="email"
                    className="text-lg text-dark font-bold"
                  >
                    Email or username
                  </label>
                  <br />
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter your email or username"
                    className="w-full p-3 border-2 rounded font-bold mt-2"
                  />
                </div>
                <div className="input-box mt-4">
                  <label
                    htmlFor="email"
                    className="text-lg text-dark font-bold"
                  >
                    Password
                  </label>
                  <br />
                  <input
                    type="password"
                    id="email"
                    placeholder="Enter your password"
                    className="w-full p-3 border-2 rounded font-bold mt-2"
                  />
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="box1 flex items-center gap-1">
                    <input type="checkbox" name="" id="me" />
                    <label htmlFor="me">Remember Me</label>
                  </div>
                  <div className="box2">
                    <Link href="/forgot-password" className="text-brown">
                      <h6>Forgot Password ?</h6>
                    </Link>
                  </div>
                </div>
                <button className="global-btn text-white bg-dark-blue rounded w-full mt-4 text-xl font-bold">
                  Register
                </button>
                <div className="sb-2 py-4 text-center">or continue with</div>
                <div className="auth-btn flex gap-2 items-center">
                  <button className="global-btn text-lg font-bold text-dark text-center flex items-center justify-center rounded gap-2 shadow-xl bg-white w-full">
                    <FaGoogle /> Google
                  </button>
                  <button className="global-btn text-lg font-bold text-dark text-center flex items-center justify-center rounded gap-2 shadow-xl bg-white w-full">
                    <FaFacebook />
                    Facebook
                  </button>
                </div>
              </form> */}
              <Form path={path} />
            </div>
          </div>
          <div className="aligned-box md:w-1/2">
            {/* <h1>Hello</h1> */}
            <div className="text-box px-8 pb-4 pt-16 h-full flex flex-col justify-end text-white">
              <h1 className="text-white leading-tight">
                Your Comfort, Your Way - SignUp Now!
              </h1>
              <div className="align-box items-center gap-3 flex my-3">
                <div className="aside-p px-6"></div>
                <p className="p2 mt-2 relative">
                  Access your account to view upcoming stays, modify bookings,
                  and enjoy a hassle-free experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
