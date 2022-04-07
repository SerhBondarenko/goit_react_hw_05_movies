import { NavLink } from 'react-router-dom';
import s from "./Navigation.module.css";

const satActive = ({ isActive }) => (isActive ? `${s.activeLink}` : `${s.link}`);

const Navigation = () => (
    <nav className='navigation'>
         <NavLink
      
      to="/goit_react_hw_05_movies/"
      className={satActive}
    >
      Home
    </NavLink>

    <NavLink
      to="/goit_react_hw_05_movies/movies"
      className={satActive}
    >
      Movies
    </NavLink>
        </nav>
);
  

export default Navigation;