import image1 from "../assets/icon/icon_16.png";
import image2 from "../assets/icon/icon_17.png";
import image3 from "../assets/icon/icon_18.png";
import classes from "../styles/Qualitys.module.css";
import Image from "next/image";

function quality() {
  return (
    <div className={classes.container}>
      <div className={classes.qualitys}>
        <div className={classes.quality}>
          <Image className={classes.QImg} src={image1} alt="logo" />
          <h3>Pixel Perfect</h3>
          <p>
            I meticulously craft designs with precision and attention to detail,
            delivering flawless results.
          </p>
        </div>

        <div className={classes.quality}>
          <Image className={classes.QImg} src={image2} alt="logo" />
          <h3>High Quality</h3>
          <p>
            I create visually stunning and impactful designs that exceed
            expectations and leave a lasting impression.
          </p>
        </div>

        <div className={classes.quality}>
          <Image className={classes.QImg} src={image3} alt="logo" />
          <h3>Awesome Idea</h3>
          <p>
            I constantly generate and execute Awesome Ideas, bringing innovation
            and originality to every project.
          </p>
        </div>
        </div>
    </div>
  );
}

export default quality;
