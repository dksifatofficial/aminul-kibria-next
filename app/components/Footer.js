import { Link } from "react-router-dom";
import classes from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={classes.footerContainer}>
      <div className="row">
        <div className={classes.footerLeft}>
          <p>
            Developed with love by{" "}
            <a href="#banner">
              <span>
                <b>Aminul Kibria</b>
              </span>
            </a>{" "}
            © 2023
          </p>
        </div>
        <div className={classes.footerRight}>
          <ul>
            <li>
              <Link to="/TermsCondition">
                <p>Terms & Condition</p>
              </Link>
            </li>
            <li>
              <Link to="/privacyPolicy">
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
