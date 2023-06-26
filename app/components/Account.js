import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Account.module.css";

function Account() {
  const { currentUser, logout } = useAuth();
  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span
            className={`${classes.accIcon} material-icons-outlined`}
            title="Account"
          >
            account_circle
          </span>
          <span className={classes.accName}>Hello {" "} {currentUser.displayName}</span>
          <span
            className={`${classes.logOutIcon} material-icons-outlined`}
            title="Logout"
            onClick={logout}
          >
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link className={classes.acc} to="/signup">Signup</Link>
          <Link className={classes.acc} to="/login">Login</Link>
        </>
      )}
    </div>
  );
}

export default Account;
