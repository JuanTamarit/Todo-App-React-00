import "./Nav.css";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import All from "../views/all";
import Active from "../views/Active";
import Completed from "../views/Completed";

function Nav() {
  return (
    <>
      <Link to="/all">All</Link>
      <Link to="/active">Active</Link>
      <Link to="/completed">Completed</Link>
      <Routes>
        <Route path="/all" element={<All />} />
        <Route path="/active" element={<Active />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </>
  );
}

export default Nav;
