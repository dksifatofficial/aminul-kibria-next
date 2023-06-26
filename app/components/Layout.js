import classes from "../styles/Layout.module.css";
import Cursor from "./Cursor";
import Footer from "./Footer";
import TotopButton from "./TotopButton";

function Layout({ children }) {
  return (
    <div>
      <main className={classes.main}>
        {children}
      </main>
      <Footer />
      <TotopButton />
      <Cursor />
    </div>
  );
}

export default Layout;
