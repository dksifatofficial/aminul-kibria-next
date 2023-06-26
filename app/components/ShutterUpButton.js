import classes from "../styles/ShutterUpButton.module.css";

function ShutterUpButton({ className,children, ...rest}) {
  return (
    <button className={`${classes.shutterUp} ${className}`} {...rest}>
      <span>{children}</span>
    </button>
  );
}

export default ShutterUpButton;
