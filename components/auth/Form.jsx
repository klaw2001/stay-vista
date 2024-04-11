"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useParams } from "next/navigation";
import axios from "axios";

const Form = ({ path }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault()
    const res = await axios.post("/api/register", { name, email, password });
  };
  return (
    <form action="">
      {path == "register" && (
        <div className="input-box ">
          <label htmlFor="name" className="text-lg text-dark font-bold">
            Name
          </label>
          <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your email or username"
            className="w-full p-3 border-2 rounded font-bold mt-2"
          />
        </div>
      )}
      <div className="input-box mt-4">
        <label htmlFor="email" className="text-lg text-dark font-bold">
          Email or username
        </label>
        <br />
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email or username"
          className="w-full p-3 border-2 rounded font-bold mt-2"
        />
      </div>
      <div className="input-box mt-4">
        <label htmlFor="password" className="text-lg text-dark font-bold">
          Password
        </label>
        <br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
      <button className="global-btn text-white bg-dark-blue rounded w-full mt-4 text-xl font-bold" onClick={handleClick}>
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
    </form>
  );
};

export default Form;
