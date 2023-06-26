import classes from "../styles/Portfolio.module.css";

function Portfolio({children}) {
  return (
    <>
      <div className={classes.portfolio}>
        <div className={classes.body}>
          {children}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
