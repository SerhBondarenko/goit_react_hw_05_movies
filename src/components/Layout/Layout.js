import { NavLink, Outlet } from "react-router-dom";
import s from "../Layout/styles.module.css";

const satActive = ({ isActive }) => (isActive ? `${s.activeLink}` : `${s.link}`);

const styles = {
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
  marginBottom: "10px"
};

const Layout = () => (
  <>
  <header>
  <nav>
    <NavLink exact="true" to="/" className={satActive}>
      Home
    </NavLink>
    <NavLink to="/movie" className={satActive}>
      Movies
    </NavLink>
  </nav>
  </header>
  <Outlet/>
  <footer style={{
      ...styles}} >2022</footer>
  </>
);
export  {Layout};
