import "./Nav.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import All from "../views/all";
import Active from "../views/Active";
import Completed from "../views/Completed";

function Nav() {
  const location = useLocation();

  return (
    <>
      <ul className="nav">
        <li>
          <Link
            to="/all"
            className={location.pathname === "/all" ? "active" : ""}
          >
            All
          </Link>
        </li>
        <li>
          <Link
            to="/active"
            className={location.pathname === "/active" ? "active" : ""}
          >
            Active
          </Link>
        </li>
        <li>
          <Link
            to="/completed"
            className={location.pathname === "/completed" ? "active" : ""}
          >
            Completed
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/all" element={<All />} />
        <Route path="/active" element={<Active />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </>
  );
}

export default Nav;
