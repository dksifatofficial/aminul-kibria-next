import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";
import ContactForm from "./ContactForm";

function ContactBody() {
  return (
    <div className="w-full h-auto flex flex-wrap justify-center">
      <div className="w-full p-5 lg:w-[49.99%] lg:p-[50px]">
        <div className="w-full relative p-2.5">
          <div
            className="w-[90px] h-[90px] relative rounded-[50%] 
          bg-[rgba(255,0,0,0.13)] dark:bg-[rgba(255,0,0,0.2)]"
          >
            <FaLocationArrow
              className="absolute -translate-x-2/4 -translate-y-2/4 
            text-lg left-2/4 top-2/4 text-[#000] dark:text-[#fff]"
            />
          </div>
          <div className="w-[70%] absolute leading-[0] left-[120px] top-[15px]">
            <h3 className="text-[#333333] dark:text-[#fff]">Address</h3>
            <p>Barishal, Bangladesh</p>
          </div>
        </div>

        <div className="w-full relative p-2.5">
          <div
            className="w-[90px] h-[90px] relative rounded-[50%] 
          bg-[rgba(8,216,253,0.13)] dark:bg-[rgba(8,216,253,0.2)]"
          >
            <FaEnvelope
              className="absolute -translate-x-2/4 -translate-y-2/4 
            text-lg left-2/4 top-2/4 text-[#000] dark:text-[#fff]"
            />
          </div>
          <div className="w-[70%] absolute leading-[0] left-[120px] top-[15px]">
            <h3 className="text-[#333333] dark:text-[#fff]">Email</h3>
            <p className="hover:text-[#f75023] hover:cursor-pointer">
              a@aminulkibria.com
            </p>
          </div>
        </div>

        <div className="w-full relative p-2.5">
          <div
            className="w-[90px] h-[90px] relative rounded-[50%] 
          bg-[rgba(21,255,0,0.356)] dark:bg-[rgba(21,255,0,0.2)]"
          >
            <FaPhone
              className="absolute -translate-x-2/4 -translate-y-2/4 
            text-lg left-2/4 top-2/4 text-[#000] dark:text-[#fff]"
            />
          </div>
          <div className="w-[70%] absolute leading-[0] left-[120px] top-[15px]">
            <h3 className="text-[#333333] dark:text-[#fff]">Phone</h3>
            <p>+880 1722 020182</p>
          </div>
        </div>
      </div>
      <div className="w-full p-5 lg:w-[49.99%] lg:p-[50px]">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactBody;
