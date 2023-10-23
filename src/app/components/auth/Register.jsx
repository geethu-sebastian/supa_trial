"use client";

import Link from "next/link";
import { useState } from "react";


export default function Register() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const [user, setUser] = useState({
    //first_name: "",
    //last_name: "",
    email: "",
    password: "",
    //re_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function signUp({email,password}) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    
  }
  return (
    <>
      <div className="flex flex-col w-full h-full justify-center items-center gap-4">
        <div className="flex justify-center items-center h-[10%]">
          <h1 className="font-semibold md:font-bold text-4xl">Register</h1>
        </div>
        <form
          onSubmit={signUp}
          className="flex items-center justify-center flex-col w-full h-[50%] gap-8"
        >
          {/* Input fields */}
          {/*<input
      type="text"
      id="firstname"
      name="first_name"
      placeholder="Enter first name"
      autoComplete="off"
      onChange={handleChange}
      value={user.first_name}
      required
      className="flex rounded-3xl h-[20%] w-[50%] text-start px-4 border-2"
    />
    <input
      type="text"
      id="lastname"
      name="last_name"
      placeholder="Enter last name"
      autoComplete="off"
      onChange={handleChange}
      value={user.last_name}
      required
      className="flex rounded-3xl h-[20%] w-[50%] text-start px-4 border-2"
/>*/}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            autoComplete="off"
            onChange={handleChange}
            value={user.email}
            required
            className="flex rounded-3xl h-[20%] w-[50%] text-start px-4 border-2"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
            value={user.password}
            required
            className="flex rounded-3xl h-[20%] w-[50%] text-start px-4 border-2"
          />
          {/*<input
      type="password"
      id="repassword"
      name="re_password"
      placeholder="Reenter password"
      onChange={handleChange}
      value={user.re_password}
      required
      className="flex rounded-3xl h-[20%] w-[50%] text-start px-4 border-2"
/>*/}
          <button
            className="flex text-xl font-medium bg-black text-white py-2 px-8 rounded-3xl items-center justify-center hover:bg-[#27272a]"
            type="submit"
          >
            Register
          </button>
        </form>
        <p className="font-normal px-2 text-sm">
          Already registered?
          <Link href="/login" className="text-blue-600 text-base">
            Login
          </Link>
        </p>
      </div>
    </>
  );
}
