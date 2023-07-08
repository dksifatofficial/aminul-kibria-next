"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Illustration from "../components/Illustration";
import LoginForm from "../components/LoginForm";

const Loagin = () => {
  return (
    <div className="mt-8 pt-[30px] pb-0 px-[30px]">
      <Link className="ml-[-30px] text-[rgb(106,109,109)]" href="/">
        <FaArrowLeft /> Back to Home
      </Link>
      <h1 className="pt-5">Login to your account</h1>
      <div className="grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr]">
        <Illustration />
        <LoginForm />
      </div>
    </div>
  );
};

export default Loagin;
