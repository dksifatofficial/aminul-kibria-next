import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Socialicon() {
  return (
    <div className="w-48 mt-[-0.7rem] lg:mt-0 lg:ml-0 lg:flex lg:align-middle">
      <ul className="w-full flex ml-[-1.1rem] justify-between lg:ml-0">
        <li className=" flex text-lg">
          <a
            className="text-[rgb(3,104,95)] pt-2 pb-2 hover:text-[rgb(5,148,136)]"
            href="https://www.facebook.com/SIFATtheDK"
            rel="noreferrer"
            target="_blank"
          >
            <FaFacebook />
          </a>
        </li>
        <li className=" flex text-lg">
          <a
            className="text-[rgb(3,104,95)] pt-2 pb-2 hover:text-[rgb(5,148,136)]"
            href="https://twitter.com/Aminulkibria"
            rel="noreferrer"
            target="_blank"
          >
            <FaTwitter />
          </a>
        </li>
        <li className=" flex text-lg">
          <a
            className="text-[rgb(3,104,95)] pt-2 pb-2 hover:text-[rgb(5,148,136)]"
            href="https://www.linkedin.com/in/aminul-kibria-996a20230"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className=" flex text-lg">
          <a
            className="text-[rgb(3,104,95)] pt-2 pb-2 hover:text-[rgb(5,148,136)]"
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
