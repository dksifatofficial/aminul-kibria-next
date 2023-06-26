import classes from "../styles/Blog.module.css";
import BlogBody from "./BlogBody";
import Header from "./Header";
import image1 from '../assets/icon/icon_02.png'
import image2 from '../assets/icon/icon_06.png'

function Blog() {
  return (
    <div className={classes.blogContainer} id="blog">
      <img className={classes.img10} src={image1} alt="" />
      <img className={classes.img11} src={image2} alt="" />
      <Header>
        <h3>From My Blog</h3>
        <h2>Our Recent Updates, Blog, Tips, Tricks & More</h2>
      </Header>
      <BlogBody />
    </div>
  );
}

export default Blog;
