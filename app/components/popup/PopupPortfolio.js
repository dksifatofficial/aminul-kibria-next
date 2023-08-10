import Image from "next/image";
import Link from "next/link";
import image1 from "../../assets/image/project_013.jpg";

export function PopupPortfolio1() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-auto overflow-hidden rounded-[10px]">
        <Image
          className="w-full h-auto"
          src={image1}
          alt="Decor Whims - Home Decor"
        />
      </div>
      <Link
      className=" text-blue-600 font-bold mt-4 hover:text-blue-500"
        href={"https://www.decorwhims.com/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        Decor Whims - Home Decor
      </Link>
    </div>
  );
}
