import classes from "../styles/Header.module.css";

function Header({ className, children, ...rest }) {
  return (
    <div className={`${classes.header} ${className}`} {...rest}>
      {children}
    </div>
  );
}

export default Header;
