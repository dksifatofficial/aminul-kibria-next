import image1 from "../assets/icon/icon_09.png";
import image2 from "../assets/icon/icon_10.png";
import image3 from "../assets/icon/icon_25.png";
import image4 from "../assets/icon/icon_26.png";
import image6 from "../assets/icon/icon_27.png";
import image5 from "../assets/icon/icon_28.png";
import classes from "../styles/Services.module.css";
import Header from "./Header";
import Service from "./Service";
import Image from "next/image";

function Services() {
  return (
    <div className={classes.servicesContainer} id="services">
      <Image className={classes.icon9} src={image1} alt="icon" />
      <Image className={classes.icon10} src={image2} alt="icon" />

      <Header className={classes.header}>
        <h3>Services</h3>
        <h2>What I Do for Clients</h2>
        <p>
          My expertise in website design allows me to provide clients with a
          wide range of design options tailored to their specific needs.
        </p>
      </Header>

      <Service>
        <Image className={classes.img} src={image3} alt="" />
        <div className={classes.text}>
          <h3>Front-End Development</h3>
          <h4>
            Starts from<span> $99</span>
          </h4>
          <p>
            I specialize in Front-End Development, creating engaging, responsive
            websites that deliver exceptional user experiences. I bring designs
            to life through interactive and intuitive websites that captivate
            users and enhance brand image.
          </p>
        </div>
      </Service>

      <Service>
        <Image className={classes.img} src={image4} alt="" />
        <div className={classes.text}>
          <h3>Landing Page</h3>
          <h4>
            Starts from<span> $49</span>
          </h4>
          <p>
            I specialize in creating captivating and organized landing pages
            that convert visitors into leads. Let me help you achieve your
            marketing goals with a high-quality and effective landing page.
          </p>
        </div>
      </Service>

      <Service>
        <Image className={classes.img} src={image5} alt="" />
        <div className={classes.text}>
          <h3>Web Design</h3>
          <h4>
            Starts from<span> $399</span>
          </h4>
          <p>
            Specializing with a passion in Web Design, I craft visually
            stunning, custom and user-friendly websites with an emphasis on user
            experience, leaving a lasting impression on visitors.
          </p>
        </div>
      </Service>

      <Service>
        <Image className={classes.img} src={image6} alt="" />
        <div className={classes.text}>
          <h3>Web Development</h3>
          <h4>
            Starts from<span> $199</span>
          </h4>
          <p>
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
