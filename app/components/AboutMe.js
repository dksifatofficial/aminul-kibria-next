import Image from "next/image";
import image3 from "../assets/icon/icon_08.png";
import image2 from "../assets/icon/icon_14.png";
import image1 from "../assets/image/pc3.png";
import ShutterUpButton from "./ShutterUpButton";

function AboutMe() {
  return (
    <div
      className="w-full h-auto grid p-0 lg:inline-block lg:w-full lg:p-20"
      id="aboutMe"
    >
      <div
        className="w-full float-left relative ml-[-0.5rem] justify-center text-center px-8 py-0 lg:w-6/12 lg:float-left lg:relative lg:text-left lg:px-8 lg:py-0
      flex h-auto  overflow-visible"
      >
        <Image
          className="relative h-[21rem] w-80 lg:relative lg:h-[30rem] lg:w-[30rem] lg:ml-[30px] lg:mt-10"
          src={image1}
          alt="pic"
        />
        <Image
          className="h-[200px] w-[120px] absolute top-[-70px] left-[-70px] hidden lg:block"
          src={image2}
          alt="icon"
        />

        <div
          className="text-left bg-white absolute transition-[0.5s] duration-[ease] p-4 rounded-lg hover:shadow-[-0.5rem_-0.5rem_0.5rem_rgb(49,48,48)] hover:m-2
        left-4 top-12 lg:left-0 lg:top-[150px]"
        >
          <h2
            className="absolute font-semibold text-[50px]"
            style={{ color: "#1cbe56" }}
          >
            10
          </h2>
          <h5 className="font-medium ml-[70px] pt-2.5">
            Years of
            <br />
            Success
          </h5>
        </div>

        <div
          className="text-left bg-white absolute transition-[0.5s] duration-[ease] p-4 rounded-lg hover:shadow-[-0.5rem_-0.5rem_0.5rem_rgb(49,48,48)] hover:m-2
        right-4 bottom-12 lg:right-0 lg:bottom-20"
        >
          <h2
            className="absolute font-semibold text-[50px]"
            style={{ color: "#6e50f0" }}
          >
            1K
          </h2>
          <h5 className="font-medium ml-[70px] pt-2.5">
            Total
            <br />
            Projects
          </h5>
        </div>
      </div>

      <div
        className="w-full float-left relative ml-[-0.5rem] justify-center text-center px-8 lg:w-6/12 lg:float-left lg:relative lg:text-left lg:px-8 lg:py-0
       py-16 lg:pl-16 lg:pr-0 lg:pt-4 lg:pb-0 xl:pl-16 xl:pr-0 xl:pt-8 xl:pb-0"
      >
        <h3 className=" text-[#f75023]">I&apos;m a Designer</h3>
        <h2 className="text-gray-900 dark:text-gray-100">I Can Design Anything You Want</h2>
        <p className="mb-12">
          As a versatile and skilled designer, I can bring any vision to life
          with my expertise in various design disciplines. From logos to
          websites, I specialize in creating tailor-made solutions that cater to
          your unique needs. With a keen eye for detail and a passion for
          design, I am confident in my ability to design anything you want.
        </p>
        <a href="#contact">
          <ShutterUpButton>
            <span>Hire Me</span>
          </ShutterUpButton>
        </a>
        <Image
          className="h-[200px] w-[300px] absolute right-[-100px] bottom-[-90px] hidden lg:block"
          src={image3}
          alt="pic"
        />
      </div>
    </div>
  );
}

export default AboutMe;
