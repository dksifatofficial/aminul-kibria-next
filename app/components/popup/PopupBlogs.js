import Image from "next/image";
import image1 from "../../assets/image/office_01.jpg";
import image2 from "../../assets/image/office_02.jpg";
import image3 from "../../assets/image/office_03.jpg";

export function PopupBlog1() {
  return (
    <div className="w-full">
      <div className="w-full h-[300px] overflow-hidden rounded-[10px]">
        <Image className="w-full h-auto" src={image1} alt="" />
      </div>
      <h4 className="mt-10">
        Experienced Web Developer: Transforming Designs into Seamless User
        Experiences
      </h4>
      <h6 className="text-[#777a8b]">Web development</h6>
      <p className="text-[17px]">
        As a highly skilled and experienced Web developer with five years in the
        industry, I possess a deep understanding of web technologies and a
        proven track record of creating robust, user-friendly, and visually
        appealing websites.
        <br />
        <br />
        My expertise lies in front-end development, where I excel in HTML, CSS,
        and JavaScript frameworks such as React and Next js. I am adept at
        transforming design concepts into fully functional websites, ensuring
        seamless responsiveness across different devices.
        <br />
        <br />
        With a keen eye for detail and a strong focus on user experience, I
        strive to deliver clean, efficient, and scalable code. My strong
        problem-solving abilities and excellent communication skills allow me to
        collaborate effectively with cross-functional teams to deliver
        exceptional web solutions.
      </p>
    </div>
  );
}

export function PopupBlog2() {
  return (
    <div>
      <div className="w-full h-[300px] overflow-hidden rounded-[10px]">
        <Image className="w-full h-auto mt-[-100px]" src={image2} alt="img" />
      </div>
      <h4 className="mt-10">
        Experienced Branding Expert: Crafting Powerful Identities for Lasting
        Impressions
      </h4>
      <h6 className="text-[#777a8b]">Branding</h6>
      <p className="text-[17px]">
        As a seasoned branding expert with five years of experience, I possess a
        deep understanding of the intricacies involved in building and enhancing
        brand identities. I have successfully developed and implemented
        comprehensive branding strategies for diverse clients, ensuring their
        unique value propositions resonate with target audiences.
        <br />
        <br />
        With a keen eye for aesthetics and a strong grasp of market trends, I
        excel in creating visually captivating brand assets, including logos,
        color palettes, and typography. Additionally, my expertise extends to
        crafting compelling brand narratives and messaging that effectively
        communicate client&apos;s stories and values.
        <br />
        <br />
        Through meticulous research, analysis, and strategic planning, I have
        consistently helped businesses establish strong brand presence and
        achieve long-term growth.
      </p>
    </div>
  );
}

export function PopupBlog3() {
  return (
    <div>
      <div className="w-full h-[300px] overflow-hidden rounded-[10px]">
        <Image className="w-full h-auto mt-[-100px]" src={image3} alt="img" />
      </div>
      <h4 className="mt-10">
        Experienced Social Media Expert: Driving Engagement and Results Through
        Strategies
      </h4>
      <h6 className="text-[#777a8b]">Social Media</h6>
      <p className="text-[17px]">
        As a seasoned Social Media expert with five years of experience, I bring
        a wealth of knowledge and expertise in leveraging various social
        platforms to drive engagement, reach, and conversions.
        <br />
        <br />
        I have successfully developed and executed comprehensive social media
        strategies for diverse brands, harnessing the power of platforms like
        Facebook, Instagram, Twitter, and LinkedIn. With a keen understanding of
        target audience behavior and emerging trends, I excel in creating
        compelling content, managing social media campaigns, and analyzing
        performance metrics to optimize results.
        <br />
        <br />
        Additionally, I have a strong grasp of social media advertising,
        influencer partnerships, and community management, enabling me to build
        and nurture brand communities effectively. Through my strategic approach
        and continuous monitoring, I have consistently helped brands establish a
        strong social media presence and drive meaningful connections with their
        audiences.
      </p>
    </div>
  );
}
