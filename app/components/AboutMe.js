import image3 from "../assets/icon/icon_08.png";
import image2 from "../assets/icon/icon_14.png";
import image1 from "../assets/image/pc3.png";
import classes from "../styles/AboutMe.module.css";
import ShutterUpButton from "./ShutterUpButton";
import Image from "next/image";

function AboutMe() {
  return (
    <div className={classes.aboutMe} id="aboutMe">
      <div className={`${classes.aboutMeLeft} ${classes.aboutMeSpan}`}>
        <Image className={classes.img01} src={image1} alt="pic" />
        <Image className={classes.img02} src={image2} alt="icon" />

        <div className={`${classes.success} ${classes.miniBox}`}>
          <h2 style={{ color: "#1cbe56" }}>10</h2>
          <h5>
            Years of
            <br />
            Success
          </h5>
        </div>

        <div className={`${classes.projects} ${classes.miniBox}`}>
          <h2 style={{ color: "#6e50f0" }}>1K</h2>
          <h5>
            Total
            <br />
            Projects
          </h5>
        </div>
      </div>

      <div className={`${classes.aboutMeRight} ${classes.aboutMeSpan}`}>
        <h3>I&apos;m a Designer</h3>
        <h2>I Can Design Anything You Want</h2>
        <p>
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
        <Image className={classes.img03} src={image3} alt="pic" />
      </div>
    </div>
  );
}

export default AboutMe;
