'use client'

// import { useState } from "react";
// import {useNavigate} from "next/navigation"
import Link from "next/link";
// import { useAuth } from "../contexts/AuthContext";
import Form from "./Form";
import ShutterUpButton from "./ShutterUpButton";
import TextInput from "./TextInput";

function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [error, setError] = useState();
//   const [loading, setLoading] = useState();

//   const { login } = useAuth();
//   const navigate = useNavigate();

//   async function handleSubmit(e) {
//     e.preventDefault();

//     try {
//       setError("");
//       setLoading(true);
//       await login(email, password);
//       navigate("/");
//     } catch (err) {
//       setLoading(false);
//       setError("Failed to login");
//       console.log(err);
//     }
//   }
  return (
    <Form className="mt-[-30px] h-[285px]" > 
    {/* onSubmit={handleSubmit} */}
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

      <ShutterUpButton type="submit" >
      {/* disabled={loading} */}
        <span>Submit Now</span>
      </ShutterUpButton>

      {/* {error && <p className="error">{error}</p>} */}

      <div className="text-center mt-4 text-[#000] dark:text-[#fff]">
        Don&apos;t have an account?{" "}
        <Link href="/signup">
          <span className="text-[#f75023]">Signup</span>
        </Link>{" "}
        instead.
      </div>
    </Form>
  );
}

export default LoginForm;
