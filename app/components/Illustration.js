import signupImage from '../assets/logo/signup.svg'
import classes from '../styles/Illustration.module.css'
import Image from "next/image";

function Illustration() {
  return (
    <div className={classes.illustration}>
        <Image src={signupImage} alt='Signup' />
    </div>
  )
}

export default Illustration