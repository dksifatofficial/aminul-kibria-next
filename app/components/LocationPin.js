import {FaMaterial} from "react-icons/fa";

function LocationPin({ text }) {
  return (
    <div className="pin">
    <FaMaterial />
    <p className="pin-text">{text}</p>
  </div>
  )
}

export default LocationPin