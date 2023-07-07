import Link from "next/link";
import classes from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={classes.footerContainer}>
      <div className="row">
        <div className={classes.footerLeft}>
          <p>
            Developed with love by{" "}
            <Link href="/">
              <span>
                <b>Aminul Kibria</b>
              </span>
            </Link>{" "}
            © 2023
          </p>
        </div>
        <div className={classes.footerRight}>
          <ul>
            <li>
              <Link href="/termscondition">
                <p>Terms & Condition</p>
              </Link>
            </li>
            <li>
              <Link href="/policy">
                <p>Privacy Policy</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
