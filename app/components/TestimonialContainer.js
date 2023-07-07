import Image from "next/image";
import image1 from "../assets/icon/icon_30.png";
import image2 from "../assets/icon/icon_31.png";
import Header from "./Header";
import Testimonials from "./Testimonials";

function TestimonialContainer() {
  return (
    <div className="w-full flex flex-wrap relative mt-[150px] lg:px-20 lg:py-8">
      <Image
        className="w-[300px] rotate-[40deg] absolute opacity-30 hidden -scale-x-100 -left-3 top-[50px] lg:block"
        src={image1}
        alt=""
      />
      <Image
        className="w-[300px] absolute bottom-[-150px] opacity-30 hidden -right-5 lg:block"
        src={image2}
        alt=""
      />
      <Header>
        <h3>Testimonials</h3>
        <h2 className="dark:text-gray-100">What My Clients Say</h2>
        <p className="px-2 py-0 lg:px-48 lg:py-0 xl:px-80 xl:py-0">
          Most common methods for designing websites that work well on desktop
          is responsive and adaptive design
        </p>
      </Header>
      <div className="flex-[20%] relative hidden justify-center lg:block"></div>
      <div className="relative overflow-hidden h-[380px] w-[700px] flex-[100%] flex justify-center lg:flex-[60%]">
        <Testimonials />
      </div>
      <div className="flex-[20%] relative hidden justify-center lg:block"></div>
    </div>
  );
}

export default TestimonialContainer;
