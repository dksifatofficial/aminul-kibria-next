import Image from "next/image";
import Broth_Powder from "../assets/image/Left Coast Performance Bone Broth Powder.jpg";

const AmazonLink = () => {
  return (
    <div
      className=" relative w-full h-auto grid bg-[#fff] dark:bg-[#000] text-2xl text-bold 
    align-middle justify-center mt-[100px] mb-[100px] justify-items-center"
    >
      <p
        className=" py-[20px] px-[20px] rounded-[100%] ring-2 ring-red-500 
      absolute top-[70px] font-bold text-red-500"
      >
        20% off
      </p>
      <Image
        className="rounded-[10px]"
        height="400"
        width="250"
        src={Broth_Powder}
        alt="Left Coast Performance Bone Broth Powder"
      />
      <a
        className=" h-auto bg-[#000] text-[#fff] dark:bg-[#fff] dark:text-[#000] rounded-[10px] py-[5px] px-[20px] "
        target="_blank"
        href="https://www.amazon.com/b?_encoding=UTF8&tag=20018e-20&linkCode=ur2&linkId=df72c767da0a6d401f106b59608531c7&camp=1789&creative=9325&node=3764441"
      >
        Diet and Sports Nutrition
      </a>
    </div>
  );
};

export default AmazonLink;
