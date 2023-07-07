import classes from '../styles/Policy.module.css'
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';

function Policy() {
  return (
    <div className={classes.container}>
      <Link className={classes.back} href="/">
        <FaArrowLeft /> Back to Home
      </Link>
      <h4>This is Privacy Policy page</h4>
    </div>
  )
}

export default Policy