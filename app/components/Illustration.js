import signupImage from '../assets/logo/signup.svg'
import Image from "next/image";

function Illustration() {
  return (
    <div className="px-16 py-4 lg:hidden">
        <Image
        className="max-w-[70%]"
        src={signupImage} alt='Signup' />
    </div>
  )
}

export default Illustration