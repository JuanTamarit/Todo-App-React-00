import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <ul>
        <li>
          <button>All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <Link to="/completed">Completed</Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
