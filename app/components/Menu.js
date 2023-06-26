import classes from "../styles/Menu.module.css";

function Menu({ className, children, ...rest }) {
  return (
    <div className={classes.portfolioMenu}>
      <ul>{children}</ul>
    </div>
  );
}

export default Menu;
