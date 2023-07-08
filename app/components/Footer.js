import Link from "next/link";

function Footer() {
  return (
    <div className="grid w-full h-auto bg-[#e7eafd]">
      <div className="row">
        <div className="grid place-content-center w-full md:w-6/12 md:px-0 md:py-8">
          <p className="md:text-base">
            Developed with love by{" "}
            <Link className="text-[#f75023]" href="/">
              <span className="hover:text-[#111111] hover:cursor-pointer">
                <b>Aminul Kibria</b>
              </span>
            </Link>{" "}
            © 2023
          </p>
        </div>
        <div className="grid justify-center w-full md:w-6/12 md:p-0">
          <ul
            className="w-80 flex justify-around mt-[-1.5rem] mb-0 mx-0 p-0 
              md:flex md:w-72 md:m-0 md:px-0 md:py-8"
          >
            <li className="inline-block text-[1.063rem]">
              <Link href="/termscondition">
                <p className="md:text-base hover:text-[#f75023] hover:cursor-pointer">
                  Terms & Condition
                </p>
              </Link>
            </li>
            <li className="inline-block text-[1.063rem]">
              <Link href="/policy">
                <p className="md:text-base hover:text-[#f75023] hover:cursor-pointer">
                  Privacy Policy
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
