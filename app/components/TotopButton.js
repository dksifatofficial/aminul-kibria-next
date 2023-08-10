import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../styles/TotopButton.module.css";

function TotopButton() {
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    var myButton = document.getElementById("myBtn");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      myButton.style.display = "block";
      myButton.style.color = "black";
    } else {
      myButton.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  function scrollToTop() {
    var position =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, position - Math.max(position / 10, 50));
    }
  }

  return (
    <div
      className="hidden fixed z-[99] bg-transparent outline-none 
    cursor-pointer border-[none] right-5 bottom-10 before:bg-transparent 
    hover:bg-transparent hover:before:bg-transparent"
    >
      <button
        onClick={scrollToTop}
        className={classes.totopButton}
        id="myBtn"
        title="Go to top"
      >
        <p className="text-[#f75023] text-xs font-[normal]">
          <FontAwesomeIcon
            className="text-[#f75023] ml-0.5 mb-[5px]"
            icon={faArrowUp}
          />
          GO TOP
        </p>
      </button>
    </div>
  );
}

export default TotopButton;
