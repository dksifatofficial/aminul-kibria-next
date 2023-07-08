import Image from "next/image";
import image1 from "../assets/icon/icon_09.png";
import image2 from "../assets/icon/icon_10.png";
import image3 from "../assets/icon/icon_25.png";
import image4 from "../assets/icon/icon_26.png";
import image6 from "../assets/icon/icon_27.png";
import image5 from "../assets/icon/icon_28.png";
import Header from "./Header";
import Service from "./Service";

function Services() {
  return (
    <div
      className="flex flex-wrap w-full relative z-[1] mt-[130px] p-0 lg:px-20 lg:py-0"
      id="services"
    >
      <Image
        className="absolute z-[-1] hidden left-0 top-[100px] lg:block"
        src={image1}
        alt="icon"
      />
      <Image
        className="absolute top-[-180px] z-[-1] hidden right-0 lg:block"
        src={image2}
        alt="icon"
      />

      <Header className="lg:mb-14">
        <h3>Services</h3>
        <h2 className="dark:text-gray-100">What I Do for Clients</h2>
        <p className="px-4 py-0 lg:px-16 lg:py-0 xl:px-80 xl:py-0">
          My expertise in website design allows me to provide clients with a
          wide range of design options tailored to their specific needs.
        </p>
      </Header>

      <Service>
        <Image
          className="float-left w-[10%] lg:w-[15%]"
          src={image3}
          alt=""
          height="70"
          width="50"
        />
        <div className="float-right w-[90%] pl-5 lg:w-[84%] lg:pl-[25px]">
          <h3>Front-End Development</h3>
          <h4>
            Starts from<span className="text-[#f75023]"> $99</span>
          </h4>
          <p className="text-justify">
            I specialize in Front-End Development, creating engaging, responsive
            websites that deliver exceptional user experiences. I bring designs
            to life through interactive and intuitive websites that captivate
            users and enhance brand image.
          </p>
        </div>
      </Service>

      <Service>
        <Image
          className="float-left w-[10%] lg:w-[15%]"
          src={image4}
          alt=""
          height="70"
          width="50"
        />
        <div className="float-right w-[90%] pl-5 lg:w-[84%] lg:pl-[25px]">
          <h3>Landing Page</h3>
          <h4>
            Starts from<span className="text-[#f75023]"> $49</span>
          </h4>
          <p className="text-justify">
            I specialize in creating captivating and organized landing pages
            that convert visitors into leads. Let me help you achieve your
            marketing goals with a high-quality and effective landing page.
          </p>
        </div>
      </Service>

      <Service>
        <Image
          className="float-left w-[10%] lg:w-[15%]"
          src={image5}
          alt=""
          height="70"
          width="50"
        />
        <div className="float-right w-[90%] pl-5 lg:w-[84%] lg:pl-[25px]">
          <h3>Web Design</h3>
          <h4>
            Starts from<span className="text-[#f75023]"> $399</span>
          </h4>
          <p className="text-justify">
            Specializing with a passion in Web Design, I craft visually
            stunning, custom and user-friendly websites with an emphasis on user
            experience, leaving a lasting impression on visitors.
          </p>
        </div>
      </Service>

      <Service>
        <Image
          className="float-left w-[10%] lg:w-[15%]"
          src={image6}
          alt=""
          height="70"
          width="50"
        />
        <div className="float-right w-[90%] pl-5 lg:w-[84%] lg:pl-[25px]">
          <h3>Web Development</h3>
          <h4>
            Starts from<span className="text-[#f75023]"> $199</span>
          </h4>
          <p className="text-justify">
            Web development is the process of building and maintaining websites
            using programming languages, frameworks, and tools. It includes
            frontend and backend development, web design, and client/server
            scripting.
          </p>
        </div>
      </Service>
    </div>
  );
}

export default Services;
