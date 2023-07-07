import classes from "../styles/Portfolio.module.css";

function Portfolio({ children }) {
  return (
    <>
      <div className="w-[380px] pb-[15px]">
        <div className={`${classes.body} ${"dark:shadow-none dark:ring-1 dark:ring-white"}`}>
          {children}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
