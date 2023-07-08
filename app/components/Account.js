import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";

function Account() {
  const { currentUser, logout } = useAuth();
  return (
    <div className="flex gap-2 justify-end items-center mr-[-15px] text-xs w-[200px]">
      {currentUser ? (
        <>
          <span
            className="text-base text-[#111] material-icons-outlined"
            title="Account"
          >
            account_circle
          </span>
          <span className="text-[#f75023]">
            Hello {currentUser.displayName}
          </span>
          <span
            className="text-[15px] text-[#777a8b] hover:text-[15px] 
            hover:text-[#111] material-icons-outlined cursor-pointer"
            title="Logout"
            onClick={logout}
          >
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link className="text-[#111] hover:text-[#f75023]" to="/signup">
            Signup
          </Link>
          <Link className="text-[#111] hover:text-[#f75023]" to="/login">
            Login
          </Link>
        </>
      )}
    </div>
  );
}

export default Account;
