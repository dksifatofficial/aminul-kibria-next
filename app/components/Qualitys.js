import Image from "next/image";
import image1 from "../assets/icon/icon_16.png";
import image2 from "../assets/icon/icon_17.png";
import image3 from "../assets/icon/icon_18.png";

function quality() {
  return (
    <div className="w-full h-auto grid pt-20 pb-8 px-4 lg:pt-20 lg:pb-8 lg:px-24">
      <div className="w-full grid px-0 py-12 lg:flex lg:justify-between lg:pt-20 lg:pb-0 lg:px-0 xl:pt-28 xl:pb-0 xl:px-0">
        <div className="w-full text-center not-italic mb-8 lg:w-[30%] grid justify-items-center">
          <Image className="w-24 h-24 mb-4" src={image1} alt="logo" />
          <h3 className="text-gray-900 dark:text-gray-300">Pixel Perfect</h3>
          <p>
            I meticulously craft designs with precision and attention to detail,
            delivering flawless results.
          </p>
        </div>

        <div className="w-full text-center not-italic mb-8 lg:w-[30%] grid justify-items-center">
          <Image className="w-24 h-24 mb-4" src={image2} alt="logo" />
          <h3 className="text-gray-900 dark:text-gray-300">High Quality</h3>
          <p>
            I create visually stunning and impactful designs that exceed
            expectations and leave a lasting impression.
          </p>
        </div>

        <div className="w-full text-center not-italic mb-8 lg:w-[30%] grid justify-items-center">
          <Image className="w-24 h-24 mb-4" src={image3} alt="logo" />
          <h3 className="text-gray-900 dark:text-gray-300">Awesome Idea</h3>
          <p>
            I constantly generate and execute Awesome Ideas, bringing innovation
            and originality to every project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default quality;
