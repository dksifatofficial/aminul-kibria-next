import { FaXing } from "react-icons/fa";

function Popup({ content, handleClose }) {
  return (
    <div className="fixed w-full h-full bg-[rgba(7,7,7,0.9)] z-[9999] flex justify-center items-center left-0 top-0">
      <div className="bg-white w-[800px] h-[500px] overflow-y-scroll ml-10 p-10">
        {content}
      </div>
      <div
        className="mt-[-460px] bg-transparent ml-2.5 border-[none]"
        onClick={handleClose}
      >
        <FaXing
          className="w-10 h-10 text-white text-[40px] transition-all duration-[0.3s] p-2 
        rounded-[10px] border-2 border-solid border-white hover:text-[rgb(238,15,15)] hover:border-[rgb(238,15,15)]"
        />
      </div>
    </div>
  );
}

export default Popup;
