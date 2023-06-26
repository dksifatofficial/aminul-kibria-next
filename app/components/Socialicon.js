import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import classes from "../styles/Socialicon.module.css";

function Socialicon() {
  return (
    <div className={classes.socialIcon}>
      <ul>
        <li>
          <a
            href="https://www.facebook.com/SIFATtheDK"
            rel="noreferrer"
            target="_blank"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Aminulkibria"
            rel="noreferrer"
            target="_blank"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/aminul-kibria-996a20230"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/dksifatofficial?tab=repositories"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socialicon;
