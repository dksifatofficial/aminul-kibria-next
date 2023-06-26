import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import classes from "../styles/Login.module.css";
import Illustration from "../components/Illustration";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div className={classes.login}>
      <Link className={classes.back} href="/">
        <FaArrowLeft /> Back to Home
      </Link>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
