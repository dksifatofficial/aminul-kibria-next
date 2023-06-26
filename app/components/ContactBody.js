import {FaLocationDot, FaEnvelope, FaPhone} from 'react-icons/fa'
import classes from "../styles/ContactBody.module.css";
import ContactForm from "./ContactForm";

function ContactBody() {
  return (
    <div className={classes.contactBody}>
      <div className={classes.left}>
        <div className={classes.leftSpan}>
          <div className={`${classes.contactLogo} ${classes.addressLogo}`}>
            <FaLocationDot className={classes.logo} />
          </div>
          <div className={classes.contactText}>
            <h3>Address</h3>
            <p>Barishal, Bangladesh</p>
          </div>
        </div>

        <div className={classes.leftSpan}>
          <div className={`${classes.contactLogo} ${classes.emailLogo}`}>
          < FaEnvelope className={classes.logo} />
          </div>
          <div className={classes.contactText}>
            <h3>Email</h3>
            <p className={classes.contactEmail}>a@aminulkibria.com</p>
          </div>
        </div>

        <div className={classes.leftSpan}>
          <div className={`${classes.contactLogo} ${classes.phoneLogo}`}>
          <FaPhone className={classes.logo} />
          </div>
          <div className={classes.contactText}>
            <h3>Phone</h3>
            <p>+880 1722 020182</p>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactBody;
