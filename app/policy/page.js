import classes from '../../styles/Policy.module.css'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Policy() {
  return (
    <div className={classes.container}>
      <Link className={classes.back} to="/">
        <FaArrowLeft /> Back to Home
      </Link>
      <h4>This is Privacy Policy page</h4>
    </div>
  )
}

export default Policy