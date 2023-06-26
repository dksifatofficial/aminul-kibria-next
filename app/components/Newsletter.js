import classes from "../styles/Newsletter.module.css";
import LoginForm from "./LoginForm";

function Newsletter() {
  return (
    <div className={classes.box}>
      <div className={classes.text}>
        <h4>Subscribe Now</h4>
        <h2>Get My Newsletter</h2>
        <p>Get latest news, updates, tips and trics in your inbox</p>
      </div>
      <div className={classes.form}>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}

export default Newsletter;
