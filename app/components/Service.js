import classes from "../styles/Service.module.css";

function Service({ className, children, ...rest }) {
  return (
    <div className={`${classes.serviceBox} ${className}`} {...rest}>
      <div className={classes.service}>{children}</div>
    </div>
  );
}

export default Service;
