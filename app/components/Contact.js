import image1 from "../assets/icon/icon_03.png";
import image2 from "../assets/icon/icon_07.png";
import ContactBody from "./ContactBody";
import Header from "./Header";
import Image from "next/image";

function Contact() {
  return (
    <div className="w-full relative mt-[130px] px-4 py-0 lg:px-20 lg:py-0" id="contact">
      <Image className="absolute top-[-60px] hidden left-0 lg:block" src={image1} alt="" />
      <Image className="absolute hidden right-0 bottom-0 lg:block" src={image2} alt="" />
      <Header>
        <h3>Contact Me</h3>
        <h2 className="dark:text-[#fff]">I Want To Hear From You</h2>
        <p className="lg:px-48 lg:py-0 xl:px-80 xl:py-0">
          Please fill out the form on this section to contact with me. Or call
          between 9:00 a.m. and 9:00 p.m. ET, Saturday through Thursday
        </p>
        </Header>
      <ContactBody />
    </div>
  );
}

export default Contact;
