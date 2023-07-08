// 'use client'

// import { useState } from "react";
import Link from "next/link";
// import { useNavigate } from 'next/navigation';
// import { useAuth } from "../contexts/AuthContext";
import Checkbox from "./Checkbox";
import Form from "./Form";
import ShutterUpButton from "./ShutterUpButton";
import TextInput from "./TextInput";

function SignupForm() {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [agree, setAgree] = useState("");

  // const [error, setError] = useState();
  // const [loading, setLoading] = useState();

  // const { signup } = useAuth();
  // const navigate = useNavigate();

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   // do validation
  //   if (password !== confirmPassword) {
  //     return setError("Password don't match!");
  //   }

  //   try {
  //     setError("");
  //     setLoading(true);
  //     await signup(email, password, username);
  //     navigate("/");
  //   } catch (err) {
  //     console.log(err);
  //     setLoading(false);
  //     setError("Failed to create an account");
  //   }
  // }

  return (
    <Form className="mt-[-100px] h-[485px]">
      {/* onSubmit={handleSubmit} */}
      <TextInput
        type="text"
        placeholder="Enter name"
        // icon="person"
        // value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <TextInput
        type="text"
        placeholder="Enter email"
        // icon="alternate_email"
        // value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <TextInput
        type="password"
        placeholder="Enter password"
        // icon="lock"
        // value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <TextInput
        type="password"
        placeholder="Confirm password"
        // icon="lock_clock"
        // value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      <Checkbox
        text=" I agree to the Terms & Conditions"
        // value={agree}
        onChange={(e) => setAgree(e.target.value)}
        required
      />

      <ShutterUpButton type="submit">
        {/* disabled={loading} */}
        <span>Submit now</span>
      </ShutterUpButton>

      {/* {error && <p className="error">{error}</p>} */}

      <div className="text-center mt-4 text-[#000] dark:text-[#fff]">
        Already have an account?{" "}
        <Link href="/login">
          <span className=" text-[#f75023]">Login</span>
        </Link>{" "}
        instead.
      </div>
    </Form>
  );
}

export default SignupForm;
