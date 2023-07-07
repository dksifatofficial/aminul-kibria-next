import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import classes from "../styles/TermsCondition.module.css";

function TermsCondition() {
  return (
    <div className={classes.container}>
      <Link className={classes.back} href="/">
        <FaArrowLeft /> Back to Home
      </Link>
      <h4>This is Terms & Condition page</h4>
    </div>
  );
}

export default TermsCondition;
