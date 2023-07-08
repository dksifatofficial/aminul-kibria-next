import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

function TermsCondition() {
  return (
    <div
      className="w-full h-[300px] relative mt-[100px] mb-[70px] 
         border-2 border-dotted border-[black]"
    >
      <Link
        className="mt-[-50px] mb-[-50px] text-[rgb(106,109,109)] absolute 
        mx-0 hover:text-[#f75023]"
        href="/"
      >
        <FaArrowLeft /> Back to Home
      </Link>
      <h4 className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
        This is Terms & Condition page
      </h4>
    </div>
  );
}

export default TermsCondition;
