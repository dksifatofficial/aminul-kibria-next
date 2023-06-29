import Image from "next/image";
import image1 from "../assets/icon/icon_02.png";
import image2 from "../assets/icon/icon_06.png";
import BlogBody from "./BlogBody";
import Header from "./Header";

function Blog() {
  return (
    <div
      className="w-full relative mt-[130px] px-4 py-0 lg:mt-[200px] lg:px-20 lg:py-0"
      id="blog"
    >
      <Image
        className="absolute hidden left-0 top-20 lg:block"
        src={image1}
        alt=""
      />
      <Image
        className="absolute top-[-200px] hidden right-0 lg:block"
        src={image2}
        alt=""
      />
      <Header>
        <h3>From My Blog</h3>
        <h2 className="dark:text-gray-100">
          Our Recent Updates, Blog, Tips, Tricks & More
        </h2>
      </Header>
      <BlogBody />
    </div>
  );
}

export default Blog;
