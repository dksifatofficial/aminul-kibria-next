import classes from "../styles/Client.module.css";

function Client({ children }) {
  return <div className={classes.container}>{children}</div>;
}

export default Client;

// Import Model

//<Client>
//    <img src={client Image} alt="" />
//    <h5>Client Name</h5>
//    <h6>Client Status/Post</h6>
//</Client>
