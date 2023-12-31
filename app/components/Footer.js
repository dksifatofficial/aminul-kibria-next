import Link from "next/link";

function Footer() {
  return (
    <div className="flex flex-wrap bg-[#e7eafd] w-full justify-center py-10">
      <div className="flex-[100%] flex flex-wrap no-underline justify-center">
        <Link className="no-underline" href="/termscondition">
          <p
            className="font-semibold text-[#414040] flex flex-wrap items-center 
                   text-[15px] px-2.5 py-[5px] rounded-[5px] md:text-base
                 hover:bg-[#414040] hover:text-[#e7eafd] hover:cursor-pointer"
          >
            Terms & Condition
          </p>
        </Link>
        <Link className="no-underline" href="/policy">
          <p
            className="font-semibold text-[#414040] flex flex-wrap items-center 
                   text-[15px] px-2.5 py-[5px] rounded-[5px] md:text-base
                 hover:bg-[#414040] hover:text-[#e7eafd] hover:cursor-pointer"
          >
            Privacy Policy
          </p>
        </Link>
      </div>
      <div className="w-full text-center px-2.5 py-[5px]">
        <p className="md:text-base">
          Compiled with NEXT-js by{" "}
          <Link className="text-[#000] no-underline" href="/">
            <span className="hover:text-[#f75023] hover:cursor-pointer">
              <b>Aminul Kibria</b>
            </span>
          </Link>{" "}
          © 2022
        </p>
      </div>
    </div>
  );
}

export default Footer;
