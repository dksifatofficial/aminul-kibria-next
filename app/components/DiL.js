import image from "../assets/image/dil_img1.png";
import classes from "../styles/DiL.module.css";
import Header from "./Header";
import PercentageBar from "./PercentageBar";
import Image from "next/image";

function DiL() {
  return (
    <div className={classes.container}>
      <div className="row">
        <div className={classes.left}>
          <Header className={classes.header}>
            <h3>Design is Life</h3>
            <h2>I Develop Skills Regularly to Keep Me Update</h2>
            <p>
              I am constantly updating my skills and staying current with the
              latest design trends to deliver exceptional, modern solutions for
              every project.
            </p>
          </Header>
          <div className={classes.pBars}>
            <PercentageBar progress={95}>
              <h6>REACT</h6>
            </PercentageBar>

            <PercentageBar progress={90}>
              <h6>HTML/CSS</h6>
            </PercentageBar>

            <PercentageBar progress={85}>
              <h6>JavaScript</h6>
            </PercentageBar>
          </div>
        </div>
        <div className={classes.right}>
          <Image className={classes.img} src={image} alt="design is life" />
        </div>
      </div>
    </div>
  );
}

export default DiL;
