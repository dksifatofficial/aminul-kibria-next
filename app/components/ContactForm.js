import classes from "../styles/ContactForm.module.css";
import ShutterUpButton from "./ShutterUpButton";

function ContactForm() {
  return (
    <>
      <form className={classes.form}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="tel" placeholder="Your Phone" required />
        <input type="text" placeholder="Subject" required />
        <textarea rows="5" placeholder="Write your message here" required />

        <ShutterUpButton
          className={classes.formButton}
          type="submit"
          id="submit-btn"
        >
          <span>Submit Now</span>
        </ShutterUpButton>
      </form>
    </>
  );
}

export default ContactForm;
