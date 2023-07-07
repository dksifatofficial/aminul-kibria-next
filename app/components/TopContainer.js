import Image from "next/image";
import image2 from "../assets/icon/icon_32.png";
import image3 from "../assets/icon/icon_33.png";
import image1 from "../assets/image/Banner_upDown.png";
import image4 from "../assets/image/mm1.png";
import ShutterUpButton from "./ShutterUpButton";
import Socialicon from "./Socialicon";

function TopContainer() {
  return (
    <div className="w-full h-auto grid justify-center border border-solid border-[rgba(0,0,0,0)] lg:block lg:pl-12 xl:pl-24" id="banner">
      <Image
        className="absolute z-[-111] opacity-50 hidden right-0 top-0 lg:block lg:opacity-25"
        src={image2}
        alt=""
      />
      <Image
        className="absolute z-[-111] opacity-50 hidden left-0 bottom-0 lg:block lg:opacity-25"
        src={image3}
        alt=""
      />
      <div className="w-full h-auto float-left text-center mt-28 lg:w-6/12 lg:float-left lg:text-left lg:mt-28 lg:pt-12 lg:pb-0 lg:px-16">
        <h3 className="text-[#f75023] dark:text-[#40d6e0] font-medium p-0">Hello, I&apos;m</h3>
        <h1 className="font-[bold] text-black text-7xl p-0 mb-4 mt-4 dark:text-white">
          DK Sifat
        </h1>
        <h4 className="text-zinc-600 mb-2 dark:text-zinc-400">
          A <span className="text-[#30c367]">Front-End Developer</span> and{" "}
          <span className="text-[#8e78f0]">Programmer</span>
        </h4>
        <p className="px-4 py-0 mb-2 lg:text-left lg:p-0 xl:w-[25rem]">
          I&apos;m also creative designer, and I&apos;m very passionate and
          dedicated to my work.
        </p>
        <div className="w-full grid justify-center mt-8 lg:align-middle lg:w-full lg:h-12 lg:flex lg:justify-start ">
          <a className="" href="#aboutMe">
            <ShutterUpButton>
              <span>About o</span>
            </ShutterUpButton>
          </a>
          <div className="mt-8 ml-0 lg:mt-0 lg:p-0 lg:ml-10 lg:align-middle lg:flex">
            <Socialicon />
          </div>
        </div>
      </div>
      <div className="w-full h-[480px] flex justify-center relative mt-4 px-0 py-4 lg:justify-start lg:flex lg:w-6/12 lg:mt-28 lg:pl-5">
        <Image
          className="w-[340px] h-[430px] absolute"
          src={image4}
          alt="logo"
          height="600"
          width="600"
        />
        <Image
          className="lg:animate-[logoPicture_7s_linear_infinite] h-[400px] w-[400px] absolute"
          src={image1}
          alt="logo"
          height="600"
          width="600"
        />
      </div>
    </div>
  );
}

export default TopContainer;
