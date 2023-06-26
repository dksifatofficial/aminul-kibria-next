import image2 from "../assets/icon/icon_32.png";
import image3 from "../assets/icon/icon_33.png";
import image1 from "../assets/image/Banner_upDown.png";
import image4 from "../assets/image/mm1.png";
import classes from "../styles/TopContainer.module.css";
import ShutterUpButton from "./ShutterUpButton";
import Socialicon from "./Socialicon";
import Image from "next/image";

function TopContainer() {
  return (
    <div className={classes.container} id="banner">
      <Image className={classes.img2} src={image2} alt="" />
      <Image className={classes.img3} src={image3} alt="" />
      <div className={classes.bannerLeft}>
        <h3>Hello, I&apos;m</h3>
        <h1>Aminul Kibria</h1>
        <h4>
          A <span className={classes.cd}>Front-End Developer</span> and{" "}
          <span className={classes.bd}>Programmer</span>
        </h4>
        <p>
          I&apos;m also creative designer, and I&apos;m very passionate and dedicated to
          my work.
        </p>
        <div className={classes.headerSocial}>
          <a className={classes.sButton} href="#aboutMe">
            <ShutterUpButton>
              <span>About Me</span>
            </ShutterUpButton>
          </a>
          <div className={classes.sIcon}>
            <Socialicon />
          </div>
        </div>
      </div>
      <div className={classes.bannerRight}>
        <Image className={classes.myPic} src={image4} alt="logo" />
        <Image className={classes.logoPic} src={image1} alt="logo" />
      </div>
    </div>
  );
}

export default TopContainer;
