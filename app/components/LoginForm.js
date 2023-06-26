// 'use client'

// import { useState } from "react";
// import {useNavigate} from "next/navigation"
// import Link from "next/link";
// import { useAuth } from "../contexts/AuthContext";
// import classes from "../styles/LoginForm.module.css";
// import Form from "./Form";
// import ShutterUpButton from "./ShutterUpButton";
// import TextInput from "./TextInput";

// function LoginForm() {
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
//   return (
//     <Form className={classes.form} onSubmit={handleSubmit}>
//       <TextInput
//         type="text"
//         placeholder="Enter email"
//         icon="alternate_email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />

//       <TextInput
//         type="password"
//         placeholder="Enter password"
//         icon="lock"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />

//       <ShutterUpButton className={classes.button} type="submit" disabled={loading}>
//         <span>Submit Now</span>
//       </ShutterUpButton>

//       {error && <p className="error">{error}</p>}

//       <div className="info">
//         Don&apos;t have an account?{" "}
//         <Link to="/signup">
//           <span className={classes.span}>Signup</span>
//         </Link>{" "}
//         instead.
//       </div>
//     </Form>
//   );
// }

// export default LoginForm;
