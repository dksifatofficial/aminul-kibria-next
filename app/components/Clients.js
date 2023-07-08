import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import image1 from "../assets/image/client1.jpg";
import image2 from "../assets/image/client2.jpg";
import image3 from "../assets/image/client3.jpg";
import Client from "./Client";

export function Client1() {
  return (
    <div className="w-[430px] grid justify-center h-[300px] relative lg:w-[700px] lg:mx-2.5 lg:my-0">
      <FaQuoteLeft className="text-center w-full text-[70px] text-[#f75023]" />
      <p
        className="dark:text-gray-400 w-[430px] text-center italic font-medium 
      px-5 py-0 lg:w-[680px] lg:px-[30px] lg:py-0"
      >
        Working with our talented React Front-End Developer was a game-changer
        for our project. Their expertise and attention to detail brought our
        vision to life, resulting in a seamless user experience. Highly
        recommended!
      </p>
      <div className="h-[75px] grid justify-center">
        <Client>
          <Image src={image1} alt="" height="300" width="400" />
          <h5 className="dark:text-gray-100">Jesson Roy</h5>
          <h6>CEO of Organic Food</h6>
        </Client>
      </div>
    </div>
  );
}

export function Client2() {
  return (
    <div className="w-[430px] grid justify-center h-[300px] relative lg:w-[700px] lg:mx-2.5 lg:my-0">
      <FaQuoteLeft className="text-center w-full text-[70px] text-[#f75023]" />
      <p
        className="dark:text-gray-400 w-[430px] text-center italic font-medium 
      px-5 py-0 lg:w-[680px] lg:px-[30px] lg:py-0"
      >
        Our experience working with our skilled web developer was outstanding.
        Their expertise, efficiency, and attention to detail surpassed our
        expectations, resulting in a visually stunning and fully functional
        website, Thanks Aminul.
      </p>
      <div className="h-[75px] grid justify-center">
        <Client>
          <Image src={image2} alt="" height="300" width="400" />
          <h5 className="dark:text-gray-100">Priscilla Mou</h5>
          <h6>CEO of Kivo Studio</h6>
        </Client>
      </div>
    </div>
  );
}

export function Client3() {
  return (
    <div className="w-[430px] grid justify-center h-[300px] relative lg:w-[700px] lg:mx-2.5 lg:my-0">
      <FaQuoteLeft className="text-center w-full text-[70px] text-[#f75023]" />
      <p
        className="dark:text-gray-400 w-[430px] text-center italic font-medium 
      px-5 py-0 lg:w-[680px] lg:px-[30px] lg:py-0"
      >
        Our Front-End Developer was an absolute pleasure to work with. Their
        creativity, technical proficiency, and ability to translate our ideas
        into stunning user interfaces made a significant impact on our
        project&apos;s success.
      </p>
      <div className="h-[75px] grid justify-center">
        <Client>
          <Image src={image3} alt="" height="300" width="400" />
          <h5 className="dark:text-gray-100">Rayhan Lin</h5>
          <h6>Real estate Agent</h6>
        </Client>
      </div>
    </div>
  );
}
