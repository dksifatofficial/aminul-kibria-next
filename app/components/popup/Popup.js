import { FaXmark } from "react-icons/fa";
import classes from "../../styles/Popup.module.css";

function Popup({ content, handleClose }) {
  return (
    <div className={classes.popupOverlay}>
      <div className={classes.popupContent}>{content}</div>
      <div className={classes.button} onClick={handleClose}>
        <faXmark className={classes.icon} />
      </div>
    </div>
  );
}

export default Popup;
