import Image from "next/image";
import image from "../assets/image/dil_img1.png";
import Header from "./Header";
import PercentageBar from "./PercentageBar";

function DiL() {
  return (
    <div className="w-full h-auto grid justify-center px-8 py-40 lg:w-full lg:px-20 lg:py-40">
      <div className="row">
        <div className="w-full h-auto lg:w-[55%] lg:float-left">
          <Header className="mb-[60px]">
            <h3 className="lg:text-left">Design is Life</h3>
            <h2 className="dark:text-gray-100 lg:text-left">
              I Develop Skills Regularly to Keep Me Update
            </h2>
            <p className="lg:text-left">
              I am constantly updating my skills and staying current with the
              latest design trends to deliver exceptional, modern solutions for
              every project.
            </p>
          </Header>
          <div className="justify-center">
            <PercentageBar progress={95}>
              <h6 className="text-[#000] dark:text-[#fff] absolute left-0 top-0">REACT</h6>
            </PercentageBar>

            <PercentageBar progress={90}>
              <h6 className="text-[#000] dark:text-[#fff] absolute left-0 top-0">HTML/CSS</h6>
            </PercentageBar>

            <PercentageBar progress={85}>
              <h6 className="text-[#000] dark:text-[#fff] absolute left-0 top-0">JavaScript</h6>
            </PercentageBar>

            <PercentageBar progress={30}>
              <h6 className="text-[#000] dark:text-[#fff] absolute left-0 top-0">PHP</h6>
            </PercentageBar>
          </div>
        </div>
        <div className="w-full h-auto grid justify-center lg:w-[45%] lg:relative">
          <Image
            className="h-[35rem] w-[25rem] mt-16 lg:h-[35rem] lg:absolute lg:mt-0 lg:right-8"
            src={image}
            alt="design is life"
          />
        </div>
      </div>
    </div>
  );
}

export default DiL;
